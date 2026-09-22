import { type ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

type InViewProps = {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
}

export function InView({ children, className, direction = 'up', delay = 0 }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()
  const offset = direction === 'left' ? { x: -42 } : direction === 'right' ? { x: 42 } : { y: 38 }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      animate={visible ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
