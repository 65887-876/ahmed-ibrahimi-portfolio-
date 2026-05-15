import { Instagram, Mail, Send } from 'lucide-react'

const external =
  'flex min-h-[44px] min-w-[44px] items-center justify-center text-zinc-500 transition hover:text-sea-hover/95 -m-2 p-2 sm:m-0 sm:min-h-0 sm:min-w-0 sm:p-0'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center">
        <div className="flex gap-2 sm:gap-4">
          <a
            href="https://www.instagram.com/sid.brm?igsh=MTlqZm01OG9pdnBxcQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={external}
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
          </a>
          <a href="mailto:sid.brm.photography@gmail.com" className={external} aria-label="Email">
            <Mail className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
          </a>
          <a
            href="https://wa.me/213799923250"
            target="_blank"
            rel="noopener noreferrer"
            className={external}
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current sm:h-3.5 sm:w-3.5">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 8.02 0C3.63 0 .062 3.57.062 7.96c0 1.402.366 2.77 1.06 3.976L0 16l4.203-1.102a7.947 7.947 0 0 0 3.816.973h.003c4.39 0 7.959-3.57 7.959-7.96a7.9 7.9 0 0 0-2.38-5.585ZM8.022 14.53h-.002a6.62 6.62 0 0 1-3.372-.921l-.242-.144-2.493.654.665-2.43-.158-.249A6.6 6.6 0 0 1 1.4 7.96c0-3.65 2.97-6.62 6.623-6.62a6.58 6.58 0 0 1 4.694 1.946 6.58 6.58 0 0 1 1.944 4.692c-.002 3.65-2.973 6.622-6.639 6.622Zm3.63-4.95c-.199-.1-1.176-.58-1.358-.645-.182-.066-.314-.1-.447.1-.133.199-.514.645-.63.778-.116.133-.232.149-.43.05-.199-.1-.839-.31-1.598-.99-.59-.526-.99-1.175-1.106-1.374-.116-.199-.013-.307.087-.406.09-.09.198-.232.298-.348.1-.116.133-.199.2-.332.066-.133.033-.249-.017-.348-.05-.1-.447-1.077-.613-1.475-.162-.39-.327-.337-.447-.343-.116-.006-.249-.007-.381-.007-.133 0-.348.05-.53.249-.182.199-.696.68-.696 1.657 0 .977.713 1.922.812 2.055.1.133 1.402 2.141 3.397 3.003.474.205.843.327 1.131.419.475.151.908.13 1.25.079.381-.057 1.176-.48 1.342-.943.166-.464.166-.861.116-.943-.05-.083-.183-.133-.381-.232Z" />
            </svg>
          </a>
          <a href="https://t.me/sidbrm" target="_blank" rel="noopener noreferrer" className={external} aria-label="Telegram">
            <Send className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
          </a>
        </div>
        <span className="max-w-lg text-center text-[11px] leading-snug text-zinc-600 sm:text-xs">
          © {new Date().getFullYear()} Ahmed Ibrahimi Photography · Based in Algeria
        </span>
        <p className="text-[11px] text-zinc-500 sm:text-xs">
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
    </footer>
  )
}
