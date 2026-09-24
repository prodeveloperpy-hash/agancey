import { type MouseEvent, type ReactNode, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

type TiltProps = {
  children: ReactNode
  className?: string
  rotationFactor?: number
}

export function Tilt({ children, className, rotationFactor = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 120, damping: 18 })
  const ySpring = useSpring(y, { stiffness: 120, damping: 18 })
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [rotationFactor, -rotationFactor])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-rotationFactor, rotationFactor])
  const transform = useMotionTemplate`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reduceMotion) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={className} style={{ transformStyle: 'preserve-3d', transform }} onMouseMove={move} onMouseLeave={reset}>
      {children}
    </motion.div>
  )
}
