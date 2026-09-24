import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type TextShimmerProps = {
  children: string
  className?: string
  duration?: number
  spread?: number
}

export function TextShimmer({ children, className, duration = 2.4, spread = 2 }: TextShimmerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.span
      className={`text-shimmer${className ? ` ${className}` : ''}`}
      initial={{ backgroundPosition: '100% center' }}
      animate={reduceMotion ? undefined : { backgroundPosition: '0% center' }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      style={{ '--shimmer-spread': `${children.length * spread}px` } as CSSProperties}
    >
      {children}
    </motion.span>
  )
}
