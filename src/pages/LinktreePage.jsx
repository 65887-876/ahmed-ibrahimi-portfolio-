import { Link } from 'react-router-dom'
import { Camera, Instagram, Mail, Send } from 'lucide-react'

const links = [
  {
    href: '/gallery',
    label: 'View Full Gallery',
    caption: 'Professional portfolio',
    icon: Camera,
    internal: true,
  },
  {
    href: 'https://www.instagram.com/sid.brm?igsh=MTlqZm01OG9pdnBxcQ%3D%3D&utm_source=qr',
    label: 'Instagram',
    caption: '@sid.brm',
    icon: Instagram,
  },
  {
    href: 'mailto:sid.brm.photography@gmail.com',
    label: 'Email',
    caption: 'sid.brm.photography@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://wa.me/213799923250',
    label: 'WhatsApp',
    caption: '+213 799 923 250',
    icon: null,
  },
  {
    href: 'https://t.me/sidbrm',
    label: 'Telegram',
    caption: '@sidbrm',
    icon: Send,
  },
]

export default function LinktreePage() {
  return (
    <section id="contact" className="relative isolate min-h-[calc(100vh-56px)] py-6 sm:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-brand/16 via-transparent to-sea/10" />
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6">
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/55 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-7">
          <div className="text-center">
            <picture>
              <source srcSet="/assets/gallery/thumbs/IMG_3043.webp" type="image/webp" />
              <img
                src="/assets/gallery/IMG_3043.JPG"
                alt="Ahmed Ibrahimi profile"
                className="mx-auto h-24 w-24 rounded-full border border-zinc-700/80 object-cover shadow-lg shadow-black/30"
                loading="eager"
              />
            </picture>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Official linktree</p>
            <h1 className="font-display mt-2 text-3xl text-zinc-50 sm:text-4xl">Ahmed Ibrahimi</h1>
            <p className="mt-1 text-sm text-zinc-400">Photographer</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              Portraits, events, and lifestyle storytelling. Bookings and collaborations through the links below.
            </p>
          </div>

          <div className="mt-7 space-y-3">
            {links.map((item) => {
              const Icon = item.icon
              if (item.internal) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-brand/45 bg-brand/14 px-4 py-4 transition hover:border-brand-hover hover:bg-brand/22"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/35 bg-zinc-900/85 text-brand-hover">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-left">
                        <span className="block text-sm font-semibold text-zinc-100">{item.label}</span>
                        <span className="block text-xs text-zinc-400">{item.caption}</span>
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.15em] text-zinc-300">Open</span>
                  </Link>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-700/70 bg-zinc-900/65 px-4 py-4 transition hover:border-sea/45 hover:bg-zinc-900/90"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-950/70 text-sea-hover">
                      {item.label === 'WhatsApp' ? (
                        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.02 0C3.63 0 .062 3.57.062 7.96c0 1.402.366 2.77 1.06 3.976L0 16l4.203-1.102a7.947 7.947 0 0 0 3.816.973h.003c4.39 0 7.959-3.57 7.959-7.96a7.9 7.9 0 0 0-2.38-5.585ZM8.022 14.53h-.002a6.62 6.62 0 0 1-3.372-.921l-.242-.144-2.493.654.665-2.43-.158-.249A6.6 6.6 0 0 1 1.4 7.96c0-3.65 2.97-6.62 6.623-6.62a6.58 6.58 0 0 1 4.694 1.946 6.58 6.58 0 0 1 1.944 4.692c-.002 3.65-2.973 6.622-6.639 6.622Zm3.63-4.95c-.199-.1-1.176-.58-1.358-.645-.182-.066-.314-.1-.447.1-.133.199-.514.645-.63.778-.116.133-.232.149-.43.05-.199-.1-.839-.31-1.598-.99-.59-.526-.99-1.175-1.106-1.374-.116-.199-.013-.307.087-.406.09-.09.198-.232.298-.348.1-.116.133-.199.2-.332.066-.133.033-.249-.017-.348-.05-.1-.447-1.077-.613-1.475-.162-.39-.327-.337-.447-.343-.116-.006-.249-.007-.381-.007-.133 0-.348.05-.53.249-.182.199-.696.68-.696 1.657 0 .977.713 1.922.812 2.055.1.133 1.402 2.141 3.397 3.003.474.205.843.327 1.131.419.475.151.908.13 1.25.079.381-.057 1.176-.48 1.342-.943.166-.464.166-.861.116-.943-.05-.083-.183-.133-.381-.232Z" />
                        </svg>
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-semibold text-zinc-100">{item.label}</span>
                      <span className="block text-xs text-zinc-500">{item.caption}</span>
                    </span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 transition group-hover:text-zinc-300">
                    Open
                  </span>
                </a>
              )
            })}
          </div>

          <p className="mt-5 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Ahmed Ibrahimi Photography</p>
          <p className="mt-1 text-center text-xs text-zinc-400">
            Developed by{' '}
            <a
              href="https://hamzaboukhari.site"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300 underline underline-offset-2"
            >
              hamzaboukhari.site
            </a>{' '}
            ·{' '}
            <a
              href="https://www.instagram.com/yourfavtechnerd"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300 underline underline-offset-2"
            >
              @yourfavtechnerd
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
