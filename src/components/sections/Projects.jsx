import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'

export default function Projects() {
  const galleryItems = useMemo(
    () => [
      { fileName: 'IMG_1927.JPG', category: 'Portrait' },
      { fileName: 'IMG_2458.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_2537.jpg', category: 'Event' },
      { fileName: 'IMG_2542.jpg', category: 'Event' },
      { fileName: 'IMG_2807.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_2991.JPG', category: 'Portrait' },
      { fileName: 'IMG_3043.JPG', category: 'Portrait' },
      { fileName: 'IMG_3044.JPG', category: 'Street' },
      { fileName: 'IMG_3047.JPG', category: 'Street' },
      { fileName: 'IMG_3051.JPG', category: 'Portrait' },
      { fileName: 'IMG_3052.JPG', category: 'Portrait' },
      { fileName: 'IMG_3053.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_3054.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_3055.JPG', category: 'Portrait' },
      { fileName: 'IMG_3056.JPG', category: 'Portrait' },
      { fileName: 'IMG_3057.JPG', category: 'Street' },
      { fileName: 'IMG_3058.JPG', category: 'Street' },
      { fileName: 'IMG_3059.JPG', category: 'Event' },
      { fileName: 'IMG_3060.JPG', category: 'Event' },
      { fileName: 'IMG_3061.JPG', category: 'Portrait' },
      { fileName: 'IMG_3062.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_3063.JPG', category: 'Lifestyle' },
      { fileName: 'IMG_3065.JPG', category: 'Event' },
      { fileName: 'IMG_3066.JPG', category: 'Street' },
      { fileName: 'IMG_3067.JPG', category: 'Street' },
      { fileName: 'IMG_3068.JPG', category: 'Portrait' },
      { fileName: 'IMG_3069.JPG', category: 'Event' },
      { fileName: 'IMG_3070.JPG', category: 'Portrait' },
    ],
    [],
  )
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(-1)

  const getImgPath = (name) => `/assets/gallery/${name}`
  const getOptimizedPath = (name) => `/assets/gallery/optimized/${name.replace(/\.[^.]+$/, '')}.webp`
  const getThumbPath = (name) => `/assets/gallery/thumbs/${name.replace(/\.[^.]+$/, '')}.webp`
  const categories = useMemo(() => ['All', 'Portrait', 'Lifestyle', 'Event', 'Street'], [])

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory, galleryItems])

  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null

  const openLightbox = (index) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(-1)
  const showPrev = () => setActiveIndex((prev) => (prev <= 0 ? filteredItems.length - 1 : prev - 1))
  const showNext = () => setActiveIndex((prev) => (prev >= filteredItems.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    if (!activeItem) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeItem, filteredItems.length])

  useEffect(() => {
    if (!activeItem) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeItem])

  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-b border-zinc-800/50 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-sea/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-zinc-50 sm:text-4xl">Signature gallery</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            A curated body of work with a clean editorial presentation. Browse by style and open any frame in full-screen.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  closeLightbox()
                }}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition sm:text-[11px] ${
                  isActive
                    ? 'border-brand bg-brand/15 text-brand-hover'
                    : 'border-zinc-700/80 bg-zinc-900/45 text-zinc-400 hover:border-sea/40 hover:text-zinc-200'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <ul className="mt-10 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <li key={item.fileName} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 text-left shadow-xl shadow-black/30 ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-sea/45"
              >
                <div className="relative overflow-hidden">
                  <picture>
                    <source srcSet={getThumbPath(item.fileName)} type="image/webp" />
                    <img
                      src={getImgPath(item.fileName)}
                      alt={`Ahmed Ibrahimi ${item.category.toLowerCase()} photography`}
                      className="w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/70 via-zinc-950/5 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
                    <span className="rounded-full border border-zinc-500/30 bg-zinc-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-200">
                      {item.category}
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-zinc-300 uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {activeItem && (
          <div
            className="fixed inset-0 z-70 bg-zinc-950/95 sm:bg-zinc-950/92"
            role="dialog"
            aria-modal="true"
          >
            <button type="button" onClick={closeLightbox} className="absolute inset-0" aria-label="Close preview" />
            <div className="absolute inset-0 bg-linear-to-b from-zinc-900/35 via-transparent to-zinc-900/65" aria-hidden />

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600/85 bg-zinc-900/90 text-zinc-200 shadow-lg shadow-black/35 hover:border-sea-hover sm:right-6 sm:top-6"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex h-full w-full items-center justify-center px-3 pb-24 pt-16 sm:px-16 sm:pb-16 sm:pt-16">
              <picture>
                <source srcSet={getOptimizedPath(activeItem.fileName)} type="image/webp" />
                <img
                  src={getImgPath(activeItem.fileName)}
                  alt="Expanded gallery photo"
                  className="max-h-full w-full max-w-5xl rounded-xl border border-zinc-700/60 bg-zinc-900/75 object-contain shadow-2xl shadow-black/55"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 border-t border-zinc-700/60 bg-zinc-950/88 px-4 py-4 backdrop-blur sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:w-auto sm:-translate-x-1/2 sm:rounded-full sm:border sm:px-5 sm:py-2.5">
              <div className="flex items-center justify-between gap-3 sm:gap-5">
                <button
                  type="button"
                  onClick={showPrev}
                  className="min-h-[38px] rounded-full border border-zinc-600/80 bg-zinc-900/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:border-sea-hover hover:text-zinc-50"
                  aria-label="Previous photo"
                >
                  Prev
                </button>
                <p className="text-xs tracking-[0.16em] text-zinc-200 uppercase whitespace-nowrap">{activeItem.category}</p>
                <span className="h-1 w-1 rounded-full bg-zinc-600" aria-hidden />
                <p className="text-xs text-zinc-400 whitespace-nowrap">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  className="min-h-[38px] rounded-full border border-zinc-600/80 bg-zinc-900/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:border-sea-hover hover:text-zinc-50"
                  aria-label="Next photo"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
