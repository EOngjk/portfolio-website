// Edit this file to personalize the site. Every section reads from here.

export const profile = {
  name: 'Eric Ong Jun Kye',
  firstName: 'Eric',
  roles: ['Software Engineer', 'Product Builder', 'Open Source Maintainer'],
  tagline:
    'I design and build software that people actually enjoy using — from data-heavy dashboards to small tools that remove friction from everyday work.',
  location: 'Singapore',
  currently: 'Senior Engineer at Northwind Labs',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: 'https://github.com/EOngjk', handle: '@EOngjk' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ojunkye',
      handle: '/in/ojunkye',
    },
  ],
  portrait: '/portrait.png',
}

export const story = {
  heading: 'From taking apart radios to shipping products used by thousands.',
  paragraphs: [
    'I grew up in a small town where the nearest computer shop was an hour away. My first "project" was a broken radio I disassembled at nine years old — I never got it working again, but I learned that everything complicated is just a lot of simple pieces arranged carefully.',
    'That curiosity turned into a computer science degree, then into a decade of building for the web. I have worked on tiny startup teams where I owned everything from the database to the pixels, and inside larger organizations where I learned how to ship reliably at scale.',
    'Today I care most about the space between engineering and product: making technical decisions that serve real people, writing code that the next person can read, and mentoring engineers earlier in their journey.',
  ],
  facts: [
    { label: 'Based in', value: 'Singapore' },
    { label: 'Currently', value: 'Senior Engineer, Northwind Labs' },
    { label: 'Focus', value: 'Full-stack web, data products' },
    { label: 'Outside work', value: 'Trail running, film photography' },
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'GraphQL',
    'Python',
    'AWS',
    'Docker',
    'Figma',
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
    period: '2018 — 2020',
    title: 'M.Sc. Computer Science',
    organization: 'National University of Technology',
    location: 'Singapore',
    summary:
      'Specialized in distributed systems and human-computer interaction. Thesis on latency-aware scheduling for edge workloads.',
    highlights: [
      'Graduated with Distinction, GPA 4.8 / 5.0',
      'Teaching assistant for Data Structures & Algorithms (3 semesters)',
      'Published one workshop paper on edge scheduling heuristics',
    ],
    tags: ['Distributed Systems', 'HCI', 'Research'],
  },
  {
    id: 'edu-2',
    period: '2014 — 2018',
    title: 'B.Eng. Software Engineering',
    organization: 'Riverside Institute of Technology',
    location: 'Kuala Lumpur',
    summary:
      'Built a strong foundation in software design, databases, and networks while leading the student developer club.',
    highlights: [
      'First Class Honours',
      'President of the Developer Student Club — grew membership from 30 to 200+',
      'Capstone: campus navigation app adopted by the student union',
    ],
    tags: ['Software Design', 'Leadership'],
  },
]

export const work: TimelineItem[] = [
  {
    id: 'work-1',
    period: '2023 — Present',
    title: 'Senior Software Engineer',
    organization: 'Northwind Labs',
    location: 'Singapore · Hybrid',
    summary:
      'Tech lead for the analytics platform team, owning the architecture of a real-time reporting product used by 40k monthly active users.',
    highlights: [
      'Re-architected the ingestion pipeline, cutting p95 dashboard load time from 6.2s to 900ms',
      'Led a team of five engineers; introduced RFC-driven design reviews',
      'Drove adoption of a shared design system across four product surfaces',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Kafka'],
  },
  {
    id: 'work-2',
    period: '2020 — 2023',
    title: 'Software Engineer',
    organization: 'Brightline Health',
    location: 'Remote',
    summary:
      'Full-stack engineer on the patient scheduling product, working closely with clinicians to simplify appointment workflows.',
    highlights: [
      'Shipped a rescheduling flow that reduced no-shows by 18%',
      'Built the HIPAA-compliant audit logging service from scratch',
      'Mentored two junior engineers through to promotion',
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'AWS'],
  },
  {
    id: 'work-3',
    period: '2019',
    title: 'Software Engineering Intern',
    organization: 'Kestrel Payments',
    location: 'Singapore',
    summary:
      'Worked on the merchant onboarding team, automating document verification steps that were previously manual.',
    highlights: [
      'Automated KYC document checks, saving ops team ~15 hours per week',
      'Wrote internal CLI tooling still in use today',
    ],
    tags: ['Python', 'Django', 'Postgres'],
  },
]

export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: 'Web' | 'Mobile' | 'Tools'
  year: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'pulse',
    title: 'Pulse Analytics',
    description: 'Real-time product analytics with sub-second queries.',
    longDescription:
      'A self-hostable analytics platform that streams events into ClickHouse and renders live dashboards. Includes a query builder, alerting, and shareable report links.',
    image: '/projects/analytics.png',
    category: 'Web',
    year: '2024',
    tags: ['Next.js', 'ClickHouse', 'WebSockets', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'stride',
    title: 'Stride',
    description: 'A calm fitness tracker that focuses on consistency over numbers.',
    longDescription:
      'React Native app with offline-first sync, Apple Health and Google Fit integrations, and a weekly reflection flow instead of streak pressure.',
    image: '/projects/mobile.png',
    category: 'Mobile',
    year: '2023',
    tags: ['React Native', 'Expo', 'SQLite'],
    liveUrl: '#',
  },
  {
    id: 'kiln',
    title: 'Kiln Studio Store',
    description: 'Headless storefront for an independent ceramics studio.',
    longDescription:
      'Built a fast, accessible storefront on a headless commerce backend, with a custom checkout flow and an admin view for managing limited drops.',
    image: '/projects/ecommerce.png',
    category: 'Web',
    year: '2022',
    tags: ['Next.js', 'Shopify', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 'shipctl',
    title: 'shipctl',
    description: 'A CLI that turns release checklists into one command.',
    longDescription:
      'Open source deployment helper that validates environments, runs migrations, tags releases, and posts summaries to Slack. 1.2k stars on GitHub.',
    image: '/projects/cli.png',
    category: 'Tools',
    year: '2023',
    tags: ['Go', 'Cobra', 'GitHub Actions'],
    repoUrl: '#',
  },
]

export const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
