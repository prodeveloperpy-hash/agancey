import { useEffect, useState, type KeyboardEvent } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { portfolioShowcaseProjects } from './fiazShowcaseProjects'

const SHOWCASE_INTERVAL = 7000
const hostOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function FiazProjectShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const project = portfolioShowcaseProjects[active]

  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % portfolioShowcaseProjects.length),
      SHOWCASE_INTERVAL,
    )
    return () => window.clearTimeout(timer)
  }, [active, paused, reduceMotion])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const next =
      (active + (e.key === 'ArrowDown' ? 1 : -1) + portfolioShowcaseProjects.length) %
      portfolioShowcaseProjects.length
    setActive(next)
    document.getElementById(`fiaz-showcase-tab-${next}`)?.focus()
  }

  return (
    <div
      className="fiaz-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="fiaz-showcase-list" role="tablist" aria-label="Live projects" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {portfolioShowcaseProjects.map((item, index) => {
          const selected = index === active
          return (
            <div className={`fiaz-showcase-item${selected ? ' is-active' : ''}`} key={`${item.slug}-${item.name}`}>
              <button
                type="button"
                role="tab"
                id={`fiaz-showcase-tab-${index}`}
                aria-selected={selected}
                aria-controls="fiaz-showcase-stage"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
              >
                <span className="fiaz-showcase-no">{String(index + 1).padStart(2, '0')}</span>
                <span className="fiaz-showcase-title">
                  <strong title={item.name}>{item.name}</strong>
                </span>
                <ArrowUpRight className="fiaz-showcase-chevron" />
              </button>
              <span className="fiaz-showcase-progress" aria-hidden="true">
                {selected && (
                  <i
                    key={`${active}-${paused}`}
                    style={{
                      animationDuration: `${SHOWCASE_INTERVAL}ms`,
                      animationPlayState: paused || reduceMotion ? 'paused' : 'running',
                    }}
                  />
                )}
              </span>
            </div>
          )
        })}
      </div>

      <a
        className="fiaz-showcase-stage"
        id="fiaz-showcase-stage"
        role="tabpanel"
        aria-labelledby={`fiaz-showcase-tab-${active}`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="fiaz-showcase-glow" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            className="fiaz-showcase-devices"
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="fiaz-showcase-browser">
              <div className="fiaz-project-shot-bar" aria-hidden="true">
                <i /><i /><i /><span>{hostOf(project.url)}</span>
              </div>
              <img src={project.screenshot} alt={`${project.name} website on desktop`} />
            </div>
            {project.mobileShot && (
              <div className="fiaz-showcase-phone">
                <span className="fiaz-showcase-phone-notch" aria-hidden="true" />
                <img src={project.mobileShot} alt={`${project.name} website on mobile`} />
              </div>
            )}
            <div className="fiaz-showcase-badge">
              <span><i />Live in production</span>
              <strong>{project.stack.frontend[0]} + {project.stack.backend[0]}</strong>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="fiaz-showcase-meta">
          <p className="fiaz-showcase-meta-cat">{project.category}</p>
          <p className="fiaz-showcase-meta-overview">{project.overview}</p>
          <dl className="fiaz-showcase-meta-stack">
            <div>
              <dt>Frontend</dt>
              <dd>{project.stack.frontend.slice(0, 3).join(', ')}</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>{project.stack.backend.slice(0, 3).join(', ')}</dd>
            </div>
          </dl>
        </div>
        <span className="fiaz-showcase-open">Open live site <ArrowUpRight /></span>
      </a>
    </div>
  )
}
