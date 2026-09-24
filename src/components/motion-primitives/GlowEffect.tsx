import { useEffect } from 'react'
import { animate, motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'motion/react'

type GlowEffectProps = {
  className?: string
  colors?: string[]
  duration?: number
}

export function GlowEffect({ className, colors = ['#1f6bff', '#5ea2ff', '#7c5cff', '#1f6bff'], duration = 5 }: GlowEffectProps) {
  const angle = useMotionValue(0)
  const reduceMotion = useReducedMotion()
  const background = useMotionTemplate`conic-gradient(from ${angle}deg at 50% 50%, ${colors.join(', ')})`

  useEffect(() => {
    if (reduceMotion) return
    const controls = animate(angle, 360, { duration, ease: 'linear', repeat: Infinity })
    return () => controls.stop()
  }, [angle, duration, reduceMotion])

  return <motion.div aria-hidden="true" className={`glow-effect${className ? ` ${className}` : ''}`} style={{ background }} />
}
