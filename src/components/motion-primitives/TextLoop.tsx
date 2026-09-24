import { Children, type ReactNode, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type TextLoopProps = {
  children: ReactNode
  className?: string
  interval?: number
}

export function TextLoop({ children, className, interval = 2.6 }: TextLoopProps) {
  const items = Children.toArray(children)
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % items.length), interval * 1000)
    return () => window.clearInterval(timer)
  }, [items.length, interval, reduceMotion])

  return (
    <span className={`text-loop${className ? ` ${className}` : ''}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          className="text-loop-item"
          initial={{ y: '0.6em', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-0.6em', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
