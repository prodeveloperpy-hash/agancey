import { useEffect, useRef, useState, type ComponentType } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

export type WorkflowStep = {
  label: string
  hint: string
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>
}

type Props = {
  steps: WorkflowStep[]
}

const STEP_MS = 3200

export default function FiazAboutWorkflow({ steps }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length)
    }, STEP_MS)
    return () => window.clearInterval(timer)
  }, [inView, reduceMotion, steps.length])

  useEffect(() => {
    if (inView || reduceMotion) return
    setActive(0)
  }, [inView, reduceMotion])

  const progress =
    steps.length <= 1 ? 1 : active / (steps.length - 1)

  return (
    <motion.div
      ref={ref}
      className="fiaz-workflow-panel"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <header className="fiaz-workflow-head">
        <h3 className="fiaz-workflow-title">How I deliver projects</h3>
        <p className="fiaz-workflow-lead">
          Six phases from discovery to launch and improvement
        </p>
      </header>

      <div className="fiaz-workflow-scroll">
        <div className="fiaz-workflow-inner">
          <div className="fiaz-workflow-rail" aria-hidden="true">
            <div className="fiaz-workflow-rail-track" />
            <motion.div
              className="fiaz-workflow-rail-fill"
              initial={false}
              animate={{ scaleX: progress }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 90, damping: 24, mass: 0.8 }
              }
            />
            <motion.div
              className="fiaz-workflow-rail-beam"
              initial={false}
              animate={{ left: `${progress * 100}%` }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 90, damping: 24, mass: 0.8 }
              }
            />
          </div>

          <ol className="fiaz-workflow-steps">
            {steps.map((step, index) => {
              const Icon = step.Icon
              const state =
                index < active ? 'done' : index === active ? 'active' : 'upcoming'
              return (
                <li
                  key={step.label}
                  className={`fiaz-workflow-step fiaz-workflow-step-${state}`}
                >
                  <div className="fiaz-workflow-node-wrap">
                    <motion.span
                      className="fiaz-workflow-node"
                      animate={
                        state === 'active' && !reduceMotion
                          ? { boxShadow: ['0 0 0 0 rgba(56, 189, 248, 0.35)', '0 0 0 10px rgba(56, 189, 248, 0)'] }
                          : { boxShadow: '0 0 0 0 rgba(56, 189, 248, 0)' }
                      }
                      transition={
                        state === 'active'
                          ? { duration: 1.8, repeat: Infinity, ease: 'easeOut' }
                          : { duration: 0.2 }
                      }
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </motion.span>
                    <span className="fiaz-workflow-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <strong>{step.label}</strong>
                  <small>{step.hint}</small>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </motion.div>
  )
}
