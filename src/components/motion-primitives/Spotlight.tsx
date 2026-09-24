import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'motion/react'

type SpotlightProps = {
  className?: string
  size?: number
}

export function Spotlight({ className, size = 360 }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useSpring(0, { bounce: 0 })
  const mouseY = useSpring(0, { bounce: 0 })
  const left = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const top = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    const parent = ref.current?.parentElement
    if (!parent) return
    const move = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }
    const enter = () => setIsHovered(true)
    const leave = () => setIsHovered(false)
    parent.addEventListener('mousemove', move)
    parent.addEventListener('mouseenter', enter)
    parent.addEventListener('mouseleave', leave)
    return () => {
      parent.removeEventListener('mousemove', move)
      parent.removeEventListener('mouseenter', enter)
      parent.removeEventListener('mouseleave', leave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`spotlight${isHovered ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size, left, top }}
    />
  )
}
