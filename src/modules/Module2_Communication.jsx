import React, { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../shared/DataContext';
import { LayoutDashboard, MessageSquare, Clock, Trello, FileText, Key, CheckSquare, Briefcase, User, Shield, AlertCircle, PlusCircle, MoreHorizontal, Send, Paperclip, Search, Bell, Calendar as CalendarIcon, ChevronRight, DollarSign, Download, Filter, Phone, Video, Info, Folder, File, Image as ImageIcon, Smile } from 'lucide-react';

const Module2_Communication = () => {
    const { data, addMessage } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedChat, setSelectedChat] = useState('alice');
    const [messageInput, setMessageInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (activeTab === 'messages') {
            setTimeout(() => {
                scrollToBottom();
            }, 100);
        }
    }, [activeTab, data.messages]);

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

          {/* TAB: JIRA BOARD (REAL SPRINT BOARD DESIGN) */}
          {activeTab === 'jira' && (
              <div className="h-[85vh] flex flex-col max-w-[1800px] mx-auto">
                  {/* Sprint Header - Jira Style */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200 mb-6">
                       <div className="flex justify-between items-center mb-4">
                           <div className="flex items-center gap-6">
                               <div>
                                   <h3 className="text-3xl font-bold text-slate-900 mb-1">Sprint Board</h3>
                                   <p className="text-slate-600 text-sm">Backlog + Active Tickets with KPIs</p>
                               </div>
                               <div className="flex -space-x-2 ml-4">
                                   {[1,2,3,4].map(i => (
                                       <div key={i} className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-red-400 to-red-600 shadow-md ring-2 ring-slate-100">
                                           <img src={`https://ui-avatars.com/api/?name=Dev+${i}&background=dc2626&color=fff`} className="rounded-full" alt=""/>
                                       </div>
                                   ))}
                                   <button className="w-10 h-10 rounded-full border-3 border-white bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-500 hover:bg-slate-200 shadow-md ring-2 ring-slate-100">+</button>
                               </div>
                           </div>
                           <div className="flex gap-3">
                               <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3 rounded-xl shadow-lg">
                                   <span className="text-sm font-bold">Sprint 42</span>
                                   <ChevronRight size={18}/>
                               </div>
                               <button className="btn btn-red text-sm shadow-lg flex items-center gap-2 py-3 px-6 font-bold hover:shadow-xl transition-all">
                                   <PlusCircle size={18}/> Create Issue
                               </button>
                           </div>
                       </div>
                       
                       {/* Sprint KPIs - Jira Style */}
                       <div className="grid grid-cols-5 gap-4 pt-4 border-t border-slate-200">
                           <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                               <p className="text-xs text-slate-500 font-bold uppercase mb-1">Backlog</p>
                               <p className="text-2xl font-bold text-slate-900">15</p>
                           </div>
                           <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                               <p className="text-xs text-red-600 font-bold uppercase mb-1">Open Tickets</p>
                               <p className="text-2xl font-bold text-red-600">23</p>
                           </div>
                           <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                               <p className="text-xs text-yellow-600 font-bold uppercase mb-1">In Progress</p>
                               <p className="text-2xl font-bold text-yellow-600">8</p>
                           </div>
                           <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                               <p className="text-xs text-green-600 font-bold uppercase mb-1">Done</p>
                               <p className="text-2xl font-bold text-green-600">12</p>
                           </div>
                           <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                               <p className="text-xs text-blue-600 font-bold uppercase mb-1">Velocity</p>
                               <p className="text-2xl font-bold text-blue-600">18 pts</p>
                           </div>
                       </div>
                  </div>
                  
                  {/* Kanban Board - Real Jira Style */}
                  <div className="flex gap-4 h-full pb-4 overflow-x-auto">
                      {[
                          { name: 'Backlog', color: 'slate', count: 5 },
                          { name: 'To Do', color: 'red', count: 8 },
                          { name: 'In Progress', color: 'yellow', count: 6 },
                          { name: 'Code Review', color: 'blue', count: 4 },
                          { name: 'Done', color: 'green', count: 10 }
                      ].map((col, idx) => (
                          <div key={col.name} className="w-[360px] flex-shrink-0 flex flex-col bg-white rounded-xl border-2 border-slate-200 shadow-lg max-h-full overflow-hidden">
                              <div className={`p-4 border-b-2 ${col.color === 'slate' ? 'bg-slate-100 border-slate-300' : col.color === 'red' ? 'bg-red-100 border-red-300' : col.color === 'yellow' ? 'bg-yellow-100 border-yellow-300' : col.color === 'blue' ? 'bg-blue-100 border-blue-300' : 'bg-green-100 border-green-300'}`}>
                                  <div className="flex justify-between items-center">
                                      <div className="flex items-center gap-3">
                                          <div className={`w-4 h-4 rounded-full ${col.color === 'slate' ? 'bg-slate-500' : col.color === 'red' ? 'bg-red-500' : col.color === 'yellow' ? 'bg-yellow-500' : col.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'} shadow-sm`}></div>
                                          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{col.name}</h4>
                                      </div>
                                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-700 border-2 border-slate-300 shadow-sm">{col.count}</span>
                                  </div>
                              </div>

                              <div className="px-3 py-4 space-y-3 overflow-y-auto flex-1 custom-scrollbar bg-gradient-to-b from-white to-slate-50/20">
                                   {Array.from({length: col.count > 3 ? 3 : col.count}).map((_, cardIdx) => {
                                       const cardId = cardIdx + 1;
                                       const issueTypes = ['Bug', 'Story', 'Task', 'Epic'];
                                       const issueType = issueTypes[cardIdx % issueTypes.length];
                                       const priorities = ['High', 'Medium', 'Low'];
                                       const priority = priorities[cardIdx % priorities.length];
                                       
                                       return (
                                       <div key={cardIdx} className="p-4 bg-white rounded-lg shadow-md border-2 border-slate-200 hover:border-red-400 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative">
                                           <div className="flex justify-between items-start mb-2">
                                                <div className="flex gap-2 flex-wrap">
                                                    <span className={`text-[10px] font-bold px-2 py-1 rounded border ${
                                                        issueType === 'Bug' ? 'bg-red-50 text-red-700 border-red-200' :
                                                        issueType === 'Story' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                        issueType === 'Task' ? 'bg-green-50 text-green-700 border-green-200' :
                                                        'bg-purple-50 text-purple-700 border-purple-200'
                                                    }`}>
                                                        {issueType === 'Bug' ? '🐛' : issueType === 'Story' ? '📖' : issueType === 'Task' ? '✓' : '🎯'} {issueType}
                                                    </span>
                                                    {priority === 'High' && <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange-50 text-orange-700 border border-orange-200">🔥 High</span>}
                                                </div>
                                                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 p-1 rounded transition-all"><MoreHorizontal size={14}/></button>
                                           </div>
                                           <p className="text-sm font-bold text-slate-900 mb-3 leading-snug">
                                               {issueType === 'Bug' ? "Fix critical login bug on Safari iOS" : 
                                                issueType === 'Story' ? "Implement new dashboard widget for KPI tracking" : 
                                                issueType === 'Task' ? "Update API documentation for v2 endpoints" :
                                                "Refactor authentication service for better performance"}
                                           </p>
                                           <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                               <div className="flex items-center gap-2">
                                                   <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">KTH-{100 + cardId}</span>
                                                   <div className="flex items-center gap-1 text-slate-400 text-xs">
                                                       <MessageSquare size={12}/> <span className="font-semibold">{cardIdx + 1}</span>
                                                   </div>
                                               </div>
                                               <div className="flex items-center gap-2">
                                                   <img src={`https://ui-avatars.com/api/?name=Dev+${cardId}&background=dc2626&color=fff`} className="w-6 h-6 rounded-full ring-2 ring-white shadow-sm" alt=""/>
                                               </div>
                                           </div>
                                       </div>
                                       );
                                   })}
                                   <button className="w-full py-3 flex items-center justify-center gap-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold transition-all border-2 border-dashed border-slate-300 hover:border-red-300 shadow-sm">
                                       <PlusCircle size={14}/> Create issue
                                   </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          )}

          {/* TAB: MESSAGES (ULTRA PREMIUM MESSENGER DESIGN) */}
          {activeTab === 'messages' && (() => {
              const chats = [
                  { 
                                id: 'alice', 
                      name: 'Alice Nguyen', 
                      avatar: 'AN', 
                      lastMessage: 'Please check the documents...', 
                      time: '10:48 AM', 
                      unread: 1, 
                      online: true, 
                      role: 'Client', 
                      status: 'Online',
                      initials: 'AN'
                  },
                  { 
                      id: 'team1', 
                      name: 'Project Team 1', 
                      avatar: 'T1', 
                      lastMessage: 'Scheduled meeting for tomorrow...', 
                      time: 'Oct 22', 
                      unread: 0, 
                      online: false, 
                      role: 'Team', 
                      status: '5 members',
                      initials: 'T1'
                  },
                  { 
                      id: 'team2', 
                      name: 'Project Team 2', 
                      avatar: 'T2', 
                      lastMessage: 'Code review completed', 
                      time: 'Oct 21', 
                      unread: 0, 
                      online: true, 
                      role: 'Team', 
                      status: '3 online',
                      initials: 'T2'
                  },
                  { 
                      id: 'team3', 
                      name: 'Project Team 3', 
                      avatar: 'T3', 
                      lastMessage: 'New requirements added', 
                      time: 'Oct 20', 
                      unread: 0, 
                      online: false, 
                      role: 'Team', 
                      status: 'Active 2h ago',
                      initials: 'T3'
                  },
              ];
              
              const currentChat = chats.find(c => c.id === selectedChat) || chats[0];
              
              // Enhanced sample messages
              const sampleMessages = [
                  { 
                      id: 'sample-1', 
                      projectId: 'proj-1', 
                      sender: 'client', 
                      content: 'Hi! I\'ve uploaded the new invoice for October. Let me know if you need anything else.', 
                      createdAt: new Date(Date.now() - 3600000).toISOString(),
                      attachments: [{type: 'pdf', name: 'Invoice_Oct_2025.pdf', size: '2.4MB'}]
                  },
                  { 
                      id: 'sample-2', 
                      projectId: 'proj-1', 
                      sender: 'client', 
                      content: 'Also, regarding the API limit, did we get approval to increase it?', 
                      createdAt: new Date(Date.now() - 3300000).toISOString() 
                  },
                  { 
                      id: 'sample-3', 
                      projectId: 'proj-1', 
                      sender: 'me', 
                      content: 'Thanks! I see the invoice. 👍', 
                      createdAt: new Date(Date.now() - 3000000).toISOString() 
                  },
                  { 
                      id: 'sample-4', 
                      projectId: 'proj-1', 
                      sender: 'me', 
                      content: 'Yes, the API limit was approved this morning. You should see the changes reflected in the dashboard.', 
                      createdAt: new Date(Date.now() - 2700000).toISOString() 
                  },
                  { 
                      id: 'sample-5', 
                      projectId: 'proj-1', 
                      sender: 'client', 
                      content: 'Perfect! I\'ll review the changes today. Also, can we schedule a quick sync about the upcoming sprint?', 
                      createdAt: new Date(Date.now() - 2400000).toISOString() 
                  },
                  { 
                      id: 'sample-6', 
                      projectId: 'proj-1', 
                      sender: 'me', 
                      content: 'Absolutely. How about tomorrow at 2 PM? I\'ll send a calendar invite.', 
                      createdAt: new Date(Date.now() - 2100000).toISOString() 
                  },
                  { 
                      id: 'sample-7', 
                      projectId: 'proj-1', 
                      sender: 'client', 
                      content: '2 PM works great. Looking forward to it!', 
                      createdAt: new Date(Date.now() - 1800000).toISOString(),
                      reactions: ['👍']
                  },
              ];
              
              const allMessages = data.messages.filter(m => m.projectId === 'proj-1').length > 0 
                  ? data.messages.filter(m => m.projectId === 'proj-1') 
                  : sampleMessages;
              
              const handleSendMessage = () => {
                  if (messageInput.trim()) {
                      addMessage({
                          id: `msg-${Date.now()}`,
                          projectId: 'proj-1',
                          sender: 'me',
                          content: messageInput,
                          createdAt: new Date().toISOString()
                      });
                      setMessageInput('');
                      setTimeout(() => {
                          if (messagesEndRef.current) {
                              messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
                          }
                      }, 100);
                  }
              };
              
              return (
                  <div className="flex h-[85vh] bg-gradient-to-br from-slate-50 via-white to-slate-50/50 rounded-3xl shadow-2xl overflow-hidden max-w-[1600px] mx-auto border border-white/50 backdrop-blur-sm relative">
                      
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
                      
                      {/* Left Sidebar - Messenger Style */}
                      <div className="w-[380px] border-r border-slate-200/60 flex flex-col bg-white/95 backdrop-blur-sm">
                          {/* Premium Header */}
                          <div className="p-6 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60">
                              <div className="flex items-center justify-between mb-6">
                                  <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                      Conversations
                                  </h2>
                                  <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 active:scale-95 shadow-sm border border-slate-200 bg-white">
                                      <PlusCircle size={22} className="text-slate-700"/>
                                  </button>
                              </div>
                              {/* Premium Search */}
                              <div className="relative group">
                                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20}/>
                                  <input 
                                      type="text"
                                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-red-300 focus:shadow-lg focus:shadow-red-100/50 focus:outline-none transition-all duration-300 font-medium" 
                                      placeholder="Search conversations..."
                                  />
                              </div>
                          </div>
                          
                          {/* Chat List */}
                          <div className="flex-1 overflow-y-auto">
                              <div className="p-4">
                                  {/* Header */}
                                  <div className="flex items-center justify-between mb-4 px-2">
                                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recent</span>
                                      <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 rounded-full shadow-md">
                                          4 Active
                                      </span>
                                  </div>
                                  
                                  {/* Premium Chat Items */}
                                  <div className="space-y-2">
                                      {chats.map(chat => (
                                          <div 
                                              key={chat.id} 
                                              onClick={() => setSelectedChat(chat.id)}
                                              className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden ${
                                                  selectedChat === chat.id 
                                                      ? 'bg-gradient-to-r from-red-50 via-red-50/80 to-white shadow-xl shadow-red-100/50 border border-red-200/80 transform scale-[1.02]' 
                                                      : 'hover:bg-white shadow-sm hover:shadow-md border border-transparent hover:border-slate-200/80'
                                              }`}
                                          >
                                              {/* Animated gradient border for selected */}
                                              {selectedChat === chat.id && (
                                                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-300/10 to-transparent rounded-2xl"></div>
                                              )}
                                              
                                              <div className="relative flex items-center gap-4">
                                                  {/* Premium Avatar with status */}
                                                  <div className="relative">
                                                      <div className={`relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg ${
                                                          selectedChat === chat.id 
                                                              ? 'ring-2 ring-red-400 ring-offset-2 ring-offset-white' 
                                                              : 'ring-1 ring-slate-100'
                                                      }`}>
                                                          {/* Gradient background for initials */}
                                                          <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-lg ${
                                                              selectedChat === chat.id 
                                                                  ? 'bg-gradient-to-br from-red-500 to-red-600' 
                                                                  : 'bg-gradient-to-br from-slate-600 to-slate-700'
                                                          }`}>
                                                              {chat.initials}
                                                          </div>
                                                      </div>
                                                      {/* Online status indicator */}
                                                      {chat.online && (
                                                          <div className="absolute -bottom-1 -right-1">
                                                              <div className="relative">
                                                                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                                                                  <div className="absolute inset-0 animate-ping bg-green-400 rounded-full opacity-75"></div>
                                                              </div>
                                                          </div>
                                                      )}
                                                  </div>
                                                  
                                                  {/* Chat Info */}
                                                  <div className="flex-1 min-w-0">
                                                      <div className="flex justify-between items-center mb-2">
                                                          <div className="flex items-center gap-2">
                                                              <h4 className="font-bold text-slate-900 text-sm truncate">{chat.name}</h4>
                                                              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                                                                  chat.role === 'Client' 
                                                                      ? 'bg-red-100 text-red-700 border border-red-200' 
                                                                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                                                              }`}>
                                                                  {chat.role}
                                                              </span>
                                                          </div>
                                                          <span className="text-xs font-medium text-slate-400">{chat.time}</span>
                                                      </div>
                                                      <p className="text-sm text-slate-600 truncate mb-1 font-medium">{chat.lastMessage}</p>
                                                      <div className="flex justify-between items-center">
                                                          <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                                              {chat.online ? (
                                                                  <>
                                                                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                                      {chat.status}
                                                                  </>
                                                              ) : chat.status}
                                                          </span>
                                                          {chat.unread > 0 && (
                                                              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                                                                  {chat.unread}
                                                              </div>
                                                          )}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Main Chat Area - Ultra Premium Messenger */}
                      <div className="flex-1 flex flex-col bg-gradient-to-b from-white/95 via-white to-slate-50/30">
                          {/* Chat Header */}
                          <div className="px-8 py-5 border-b border-slate-200/60 flex justify-between items-center bg-white/95 backdrop-blur-sm">
                              <div className="flex items-center gap-5">
                                  <div className="relative">
                                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 overflow-hidden shadow-xl ring-2 ring-red-100 ring-offset-2">
                                          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                                              {currentChat.initials}
                                          </div>
                                      </div>
                                      {currentChat.online && (
                                          <div className="absolute -bottom-1 -right-1">
                                              <div className="relative">
                                                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
                                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                                  </div>
                                                  <div className="absolute inset-0 animate-ping bg-green-400 rounded-full opacity-75"></div>
                                              </div>
                                          </div>
                                      )}
                                  </div>
                                  <div>
                                      <div className="flex items-center gap-3 mb-1">
                                          <h3 className="font-bold text-slate-900 text-2xl">{currentChat.name}</h3>
                                          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                                              currentChat.role === 'Client' 
                                                  ? 'bg-red-100 text-red-700 border border-red-200' 
                                                  : 'bg-blue-100 text-blue-700 border border-blue-200'
                                          }`}>
                                              {currentChat.role}
                                          </span>
                                      </div>
                                      <p className="text-sm text-slate-600 flex items-center gap-2">
                                          {currentChat.online ? (
                                              <>
                                                  <span className="flex items-center gap-1">
                                                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                      <span className="font-medium">Online</span>
                                                  </span>
                                                  <span className="text-slate-400">•</span>
                                                  <span className="text-slate-500 italic">Typing...</span>
                                              </>
                                          ) : (
                                              <>
                                                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                                  <span className="font-medium">{currentChat.status}</span>
                                              </>
                                          )}
                                      </p>
                                  </div>
                              </div>
                              <div className="flex gap-2">
                                  <button className="p-3 hover:bg-red-50 rounded-xl text-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm border border-slate-200 hover:border-red-200 bg-white">
                                      <Phone size={20}/>
                                  </button>
                                  <button className="p-3 hover:bg-red-50 rounded-xl text-red-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm border border-slate-200 hover:border-red-200 bg-white">
                                      <Video size={20}/>
                                  </button>
                                  <button className="p-3 hover:bg-slate-100 rounded-xl text-slate-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm border border-slate-200 bg-white">
                                      <Info size={20}/>
                                  </button>
                              </div>
                          </div>
                          
                          {/* Messages Container with Messenger Effects */}
                          <div className="flex-1 relative overflow-hidden">
                              {/* Message background pattern */}
                              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]"></div>
                              
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 pointer-events-none"></div>
                              
                              <div className="relative h-full overflow-y-auto custom-scrollbar">
                                  <div className="p-6 max-w-4xl mx-auto space-y-4">
                                      {/* Date Separator */}
                                      <div className="relative my-8">
                                          <div className="absolute inset-0 flex items-center">
                                              <div className="w-full border-t border-slate-200/40"></div>
                                          </div>
                                          <div className="relative flex justify-center">
                                              <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm backdrop-blur-sm">
                                                  <span className="text-xs font-bold text-slate-500">Today, October 24, 2025</span>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      {/* Ultra Premium Messages */}
                                      {allMessages.map((msg, index) => {
                                          const isMe = msg.sender === 'me';
                                          const isSameSender = index > 0 && allMessages[index - 1].sender === msg.sender;
                                          const showTimeSeparator = index === 0 || 
                                              new Date(msg.createdAt).getTime() - new Date(allMessages[index - 1].createdAt).getTime() > 300000; // 5 minutes
                                          
                                          return (
                                          <div key={msg.id}>
                                              {/* Time separator for large gaps */}
                                              {showTimeSeparator && (
                                                  <div className="flex justify-center my-4">
                                                      <span className="text-xs text-slate-400 bg-white/80 px-3 py-1 rounded-full border border-slate-200/50">
                                                          {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                      </span>
                                                  </div>
                                              )}
                                              
                                              <div className={`flex items-end gap-3 mb-1 ${isMe ? 'justify-end' : ''}`}>
                                                  {/* Sender Avatar (only for first message in sequence) */}
                                                  {!isMe && !isSameSender && (
                                                      <div className="flex-shrink-0">
                                                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden shadow-md ring-1 ring-slate-100 flex items-center justify-center">
                                                              <span className="text-white font-bold text-sm">{currentChat.initials.charAt(0)}</span>
                                                          </div>
                                                      </div>
                                                  )}
                                                  
                                                  {!isMe && isSameSender && (
                                                      <div className="w-10 flex-shrink-0"></div>
                                                  )}
                                                  
                                                  {/* Message Bubble */}
                                                  <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[70%]`}>
                                                      {/* Sender name (only for first message in sequence from others) */}
                                                      {!isMe && !isSameSender && (
                                                          <span className="text-xs font-medium text-slate-500 mb-1 ml-1">{currentChat.name}</span>
                                                      )}
                                                      
                                                      <div className={`relative group ${isMe ? 'mr-1' : 'ml-1'}`}>
                                                          {/* Message bubble */}
                                                          <div className={`relative px-5 py-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-200 ${
                                                              isMe 
                                                                  ? 'bg-gradient-to-br from-red-500 to-red-600 text-white rounded-br-md' 
                                                                  : 'bg-white text-slate-800 rounded-bl-md border border-slate-200/60'
                                                          }`}>
                                                              <p className="text-sm leading-relaxed">{msg.content}</p>
                                                              
                                                              {/* Message reactions */}
                                                              {msg.reactions && (
                                                                  <div className="flex gap-1 mt-2">
                                                                      {msg.reactions.map((reaction, idx) => (
                                                                          <div key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                                              {reaction}
                                                                          </div>
                                                                      ))}
                                                                  </div>
                                                              )}
                                                          </div>
                                                          
                                                          {/* Message tail */}
                                                          {!isSameSender && (
                                                              <div className={`absolute bottom-0 w-3 h-3 transform rotate-45 ${
                                                                  isMe 
                                                                      ? '-right-1.5 bg-gradient-to-br from-red-500 to-red-600' 
                                                                      : '-left-1.5 bg-white border-l border-b border-slate-200/60'
                                                              }`}></div>
                                                          )}
                                                          
                                                          {/* Hover actions */}
                                                          <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 ${
                                                              isMe ? '-left-14' : '-right-14'
                                                          }`}>
                                                              <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:scale-110 transition-transform">
                                                                  <MessageSquare size={14} className="text-slate-600"/>
                                                              </button>
                                                              <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:scale-110 transition-transform">
                                                                  <MoreHorizontal size={14} className="text-slate-600"/>
                                                              </button>
                                                          </div>
                                                      </div>
                                                      
                                                      {/* Message metadata */}
                                                      <div className={`flex items-center gap-2 mt-1 ${isMe ? 'flex-row-reverse' : ''}`}>
                                                          <span className="text-[10px] text-slate-400">
                                                              {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                          </span>
                                                          {isMe && (
                                                              <>
                                                                  <span className="text-[10px] text-slate-300">•</span>
                                                                  <span className="text-[10px] text-green-500 font-medium">
                                                                      ✓✓ Delivered
                                                                  </span>
                                                              </>
                                                          )}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          );
                                      })}
                                      
                                      <div ref={messagesEndRef} />
                                      
                                      {/* Typing indicator */}
                                      {currentChat.online && (
                                          <div className="flex items-center gap-3 mt-4">
                                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                                                  <span className="text-white text-xs font-bold">{currentChat.initials.charAt(0)}</span>
                                              </div>
                                              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                                  <div className="flex gap-1">
                                                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                                  </div>
                                              </div>
                                          </div>
                                      )}
                                  </div>
                              </div>
                          </div>
                          
                          {/* Premium Input Area */}
                          <div className="p-6 bg-gradient-to-t from-white via-white to-white/95 border-t border-slate-200/60 backdrop-blur-sm">
                              <div className="max-w-4xl mx-auto">
                                  {/* Attachment Preview (if any) */}
                                  
                                  {/* Input Container */}
                                  <div className="relative">
                                      <div className="flex items-center gap-3 p-3 bg-white border-2 border-slate-200/60 rounded-2xl shadow-sm focus-within:border-red-300 focus-within:shadow-lg focus-within:shadow-red-100/50 transition-all duration-300">
                                          {/* Action buttons */}
                                          <div className="flex items-center gap-1 pl-1">
                                              <button className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-600 transition-all duration-200 hover:scale-110 active:scale-95">
                                                  <PlusCircle size={22}/>
                                              </button>
                                              <button className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-600 transition-all duration-200 hover:scale-110 active:scale-95">
                                                  <ImageIcon size={22}/>
                                              </button>
                                              <button className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-600 transition-all duration-200 hover:scale-110 active:scale-95">
                                                  <Paperclip size={22}/>
                                              </button>
                                          </div>
                                          
                                          {/* Text input */}
                                          <div className="flex-1 relative">
                                              <textarea 
                                                  rows="1"
                                                  className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400 font-medium resize-none max-h-32 py-2"
                                                  placeholder="Type your message here..."
                                                  value={messageInput}
                                                  onChange={(e) => setMessageInput(e.target.value)}
                                                  onKeyDown={(e) => {
                                                      if (e.key === 'Enter' && !e.shiftKey) {
                                                          e.preventDefault();
                                                          handleSendMessage();
                                                      }
                                                  }}
                                              />
                                              <button className="absolute right-2 bottom-2 p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 transition-all">
                                                  <Smile size={20}/>
                                              </button>
                                          </div>
                                          
                                          {/* Send button */}
                                          <button 
                                              onClick={handleSendMessage}
                                              disabled={!messageInput.trim()}
                                              className={`ml-2 p-3.5 rounded-xl shadow-lg transition-all duration-200 active:scale-95 ${
                                                  messageInput.trim() 
                                                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-xl hover:scale-105' 
                                                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                              }`}
                                          >
                                              <Send size={20}/>
                                          </button>
                                      </div>
                                      
                                      {/* Helper text */}
                                      <div className="flex items-center justify-between mt-3 px-2">
                                          <div className="flex items-center gap-4">
                                              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                                  <span className="font-bold text-slate-600">Enter</span>
                                                  <span>to send</span>
                                              </span>
                                              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                                  <span className="font-bold text-slate-600">Shift + Enter</span>
                                                  <span>for new line</span>
                                              </span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                              <div className="flex items-center gap-1">
                                                  <Shield size={12} className="text-green-500"/>
                                                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                                                      End-to-end encrypted
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              );
          })()}

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
               <div className="max-w-7xl mx-auto space-y-6">
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

                   {/* Client-only and Dev-only Spaces */}
                   <div className="grid grid-cols-2 gap-6">
                       <div className="card bg-white p-6 border-l-4 border-l-red-500">
                           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                               <Shield className="text-red-600" size={20}/> Client-only Space
                           </h3>
                           <p className="text-sm text-slate-600 mb-4">Private documents and information visible only to clients:</p>
                           <div className="space-y-3">
                               <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Invoices & Payments</p>
                                   <p className="text-xs text-slate-600">View all invoices, payment history, and billing details</p>
                               </div>
                               <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Contracts & Legal</p>
                                   <p className="text-xs text-slate-600">Service agreements, NDAs, and legal documents</p>
                               </div>
                               <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Project Documentation</p>
                                   <p className="text-xs text-slate-600">Specs, requirements, and project-specific files</p>
                               </div>
                           </div>
                       </div>

                       <div className="card bg-white p-6 border-l-4 border-l-blue-500">
                           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                               <Key className="text-blue-600" size={20}/> Dev-only Space
                           </h3>
                           <p className="text-sm text-slate-600 mb-4">Private documents and information visible only to developers:</p>
                           <div className="space-y-3">
                               <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Time Tracking & Invoices</p>
                                   <p className="text-xs text-slate-600">Log hours, generate invoices, and track payments</p>
                               </div>
                               <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Technical Documentation</p>
                                   <p className="text-xs text-slate-600">API keys, access credentials, and technical specs</p>
                               </div>
                               <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                   <p className="font-bold text-sm text-slate-800 mb-1">Personal Contracts</p>
                                   <p className="text-xs text-slate-600">Employment contracts, NDAs, and personal agreements</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           )}

           {/* TAB: CALENDAR (MODERN REDESIGN) */}
           {activeTab === 'calendar' && (
               <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-[85vh] flex flex-col">
                   <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
                       <div className="flex justify-between items-center mb-4">
                           <div>
                               <h2 className="text-2xl font-bold mb-1 flex items-center gap-3">
                                   <CalendarIcon size={28}/> Team Availability & Schedule
                               </h2>
                               <p className="text-red-100 text-sm">Track vacations, sick days, and reduced availability</p>
                           </div>
                           <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg">+ Add Event</button>
                       </div>
                       <div className="flex items-center gap-6 mt-4">
                           <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                               <span className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></span>
                               <span className="text-sm font-medium">Vacation</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                               <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></span>
                               <span className="text-sm font-medium">Sick</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                               <span className="w-3 h-3 rounded-full bg-blue-400 shadow-sm"></span>
                               <span className="text-sm font-medium">Work</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                               <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></span>
                               <span className="text-sm font-medium">Reduced</span>
                           </div>
                       </div>
                   </div>
                   
                   <div className="flex-1 p-6 bg-gradient-to-br from-slate-50 to-white overflow-auto">
                       <div className="grid grid-cols-7 gap-2 bg-white rounded-xl border-2 border-slate-200 shadow-lg p-2">
                           {/* Weekday Headers */}
                           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                               <div key={day} className="bg-gradient-to-br from-slate-100 to-slate-50 p-3 text-center text-xs font-bold text-slate-700 uppercase tracking-wider rounded-lg border border-slate-200">{day}</div>
                           ))}
                           
                           {/* Days - Enhanced Design */}
                           {Array.from({length: 35}).map((_, i) => {
                               const day = i - 2;
                               const isCurrentMonth = day > 0 && day <= 31;
                               const isToday = day === 24;
                               
                               return (
                                   <div key={i} className={`min-h-[140px] p-3 rounded-lg border-2 transition-all ${!isCurrentMonth ? 'bg-slate-50/50 border-slate-100' : isToday ? 'bg-red-50 border-red-300 shadow-md' : 'bg-white border-slate-200 hover:border-red-200 hover:shadow-md'} group`}>
                                       {isCurrentMonth && (
                                           <>
                                               <div className="flex justify-between items-center mb-2">
                                                   <span className={`text-sm font-bold ${isToday ? 'bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg' : 'text-slate-800'}`}>
                                                       {day}
                                                   </span>
                                                   <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 p-1 rounded transition-all"><PlusCircle size={16}/></button>
                                               </div>
                                               
                                               {/* Events - Enhanced */}
                                               <div className="space-y-1.5 mt-2">
                                                   {day === 15 && (
                                                       <div className="text-[11px] bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-2 py-1.5 rounded-lg border border-green-300 font-semibold shadow-sm cursor-pointer hover:shadow-md transition-all">
                                                           🏝️ Alice - Vacation
                                                       </div>
                                                   )}
                                                   {day === 16 && (
                                                       <div className="text-[11px] bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-2 py-1.5 rounded-lg border border-green-300 font-semibold shadow-sm cursor-pointer hover:shadow-md transition-all">
                                                           🏝️ Alice - Vacation
                                                       </div>
                                                   )}
                                                   {day === 24 && (
                                                       <div className="text-[11px] bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-2 py-1.5 rounded-lg border border-blue-300 font-semibold shadow-sm cursor-pointer hover:shadow-md transition-all">
                                                           🎥 Client Demo
                                                       </div>
                                                   )}
                                                   {day === 28 && (
                                                       <div className="text-[11px] bg-gradient-to-r from-red-100 to-red-50 text-red-800 px-2 py-1.5 rounded-lg border border-red-300 font-semibold shadow-sm cursor-pointer hover:shadow-md transition-all">
                                                           🤒 Bob - Sick Day
                                                       </div>
                                                   )}
                                               </div>
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
           
           {/* TAB: ONBOARDING/OFFBOARDING CHECKLIST (Enhanced for Clients) */}
           {activeTab === 'onboard' && (
                <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">Onboarding & Offboarding Checklists</h2>
                            <p className="text-slate-500">Client and Talent lifecycle management workflows</p>
                        </div>
                        <button className="btn btn-red shadow-sm flex items-center gap-2"><PlusCircle size={18}/> Start Workflow</button>
                    </div>

                    {/* Client Onboarding Checklist */}
                    <div className="card bg-white p-6 border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-600">
                            <User size={20}/> Client Onboarding Checklist
                        </h3>
                        <div className="space-y-3">
                            {[
                                { task: 'Sign Service Agreement', status: 'completed', assignee: 'Client' },
                                { task: 'Setup payment method', status: 'completed', assignee: 'Client' },
                                { task: 'Access credentials provided', status: 'in-progress', assignee: 'Admin' },
                                { task: 'Kickoff meeting scheduled', status: 'pending', assignee: 'Admin' },
                                { task: 'Project documentation shared', status: 'pending', assignee: 'Admin' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                                    <CheckSquare size={20} className={item.status === 'completed' ? 'text-green-500' : item.status === 'in-progress' ? 'text-orange-500' : 'text-slate-300'} fill={item.status === 'completed' ? 'currentColor' : 'none'}/>
                                    <div className="flex-1">
                                        <p className={`font-medium text-sm ${item.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-800'}`}>{item.task}</p>
                                        <p className="text-xs text-slate-500">Assigned to: {item.assignee}</p>
                                    </div>
                                    <span className={`badge ${item.status === 'completed' ? 'badge-green' : item.status === 'in-progress' ? 'badge-orange' : 'badge-gray'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
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
