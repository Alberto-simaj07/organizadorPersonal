const courseDefinitions = [
  { id: "admin", name: "Administracion de Empresas - E - 2026", shortName: "Admin. Empresas", grade: "84 / 100", note: "Todo estable" },
  { id: "arq", name: "Arquitectura de Sistemas II - E - 2026", shortName: "Arq. Sistemas II", grade: "79 / 100", note: "Proyecto cerca" },
  { id: "auto", name: "Automatas y Lenguajes - A - 2026", shortName: "Automatas", grade: "73 / 100", note: "Mayor presion" },
  { id: "bd", name: "Bases de Datos III - E - 2026", shortName: "Bases de Datos III", grade: "88 / 100", note: "Buen ritmo" },
  { id: "etica", name: "Etica Profesional - E - 2026", shortName: "Etica Profesional", grade: "91 / 100", note: "Sin riesgo" },
  { id: "ingles", name: "Ingles IV - E - 2026", shortName: "Ingles IV", grade: "86 / 100", note: "Lecturas constantes" },
  { id: "invest", name: "Investigacion de Operaciones - E - 2026", shortName: "Inv. Operaciones", grade: "77 / 100", note: "Carga media" },
  { id: "metodos", name: "Metodos de Investigacion Tecnologica - E - 2026", shortName: "Met. Inv. Tec.", grade: "82 / 100", note: "Entregas cortas" },
  { id: "info", name: "Teoria de la Informacion - E - 2026", shortName: "Teoria de la Info.", grade: "75 / 100", note: "Revisar ejercicios" },
  { id: "sistemas", name: "Teoria de Sistemas - E - 2026", shortName: "Teoria de Sistemas", grade: "89 / 100", note: "Buen cierre" },
];

const academicTasks = [
  { id: 1, courseId: "bd", title: "Script de consultas", dueDate: "2026-03-29", status: "pending", points: "15 pts" },
  { id: 2, courseId: "auto", title: "Practica de automatas", dueDate: "2026-03-27", status: "late", points: "10 pts" },
  { id: 3, courseId: "arq", title: "Diagrama de despliegue", dueDate: "2026-03-28", status: "pending", points: "12 pts" },
  { id: 4, courseId: "ingles", title: "Essay unit 4", dueDate: "2026-03-30", status: "done", points: "8 pts" },
  { id: 5, courseId: "etica", title: "Resumen etico", dueDate: "2026-03-25", status: "done", points: "6 pts" },
  { id: 6, courseId: "invest", title: "Modelo simplex", dueDate: "2026-03-31", status: "pending", points: "14 pts" },
  { id: 7, courseId: "info", title: "Problemas de entropia", dueDate: "2026-03-26", status: "pending", points: "12 pts" },
  { id: 8, courseId: "metodos", title: "Marco metodologico", dueDate: "2026-03-24", status: "done", points: "10 pts" },
  { id: 9, courseId: "admin", title: "Caso de negocio", dueDate: "2026-03-30", status: "pending", points: "10 pts" },
  { id: 10, courseId: "sistemas", title: "Mapa sistemico", dueDate: "2026-03-25", status: "done", points: "8 pts" },
  { id: 11, courseId: "auto", title: "Cuestionario lenguaje", dueDate: "2026-03-31", status: "pending", points: "8 pts" },
  { id: 12, courseId: "bd", title: "Modelo entidad relacion", dueDate: "2026-03-22", status: "done", points: "10 pts" },
  { id: 13, courseId: "arq", title: "Informe de patrones", dueDate: "2026-03-31", status: "pending", points: "10 pts" },
  { id: 14, courseId: "ingles", title: "Vocabulary quiz", dueDate: "2026-03-24", status: "done", points: "5 pts" },
  { id: 15, courseId: "info", title: "Quiz corto", dueDate: "2026-03-24", status: "pending", points: "4 pts" },
];

const categoryColors = {
  comida: "#c6842d",
  transporte: "#2f6470",
  universidad: "#99553f",
  telefono: "#1f6a4f",
  materiales: "#6c5c91",
  ocio: "#b57248",
  ahorro: "#1d5a47",
  otros: "#6f685d",
};

const expenseCategories = [
  { value: "comida", label: "Comida" },
  { value: "transporte", label: "Transporte" },
  { value: "universidad", label: "Universidad" },
  { value: "telefono", label: "Telefono e internet" },
  { value: "materiales", label: "Materiales" },
  { value: "ocio", label: "Ocio" },
  { value: "ahorro", label: "Ahorro" },
  { value: "otros", label: "Otros" },
];

const incomeCategories = [
  { value: "apoyo", label: "Apoyo familiar" },
  { value: "salario", label: "Salario" },
  { value: "freelance", label: "Freelance" },
  { value: "beca", label: "Beca" },
  { value: "reembolso", label: "Reembolso" },
  { value: "venta", label: "Venta" },
  { value: "retiro", label: "Ahorro retirado" },
  { value: "otros", label: "Otro ingreso" },
];

let financeEntries = [
  { id: 1, type: "fixed", name: "Internet Hogar", amount: 220, date: "2026-03-28", category: "telefono", status: "pending", frequency: "mensual", note: "Pago fijo" },
  { id: 2, type: "fixed", name: "Plan telefono", amount: 120, date: "2026-03-30", category: "telefono", status: "pending", frequency: "mensual", note: "Pago fijo" },
  { id: 3, type: "fixed", name: "Mensualidad U", amount: 180, date: "2026-03-31", category: "universidad", status: "pending", frequency: "mensual", note: "Pago fijo" },
  { id: 4, type: "expense", name: "Almuerzo", amount: 35, date: "2026-03-24", category: "comida", status: "posted", note: "Campus" },
  { id: 5, type: "expense", name: "Bus", amount: 8, date: "2026-03-24", category: "transporte", status: "posted", note: "" },
  { id: 6, type: "expense", name: "Impresiones", amount: 24, date: "2026-03-25", category: "materiales", status: "posted", note: "Bases de datos" },
  { id: 7, type: "expense", name: "Cafe", amount: 12, date: "2026-03-26", category: "comida", status: "posted", note: "" },
  { id: 8, type: "expense", name: "Salida corta", amount: 55, date: "2026-03-29", category: "ocio", status: "posted", note: "" },
  { id: 9, type: "income", name: "Ingreso freelance", amount: 420, date: "2026-03-22", category: "otros", status: "posted", source: "Freelance", note: "" },
  { id: 10, type: "income", name: "Apoyo mensual", amount: 1600, date: "2026-03-03", category: "otros", status: "posted", source: "Casa", note: "" },
  { id: 11, type: "expense", name: "Cuaderno", amount: 18, date: "2026-03-30", category: "materiales", status: "posted", note: "" },
  { id: 12, type: "expense", name: "Taxi lluvia", amount: 28, date: "2026-03-31", category: "transporte", status: "posted", note: "" },
];

const ROUTINE_TODAY = "2026-03-24";
const ROUTINE_MONTH = "2026-03";

let routineDefinitions = [
  { id: 1, name: "Arquitectura de Sistemas II", type: "class", note: "Laboratorio", startTime: "07:00", endTime: "08:30", startDate: "2026-03-23", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 2, name: "Teoria de Sistemas", type: "class", note: "", startTime: "11:00", endTime: "12:30", startDate: "2026-03-23", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 3, name: "Bases de Datos III", type: "class", note: "", startTime: "08:45", endTime: "10:15", startDate: "2026-03-24", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 4, name: "Bloque de estudio - Bases de Datos III", type: "study", note: "Repasar consultas", startTime: "10:30", endTime: "11:30", startDate: "2026-03-24", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 5, name: "Ingles IV", type: "class", note: "", startTime: "16:00", endTime: "17:30", startDate: "2026-03-24", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 6, name: "Automatas y Lenguajes", type: "class", note: "", startTime: "07:00", endTime: "08:30", startDate: "2026-03-25", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 7, name: "Investigacion de Operaciones", type: "class", note: "", startTime: "14:00", endTime: "15:30", startDate: "2026-03-25", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 8, name: "Met. Inv. Tec.", type: "class", note: "", startTime: "09:00", endTime: "10:30", startDate: "2026-03-26", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 9, name: "Teoria de la Informacion", type: "class", note: "", startTime: "13:00", endTime: "14:30", startDate: "2026-03-26", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 10, name: "Repaso corto", type: "study", note: "", startTime: "17:00", endTime: "18:00", startDate: "2026-03-26", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 11, name: "Administracion de Empresas", type: "class", note: "", startTime: "08:00", endTime: "09:30", startDate: "2026-03-27", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 12, name: "Etica Profesional", type: "class", note: "", startTime: "10:45", endTime: "12:15", startDate: "2026-03-27", repeat: "weekly", untilDate: "2026-05-31" },
  { id: 13, name: "Gym", type: "habit", note: "Pierna y cardio", startTime: "17:30", endTime: "18:30", startDate: "2026-03-24", repeat: "daily", untilDate: "2026-03-31" },
  { id: 14, name: "Leer 20 min", type: "habit", note: "Antes de dormir", startTime: "21:15", endTime: "21:45", startDate: "2026-03-22", repeat: "daily", untilDate: "2026-03-31" },
];

let routineOccurrenceStatus = {
  "13_2026-03-22": "done",
  "14_2026-03-22": "pending",
  "3_2026-03-24": "done",
  "4_2026-03-24": "pending",
  "13_2026-03-24": "pending",
  "14_2026-03-24": "done",
  "14_2026-03-25": "done",
  "13_2026-03-26": "done",
  "14_2026-03-26": "done",
  "10_2026-03-26": "pending",
  "13_2026-03-29": "pending",
  "14_2026-03-30": "done",
};

const ROUTINE_WEEK_DAYS = [
  { day: "Lunes", shortDay: "Lun", date: "2026-03-23", dateLabel: "23" },
  { day: "Martes", shortDay: "Mar", date: "2026-03-24", dateLabel: "24" },
  { day: "Miercoles", shortDay: "Mie", date: "2026-03-25", dateLabel: "25" },
  { day: "Jueves", shortDay: "Jue", date: "2026-03-26", dateLabel: "26" },
  { day: "Viernes", shortDay: "Vie", date: "2026-03-27", dateLabel: "27" },
  { day: "Sabado", shortDay: "Sab", date: "2026-03-28", dateLabel: "28" },
  { day: "Domingo", shortDay: "Dom", date: "2026-03-29", dateLabel: "29" },
];
const API_BASE =
  window.__ORBIT_API_BASE__ ||
  (["localhost", "127.0.0.1"].includes(window.location.hostname) || window.location.protocol === "file:")
    ? "http://localhost:4000/api"
    : "/api";

const ROUTINE_FETCH_START = "2026-03-01";
const ROUTINE_FETCH_END = "2026-03-31";
let routineOccurrenceLookup = {};

async function apiRequest(path, options = {}) {
  const { method = "GET", body, headers, ...rest } = options;
  const payload = body ? JSON.stringify(body) : undefined;
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    body: payload,
    headers: body
      ? { "Content-Type": "application/json", ...(headers || {}) }
      : headers,
    ...rest,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${message}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

function mapFinanceEntry(entry) {
  return {
    ...entry,
    type: (entry.type || "expense").toLowerCase(),
    status: (entry.status || "pending").toLowerCase(),
    date: entry.date ? entry.date.split("T")[0] : entry.date,
    amount: Number(entry.amount) || 0,
  };
}

function mapAcademicCourse(course) {
  return {
    ...course,
    note: course.note || "",
  };
}

function mapAcademicTask(task) {
  return {
    ...task,
    status: (task.status || "pending").toLowerCase(),
    dueDate: task.dueDate ? task.dueDate.split("T")[0] : task.dueDate,
  };
}

function getRoutineKey(definitionId, date) {
  return `${definitionId}_${date}`;
}

function rebuildRoutineCache(data) {
  routineDefinitions = data.definitions.map((definition) => ({
    id: definition.id,
    name: definition.name,
    type: (definition.type || "habit").toLowerCase(),
    note: definition.note || "",
    startTime: definition.startTime,
    endTime: definition.endTime,
    startDate: definition.startDate,
    repeat: (definition.repeat || "none").toLowerCase(),
    untilDate: definition.untilDate,
  }));

  routineOccurrenceStatus = {};
  routineOccurrenceLookup = {};

  data.occurrences.forEach((occurrence) => {
    const key = getRoutineKey(occurrence.definitionId, occurrence.date);
    routineOccurrenceStatus[key] = (occurrence.status || "pending").toLowerCase();
    routineOccurrenceLookup[key] = occurrence;
  });
}

async function refreshFinanceData() {
  try {
    const payload = await apiRequest('/finances');
    financeEntries = payload.map(mapFinanceEntry);
  } catch (error) {
    console.error('Finance refresh failed', error);
  }
}

async function refreshRoutineData() {
  try {
    const qs = `?start=${ROUTINE_FETCH_START}&end=${ROUTINE_FETCH_END}`;
    const payload = await apiRequest(`/routines${qs}`);
    rebuildRoutineCache(payload);
  } catch (error) {
    console.error('Routine refresh failed', error);
  }
}

async function refreshAcademicData() {
  try {
    const payload = await apiRequest('/academics');
    courseDefinitions = payload.courses.map(mapAcademicCourse);
    academicTasks = payload.tasks.map(mapAcademicTask);
    ensureSelectedAcademicCourse();
  } catch (error) {
    console.error('Academic refresh failed', error);
  }
}

function ensureSelectedAcademicCourse() {
  if (!courseDefinitions.find((course) => course.id === selectedAcademic.courseId)) {
    selectedAcademic.courseId = courseDefinitions[0]?.id || selectedAcademic.courseId;
  }
}

async function loadInitialData() {
  await Promise.all([refreshFinanceData(), refreshRoutineData(), refreshAcademicData()]);
  refreshFinance();
  refreshRoutine();
  renderAcademicSummary();
  renderAcademicTracker();
  renderAcademicDetail();
  renderGrades(dom.academicGrades);
  renderGrades(dom.homeGrades);
  buildHomeTracker();
  renderCombinedTimeline();
}

async function markFinanceEntryAsPaid(entryId) {
  await apiRequest(`/finances/${entryId}`, { method: 'PATCH', body: { status: 'PAID' } });
  await refreshFinanceData();
  refreshFinance();
}

async function removeFinanceEntry(entryId) {
  await apiRequest(`/finances/${entryId}`, { method: 'DELETE' });
  await refreshFinanceData();
  refreshFinance();
}

async function submitRoutineForm(payload) {
  const response = await apiRequest('/routines', { method: 'POST', body: payload });
  rebuildRoutineCache(response);
  refreshRoutine();
}

async function deleteRoutineDefinition(definitionId) {
  await apiRequest(`/routines/${definitionId}`, { method: 'DELETE' });
  await refreshRoutineData();
  refreshRoutine();
}

async function toggleRoutineOccurrence(statusKey) {
  const occurrence = routineOccurrenceLookup[statusKey];
  if (!occurrence) {
    routineOccurrenceStatus[statusKey] = routineOccurrenceStatus[statusKey] === 'done' ? 'pending' : 'done';
    refreshRoutine();
    return;
  }
  const nextStatus = occurrence.status === 'done' ? 'PENDING' : 'DONE';
  const updated = await apiRequest(`/routines/occurrences/${occurrence.occurrenceId}`, {
    method: 'PATCH',
    body: { status: nextStatus },
  });
  const key = getRoutineKey(updated.definitionId, updated.date);
  routineOccurrenceStatus[key] = (updated.status || 'pending').toLowerCase();
  routineOccurrenceLookup[key] = updated;
  refreshRoutine();
}


let selectedAcademic = { courseId: "bd", day: 29 };
let selectedFinanceDate = "2026-03-24";
let routineView = "weekly";
let selectedRoutineDate = "2026-03-24";
let plannerNowTimer = null;
let plannerAutoScrolled = false;
let plannerHourRange = { startHour: 7, endHour: 22 };

const dom = {
  appShell: document.querySelector(".app-shell"),
  navLinks: document.querySelectorAll(".nav-link"),
  homeTracker: document.getElementById("homeTracker"),
  homeRoutineHeadline: document.getElementById("homeRoutineHeadline"),
  homeRoutineCopy: document.getElementById("homeRoutineCopy"),
  homeRoutineList: document.getElementById("homeRoutineList"),
  themeSwitch: document.getElementById("themeSwitch"),
  combinedTimeline: document.getElementById("combinedTimeline"),
  homeCategories: document.getElementById("homeCategories"),
  homeGrades: document.getElementById("homeGrades"),
  academicSummary: document.getElementById("academicSummary"),
  academicTracker: document.getElementById("academicTracker"),
  academicDetailTitle: document.getElementById("academicDetailTitle"),
  academicDetail: document.getElementById("academicDetail"),
  academicGrades: document.getElementById("academicGrades"),
  financeCalendar: document.getElementById("financeCalendar"),
  financeDetailTitle: document.getElementById("financeDetailTitle"),
  financeDetail: document.getElementById("financeDetail"),
  financeCategories: document.getElementById("financeCategories"),
  financeRealBalance: document.getElementById("financeRealBalance"),
  financeCurrentBalance: document.getElementById("financeCurrentBalance"),
  financePendingFixed: document.getElementById("financePendingFixed"),
  financeVariableSpend: document.getElementById("financeVariableSpend"),
  routineSummary: document.getElementById("routineSummary"),
  routineViewSwitch: document.getElementById("routineViewSwitch"),
  routineWeeklyView: document.getElementById("routineWeeklyView"),
  routineMonthlyView: document.getElementById("routineMonthlyView"),
  routineList: document.getElementById("routineList"),
  routineSchedule: document.getElementById("routineSchedule"),
  routineCalendar: document.getElementById("routineCalendar"),
  routineDayDetailTitle: document.getElementById("routineDayDetailTitle"),
  routineDayDetail: document.getElementById("routineDayDetail"),
  openRoutineForm: document.getElementById("openRoutineForm"),
  openRoutineFormMonthly: document.getElementById("openRoutineFormMonthly"),
  routineDialog: document.getElementById("routineDialog"),
  routineForm: document.getElementById("routineForm"),
  routineName: document.getElementById("routineName"),
  routineStartTime: document.getElementById("routineStartTime"),
  routineEndTime: document.getElementById("routineEndTime"),
  routineStartDate: document.getElementById("routineStartDate"),
  routineType: document.getElementById("routineType"),
  routineRepeat: document.getElementById("routineRepeat"),
  routineUntilField: document.getElementById("routineUntilField"),
  routineUntilDate: document.getElementById("routineUntilDate"),
  routineNote: document.getElementById("routineNote"),
  entryDialog: document.getElementById("entryDialog"),
  entryForm: document.getElementById("entryForm"),
  dialogTitle: document.getElementById("dialogTitle"),
  entryType: document.getElementById("entryType"),
  entryDate: document.getElementById("entryDate"),
  entryName: document.getElementById("entryName"),
  entryAmount: document.getElementById("entryAmount"),
  entryCategory: document.getElementById("entryCategory"),
  entryFrequency: document.getElementById("entryFrequency"),
  entrySource: document.getElementById("entrySource"),
  entryNote: document.getElementById("entryNote"),
  frequencyField: document.getElementById("frequencyField"),
  sourceField: document.getElementById("sourceField"),
};

function formatCurrency(value) {
  return `Q ${value.toFixed(2)}`;
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  dom.themeSwitch?.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeValue === theme);
  });
  try {
    localStorage.setItem("orbit-theme", theme);
  } catch {}
}

function getStoredTheme() {
  try {
    return localStorage.getItem("orbit-theme") || "light";
  } catch {
    return "light";
  }
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function statusText(status) {
  return {
    pending: "Pendiente",
    done: "Entregada",
    late: "Vencida",
    fixed: "Movimiento fijo",
    expense: "Movimiento variable",
    income: "Ingreso",
  }[status] || status;
}

function getFinanceCategoryOptions(type) {
  return type === "income" ? incomeCategories : expenseCategories;
}

function populateFinanceCategories(type, selectedValue) {
  const options = getFinanceCategoryOptions(type);
  dom.entryCategory.innerHTML = options
    .map(
      (option) => `<option value="${option.value}" ${option.value === selectedValue ? "selected" : ""}>${option.label}</option>`
    )
    .join("");
}

function getCourseById(courseId) {
  return courseDefinitions.find((course) => course.id === courseId);
}

function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function getMonthDate(day) {
  return `2026-03-${String(day).padStart(2, "0")}`;
}

function getAcademicCellData(courseId, day) {
  const date = getMonthDate(day);
  const items = academicTasks.filter((task) => task.courseId === courseId && task.dueDate === date);

  if (!items.length) return { status: "empty", count: 0, tasks: [] };

  const statuses = items.map((task) => task.status);
  let status = "pending";
  if (statuses.includes("late")) status = "late";
  else if (statuses.includes("pending")) status = "pending";
  else if (statuses.every((item) => item === "done")) status = "done";

  return { status, count: items.length, tasks: items };
}

function getCategoryTotals() {
  const totals = {};
  financeEntries
    .filter((entry) => entry.type === "expense" || entry.type === "fixed")
    .forEach((entry) => {
      totals[entry.category] = (totals[entry.category] || 0) + entry.amount;
    });
  return Object.entries(totals)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
}

function renderCategoryList(container) {
  const totals = getCategoryTotals();
  const max = Math.max(...totals.map((item) => item.amount), 1);

  container.innerHTML = totals
    .map(
      (item) => `
        <article class="category-row">
          <strong>${capitalize(item.category)}</strong>
          <p>${formatCurrency(item.amount)}</p>
          <div class="category-bar">
            <div class="category-fill" style="width: ${(item.amount / max) * 100}%; background: linear-gradient(90deg, ${categoryColors[item.category]}, rgba(181, 127, 56, 0.82));"></div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGrades(container) {
  container.innerHTML = courseDefinitions
    .map(
      (course) => `
        <article class="grade-row">
          <strong>${course.shortName}</strong>
          <p>${course.note}</p>
          <span class="mini-tag">${course.grade}</span>
        </article>
      `
    )
    .join("");
}

function buildHomeTracker() {
  const featuredCourses = ["bd", "auto", "arq", "info"];
  dom.homeTracker.innerHTML = "";

  featuredCourses.forEach((courseId) => {
    const course = getCourseById(courseId);
    const row = document.createElement("div");
    row.className = "mini-track-row";

    const label = document.createElement("div");
    label.className = "mini-track-label";
    label.textContent = course.shortName;
    row.appendChild(label);

    for (let day = 20; day <= 31; day += 1) {
      const cell = document.createElement("span");
      const data = getAcademicCellData(courseId, day);
      cell.className = `mini-track-cell ${data.status}`;
      cell.style.background = {
        empty: "var(--empty)",
        pending: "rgba(214, 140, 47, 0.78)",
        done: "rgba(47, 139, 87, 0.82)",
        late: "rgba(177, 75, 55, 0.82)",
      }[data.status];
      row.appendChild(cell);
    }

    dom.homeTracker.appendChild(row);
  });
}

function renderHomeRoutine() {
  const todayOccurrences = getRoutineOccurrencesForDate(ROUTINE_TODAY);
  const done = todayOccurrences.filter((item) => item.status === "done").length;
  const total = todayOccurrences.length;
  const nextPending = todayOccurrences.find((item) => item.status !== "done");

  dom.homeRoutineHeadline.textContent = `${done} de ${total} bloques cerrados`;
  dom.homeRoutineCopy.textContent = nextPending
    ? `Sigue ${nextPending.name.toLowerCase()} de ${nextPending.startTime} a ${nextPending.endTime}. Si lo cumples, el dia queda bien encaminado.`
    : "Todo lo cargado para hoy ya esta resuelto. Solo toca sostener el ritmo.";

  dom.homeRoutineList.innerHTML = todayOccurrences
    .slice(0, 4)
    .map(
      (item) => `
        <div class="home-routine-row ${item.status === "done" ? "is-done" : ""}">
          <div>
            <strong>${item.name}</strong>
            <p>${getRoutineTypeText(item.type)}</p>
          </div>
          <span class="mini-tag">${item.startTime}</span>
        </div>
      `
    )
    .join("");
}

const monthsShort = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function formatMonthLabel(dateString) {
  if (!dateString) return "";
  const date = parseDateString(dateString);
  return `${date.getDate()} ${monthsShort[date.getMonth()]}`;
}

function renderCombinedTimeline() {
  const todayRoutineItems = getRoutineOccurrencesForDate(ROUTINE_TODAY)
    .slice(0, 2)
    .map((item) => ({
      type: "routine",
      title: item.name,
      meta: `Hoy ${item.startTime}`,
      copy: item.status === "done" ? "Bloque ya cumplido" : "Bloque pendiente en rutina",
    }));

  const upcomingFinances = financeEntries
    .filter((entry) => entry.type !== "income" && entry.date >= ROUTINE_FETCH_START)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2)
    .map((entry) => ({
      type: "finance",
      title: entry.name,
      meta: `${formatMonthLabel(entry.date)} - ${capitalize(entry.category)}`,
      copy: entry.status === "paid" ? "Pago listo" : "Pago pendiente",
    }));

  const upcomingAcademics = academicTasks
    .filter((task) => task.status !== "done")
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 2)
    .map((task) => ({
      type: "academic",
      title: task.title,
      meta: `${getCourseById(task.courseId)?.shortName || ""} - ${formatMonthLabel(task.dueDate)}`,
      copy: task.status === "late" ? "Entrega vencida" : "Entrega programada",
    }));

  const items = [...todayRoutineItems, ...upcomingFinances, ...upcomingAcademics].slice(0, 6);

  if (!items.length) {
    dom.combinedTimeline.innerHTML = `<p class="subcopy">Todo bajo control. Agrega bloque o movimientos para activar el radar.</p>`;
    return;
  }

  dom.combinedTimeline.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-badge ${item.type}"></span>
          <div>
            <strong>${item.title}</strong>
            <p>${item.copy}</p>
          </div>
          <span class="mini-tag">${item.meta}</span>
        </article>
      `
    )
    .join("");
}

function getAcademicSummaryCards() {
  const pending = academicTasks.filter((task) => task.status === "pending").length;
  const late = academicTasks.filter((task) => task.status === "late").length;
  const done = academicTasks.filter((task) => task.status === "done").length;
  const graded = courseDefinitions.filter((course) => course.grade).length;

  return [
    { label: "Pendientes", value: `${pending}`, meta: "Aun en tiempo" },
    { label: "Vencidas", value: `${late}`, meta: "Lo mas delicado" },
    { label: "Entregadas", value: `${done}`, meta: "Moodle las detecta" },
    { label: "Cursos con nota", value: `${graded}`, meta: "Ya visibles abajo" },
  ];
}

function renderAcademicSummary() {
  dom.academicSummary.innerHTML = getAcademicSummaryCards()
    .map(
      (card, index) => `
        <article class="summary-card ${index === 2 ? "summary-card-academic" : ""}">
          <p class="summary-label">${card.label}</p>
          <h3>${card.value}</h3>
          <p class="summary-meta">${card.meta}</p>
        </article>
      `
    )
    .join("");
}

function getPriorityScore(courseId) {
  const tasks = academicTasks.filter((task) => task.courseId === courseId);
  return tasks.reduce((score, task) => {
    if (task.status === "late") return score + 50;
    if (task.status === "pending") return score + 20;
    if (task.status === "done") return score + 3;
    return score;
  }, 0);
}

function renderAcademicTracker() {
  const courses = [...courseDefinitions].sort((a, b) => getPriorityScore(b.id) - getPriorityScore(a.id));
  const days = getDaysInMonth(2026, 2);
  dom.academicTracker.innerHTML = "";

  const head = document.createElement("div");
  head.className = "tracker-head";
  head.textContent = "Curso";
  dom.academicTracker.appendChild(head);

  for (let day = 1; day <= days; day += 1) {
    const label = document.createElement("div");
    label.className = "tracker-day-label";
    label.textContent = day;
    dom.academicTracker.appendChild(label);
  }

  courses.forEach((course) => {
    const courseCell = document.createElement("div");
    courseCell.className = "tracker-course";
    courseCell.innerHTML = `<strong>${course.shortName}</strong><span>${course.note}</span>`;
    dom.academicTracker.appendChild(courseCell);

    for (let day = 1; day <= days; day += 1) {
      const cellData = getAcademicCellData(course.id, day);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tracker-cell ${cellData.status} ${cellData.count > 1 ? "has-count" : ""}`;
      button.dataset.courseId = course.id;
      button.dataset.day = String(day);
      if (cellData.count > 1) button.dataset.count = String(cellData.count);
      if (selectedAcademic.courseId === course.id && selectedAcademic.day === day) {
        button.style.outline = "2px solid rgba(47, 100, 112, 0.72)";
      }
      button.addEventListener("click", () => {
        selectedAcademic = { courseId: course.id, day };
        renderAcademicTracker();
        renderAcademicDetail();
      });
      dom.academicTracker.appendChild(button);
    }
  });
}

function renderAcademicDetail() {
  const course = getCourseById(selectedAcademic.courseId) || { shortName: "Curso", name: "Curso" };
  const date = getMonthDate(selectedAcademic.day);
  const tasks = academicTasks.filter(
    (task) => task.courseId === selectedAcademic.courseId && task.dueDate === date
  );

  dom.academicDetailTitle.textContent = `${course.shortName} - ${selectedAcademic.day} mar`;

  if (!tasks.length) {
    dom.academicDetail.innerHTML = `
      <article class="detail-card">
        <strong>Sin entregas ese dia</strong>
        <p>La celda gris significa que no hubo tarea asociada a ese curso en esa fecha.</p>
      </article>
    `;
    return;
  }

  dom.academicDetail.innerHTML = tasks
    .map(
      (task) => `
        <article class="detail-card">
          <div class="detail-card-header">
            <div>
              <strong>${task.title}</strong>
              <p>${course.name}</p>
            </div>
            <span class="mini-tag">${task.points}</span>
          </div>
          <div class="detail-badges">
            <span class="detail-badge">${statusText(task.status)}</span>
            <span class="detail-badge">Fuente: Moodle</span>
          </div>
          <div class="detail-actions">
            ${task.moodleUrl ? `<a class="mini-button" href="${task.moodleUrl}" target="_blank" rel="noreferrer">Abrir en Moodle</a>` : `<span class="mini-button" aria-disabled="true">Sin enlace</span>`}
            <button class="mini-button">Ver detalle</button>
          </div>

        </article>
      `
    )
    .join("");
}

function getFinanceDays() {
  const firstDay = new Date("2026-03-01T00:00:00");
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = getDaysInMonth(2026, 2);
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) cells.push({ day: null, muted: true });
  for (let day = 1; day <= daysInMonth; day += 1) cells.push({ day, date: getMonthDate(day), muted: false });
  while (cells.length % 7 !== 0) cells.push({ day: null, muted: true });
  return cells;
}

function getEntriesByDate(date) {
  return financeEntries
    .filter((entry) => entry.date === date)
    .sort((a, b) => {
      const typeOrder = { fixed: 0, expense: 1, income: 2 };
      return typeOrder[a.type] - typeOrder[b.type];
    });
}

function computeFinanceOverview() {
  const income = financeEntries.filter((entry) => entry.type === "income").reduce((sum, entry) => sum + entry.amount, 0);
  const expenses = financeEntries.filter((entry) => entry.type === "expense").reduce((sum, entry) => sum + entry.amount, 0);
  const paidFixed = financeEntries
    .filter((entry) => entry.type === "fixed" && entry.status === "paid")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const pendingFixed = financeEntries
    .filter((entry) => entry.type === "fixed" && entry.status !== "paid")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const current = income - expenses - paidFixed;
  const available = current - pendingFixed;
  return { current, available, pendingFixed, variable: expenses };
}

function renderFinanceOverview() {
  const overview = computeFinanceOverview();
  dom.financeCurrentBalance.textContent = formatCurrency(overview.current);
  dom.financePendingFixed.textContent = formatCurrency(overview.pendingFixed);
  dom.financeVariableSpend.textContent = formatCurrency(overview.variable);
  dom.financeRealBalance.textContent = formatCurrency(overview.available);
}

function renderFinanceCalendar() {
  const cells = getFinanceDays();
  const labels = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  dom.financeCalendar.innerHTML = labels.map((label) => `<div class="week-label">${label}</div>`).join("");

  cells.forEach((cell) => {
    const wrapper = document.createElement("button");
    wrapper.type = "button";
    wrapper.className = `finance-day ${cell.muted ? "is-muted" : ""} ${cell.date === selectedFinanceDate ? "is-selected" : ""}`;

    if (!cell.day) {
      wrapper.disabled = true;
      dom.financeCalendar.appendChild(wrapper);
      return;
    }

    const entries = getEntriesByDate(cell.date);
    const totalExpense = entries
      .filter((entry) => entry.type === "expense" || entry.type === "fixed")
      .reduce((sum, entry) => sum + entry.amount, 0);

    wrapper.innerHTML = `
      <div class="finance-day-top">
        <strong>${cell.day}</strong>
        <span class="finance-total">${entries.length ? formatCurrency(totalExpense) : "Libre"}</span>
      </div>
      <div class="finance-marks">
        ${entries
          .slice(0, 4)
          .map((entry) => `<span class="finance-mark ${entry.type} ${entry.status === "paid" ? "paid" : ""}" title="${entry.name}"></span>`)
          .join("")}
        ${entries.length > 4 ? `<span class="mini-tag">+${entries.length - 4}</span>` : ""}
      </div>
    `;

    wrapper.addEventListener("click", () => {
      selectedFinanceDate = cell.date;
      renderFinanceCalendar();
      renderFinanceDetail();
    });

    dom.financeCalendar.appendChild(wrapper);
  });
}

function wireOpenFormButtons(scope = document) {
  scope.querySelectorAll("[data-open-form]").forEach((button) => {
    button.addEventListener("click", () => {
      openEntryDialog(button.dataset.openForm);
    });
  });
}

function renderFinanceDetail() {
  const entries = getEntriesByDate(selectedFinanceDate);
  const [, , day] = selectedFinanceDate.split("-");
  dom.financeDetailTitle.textContent = `${Number(day)} mar`;

  if (!entries.length) {
    dom.financeDetail.innerHTML = `
      <article class="detail-card">
        <strong>Dia libre</strong>
        <p>Aqui puedes agregar un gasto random tocando el calendario o usando los botones de arriba.</p>
        <div class="detail-actions">
          <button class="mini-button success" data-open-form="expense">+ Agregar gasto</button>
        </div>
      </article>
    `;
    wireOpenFormButtons(dom.financeDetail);
    return;
  }

  dom.financeDetail.innerHTML = entries
    .map(
      (entry) => `
        <article class="detail-card">
          <div class="detail-card-header">
            <div>
              <strong>${entry.name}</strong>
              <p>${capitalize(entry.category)} - ${entry.note || statusText(entry.type)}</p>
            </div>
            <span class="mini-tag">${entry.type === "income" ? "+" : ""}${formatCurrency(entry.amount)}</span>
          </div>
          <div class="detail-badges">
            <span class="detail-badge">${entry.type === "fixed" ? "Fijo" : entry.type === "income" ? "Ingreso" : "Gasto"}</span>
            ${entry.type === "fixed" ? `<span class="detail-badge">${entry.status === "paid" ? "Pagado" : "Pendiente"}</span>` : ""}
          </div>
          <div class="detail-actions">
            ${entry.type === "fixed" && entry.status !== "paid" ? `<button class="mini-button success" data-mark-paid="${entry.id}">Marcar pagado</button>` : ""}
            <button class="mini-button" data-delete-entry="${entry.id}">Eliminar</button>
          </div>
        </article>
      `
    )
    .join("");

  dom.financeDetail.querySelectorAll("[data-mark-paid]").forEach((button) => {
    button.addEventListener("click", async () => {
      await markFinanceEntryAsPaid(button.dataset.markPaid);
    });
  });

  dom.financeDetail.querySelectorAll("[data-delete-entry]").forEach((button) => {
    button.addEventListener("click", async () => {
      await removeFinanceEntry(button.dataset.deleteEntry);
    });
  });
}

function refreshFinance() {
  renderFinanceOverview();
  renderFinanceCalendar();
  renderFinanceDetail();
  renderCategoryList(dom.financeCategories);
  renderCategoryList(dom.homeCategories);
}

function getRoutineTypeText(type) {
  return {
    habit: "Habito",
    study: "Estudio",
    class: "Clase",
    personal: "Personal",
  }[type] || type;
}

function parseDateString(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getWeekdayNumber(value) {
  const jsDay = parseDateString(value).getDay();
  return jsDay === 0 ? 7 : jsDay;
}

function isRoutineScheduledOnDate(definition, date) {
  if (date < definition.startDate) return false;
  const untilDate = definition.untilDate || definition.startDate;
  if (date > untilDate) return false;

  if (definition.repeat === "none") return date === definition.startDate;
  if (definition.repeat === "daily") return true;
  if (definition.repeat === "weekly") {
    return getWeekdayNumber(date) === getWeekdayNumber(definition.startDate);
  }

  return false;
}

function getOccurrenceStatus(definitionId, date) {
  return routineOccurrenceStatus[`${definitionId}_${date}`] || "pending";
}

function getRoutineOccurrencesForDate(date) {
  return routineDefinitions
    .filter((definition) => isRoutineScheduledOnDate(definition, date))
    .map((definition) => ({
      occurrenceId: `${definition.id}_${date}`,
      definitionId: definition.id,
      date,
      name: definition.name,
      type: definition.type,
      note: definition.note,
      startTime: definition.startTime,
      endTime: definition.endTime,
      status: getOccurrenceStatus(definition.id, date),
      repeat: definition.repeat,
    }))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
}

function getRoutineOccurrencesForMonth(prefix = ROUTINE_MONTH) {
  const occurrences = [];
  const start = parseDateString(`${prefix}-01`);
  const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${prefix}-${String(day).padStart(2, "0")}`;
    occurrences.push(...getRoutineOccurrencesForDate(date));
  }

  return occurrences;
}

function getRoutineSummaryCards() {
  const todayOccurrences = getRoutineOccurrencesForDate(ROUTINE_TODAY);
  const done = todayOccurrences.filter((item) => item.status === "done").length;
  const pending = todayOccurrences.length - done;
  const classesToday = todayOccurrences.filter((item) => item.type === "class").length;
  const studyBlocks = todayOccurrences.filter((item) => item.type === "study").length;

  return [
    { label: "Completadas", value: `${done}`, meta: "Bloques ya cerrados" },
    { label: "Pendientes", value: `${pending}`, meta: "Todavia activas hoy" },
    { label: "Clases del dia", value: `${classesToday}`, meta: "Horario visible a la derecha" },
    { label: "Bloques de estudio", value: `${studyBlocks}`, meta: "Ritmo academico personal" },
  ];
}

function renderRoutineSummary() {
  dom.routineSummary.innerHTML = getRoutineSummaryCards()
    .map(
      (card, index) => `
        <article class="summary-card ${index === 0 ? "summary-card-academic" : ""}">
          <p class="summary-label">${card.label}</p>
          <h3>${card.value}</h3>
          <p class="summary-meta">${card.meta}</p>
        </article>
      `
    )
    .join("");
}

function renderRoutineList() {
  const todayOccurrences = getRoutineOccurrencesForDate(ROUTINE_TODAY);
  dom.routineList.innerHTML = todayOccurrences
    .map(
      (item) => `
        <article class="routine-item ${item.status === "done" ? "is-done" : ""}">
          <button class="routine-toggle" type="button" data-toggle-routine="${item.occurrenceId}" aria-label="Marcar ${item.name}"></button>
          <div>
            <strong>${item.name}</strong>
            <p>${item.note || "Sin nota extra"}</p>
            <div class="routine-meta">
              <span class="mini-tag">${item.startTime} - ${item.endTime}</span>
              <span class="detail-badge">${getRoutineTypeText(item.type)}</span>
              <span class="detail-badge">${item.repeat === "none" ? "Unica" : item.repeat === "daily" ? "Diaria" : "Semanal"}</span>
            </div>
          </div>
          <button class="mini-button" type="button" data-delete-routine="${item.definitionId}">Eliminar</button>
        </article>
      `
    )
    .join("");

  dom.routineList.querySelectorAll("[data-toggle-routine]").forEach((button) => {
    button.addEventListener("click", () => {
      const occurrenceId = button.dataset.toggleRoutine;
      toggleRoutineOccurrence(occurrenceId).catch((error) => console.error('No se pudo marcar bloque', error));
    });
  });

  dom.routineList.querySelectorAll("[data-delete-routine]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteRoutineDefinition(button.dataset.deleteRoutine).catch((error) => console.error('No se pudo eliminar la rutina', error));
    });
  });
}

function renderRoutineSchedule() {
  const weeklySchedule = ROUTINE_WEEK_DAYS.map((day) => ({
    ...day,
    items: getRoutineOccurrencesForDate(day.date).map((item) => ({
      start: item.startTime,
      end: item.endTime,
      label: item.name,
      type: item.type,
    })),
  }));
  const { startHour, endHour } = getPlannerHourRange(weeklySchedule);
  plannerHourRange = { startHour, endHour };
  const totalSlots = (endHour - startHour) * 4;
  const timeLabels = [];

  for (let hour = startHour; hour <= endHour; hour += 1) {
    timeLabels.push(`${String(hour).padStart(2, "0")}:00`);
  }

  const nowContext = getPlannerNowContext(startHour, endHour);

  const eventCards = weeklySchedule
    .map((day, dayIndex) =>
      day.items
        .map((item) => {
          const startMinutes = timeToMinutes(item.start);
          const endMinutes = timeToMinutes(item.end);
          const rowStart = Math.max(1, Math.floor((startMinutes - startHour * 60) / 15) + 1);
          const rowSpan = Math.max(2, Math.ceil((endMinutes - startMinutes) / 15));
          const column = dayIndex + 2;
          return `
            <article class="planner-event planner-event-${item.type}" style="grid-column:${column}; grid-row:${rowStart} / span ${rowSpan};">
              <strong>${item.label}</strong>
              <p>${item.start} - ${item.end}</p>
            </article>
          `;
        })
        .join("")
    )
    .join("");

  dom.routineSchedule.innerHTML = `
    <div class="weekly-planner">
      <div class="planner-head planner-corner"></div>
      ${weeklySchedule
        .map(
          (day, index) => `
            <div class="planner-head planner-day-head ${nowContext.dayIndex === index ? "is-today" : ""}" data-day-index="${index}" style="grid-column:${index + 2};">
              <span>${day.shortDay}</span>
              <strong>${day.dateLabel}</strong>
            </div>
          `
        )
        .join("")}

      <div class="planner-scroll" id="plannerScroll">
        <div class="planner-grid" style="grid-template-rows: repeat(${totalSlots}, var(--planner-slot-height));">
          <div class="planner-time-column" style="grid-template-rows: repeat(${totalSlots}, var(--planner-slot-height));">
            ${timeLabels
              .map((label, index) => `<span class="planner-time" style="grid-row:${index * 4 + 1} / span 4;">${label}</span>`)
              .join("")}
          </div>
          ${weeklySchedule
            .map(
              (_, index) => `
                <div class="planner-day-column ${nowContext.dayIndex === index ? "is-today" : ""}" data-day-index="${index}" style="grid-column:${index + 2}; grid-row:1 / span ${totalSlots};"></div>
              `
            )
            .join("")}
          ${eventCards}
        </div>
      </div>
    </div>
  `;

  const plannerScroll = dom.routineSchedule.querySelector("#plannerScroll");
  if (plannerScroll) {
    autoScrollPlannerToNow(plannerScroll, nowContext);
    enablePlannerPan(plannerScroll);
  }

  updatePlannerNowIndicator();
  startPlannerNowTimer();
}

function timeToMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function getPlannerHourRange(weeklySchedule) {
  const allItems = weeklySchedule.flatMap((day) => day.items);
  if (!allItems.length) return { startHour: 7, endHour: 22 };

  const earliest = Math.min(...allItems.map((item) => timeToMinutes(item.start)));
  const latest = Math.max(...allItems.map((item) => timeToMinutes(item.end)));
  const startHour = Math.max(0, Math.floor(earliest / 60) - 1);
  const endHour = Math.min(24, Math.ceil(latest / 60) + 1);

  return {
    startHour,
    endHour: Math.max(endHour, startHour + 4),
  };
}

function getPlannerNowContext(startHour, endHour) {
  const now = new Date();
  const fallback = new Date("2026-03-24T14:15:00");
  const reference = Number.isNaN(now.getTime()) ? fallback : now;
  const month = String(reference.getMonth() + 1).padStart(2, "0");
  const day = String(reference.getDate()).padStart(2, "0");
  const currentDate = `${reference.getFullYear()}-${month}-${day}`;
  let dayIndex = ROUTINE_WEEK_DAYS.findIndex((item) => item.date === currentDate);
  if (dayIndex === -1) {
    dayIndex = ROUTINE_WEEK_DAYS.findIndex((item) => item.date === selectedRoutineDate);
  }
  if (dayIndex === -1) dayIndex = 1;

  const totalMinutes = reference.getHours() * 60 + reference.getMinutes();
  const inRange = totalMinutes >= startHour * 60 && totalMinutes <= endHour * 60;
  return {
    dayIndex,
    label: `${String(reference.getHours()).padStart(2, "0")}:${String(reference.getMinutes()).padStart(2, "0")}`,
    lineTop: inRange ? ((totalMinutes - startHour * 60) / 15) * 22 : null,
  };
}

function autoScrollPlannerToNow(container, nowContext) {
  if (nowContext.lineTop === null || plannerAutoScrolled) return;
  const target = Math.max(0, nowContext.lineTop - container.clientHeight * 0.35);
  container.scrollTop = target;
  plannerAutoScrolled = true;
}

function enablePlannerPan(container) {
  if (container.dataset.panBound === "true") return;
  container.dataset.panBound = "true";

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let scrollTop = 0;

  container.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
    container.classList.add("is-dragging");
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    container.scrollLeft = scrollLeft - (event.clientX - startX);
    container.scrollTop = scrollTop - (event.clientY - startY);
  });

  const stopDrag = () => {
    isDragging = false;
    container.classList.remove("is-dragging");
  };

  container.addEventListener("pointerup", stopDrag);
  container.addEventListener("pointercancel", stopDrag);
}

function startPlannerNowTimer() {
  if (plannerNowTimer) return;
  plannerNowTimer = window.setInterval(() => {
    if (routineView === "weekly") {
      updatePlannerNowIndicator();
    }
  }, 60000);
}

function updatePlannerNowIndicator() {
  const nowContext = getPlannerNowContext(plannerHourRange.startHour, plannerHourRange.endHour);
  const dayHeads = dom.routineSchedule.querySelectorAll(".planner-day-head");
  const dayColumns = dom.routineSchedule.querySelectorAll(".planner-day-column");

  dayHeads.forEach((head) => {
    head.classList.toggle("is-today", Number(head.dataset.dayIndex) === nowContext.dayIndex);
  });

  dayColumns.forEach((column) => {
    const isToday = Number(column.dataset.dayIndex) === nowContext.dayIndex;
    column.classList.toggle("is-today", isToday);
    const existing = column.querySelector(".planner-now-line");
    if (existing) existing.remove();

    if (isToday && nowContext.lineTop !== null) {
      const line = document.createElement("div");
      line.className = "planner-now-line";
      line.style.top = `${nowContext.lineTop}px`;
      line.innerHTML = `<span class="planner-now-label">${nowContext.label}</span>`;
      column.appendChild(line);
    }
  });
}

function getRoutineCalendarEntriesByDate(date) {
  return getRoutineOccurrencesForDate(date);
}

function getRoutineDays() {
  const firstDay = new Date("2026-03-01T00:00:00");
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = getDaysInMonth(2026, 2);
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) cells.push({ day: null, muted: true });
  for (let day = 1; day <= daysInMonth; day += 1) cells.push({ day, date: getMonthDate(day), muted: false });
  while (cells.length % 7 !== 0) cells.push({ day: null, muted: true });
  return cells;
}

function renderRoutineCalendar() {
  const labels = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const cells = getRoutineDays();
  dom.routineCalendar.innerHTML = labels.map((label) => `<div class="week-label">${label}</div>`).join("");

  cells.forEach((cell) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `routine-day ${cell.muted ? "is-muted" : ""} ${cell.date === selectedRoutineDate ? "is-selected" : ""}`;

    if (!cell.day) {
      button.disabled = true;
      dom.routineCalendar.appendChild(button);
      return;
    }

    const entries = getRoutineCalendarEntriesByDate(cell.date);
    const doneCount = entries.filter((entry) => entry.status === "done").length;

    button.innerHTML = `
      <div class="routine-day-top">
        <strong>${cell.day}</strong>
        <span class="routine-day-score">${entries.length ? `${doneCount}/${entries.length}` : "Libre"}</span>
      </div>
      <div class="routine-day-marks">
        ${entries
          .slice(0, 5)
          .map((entry) => {
            const markClass =
              entry.type === "class" ? "class" :
              entry.type === "personal" ? "personal" :
              entry.type === "study" ? "study" :
              entry.status;
            return `<span class="routine-mark ${markClass}" title="${entry.name}"></span>`;
          })
          .join("")}
        ${entries.length > 5 ? `<span class="mini-tag">+${entries.length - 5}</span>` : ""}
      </div>
    `;

    button.addEventListener("click", () => {
      selectedRoutineDate = cell.date;
      renderRoutineCalendar();
      renderRoutineDayDetail();
    });

    dom.routineCalendar.appendChild(button);
  });
}

function renderRoutineDayDetail() {
  const entries = getRoutineCalendarEntriesByDate(selectedRoutineDate);
  const [, , day] = selectedRoutineDate.split("-");
  dom.routineDayDetailTitle.textContent = `${Number(day)} mar`;

  if (!entries.length) {
    dom.routineDayDetail.innerHTML = `
      <article class="detail-card">
        <strong>Dia ligero</strong>
        <p>No hay bloques cargados para esta fecha. Puedes usarlo como dia libre o agregar una nueva actividad.</p>
      </article>
    `;
    return;
  }

  dom.routineDayDetail.innerHTML = entries
    .map(
      (entry) => `
        <article class="detail-card">
          <div class="detail-card-header">
            <div>
              <strong>${entry.name}</strong>
              <p>${getRoutineTypeText(entry.type)}</p>
            </div>
            <span class="mini-tag">${entry.status === "done" ? "Hecho" : "Pendiente"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRoutineView() {
  const isWeekly = routineView === "weekly";
  dom.routineWeeklyView.classList.toggle("is-hidden", !isWeekly);
  dom.routineMonthlyView.classList.toggle("is-hidden", isWeekly);
  dom.routineViewSwitch.querySelectorAll("[data-routine-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.routineView === routineView);
  });
}

function refreshRoutine() {
  renderRoutineSummary();
  renderRoutineList();
  renderRoutineSchedule();
  renderRoutineCalendar();
  renderRoutineDayDetail();
  renderRoutineView();
  renderHomeRoutine();
  renderCombinedTimeline();
}

function formatDialogDate(date) {
  const [, , day] = date.split("-");
  return `${Number(day)} mar`;
}

function fallbackName(type, category) {
  if (type === "fixed") return "Nuevo gasto fijo";
  if (type === "income") return "Nuevo ingreso";
  return `Gasto de ${capitalize(category)}`;
}

function openEntryDialog(type, date = selectedFinanceDate) {
  dom.entryForm.reset();
  dom.entryType.value = type;
  dom.entryDate.value = date;
  populateFinanceCategories(type, getFinanceCategoryOptions(type)[0]?.value);
  dom.frequencyField.classList.toggle("is-hidden", type !== "fixed");
  dom.sourceField.classList.toggle("is-hidden", type !== "income");
  dom.dialogTitle.textContent =
    type === "fixed" ? `Nuevo gasto fijo - ${formatDialogDate(date)}` :
    type === "income" ? `Nuevo ingreso - ${formatDialogDate(date)}` :
    `Nuevo gasto - ${formatDialogDate(date)}`;
  dom.entryName.focus();
  dom.entryDialog.showModal();
}

function wireNavigation() {
  dom.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.dataset.target;
      dom.appShell.dataset.view = target;
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-visible"));
      document.querySelector(`#view-${target}`).classList.add("is-visible");
      dom.navLinks.forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
}

function wireThemeToggle() {
  applyTheme(getStoredTheme());
  dom.themeSwitch?.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.themeValue);
    });
  });
}

function wireForm() {
  wireOpenFormButtons(document);

  dom.entryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const type = dom.entryType.value;
    const nameValue = dom.entryName.value.trim();
    const payload = {
      type: type === "fixed" ? "FIXED" : type === "income" ? "INCOME" : "EXPENSE",
      name: nameValue || fallbackName(type, dom.entryCategory.value),
      amount: Number(dom.entryAmount.value) || 0,
      category: dom.entryCategory.value,
      detail: dom.entryNote.value.trim(),
      date: dom.entryDate.value,
      status: type === "fixed" ? "PENDING" : "POSTED",
    };

    if (type === "fixed") payload.frequency = dom.entryFrequency.value.toUpperCase();
    if (type === "income") payload.source = dom.entrySource.value.trim() || "Ingreso manual";

    try {
      await apiRequest('/finances', { method: 'POST', body: payload });
      dom.entryDialog.close();
      selectedFinanceDate = payload.date;
      await refreshFinanceData();
      refreshFinance();
    } catch (error) {
      console.error('No se pudo guardar el movimiento', error);
    }
  });
}

function wireRoutineForm() {
  const openRoutineDialog = () => {
    dom.routineForm.reset();
    dom.routineStartDate.value = selectedRoutineDate || ROUTINE_TODAY;
    dom.routineStartTime.value = "18:00";
    dom.routineEndTime.value = "19:00";
    dom.routineRepeat.value = "none";
    dom.routineUntilDate.value = "2026-05-31";
    dom.routineUntilField.classList.add("is-hidden");
    dom.routineDialog.showModal();
    dom.routineName.focus();
  };

  dom.openRoutineForm.addEventListener("click", openRoutineDialog);
  dom.openRoutineFormMonthly.addEventListener("click", openRoutineDialog);

  dom.routineRepeat.addEventListener("change", () => {
    dom.routineUntilField.classList.toggle("is-hidden", dom.routineRepeat.value === "none");
  });

  dom.routineViewSwitch.querySelectorAll("[data-routine-view]").forEach((button) => {
    button.addEventListener("click", () => {
      routineView = button.dataset.routineView;
      renderRoutineView();
    });
  });

  dom.routineForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (timeToMinutes(dom.routineEndTime.value) <= timeToMinutes(dom.routineStartTime.value)) {
      dom.routineEndTime.focus();
      return;
    }

    const payload = {
      name: dom.routineName.value.trim(),
      startTime: dom.routineStartTime.value,
      endTime: dom.routineEndTime.value,
      startDate: dom.routineStartDate.value,
      type: dom.routineType.value.toUpperCase(),
      note: dom.routineNote.value.trim(),
      repeat: dom.routineRepeat.value.toUpperCase(),
      untilDate:
        dom.routineRepeat.value === "none"
          ? dom.routineStartDate.value
          : dom.routineUntilDate.value || dom.routineStartDate.value,
    };

    try {
      await submitRoutineForm(payload);
      dom.routineDialog.close();
    } catch (error) {
      console.error('No se pudo guardar la rutina', error);
    }
  });
}

function wireDialogClosers() {
  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.closeDialog;
      if (target === "entry") dom.entryDialog?.close();
      if (target === "routine") dom.routineDialog?.close();
    });
  });
}

async function init() {
  wireThemeToggle();
  wireNavigation();
  wireForm();
  wireRoutineForm();
  wireDialogClosers();
  await loadInitialData();
}

init().catch((error) => console.error("Init fallido", error));
