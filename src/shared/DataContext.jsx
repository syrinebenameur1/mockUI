import React, { createContext, useCallback, useState } from 'react';

const initialData = {
  developers: [
    {
      id: 'dev-1',
      name: 'Alice Nguyen',
      specialties: ['Backend', 'APIs'],
      seniority: 'Senior',
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL'],
      availability: 60,
      rate: 90,
      tags: ['startup experience', 'EU data-law trained'],
      assessmentScores: { 'technical-1': 88, 'soft-1': 92 }
    },
    {
      id: 'dev-2',
      name: 'Jamal Ben Ali',
      specialties: ['Frontend', 'Design Systems'],
      seniority: 'Mid',
      techStack: ['React', 'Next.js', 'Tailwind'],
      availability: 80,
      rate: 75,
      tags: ['Fintech', 'B2B SaaS'],
      assessmentScores: { 'technical-2': 81 }
    }
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'EU Compliance Portal',
      clientName: 'RegulaTech',
      developerId: 'dev-1',
      startDate: '2025-11-01',
      endDate: '2026-03-30',
      status: 'Active',
      budget: 60000
    },
    {
      id: 'proj-2',
      name: 'Startup Landing Revamp',
      clientName: 'Launchly',
      developerId: 'dev-2',
      startDate: '2025-12-10',
      endDate: '2026-02-15',
      status: 'Pending',
      budget: 18000
    }
  ],
  messages: [
    {
      id: 'msg-1',
      projectId: 'proj-1',
      sender: 'client',
      content: 'Can we review the latest compliance report on Thursday?',
      createdAt: new Date().toISOString()
    },
    {
      id: 'msg-2',
      projectId: 'proj-1',
      sender: 'talent',
      content: 'Yes, I will have a draft ready by then.',
      createdAt: new Date().toISOString()
    }
  ],
  invoices: [
    {
      id: 'inv-1',
      projectId: 'proj-1',
      developerId: 'dev-1',
      amount: 12000,
      status: 'Paid',
      dueDate: '2025-12-31'
    },
    {
      id: 'inv-2',
      projectId: 'proj-2',
      developerId: 'dev-2',
      amount: 6000,
      status: 'Pending',
      dueDate: '2026-02-20'
    }
  ],
  assessments: [
    {
      id: 'assessment-1',
      developerId: 'dev-1',
      type: 'Technical',
      score: 88,
      completedDate: '2025-10-01'
    },
    {
      id: 'assessment-2',
      developerId: 'dev-1',
      type: 'SoftSkills',
      score: 92,
      completedDate: '2025-10-03'
    },
    {
      id: 'assessment-3',
      developerId: 'dev-2',
      type: 'Technical',
      score: 81,
      completedDate: '2025-11-12'
    }
  ]
};

export const DataContext = createContext({
  data: initialData,
  addDeveloper: () => undefined,
  updateDeveloper: () => undefined,
  addProject: () => undefined,
  addMessage: () => undefined,
  addInvoice: () => undefined,
  addAssessment: () => undefined
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const addDeveloper = useCallback((dev) => {
    setData(prev => ({ ...prev, developers: [...prev.developers, dev] }));
  }, []);

  const updateDeveloper = useCallback((dev) => {
    setData(prev => ({
      ...prev,
      developers: prev.developers.map(d => (d.id === dev.id ? dev : d))
    }));
  }, []);

  const addProject = useCallback((project) => {
    setData(prev => ({ ...prev, projects: [...prev.projects, project] }));
  }, []);

  const addMessage = useCallback((msg) => {
    setData(prev => ({ ...prev, messages: [...prev.messages, msg] }));
  }, []);

  const addInvoice = useCallback((invoice) => {
    setData(prev => ({ ...prev, invoices: [...prev.invoices, invoice] }));
  }, []);

  const addAssessment = useCallback((assessment) => {
    setData(prev => ({ ...prev, assessments: [...prev.assessments, assessment] }));
  }, []);

  return (
    <DataContext.Provider
      value={{ data, addDeveloper, updateDeveloper, addProject, addMessage, addInvoice, addAssessment }}
    >
      {children}
    </DataContext.Provider>
  );
};
