import { Aperture } from 'lucide-react'

export default function BrandLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] border border-brand/35 bg-zinc-900/85 text-brand-hover shadow-md shadow-black/30 ring-1 ring-zinc-700/50">
        <Aperture className="h-4 w-4" />
      </span>
      <span className="hidden min-[380px]:flex flex-col items-start leading-tight">
        <span className="text-[13px] font-semibold tracking-tight text-zinc-100">Ahmed Ibrahimi</span>
        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-400">Photography</span>
      </span>
    </span>
  )
}
