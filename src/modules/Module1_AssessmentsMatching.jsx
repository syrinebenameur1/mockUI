import React, { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../shared/DataContext';
import { UserPlus, ClipboardList, Briefcase, Users, FileText, Cpu, CheckCircle, Send, Search, MoreVertical, Paperclip, Smile } from 'lucide-react';

const Module1_AssessmentsMatching = () => {
    const { data, addDeveloper } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('profile');
    const [chatInput, setChatInput] = useState('');
    const chatEndRef = useRef(null);

    const [requestForm, setRequestForm] = useState({
        role: '',
        skills: '',
        budget: '',
        duration: ''
    });

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [activeTab]);

    return (
        <div className="module-root flex flex-col h-screen">
            <header className="module-header border-b-green-500 border-b-2 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-700">
                        <Users size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Matching & Assessments</h1>
                        <p className="text-slate-500 text-sm">Talent Acquisition & Evaluation Suite</p>
                    </div>
                </div>

                <nav className="sub-nav sub-nav-green mt-6">
                    <button className={`sub-nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                        Talent Entry
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'assessments_list' ? 'active' : ''}`} onClick={() => setActiveTab('assessments_list')}>
                        Available Tests
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'assessments_results' ? 'active' : ''}`} onClick={() => setActiveTab('assessments_results')}>
                        Results & Scores
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'client_request' ? 'active' : ''}`} onClick={() => setActiveTab('client_request')}>
                        Client Request
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'match' ? 'active' : ''}`} onClick={() => setActiveTab('match')}>
                        Kothon AI Match
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'pools' ? 'active' : ''}`} onClick={() => setActiveTab('pools')}>
                        Candidate Pools
                    </button>
                    <button className={`sub-nav-item ${activeTab === 'jobs' ? 'active' : ''}`} onClick={() => setActiveTab('jobs')}>
                         Offers
                    </button>
                </nav>
            </header>

            <main className="module-content bg-slate-50 flex-1 overflow-y-auto p-6">

                {/* TAB: CREATE PROFILE */}
                {activeTab === 'profile' && (
                    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
                        <div className="col-span-2 card bg-white cursor-default">
                            <h3 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">Create Talent Profile</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label>
                                    First Name
                                    <input className="mt-1" placeholder="Jane" />
                                </label>
                                <label>
                                    Last Name
                                    <input className="mt-1" placeholder="Doe" />
                                </label>
                            </div>
                            <label className="mb-4 block">
                                Professional Headline
                                <input className="mt-1" placeholder="Senior React Developer" />
                            </label>
                            <label className="mb-4 block">
                                Technical Stack (Tags)
                                <input className="mt-1" placeholder="React, Node.js, TypeScript..." />
                            </label>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <label>
                                    Seniority
                                    <select className="mt-1">
                                        <option>Junior (1-3y)</option>
                                        <option>Mid (3-5y)</option>
                                        <option>Senior (5-8y)</option>
                                        <option>Lead (8y+)</option>
                                    </select>
                                </label>
                                <label>
                                    Expected Rate (€/h)
                                    <input type="number" className="mt-1" placeholder="80" />
                                </label>
                            </div>
                            <button className="btn btn-green w-full py-3">Create Profile</button>
                        </div>
                        <div className="col-span-1 space-y-4">
                             <div className="card bg-white items-center text-center p-6 border-t-4 border-t-green-500">
                                 <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-inner">👤</div>
                                 <h4 className="font-bold text-lg">New Talent</h4>
                                 <p className="text-slate-500 text-sm mb-4">Draft Profile</p>
                                 <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                                     <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
                                 </div>
                                 <p className="text-xs text-slate-400">33% Complete</p>
                             </div>
                        </div>
                    </div>
                )}

                {/* TAB: ASSESSMENT LIST */}
                {activeTab === 'assessments_list' && (
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">Standardized Assessments</h3>
                            <button className="btn btn-ghost text-green-700 font-bold">+ Import Assessment</button>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { name: 'React Advanced', time: '45m', q: 20, level: 'Senior' },
                                { name: 'Node.js Backend', time: '60m', q: 25, level: 'Mid-Senior' },
                                { name: 'English C1 Communication', time: '30m', q: 40, level: 'All' },
                                { name: 'Cognitive & Logic', time: '25m', q: 15, level: 'All' },
                                { name: 'Python Data Science', time: '60m', q: 15, level: 'Senior' },
                                { name: 'DevOps Essentials', time: '40m', q: 20, level: 'Mid' },
                            ].map((test, i) => (
                                <div key={i} className="card bg-white hover:shadow-lg transition-all cursor-pointer group border border-slate-100 hover:border-green-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-green-50 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <ClipboardList size={24}/>
                                        </div>
                                        <span className="badge badge-gray">{test.time}</span>
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">{test.name}</h4>
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{test.q} Qs</span>
                                        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{test.level}</span>
                                    </div>
                                    <button className="btn btn-ghost text-green-600 w-full border border-green-100 group-hover:bg-green-50 font-medium">Assign</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                 {/* TAB: ASSESSMENT RESULTS */}
                 {activeTab === 'assessments_results' && (
                    <div className="max-w-6xl mx-auto card bg-white p-0 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                             <h3 className="text-xl font-bold">Candidate Scores</h3>
                             <div className="relative w-64">
                                 <Search className="absolute left-3 top-2.5 text-slate-400" size={18}/>
                                 <input className="pl-10 py-2 w-full bg-slate-50 border-slate-200 rounded-full" placeholder="Search candidate..." />
                             </div>
                        </div>
                        <table className="table-simple w-full">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="pl-6">Candidate</th>
                                    <th>Test Name</th>
                                    <th>Date</th>
                                    <th>Score</th>
                                    <th>Percentile</th>
                                    <th>Status</th>
                                    <th className="pr-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.assessments.map(a => {
                                    const dev = data.developers.find(d => d.id === a.developerId);
                                    return (
                                        <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="pl-6 font-bold text-slate-800">{dev?.name || 'Unknown'}</td>
                                            <td className="text-slate-600">{a.type}</td>
                                            <td className="text-slate-500 text-sm">{new Date(a.completedDate).toLocaleDateString()}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <span className={`font-bold text-lg ${a.score > 80 ? 'text-green-600' : 'text-orange-500'}`}>{a.score}%</span>
                                                    <div className="w-20 bg-slate-100 rounded-full h-1.5">
                                                        <div className={`h-1.5 rounded-full ${a.score > 80 ? 'bg-green-500' : 'bg-orange-400'}`} style={{width: `${a.score}%`}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-slate-500 text-sm">Top 10%</td>
                                            <td><span className="badge badge-green">Completed</span></td>
                                            <td className="pr-6 text-right"><button className="text-blue-600 font-bold text-sm hover:underline">Report</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TAB: CLIENT REQUEST */}
                {activeTab === 'client_request' && (
                    <div className="max-w-3xl mx-auto card bg-white border-t-4 border-t-green-500 shadow-lg">
                        <div className="p-8 pb-0 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4"><Search size={32}/></div>
                            <h2 className="text-2xl font-bold text-slate-800">Find your next Expert</h2>
                            <p className="text-slate-500 mt-2 max-w-md mx-auto">Fill out the requirements and our AI + Human expert loop will return the best 3 matches within 24 hours.</p>
                        </div>
                        
                        <div className="p-8 space-y-6">
                            <div className="space-y-4">
                                <label className="block">
                                    <span className="text-slate-700 font-bold mb-1 block">Role Title</span>
                                    <input className="p-3 bg-slate-50 border-slate-200 focus:bg-white" placeholder="e.g. Senior Frontend Engineer" value={requestForm.role} onChange={e => setRequestForm({...requestForm, role: e.target.value})} />
                                </label>
                                
                                <label className="block">
                                    <span className="text-slate-700 font-bold mb-1 block">Must-have Skills</span>
                                    <div className="flex flex-wrap gap-2 mb-2 p-2 bg-slate-50 rounded border border-slate-200 min-h-[50px]">
                                        <span className="bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded text-sm flex items-center gap-1">React <button className="hover:text-red-500">×</button></span>
                                        <span className="bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded text-sm flex items-center gap-1">Node.js <button className="hover:text-red-500">×</button></span>
                                        <input className="bg-transparent outline-none flex-1 min-w-[100px]" placeholder="Type & hit enter..." />
                                    </div>
                                </label>

                                <div className="grid grid-cols-2 gap-6">
                                    <label className="block">
                                        <span className="text-slate-700 font-bold mb-1 block">Monthly Budget</span>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-slate-400">€</span>
                                            <input type="number" className="pl-8 p-3 bg-slate-50 border-slate-200 focus:bg-white" placeholder="5000" value={requestForm.budget} onChange={e => setRequestForm({...requestForm, budget: e.target.value})} />
                                        </div>
                                    </label>
                                    <label className="block">
                                        <span className="text-slate-700 font-bold mb-1 block">Duration</span>
                                        <select className="p-3 bg-slate-50 border-slate-200 focus:bg-white w-full" value={requestForm.duration} onChange={e => setRequestForm({...requestForm, duration: e.target.value})}>
                                            <option>Select duration...</option>
                                            <option>3 Months</option>
                                            <option>6 Months</option>
                                            <option>12 Months+</option>
                                            <option>Indefinite</option>
                                        </select>
                                    </label>
                                </div>
                                
                                <label className="block">
                                    <span className="text-slate-700 font-bold mb-1 block">Additional Context</span>
                                    <textarea className="p-3 bg-slate-50 border-slate-200 focus:bg-white w-full" rows={3} placeholder="Tell us about the project culture, goals, etc..."></textarea>
                                </label>

                                <button className="btn btn-green w-full py-4 text-lg font-bold shadow-green-200 shadow-lg mt-6 flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform">
                                    <Send size={20}/> Launch Search Request
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: MATCHING (AI) - Messenger Style */}
                {activeTab === 'match' && (
                    <div className="max-w-6xl mx-auto h-[80vh] flex gap-6">
                        {/* Chat Section */}
                        <div className="flex-1 card bg-white flex flex-col p-0 overflow-hidden shadow-2xl border-0 rounded-2xl">
                            {/* Chat Header */}
                            <div className="p-4 bg-white border-b border-slate-100 flex justify-between items-center shadow-sm z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Cpu size={20}/>
                                        </div>
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">Kothon AI Assistant</h3>
                                        <p className="text-slate-400 text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online • Reply time: instant</p>
                                    </div>
                                </div>
                                <button className="btn btn-ghost p-2 text-slate-400 hover:text-slate-600"><MoreVertical size={20}/></button>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 bg-slate-50 p-6 space-y-6 overflow-y-auto" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                                <div className="text-center text-xs text-slate-400 my-4">Today, 10:23 AM</div>
                                
                                <div className="flex gap-4 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex-shrink-0 flex items-center justify-center text-white text-xs mt-auto mb-1">AI</div>
                                    <div className="flex flex-col gap-1">
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-slate-700 text-sm border border-slate-100">
                                            Hello! I'm ready to help you match candidates. <br/>
                                            You can ask me things like <em>"Find me a senior Python dev with Fintech experience"</em>.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse max-w-[80%] ml-auto">
                                    <div className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center text-white text-xs mt-auto mb-1">ME</div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl rounded-br-none shadow-md text-sm">
                                            I need a Senior React Native dev for a 3-month fintech project. Maximum budget €95/h.
                                        </div>
                                        <span className="text-xs text-slate-400 mr-1">Read 10:25 AM</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex-shrink-0 flex items-center justify-center text-white text-xs mt-auto mb-1">AI</div>
                                    <div className="flex flex-col gap-1">
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-slate-700 text-sm border border-slate-100">
                                            I found 3 great matches for you based on those criteria!
                                        </div>
                                        {/* Embedded Card in Chat */}
                                        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-64 hover:shadow-md transition-shadow cursor-pointer">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">👩‍💻</div>
                                                <div>
                                                    <p className="font-bold text-sm">Alice Nguyen</p>
                                                    <p className="text-xs text-green-600 font-bold">98% Match</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 flex-wrap mb-2">
                                                <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded">React Native</span>
                                                <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded">Fintech</span>
                                            </div>
                                            <button className="btn btn-green w-full text-xs py-1 h-auto">View Profile</button>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-1">Just now</span>
                                    </div>
                                </div>
                                <div ref={chatEndRef}></div>
                            </div>

                            {/* Chat Input */}
                            <div className="p-4 bg-white border-t border-slate-100">
                                <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:border-green-400 focus-within:bg-white focus-within:shadow-sm transition-all">
                                    <button className="text-slate-400 hover:text-slate-600"><Paperclip size={20}/></button>
                                    <input 
                                        className="bg-transparent border-none focus:ring-0 flex-1 text-sm outline-none placeholder:text-slate-400" 
                                        placeholder="Type your message to AI..." 
                                        value={chatInput} 
                                        onChange={e => setChatInput(e.target.value)} 
                                        onKeyDown={(e) => e.key === 'Enter' && setChatInput('')}
                                    />
                                    <button className="text-slate-400 hover:text-slate-600"><Smile size={20}/></button>
                                    <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transform active:scale-95 transition-all">
                                        <Send size={18}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Results Sidebar */}
                        <div className="w-[350px] flex flex-col gap-4">
                             <div className="flex justify-between items-center">
                                 <h3 className="font-bold text-slate-600">Context Panel</h3>
                                 <button className="text-xs text-slate-400 hover:text-slate-600">Clear</button>
                             </div>
                             
                             <div className="card bg-white p-4 space-y-4 flex-1 overflow-y-auto">
                                <h4 className="text-xs font-bold text-slate-400 uppercase">Recognized Criteria</h4>
                                <div className="flex flex-wrap gap-2">
                                    <div className="badge badge-green flex gap-1 items-center">Role: React Native <button className="hover:text-red-200">×</button></div>
                                    <div className="badge badge-green flex gap-1 items-center">Exp: Senior <button className="hover:text-red-200">×</button></div>
                                    <div className="badge badge-green flex gap-1 items-center">Domain: Fintech <button className="hover:text-red-200">×</button></div>
                                    <div className="badge badge-green flex gap-1 items-center">Max: €95/h <button className="hover:text-red-200">×</button></div>
                                </div>

                                <div className="border-t border-slate-100 my-4 pt-4">
                                     <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Live Suggestions</h4>
                                     {data.developers.slice(0, 3).map((dev, i) => (
                                        <div key={dev.id} className="flex gap-3 mb-3 p-2 hover:bg-slate-50 rounded cursor-pointer group transition-colors">
                                            <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-lg shadow-sm">👨‍💻</div>
                                            <div className="flex-1 overflow-hidden">
                                                 <div className="flex justify-between">
                                                     <h4 className="font-bold text-sm truncate">{dev.name}</h4>
                                                     <span className="text-xs font-bold text-green-600">{95 - i*4}%</span>
                                                 </div>
                                                 <p className="text-xs text-slate-500 truncate">{dev.specialties.join(', ')}</p>
                                            </div>
                                        </div>
                                     ))}
                                </div>
                             </div>
                        </div>
                    </div>
                )}

                {/* TAB: CANDIDATE POOLS */}
                {activeTab === 'pools' && (
                    <div className="max-w-6xl mx-auto">
                         <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">Talent Pools</h3>
                            <button className="btn btn-green">+ Create Pool</button>
                         </div>
                         <div className="grid grid-cols-4 gap-6">
                             {/* Pool Card 1 */}
                             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-green-300 transition-all cursor-pointer group">
                                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform"><Users size={24}/></div>
                                 <h4 className="font-bold text-lg mb-1">Fintech & Banking</h4>
                                 <p className="text-sm text-slate-500 mb-4 h-10 overflow-hidden">Security clearance, ISO 27001, Python/Java.</p>
                                 <div className="flex items-center justify-between mt-auto">
                                     <span className="badge badge-gray">12 Active</span>
                                     <span className="text-xs text-purple-600 font-medium group-hover:underline">View Details →</span>
                                 </div>
                             </div>
                              {/* Pool Card 2 */}
                              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-green-300 transition-all cursor-pointer group">
                                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform"><Cpu size={24}/></div>
                                 <h4 className="font-bold text-lg mb-1">AI & Data Science</h4>
                                 <p className="text-sm text-slate-500 mb-4 h-10 overflow-hidden">LLMs, PyTorch, Data Engineering.</p>
                                 <div className="flex items-center justify-between mt-auto">
                                     <span className="badge badge-gray">8 Active</span>
                                     <span className="text-xs text-blue-600 font-medium group-hover:underline">View Details →</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                )}

                {/* TAB: JOB OFFERS */}
                {activeTab === 'jobs' && (
                    <div className="card bg-white max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">Job Offers Management</h3>
                            <button className="btn btn-green">Draft Offer</button>
                        </div>
                        <table className="table-simple w-full text-left">
                            <thead className="bg-slate-50 text-slate-500">
                                <tr>
                                    <th className="p-4">Role Title</th>
                                    <th className="p-4">Client</th>
                                    <th className="p-4">Date Sent</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100 hover:bg-slate-50">
                                    <td className="p-4 font-bold text-slate-700">Senior Backend Engineer</td>
                                    <td className="p-4">FinTech Corp</td>
                                    <td className="p-4 text-slate-500">Oct 24, 2025</td>
                                    <td className="p-4"><span className="badge badge-green">Filled</span></td>
                                    <td className="p-4 text-right"><button className="text-slate-400 hover:text-slate-600">•••</button></td>
                                </tr>
                                <tr className="border-b border-slate-100 hover:bg-slate-50">
                                    <td className="p-4 font-bold text-slate-700">React Native Lead</td>
                                    <td className="p-4">MobileFirst</td>
                                    <td className="p-4 text-slate-500">Oct 22, 2025</td>
                                    <td className="p-4"><span className="badge badge-gray">Draft</span></td>
                                    <td className="p-4 text-right"><button className="text-slate-400 hover:text-slate-600">•••</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TAB: DATABASE (NEW - Manual Matching) */}
                {activeTab === 'database' && (
                    <div className="flex gap-6 h-[80vh] max-w-[1600px] mx-auto">
                        {/* Filters Sidebar */}
                        <div className="w-64 card bg-white p-4 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-slate-800">Filters</h3>
                                <button className="text-xs text-green-600 hover:underline">Reset</button>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Technical Stack</h4>
                                    <div className="space-y-2">
                                        {['React', 'Node.js', 'Python', 'Java', 'AWS'].map(skill => (
                                            <label key={skill} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                                                <input type="checkbox" className="rounded border-slate-300 text-green-600 focus:ring-green-500"/>
                                                {skill}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Seniority</h4>
                                    <select className="w-full text-sm border-slate-200 rounded-md">
                                        <option>Any Level</option>
                                        <option>Junior (1-3y)</option>
                                        <option>Mid (3-5y)</option>
                                        <option>Senior (5-8y)</option>
                                        <option>Lead (8y+)</option>
                                    </select>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Availability</h4>
                                    <label className="flex items-center gap-2 text-sm text-slate-600">
                                        <input type="checkbox" checked className="rounded border-slate-300 text-green-600"/>
                                        Immediately
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                                        <input type="checkbox" className="rounded border-slate-300 text-green-600"/>
                                        &lt; 2 Weeks
                                    </label>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Daily Rate Max</h4>
                                    <input type="range" className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"/>
                                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                                        <span>€300</span>
                                        <span>€1200+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Grid */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                             <div className="grid grid-cols-3 gap-6">
                                 {data.developers.map((dev, i) => (
                                     <div key={dev.id} className="card bg-white p-6 hover:shadow-lg transition-all border border-slate-100 group">
                                         <div className="flex justify-between items-start mb-4">
                                              <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-3xl shadow-inner">
                                                  {i % 2 === 0 ? '👨‍💻' : '👩‍💻'}
                                              </div>
                                              <span className={`badge ${dev.status === 'Available' ? 'badge-green' : 'badge-gray'}`}>{dev.status}</span>
                                         </div>
                                         <h3 className="font-bold text-lg text-slate-800 mb-1">{dev.name}</h3>
                                         <p className="text-sm text-slate-500 mb-4">{dev.role}</p>
                                         
                                         <div className="flex flex-wrap gap-2 mb-4">
                                             {dev.specialties.map(s => <span key={s} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">{s}</span>)}
                                         </div>
                                         
                                         <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                             <div className="text-xs font-bold text-slate-400">
                                                 <span className="text-slate-800 text-sm">€{dev.rate}</span>/h
                                             </div>
                                             <button className="btn btn-green text-xs py-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">View Profile</button>
                                         </div>
                                     </div>
                                 ))}
                                 {/* Mock Data for visual fullness */}
                                 {[1,2,3,4].map(k => (
                                     <div key={k} className="card bg-white p-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer border border-dashed border-slate-300 hover:border-solid hover:border-green-200">
                                         <div className="w-16 h-16 rounded-xl bg-slate-50 mb-4"></div>
                                         <div className="h-5 bg-slate-100 rounded w-3/4 mb-2"></div>
                                         <div className="h-4 bg-slate-50 rounded w-1/2 mb-4"></div>
                                         <div className="flex gap-2">
                                             <div className="h-6 w-12 bg-slate-100 rounded"></div>
                                             <div className="h-6 w-12 bg-slate-100 rounded"></div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Module1_AssessmentsMatching;
