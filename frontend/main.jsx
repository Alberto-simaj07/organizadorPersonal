import React, { useEffect, useMemo, useState } from 'https://esm.sh/react@18.2.0';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';

const API_BASE =
  window.__ORBIT_API_BASE__ ||
  (['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:')
    ? 'http://localhost:4000/api'
    : '/api';

const ROUTINE_TODAY = '2026-03-24';
const ROUTINE_WEEK_DAYS = [
  { day: 'Lunes', shortDay: 'Lun', date: '2026-03-23', dateLabel: '23' },
  { day: 'Martes', shortDay: 'Mar', date: '2026-03-24', dateLabel: '24' },
  { day: 'Miercoles', shortDay: 'Mie', date: '2026-03-25', dateLabel: '25' },
  { day: 'Jueves', shortDay: 'Jue', date: '2026-03-26', dateLabel: '26' },
  { day: 'Viernes', shortDay: 'Vie', date: '2026-03-27', dateLabel: '27' },
  { day: 'Sabado', shortDay: 'Sab', date: '2026-03-28', dateLabel: '28' },
  { day: 'Domingo', shortDay: 'Dom', date: '2026-03-29', dateLabel: '29' },
];

const categoryColors = {
  comida: '#c6842d',
  transporte: '#2f6470',
  universidad: '#99553f',
  telefono: '#1f6a4f',
  materiales: '#6c5c91',
  ocio: '#b57248',
  ahorro: '#1d5a47',
  otros: '#6f685d',
};

const initialCourseDefinitions = [
  { id: 'admin', name: 'Administracion de Empresas - E - 2026', shortName: 'Admin. Empresas', grade: '84 / 100', note: 'Todo estable' },
  { id: 'arq', name: 'Arquitectura de Sistemas II - E - 2026', shortName: 'Arq. Sistemas II', grade: '79 / 100', note: 'Proyecto cerca' },
  { id: 'auto', name: 'Automatas y Lenguajes - A - 2026', shortName: 'Automatas', grade: '73 / 100', note: 'Mayor presion' },
  { id: 'bd', name: 'Bases de Datos III - E - 2026', shortName: 'Bases de Datos III', grade: '88 / 100', note: 'Buen ritmo' },
  { id: 'etica', name: 'Etica Profesional - E - 2026', shortName: 'Etica Profesional', grade: '91 / 100', note: 'Sin riesgo' },
  { id: 'ingles', name: 'Ingles IV - E - 2026', shortName: 'Ingles IV', grade: '86 / 100', note: 'Lecturas constantes' },
  { id: 'invest', name: 'Investigacion de Operaciones - E - 2026', shortName: 'Inv. Operaciones', grade: '77 / 100', note: 'Carga media' },
  { id: 'metodos', name: 'Metodos de Investigacion Tecnologica - E - 2026', shortName: 'Met. Inv. Tec.', grade: '82 / 100', note: 'Entregas cortas' },
  { id: 'info', name: 'Teoria de la Informacion - E - 2026', shortName: 'Teoria de la Info.', grade: '75 / 100', note: 'Revisar ejercicios' },
  { id: 'sistemas', name: 'Teoria de Sistemas - E - 2026', shortName: 'Teoria de Sistemas', grade: '89 / 100', note: 'Buen cierre' },
];

const initialAcademicTasks = [
  { id: 1, courseId: 'bd', title: 'Script de consultas', dueDate: '2026-03-29', status: 'pending', points: '15 pts' },
  { id: 2, courseId: 'auto', title: 'Practica de automatas', dueDate: '2026-03-27', status: 'late', points: '10 pts' },
  { id: 3, courseId: 'arq', title: 'Diagrama de despliegue', dueDate: '2026-03-28', status: 'pending', points: '12 pts' },
  { id: 4, courseId: 'ingles', title: 'Essay unit 4', dueDate: '2026-03-30', status: 'done', points: '8 pts' },
  { id: 5, courseId: 'etica', title: 'Resumen etico', dueDate: '2026-03-25', status: 'done', points: '6 pts' },
  { id: 6, courseId: 'invest', title: 'Modelo simplex', dueDate: '2026-03-31', status: 'pending', points: '14 pts' },
  { id: 7, courseId: 'info', title: 'Problemas de entropia', dueDate: '2026-03-26', status: 'pending', points: '12 pts' },
  { id: 8, courseId: 'metodos', title: 'Marco metodologico', dueDate: '2026-03-24', status: 'done', points: '10 pts' },
  { id: 9, courseId: 'admin', title: 'Caso de negocio', dueDate: '2026-03-30', status: 'pending', points: '10 pts' },
  { id: 10, courseId: 'sistemas', title: 'Mapa sistemico', dueDate: '2026-03-25', status: 'done', points: '8 pts' },
  { id: 11, courseId: 'auto', title: 'Cuestionario lenguaje', dueDate: '2026-03-31', status: 'pending', points: '8 pts' },
  { id: 12, courseId: 'bd', title: 'Modelo entidad relacion', dueDate: '2026-03-22', status: 'done', points: '10 pts' },
  { id: 13, courseId: 'arq', title: 'Informe de patrones', dueDate: '2026-03-31', status: 'pending', points: '10 pts' },
  { id: 14, courseId: 'ingles', title: 'Vocabulary quiz', dueDate: '2026-03-24', status: 'done', points: '5 pts' },
  { id: 15, courseId: 'info', title: 'Quiz corto', dueDate: '2026-03-24', status: 'pending', points: '4 pts' },
];

const initialFinanceEntries = [
  { id: 1, type: 'fixed', name: 'Internet Hogar', amount: 220, date: '2026-03-28', category: 'telefono', status: 'pending' },
  { id: 2, type: 'fixed', name: 'Mensualidad U', amount: 180, date: '2026-03-31', category: 'universidad', status: 'pending' },
  { id: 3, type: 'expense', name: 'Almuerzo', amount: 35, date: '2026-03-24', category: 'comida', status: 'posted' },
  { id: 4, type: 'expense', name: 'Bus', amount: 8, date: '2026-03-24', category: 'transporte', status: 'posted' },
  { id: 5, type: 'income', name: 'Apoyo mensual', amount: 1600, date: '2026-03-03', category: 'otros', status: 'posted' },
];

const routineDays = [
  { date: '2026-03-24', name: 'Bloque de estudio', detail: 'Bases de Datos III', status: 'done' },
  { date: '2026-03-24', name: 'Clase: Ingles IV', detail: 'Campus', status: 'pending' },
  { date: '2026-03-24', name: 'Gym', detail: 'Pierna & cardio', status: 'pending' },
];

const formatCurrency = (value) => `Q ${Number(value ?? 0).toFixed(2)}`;

const statusLabel = (status) => {
  if (status === 'done') return 'Hecho';
  if (status === 'late') return 'Vencida';
  return 'Pendiente';
};

const App = () => {
  const [view, setView] = useState('home');
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('orbit-theme') || 'light';
    } catch {
      return 'light';
    }
  });

  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseDefinitions[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-03-24');

  useEffect(() => {
    document.body.dataset.theme = theme;
    try {
      localStorage.setItem('orbit-theme', theme);
    } catch {}
  }, [theme]);

  const academicSummary = useMemo(() => {
    const pending = initialAcademicTasks.filter((task) => task.status !== 'done').length;
    const done = initialAcademicTasks.filter((task) => task.status === 'done').length;
    const next = initialAcademicTasks
      .filter((task) => task.status !== 'done')
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0];
    return { pending, done, next };
  }, []);

  const financeSummary = useMemo(() => {
    const balance = initialFinanceEntries.reduce(
      (sum, entry) => sum + (entry.type === 'income' ? entry.amount : -entry.amount),
      0
    );
    const upcoming = initialFinanceEntries
      .filter((entry) => entry.type === 'fixed' && entry.status !== 'posted')
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
    return { balance, upcoming };
  }, []);

  const categoryTotals = useMemo(() => {
    const totals = initialFinanceEntries.reduce((acc, entry) => {
      if (entry.type !== 'expense') return acc;
      acc[entry.category] = (acc[entry.category] || 0) + entry.amount;
      return acc;
    }, {});
    return Object.entries(totals).map(([key, total]) => ({ key, total }));
  }, []);

  const filteredTasks = initialAcademicTasks.filter((task) => task.courseId === selectedCourseId);
  const dayOccurrences = routineDays.filter((day) => day.date === selectedDate);

  return (
    <div className="app-shell" data-view={view}>
      <aside className="sidebar">
        <div className="brand">
          <p className="brand-kicker">Centro personal</p>
          <h1>Orbit</h1>
          <p className="brand-copy">Estudio y dinero en una sola rutina</p>
        </div>
        <nav className="nav">
          {[
            { label: 'Inicio', key: 'home' },
            { label: 'Academico', key: 'academic' },
            { label: 'Rutina', key: 'routine' },
            { label: 'Finanzas', key: 'finance' },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav-link ${view === item.key ? 'is-active' : ''}`}
              onClick={() => setView(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <section className="sidebar-card theme-card">
          <p className="sidebar-label">Tema</p>
          <div className="theme-switch">
            <button
              type="button"
              className={`theme-button ${theme === 'light' ? 'is-active' : ''}`}
              onClick={() => setTheme('light')}
            >
              Claro
            </button>
            <button
              type="button"
              className={`theme-button ${theme === 'dark' ? 'is-active' : ''}`}
              onClick={() => setTheme('dark')}
            >
              Oscuro
            </button>
          </div>
        </section>
      </aside>
      <main className="main-content">
        <section className={`view ${view === 'home' ? 'is-visible' : ''}`}>
          <header className="topbar topbar-combined">
            <div>
              <p className="eyebrow">Vista principal</p>
              <h2>Panorama del dia</h2>
            </div>
          </header>
          <section className="summary-grid">
            <article className="summary-card">
              <p className="summary-label">Disponible real</p>
              <h3>{formatCurrency(financeSummary.balance)}</h3>
              <p className="summary-meta">Saldo despues de compromisos</p>
            </article>
            <article className="summary-card">
              <p className="summary-label">Tareas abiertas</p>
              <h3>{academicSummary.pending}</h3>
              <p className="summary-meta">
                {academicSummary.next ? `${academicSummary.next.dueDate} · ${academicSummary.next.title}` : 'Sin fechas proximas'}
              </p>
            </article>
            <article className="summary-card summary-card-academic">
              <p className="summary-label">Entregas hechas</p>
              <h3>{academicSummary.done}</h3>
              <p className="summary-meta">Ya cerradas</p>
            </article>
          </section>
          <section className="bottom-grid">
            <article className="panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Categorias mas gastadas</p>
                  <h3>Este mes</h3>
                </div>
              </div>
              <div className="category-list">
                {categoryTotals.map((category) => (
                  <article className="detail-card" key={category.key}>
                    <div className="detail-card-header">
                      <div>
                        <strong>{category.key}</strong>
                        <p>{formatCurrency(category.total)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
            <article className="panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Notas</p>
                  <h3>Cursos activos</h3>
                </div>
              </div>
              <div className="detail-stack">
                {initialCourseDefinitions.map((course) => (
                  <article className="detail-card" key={course.id}>
                    <div className="detail-card-header">
                      <div>
                        <strong>{course.shortName}</strong>
                        <p>{course.note}</p>
                      </div>
                      <span className="mini-tag">{course.grade}</span>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </section>
        </section>

        <section className={`view ${view === 'academic' ? 'is-visible' : ''}`}>
          <header className="topbar topbar-academic">
            <h2>Academico</h2>
          </header>
          <article className="panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Filtro</p>
                <h3>{selectedCourseId}</h3>
              </div>
            </div>
            <div className="palette-list">
              {initialCourseDefinitions.map((course) => (
                <button
                  key={course.id}
                  type="button"
                  className={`mini-button ${selectedCourseId === course.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedCourseId(course.id)}
                >
                  {course.shortName}
                </button>
              ))}
            </div>
          </article>
          <article className="panel panel-side panel-side-academic">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Entregas</p>
                <h3>{filteredTasks.length}</h3>
              </div>
            </div>
            <div className="detail-stack">
              {filteredTasks.map((task) => (
                <article className="detail-card" key={task.id}>
                  <div className="detail-card-header">
                    <div>
                      <strong>{task.title}</strong>
                      <p>{task.dueDate}</p>
                    </div>
                    <span className="mini-tag">{statusLabel(task.status)}</span>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className={`view ${view === 'finance' ? 'is-visible' : ''}`}>
          <header className="topbar topbar-finance">
            <h2>Finanzas</h2>
          </header>
          <section className="balance-card">
            <p className="summary-label">Saldo</p>
            <h3>{formatCurrency(financeSummary.balance)}</h3>
            <p className="summary-meta">
              {financeSummary.upcoming
                ? `${financeSummary.upcoming.name} · ${financeSummary.upcoming.date}`
                : 'Sin cargos fuertes'}
            </p>
          </section>
          <section className="finance-overview">
            <article className="detail-stack">
              {initialFinanceEntries.map((entry) => (
                <article className="detail-card" key={entry.id}>
                  <div className="detail-card-header">
                    <div>
                      <strong>{entry.name}</strong>
                      <p>{entry.category}</p>
                    </div>
                    <span className="mini-tag">{formatCurrency(entry.amount)}</span>
                  </div>
                  <p>{statusLabel(entry.status)}</p>
                </article>
              ))}
            </article>
          </section>
        </section>

        <section className={`view ${view === 'routine' ? 'is-visible' : ''}`}>
          <header className="topbar topbar-routine">
            <h2>Rutina</h2>
          </header>
          <section className="summary-grid summary-grid-routine">
            <article className="summary-card">
              <p className="summary-label">Bloques hoy</p>
              <h3>{dayOccurrences.length}</h3>
              <p className="summary-meta">{selectedDate}</p>
            </article>
          </section>
          <article className="panel panel-routine-main">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Horario</p>
                <h3>{selectedDate}</h3>
              </div>
              <div className="palette-list">
                {ROUTINE_WEEK_DAYS.map((day) => (
                  <button
                    key={day.date}
                    type="button"
                    className={`mini-button ${selectedDate === day.date ? 'is-active' : ''}`}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    {day.shortDay}
                  </button>
                ))}
              </div>
            </div>
            <div className="detail-stack">
              {routineDays.map((entry) => (
                <article className="detail-card" key={`${entry.date}-${entry.name}`}>
                  <div className="detail-card-header">
                    <div>
                      <strong>{entry.name}</strong>
                      <p>{entry.detail}</p>
                    </div>
                    <span className="mini-tag">{statusLabel(entry.status)}</span>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
