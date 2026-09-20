* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #eef4ff;
  --primary: #1d4ed8;
  --primary-dark: #163ea7;
  --primary-soft: #eaf1ff;
  --success: #16a34a;
  --success-soft: #ebfdf0;
  --warning: #f59e0b;
  --warning-soft: #fff7e6;
  --danger: #dc2626;
  --danger-soft: #fde7ec;
  --text: #1d2433;
  --muted: #667085;
  --line: #e5eaf2;
  --shadow: 0 12px 22px rgba(26, 48, 92, 0.08);
  --radius: 18px;
}

html, body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, "Segoe UI", sans-serif;
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

.app {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0f172a, #101b2d 48%, #111827);
  color: white;
  padding: 22px 18px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 18px;
}

.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #60a5fa, #1d4ed8);
  color: white;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(29,78,216,.35);
}

.brand-block h2 {
  margin: 0;
  font-size: 1.08rem;
}

.brand-block small {
  color: rgba(255,255,255,0.72);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-section {
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: .09em;
  font-size: .7rem;
  margin: 18px 12px 8px;
}

.nav-item {
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  text-align: left;
  transition: .2s ease;
}

.nav-item span {
  width: 18px;
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
  color: white;
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
  color: rgba(255,255,255,0.82);
}

.main-panel {
  padding: 26px 28px 30px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.2rem);
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
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.toolbar-search input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--text);
  outline: none;
}

.primary-btn, .secondary-btn, .ghost-btn, .danger-btn {
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
  transition: .2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 10px 22px rgba(29,78,216,.18);
}

.secondary-btn {
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--text);
}

.ghost-btn {
  background: var(--panel-alt);
  color: var(--primary-dark);
}

.danger-btn {
  background: var(--danger-soft);
  color: var(--danger);
}

.content-grid {
  display: grid;
  gap: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 18px;
}

.stat-card, .panel, .large-panel {
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.stat-label {
  color: var(--muted);
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
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
  font-size: clamp(1.6rem, 2vw, 2rem);
  font-weight: 800;
}

.stat-change {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: .76rem;
  font-weight: 700;
}

.stat-change.positive { background: var(--success-soft); color: var(--success); }
.stat-change.warning { background: var(--warning-soft); color: var(--warning); }
.stat-change.negative { background: var(--danger-soft); color: var(--danger); }

.two-col {
  display: grid;
  grid-template-columns: 1.35fr .9fr;
  gap: 20px;
}

.panel-header, .large-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
}

.panel-header h3, .large-panel-header h3 {
  margin: 0;
  font-size: 1.05rem;
}

.link-btn {
  background: transparent;
  border: none;
  color: var(--primary);
  font-weight: 700;
}

.chart-area {
  padding: 18px;
}

.chart-bars {
  height: 190px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding-top: 12px;
}

.bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  height: 100%;
}

.bar {
  width: 100%;
  max-width: 36px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #89aefb, #1d4ed8);
}

.bar.orange { background: linear-gradient(180deg, #fbbf6a, #f59e0b); }
.bar.green { background: linear-gradient(180deg, #7ee0a3, #16a34a); }

.bar-label {
  color: var(--muted);
  font-size: 0.76rem;
}

.activity-list {
  padding: 14px 18px 16px;
}

.activity-item {
  display: flex;
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
  margin-bottom: 3px;
}

.muted {
  color: var(--muted);
  font-size: .8rem;
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
  padding: 13px 10px;
  border-bottom: 1px solid var(--line);
}

th {
  color: var(--muted);
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .08em;
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
  color: var(--primary-dark);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: .72rem;
  font-weight: 700;
}

.status-badge.ok { background: var(--success-soft); color: var(--success); }
.status-badge.warn { background: var(--warning-soft); color: var(--warning); }
.status-badge.bad { background: var(--danger-soft); color: var(--danger); }

.task-grid {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 20px;
  margin-top: 20px;
}

.progress-box {
  padding: 16px 18px 20px;
  text-align: center;
}

.ring {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  margin: 16px auto 12px;
  background: conic-gradient(var(--primary) 0 58%, #dfe9ff 58% 100%);
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
  font-weight: 800;
  z-index: 1;
}

.list-rows {
  padding: 12px 18px 18px;
}

.list-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.list-row:last-child {
  border-bottom: none;
}

section.view {
  display: block;
}

.form-stack {
  display: grid;
  gap: 18px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-size: .8rem;
  font-weight: 700;
  color: var(--muted);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
  background: white;
  color: var(--text);
  outline: none;
}

.field textarea {
  min-height: 85px;
  resize: vertical;
}

.actions-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.kpi-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px;
}

.kpi-card strong {
  display: block;
  font-size: 1.7rem;
  margin-top: 8px;
}

.summary-block {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 18px;
  margin-top: 16px;
}

.summary-box {
  background: var(--panel-alt);
  border: 1px solid #dfe9ff;
  border-radius: 16px;
  padding: 16px;
}

.summary-box span {
  color: var(--muted);
  display: block;
  margin-bottom: 8px;
}

.summary-box strong {
  font-size: 1.5rem;
}

.login-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, rgba(15,23,42,0.92), rgba(29,78,216,0.9));
  display: grid;
  place-items: center;
  z-index: 100;
}

.login-card {
  width: min(460px, calc(100vw - 28px));
  background: white;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(7, 20, 42, 0.2);
  overflow: hidden;
}

.login-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px 24px 12px;
}

.login-header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.login-header p {
  margin: 4px 0 0;
  color: var(--muted);
}

.login-body {
  padding: 18px 24px 28px;
}

.login-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: var(--primary-soft);
  color: var(--primary-dark);
  font-size: .73rem;
  font-weight: 700;
}

.badge-soft {
  background: #eefbf2;
  color: var(--success);
}

.login-body label {
  display: block;
  margin-bottom: 16px;
}

.login-body label span {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  color: var(--muted);
  font-size: .8rem;
}

.login-body input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  font-size: 1rem;
}

.login-hint {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: .8rem;
  text-align: center;
}

.login-error {
  min-height: 20px;
  margin-top: 12px;
  color: var(--danger);
  font-size: .8rem;
  text-align: center;
}

.empty-state {
  padding: 22px 18px;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 980px) {
  .app {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding: 16px 16px 0;
  }

  .stats-grid,
  .card-grid,
  .kpis,
  .summary-block,
  .task-grid,
  .two-col {
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
    flex: 1 1 240px;
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
    min-width: 0;
    width: 100%;
  }
}

































































"},{