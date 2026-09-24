import { Children, type ReactNode, type RefObject, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

type AnimatedGroupProps = {
  children: ReactNode
  className?: string
  itemClassName?: string
  containerRef?: RefObject<HTMLDivElement | null>
}

export function AnimatedGroup({ children, className, itemClassName, containerRef }: AnimatedGroupProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const ref = containerRef ?? internalRef
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div
          className={itemClassName}
          variants={{
            hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 34, scale: 0.97 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] as const },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
