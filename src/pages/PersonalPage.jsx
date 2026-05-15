import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { SEO_COPY } from '../constants/seo'
import { SITE_URL } from '../constants/portfolio'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const ASSETS = {
  food: '/assets/personal/food-2.jpg',
  desert: '/assets/personal/desert-2.jpg',
  city: '/assets/personal/city.jpg',
}

const imgFallback = (e) => {
  e.currentTarget.onerror = null
  e.currentTarget.src = '/assets/me.png'
}

const beats = [
  {
    id: 'me-food',
    image: ASSETS.food,
    kicker: 'Food',
    title: 'Sitting down for a real meal',
    imageClass: 'block w-full max-h-[min(85vh,900px)] object-contain',
    body: [
      "That's me at a pasta place I like. Nothing Michelin-level — just a good plate, background noise, and time to eat instead of answering Slack.",
      "I approach coding the same way I approach most things I care about: I pay attention, try not to rush when I can help it, and I'd rather fix something properly than stack hacks on top of each other.",
      "Most days I'm shipping React screens, Node APIs, bots, whatever the project needs. I nitpick layout and small UX details because I'd hate handing someone something I'd roll my eyes at myself.",
    ],
  },
  {
    id: 'me-desert',
    image: ASSETS.desert,
    kicker: 'Travel',
    title: 'Distance helps',
    imageClass: 'block w-full max-h-[min(70vh,720px)] object-contain',
    body: [
      "That's desert quiet — totally opposite from how my desk usually looks. Trips like that slow my brain down. Remote work and clients in different time zones already force you to zoom out a bit; being somewhere unfamiliar does the same thing, just offline.",
    ],
  },
  {
    id: 'me-city',
    image: ASSETS.city,
    kicker: 'Cities',
    title: 'New streets',
    imageClass: 'block w-full max-h-[min(70vh,720px)] object-contain',
    body: [
      "I like landing somewhere new, figuring out the metro, finding dinner somewhere random. It's low stakes, but you're always adjusting — a bit like building for people who aren't you. Makes it harder to assume everyone thinks the same way I do.",
    ],
  },
]

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <Seo
        title={SEO_COPY.me.title}
        description={SEO_COPY.me.description}
        path="/me"
        imagePath="/assets/personal/portrait.jpg"
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(100% 70% at 50% 0%, rgba(220, 47, 62, 0.07) 0%, transparent 55%), radial-gradient(80% 50% at 100% 20%, rgba(26, 171, 175, 0.06) 0%, transparent 50%)',
        }}
      />

      <header className="relative z-20 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-5">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-zinc-500 transition hover:text-sea-hover/95"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-2xl px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <h1 className="font-display text-2xl tracking-tight text-zinc-50 sm:text-3xl">Beyond the code</h1>
          <p className="mt-2 text-sm text-zinc-500">
            I&apos;m Hamza — freelance developer. This is the stuff that doesn&apos;t really belong in a project brief.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mb-12 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 shadow-lg shadow-black/25 ring-1 ring-inset ring-white/5"
        >
          <img
            src="/assets/muzan.jpg"
            alt="Hamza Boukhari — portrait outdoors"
            className="aspect-4/5 w-full object-cover object-[center_35%]"
            loading="eager"
            onError={imgFallback}
          />
          <figcaption className="border-t border-zinc-800/80 bg-zinc-950/60 px-5 py-5 text-left sm:px-6 sm:py-6">
            <p className="text-xs text-zinc-500">About me</p>
            <p className="mt-3 text-sm font-semibold text-zinc-100 sm:text-base">
              There&apos;s more to me than just projects and code.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              I build web apps, automation, APIs, and one-off tools for people and teams in different countries. I like
              when software behaves the way you&apos;d expect, and when the interface stays out of your way. Food,
              getting out of town when I can, and walking cities without much of a plan are just… regular parts of my
              life. They also stop me from getting locked into one way of looking at things.
            </p>
          </figcaption>
        </motion.figure>

        <div className="space-y-14 sm:space-y-20">
          {beats.map((beat, i) => (
            <motion.section
              key={beat.id}
              id={beat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">{beat.kicker}</p>

              <div className="mb-5 flex justify-center overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-1 shadow-lg shadow-black/20 sm:p-2">
                <img
                  src={beat.image}
                  alt={
                    beat.id === 'me-food'
                      ? 'Hamza at a pasta restaurant'
                      : beat.id === 'me-desert'
                        ? 'Desert landscape'
                        : 'City streets and urban energy'
                  }
                  className={beat.imageClass}
                  onError={imgFallback}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>

              <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{beat.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {beat.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/35 p-5 shadow-md shadow-black/15 sm:p-6"
        >
          <h3 className="text-sm font-semibold text-zinc-200">In one line</h3>
          <p className="text-sm leading-relaxed text-zinc-500">
            I&apos;m Hamza. I still enjoy shipping things after doing this for a while. If we work together you get
            someone straightforward, easy to ping, and a bit picky about whether your product feels awkward on screen
            — in a good way.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 text-sm font-medium text-zinc-200 transition hover:border-sea/55 hover:bg-sea/12 hover:text-sea-hover touch-manipulation"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </a>
        </div>
      </main>
    </div>
  )
}
