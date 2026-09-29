import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import ThemeToggle from './ThemeToggle'
import { AnimatedBackground } from './components/motion-primitives/AnimatedBackground'
import { Magnetic } from './components/motion-primitives/Magnetic'
import { ScrollProgress } from './components/motion-primitives/ScrollProgress'

const MotionLink = motion.create(Link)
const navItems = [
  { id:'home', label:'Home', to:'/' },
  { id:'services', label:'Services', to:'/services' },
  { id:'work', label:'Work', to:'/work' },
  { id:'about', label:'About', to:'/about' },
  { id:'contact', label:'Contact', to:'/contact' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const activeId = pathname === '/' ? 'home' : navItems.find(item => item.to !== '/' && pathname.startsWith(item.to))?.id ?? null
  const hoveredIndex = navItems.findIndex(item => item.id === hovered)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false); setHovered(null) }, [pathname])

  const goHome = () => {
    if (pathname === '/') window.scrollTo({ top:0, behavior:'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <ScrollProgress />
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={goHome} aria-label="UpForge home">
          <img src="/upforge-logo.png" alt="" />
          <span className="brand-name"><b>Up</b>Forge</span>
        </Link>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} onMouseLeave={() => setHovered(null)}>
          {navItems.map(({ id, label, to }, index) => {
            const distance = hoveredIndex < 0 ? Infinity : Math.abs(index - hoveredIndex)
            const magnification = reduceMotion || menuOpen ? 0 : distance === 0 ? 1 : distance === 1 ? 0.35 : 0
            return (
              <MotionLink
                key={id}
                to={to}
                className={`biz-nav-item${activeId === id ? ' active' : ''}`}
                animate={{ scale:1 + magnification * 0.16, y:-magnification * 5 }}
                transition={{ type:'spring', stiffness:350, damping:22 }}
                style={{ transformOrigin:'50% 100%', zIndex:distance === 0 ? 2 : 1 }}
                onClick={id === 'home' ? goHome : () => setMenuOpen(false)}
                onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(id) }}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {(hovered ?? activeId) === id && <AnimatedBackground layoutId="site-nav-pill" />}
                <span>{label}</span>
              </MotionLink>
            )
          })}
          <Magnetic className="nav-cta-magnetic">
            <Link className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>Get Started <ArrowRight size={16} /></Link>
          </Magnetic>
        </div>
        <div className="nav-controls">
          <ThemeToggle />
          <button className="menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </>
  )
}
