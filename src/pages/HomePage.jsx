import { Link } from 'react-router-dom'
import { Camera, Film, Link as LinkIcon } from 'lucide-react'
import Footer from '../components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-7 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand/16 via-transparent to-sea/10" />
        <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-brand/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-sea/16 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-7 px-5 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-700/60 bg-zinc-900/55 p-2 shadow-2xl shadow-black/35">
              <img
                src="/assets/gallery/optimized/IMG_3043.webp"
                alt="Ahmed Ibrahimi portrait"
                className="h-[330px] w-full rounded-2xl object-cover sm:h-[500px]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-2xl bg-linear-to-t from-zinc-950/85 via-zinc-950/5 to-transparent px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">Ahmed Ibrahimi</p>
                <p className="mt-1 text-sm text-zinc-200">Portrait and lifestyle photographer</p>
              </div>
            </div>
            <img
              src="/assets/gallery/optimized/IMG_3051.webp"
              alt="Ahmed Ibrahimi creative sample"
              className="relative -mt-10 ml-auto hidden h-40 w-36 rounded-2xl border border-zinc-700/70 object-cover shadow-xl shadow-black/40 sm:block"
              loading="lazy"
            />
          </div>

          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">Ahmed Ibrahimi Photography</p>
            <h1 className="font-display mt-3 text-3xl leading-tight text-zinc-50 sm:text-5xl">
              Crafting stories with light, mood, and real emotion
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Ahmed creates cinematic portraits, lifestyle sessions, and event visuals that feel authentic and timeless.
              Every frame is designed to keep the moment alive.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5 text-[11px] uppercase tracking-[0.15em] text-zinc-300">
              <span className="rounded-full border border-zinc-700/80 bg-zinc-900/55 px-3 py-1.5">Portrait</span>
              <span className="rounded-full border border-zinc-700/80 bg-zinc-900/55 px-3 py-1.5">Lifestyle</span>
              <span className="rounded-full border border-zinc-700/80 bg-zinc-900/55 px-3 py-1.5">Events</span>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Link
                to="/gallery"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/30 transition hover:bg-brand-hover"
              >
                <Film className="h-4 w-4" />
                Explore Gallery
              </Link>
              <Link
                to="/linktree"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/55 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-sea/45 hover:bg-zinc-900/85"
              >
                <LinkIcon className="h-4 w-4" />
                Open Linktree
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:max-w-md">
              <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/55 px-3 py-3 text-center">
                <p className="text-lg font-semibold text-zinc-100">28</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Frames</p>
              </div>
              <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/55 px-3 py-3 text-center">
                <p className="text-lg font-semibold text-zinc-100">4</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Styles</p>
              </div>
              <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/55 px-3 py-3 text-center">
                <p className="inline-flex items-center gap-1 text-lg font-semibold text-zinc-100">
                  <Camera className="h-4 w-4 text-brand-hover" />
                  Pro
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Creative</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
