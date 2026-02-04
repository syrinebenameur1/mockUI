import React, { useContext, useState } from 'react';
import { DataContext } from '../shared/DataContext';
import { PenTool, Users, FileText, CheckSquare, BarChart2, Linkedin, DollarSign, PieChart, TrendingUp, Calendar, Download, MoreHorizontal, ArrowUpRight, ArrowDownRight, Printer, Trello, PlusCircle } from 'lucide-react';

const Module3_Operations = () => {
    const { data } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('contact');
    const [dashboardView, setDashboardView] = useState('overview'); // overview, sales, finance

    return (
        <div className="module-root flex flex-col h-screen">
             <header className="module-header border-b-blue-500 border-b-2 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <BarChart2 size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Admin & Business Intelligence</h1>
                        <p className="text-slate-500 text-sm">CRM • Financials • Strategic Insights</p>
                    </div>
                </div>

                <nav className="sub-nav sub-nav-blue mt-6 overflow-x-auto">
                    <button className={`sub-nav-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>
                        Contact Lead
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'crm' ? 'active' : ''}`} onClick={() => setActiveTab('crm')}>
                        CRM (Clients)
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'finance' ? 'active' : ''}`} onClick={() => setActiveTab('finance')}>
                        Book-keeping
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => setActiveTab('tasks')}>
                        Tasks
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                        Dashboards & KPIs
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'linkedin' ? 'active' : ''}`} onClick={() => setActiveTab('linkedin')}>
                        LinkedIn Studio
                    </button>
                </nav>
            </header>

            <main className="module-content bg-slate-50 flex-1 overflow-y-auto p-6">

                {/* TAB: CONTACT FORM */}
                {activeTab === 'contact' && (
                    <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
                        <div className="card bg-white shadow-sm border border-slate-200">
                             <h3 className="text-lg font-bold mb-6 text-slate-800 border-b pb-4 flex items-center gap-2"><PenTool size={20} className="text-blue-600"/> Internal Lead Entry</h3>
                             <div className="space-y-4">
                                 <label className="block">
                                     <span className="text-sm font-bold text-slate-600">Company Name</span>
                                     <input className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ex. Acme Corp" />
                                 </label>
                                 <div className="grid grid-cols-2 gap-4">
                                    <label>
                                        <span className="text-sm font-bold text-slate-600">Contact Person</span>
                                        <input className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm" placeholder="Jane Doe" />
                                    </label>
                                    <label>
                                        <span className="text-sm font-bold text-slate-600">Role</span>
                                        <input className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm" placeholder="CTO" />
                                    </label>
                                 </div>
                                 <div className="grid grid-cols-2 gap-4">
                                     <label>
                                         <span className="text-sm font-bold text-slate-600">Email</span>
                                         <input type="email" className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm" placeholder="jane@acme.com" />
                                     </label>
                                     <label>
                                         <span className="text-sm font-bold text-slate-600">Source</span>
                                         <select className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm">
                                             <option>LinkedIn</option>
                                             <option>Referral</option>
                                             <option>Web Search</option>
                                         </select>
                                     </label>
                                 </div>
                                 <label>
                                     <span className="text-sm font-bold text-slate-600">Private Notes</span>
                                     <textarea rows={4} className="mt-1 block w-full bg-slate-50 border-slate-300 rounded-md shadow-sm" placeholder="Looking for 2 senior devs..."></textarea>
                                 </label>
                                 <button className="btn btn-blue w-full font-bold shadow-md">Save Lead</button>
                             </div>
                        </div>
                        <div className="space-y-6">
                            <div className="card bg-blue-50 border border-blue-100 shadow-sm">
                                <h3 className="mb-4 font-bold text-blue-800 flex items-center gap-2"><ArrowDownRight/> Recent Web Inquiries</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow group cursor-pointer">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">TechFlow Systems</span>
                                            <span className="text-xs text-slate-400 font-medium">2h ago</span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">Interested in migrating our legacy PHP app to React. Budget around €20k.</p>
                                        <div className="flex gap-2">
                                            <button className="text-blue-600 text-xs font-bold hover:underline bg-blue-50 px-2 py-1 rounded">Reply via Email</button>
                                            <button className="text-slate-500 text-xs font-bold hover:underline bg-slate-50 px-2 py-1 rounded">Archive</button>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow group cursor-pointer">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">BuildIt Construction</span>
                                            <span className="text-xs text-slate-400 font-medium">Yesterday</span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">Need a mobile app for field workers.</p>
                                        <div className="flex gap-2">
                                            <button className="text-blue-600 text-xs font-bold hover:underline bg-blue-50 px-2 py-1 rounded">Reply via Email</button>
                                             <button className="text-slate-500 text-xs font-bold hover:underline bg-slate-50 px-2 py-1 rounded">Archive</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: CRM */}
                {activeTab === 'crm' && (
                    <div className="card bg-white shadow-sm border border-slate-200">
                        <div className="flex justify-between mb-6">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800"><Users className="text-blue-600"/> Clients & Prospects</h3>
                            <div className="flex gap-2">
                                <input placeholder="Search clients..." className="w-64 bg-slate-50 border-slate-200 rounded-md px-3 text-sm" />
                                <button className="btn btn-blue flex items-center gap-2 shadow-sm"><Download size={16}/> Export CSV</button>
                            </div>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold">
                                <tr>
                                    <th className="p-4 pl-6 rounded-l-lg">Client</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Contact</th>
                                    <th className="p-4">Projects</th>
                                    <th className="p-4">Lifetime Value</th>
                                    <th className="p-4">Last Interaction</th>
                                    <th className="p-4 rounded-r-lg"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-4 pl-6 font-bold text-slate-700">GlobalTech Inc</td>
                                    <td className="p-4"><span className="badge badge-green shadow-sm">Active</span></td>
                                    <td className="p-4 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-500">SC</div> Sarah Connor</td>
                                    <td className="p-4"><span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-600">2 Active</span></td>
                                    <td className="p-4 font-mono font-bold text-slate-700">€120,500</td>
                                    <td className="p-4 text-sm text-slate-500">Oct 12, 2025</td>
                                    <td className="p-4"><button className="text-slate-300 hover:text-blue-600"><MoreHorizontal size={20}/></button></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-4 pl-6 font-bold text-slate-700">Nebula Startups</td>
                                    <td className="p-4"><span className="badge badge-blue shadow-sm">Lead</span></td>
                                    <td className="p-4 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-500">JS</div> John Smith</td>
                                    <td className="p-4"><span className="text-slate-400 text-xs italic">None</span></td>
                                    <td className="p-4 font-mono font-bold text-slate-400">-</td>
                                    <td className="p-4 text-sm text-slate-500">Oct 10, 2025</td>
                                    <td className="p-4"><button className="text-slate-300 hover:text-blue-600"><MoreHorizontal size={20}/></button></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="p-4 pl-6 font-bold text-slate-700">OldSchool Retail</td>
                                    <td className="p-4"><span className="badge badge-red shadow-sm">Churned</span></td>
                                    <td className="p-4 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-500">BB</div> Bob Brown</td>
                                    <td className="p-4"><span className="text-slate-400 text-xs italic">None</span></td>
                                    <td className="p-4 font-mono font-bold text-slate-700">€45,000</td>
                                    <td className="p-4 text-sm text-slate-500">Aug 2024</td>
                                    <td className="p-4"><button className="text-slate-300 hover:text-blue-600"><MoreHorizontal size={20}/></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TAB: BOOK-KEEPING (Fixed & Improved) */}
                {activeTab === 'finance' && (
                    <div className="grid grid-cols-3 gap-6">
                         <div className="col-span-2 card bg-white shadow-sm border border-slate-200">
                             <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                <h3 className="font-bold text-lg flex items-center gap-2 text-slate-800"><DollarSign size={20} className="text-blue-600"/> Financial Ledger</h3>
                                <div className="flex gap-2">
                                    <select className="text-sm border border-slate-200 bg-slate-50 rounded px-2 py-1 font-medium text-slate-600"><option>This Month</option></select>
                                    <button className="btn btn-ghost p-1 text-slate-400 hover:text-blue-600"><Printer size={18}/></button>
                                </div>
                             </div>
                             
                             <div className="grid grid-cols-3 gap-4 mb-8">
                                 <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex flex-col items-center">
                                     <p className="text-xs text-green-600 uppercase font-bold tracking-wider mb-1">Total Revenue</p>
                                     <p className="text-3xl font-bold text-green-700">€24,500</p>
                                     <p className="text-xs text-green-600 mt-1 flex items-center gap-1 font-bold"><ArrowUpRight size={14}/> +12%</p>
                                 </div>
                                 <div className="bg-red-50 rounded-xl p-4 border border-red-100 flex flex-col items-center">
                                     <p className="text-xs text-red-600 uppercase font-bold tracking-wider mb-1">Total Expenses</p>
                                     <p className="text-3xl font-bold text-red-700">€8,200</p>
                                     <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-bold"><ArrowUpRight size={14}/> +5%</p>
                                 </div>
                                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex flex-col items-center">
                                     <p className="text-xs text-blue-600 uppercase font-bold tracking-wider mb-1">Net Profit</p>
                                     <p className="text-3xl font-bold text-blue-700">€16,300</p>
                                     <p className="text-xs text-blue-600 mt-1">66% Margin</p>
                                 </div>
                             </div>

                             <h4 className="font-bold text-sm text-slate-500 uppercase tracking-wider mb-3 px-1">Recent Transactions</h4>
                             <ul className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                                 <li className="px-4 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors bg-white">
                                     <div className="flex items-center gap-4">
                                         <div className="p-2 bg-green-100 text-green-600 rounded-lg"><ArrowDownRight size={20}/></div>
                                         <div>
                                             <p className="font-bold text-slate-800 text-sm">Invoice #1024 Paid</p>
                                             <p className="text-xs text-slate-400 font-medium">GlobalTech Inc • Oct 24</p>
                                         </div>
                                     </div>
                                     <span className="font-mono text-green-600 font-bold text-lg">+ €8,400.00</span>
                                 </li>
                                 <li className="px-4 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors bg-white">
                                     <div className="flex items-center gap-4">
                                         <div className="p-2 bg-red-100 text-red-600 rounded-lg"><ArrowUpRight size={20}/></div>
                                         <div>
                                             <p className="font-bold text-slate-800 text-sm">AWS Server Cost</p>
                                             <p className="text-xs text-slate-400 font-medium">Infrastructure • Oct 22</p>
                                         </div>
                                     </div>
                                     <span className="font-mono text-slate-700 font-bold text-lg">- €450.00</span>
                                 </li>
                                  <li className="px-4 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors bg-white">
                                     <div className="flex items-center gap-4">
                                         <div className="p-2 bg-red-100 text-red-600 rounded-lg"><ArrowUpRight size={20}/></div>
                                         <div>
                                             <p className="font-bold text-slate-800 text-sm">WeWork Office Rent</p>
                                             <p className="text-xs text-slate-400 font-medium">Office • Oct 01</p>
                                         </div>
                                     </div>
                                     <span className="font-mono text-slate-700 font-bold text-lg">- €1,200.00</span>
                                 </li>
                             </ul>
                             <button className="w-full py-3 text-center text-sm font-bold text-blue-600 hover:bg-blue-50 mt-2 rounded">View All Transactions ({'>'})</button>
                         </div>
                         
                         <div className="col-span-1 space-y-6">
                            <div className="card bg-white shadow-sm border border-slate-200">
                                <h3 className="font-bold text-lg mb-4 text-slate-800">Recurring SaaS</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center p-3 border border-slate-100 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center text-white"><Linkedin size={20}/></div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-700">LinkedIn Sales Nav</p>
                                                <p className="text-xs text-slate-500">Billed on Oct 28</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-slate-700">€79.99</span>
                                    </li>
                                    <li className="flex justify-between items-center p-3 border border-slate-100 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-lg font-bold text-xs"><Trello size={20}/></div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-700">Jira Cloud Standard</p>
                                                <p className="text-xs text-slate-500">Billed on Nov 01</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-slate-700">€120.00</span>
                                    </li>
                                     <li className="flex justify-between items-center p-3 border border-slate-100 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg font-bold text-xs"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 12L12 24L0 12L12 0Z"/></svg></div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-700">Vercel Pro</p>
                                                <p className="text-xs text-slate-500">Billed on Oct 15</p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-slate-700">€40.00</span>
                                    </li>
                                </ul>
                                <button className="w-full mt-4 btn btn-ghost border border-slate-200 text-xs font-bold text-slate-500 uppercase">+ Add Subscription</button>
                            </div>
                         </div>
                    </div>
                )}

                {/* TAB: TASKS (Now Ticketing System) */}
                {activeTab === 'tasks' && (
                    <div className="max-w-7xl mx-auto h-[80vh] flex flex-col">
                         <div className="flex justify-between items-center mb-6">
                              <div>
                                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><CheckSquare className="text-blue-600"/> Helpdesk & Ticketing</h3>
                                  <p className="text-slate-500 text-sm">Internal tech support and operational requests</p>
                              </div>
                              <button className="btn btn-blue flex items-center gap-2 shadow-sm"><PlusCircle size={20}/> New Ticket</button>
                         </div>
                         
                         <div className="flex gap-6 h-full overflow-x-auto pb-4">
                             {['Open', 'In Progress', 'Resolved'].map((status, colIdx) => (
                                 <div key={status} className="w-[350px] flex-shrink-0 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200 h-full">
                                     <div className={`p-4 border-b border-slate-200 flex justify-between items-center rounded-t-xl ${colIdx === 0 ? 'bg-red-50/50' : colIdx === 1 ? 'bg-blue-50/50' : 'bg-green-50/50'}`}>
                                         <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">{status}</span>
                                         <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-slate-500 border border-slate-200 shadow-sm">3</span>
                                     </div>
                                     <div className="p-3 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
                                         {[1,2,3].map((ticket) => (
                                             <div key={ticket} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md cursor-pointer group hover:border-blue-300 transition-all">
                                                 <div className="flex justify-between mb-2">
                                                     <span className="text-[10px] font-mono text-slate-400 font-bold">TKT-{400+ticket}</span>
                                                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${ticket === 1 ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                                         {ticket === 1 ? 'High Priority' : 'Normal'}
                                                     </span>
                                                 </div>
                                                 <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
                                                     {ticket === 1 ? "VPN Access dropping intermittently" : "Request for new Adobe license"}
                                                 </h4>
                                                 <div className="flex justify-between items-center pt-3 border-t border-slate-50 mt-3">
                                                     <div className="flex items-center gap-2">
                                                         <img src={`https://ui-avatars.com/api/?name=User+${ticket}&background=random`} className="w-5 h-5 rounded-full" alt=""/>
                                                         <span className="text-xs text-slate-500 font-medium">Ops Team</span>
                                                     </div>
                                                     <span className="text-xs text-slate-400">2 days ago</span>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                 </div>
                             ))}
                         </div>
                    </div>
                )}

                 {/* TAB: DASHBOARDS (Rich & Improved) */}
                 {activeTab === 'dashboard' && (
                    <div className="space-y-6">
                        {/* Sub-nav for dashboard */}
                        <div className="flex justify-center mb-6">
                             <div className="bg-white p-1 rounded-xl border border-slate-200 inline-flex shadow-sm">
                                 {['overview', 'goals', 'sales', 'finance'].map(view => (
                                     <button 
                                        key={view}
                                        onClick={() => setDashboardView(view)}
                                        className={`px-6 py-2 text-sm font-bold rounded-lg capitalize transition-all ${dashboardView === view ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                                     >
                                         {view}
                                     </button>
                                 ))}
                             </div>
                        </div>

                        {dashboardView === 'goals' && (
                             <div className="max-w-5xl mx-auto space-y-6">
                                 <div className="flex justify-between items-center">
                                     <h3 className="text-xl font-bold text-slate-800">Q4 2025 Performance Goals</h3>
                                     <button className="btn btn-blue shadow-sm">+ Set New Goal</button>
                                 </div>
                                 
                                 <div className="card bg-white p-8 shadow-sm border border-slate-200">
                                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Financial Targets</h4>
                                      <div className="space-y-8">
                                          <div>
                                              <div className="flex justify-between items-end mb-2">
                                                  <div>
                                                      <h5 className="font-bold text-slate-800 text-lg">Revenue Target</h5>
                                                      <p className="text-slate-500 text-sm">Hit €500k ARR by end of Q4</p>
                                                  </div>
                                                  <span className="font-mono font-bold text-green-600 text-xl">82%</span>
                                              </div>
                                              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                                  <div className="h-full bg-green-500 rounded-full shadow-sm" style={{width: '82%'}}></div>
                                              </div>
                                              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase">
                                                  <span>Started: €320k</span>
                                                  <span>Goal: €500k</span>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="flex justify-between items-end mb-2">
                                                  <div>
                                                      <h5 className="font-bold text-slate-800 text-lg">Profit Margin</h5>
                                                      <p className="text-slate-500 text-sm">Maintain &gt;25% net margin</p>
                                                  </div>
                                                  <span className="font-mono font-bold text-slate-800 text-xl">22%</span>
                                              </div>
                                              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                                  <div className="h-full bg-orange-500 rounded-full shadow-sm" style={{width: '65%'}}></div>
                                              </div>
                                              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase">
                                                  <span>Current: 22%</span>
                                                  <span>Target: 25%</span>
                                              </div>
                                          </div>
                                      </div>
                                 </div>

                                 <div className="grid grid-cols-2 gap-6">
                                      <div className="card bg-white p-6 shadow-sm border border-slate-200">
                                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Growth</h4>
                                          <div>
                                              <div className="flex justify-between items-center mb-1">
                                                  <h5 className="font-bold text-slate-800">New Client Acquisition</h5>
                                                  <span className="badge badge-blue">On Track</span>
                                              </div>
                                              <p className="text-xs text-slate-500 mb-3">Sign 5 new enterprise logos</p>
                                              <div className="flex gap-1 mb-2">
                                                  {[1,2,3].map(i => <div key={i} className="flex-1 h-2 bg-blue-500 rounded-full"></div>)}
                                                  {[1,2].map(i => <div key={i} className="flex-1 h-2 bg-slate-100 rounded-full"></div>)}
                                              </div>
                                              <p className="text-right text-xs font-bold text-blue-600">3 / 5 Secured</p>
                                          </div>
                                      </div>
                                      <div className="card bg-white p-6 shadow-sm border border-slate-200">
                                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Talent</h4>
                                          <div>
                                              <div className="flex justify-between items-center mb-1">
                                                  <h5 className="font-bold text-slate-800">Developer Retention</h5>
                                                  <span className="badge badge-green">Excellent</span>
                                              </div>
                                              <p className="text-xs text-slate-500 mb-3">Keep churn under 5%</p>
                                              <div className="w-full h-2 bg-slate-100 rounded-full">
                                                  <div className="h-full bg-green-500 rounded-full w-[10%]"></div>
                                              </div>
                                              <p className="text-right text-xs font-bold text-green-600 mt-2">1.2% Churn (YTD)</p>
                                          </div>
                                      </div>
                                 </div>
                             </div>
                        )}

                        {dashboardView === 'overview' && (
                            <div className="grid grid-cols-3 gap-6">
                                {/* Improved Stat Cards */}
                                <div className="card bg-white p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all border-t-0">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                                    <div className="flex justify-between items-start mb-4">
                                         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Revenue (YTD)</h4>
                                         <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign size={18}/></div>
                                    </div>
                                    <p className="text-4xl font-bold text-slate-800 tracking-tight">€450k</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded flex items-center">+18%</span>
                                        <span className="text-slate-400 text-xs">vs last year</span>
                                    </div>
                                </div>

                                <div className="card bg-white p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all border-t-0">
                                     <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                                     <div className="flex justify-between items-start mb-4">
                                         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Active Clients</h4>
                                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={18}/></div>
                                    </div>
                                    <p className="text-4xl font-bold text-slate-800 tracking-tight">24</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded flex items-center">+3</span>
                                        <span className="text-slate-400 text-xs">this month</span>
                                    </div>
                                </div>

                                <div className="card bg-white p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all border-t-0">
                                     <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                                     <div className="flex justify-between items-start mb-4">
                                         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Talent Pool</h4>
                                         <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Users size={18}/></div>
                                    </div>
                                    <p className="text-4xl font-bold text-slate-800 tracking-tight">142</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-slate-400 text-xs">12 Active Projects</span>
                                    </div>
                                </div>
                                
                                {/* Charts Area Mockup - Improved */}
                                <div className="col-span-2 card bg-white h-96 flex flex-col shadow-sm border border-slate-200">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-bold text-slate-800 flex items-center gap-2"><TrendingUp className="text-blue-500"/> Revenue Growth</h4>
                                        <select className="bg-slate-50 border-none text-xs font-bold text-slate-500 rounded px-2 py-1"><option>Last 12 Months</option></select>
                                    </div>
                                    <div className="flex-1 bg-white rounded flex items-end justify-between px-6 pb-2 gap-4 border-b border-slate-100 relative">
                                        {/* Grid lines background */}
                                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-6 pb-2 opacity-50">
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                        </div>

                                        {[30, 45, 35, 60, 55, 75, 80, 70, 90, 100, 95, 110].map((h, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm opacity-90 hover:opacity-100 transition-all relative group z-10" style={{height: `${h/1.2}%`}}>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all shadow-lg font-bold after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-slate-800">€{h}k</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between px-6 mt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                                    </div>
                                </div>

                                <div className="col-span-1 card bg-white h-96 shadow-sm border border-slate-200 flex flex-col items-center justify-center">
                                     <h4 className="font-bold text-slate-800 mb-8 self-start w-full flex items-center gap-2"><PieChart className="text-purple-500"/> Revenue Source</h4>
                                     <div className="w-48 h-48 rounded-full border-[20px] border-slate-100 border-l-blue-500 border-t-blue-500 border-r-green-500 relative flex items-center justify-center shadow-inner">
                                          <div className="text-center">
                                              <p className="text-3xl font-bold text-slate-700">65%</p>
                                              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Retainers</p>
                                          </div>
                                     </div>
                                     <div className="mt-8 space-y-3 w-full px-4">
                                         <div className="flex justify-between text-sm items-center"><span className="flex items-center gap-2 text-slate-600 font-medium"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Retainers</span> <span className="font-bold text-slate-800">65%</span></div>
                                         <div className="flex justify-between text-sm items-center"><span className="flex items-center gap-2 text-slate-600 font-medium"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Projects</span> <span className="font-bold text-slate-800">35%</span></div>
                                     </div>
                                </div>
                            </div>
                        )}
                    </div>
                 )}

                {/* TAB: LINKEDIN STUDIO (Improved Calendar) */}
                {activeTab === 'linkedin' && (
                    <div className="grid grid-cols-12 gap-6 h-[800px]">
                        <div className="col-span-4 card bg-white flex flex-col border-0 shadow-lg overflow-hidden p-0">
                            <div className="p-6 bg-[#0077b5] text-white">
                                <h3 className="font-bold text-xl flex items-center gap-2"><Linkedin /> Content AI</h3>
                                <p className="text-blue-100 text-sm mt-1 opacity-90">Generate viral posts tailored to your network.</p>
                            </div>
                            <div className="p-6 space-y-6 bg-white flex-1">
                                <div>
                                    <label className="font-bold text-slate-700 mb-2 block text-sm uppercase tracking-wide">Topic / Keyword</label>
                                    <input className="w-full bg-slate-50 border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="e.g. Remote work leadership..." />
                                </div>
                                
                                <div>
                                    <label className="font-bold text-slate-700 mb-2 block text-sm uppercase tracking-wide">Vibe / Tone</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        <button className="p-2 border-2 border-blue-100 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold shadow-sm ring-1 ring-blue-300">Expert</button>
                                        <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">Casual</button>
                                        <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">Data</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="font-bold text-slate-700 mb-2 block text-sm uppercase tracking-wide">Format</label>
                                    <select className="w-full bg-slate-50 border-slate-200 p-3 rounded-lg font-medium outline-none">
                                        <option>Short Text + Image</option>
                                        <option>Long Form Article</option>
                                        <option>Poll</option>
                                        <option>Carousel (PDF)</option>
                                    </select>
                                </div>

                                <button className="btn w-full bg-[#0077b5] text-white py-4 shadow-lg hover:bg-blue-700 transition-all flex justify-center items-center gap-2 rounded-xl mt-4 group">
                                    <span className="group-hover:animate-bounce">✨</span> Generate Magic
                                </button>
                            </div>
                        </div>

                        <div className="col-span-8 space-y-6">
                            {/* Improved Calendar */}
                            <div className="card bg-white min-h-[500px] border border-slate-200 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                     <h3 className="font-bold text-slate-800 flex items-center gap-2"><Calendar className="text-blue-600"/> Content Calendar · <span className="text-slate-400 font-normal">October 2025</span></h3>
                                     <div className="flex gap-2">
                                         <button className="p-1 hover:bg-slate-100 rounded">{'<'}</button>
                                         <button className="p-1 hover:bg-slate-100 rounded">{'>'}</button>
                                     </div>
                                </div>
                                
                                <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                        <div key={d} className="bg-slate-50 text-center py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            {d}
                                        </div>
                                    ))}
                                    
                                    {/* Calendar Days */}
                                    {[...Array(35)].map((_, i) => {
                                        const day = i - 2; // Offset for month start
                                        const isToday = day === 24;
                                        const hasPost = day === 12 || day === 15 || day === 24;
                                        
                                        if (day < 1 || day > 31) return <div key={i} className="bg-white h-28"></div>;

                                        return (
                                        <div key={i} className={`bg-white h-28 p-2 relative group transition-colors hover:bg-slate-50/50 ${isToday ? 'bg-blue-50/30' : ''}`}>
                                            <span className={`text-sm font-bold ${isToday ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md' : 'text-slate-700'}`}>{day}</span>
                                            
                                            {day === 12 && (
                                                <div className="mt-2 bg-blue-100 border border-blue-200 text-blue-800 p-1.5 rounded text-xs font-bold truncate shadow-sm cursor-pointer hover:bg-blue-200 transition-colors">
                                                    🚀 Launch post
                                                </div>
                                            )}
                                            {day === 15 && (
                                                 <div className="mt-2 bg-purple-100 border border-purple-200 text-purple-800 p-1.5 rounded text-xs font-bold truncate shadow-sm cursor-pointer hover:bg-purple-200 transition-colors">
                                                    📊 Q3 Report Analysis
                                                </div>
                                            )}
                                            {day === 24 && (
                                                 <div className="mt-2 bg-green-100 border border-green-200 text-green-800 p-1.5 rounded text-xs font-bold truncate shadow-sm cursor-pointer hover:bg-green-200 transition-colors">
                                                    💡 Tips for Juniors
                                                </div>
                                            )}
                                            
                                            <button className="absolute bottom-2 right-2 text-slate-300 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"><PlusCircle size={16}/></button>
                                        </div>
                                    )})}
                                </div>
                            </div>
                            
                             <div className="card bg-white shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wider">Generated Drafts (Ready for review)</h3>
                                <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-all cursor-pointer bg-slate-50 border-l-4 border-l-blue-500">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="badge badge-blue">Ready to Post</span>
                                            <span className="text-xs text-slate-400 font-medium">Generated 2h ago</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={16}/></button>
                                    </div>
                                    <p className="text-slate-700 italic mb-3 text-sm leading-relaxed">"The biggest mistake remote leaders make is assuming silence means agreement. In our latest study of 50+ distributed teams..."</p>
                                    <div className="flex justify-end gap-2">
                                        <button className="btn btn-ghost text-xs font-bold border border-slate-200 bg-white">Edit</button>
                                        <button className="btn btn-blue text-xs font-bold shadow-sm">Schedule for Tue 14th</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}



export default Module3_Operations;
