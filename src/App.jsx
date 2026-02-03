import React, { useState } from 'react';
import { DataProvider } from './shared/DataContext';
import Module1_AssessmentsMatching from './modules/Module1_AssessmentsMatching';
import Module2_Communication from './modules/Module2_Communication';
import Module3_Operations from './modules/Module3_Operations';
import './App.css';

const App = () => {
  const [activeModule, setActiveModule] = useState(1);

  return (
    <DataProvider>
      <div className="shell">
        <aside className="shell-nav">
          <div className="brand">
            <span className="brand-mark">KT</span>
            <div>
              <h1>KothonTech</h1>
              <p>Talent platform mock UI</p>
            </div>
          </div>

          <nav className="nav-group">
            <button
              className={`nav-item nav-green ${activeModule === 1 ? 'nav-active' : ''}`}
              onClick={() => setActiveModule(1)}
            >
              <span className="dot">🟢</span>
              <span>
                Assessments
                <small>Profiles, tests, matching</small>
              </span>
            </button>
            <button
              className={`nav-item nav-red ${activeModule === 2 ? 'nav-active' : ''}`}
              onClick={() => setActiveModule(2)}
            >
              <span className="dot">🔴</span>
              <span>
                Communication
                <small>Messages, files, calendar</small>
              </span>
            </button>
            <button
              className={`nav-item nav-blue ${activeModule === 3 ? 'nav-active' : ''}`}
              onClick={() => setActiveModule(3)}
            >
              <span className="dot">🔵</span>
              <span>
                Operations
                <small>Finances, KPIs, CRM</small>
              </span>
            </button>
          </nav>

          <footer className="shell-footer">
            <p className="foot-caption">
              3 modules are visually separated, but they all read/write the same shared data layer
              (profiles, projects, invoices…).
            </p>
          </footer>
        </aside>

        <main className="shell-main">
          {activeModule === 1 && <Module1_AssessmentsMatching />}
          {activeModule === 2 && <Module2_Communication />}
          {activeModule === 3 && <Module3_Operations />}
        </main>
      </div>
    </DataProvider>
  );
};

export default App;
