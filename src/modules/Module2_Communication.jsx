import React, { useContext, useState } from 'react';
import { DataContext } from '../shared/DataContext';
import { LayoutDashboard, MessageSquare, Clock, Trello, FileText, Key, CheckSquare, Briefcase, User, Shield, AlertCircle, PlusCircle, MoreHorizontal } from 'lucide-react';

const Module2_Communication = () => {
    const { data } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [managementView, setManagementView] = useState('client'); // 'client' | 'talent'
    const [selectedProject, setSelectedProject] = useState(null);

    return (
      <div className="module-root flex flex-col h-screen">
        <header className="module-header border-b-red-500 border-b-2 flex-shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    <Briefcase size={24} />
                </div>
                <div>
                   <h1 className="text-2xl font-bold text-slate-800">Operations & Delivery</h1>
                   <p className="text-slate-500 text-sm">Project Management • Communication • Access Control</p>
                </div>
            </div>
  
          <nav className="sub-nav sub-nav-red mt-6 overflow-x-auto">
            <button className={`sub-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              Dashboard
            </button>
             <button className={`sub-nav-item ${activeTab === 'management' ? 'active' : ''}`} onClick={() => setActiveTab('management')}>
              Management
            </button>
            <button className={`sub-nav-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
              Messages
            </button>
            <button className={`sub-nav-item ${activeTab === 'jira' ? 'active' : ''}`} onClick={() => setActiveTab('jira')}>
              Sprint Board
            </button>
            <button className={`sub-nav-item ${activeTab === 'time' ? 'active' : ''}`} onClick={() => setActiveTab('time')}>
              Time & Inv
            </button>
            <button className={`sub-nav-item ${activeTab === 'docs' ? 'active' : ''}`} onClick={() => setActiveTab('docs')}>
              Docs
            </button>
            <button className={`sub-nav-item ${activeTab === 'access' ? 'active' : ''}`} onClick={() => setActiveTab('access')}>
              Accesses
            </button>
            <button className={`sub-nav-item ${activeTab === 'onboard' ? 'active' : ''}`} onClick={() => setActiveTab('onboard')}>
              Onboarding
            </button>
          </nav>
        </header>
  
        <main className="module-content bg-slate-50 flex-1 overflow-y-auto p-6">
          
          {/* TAB: DASHBOARD */}
          {activeTab === 'dashboard' && (
             <div className="space-y-8">
                 {/* Stats Row */}
                 <div className="grid grid-cols-4 gap-4">
                     <div className="card bg-white p-4 border-l-4 border-l-red-500 shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Projects</p>
                         <p className="text-2xl font-bold text-slate-800 mt-1">12</p>
                     </div>
                     <div className="card bg-white p-4 border-l-4 border-l-orange-400 shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Action</p>
                         <p className="text-2xl font-bold text-slate-800 mt-1">4</p>
                     </div>
                     <div className="card bg-white p-4 border-l-4 border-l-blue-500 shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Headcount</p>
                         <p className="text-2xl font-bold text-slate-800 mt-1">18</p>
                     </div>
                     <div className="card bg-white p-4 border-l-4 border-l-green-500 shadow-sm">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Utilization</p>
                         <p className="text-2xl font-bold text-slate-800 mt-1">92%</p>
                     </div>
                 </div>

                 {/* Detailed Project Table */}
                 <div className="card bg-white shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-slate-800">Active Project Portfolio</h3>
                        <button className="btn btn-ghost text-sm text-slate-500 hover:text-red-600">Download Report</button>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
                                <th className="p-4 pl-6">Project</th>
                                <th className="p-4">Client</th>
                                <th className="p-4">Assigned Talent</th>
                                <th className="p-4">Budget / Consumption</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.projects.map(p => {
                                const dev = data.developers.find(d => d.id === p.developerId);
                                const budgetPercent = Math.round(Math.random() * 40 + 20); // Mock
                                return (
                                    <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="p-4 pl-6 font-bold text-slate-700">{p.name}</td>
                                        <td className="p-4 text-sm font-medium">{p.clientName}</td>
                                        <td className="p-4 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-600 border border-white shadow-sm">
                                                {dev ? dev.name.charAt(0) : '?'}
                                            </div>
                                            <span className="text-sm">{dev ? dev.name : 'Unassigned'}</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="w-32 bg-slate-100 rounded-full h-2 mb-1">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{width: `${budgetPercent}%`}}></div>
                                            </div>
                                            <span className="text-xs text-slate-400">€{Math.round(p.budget * (budgetPercent/100) / 1000)}k consumed</span>
                                        </td>
                                        <td className="p-4"><span className={`badge ${p.status === 'Active' ? 'badge-green' : 'badge-gray'}`}>{p.status}</span></td>
                                        <td className="p-4"><button className="text-slate-400 hover:text-red-500"><MoreHorizontal size={18}/></button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                 </div>
             </div>
          )}

          {/* TAB: MANAGEMENT (Detailed View) */}
          {activeTab === 'management' && (
              <div className="grid grid-cols-12 gap-6 h-[80vh]">
                  {/* Sidebar */}
                  <div className="col-span-3 card bg-white p-0 overflow-hidden flex flex-col h-full border border-slate-200">
                      <div className="flex border-b border-slate-100">
                          <button className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${managementView === 'client' ? 'text-red-600 bg-red-50 border-red-500' : 'text-slate-500 hover:bg-slate-50 border-transparent'}`} onClick={() => setManagementView('client')}>Clients</button>
                          <button className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${managementView === 'talent' ? 'text-red-600 bg-red-50 border-red-500' : 'text-slate-500 hover:bg-slate-50 border-transparent'}`} onClick={() => setManagementView('talent')}>Talent</button>
                      </div>
                      <div className="p-3 space-y-1 overflow-y-auto flex-1">
                          {managementView === 'client' ? (
                              data.projects.map(p => (
                                  <div key={p.id} className="p-3 hover:bg-red-50 hover:text-red-700 rounded-lg cursor-pointer group transition-all" onClick={() => setSelectedProject(p)}>
                                      <h4 className="font-bold text-sm text-slate-700 group-hover:text-red-700">{p.clientName}</h4>
                                      <p className="text-xs text-slate-400 group-hover:text-red-400">{p.name}</p>
                                  </div>
                              ))
                          ) : (
                              data.developers.map(d => (
                                  <div key={d.id} className="p-3 hover:bg-red-50 hover:text-red-700 rounded-lg cursor-pointer group transition-all">
                                      <h4 className="font-bold text-sm text-slate-700 group-hover:text-red-700">{d.name}</h4>
                                      <p className="text-xs text-slate-400 group-hover:text-red-400">{d.seniority}</p>
                                  </div>
                              ))
                          )}
                      </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-9 space-y-6 overflow-y-auto pr-2">
                      <div className="card bg-white border border-slate-200 shadow-sm p-8">
                          <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded bg-slate-900 text-white flex items-center justify-center text-xl font-bold">R</div>
                                        <h2 className="text-3xl font-bold text-slate-900">{managementView === 'client' ? 'RegulaTech Inc.' : 'Alice Nguyen'}</h2>
                                    </div>
                                    <p className="text-slate-500 text-lg ml-15">{managementView === 'client' ? 'Enterprise Client • Fintech • London, UK' : 'Senior Backend Engineer • Active • Berlin'}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="btn bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm">Edit Profile</button>
                                    <button className="btn btn-red shadow-red-200 shadow-lg">New Action</button>
                                </div>
                          </div>

                          <div className="grid grid-cols-3 gap-6 mb-8">
                               <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 transition-colors cursor-pointer">
                                   <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FileText size={20}/></div>
                                       <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Active</span>
                                   </div>
                                   <p className="text-sm text-slate-500 font-bold uppercase mb-1">Current Contract</p>
                                   <p className="text-xl font-bold text-slate-800">MSA Signed</p>
                                   <p className="text-xs text-slate-400 mt-2">Expires Dec 2026</p>
                               </div>
                               <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-300 transition-colors cursor-pointer">
                                   <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Clock size={20}/></div>
                                       <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Paid</span>
                                   </div>
                                   <p className="text-sm text-slate-500 font-bold uppercase mb-1">Financials (YTD)</p>
                                   <p className="text-xl font-bold text-slate-800">€125,400</p>
                                   <p className="text-xs text-slate-400 mt-2">Last inv sent 2d ago</p>
                               </div>
                               <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 transition-colors cursor-pointer">
                                   <div className="flex justify-between items-start mb-4">
                                       <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><CheckSquare size={20}/></div>
                                   </div>
                                   <p className="text-sm text-slate-500 font-bold uppercase mb-1">Health Score</p>
                                   <p className="text-xl font-bold text-slate-800">98/100</p>
                                   <p className="text-xs text-slate-400 mt-2">Based on feedback & payment</p>
                               </div>
                          </div>

                          {/* History Feed */}
                          <div>
                              <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Activity History</h3>
                              <div className="space-y-4">
                                  <div className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                                          <span className="text-xs font-bold text-slate-400">OCT</span>
                                          <span className="text-xl font-bold text-slate-800">24</span>
                                      </div>
                                      <div className="w-px bg-slate-200"></div>
                                      <div className="flex-1">
                                          <div className="flex justify-between">
                                              <span className="font-bold text-slate-700">Invoice #INV-2024-001 Generated</span>
                                              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded font-bold">Paid</span>
                                          </div>
                                          <p className="text-sm text-slate-500 mt-1">Amount: €4,250 for Sep services.</p>
                                      </div>
                                  </div>
                                  <div className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                                          <span className="text-xs font-bold text-slate-400">OCT</span>
                                          <span className="text-xl font-bold text-slate-800">10</span>
                                      </div>
                                      <div className="w-px bg-slate-200"></div>
                                      <div className="flex-1">
                                          <div className="flex justify-between">
                                              <span className="font-bold text-slate-700">Onboarding Checklist Completed</span>
                                              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded font-bold">System</span>
                                          </div>
                                          <p className="text-sm text-slate-500 mt-1">Access Granted • Jira Setup • Slack Invite</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
  
          {/* TAB: JIRA BOARD (Improved Visuals) */}
          {activeTab === 'jira' && (
              <div className="h-full overflow-x-auto min-w-full">
                  <div className="flex justify-between items-center mb-6 px-2">
                       <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Trello/> Delivery Sprint Board</h3>
                       <div className="flex gap-4">
                           <div className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm">
                               <span className="text-xs text-slate-400 font-bold uppercase">Current Sprint</span>
                               <span className="text-sm font-bold text-slate-800">SPRINT-42</span>
                               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                           </div>
                           <button className="btn btn-red text-sm shadow-md flex items-center gap-1"><PlusCircle size={16}/> New Ticket</button>
                       </div>
                  </div>
                  
                  <div className="flex gap-6 h-[70vh] pb-4 px-2">
                      {/* Column: To Do */}
                      <div className="w-[300px] flex-shrink-0 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200 h-full">
                          <div className="p-3 border-b border-slate-200 bg-slate-100 rounded-t-xl flex justify-between items-center sticky top-0">
                              <h4 className="font-bold text-slate-600 text-sm uppercase">To Do</h4>
                              <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">5</span>
                          </div>
                          <div className="p-3 space-y-3 overflow-y-auto flex-1 scrollbar-hide">
                               <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-red-400 hover:shadow-md cursor-pointer transition-all group">
                                   <div className="flex justify-between mb-2">
                                       <span className="text-xs font-bold text-slate-400">KTH-102</span>
                                       <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500"><MoreHorizontal size={14}/></button>
                                   </div>
                                   <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">Optimize database queries for reporting dashboard</p>
                                   <div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-2">
                                       <span className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded border border-orange-100 font-bold">Medium</span>
                                       <div className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[10px] text-slate-500">Un</div>
                                   </div>
                               </div>
                               <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-red-400 hover:shadow-md cursor-pointer transition-all group">
                                   <div className="flex justify-between mb-2">
                                       <span className="text-xs font-bold text-slate-400">KTH-105</span>
                                       <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500"><MoreHorizontal size={14}/></button>
                                   </div>
                                   <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">Implement OAuth2 Login Flow</p>
                                   <div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-2">
                                       <span className="text-[10px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100 font-bold">High</span>
                                       <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 border border-white flex items-center justify-center text-[10px] font-bold">AN</div>
                                   </div>
                               </div>
                          </div>
                          <div className="p-2">
                             <button className="w-full py-2 text-xs text-slate-500 font-bold hover:bg-slate-200 rounded dashed border border-transparent hover:border-slate-300 flex items-center justify-center gap-1">+ Add Card</button>
                          </div>
                      </div>

                       {/* Column: In Progress */}
                       <div className="w-[300px] flex-shrink-0 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200 h-full">
                          <div className="p-3 border-b border-slate-200 bg-slate-100 rounded-t-xl flex justify-between items-center sticky top-0">
                              <h4 className="font-bold text-slate-600 text-sm uppercase">In Progress</h4>
                              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-bold">2</span>
                          </div>
                          <div className="p-3 space-y-3 overflow-y-auto flex-1 scrollbar-hide">
                               <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-l-blue-500 border-y border-r border-slate-200 hover:shadow-md cursor-pointer transition-all">
                                   <div className="flex justify-between mb-2">
                                       <span className="text-xs font-bold text-slate-400">KTH-99</span>
                                   </div>
                                   <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">Integrate Stripe Webhooks</p>
                                   <div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-2">
                                       <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100 font-bold">Backend</span>
                                       <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 border border-white flex items-center justify-center text-[10px] font-bold">JB</div>
                                   </div>
                               </div>
                          </div>
                      </div>

                       {/* Column: Review */}
                       <div className="w-[300px] flex-shrink-0 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200 h-full">
                          <div className="p-3 border-b border-slate-200 bg-slate-100 rounded-t-xl flex justify-between items-center sticky top-0">
                              <h4 className="font-bold text-slate-600 text-sm uppercase">Review</h4>
                              <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">1</span>
                          </div>
                          <div className="p-3 space-y-3 overflow-y-auto flex-1 scrollbar-hide">
                               <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md cursor-pointer transition-all">
                                   <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-400">KTH-88</span>
                                   </div>
                                   <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">Frontend Unit Tests</p>
                                   <div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-2">
                                       <span className="text-[10px] bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded border border-purple-100 font-bold">QA</span>
                                       <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 border border-white flex items-center justify-center text-[10px] font-bold">LK</div>
                                   </div>
                               </div>
                          </div>
                      </div>

                       {/* Column: Done */}
                       <div className="w-[300px] flex-shrink-0 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200 h-full">
                          <div className="p-3 border-b border-slate-200 bg-slate-100 rounded-t-xl flex justify-between items-center sticky top-0">
                              <h4 className="font-bold text-slate-600 text-sm uppercase">Done</h4>
                              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-bold">12</span>
                          </div>
                          <div className="p-3 space-y-3 overflow-y-auto flex-1 scrollbar-hide">
                               <div className="p-4 bg-slate-50 opacity-60 rounded-lg shadow-none border border-slate-200 hover:opacity-100 transition-opacity">
                                   <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-400">KTH-85</span>
                                        <div className="text-green-600"><CheckCircle size={14}/></div>
                                   </div>
                                   <p className="text-sm font-medium text-slate-500 line-through decoration-slate-300 mb-0">Initial Scoping</p>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}

          {/* TAB: TIME & INVOICING (FIXED) */}
          {activeTab === 'time' && (
              <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Time Tracking Section */}
                   <div className="card bg-white shadow-sm border border-slate-200">
                       <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                           <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Clock size={20} className="text-red-500"/> Time Sheets</h3>
                           <select className="bg-slate-50 border-none text-sm font-bold text-slate-600 rounded p-1"><option>Week 42 (Oct 16-22)</option></select>
                       </div>
                       
                       <div className="space-y-4">
                           {/* Day Row */}
                           <div className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-100 group hover:border-red-200 transition-colors">
                               <div className="w-16 text-center border-r border-slate-200 pr-3 mr-3">
                                   <div className="text-xs font-bold text-slate-400 uppercase">MON</div>
                                   <div className="text-xl font-bold text-slate-800">16</div>
                               </div>
                               <div className="flex-1">
                                   <p className="font-bold text-slate-700 text-sm">RegulaTech App</p>
                                   <p className="text-xs text-slate-500">Frontend Refactoring</p>
                               </div>
                               <div className="text-right">
                                   <input className="w-16 text-right font-mono font-bold bg-white border border-slate-200 rounded p-1 text-sm focus:border-red-500 outline-none" defaultValue="8:00" />
                               </div>
                           </div>

                           <div className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-100 group hover:border-red-200 transition-colors">
                               <div className="w-16 text-center border-r border-slate-200 pr-3 mr-3">
                                   <div className="text-xs font-bold text-slate-400 uppercase">TUE</div>
                                   <div className="text-xl font-bold text-slate-800">17</div>
                               </div>
                               <div className="flex-1">
                                   <p className="font-bold text-slate-700 text-sm">RegulaTech App</p>
                                   <p className="text-xs text-slate-500">API Integration</p>
                               </div>
                               <div className="text-right">
                                   <input className="w-16 text-right font-mono font-bold bg-white border border-slate-200 rounded p-1 text-sm focus:border-red-500 outline-none" defaultValue="7:30" />
                               </div>
                           </div>

                            <button className="w-full py-2 border border-dashed border-slate-300 rounded text-slate-400 text-sm font-bold hover:bg-slate-50 hover:text-red-500 hover:border-red-300 transition-all">+ Add Time Entry</button>

                           <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                               <span className="font-bold text-slate-500">Total Billable Hours</span>
                               <span className="font-bold text-2xl text-slate-800">15h 30m</span>
                           </div>
                           <button className="btn btn-red w-full font-bold shadow-md">Submit Timesheet</button>
                       </div>
                   </div>

                   {/* Invoices Section */}
                   <div className="card bg-white shadow-sm border border-slate-200">
                       <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6 border-b border-slate-100 pb-4"><FileText size={20} className="text-red-500"/> Invoices</h3>
                       <p className="text-sm text-slate-500 mb-4 bg-blue-50 text-blue-700 p-3 rounded border border-blue-100">
                           ℹ️ Invoices are automatically generated on the 1st of each month based on approved timesheets.
                       </p>
                       <div className="space-y-3">
                           <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center hover:shadow-sm transition-shadow bg-white">
                               <div className="flex items-center gap-3">
                                   <div className="p-2 bg-green-50 text-green-600 rounded"><CheckSquare size={18}/></div>
                                   <div>
                                       <p className="font-bold text-slate-700 text-sm">INV-2025-001</p>
                                       <p className="text-xs text-slate-400">RegulaTech • Due Oct 30</p>
                                   </div>
                               </div>
                               <div className="text-right">
                                   <p className="font-bold text-slate-800">€4,200.00</p>
                                   <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">PAID</span>
                               </div>
                           </div>
                           
                           <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center hover:shadow-sm transition-shadow bg-white">
                               <div className="flex items-center gap-3">
                                   <div className="p-2 bg-orange-50 text-orange-600 rounded"><Clock size={18}/></div>
                                   <div>
                                       <p className="font-bold text-slate-700 text-sm">INV-2025-002</p>
                                       <p className="text-xs text-slate-400">RegulaTech • Due Nov 30</p>
                                   </div>
                               </div>
                               <div className="text-right">
                                   <p className="font-bold text-slate-800">€3,850.00</p>
                                   <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">PENDING</span>
                               </div>
                           </div>
                       </div>
                       <button className="btn btn-ghost w-full mt-4 text-slate-500 font-bold text-sm">View Invoice History</button>
                   </div>
               </div>
          )}

          {/* TAB: MESSAGES (Refined UI) */}
          {activeTab === 'messages' && (
              <div className="grid grid-cols-12 gap-0 border border-slate-200 rounded-lg overflow-hidden bg-white h-[75vh] shadow-sm">
                   {/* Sidebar List */}
                   <div className="col-span-3 border-r border-slate-100 flex flex-col bg-slate-50">
                       <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0">
                           <h4 className="font-bold text-slate-700">Inbox</h4>
                           <button className="text-slate-400 hover:text-red-500"><PlusCircle size={18}/></button>
                       </div>
                       <div className="overflow-y-auto flex-1 p-2 space-y-1">
                           <p className="text-xs font-bold text-slate-400 uppercase px-3 mt-4 mb-2">Channels</p>
                           <div className="px-3 py-2 bg-red-100 text-red-800 rounded-md text-sm font-bold flex justify-between items-center cursor-pointer border border-red-200">
                               <span># Admin Support</span>
                               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                           </div>
                           <div className="px-3 py-2 hover:bg-white text-slate-600 rounded-md text-sm font-medium flex justify-between items-center cursor-pointer transition-colors">
                               <span># General</span>
                           </div>

                           <p className="text-xs font-bold text-slate-400 uppercase px-3 mt-6 mb-2">Direct Messages</p>
                           <div className="px-3 py-2 hover:bg-white text-slate-700 rounded-md text-sm font-medium flex items-center gap-3 cursor-pointer transition-colors group">
                               <div className="w-2 h-2 rounded-full bg-green-500"></div>
                               <div className="flex-1">
                                    <div className="flex justify-between">
                                        <span>RegulaTech (Client)</span>
                                        <span className="text-[10px] text-slate-400 group-hover:text-slate-500">2m</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 truncate">Thanks for the update!</p>
                               </div>
                           </div>
                           <div className="px-3 py-2 hover:bg-white text-slate-700 rounded-md text-sm font-medium flex items-center gap-3 cursor-pointer transition-colors group">
                               <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                               <div className="flex-1">
                                    <div className="flex justify-between">
                                        <span>Alice Nguyen</span>
                                        <span className="text-[10px] text-slate-400 group-hover:text-slate-500">1d</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 truncate">Did you get the file?</p>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Main Chat Area */}
                   <div className="col-span-9 flex flex-col bg-white">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white shadow-sm z-10 sticky top-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-100 text-red-600 rounded-lg"><Shield size={18}/></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-sm">Admin Support Channel</h3>
                                    <p className="text-xs text-slate-400">Priority support for operations.</p>
                                </div>
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold z-10">AD</div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 text-xs font-bold">AN</div>
                            </div>
                        </div>
                        
                        <div className="flex-1 bg-slate-50 p-6 space-y-6 overflow-y-auto">
                            <div className="text-center text-xs text-slate-300 font-bold uppercase my-2">-- Today --</div>
                            
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500 text-sm">AN</div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-sm text-slate-700">Alice Nguyen</span>
                                        <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">10:42 AM</span>
                                    </div>
                                    <div className="bg-white p-3 shadow-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-sm text-slate-700 border border-slate-100 max-w-lg">
                                        Hi! I need to update my bank details for the next invoice. Where should I send the new IBAN?
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 flex-row-reverse group">
                                <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">AD</div>
                                <div className="text-right">
                                    <div className="flex items-baseline gap-2 justify-end mb-1">
                                        <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">10:45 AM</span>
                                        <span className="font-bold text-sm text-slate-700">Admin</span>
                                    </div>
                                    <div className="bg-red-600 p-3 shadow-sm rounded-tl-lg rounded-bl-lg rounded-br-lg text-sm text-white text-left max-w-lg shadow-red-200">
                                        Please upload it securely in the 'Accesses & Data' tab. We'll update it for the next cycle. Never send sensitive data here! 🔒
                                    </div>
                                </div>
                            </div>
                             <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500 text-sm">AN</div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-sm text-slate-700">Alice Nguyen</span>
                                        <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">10:46 AM</span>
                                    </div>
                                    <div className="bg-white p-3 shadow-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-sm text-slate-700 border border-slate-100 max-w-lg">
                                        Got it, doing it now. Thanks!
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded"><PlusCircle size={20}/></button>
                                <input className="flex-1 bg-slate-50 border-slate-200 rounded-lg px-4 py-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-100" placeholder="Message #Admin Support..." />
                                <button className="p-2 bg-slate-50 text-slate-400 rounded hover:text-red-600 hover:bg-red-50"><MoreHorizontal size={20}/></button>
                            </div>
                        </div>
                   </div>
              </div>
          )}

           {/* TAB: DOCUMENTS (File Table) */}
           {activeTab === 'docs' && (
               <div className="card bg-white max-w-5xl mx-auto shadow-sm">
                   <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-slate-800">Document Repository</h3>
                        <div className="flex gap-2">
                            <input className="bg-slate-50 border-slate-200 rounded px-3 py-1 text-sm" placeholder="Search files..."/>
                            <button className="btn btn-red text-sm">+ Upload</button>
                        </div>
                   </div>
                   <table className="w-full text-left">
                       <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                           <tr>
                               <th className="p-4 pl-6">Name</th>
                               <th className="p-4">Type</th>
                               <th className="p-4">Shared With</th>
                               <th className="p-4">Date</th>
                               <th className="p-4 text-right pr-6">Action</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                           {[1,2,3].map(i => (
                               <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                   <td className="p-4 pl-6 flex items-center gap-3 font-bold text-slate-700">
                                       <div className="p-2 bg-blue-50 text-blue-600 rounded"><FileText size={18}/></div> Project_Specs_v{i}.pdf
                                   </td>
                                   <td className="p-4 text-sm text-slate-500 font-medium">Specification</td>
                                   <td className="p-4 text-sm text-slate-500">Client, Admin</td>
                                   <td className="p-4 text-sm text-slate-500">Oct 1{i}, 2025</td>
                                   <td className="p-4 text-right pr-6"><button className="text-blue-600 hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Download</button></td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           )}

            {/* TAB: ACCESSES (Secure Vault) */}
           {activeTab === 'access' && (
               <div className="max-w-4xl mx-auto">
                   <div className="bg-slate-800 text-white p-6 rounded-xl mb-8 flex justify-between items-center shadow-lg">
                       <div>
                           <h2 className="text-xl font-bold flex items-center gap-2"><Shield size={24} className="text-green-400"/> Secure Credential Vault</h2>
                           <p className="text-slate-400 text-sm opacity-80 mt-1">End-to-end encrypted storage for client secrets.</p>
                       </div>
                       <button className="btn bg-white/10 hover:bg-white/20 text-white border-none">+ Add Secret</button>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6">
                       <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col relative group hover:border-red-300 transition-colors">
                           <div className="absolute top-4 right-4 text-slate-300"><Key size={20}/></div>
                           <h4 className="font-bold text-slate-700 mb-1">AWS Production</h4>
                           <p className="text-xs text-slate-400 mb-6 font-mono">ID: ak_prod_294...</p>
                           
                           <div className="bg-slate-100 rounded-lg p-3 flex justify-between items-center mb-4 border border-slate-200">
                               <span className="font-mono text-slate-500 text-sm tracking-widest">••••••••••••••••</span>
                               <button className="text-[10px] font-bold text-slate-600 uppercase border border-slate-300 rounded px-2 py-1 hover:bg-white transition-colors">Reveal</button>
                           </div>
                           <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                               <span>Last changed: 20 days ago</span>
                               <span className="text-green-600 flex items-center gap-1 font-bold"><CheckCircle size={10} /> Sync</span>
                           </div>
                       </div>

                        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col relative group hover:border-red-300 transition-colors">
                           <div className="absolute top-4 right-4 text-slate-300"><Key size={20}/></div>
                           <h4 className="font-bold text-slate-700 mb-1">MongoDB Atlas</h4>
                           <p className="text-xs text-slate-400 mb-6 font-mono">Cluster: primary-shard-0...</p>
                           
                           <div className="bg-slate-100 rounded-lg p-3 flex justify-between items-center mb-4 border border-slate-200">
                               <span className="font-mono text-slate-500 text-sm tracking-widest">••••••••••••••••</span>
                               <button className="text-[10px] font-bold text-slate-600 uppercase border border-slate-300 rounded px-2 py-1 hover:bg-white transition-colors">Reveal</button>
                           </div>
                           <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                               <span>Last changed: 5 days ago</span>
                               <span className="text-green-600 flex items-center gap-1 font-bold"><CheckCircle size={10} /> Sync</span>
                           </div>
                       </div>
                   </div>
               </div>
           )}

            {/* TAB: ONBOARDING */}
          {activeTab === 'onboard' && (
              <div className="card max-w-2xl mx-auto border-t-4 border-t-green-500">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl relative">
                          85%
                          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                              <path className="text-green-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="100, 100" />
                              <path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="85, 100" />
                          </svg>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-800">Onboarding Progress</h3>
                          <p className="text-slate-500 text-sm">Alice Nguyen for RegulaTech Project</p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg">
                          <CheckSquare className="text-green-500 mt-1" size={20}/>
                          <div>
                              <p className="font-bold text-slate-700 line-through decoration-slate-400 decoration-2">Sign Contract</p>
                              <p className="text-xs text-green-600 font-medium">Completed on Jan 10</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg">
                          <CheckSquare className="text-green-500 mt-1" size={20}/>
                          <div>
                              <p className="font-bold text-slate-700 line-through decoration-slate-400 decoration-2">Join Slack Channel</p>
                              <p className="text-xs text-green-600 font-medium">Completed on Jan 11</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg">
                          <CheckSquare className="text-slate-300 mt-1" size={20}/>
                          <div className="flex-1">
                              <p className="font-bold text-slate-900">Setup Dev Environment</p>
                              <p className="text-xs text-slate-400">Awaiting Access Credentials</p>
                          </div>
                          <button className="btn btn-red text-xs py-1 shadow-sm">Mark Complete</button>
                      </div>
                  </div>
              </div>
          )}
        </main>
      </div>
    );
};

// Internal Import helper
function CheckCircle({size}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
}
  
export default Module2_Communication;
