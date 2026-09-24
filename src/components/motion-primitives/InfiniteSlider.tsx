import { type ReactNode, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react'

type InfiniteSliderProps = {
  children: ReactNode
  className?: string
  gap?: number
  speed?: number
  speedOnHover?: number
  reverse?: boolean
}

export function InfiniteSlider({ children, className, gap = 16, speed = 40, speedOnHover, reverse = false }: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const translation = useMotionValue(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(() => setWidth(track.scrollWidth))
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!width || reduceMotion) return
    // The track holds two copies of the children, so one loop is half its width plus one gap.
    const loopSize = width / 2 + gap / 2
    const from = reverse ? -loopSize : 0
    const to = reverse ? 0 : -loopSize
    const current = translation.get()
    const start = (reverse ? current < from || current > to : current > from || current < to) ? from : current
    const remaining = Math.abs(to - start) / loopSize
    let loop: ReturnType<typeof animate> | undefined

    const first = animate(translation, [start, to], {
      ease: 'linear',
      duration: (loopSize / currentSpeed) * remaining,
      onComplete: () => {
        loop = animate(translation, [from, to], { ease: 'linear', duration: loopSize / currentSpeed, repeat: Infinity, repeatType: 'loop', repeatDelay: 0 })
      },
    })

    return () => {
      first.stop()
      loop?.stop()
    }
  }, [width, gap, currentSpeed, reverse, reduceMotion, translation])

  const hoverProps = speedOnHover
    ? { onHoverStart: () => setCurrentSpeed(speedOnHover), onHoverEnd: () => setCurrentSpeed(speed) }
    : {}

  return (
    <div className={`infinite-slider${className ? ` ${className}` : ''}`}>
      <motion.div ref={trackRef} className="infinite-slider-track" style={{ x: translation, gap }} {...hoverProps}>
        {children}
        {children}
      </motion.div>
    </div>
  )
}
