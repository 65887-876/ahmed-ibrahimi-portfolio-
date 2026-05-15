import { Camera, Mail, MessageCircle, Send } from 'lucide-react'

export default function Trust() {
  return (
    <section id="about" className="relative border-b border-zinc-800/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-xl shadow-black/25 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">About</p>
            <h2 className="font-display mt-3 text-3xl text-zinc-50 sm:text-4xl">The eye behind the camera</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Ahmed Ibrahimi focuses on expressive portraiture and storytelling visuals. His style blends warm tones,
              natural movement, and clean post-production for timeless shots.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Available for personal sessions, event coverage, and creative collaborations across Algeria.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Portrait Photography', 'Lifestyle Sessions', 'Events & Parties', 'Brand Visuals'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-zinc-700/70 bg-zinc-950/45 px-3 py-2 text-sm text-zinc-300"
                >
                  <Camera className="h-4 w-4 text-sea-hover" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-3xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-xl shadow-black/25 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h3 className="font-display mt-3 text-2xl text-zinc-50 sm:text-3xl">Let's create together</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Reach Ahmed directly on your favorite platform to discuss your shoot, date, and vision.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:sid.brm.photography@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-zinc-700/70 bg-zinc-950/45 px-4 py-3 text-sm text-zinc-200 transition hover:border-sea/45"
              >
                <Mail className="h-4 w-4 text-sea-hover" />
                sid.brm.photography@gmail.com
              </a>
              <a
                href="https://t.me/sidbrm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-700/70 bg-zinc-950/45 px-4 py-3 text-sm text-zinc-200 transition hover:border-sea/45"
              >
                <Send className="h-4 w-4 text-sea-hover" />
                @sidbrm on Telegram
              </a>
              <a
                href="https://wa.me/213799923250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-700/70 bg-zinc-950/45 px-4 py-3 text-sm text-zinc-200 transition hover:border-sea/45"
              >
                <MessageCircle className="h-4 w-4 text-sea-hover" />
                +213 799 923 250 (WhatsApp)
              </a>
            </div>

            <a
              href="https://www.instagram.com/sid.brm?igsh=MTlqZm01OG9pdnBxcQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/30 transition hover:bg-brand-hover"
            >
              Visit Instagram Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
