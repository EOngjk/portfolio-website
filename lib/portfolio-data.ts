export const profile = {
  name: 'Eric Ong Jun-Kye',
  firstName: 'Eric',
  roles: ['Data Analyst', 'Data Scientist', 'AI Engineer'],
  tagline:
    'I build AI Agents, AI-powered workflows, data pipelines, and dashboards that simplify complex tasks and reduce manual work.',
  location: 'Hong Kong',
  currently: 'Data Analyst at Société Générale',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: 'https://github.com/EOngjk', handle: '@EOngjk' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ericojk/',
      handle: '/in/ericojk',
    },
  ],
  portrait: '/photo.jpeg',
}

export const story = {
  heading: 'XD.',
  paragraphs: [
    'Malaysian kid from Ampang, Selangor. Arrived in Hong Kong in 2021 with full scholarship and now pursuing my career in data and AI.',
    'Growing up, I\'ve always been fascinated by new technology and business ideas. That curiosity still drives me today, but now it\'s focused on data, AI, and emerging tech.',
    'Open to connecting with others building practical data and AI solutions.'
  ],
  facts: [
    { label: 'Based in', value: 'Hong Kong' },
    { label: 'Currently', value: 'Data Analyst, Société Générale' },
    { label: 'Focus', value: 'Data analysis, machine learning, AI applications' },
  ],
  skills: [
    // AI Engineering & LLM Applications
    'LangChain',
    'Pydantic',
    'Prompt Engineering',
    'LLM Application Development',
    'Document Processing',
    'AI-Powered Workflow Automation',

    // Programming & Automation
    'Python',
    'SQL',
    'Power Automate',
    'Java',

    // Data Engineering & Platforms
    'ETL Pipeline Development',
    'Data Extraction & Transformation',
    'Databricks',
    'Dataiku',

    // Analytics & AI Tools
    'Power BI',
    'Streamlit',
    'Microsoft Excel',
    'Microsoft Copilot Studio',
    'Databricks Genie',
  ],
}

export type TimelineItem = {
  id: string
  period: string
  title: string
  organization: string
  location?: string
  summary: string
  highlights: string[]
  tags?: string[]
}

export const education: TimelineItem[] = [
  {
    id: 'edu-1',
    period: '2021 — 2025',
    title: 'BSc (Hons) in Business Computing and Data Analytics (BCDA), Minor in Marketing',
    organization: 'Hong Kong Baptist University',
    location: 'Hong Kong',
    summary:
      'Specialized in distributed systems and human-computer interaction. Thesis on latency-aware scheduling for edge workloads.',
    highlights: [
      'Graduated with First Class Honours, cGPA 3.95 / 4.00',
      'Scholarships: Belt and Road Scholarship (Malaysia); Full Admission Scholarship Scheme for Overseas Applicants; HKBU Computer Science Department Alumni Scholarship; Outstanding Student Scholarship for BCDA Students.',
    ],
    tags: ['Economics', 'Finance', 'Software Development','Data Analytics', 'Data Science'],
  },
]

export const work: TimelineItem[] = [
  {
    id: 'work-1',
    period: 'Sept 2026 — Present',
    title: 'Data Analyst',
    organization: 'Société Générale',
    location: 'Hong Kong',
    summary:
      'Building data pipelines AI Agents and workflows to support audit missions and projects across APAC.',
    highlights: [
      'Built a Python ETL and internal LLM pipeline for an internal audit project, screening 300+ contracts and extracting relevant clauses for auditor review; applied document filtering and chunking to limit unnecessary LLM processing.',
      'Rebuilt the monthly APAC operational data ETL and analysis pipeline using Python, LangChain, and Pydantic, generating LLM-powered incident summaries, tags, categories, root-cause analysis, and market-level executive summaries across eight markets.',
    ],
    tags: [
      'Python',
      'LangChain',
      'Pydantic',
      'ETL Pipelines',
      'LLM Applications',
    ],
  },
  {
    id: 'work-2',
    period: 'Jul 2025 — Sept 2026',
    title: 'IT Trainee',
    organization: 'Airport Authority Hong Kong',
    location: 'Hong Kong',
    summary:
      'Developed reporting automation, conversational analytics, and customer segmentation solutions for cargo operations and retail.',
    highlights: [
      'Automated HKIA Dongguan Cargo Logistics reporting pipelines using Python and Power Automate, reducing manual processing time by 75% and delivering real-time insights through Power BI.',
      'Built a conversational cargo data agent using Databricks Genie and Unity Catalog, enabling non-technical stakeholders to query cargo data in natural language on demand.',
      'Deployed a recency, frequency, and monetary value (RFM) model for the Retail Department to support customer segmentation and targeted marketing initiatives.',
    ],
    tags: [
      'Python',
      'Power Automate',
      'Power BI',
      'Databricks Genie',
      'Unity Catalog',
      'Copilot Studio',
      'RFM Modeling',
    ],
  },
  {
    id: 'work-3',
    period: 'Jun 2024 — Aug 2024',
    title: 'Group Customer Intern',
    organization: 'FWD Insurance Group Office',
    location: 'Hong Kong',
    summary:
      'Supported claims analysis and recurring business reporting through dashboards and automated insight generation.',
    highlights: [
      'Developed an automated Power BI dashboard to streamline claims analysis and support planning.',
      'Created Excel templates and a Python script to automate insight generation across nine business units, supporting recurring analysis and reporting.',
    ],
    tags: ['Power BI', 'Python', 'Microsoft Excel', 'Reporting Automation'],
  },
]

export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images?: string[]
  category: 'Data & AI'
  year: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
 {
    id: 'chiller-efficiency-prediction',
    title: 'Predictive Modelling for Chiller Equipment Efficiency',
    description:
      'Predicting air-cooled chiller efficiency with machine learning, identifying potential energy savings estimated at 20.95%.',
    longDescription:
      'Developed a Python-based machine learning model to predict air-cooled chiller efficiency at Tai Lung Veterinary Laboratory, Hong Kong. The project identified potential energy savings estimated at 20.95% and received the EDPS Innovative Scholarship Award 2024–25 (HK$20,000).',
    image: '/projects/Simulation.png',
    images: [
      '/projects/Simulation.png',
      '/projects/Predictions.png',
      '/projects/Explore.png',
    ],
    category: 'Data & AI',
    year: '2024–25',
    tags: [
      'Python',
      'Machine Learning',
      'Predictive Modelling',
      'Energy Efficiency',
    ],
    repoUrl: 'https://github.com/EOngjk/Chiller-Efficiency-Prediction',
    featured: true,
  },
]

export const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
