import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

type TextEffectProps = {
  children: string
  className?: string
  delay?: number
  preset?: 'blur' | 'slide' | 'scale'
}

export function TextEffect({ children, className, delay = 0, preset = 'blur' }: TextEffectProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()
  const words = children.split(' ')
  const hidden = preset === 'scale'
    ? { opacity: 0, scale: 0.72 }
    : preset === 'slide'
      ? { opacity: 0, y: '0.85em' }
      : { opacity: 0, y: '0.7em', filter: 'blur(7px)' }

  return (
    <span ref={ref} className={className}>
      <span className="motion-text-accessible">{children}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span className="motion-text-word" key={`${word}-${index}`}>
            <motion.span
              className="motion-text-segment"
              initial={reduceMotion ? false : hidden}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : undefined}
              transition={{
                delay: delay + index * 0.08,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? '\u00a0' : null}
          </span>
        ))}
      </span>
    </span>
  )
}
