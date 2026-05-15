import { motion } from 'framer-motion'
import { Code2, Server, Database, Sparkles, Zap, Wrench, Target } from 'lucide-react'

const sectionIntro = {
  title: 'Skills & expertise',
  description:
    'What I work with most — stacks, tools, and how I use them in real projects.',
}

const skillCategories = [
  {
    title: 'Frontend development',
    icon: Code2,
    lines: [
      'React.js, Next.js, Vite, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Redux, Framer Motion',
    ],
  },
  {
    title: 'Backend development',
    icon: Server,
    lines: [
      'Node.js, Express.js, Python, FastAPI',
      'REST APIs, GraphQL, WebSockets, Serverless architectures',
    ],
  },
  {
    title: 'Databases & backend services',
    icon: Database,
    lines: [
      'MongoDB, PostgreSQL, MySQL, Redis',
      'Firebase — Firestore, Auth, Cloud Functions, Storage, security rules',
      'Supabase — Postgres, RLS, Auth, Storage, Edge Functions, Realtime',
    ],
  },
  {
    title: 'Engineering workflow',
    icon: Sparkles,
    lines: [
      'Claude Code — primary agentic environment for implementation, refactors, and cross-codebase work.',
      'Where products call for it: LLM APIs, assistants, and automation wired into apps (REST integrations, chat flows).',
    ],
    subpoints: [
      'Balances speed from agent-assisted iteration with clear ownership of architecture and UX outcomes.',
    ],
  },
  {
    title: 'Automation & scripting',
    icon: Zap,
    lines: [
      'Telegram Bots, Discord Bots',
      'Automation Workflows, Web Scraping',
      'Selenium, Puppeteer',
    ],
    subpoints: [
      'Develop scalable automation systems with multi-account handling and task scheduling',
      'Build bots for messaging, data extraction, and workflow automation',
    ],
  },
  {
    title: 'DevOps & tools',
    icon: Wrench,
    lines: [
      'Git, Docker, Linux',
      'AWS, Vercel',
      'CI/CD pipelines, Nginx',
    ],
  },
]

const coreStrengths = [
  'Full-stack web development (React, Node, MongoDB, PostgreSQL, Firebase, Supabase)',
  'Automation Systems & Bot Development',
  'Agent-assisted engineering (Claude Code) with ownership of architecture & UX',
  'Scalable Backend Design & API Development',
  'Performance Optimization & Clean UI/UX',
]

function SubBulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2 border-t border-zinc-800/70 pt-4">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-zinc-500 leading-relaxed">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sea/80" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const iconBox =
  'shrink-0 rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-2.5 text-sea/85'
const card =
  'rounded-2xl border border-zinc-800/80 bg-zinc-900/35 p-6 sm:p-7 shadow-md shadow-black/20 backdrop-blur-sm'

export default function Skills() {
  return (
    <section id="skills" className="relative border-b border-zinc-800/50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-display text-2xl text-zinc-100 sm:text-3xl">{sectionIntro.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 sm:text-base">{sectionIntro.description}</p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(catIndex * 0.04, 0.2) }}
              className={card}
            >
              <div className="flex items-start gap-4">
                <div className={iconBox}>
                  <category.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-zinc-200 sm:text-lg">{category.title}</h3>
                  <div className="mt-2 space-y-2 sm:pl-0">
                    {category.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
                        {line}
                      </p>
                    ))}
                  </div>
                  {category.subpoints && <SubBulletList items={category.subpoints} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 shadow-md shadow-black/15">
          <div className="mb-4 flex items-center gap-3">
            <div className={iconBox}>
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-200 sm:text-lg">Core strengths</h3>
          </div>
          <ul className="space-y-2">
            {coreStrengths.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-zinc-400 sm:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/85" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
