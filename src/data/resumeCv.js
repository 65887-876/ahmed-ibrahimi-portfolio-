/**
 * International résumé: reverse-chronological experience, ATS-oriented keywords,
 * impact-led bullets. Single source for PDF export (`downloadResumePdf`).
 */

import { LIVE_PROJECTS, SITE_URL } from '../constants/portfolio'

export const CV_META = {
  fullName: 'Hamza Boukhari',
  headline:
    'Full-Stack Software Engineer · React · Node.js · MongoDB · PostgreSQL · Firebase · Supabase',
  location: 'Algeria',
  email: 'hamzaboukharii@gmail.com',
  linkedIn: 'https://linkedin.com/in/hamzaboukhari',
  website: SITE_URL,
}

export const CV_SUMMARY =
  'Autonomous full-stack engineer freelancing since 2021 with ownership across architecture, delivery, and production reliability for international clients (40+ shipped engagements). Primary stack: JavaScript/TypeScript, React, Node.js, Express, REST APIs, responsive UI. Data layer across MongoDB, PostgreSQL, and MySQL; Redis where caching or sessions matter. Hands-on with Firebase (Firestore, Auth, Functions, Storage) and Supabase (PostgreSQL, RLS, Auth, Storage, Edge Functions, Realtime). Automation at scale: Telegram/Discord bots with session handling, rate limits, and proxies. Uses AI-assisted tooling (e.g. Claude Code) as a productivity multiplier while retaining architectural judgment and review discipline. Began programming at 18 alongside a Licence in English Literature—clear communication with stakeholders.'

export const CV_CORE_COMPETENCIES = [
  'Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3',
  'Frontend: React.js, Next.js, Tailwind CSS, responsive UI, performance-conscious UX',
  'Backend: Node.js, Express.js, REST API design, integration patterns (third-party APIs, webhooks)',
  'Document & relational databases: MongoDB (aggregation, indexing); PostgreSQL & MySQL (schema design, queries, migrations mindset)',
  'Firebase: Firestore / Realtime Database, Firebase Auth, Cloud Functions, Cloud Storage, security rules',
  'Supabase: Postgres, Row Level Security (RLS), Auth, Storage, Edge Functions, Realtime subscriptions',
  'Caching & ops-facing data: Redis (sessions, rate limits, queues/caching patterns)',
  'Automation: Telegram/Discord bots, multi-account flows, reliability constraints',
  'Practices: Remote collaboration, documentation, incremental delivery, CI-minded workflows',
]

export const CV_EXPERIENCE = [
  {
    role: 'Freelance Full-Stack Developer',
    organization: 'Independent — international clients',
    dates: 'Late 2021 – Present',
    bullets: [
      'Delivered 40+ production-grade web and automation engagements for international clients by owning discovery-to-handoff delivery on React/Node stacks with persistence in MongoDB, PostgreSQL, Firebase, Supabase, and Redis-backed patterns where appropriate.',
      'Architected maintainable frontends and backends measured by long-lived codebases and repeat engagements, emphasizing modular boundaries, observability-friendly patterns, and clear documentation.',
      'Engineered production messaging automation (Telegram/Discord) with proxy rotation, session lifecycle management, and rate limiting—reducing manual operational load for client workflows.',
      'Shipped performance-aware interfaces and APIs aligned with remote startup expectations: fast iteration, explicit contracts, and pragmatic tradeoffs under scope constraints.',
      'Partnered across time zones with autonomous execution—translating ambiguous requirements into executable milestones without sacrificing reliability.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    organization: 'Internship',
    dates: '2020',
    bullets: [
      'Built responsive UI from specifications using HTML, CSS, and JavaScript—improving mobile usability and visual consistency across pages.',
      'Translated mockups into production-ready layouts with cross-browser validation.',
    ],
  },
]

const LIVE_CV_ENTRIES = LIVE_PROJECTS.filter((p) => p.includeInResume !== false).map((p) => ({
  name: p.title,
  year: 'Live',
  detail: p.url,
  bullets: p.resumeBullets,
}))

export const CV_PROJECTS = [
  {
    name: 'Enterprise-style MERN web application',
    year: '2024',
    bullets: [
      'Delivered authentication, role-aware dashboards, and dynamic data workflows using React.js, Node.js, Express with MongoDB and/or Supabase/Firebase-style backends—securing multi-user paths end-to-end.',
      'Raised maintainability and UX clarity via structured components, REST contracts, and performance-conscious rendering.',
    ],
  },
  {
    name: 'Automation bot platform',
    year: '2023',
    bullets: [
      'Engineered multi-account messaging automation with proxy rotation and resilient session handling—designed for throughput limits and operational stability.',
    ],
  },
  {
    name: 'Responsive client websites',
    year: '2022',
    bullets: [
      'Shipped industry-spanning marketing and product sites emphasizing Core Web Vitals-minded patterns, accessibility basics, and cross-device QA.',
    ],
  },
  ...LIVE_CV_ENTRIES,
]

export const CV_EDUCATION = [
  {
    degree: 'Licence — English Literature',
    institution: 'University of Skikda',
    dates: '2019 – 2022',
  },
  {
    degree: 'Full-Stack Development Bootcamp',
    institution: 'Project-based program',
    dates: '2021',
    note: 'React.js, Node.js, MongoDB, PostgreSQL basics, Firebase & Supabase exposure, REST APIs — portfolio-driven delivery',
  },
  {
    degree: 'Frontend Development Bootcamp',
    institution: 'Project-based program',
    dates: '2022',
    note: 'JavaScript, responsive design, UI composition patterns',
  },
]
