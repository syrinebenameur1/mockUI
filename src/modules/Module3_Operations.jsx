import React, { useContext, useState } from 'react';
import { DataContext } from '../shared/DataContext';
import { PenTool, Users, FileText, CheckSquare, BarChart2, Linkedin, DollarSign, PieChart, TrendingUp, Calendar, Download, MoreHorizontal, ArrowUpRight, ArrowDownRight, Printer, Trello, PlusCircle, MessageSquare } from 'lucide-react';

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
                    <button className={`sub-nav-item ${activeTab === 'techdocs' ? 'active' : ''}`} onClick={() => setActiveTab('techdocs')}>
                        Tech Docs
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
                    <div className="space-y-6">
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

                        {/* Client Management Section */}
                        <div className="card bg-white shadow-sm border border-slate-200 p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                                <Users size={20}/> Client Management: Invoices, Payments, Contracts, Notes, Talent, Onboard, Offboard
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Financials</p>
                                        <p className="text-xs text-slate-600">View all invoices, payment history, and outstanding balances</p>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Contracts & Legal</p>
                                        <p className="text-xs text-slate-600">Service agreements, NDAs, and contract renewals</p>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Notes & History</p>
                                        <p className="text-xs text-slate-600">Internal notes, meeting summaries, and interaction history</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Talent Assignment</p>
                                        <p className="text-xs text-slate-600">Assign developers to projects and track utilization</p>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Onboarding</p>
                                        <p className="text-xs text-slate-600">Client onboarding checklist and setup workflows</p>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Offboarding</p>
                                        <p className="text-xs text-slate-600">Project closure, access revocation, and final documentation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Talent Management Section */}
                        <div className="card bg-white shadow-sm border border-slate-200 p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
                                <Users size={20}/> Talent Management: Invoices, Payments, Contracts, Notes, Feedback
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Time & Invoicing</p>
                                        <p className="text-xs text-slate-600">Track hours, generate invoices, and manage payments</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Contracts</p>
                                        <p className="text-xs text-slate-600">Employment contracts, rate agreements, and renewals</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Performance Notes</p>
                                        <p className="text-xs text-slate-600">Internal notes on performance, skills, and growth areas</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Client Feedback</p>
                                        <p className="text-xs text-slate-600">Collect and review feedback from client projects</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Payment History</p>
                                        <p className="text-xs text-slate-600">Complete payment records and outstanding invoices</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Access to Customer/Client History</p>
                                        <p className="text-xs text-slate-600">View all projects, interactions, and historical data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: BOOK-KEEPING (Fixed & Improved) */}
                {activeTab === 'finance' && (
                    <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                         <div className="col-span-2 card bg-white shadow-sm border border-slate-200">
                             <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                <h3 className="font-bold text-lg flex items-center gap-2 text-slate-800"><DollarSign size={20} className="text-blue-600"/> Financial Ledger (Invoices vs Receipts)</h3>
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

                             {/* Taxes Section */}
                             <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                 <h4 className="font-bold text-sm text-yellow-800 mb-3 flex items-center gap-2">
                                     <FileText size={16}/> Taxes & Compliance
                                 </h4>
                                 <div className="grid grid-cols-2 gap-4">
                                     <div>
                                         <p className="text-xs text-yellow-700 font-bold uppercase mb-1">Estimated Tax Liability (Q4)</p>
                                         <p className="text-xl font-bold text-yellow-800">€4,200</p>
                                         <p className="text-xs text-yellow-600 mt-1">Based on current revenue</p>
                                     </div>
                                     <div>
                                         <p className="text-xs text-yellow-700 font-bold uppercase mb-1">Next Declaration</p>
                                         <p className="text-lg font-bold text-yellow-800">Jan 31, 2026</p>
                                         <p className="text-xs text-yellow-600 mt-1">VAT & Income Tax</p>
                                     </div>
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
                    </div>
                )}

                {/* TAB: TASKS (PROJECT & TASK MANAGER - WORKING) */}
                {activeTab === 'tasks' && (
                    <div className="max-w-7xl mx-auto h-[85vh] flex flex-col">
                         <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
                              <div>
                                  <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                                      <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><CheckSquare size={24}/></div>
                                      Project & Task Manager
                                  </h3>
                                  <p className="text-blue-100 text-sm ml-14">Ticketing System, Assignments, Important Docs/Links for Tech</p>
                              </div>
                              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-2"><PlusCircle size={20}/> New Task</button>
                         </div>

                         {/* Stats Bar */}
                         <div className="grid grid-cols-4 gap-4 mb-6">
                             <div className="bg-white p-5 rounded-xl border-2 border-blue-200 shadow-lg">
                                 <p className="text-xs text-slate-500 font-bold uppercase mb-2">Total Tasks</p>
                                 <p className="text-3xl font-bold text-blue-600">47</p>
                                 <p className="text-xs text-slate-400 mt-1">Across all projects</p>
                             </div>
                             <div className="bg-white p-5 rounded-xl border-2 border-red-200 shadow-lg">
                                 <p className="text-xs text-red-600 font-bold uppercase mb-2">Open</p>
                                 <p className="text-3xl font-bold text-red-600">12</p>
                                 <p className="text-xs text-slate-400 mt-1">Needs attention</p>
                             </div>
                             <div className="bg-white p-5 rounded-xl border-2 border-blue-300 shadow-lg">
                                 <p className="text-xs text-blue-600 font-bold uppercase mb-2">In Progress</p>
                                 <p className="text-3xl font-bold text-blue-600">8</p>
                                 <p className="text-xs text-slate-400 mt-1">Active work</p>
                             </div>
                             <div className="bg-white p-5 rounded-xl border-2 border-green-200 shadow-lg">
                                 <p className="text-xs text-green-600 font-bold uppercase mb-2">Completed</p>
                                 <p className="text-3xl font-bold text-green-600">27</p>
                                 <p className="text-xs text-slate-400 mt-1">This month</p>
                             </div>
                         </div>
                         
                         <div className="flex gap-5 h-full overflow-x-auto pb-4">
                             {['Open', 'In Progress', 'Resolved'].map((status, colIdx) => {
                                 const tickets = [
                                     { id: 1, title: "VPN Access dropping intermittently", priority: 'High', assignee: 'Ops Team', days: '2 days ago', comments: 3 },
                                     { id: 2, title: "Request for new Adobe license", priority: 'Medium', assignee: 'Dev Team', days: '5 days ago', comments: 1 },
                                     { id: 3, title: "Update documentation for API v2", priority: 'Normal', assignee: 'Tech Lead', days: '1 week ago', comments: 5 }
                                 ];
                                 
                                 return (
                                 <div key={status} className="w-[420px] flex-shrink-0 flex flex-col bg-white rounded-2xl border-2 border-slate-200 shadow-xl h-full overflow-hidden">
                                     <div className={`p-5 border-b-2 ${colIdx === 0 ? 'bg-red-50 border-red-200' : colIdx === 1 ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}`}>
                                         <div className="flex justify-between items-center">
                                             <div className="flex items-center gap-3">
                                                 <div className={`w-4 h-4 rounded-full ${colIdx === 0 ? 'bg-red-500' : colIdx === 1 ? 'bg-blue-500' : 'bg-green-500'} shadow-md`}></div>
                                                 <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">{status}</span>
                                             </div>
                                             <span className="bg-white px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 border-2 border-slate-200 shadow-sm">{tickets.length}</span>
                                         </div>
                                     </div>
                                     <div className="p-4 space-y-4 overflow-y-auto flex-1 custom-scrollbar bg-gradient-to-b from-white to-slate-50/30">
                                         {tickets.map((ticket) => (
                                             <div key={ticket.id} className="bg-white p-5 rounded-xl border-2 border-slate-200 shadow-md hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 cursor-pointer group transition-all">
                                                 <div className="flex justify-between items-start mb-3">
                                                     <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">TKT-{400+ticket.id}</span>
                                                     <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border-2 ${ticket.priority === 'High' ? 'bg-red-50 text-red-700 border-red-200' : ticket.priority === 'Medium' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                                                         {ticket.priority === 'High' ? '🔥 High' : ticket.priority === 'Medium' ? '⚡ Medium' : '📋 Normal'}
                                                     </span>
                                                 </div>
                                                 <h4 className="font-bold text-slate-900 text-base mb-4 leading-snug">
                                                     {ticket.title}
                                                 </h4>
                                                 <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                                     <div className="flex items-center gap-3">
                                                         <img src={`https://ui-avatars.com/api/?name=${ticket.assignee}&background=2563eb&color=fff`} className="w-8 h-8 rounded-full ring-2 ring-slate-100 shadow-sm" alt=""/>
                                                         <div>
                                                             <p className="text-xs font-semibold text-slate-700">{ticket.assignee}</p>
                                                             <p className="text-[10px] text-slate-400">{ticket.days}</p>
                                                         </div>
                                                     </div>
                                                     <div className="flex items-center gap-2">
                                                         <div className="flex items-center gap-1.5 text-slate-400 text-xs bg-slate-100 px-2 py-1 rounded-lg">
                                                             <MessageSquare size={14}/> <span className="font-semibold">{ticket.comments}</span>
                                                         </div>
                                                         <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-blue-600 p-1 rounded transition-all"><MoreHorizontal size={16}/></button>
                                                     </div>
                                                 </div>
                                             </div>
                                         ))}
                                         <button className="w-full py-4 flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-bold transition-all border-2 border-dashed border-slate-300 hover:border-blue-300 shadow-sm">
                                             <PlusCircle size={18}/> Create ticket
                                         </button>
                                     </div>
                                 </div>
                                 );
                             })}
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
                            <div className="space-y-6">
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

                            {/* Marketing KPIs */}
                            <div className="card bg-white p-6 border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-600">
                                    <TrendingUp size={20}/> Marketing KPIs
                                </h4>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                                        <p className="text-xs text-purple-600 font-bold uppercase mb-1">LinkedIn Reach</p>
                                        <p className="text-2xl font-bold text-purple-700">12.5k</p>
                                        <p className="text-xs text-purple-600 mt-1">+24% this month</p>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                                        <p className="text-xs text-purple-600 font-bold uppercase mb-1">Content Posts</p>
                                        <p className="text-2xl font-bold text-purple-700">18</p>
                                        <p className="text-xs text-purple-600 mt-1">This quarter</p>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                                        <p className="text-xs text-purple-600 font-bold uppercase mb-1">Lead Conversion</p>
                                        <p className="text-2xl font-bold text-purple-700">8.2%</p>
                                        <p className="text-xs text-purple-600 mt-1">From content</p>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                                        <p className="text-xs text-purple-600 font-bold uppercase mb-1">Engagement Rate</p>
                                        <p className="text-2xl font-bold text-purple-700">4.8%</p>
                                        <p className="text-xs text-purple-600 mt-1">Avg per post</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )}
                    </div>
                 )}

                {/* TAB: IMPORTANT DOCS & LINKS FOR TECH */}
                {activeTab === 'techdocs' && (
                    <div className="max-w-6xl mx-auto space-y-6">
                        <div className="card bg-white shadow-sm border border-slate-200 p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
                                <FileText size={20}/> Important Docs & Links for Tech Team
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Notion Workspace</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://notion.so/kothontech/tech</a>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">GitHub Organization</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://github.com/kothontech</a>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">API Documentation</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://docs.kothontech.com/api</a>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Design System</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://figma.com/kothontech/design</a>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Infrastructure Docs</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://wiki.kothontech.com/infra</a>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-bold text-sm text-slate-800 mb-2">Security Policies</p>
                                        <a href="#" className="text-xs text-blue-600 hover:underline">https://docs.kothontech.com/security</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: LINKEDIN STUDIO (STUNNING CALENDAR REDESIGN) */}
                {activeTab === 'linkedin' && (
                    <div className="space-y-6">
                        {/* AI Generator Header */}
                        <div className="bg-gradient-to-br from-[#0077b5] via-[#005885] to-[#003d5b] text-white p-8 rounded-3xl shadow-2xl border-4 border-white/10">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-4xl font-bold flex items-center gap-4 mb-3">
                                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm"><Linkedin size={40}/></div>
                                        LinkedIn AI Content Studio
                                    </h3>
                                    <p className="text-blue-100 text-lg">Generate viral posts tailored to your network with AI</p>
                                </div>
                                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-xl border-2 border-white/30">+ New Post</button>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border-2 border-white/20">
                                    <label className="text-blue-100 text-sm font-bold mb-3 block uppercase tracking-wide">Topic / Keyword</label>
                                    <input className="w-full bg-white/25 backdrop-blur-sm border-2 border-white/30 p-4 rounded-xl text-white placeholder:text-blue-200 focus:bg-white/35 focus:outline-none focus:border-white/50 transition-all text-base font-medium" placeholder="e.g. Remote work leadership..." />
                                </div>
                                <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border-2 border-white/20">
                                    <label className="text-blue-100 text-sm font-bold mb-3 block uppercase tracking-wide">Format</label>
                                    <select className="w-full bg-white/25 backdrop-blur-sm border-2 border-white/30 p-4 rounded-xl text-white focus:bg-white/35 focus:outline-none focus:border-white/50 transition-all text-base font-medium">
                                        <option value="short" className="text-slate-900">Short Text + Image</option>
                                        <option value="long" className="text-slate-900">Long Form Article</option>
                                        <option value="poll" className="text-slate-900">Poll</option>
                                        <option value="carousel" className="text-slate-900">Carousel (PDF)</option>
                                    </select>
                                </div>
                                <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border-2 border-white/20">
                                    <label className="text-blue-100 text-sm font-bold mb-3 block uppercase tracking-wide">Target Audience</label>
                                    <select className="w-full bg-white/25 backdrop-blur-sm border-2 border-white/30 p-4 rounded-xl text-white focus:bg-white/35 focus:outline-none focus:border-white/50 transition-all text-base font-medium">
                                        <option value="tech" className="text-slate-900">Tech Professionals</option>
                                        <option value="executives" className="text-slate-900">Executives</option>
                                        <option value="developers" className="text-slate-900">Developers</option>
                                        <option value="general" className="text-slate-900">General Network</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <label className="text-blue-100 text-sm font-bold mb-4 block uppercase tracking-wide">Vibe / Tone</label>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3.5 bg-white/25 hover:bg-white/35 backdrop-blur-sm border-2 border-white/40 text-white rounded-2xl text-base font-bold transition-all shadow-lg hover:scale-105">💼 Expert</button>
                                    <button className="px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-blue-100 rounded-2xl text-base font-medium transition-all hover:scale-105">😊 Casual</button>
                                    <button className="px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-blue-100 rounded-2xl text-base font-medium transition-all hover:scale-105">📊 Data-Driven</button>
                                    <button className="px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-blue-100 rounded-2xl text-base font-medium transition-all hover:scale-105">🎯 Inspirational</button>
                                </div>
                            </div>
                            
                            <button className="w-full bg-white text-[#0077b5] py-5 shadow-2xl hover:shadow-3xl transition-all flex justify-center items-center gap-3 rounded-2xl font-bold text-lg group border-4 border-white/20">
                                <span className="group-hover:animate-bounce text-2xl">✨</span> Generate Magic Content
                            </button>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            {/* Content Calendar - STUNNING Design */}
                            <div className="col-span-8 bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl border-4 border-blue-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-[#0077b5] to-[#005885] p-6 border-b-4 border-blue-300">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-3xl text-white flex items-center gap-4">
                                            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><Calendar className="text-white" size={32}/></div>
                                            Content Calendar
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-2">
                                                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-lg transition-all font-bold text-white text-lg">{'<'}</button>
                                                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-lg transition-all font-bold text-white text-lg">{'>'}</button>
                                            </div>
                                            <span className="text-xl font-bold text-white bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">October 2025</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                                    <div className="grid grid-cols-7 gap-3 bg-white rounded-2xl border-4 border-slate-200 p-3 shadow-xl">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                            <div key={d} className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 text-center text-sm font-bold text-slate-800 uppercase tracking-wider rounded-xl border-2 border-blue-200 shadow-sm">
                                                {d}
                                            </div>
                                        ))}
                                        
                                        {[...Array(35)].map((_, i) => {
                                            const day = i - 2;
                                            const isToday = day === 24;
                                            
                                            if (day < 1 || day > 31) return <div key={i} className="bg-slate-50/50 h-36 rounded-xl border-2 border-slate-100"></div>;

                                            const events = [
                                                { day: 8, title: '🚀 Product Launch', color: 'blue' },
                                                { day: 12, title: '📊 Q3 Report Analysis', color: 'purple' },
                                                { day: 15, title: '💡 Leadership Tips', color: 'green' },
                                                { day: 20, title: '🎯 Case Study', color: 'orange' },
                                                { day: 24, title: "✨ Today's Post", color: 'red' },
                                            ];
                                            
                                            const dayEvents = events.filter(e => e.day === day);
                                            
                                            return (
                                            <div key={i} className={`h-36 p-3 rounded-xl border-3 transition-all group ${
                                                isToday 
                                                    ? 'bg-gradient-to-br from-blue-100 to-blue-50 border-blue-500 shadow-xl scale-105' 
                                                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:scale-102'
                                            }`}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className={`text-base font-bold ${
                                                        isToday 
                                                            ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-xl' 
                                                            : 'text-slate-800'
                                                    }`}>
                                                        {day}
                                                    </span>
                                                    <button className="opacity-0 group-hover:opacity-100 text-blue-500 hover:text-blue-700 p-1.5 rounded-lg bg-blue-50 transition-all"><PlusCircle size={16}/></button>
                                                </div>
                                                
                                                <div className="space-y-1.5 mt-2 overflow-hidden">
                                                    {dayEvents.map((event, idx) => (
                                                        <div key={idx} className={`bg-gradient-to-r ${
                                                            event.color === 'blue' ? 'from-blue-100 to-blue-50 border-blue-300 text-blue-900' :
                                                            event.color === 'purple' ? 'from-purple-100 to-purple-50 border-purple-300 text-purple-900' :
                                                            event.color === 'green' ? 'from-green-100 to-green-50 border-green-300 text-green-900' :
                                                            event.color === 'orange' ? 'from-orange-100 to-orange-50 border-orange-300 text-orange-900' :
                                                            'from-red-100 to-red-50 border-red-300 text-red-900'
                                                        } border-2 p-2 rounded-lg text-[11px] font-bold truncate shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transition-all`}>
                                                            {event.title}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )})}
                                    </div>
                                </div>
                            </div>

                            {/* Generated Drafts - Enhanced */}
                            <div className="col-span-4 space-y-4">
                                <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl border-4 border-blue-100 p-6">
                                    <h3 className="font-bold text-2xl text-slate-900 mb-5 flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-xl"><FileText className="text-blue-600" size={24}/></div>
                                        Generated Drafts
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 border-3 border-blue-300 rounded-2xl hover:shadow-xl transition-all cursor-pointer">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">Ready to Post</span>
                                                <span className="text-[11px] text-slate-600 font-semibold">2h ago</span>
                                            </div>
                                            <p className="text-slate-800 text-sm leading-relaxed mb-4 italic font-medium">"The biggest mistake remote leaders make is assuming silence means agreement. In our latest study of 50+ distributed teams..."</p>
                                            <div className="flex gap-2">
                                                <button className="flex-1 py-2.5 bg-white text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-50 transition-all border-2 border-blue-200 shadow-sm">Edit</button>
                                                <button className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg">Schedule</button>
                                            </div>
                                        </div>
                                        
                                        <div className="p-5 bg-slate-50 border-3 border-slate-200 rounded-2xl">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="bg-slate-400 text-white px-3 py-1.5 rounded-full text-xs font-bold">Draft</span>
                                                <span className="text-[11px] text-slate-600 font-semibold">Yesterday</span>
                                            </div>
                                            <p className="text-slate-700 text-sm leading-relaxed mb-4 font-medium">"5 ways to improve developer retention in remote teams..."</p>
                                            <button className="w-full py-2.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-300 transition-all shadow-sm">Continue Editing</button>
                                        </div>
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
