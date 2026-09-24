import { motion } from 'motion/react'

/** Shared sliding highlight: render inside the active/hovered item of a group with the same layoutId. */
export function AnimatedBackground({ layoutId, className }: { layoutId: string; className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`animated-background-pill${className ? ` ${className}` : ''}`}
      layoutId={layoutId}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
    />
  )
}
