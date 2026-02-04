import React, { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../shared/DataContext';
import { LayoutDashboard, MessageSquare, Clock, Trello, FileText, Key, CheckSquare, Briefcase, User, Shield, AlertCircle, PlusCircle, MoreHorizontal, Send, Paperclip, Search, Bell, Calendar as CalendarIcon, ChevronRight, DollarSign, Download, Filter, Phone, Video, Info, Folder, File, Image as ImageIcon } from 'lucide-react';

const Module2_Communication = () => {
    const { data } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (activeTab === 'messages') {
            scrollToBottom();
        }
    }, [activeTab]);

    return (
      <div className="module-root flex flex-col h-full bg-slate-50/50">
        <header className="module-header bg-white border-b border-slate-200 sticky top-0 z-20 px-8 py-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 top-red-100 text-red-600 rounded-2xl flex items-center justify-center shadow-inner border border-red-100">
                        <Briefcase size={30} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Communication & Delivery</h1>
                       <p className="text-slate-500 font-medium flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-green-500"></span> 
                           Team Chat • Project Mgmt • Access Control
                       </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors relative border border-transparent hover:border-slate-200">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-10 w-10 bg-slate-200 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-200 transition-all">
                        <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="User" />
                    </div>
                </div>
            </div>
  
          <nav className="sub-nav sub-nav-red mt-8">
            {['dashboard', 'management', 'messages', 'jira', 'time', 'docs', 'calendar', 'access'].map(tab => (
                 <button 
                    key={tab}
                    className={`sub-nav-item capitalize ${activeTab === tab ? 'active' : ''}`} 
                    onClick={() => setActiveTab(tab)}
                 >
                   {tab === 'jira' ? 'Sprint Board' : tab === 'time' ? 'Time & Inv' : tab === 'docs' ? 'Documents' : tab}
                 </button>
            ))}
          </nav>
        </header>
  
        <main className="module-content flex-1 overflow-y-auto p-8 custom-scrollbar">
          
          {/* TAB: DASHBOARD (PRESERVED) */}
          {activeTab === 'dashboard' && (
             <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
                 {/* Stats Row */}
                 <div className="grid grid-cols-4 gap-6">
                     <div className="card border-0 shadow-sm hover:shadow-md transition-shadow bg-white relative overflow-hidden group">
                         <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                         <div className="relative">
                             <div className="flex justify-between items-start mb-4">
                                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Projects</p>
                                 <Briefcase size={18} className="text-red-400"/>
                             </div>
                             <p className="text-4xl font-bold text-slate-800">12</p>
                             <p className="text-xs text-slate-400 mt-2 font-medium">4 delivering this week</p>
                         </div>
                     </div>
                     <div className="card border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                         <div className="flex justify-between items-start mb-4">
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Action</p>
                             <AlertCircle size={18} className="text-orange-400"/>
                         </div>
                         <p className="text-4xl font-bold text-slate-800">4</p>
                         <p className="text-xs text-orange-500 mt-2 font-bold">Needs attention</p>
                     </div>
                     <div className="card border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                         <div className="flex justify-between items-start mb-4">
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Headcount</p>
                             <User size={18} className="text-blue-400"/>
                         </div>
                         <p className="text-4xl font-bold text-slate-800">18</p>
                         <p className="text-xs text-green-600 mt-2 font-bold">+2 joined recently</p>
                     </div>
                     <div className="card border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                         <div className="flex justify-between items-start mb-4">
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Utilization</p>
                             <Clock size={18} className="text-green-400"/>
                         </div>
                         <p className="text-4xl font-bold text-slate-800">92%</p>
                         <p className="text-xs text-slate-400 mt-2 font-medium">Optimal range</p>
                     </div>
                 </div>

                 {/* Detailed Project Table */}
                 <div className="card overflow-hidden p-0 border border-slate-200 shadow-sm bg-white">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">Active Project Portfolio</h3>
                        <div className="flex gap-2">
                            <button className="btn btn-ghost text-sm border border-slate-200 bg-slate-50">Filter</button>
                            <button className="btn btn-ghost text-sm border border-slate-200 bg-slate-50">Export</button>
                        </div>
                    </div>
                    <table className="table-simple">
                        <thead>
                            <tr className="bg-slate-50/80">
                                <th className="pl-6 py-4 text-xs font-extrabold text-slate-500 uppercase">Project</th>
                                <th className="py-4 text-xs font-extrabold text-slate-500 uppercase">Client</th>
                                <th className="py-4 text-xs font-extrabold text-slate-500 uppercase">Lead</th>
                                <th className="py-4 text-xs font-extrabold text-slate-500 uppercase">Budget</th>
                                <th className="py-4 text-xs font-extrabold text-slate-500 uppercase">Status</th>
                                <th className="pr-6 py-4 text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.projects.map(p => {
                                const dev = data.developers.find(d => d.id === p.developerId);
                                const budgetPercent = Math.round(Math.random() * 40 + 20); 
                                return (
                                    <tr key={p.id} className="group transition-colors hover:bg-slate-50">
                                        <td className="pl-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">{p.name.charAt(0)}</div>
                                                <div>
                                                    <span className="font-bold text-slate-700 block text-sm">{p.name}</span>
                                                    <span className="text-[10px] text-slate-400 font-mono uppercase">ID: {p.id.split('-')[1]}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm font-medium text-slate-600">{p.clientName}</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {dev && <img src={`https://ui-avatars.com/api/?name=${dev.name}&background=random`} className="w-6 h-6 rounded-full border border-white shadow-sm" alt=""/>}
                                                <span className="text-sm font-medium text-slate-700">{dev ? dev.name : 'Unassigned'}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${budgetPercent > 80 ? 'bg-red-500' : 'bg-slate-800'}`} style={{width: `${budgetPercent}%`}}></div>
                                                </div>
                                                <span className="text-xs font-bold text-slate-500">{budgetPercent}%</span>
                                            </div>
                                        </td>
                                        <td><span className={`badge ${p.status === 'Active' ? 'badge-green' : 'badge-gray'}`}>{p.status}</span></td>
                                        <td className="pr-6 text-right"><button className="text-slate-300 hover:text-slate-600 p-1"><MoreHorizontal size={18}/></button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                 </div>
             </div>
          )}

          {/* TAB: MANAGEMENT (NEW IMPLEMENTATION - Project Info) */}
          {activeTab === 'management' && (
              <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-2">
                      <h2 className="text-2xl font-bold text-slate-800">Project Overview: FinTech Platform Reform</h2>
                      <div className="flex gap-2">
                          <button className="btn btn-ghost text-red-600 border border-red-100">Edit Details</button>
                      </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-6">
                      <div className="card bg-white p-6 shadow-sm border border-slate-200">
                          <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Project Scope</h3>
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">
                              Full refactoring of the legacy payment gateway integration. Implementation of SCA (Strong Customer Authentication) and real-time fraud detection dashboard.
                          </p>
                          <div className="flex flex-wrap gap-2">
                              <span className="badge badge-red">High Priority</span>
                              <span className="badge badge-gray">Fixed Price</span>
                          </div>
                      </div>
                      <div className="card bg-white p-6 shadow-sm border border-slate-200">
                           <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Timeline</h3>
                           <div className="space-y-4">
                               <div className="flex justify-between items-center">
                                   <span className="text-sm font-medium text-slate-600">Start Date</span>
                                   <span className="text-sm font-bold text-slate-800">Sep 01, 2025</span>
                               </div>
                               <div className="flex justify-between items-center">
                                   <span className="text-sm font-medium text-slate-600">Target Launch</span>
                                   <span className="text-sm font-bold text-slate-800">Dec 15, 2025</span>
                               </div>
                               <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                                   <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
                               </div>
                               <div className="text-xs text-right text-slate-400">Week 8 of 14</div>
                           </div>
                      </div>
                      <div className="card bg-white p-6 shadow-sm border border-slate-200">
                           <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Key Stakeholders</h3>
                           <div className="flex -space-x-3 mb-4">
                               {[1,2,3,4].map(i => (
                                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 relative hover:z-10 transition-all hover:scale-110">
                                       <img src={`https://ui-avatars.com/api/?name=Stakeholder+${i}&background=random`} className="rounded-full" alt=""/>
                                   </div>
                               ))}
                           </div>
                           <button className="text-sm text-red-600 font-bold hover:underline">View All Contacts →</button>
                      </div>
                  </div>

                  {/* Project Announcements */}
                  <div className="card bg-white border border-slate-200 shadow-sm p-0">
                      <div className="p-4 border-b border-slate-100 bg-red-50/50 flex items-center gap-2">
                          <AlertCircle size={18} className="text-red-500"/>
                          <h3 className="font-bold text-red-900 text-sm">Latest Announcements</h3>
                      </div>
                      <div className="divide-y divide-slate-100">
                          <div className="p-4 hover:bg-slate-50 transition-colors">
                              <div className="flex justify-between mb-1">
                                  <h4 className="font-bold text-slate-800 text-sm">API V2 Documentation Released</h4>
                                  <span className="text-xs text-slate-400">2 hours ago</span>
                              </div>
                              <p className="text-xs text-slate-500">The new swagger docs are available in the shared drive. Please review before the sprint planning.</p>
                          </div>
                          <div className="p-4 hover:bg-slate-50 transition-colors">
                              <div className="flex justify-between mb-1">
                                  <h4 className="font-bold text-slate-800 text-sm">Client Workshop Rescheduled</h4>
                                  <span className="text-xs text-slate-400">Yesterday</span>
                              </div>
                              <p className="text-xs text-slate-500">The UX workshop is moved to next Tuesday due to availability.</p>
                          </div>
                      </div>
                  </div>
              </div>
          )}

          {/* TAB: JIRA BOARD (PRESERVED) */}
          {activeTab === 'jira' && (
              <div className="h-[80vh] flex flex-col max-w-[1600px] mx-auto">
                  <div className="flex justify-between items-center mb-6 px-1">
                       <div className="flex items-center gap-4">
                           <h3 className="text-xl font-bold text-slate-800">Sprint Board</h3>
                           <div className="flex -space-x-2">
                               {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
                               <button className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-200">+</button>
                           </div>
                       </div>
                       <div className="flex gap-3">
                           <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                               <span className="text-xs text-slate-400 font-bold uppercase">Sprint 42</span>
                               <ChevronRight size={14} className="text-slate-400"/>
                           </div>
                           <button className="btn btn-red text-sm shadow-md flex items-center gap-2 py-1.5 px-4"><PlusCircle size={16}/> New Issue</button>
                       </div>
                  </div>
                  
                  <div className="flex gap-6 h-full pb-4 overflow-x-auto">
                      {['To Do', 'In Progress', 'Code Review', 'Done'].map((col, idx) => (
                          <div key={col} className="w-[340px] flex-shrink-0 flex flex-col bg-slate-100/80 rounded-xl max-h-full">
                              <div className="p-4 flex justify-between items-center">
                                  <div className="flex items-center gap-2">
                                      <h4 className="font-bold text-slate-600 text-xs uppercase tracking-wider">{col}</h4>
                                      <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-[10px] font-bold">3</span>
                                  </div>
                                  <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={16}/></button>
                              </div>

                              <div className="px-3 pb-3 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
                                   {[1, 2, 3].map((cardId) => (
                                       <div key={cardId} className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group relative">
                                           <div className="flex justify-between mb-2">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cardId === 1 ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                                    {cardId === 1 ? '🔥 High' : '⚡ Feature'}
                                                </span>
                                                <button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-slate-500"><MoreHorizontal size={14}/></button>
                                           </div>
                                           <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">
                                               {cardId === 1 ? "Fix critical login bug on Safari iOS" : "Implement new dashboard widget for KPI tracking"}
                                           </p>
                                           <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                                               <span className="text-[10px] font-mono font-bold text-slate-400">KTH-{100 + cardId}</span>
                                               <div className="flex items-center gap-2">
                                                   <div className="flex items-center gap-1 text-slate-300 text-xs">
                                                       <MessageSquare size={12}/> <span className="font-medium">2</span>
                                                   </div>
                                                   <img src={`https://ui-avatars.com/api/?name=Dev+${cardId}&background=random`} className="w-5 h-5 rounded-full ring-1 ring-white" alt=""/>
                                               </div>
                                           </div>
                                       </div>
                                   ))}
                                   <button className="w-full py-2 flex items-center gap-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg text-xs font-bold transition-colors pl-2">
                                       <PlusCircle size={14}/> Create issue
                                   </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          )}

          {/* TAB: MESSAGES (MESSENGER STYLE OVERHAUL) */}
          {activeTab === 'messages' && (
              <div className="flex h-[80vh] bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden max-w-[1400px] mx-auto">
                   
                   {/* Left Sidebar */}
                   <div className="w-[360px] border-r border-slate-100 flex flex-col bg-white">
                       <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-10">
                           <h3 className="text-xl font-bold text-slate-800">Chats</h3>
                           <div className="flex gap-2">
                               <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600"><Video size={20}/></button>
                               <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600"><PlusCircle size={20}/></button>
                           </div>
                       </div>
                       
                       <div className="px-4 pb-4">
                           <div className="relative">
                               <Search className="absolute left-3 top-2.5 text-slate-400" size={18}/>
                               <input className="w-full pl-10 py-2.5 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-red-200 transition-all font-medium placeholder:text-slate-400" placeholder="Search Messenger"/>
                           </div>
                       </div>

                       <div className="overflow-y-auto flex-1 custom-scrollbar px-2 space-y-1">
                           {/* Active Chat */}
                           <div className="p-3 rounded-xl bg-red-50/50 flex items-center gap-3 cursor-pointer">
                               <div className="relative">
                                   <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden"><img src="https://ui-avatars.com/api/?name=Alice+Nguyen&background=random" alt=""/></div>
                                   <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                               </div>
                               <div className="flex-1 min-w-0">
                                   <div className="flex justify-between items-baseline">
                                       <h4 className="font-semibold text-slate-900 text-sm">Alice Nguyen</h4>
                                       <span className="text-[11px] text-slate-500">10:48 AM</span>
                                   </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-slate-500 truncate font-medium">You: Please check the documents...</p>
                                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm">1</div>
                                    </div>
                               </div>
                           </div>

                           {[1,2,3,4].map(i => (
                               <div key={i} className="p-3 rounded-xl hover:bg-slate-50 flex items-center gap-3 cursor-pointer transition-colors group">
                                   <div className="relative">
                                       <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden"><img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt=""/></div>
                                       {i % 2 === 0 && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>}
                                   </div>
                                   <div className="flex-1 min-w-0">
                                       <div className="flex justify-between items-baseline">
                                           <h4 className="font-semibold text-slate-700 text-sm group-hover:text-slate-900">Project Team {i}</h4>
                                           <span className="text-[11px] text-slate-400">Oct 2{i}</span>
                                       </div>
                                       <p className="text-xs text-slate-400 truncate group-hover:text-slate-500">Scheduled meeting for tomorrow...</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>

                   {/* Main Chat Area */}
                   <div className="flex-1 flex flex-col bg-white">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden font-bold text-slate-500 flex items-center justify-center"><img src="https://ui-avatars.com/api/?name=Alice+Nguyen&background=random" alt=""/></div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-base">Alice Nguyen</h3>
                                    <p className="text-xs text-slate-400 font-medium">Active now</p>
                                </div>
                            </div>
                            <div className="flex gap-4 text-red-500">
                                <Phone size={22} className="cursor-pointer hover:bg-red-50 rounded-full p-0.5 transition-colors"/>
                                <Video size={22} className="cursor-pointer hover:bg-red-50 rounded-full p-0.5 transition-colors"/>
                                <Info size={22} className="cursor-pointer hover:bg-red-50 rounded-full p-0.5 transition-colors"/>
                            </div>
                        </div>
                        
                        {/* Chat Feed */}
                        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                             <div className="text-center text-xs font-bold text-slate-300 my-4 uppercase tracking-wider">Today, Oct 24</div>
                             
                             {/* Incoming */}
                             <div className="flex items-end gap-2 group max-w-[70%]">
                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 mb-1"><img src="https://ui-avatars.com/api/?name=Alice+Nguyen&background=random" alt=""/></div>
                                <div className="flex flex-col gap-1">
                                    <div className="px-4 py-2.5 bg-slate-100 rounded-2xl rounded-bl-none text-slate-800 text-sm leading-relaxed">
                                        Hi! I've uploaded the new invoice for October. Let me know if you need anything else.
                                    </div>
                                </div>
                             </div>

                             {/* Incoming Consecutive */}
                             <div className="flex items-end gap-2 group max-w-[70%]">
                                <div className="w-8 h-8 opacity-0 flex-shrink-0 mb-1"></div> {/* Spacer for alignment */}
                                <div className="flex flex-col gap-1">
                                    <div className="px-4 py-2.5 bg-slate-100 rounded-2xl rounded-tl-sm rounded-bl-none text-slate-800 text-sm leading-relaxed">
                                        Also, regarding the API limit, did we get approval to increase it?
                                    </div>
                                    <span className="text-[10px] text-slate-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">10:42 AM</span>
                                </div>
                             </div>

                             {/* Outgoing (Me) */}
                             <div className="flex items-end gap-2 group max-w-[70%] ml-auto flex-row-reverse">
                                 {/* No avatar for me usually in messengers, just bubbles */}
                                <div className="flex flex-col gap-1 items-end">
                                    <div className="px-4 py-2.5 bg-red-600 text-white rounded-2xl rounded-br-none text-sm leading-relaxed shadow-sm">
                                        Thanks Alice! I see the invoice. 👍
                                    </div>
                                    <div className="px-4 py-2.5 bg-red-600 text-white rounded-2xl rounded-tr-sm rounded-br-none text-sm leading-relaxed shadow-sm">
                                        Yes, the API limit was approved this morning. You should see the changes reflected in the dashboard.
                                    </div>
                                    <div className="flex items-center gap-1 mr-1 mt-1">
                                        <CheckSquare size={12} className="text-red-600"/>
                                        <span className="text-[10px] text-slate-400">Seen 10:45 AM</span>
                                    </div>
                                </div>
                             </div>

                             {/* Incoming - File Attachment */}
                             <div className="flex items-end gap-2 group max-w-[70%] mt-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 mb-1"><img src="https://ui-avatars.com/api/?name=Alice+Nguyen&background=random" alt=""/></div>
                                <div className="flex flex-col gap-1">
                                    <div className="p-3 bg-slate-100 rounded-2xl rounded-bl-none text-slate-800 text-sm leading-relaxed border border-slate-200 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-colors">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-500 shadow-sm"><FileText size={20}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Invoice_Oct24.pdf</p>
                                            <p className="text-xs text-slate-500">2.4 MB</p>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             <div ref={messagesEndRef} />
                        </div>
                        
                        {/* Footer Input */}
                        <div className="p-4 bg-white">
                            <div className="flex items-center gap-3">
                                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"><PlusCircle size={22}/></button>
                                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"><ImageIcon size={22}/></button>
                                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"><Paperclip size={22}/></button>
                                <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 flex items-center focus-within:ring-2 focus-within:ring-red-100 transition-all">
                                    <input className="bg-transparent border-none flex-1 focus:ring-0 text-sm placeholder:text-slate-400" placeholder="Aa" />
                                    <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20}/></button>
                                </div>
                                <button className="p-3 bg-red-600 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"><Send size={18} className="ml-0.5"/></button>
                            </div>
                        </div>
                   </div>
              </div>
          )}

          {/* TAB: TIME & INVOICING (PRESERVED) */}
          {activeTab === 'time' && (
              <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                  <div className="grid grid-cols-3 gap-6">
                      <div className="card bg-white p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">€</div>
                          <div>
                              <p className="text-slate-400 text-xs font-bold uppercase">Billable Amount (Oct)</p>
                              <p className="text-2xl font-bold text-slate-800">€8,450.00</p>
                          </div>
                      </div>
                      <div className="card bg-white p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Clock size={24}/></div>
                          <div>
                              <p className="text-slate-400 text-xs font-bold uppercase">Hours Logged</p>
                              <p className="text-2xl font-bold text-slate-800">142h <span className="text-sm text-slate-400 font-normal">/ 160h</span></p>
                          </div>
                      </div>
                      <div className="card bg-white p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><FileText size={24}/></div>
                          <div>
                              <p className="text-slate-400 text-xs font-bold uppercase">Pending Invoice</p>
                              <button className="text-sm font-bold text-red-600 hover:underline">Create Invoice →</button>
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-12 gap-8">
                       <div className="col-span-8 card bg-white border border-slate-200 shadow-sm p-0 overflow-hidden">
                           <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                               <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><CalendarIcon size={18} className="text-slate-400"/> Weekly Timesheet</h3>
                           </div>
                           <table className="table-simple w-full">
                               <thead>
                                   <tr className="bg-slate-50/50">
                                       <th className="pl-6 text-xs uppercase text-slate-500">Day</th>
                                       <th className="text-xs uppercase text-slate-500">Project</th>
                                       <th className="text-xs uppercase text-slate-500">Task</th>
                                       <th className="text-xs uppercase text-slate-500">Hours</th>
                                       <th></th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {[
                                       { day: 'Mon, 21', hours: 8, task: 'API Integration' },
                                       { day: 'Tue, 22', hours: 7.5, task: 'Bug Fixes' },
                                       { day: 'Wed, 23', hours: 8, task: 'Client Meeting & Planning' },
                                       { day: 'Thu, 24', hours: 8, task: 'Database Optimization' },
                                       { day: 'Fri, 25', hours: 6, task: 'Code Review' },
                                   ].map((entry, idx) => (
                                       <tr key={entry.day} className="hover:bg-slate-50 group">
                                           <td className="pl-6 py-4 font-bold text-slate-700 text-sm">{entry.day}</td>
                                           <td className="text-sm text-slate-600">FinTech Platform</td>
                                           <td className="text-sm text-slate-500">{entry.task}</td>
                                           <td className="font-bold text-slate-800">{entry.hours}h</td>
                                           <td className="pr-6 text-right"><button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 px-2">Edit</button></td>
                                       </tr>
                                   ))}
                                   <tr className="bg-slate-50 border-t border-slate-200">
                                       <td colSpan="3" className="pl-6 py-4 font-bold text-right text-slate-500 uppercase text-xs tracking-wider">Total Weekly Hours</td>
                                       <td colSpan="2" className="py-4 font-extrabold text-slate-800 text-lg">37.5h</td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                       <div className="col-span-4 card bg-white border border-slate-200 shadow-sm">
                           <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><DollarSign size={18} className="text-slate-400"/> Recent Invoices</h3>
                           <div className="space-y-3">
                               {[
                                   { id: 'INV-001', date: 'Oct 01', amount: '4,200', status: 'Paid', color: 'green' },
                                   { id: 'INV-002', date: 'Sep 01', amount: '3,800', status: 'Paid', color: 'green' },
                                   { id: 'INV-003', date: 'Oct 15', amount: '1,500', status: 'Pending', color: 'orange' },
                               ].map(inv => (
                                   <div key={inv.id} className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer bg-slate-50/30 group">
                                       <div className="flex justify-between items-center mb-1">
                                           <span className="font-bold text-slate-800 text-sm">{inv.id}</span>
                                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide bg-${inv.color}-100 text-${inv.color}-700`}>{inv.status}</span>
                                       </div>
                                       <div className="flex justify-between items-center mt-2">
                                           <span className="text-xs text-slate-400">{inv.date}</span>
                                           <span className="font-bold text-slate-700">€{inv.amount}</span>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>
                  </div>
              </div>
          )}
  
          {/* TAB: DOCUMENTS (NEW IMPLEMENTATION - File Repo) */}
          {activeTab === 'docs' && (
               <div className="max-w-7xl mx-auto">
                   <div className="grid grid-cols-12 gap-6 h-[75vh]">
                       {/* Folder Sidebar */}
                       <div className="col-span-3 card bg-white p-4 overflow-y-auto">
                           <button className="btn btn-red w-full mb-4 shadow-md">+ Upload File</button>
                           <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Folders</h3>
                           <div className="space-y-1">
                               {['All Documents', 'Contracts', 'Invoices', 'Tech Specs', 'Assets', 'Legal'].map((folder, i) => (
                                   <div key={folder} className={`p-2 rounded-lg flex items-center gap-2 cursor-pointer ${i===0 ? 'bg-red-50 text-red-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                                       <Folder size={18} className={i===0 ? 'text-red-500 text-fill-current' : 'text-slate-400'} fill={i===0 ? "currentColor" : "none"}/>
                                       <span className="text-sm">{folder}</span>
                                   </div>
                               ))}
                           </div>
                       </div>
                       
                       {/* File Grid */}
                       <div className="col-span-9 space-y-4">
                           <div className="flex justify-between items-center">
                               <h2 className="text-xl font-bold text-slate-800">All Documents</h2>
                               <div className="flex gap-2">
                                   <button className="p-2 hover:bg-white rounded"><Filter size={18} className="text-slate-400"/></button>
                                   <button className="p-2 hover:bg-white rounded"><MoreHorizontal size={18} className="text-slate-400"/></button>
                               </div>
                           </div>
                           
                           <div className="grid grid-cols-4 gap-4">
                               {/* File Cards */}
                               {[
                                   { name: 'Service_Agreement_v2.pdf', type: 'PDF', size: '2.4 MB', date: 'Oct 24, 2025' },
                                   { name: 'Q4_Financials.xlsx', type: 'XLS', size: '1.1 MB', date: 'Oct 22, 2025' },
                                   { name: 'Logo_Pack_Brand.zip', type: 'ZIP', size: '45 MB', date: 'Oct 15, 2025' },
                                   { name: 'API_Spec_OAS3.json', type: 'JSON', size: '120 KB', date: 'Oct 10, 2025' },
                                   { name: 'NDA_Client_Signed.pdf', type: 'PDF', size: '1.8 MB', date: 'Oct 01, 2025' },
                               ].map((file, i) => (
                                   <div key={i} className="card bg-white p-4 hover:shadow-md cursor-pointer group hover:border-red-300 transition-all">
                                       <div className="flex justify-between items-start mb-3">
                                           <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${file.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                               {file.type}
                                           </div>
                                           <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500"><MoreHorizontal size={16}/></button>
                                       </div>
                                       <p className="font-bold text-slate-800 text-sm truncate mb-1" title={file.name}>{file.name}</p>
                                       <p className="text-xs text-slate-400">{file.size} • {file.date}</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
           )}

           {/* TAB: CALENDAR (NEW IMPLEMENTATION - Availability) */}
           {activeTab === 'calendar' && (
               <div className="max-w-7xl mx-auto card bg-white p-0 overflow-hidden shadow-sm h-[80vh] flex flex-col">
                   <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                       <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                           <CalendarIcon size={24} className="text-red-500"/> Team Availability & Schedule
                       </h2>
                       <div className="flex items-center gap-4">
                           <div className="flex items-center gap-2 text-sm">
                               <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span> Vacation</div>
                               <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Sick</div>
                               <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Work</div>
                           </div>
                           <div className="h-6 w-[1px] bg-slate-200"></div>
                           <button className="btn btn-red shadow-sm">+ Add Event</button>
                       </div>
                   </div>
                   
                   <div className="flex-1 p-6 bg-slate-50/50">
                       <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                           {/* Weekday Headers */}
                           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                               <div key={day} className="bg-slate-50 p-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">{day}</div>
                           ))}
                           
                           {/* Days - Mock Data for Oct 2025 (Partial) */}
                           {Array.from({length: 35}).map((_, i) => {
                               const day = i - 2; // Offset for month start
                               const isCurrentMonth = day > 0 && day <= 31;
                               const isToday = day === 24;
                               
                               return (
                                   <div key={i} className={`bg-white min-h-[120px] p-2 relative ${!isCurrentMonth ? 'bg-slate-50/30' : 'hover:bg-slate-50'} transition-colors group`}>
                                       {isCurrentMonth && (
                                           <>
                                               <span className={`text-sm font-bold ${isToday ? 'bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md' : 'text-slate-700'}`}>
                                                   {day}
                                               </span>
                                               
                                               {/* Mock Events */}
                                               <div className="mt-2 space-y-1">
                                                   {day === 15 && <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200 font-medium truncate">🏝️ Alice Off</div>}
                                                   {day === 16 && <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200 font-medium truncate">🏝️ Alice Off</div>}
                                                   {day === 24 && <div className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200 font-medium truncate">🎥 Client Demo</div>}
                                                   {day === 28 && <div className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-200 font-medium truncate">🤒 Bob Sick</div>}
                                               </div>

                                               <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500"><PlusCircle size={14}/></button>
                                           </>
                                       )}
                                   </div>
                               );
                           })}
                       </div>
                   </div>
               </div>
           )}

            {/* TAB: ACCESSES (PRESERVED) */}
           {activeTab === 'access' && (
               <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                   <div className="bg-slate-900 text-white p-8 rounded-2xl flex justify-between items-center shadow-xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                       <div className="relative z-10">
                           <h2 className="text-2xl font-bold flex items-center gap-3"><Shield size={28} className="text-green-400"/> Secure Credential Vault</h2>
                           <p className="text-slate-400 text-sm opacity-80 mt-2 max-w-lg">Manage and share encrypted access for project resources.</p>
                       </div>
                       <button className="btn bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm relative z-10 font-bold flex items-center gap-2"><Key size={18}/> Add Secret</button>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {/* Server Access */}
                       <div className="card bg-white p-0 border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                           <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                               <div className="flex items-center gap-2">
                                   <div className="p-1.5 bg-white border border-slate-200 rounded shadow-sm"><Key size={14} className="text-slate-500"/></div>
                                   <h3 className="font-bold text-slate-700 text-sm">Production Server</h3>
                               </div>
                               <span className="badge badge-red">Restricted</span>
                           </div>
                           <div className="p-4 space-y-3">
                               <div>
                                   <p className="text-[10px] uppercase font-bold text-slate-400">Host</p>
                                   <p className="text-sm font-mono text-slate-700 bg-slate-50 p-1 rounded border border-slate-100 mt-1 select-all">192.168.1.42</p>
                               </div>
                               <div>
                                   <p className="text-[10px] uppercase font-bold text-slate-400">Username</p>
                                   <p className="text-sm font-mono text-slate-700 bg-slate-50 p-1 rounded border border-slate-100 mt-1 select-all">kothon_admin</p>
                               </div>
                               <button className="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                   Click to Copy Password
                               </button>
                           </div>
                       </div>

                       {/* Database Access */}
                       <div className="card bg-white p-0 border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                           <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                               <div className="flex items-center gap-2">
                                   <div className="p-1.5 bg-white border border-slate-200 rounded shadow-sm"><Key size={14} className="text-slate-500"/></div>
                                   <h3 className="font-bold text-slate-700 text-sm">PostgreSQL DB</h3>
                               </div>
                               <span className="badge badge-green">Shared</span>
                           </div>
                           <div className="p-4 space-y-3">
                               <div>
                                   <p className="text-[10px] uppercase font-bold text-slate-400">Connection String</p>
                                   <p className="text-sm font-mono text-slate-700 bg-slate-50 p-1 rounded border border-slate-100 mt-1 truncate">postgresql://user:***@db.service...</p>
                               </div>
                               <button className="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                   Click to Copy Connection
                               </button>
                           </div>
                       </div>

                       {/* CMS Admin */}
                       <div className="card bg-white p-0 border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                           <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                               <div className="flex items-center gap-2">
                                   <div className="p-1.5 bg-white border border-slate-200 rounded shadow-sm"><Key size={14} className="text-slate-500"/></div>
                                   <h3 className="font-bold text-slate-700 text-sm">WordPress Admin</h3>
                               </div>
                               <span className="badge badge-blue">Client</span>
                           </div>
                           <div className="p-4 space-y-3">
                               <div>
                                   <p className="text-[10px] uppercase font-bold text-slate-400">Login URL</p>
                                   <a href="#" className="text-sm text-blue-600 hover:underline block truncate mt-1">kothontech.com/wp-admin</a>
                               </div>
                               <button className="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                   Click to Copy Credentials
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           )}
           
           {activeTab === 'onboard' && (
                <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">Lifecycle Management</h2>
                            <p className="text-slate-500">Onboarding & Offboarding workflows</p>
                        </div>
                        <button className="btn btn-red shadow-sm flex items-center gap-2"><PlusCircle size={18}/> Start Workflow</button>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Onboarding Section */}
                        <div className="card bg-white p-0 border border-slate-200 shadow-sm overflow-hidden">
                             <div className="p-6 border-b border-slate-100 bg-green-50/50 flex justify-between items-center">
                                 <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><User size={20} className="text-green-600"/> Onboarding</h3>
                                 <span className="badge badge-green">2 Active</span>
                             </div>
                             <div className="p-6 space-y-6">
                                 {/* Item 1 */}
                                 <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                     <div className="flex justify-between items-start mb-3">
                                         <div className="flex items-center gap-3">
                                             <img src="https://ui-avatars.com/api/?name=Sarah+Junior&background=random" className="w-10 h-10 rounded-full" alt=""/>
                                             <div>
                                                 <h4 className="font-bold text-slate-800 text-sm">Sarah Junior</h4>
                                                 <p className="text-xs text-slate-500">Frontend Dev • Started Oct 20</p>
                                             </div>
                                         </div>
                                         <span className="text-xs font-bold text-slate-400">Step 3/5</span>
                                     </div>
                                     <div className="w-full h-2 bg-slate-100 rounded-full mb-4">
                                         <div className="h-full bg-green-500 rounded-full" style={{width: '60%'}}></div>
                                     </div>
                                     <div className="space-y-2">
                                         <div className="flex items-center gap-2 text-sm text-slate-600">
                                             <CheckSquare size={16} className="text-green-500" fill="currentColor" stroke="white"/>
                                             <span className="line-through opacity-60">Sign Contract</span>
                                         </div>
                                         <div className="flex items-center gap-2 text-sm text-slate-600">
                                             <CheckSquare size={16} className="text-green-500" fill="currentColor" stroke="white"/>
                                             <span className="line-through opacity-60">Setup Company Email</span>
                                         </div>
                                         <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                                             <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                                             <span>Hardware Delivery</span>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Item 2 */}
                                 <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow opacity-70">
                                     <div className="flex justify-between items-start mb-3">
                                         <div className="flex items-center gap-3">
                                             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">NC</div>
                                             <div>
                                                 <h4 className="font-bold text-slate-800 text-sm">New Client: Zenith</h4>
                                                 <p className="text-xs text-slate-500">Enterprise Plan • Pending</p>
                                             </div>
                                         </div>
                                         <span className="text-xs font-bold text-slate-400">Step 0/4</span>
                                     </div>
                                     <div className="w-full h-2 bg-slate-100 rounded-full mb-4">
                                         <div className="h-full bg-slate-300 rounded-full" style={{width: '5%'}}></div>
                                     </div>
                                     <button className="w-full py-2 text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 rounded">Continue Setup</button>
                                 </div>
                             </div>
                        </div>

                        {/* Offboarding Section */}
                        <div className="card bg-white p-0 border border-slate-200 shadow-sm overflow-hidden">
                             <div className="p-6 border-b border-slate-100 bg-red-50/50 flex justify-between items-center">
                                 <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><User size={20} className="text-red-500"/> Offboarding</h3>
                                 <span className="badge badge-red">1 Pending</span>
                             </div>
                             <div className="p-6 space-y-6">
                                 {/* Item 1 */}
                                 <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                     <div className="flex justify-between items-start mb-3">
                                         <div className="flex items-center gap-3">
                                             <img src="https://ui-avatars.com/api/?name=Mike+Old&background=random" className="w-10 h-10 rounded-full grayscale" alt=""/>
                                             <div>
                                                 <h4 className="font-bold text-slate-800 text-sm">Mike Old</h4>
                                                 <p className="text-xs text-slate-500">Leaving Nov 01 • Voluntary</p>
                                             </div>
                                         </div>
                                         <span className="text-xs font-bold text-slate-400">Step 1/4</span>
                                     </div>
                                     <div className="w-full h-2 bg-slate-100 rounded-full mb-4">
                                         <div className="h-full bg-red-500 rounded-full" style={{width: '25%'}}></div>
                                     </div>
                                     <div className="space-y-2">
                                         <div className="flex items-center gap-2 text-sm text-slate-600">
                                             <CheckSquare size={16} className="text-red-500" fill="currentColor" stroke="white"/>
                                             <span className="line-through opacity-60">Resignation Letter Received</span>
                                         </div>
                                         <div className="flex items-center gap-2 text-sm text-slate-800 font-bold">
                                             <AlertCircle size={16} className="text-red-500"/>
                                             <span>Revoke AWS Access</span>
                                         </div>
                                         <div className="flex items-center gap-2 text-sm text-slate-400">
                                              <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                                             <span>Exit Interview</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="p-4 bg-slate-50 text-center">
                                 <p className="text-xs text-slate-400">All archival records are automatically moved to Documents.</p>
                             </div>
                        </div>
                    </div>
                </div>
           )}

        </main>
      </div>
    );
};

export default Module2_Communication;
