import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { SEO_COPY } from '../constants/seo'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Trust from '../components/sections/Trust'
import Skills from '../components/sections/Skills'
import Footer from '../components/sections/Footer'
import { ArrowRight } from 'lucide-react'

function MeCard() {
  return (
    <section id="me" className="relative border-b border-zinc-800/50 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Link to="/me" className="group block">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/35 p-6 sm:p-8 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-sea/35 hover:bg-zinc-900/55 touch-manipulation">
            <h2 className="font-display text-2xl text-zinc-50 sm:text-3xl">Beyond the code</h2>
            <p className="mt-2 text-zinc-500">
              Food, trips, cities — the normal-human side of a freelance dev who builds apps and automation for clients
              overseas.
            </p>
            <p className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-brand/95 group-hover:gap-2 group-hover:text-brand-hover">
              Read
              <ArrowRight className="h-3.5 w-3.5" />
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen text-zinc-200">
      <Seo title={SEO_COPY.home.title} description={SEO_COPY.home.description} path="/" />
      <main>
        <Navbar />
        <div className="lg:pt-14">
          <Hero />
          <Projects />
          <Trust />
          <MeCard />
          <Skills />
          <Footer />
        </div>
      </main>
    </div>
  )
}
