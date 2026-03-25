import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const PORT = Number(process.env.PORT) || 4000;
const DEFAULT_USER_EMAIL = process.env.DEFAULT_USER_EMAIL || "you@orbit.app";

app.use(cors());
app.use(express.json());

async function getDefaultUser() {
  let user = await prisma.user.findUnique({ where: { email: DEFAULT_USER_EMAIL } });
  if (!user) {
    user = await prisma.user.create({ data: { name: "Usuario Orbit", email: DEFAULT_USER_EMAIL } });
  }
  return user;
}

function parseDate(value, fallback) {
  if (!value) return fallback;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date;
}

function formatDate(value) {
  const date = new Date(value);
  return date.toISOString().split("T")[0];
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getDatesInRange(definition) {
  const start = parseDate(definition.startDate, new Date());
  const until = parseDate(definition.untilDate, start);
  const dates = [];
  let cursor = new Date(start);

  while (cursor <= until) {
    const weekdayMatch =
      definition.repeat === "DAILY" ||
      (definition.repeat === "WEEKLY" && cursor.getDay() === start.getDay()) ||
      (definition.repeat === "NONE" && cursor.getTime() === start.getTime());

    if (weekdayMatch) {
      dates.push(formatDate(cursor));
      if (definition.repeat === "NONE") break;
    }
    cursor = addDays(cursor, 1);
  }

  return dates;
}

function normalizeOccurrence(occurrence) {
  return {
    occurrenceId: occurrence.id,
    definitionId: occurrence.routineId,
    name: occurrence.routine.name,
    type: occurrence.routine.type,
    note: occurrence.routine.note,
    startTime: occurrence.routine.startTime,
    endTime: occurrence.routine.endTime,
    repeat: occurrence.routine.repeat,
    date: formatDate(occurrence.date),
    status: (occurrence.status || "PENDING").toLowerCase(),
  };
}

function normalizeFinanceEntry(entry) {
  return {
    id: entry.id,
    type: entry.type,
    name: entry.name,
    amount: entry.amount,
    category: entry.category,
    detail: entry.detail,
    status: entry.status,
    date: formatDate(entry.date),
  };
}

app.get("/api/finances", async (req, res) => {
  const user = await getDefaultUser();
  const entries = await prisma.financeEntry.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
  });
  res.json(entries.map(normalizeFinanceEntry));
});

app.post("/api/finances", async (req, res) => {
  const user = await getDefaultUser();
  const { type, name, amount, category, detail, date, status } = req.body;
  const parsedDate = parseDate(date, new Date());
  const entry = await prisma.financeEntry.create({
    data: {
      userId: user.id,
      type: (type || "EXPENSE").toUpperCase(),
      name,
      amount: Number(amount),
      category,
      detail,
      date: parsedDate,
      status: (status || "POSTED").toUpperCase(),
    },
  });
  res.status(201).json(normalizeFinanceEntry(entry));
});

app.patch("/api/finances/:id", async (req, res) => {
  const user = await getDefaultUser();
  const { status } = req.body;
  const safeStatus = status ? status.toUpperCase() : undefined;
  const existing = await prisma.financeEntry.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== user.id) {
    return res.status(404).json({ error: "Registro no encontrado" });
  }
  const updated = await prisma.financeEntry.update({
    where: { id: req.params.id },
    data: {
      ...(safeStatus ? { status: safeStatus } : {}),
    },
  });
  res.json(normalizeFinanceEntry(updated));
});

app.delete("/api/finances/:id", async (req, res) => {
  const user = await getDefaultUser();
  const existing = await prisma.financeEntry.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== user.id) {
    return res.status(404).end();
  }
  await prisma.financeEntry.delete({ where: { id: req.params.id } });
  res.status(204).end();
});

app.get("/api/routines", async (req, res) => {
  const user = await getDefaultUser();
  const start = parseDate(req.query.start, new Date());
  const end = parseDate(req.query.end, addDays(start, 30));

  const definitions = await prisma.routineDefinition.findMany({ where: { userId: user.id } });
  const occurrences = await prisma.routineOccurrence.findMany({
    where: {
      routine: { userId: user.id },
      date: {
        gte: start,
        lte: end,
      },
    },
    include: { routine: true },
    orderBy: { date: "asc" },
  });

  res.json({
    definitions: definitions.map((definition) => ({
      id: definition.id,
      name: definition.name,
      type: definition.type,
      note: definition.note,
      startTime: definition.startTime,
      endTime: definition.endTime,
      startDate: formatDate(definition.startDate),
      repeat: definition.repeat,
      untilDate: definition.untilDate ? formatDate(definition.untilDate) : null,
    })),
    occurrences: occurrences.map(normalizeOccurrence),
  });
});

app.post("/api/routines", async (req, res) => {
  const user = await getDefaultUser();
  const { name, type, note, startTime, endTime, startDate, repeat, untilDate } = req.body;
  const parsedStart = parseDate(startDate, new Date());
  const parsedUntil = parseDate(untilDate, parsedStart);
  const definition = await prisma.routineDefinition.create({
    data: {
      userId: user.id,
      name,
      type: (type || "habit").toUpperCase(),
      note,
      startTime,
      endTime,
      startDate: parsedStart,
      repeat: (repeat || "none").toUpperCase(),
      untilDate: repeat === "NONE" ? parsedStart : parsedUntil,
    },
  });

  const dates = getDatesInRange(definition);
  if (dates.length) {
    await prisma.routineOccurrence.createMany({
      data: dates.map((date) => ({
        date: new Date(date),
        routineId: definition.id,
      })),
    });
  }

  const occurrences = await prisma.routineOccurrence.findMany({
    where: { routineId: definition.id },
    include: { routine: true },
    orderBy: { date: "asc" },
  });

  res.status(201).json({
    definitions: [
      {
        id: definition.id,
        name: definition.name,
        type: definition.type,
        note: definition.note,
        startTime: definition.startTime,
        endTime: definition.endTime,
        startDate: formatDate(definition.startDate),
        repeat: definition.repeat,
        untilDate: definition.untilDate ? formatDate(definition.untilDate) : null,
      },
    ],
    occurrences: occurrences.map(normalizeOccurrence),
  });
});

app.patch("/api/routines/occurrences/:id", async (req, res) => {
  const user = await getDefaultUser();
  const occurrence = await prisma.routineOccurrence.findUnique({
    where: { id: req.params.id },
    include: { routine: true },
  });
  if (!occurrence || occurrence.routine.userId !== user.id) {
    return res.status(404).json({ error: "No encontrado" });
  }
  const nextStatus = (req.body.status || occurrence.status).toUpperCase();
  const updated = await prisma.routineOccurrence.update({
    where: { id: req.params.id },
    data: { status: nextStatus },
    include: { routine: true },
  });
  res.json(normalizeOccurrence(updated));
});

app.delete("/api/routines/:id", async (req, res) => {
  const user = await getDefaultUser();
  const definition = await prisma.routineDefinition.findUnique({ where: { id: req.params.id } });
  if (!definition || definition.userId !== user.id) {
    return res.status(404).end();
  }
  await prisma.routineOccurrence.deleteMany({ where: { routineId: definition.id } });
  await prisma.routineDefinition.delete({ where: { id: definition.id } });
  res.status(204).end();
});

app.get("/api/academics", async (req, res) => {
  const user = await getDefaultUser();
  const courses = await prisma.academicCourse.findMany({
    where: { userId: user.id },
    include: { tasks: true },
  });
  const payloadCourses = courses.map((course) => ({
    id: course.id,
    name: course.name,
    shortName: course.shortName,
    grade: course.grade,
    note: course.note,
    moodleId: course.moodleId,
  }));
  const payloadTasks = courses.flatMap((course) =>
    course.tasks.map((task) => ({
      id: task.id,
      courseId: course.id,
      title: task.title,
      dueDate: formatDate(task.dueDate),
      status: task.status,
      points: task.points,
      moodleUrl: task.moodleUrl,
      updatedAt: task.updatedAt,
    }))
  );
  res.json({ courses: payloadCourses, tasks: payloadTasks });
});

app.patch("/api/academics/tasks/:id", async (req, res) => {
  const user = await getDefaultUser();
  const task = await prisma.academicTask.findUnique({
    where: { id: req.params.id },
    include: { course: true },
  });
  if (!task || task.course.userId !== user.id) {
    return res.status(404).json({ error: "No encontrado" });
  }
  const nextStatus = (req.body.status || task.status).toUpperCase();
  const updated = await prisma.academicTask.update({
    where: { id: task.id },
    data: { status: nextStatus },
  });
  res.json({
    id: updated.id,
    courseId: updated.courseId,
    title: updated.title,
    dueDate: formatDate(updated.dueDate),
    status: updated.status,
    points: updated.points,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
