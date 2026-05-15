/** SEO copy — keep URLs aligned with `SITE_URL` in `portfolio.js`. */
import { SITE_URL } from './portfolio.js'

export { SITE_URL }

export const SITE_NAME = 'Hamza Boukhari'

/** Path under `public/` → OG / Twitter images must be absolute URLs. */
export const DEFAULT_OG_IMAGE_PATH = '/assets/hero-workspace.png'

export const DEFAULT_KEYWORDS = [
  'Hamza Boukhari',
  'Hamza Boukhari developer',
  'Hamza Boukhari software engineer',
  'Hamza Boukhari full-stack developer',
  'Hamza Boukhari Algeria',
  'software engineer',
  'software engineer Algeria',
  'hire software engineer',
  'remote software engineer',
  'full-stack developer',
  'full stack engineer',
  'web developer',
  'web development services',
  'software development services',
  'custom web development',
  'development services remote',
  'technical consulting developer',
  'problem solving developer',
  'debugging production applications',
  'API integration developer',
  'React developer',
  'Node.js developer',
  'JavaScript engineer',
  'TypeScript developer',
  'MongoDB developer',
  'PostgreSQL developer',
  'Firebase developer',
  'Supabase developer',
  'Redis caching',
  'REST API development',
  'automation engineer',
  'Telegram bot developer',
  'Discord bot developer',
  'SaaS development',
  'startup developer',
  'international clients',
  'responsive UI',
  'product-minded UI',
  'portfolio website',
].join(', ')

export const SEO_COPY = {
  home: {
    title: `${SITE_NAME} · Software engineer & developer · Web development services`,
    description:
      'Hamza Boukhari — software engineer and full-stack developer (Algeria, remote worldwide). Web development services for React & Node.js apps, production APIs, Firebase & Supabase, PostgreSQL & MongoDB, Redis, and Telegram/Discord automation. Practical problem-solving: debugging, integrations, performance, and shipping sensible solutions for founders and teams since 2021.',
  },
  me: {
    title: `Beyond the code · ${SITE_NAME}`,
    description:
      'Personal side of Hamza Boukhari — software engineer behind production web apps and bots: travel, food, cities, and how craft shows up outside the editor.',
  },
  contact: {
    title: `Contact · ${SITE_NAME} · Software engineer`,
    description:
      'Contact Hamza Boukhari for web development services: full-stack engineering, new products, refactors, API design, Firebase & Supabase, automation, and production troubleshooting—Email and LinkedIn.',
  },
  privacy: {
    title: `Privacy policy · ${SITE_NAME}`,
    description:
      'Privacy notice for hamzaboukhari.site — personal data, EmailJS contact form, rights under Algerian Law 18-07 and applicable standards.',
  },
}
