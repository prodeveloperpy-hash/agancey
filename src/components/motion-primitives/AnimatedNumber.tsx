import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'motion/react'

type AnimatedNumberProps = {
  value: number
  className?: string
  decimals?: number
  suffix?: string
}

export function AnimatedNumber({ value, className, decimals = 0, suffix = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => `${current.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return <motion.span ref={ref} className={className}>{display}</motion.span>
}
