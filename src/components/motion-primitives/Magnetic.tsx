import { type ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

type MagneticProps = {
  children: ReactNode
  className?: string
  intensity?: number
  range?: number
}

export function Magnetic({ children, className, intensity = 0.4, range = 120 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 26.7, damping: 4.1, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 26.7, damping: 4.1, mass: 0.2 })

  useEffect(() => {
    if (reduceMotion) return
    const move = (event: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const distanceX = event.clientX - (rect.left + rect.width / 2)
      const distanceY = event.clientY - (rect.top + rect.height / 2)
      const distance = Math.hypot(distanceX, distanceY)
      if (isHovered && distance <= range) {
        const scale = 1 - distance / range
        x.set(distanceX * intensity * scale)
        y.set(distanceY * intensity * scale)
      } else {
        x.set(0)
        y.set(0)
      }
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [isHovered, intensity, range, reduceMotion, x, y])

  return (
    <motion.div
      ref={ref}
      className={`magnetic${className ? ` ${className}` : ''}`}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}
