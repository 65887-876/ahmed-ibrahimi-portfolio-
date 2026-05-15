/** Canonical portfolio deployment */
export const SITE_URL = 'https://hamzaboukhari.site'

/**
 * Live projects shown on the portfolio.
 * - thumbnailLocal: baked-in screenshot (always works; no hotlink/CDN issues).
 * - includeInResume: false → omit from downloadable résumé only (still on site).
 */
export const LIVE_PROJECTS = [
  {
    title: 'Al Maroua Bakery',
    subtitle: 'Bakery storefront — Azzaba.',
    url: 'https://www.almarouabakery.shop/',
    thumbnailLocal: '/assets/projects/almaroua-preview.png',
    coverFallback: '/assets/projects/almaroua-cover.svg',
    includeInResume: false,
    resumeBullets: [],
  },
  {
    title: 'Padel Kiwi',
    subtitle: 'Large padel e‑commerce — catalog, checkout, multi-language storefront.',
    url: 'https://www.padelkiwi.com/fr-fr',
    thumbnailLocal: '/assets/projects/padel-kiwi-preview.png',
    coverFallback: '/assets/projects/padel-kiwi-cover.svg',
    resumeBullets: [
      'Delivered multi-language retail storefront flows for padel gear (catalog, checkout, merchandising) measured by sustained production use across FR locales—implemented as performance-conscious SPA/React-aligned UX.',
    ],
  },
  {
    title: 'LoL Archive',
    subtitle: 'League database / archive web app.',
    url: 'https://lolarchive.netlify.app/',
    coverFallback: '/assets/projects/lol-archive-cover.svg',
    resumeBullets: [
      'Shipped a searchable League archive with large datasets and snappy filtering UX—optimized for repeat lookups by fans and power users.',
    ],
  },
]
