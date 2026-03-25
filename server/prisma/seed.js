import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const financeSeed = [
  { type: "FIXED", name: "Internet Hogar", amount: 220, category: "telefono", detail: "Pago fijo", status: "PENDING", date: "2026-03-28" },
  { type: "FIXED", name: "Plan telefono", amount: 120, category: "telefono", detail: "Pago fijo", status: "PENDING", date: "2026-03-30" },
  { type: "FIXED", name: "Mensualidad U", amount: 180, category: "universidad", detail: "Pago fijo", status: "PENDING", date: "2026-03-31" },
  { type: "EXPENSE", name: "Almuerzo", amount: 35, category: "comida", detail: "Campus", status: "POSTED", date: "2026-03-24" },
  { type: "EXPENSE", name: "Bus", amount: 8, category: "transporte", detail: "", status: "POSTED", date: "2026-03-24" },
  { type: "EXPENSE", name: "Impresiones", amount: 24, category: "materiales", detail: "Bases de datos", status: "POSTED", date: "2026-03-25" },
  { type: "EXPENSE", name: "Cafe", amount: 12, category: "comida", detail: "", status: "POSTED", date: "2026-03-26" },
  { type: "EXPENSE", name: "Salida corta", amount: 55, category: "ocio", detail: "", status: "POSTED", date: "2026-03-29" },
  { type: "INCOME", name: "Ingreso freelance", amount: 420, category: "otros", detail: "Freelance", status: "POSTED", date: "2026-03-22" },
  { type: "INCOME", name: "Apoyo mensual", amount: 1600, category: "otros", detail: "Casa", status: "POSTED", date: "2026-03-03" },
  { type: "EXPENSE", name: "Cuaderno", amount: 18, category: "materiales", detail: "", status: "POSTED", date: "2026-03-30" },
  { type: "EXPENSE", name: "Taxi lluvia", amount: 28, category: "transporte", detail: "", status: "POSTED", date: "2026-03-31" },
];

const coursesSeed = [
  { code: "admin", name: "Administracion de Empresas - E - 2026", shortName: "Admin. Empresas", grade: "84 / 100", note: "Todo estable" },
  { code: "arq", name: "Arquitectura de Sistemas II - E - 2026", shortName: "Arq. Sistemas II", grade: "79 / 100", note: "Proyecto cerca" },
  { code: "auto", name: "Automatas y Lenguajes - A - 2026", shortName: "Automatas", grade: "73 / 100", note: "Mayor presion" },
  { code: "bd", name: "Bases de Datos III - E - 2026", shortName: "Bases de Datos III", grade: "88 / 100", note: "Buen ritmo" },
  { code: "etica", name: "Etica Profesional - E - 2026", shortName: "Etica Profesional", grade: "91 / 100", note: "Sin riesgo" },
  { code: "ingles", name: "Ingles IV - E - 2026", shortName: "Ingles IV", grade: "86 / 100", note: "Lecturas constantes" },
  { code: "invest", name: "Investigacion de Operaciones - E - 2026", shortName: "Inv. Operaciones", grade: "77 / 100", note: "Carga media" },
  { code: "metodos", name: "Metodos de Investigacion Tecnologica - E - 2026", shortName: "Met. Inv. Tec.", grade: "82 / 100", note: "Entregas cortas" },
  { code: "info", name: "Teoria de la Informacion - E - 2026", shortName: "Teoria de la Info.", grade: "75 / 100", note: "Revisar ejercicios" },
  { code: "sistemas", name: "Teoria de Sistemas - E - 2026", shortName: "Teoria de Sistemas", grade: "89 / 100", note: "Buen cierre" },
];

const academicTasksSeed = [
  { courseCode: "bd", title: "Script de consultas", dueDate: "2026-03-29", status: "PENDING", points: "15 pts", moodleUrl: "https://moodle.example.com/bd/script" },
  { courseCode: "auto", title: "Practica de automatas", dueDate: "2026-03-27", status: "LATE", points: "10 pts", moodleUrl: "https://moodle.example.com/auto/practica" },
  { courseCode: "arq", title: "Diagrama de despliegue", dueDate: "2026-03-28", status: "PENDING", points: "12 pts", moodleUrl: "https://moodle.example.com/arq/diagrama" },
  { courseCode: "ingles", title: "Essay unit 4", dueDate: "2026-03-30", status: "DONE", points: "8 pts", moodleUrl: "https://moodle.example.com/ingles/essay" },
  { courseCode: "etica", title: "Resumen etico", dueDate: "2026-03-25", status: "DONE", points: "6 pts", moodleUrl: "https://moodle.example.com/etica/resumen" },
  { courseCode: "invest", title: "Modelo simplex", dueDate: "2026-03-31", status: "PENDING", points: "14 pts", moodleUrl: "https://moodle.example.com/invest/modelo" },
  { courseCode: "info", title: "Problemas de entropia", dueDate: "2026-03-26", status: "PENDING", points: "12 pts", moodleUrl: "https://moodle.example.com/info/entropia" },
  { courseCode: "metodos", title: "Marco metodologico", dueDate: "2026-03-24", status: "DONE", points: "10 pts", moodleUrl: "https://moodle.example.com/metodos/marco" },
  { courseCode: "admin", title: "Caso de negocio", dueDate: "2026-03-30", status: "PENDING", points: "10 pts", moodleUrl: "https://moodle.example.com/admin/caso" },
  { courseCode: "sistemas", title: "Mapa sistemico", dueDate: "2026-03-25", status: "DONE", points: "8 pts", moodleUrl: "https://moodle.example.com/sistemas/mapa" },
  { courseCode: "auto", title: "Cuestionario lenguaje", dueDate: "2026-03-31", status: "PENDING", points: "8 pts", moodleUrl: "https://moodle.example.com/auto/cuestionario" },
  { courseCode: "bd", title: "Modelo entidad relacion", dueDate: "2026-03-22", status: "DONE", points: "10 pts", moodleUrl: "https://moodle.example.com/bd/er" },
  { courseCode: "arq", title: "Informe de patrones", dueDate: "2026-03-31", status: "PENDING", points: "10 pts", moodleUrl: "https://moodle.example.com/arq/patrones" },
  { courseCode: "ingles", title: "Vocabulary quiz", dueDate: "2026-03-24", status: "DONE", points: "5 pts", moodleUrl: "https://moodle.example.com/ingles/quiz" },
  { courseCode: "info", title: "Quiz corto", dueDate: "2026-03-24", status: "PENDING", points: "4 pts", moodleUrl: "https://moodle.example.com/info/quiz" },
];

const routinesSeed = [
  { name: "Arquitectura de Sistemas II", type: "CLASS", note: "Laboratorio", startTime: "07:00", endTime: "08:30", startDate: "2026-03-23", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Teoria de Sistemas", type: "CLASS", note: "", startTime: "11:00", endTime: "12:30", startDate: "2026-03-23", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Bases de Datos III", type: "CLASS", note: "", startTime: "08:45", endTime: "10:15", startDate: "2026-03-24", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Bloque de estudio - Bases de Datos III", type: "STUDY", note: "Repasar consultas", startTime: "10:30", endTime: "11:30", startDate: "2026-03-24", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Ingles IV", type: "CLASS", note: "", startTime: "16:00", endTime: "17:30", startDate: "2026-03-24", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Automatas y Lenguajes", type: "CLASS", note: "", startTime: "07:00", endTime: "08:30", startDate: "2026-03-25", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Investigacion de Operaciones", type: "CLASS", note: "", startTime: "14:00", endTime: "15:30", startDate: "2026-03-25", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Met. Inv. Tec.", type: "CLASS", note: "", startTime: "09:00", endTime: "10:30", startDate: "2026-03-26", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Teoria de la Informacion", type: "CLASS", note: "", startTime: "13:00", endTime: "14:30", startDate: "2026-03-26", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Repaso corto", type: "STUDY", note: "", startTime: "17:00", endTime: "18:00", startDate: "2026-03-26", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Administracion de Empresas", type: "CLASS", note: "", startTime: "08:00", endTime: "09:30", startDate: "2026-03-27", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Etica Profesional", type: "CLASS", note: "", startTime: "10:45", endTime: "12:15", startDate: "2026-03-27", repeat: "WEEKLY", untilDate: "2026-05-31" },
  { name: "Gym", type: "HABIT", note: "Pierna y cardio", startTime: "17:30", endTime: "18:30", startDate: "2026-03-24", repeat: "DAILY", untilDate: "2026-03-31" },
  { name: "Leer 20 min", type: "HABIT", note: "Antes de dormir", startTime: "21:15", endTime: "21:45", startDate: "2026-03-22", repeat: "DAILY", untilDate: "2026-03-31" },
];

function getDateRange(definition) {
  const start = new Date(definition.startDate);
  const end = new Date(definition.untilDate || definition.startDate);
  const dates = [];
  let cursor = new Date(start);

  while (cursor <= end) {
    const matches =
      definition.repeat === "DAILY" ||
      (definition.repeat === "WEEKLY" && cursor.getDay() === start.getDay()) ||
      (definition.repeat === "NONE" && cursor.getTime() === start.getTime());
    if (matches) {
      dates.push(formatDate(cursor));
      if (definition.repeat === "NONE") break;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}


function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "you@orbit.app" },
    update: { name: "Usuario Orbit" },
    create: { name: "Usuario Orbit", email: "you@orbit.app" },
  });

  await prisma.financeEntry.deleteMany({ where: { userId: user.id } });
  await prisma.routineOccurrence.deleteMany({ where: { routine: { userId: user.id } } });
  await prisma.routineDefinition.deleteMany({ where: { userId: user.id } });
  await prisma.academicTask.deleteMany({ where: { course: { userId: user.id } } });
  await prisma.academicCourse.deleteMany({ where: { userId: user.id } });

  for (const entry of financeSeed) {
    await prisma.financeEntry.create({
      data: {
        userId: user.id,
        type: entry.type,
        name: entry.name,
        amount: entry.amount,
        category: entry.category,
        detail: entry.detail,
        date: new Date(entry.date),
        status: entry.status,
      },
    });
  }

  const courseLookup = {};
  for (const course of coursesSeed) {
    const record = await prisma.academicCourse.create({
      data: {
        userId: user.id,
        name: course.name,
        shortName: course.shortName,
        grade: course.grade,
        note: course.note,
      },
    });
    courseLookup[course.code] = record.id;
  }

  for (const task of academicTasksSeed) {
    await prisma.academicTask.create({
      data: {
        courseId: courseLookup[task.courseCode],
        title: task.title,
        dueDate: new Date(task.dueDate),
        status: task.status.toUpperCase(),
        points: task.points,
        moodleUrl: task.moodleUrl,
      },
    });
  }

  for (const definition of routinesSeed) {
    const created = await prisma.routineDefinition.create({
      data: {
        userId: user.id,
        name: definition.name,
        type: definition.type,
        note: definition.note,
        startTime: definition.startTime,
        endTime: definition.endTime,
        startDate: new Date(definition.startDate),
        repeat: definition.repeat,
        untilDate: new Date(definition.untilDate),
      },
    });

    const dates = getDateRange({
      startDate: definition.startDate,
      untilDate: definition.untilDate,
      repeat: definition.repeat,
    });

    if (dates.length) {
      await prisma.routineOccurrence.createMany({
        data: dates.map((date) => ({
          date: new Date(date),
          routineId: created.id,
          status: date === definition.startDate ? "DONE" : "PENDING",
        })),
      });
    }
  }

  console.log("Seed completado");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
