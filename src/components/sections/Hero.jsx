import { Link } from 'react-router-dom'

export default function Hero() {
  const btnBase =
    'inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition touch-manipulation sm:w-auto sm:min-h-[44px] sm:rounded-full sm:px-5'

  return (
    <section id="intro" className="relative border-b border-zinc-800/50 py-11 sm:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="order-1 w-full shrink-0 lg:order-2 lg:flex lg:w-auto lg:justify-end">
          <div className="mx-auto w-full max-w-56 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 shadow-lg shadow-black/30 ring-1 ring-inset ring-white/6 md:max-w-60 lg:mx-0 lg:max-w-[16rem]">
            <img
              src="/assets/gallery/optimized/IMG_3043.webp"
              alt="Ahmed Ibrahimi photographer portrait sample"
              className="aspect-4/5 w-full object-cover object-right"
              loading="eager"
            />
          </div>
        </figure>

        <div className="order-2 w-full min-w-0 max-w-lg lg:order-1 lg:flex-1 lg:text-left">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
              Ahmed Ibrahimi
            </p>
            <h1 className="font-display mt-3 text-[1.7rem] leading-[1.18] text-zinc-50 sm:text-4xl sm:leading-tight">
              Photographer · Visual storyteller
            </h1>
            <p className="mx-auto mt-3 max-w-md text-pretty text-[0.9375rem] leading-snug font-medium text-zinc-400 sm:text-base">
              Portraits · lifestyle · events
            </p>
            <p className="mx-auto mt-4 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-zinc-400 sm:max-w-none sm:text-base sm:leading-relaxed">
              Ahmed captures moments with a cinematic and natural style, mixing authentic emotions with clean framing.
              Based in Algeria and available for creative shoots, collaborations, and event coverage.
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mx-0 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:max-w-none lg:justify-start lg:gap-3">
            <Link
              to="/gallery"
              className={`${btnBase} bg-brand text-brand-foreground shadow-md shadow-brand/30 hover:bg-brand-hover`}
            >
              Explore gallery
            </Link>
            <a
              href="https://wa.me/213799923250"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} bg-linear-to-r from-sea to-sea-hover text-zinc-950 shadow-md shadow-sea/40 ring-1 ring-sea-hover/40 hover:brightness-110`}
            >
              Book on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/sid.brm?igsh=MTlqZm01OG9pdnBxcQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} border border-zinc-600 bg-zinc-900/40 text-zinc-100 backdrop-blur-sm hover:border-sea/45 hover:bg-zinc-900/70`}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
