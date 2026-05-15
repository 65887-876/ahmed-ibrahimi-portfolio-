import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-zinc-950"
    >
      <motion.div
        className="h-2 w-2 rounded-full bg-brand-hover"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <p className="font-mono text-xs tracking-[0.2em] text-zinc-600 uppercase">Loading</p>
    </motion.div>
  )
}
