import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  return <motion.div aria-hidden="true" className={`scroll-progress${className ? ` ${className}` : ''}`} style={{ scaleX }} />
}
