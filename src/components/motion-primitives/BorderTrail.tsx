import { motion, useReducedMotion } from 'motion/react'

type BorderTrailProps = {
  className?: string
  size?: number
  duration?: number
}

export function BorderTrail({ className, size = 70, duration = 5 }: BorderTrailProps) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <div className="border-trail" aria-hidden="true">
      <motion.div
        className={`border-trail-glow${className ? ` ${className}` : ''}`}
        style={{ width: size, offsetPath: `rect(0 auto auto 0 round ${size}px)` }}
        animate={{ offsetDistance: ['0%', '100%'] }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
      />
    </div>
  )
}
