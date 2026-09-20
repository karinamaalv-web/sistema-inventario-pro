* { box-sizing: border-box; }

:root {
  --bg: #f3f6fb;
  --panel: #ffffff;
  --panel-alt: #eef4ff;
  --panel-soft: #f8faff;
  --primary: #1d4ed8;
  --primary-strong: #153ea7;
  --primary-soft: #eaf2ff;
  --success: #16a34a;
  --success-soft: #ebfdf0;
  --warning: #f59e0b;
  --warning-soft: #fff7e3;
  --danger: #dc2626;
  --danger-soft: #ffe7ef;
  --text: #1d2433;
  --muted: #667085;
  --line: #e5eaf2;
  --shadow: 0 12px 28px rgba(16, 34, 64, 0.08);
  --radius: 18px;
}

html, body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
}

button, input, select, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.w-100 {
  width: 100%;
}

.app {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0f172a 0%, #0d1528 100%);
  color: white;
  padding: 22px 18px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 18px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #6ea8ff, #1d4ed8);
  color: white;
  font-weight: 900;
  box-shadow: 0 12px 26px rgba(29,78,216,0.3);
}

.brand-block strong {
  display: block;
  font-size: 1.04rem;
}

.brand-block small {
  color: rgba(255,255,255,0.72);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-group-label {
  color: rgba(255,255,255,0.5);
  margin: 18px 12px 8px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nav-item {
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255,255,255,0.8);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  transition: 0.2s ease;
}

.nav-item span {
  width: 18px;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.08);
  color: #fff;
}

.sidebar-card {
  margin-top: 28px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 16px;
}

.mini-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  color: rgba(255,255,255,0.85);
}

.main-panel {
  padding: 28px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(2rem, 2vw, 2.4rem);
}

.topbar p {
  margin: 6px 0 0;
  color: var(--muted);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-search {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.95);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--muted);
}

.toolbar-search input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: var(--text);
}

.primary-btn,
.secondary-btn,
.ghost-btn,
.danger-btn {
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #fff;
  box-shadow: 0 12px 22px rgba(29,78,216,0.18);
}

.secondary-btn {
  background: rgba(255,255,255,0.9);
  color: var(--text);
  border: 1px solid var(--line);
}

.ghost-btn {
  background: var(--primary-soft);
  color: var(--primary-strong);
}

.danger-btn {
  background: var(--danger-soft);
  color: var(--danger);
}

#mainContent {
  display: grid;
  gap: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card,
.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 18px;
}

.stat-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.stat-label {
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.stat-icon.blue { background: var(--primary-soft); color: var(--primary); }
.stat-icon.green { background: var(--success-soft); color: var(--success); }
.stat-icon.orange { background: var(--warning-soft); color: var(--warning); }
.stat-icon.red { background: var(--danger-soft); color: var(--danger); }

.stat-value {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.1rem);
  font-weight: 800;
}

.stat-change {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.stat-change.positive { background: var(--success-soft); color: var(--success); }
.stat-change.warning { background: var(--warning-soft); color: var(--warning); }
.stat-change.negative { background: var(--danger-soft); color: var(--danger); }

.two-col {
  display: grid;
  grid-template-columns: 1.4fr 0.95fr;
  gap: 20px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
}

.panel-header h3 {
  margin: 0;
  font-size: 1.08rem;
}

.link-btn {
  border: none;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
}

.chart-area {
  padding: 18px;
}

.chart-bars {
  height: 200px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

.bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  height: 100%;
}

.bar {
  width: 100%;
  max-width: 38px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #90b2ff, #1d4ed8);
}

.bar.orange { background: linear-gradient(180deg, #fbd79d, #f59e0b); }
.bar.green { background: linear-gradient(180deg, #8ce0aa, #16a34a); }

.bar-label {
  font-size: 0.76rem;
  color: var(--muted);
}

.activity-list {
  padding: 14px 18px 18px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 7px;
}

.activity-dot.blue { background: var(--primary); }
.activity-dot.green { background: var(--success); }
.activity-dot.orange { background: var(--warning); }
.activity-dot.red { background: var(--danger); }

.activity-item strong {
  display: block;
  margin-bottom: 4px;
}

.muted {
  color: var(--muted);
  font-size: 0.8rem;
}

.task-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.8fr;
  gap: 20px;
}

.table-wrap {
  padding: 14px 18px 18px;
}

.table-wrap table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 14px 10px;
  border-bottom: 1px solid var(--line);
}

th {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-thumb {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #dfeaff, #cfe0ff);
  font-weight: 800;
  color: var(--primary-strong);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.status-badge.ok { background: var(--success-soft); color: var(--success); }
.status-badge.warn { background: var(--warning-soft); color: var(--warning); }
.status-badge.bad { background: var(--danger-soft); color: var(--danger); }

.progress-box {
  padding: 16px 18px 20px;
  text-align: center;
}

.ring {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: conic-gradient(var(--primary) 0 58%, #dfe9ff 58% 100%);
  margin: 16px auto 12px;
  position: relative;
}

.ring::after {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: white;
}

.ring-value {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
  font-weight: 800;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.kpi-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
}

.kpi-card strong {
  display: block;
  font-size: 1.7rem;
  margin-top: 8px;
}

.summary-block {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.summary-box {
  background: var(--panel-alt);
  border: 1px solid #dfe9ff;
  border-radius: 16px;
  padding: 16px;
}

.summary-box span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
}

.summary-box strong {
  font-size: 1.5rem;
}

.login-screen {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(15,23,42,0.92), rgba(29,78,216,0.88));
  z-index: 100;
}

.login-shell {
  width: min(460px, calc(100vw - 28px));
  background: rgba(255,255,255,0.96);
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.22);
  overflow: hidden;
}

.login-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px 24px 12px;
}

.login-brand h1 {
  margin: 0;
  font-size: 1.8rem;
}

.login-brand p {
  margin: 4px 0 0;
  color: var(--muted);
}

.login-form {
  padding: 18px 24px 28px;
}

.login-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.login-tags span {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-size: 0.72rem;
  font-weight: 700;
}

.login-tags .soft {
  background: #ecfdf5;
  color: var(--success);
}

.field {
  display: block;
  margin-bottom: 16px;
}

.field span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
}

.field input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 11px 12px;
  background: white;
  color: var(--text);
  outline: none;
}

.login-error {
  min-height: 20px;
  margin-top: 12px;
  color: var(--danger);
  font-size: 0.8rem;
  text-align: center;
}

.login-hint {
  margin: 10px 0 0;
  text-align: center;
  color: var(--muted);
  font-size: 0.8rem;
}

.empty-state {
  text-align: center;
  color: var(--muted);
  padding: 22px 18px;
}

@media (max-width: 980px) {
  .app {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding: 16px 16px 0;
  }

  .stats-grid,
  .two-col,
  .task-grid,
  .kpis,
  .summary-block {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .toolbar-search {
    flex: 1 1 260px;
    min-width: 0;
  }
}

@media (max-width: 640px) {
  .main-panel {
    padding: 18px;
  }

  .header-actions {
    width: 100%;
  }

  .toolbar-search {
    width: 100%;
  }
}


















































































































































































































































































































"},{