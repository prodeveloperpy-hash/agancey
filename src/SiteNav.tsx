import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { AnimatedBackground } from './components/motion-primitives/AnimatedBackground'
import { Magnetic } from './components/motion-primitives/Magnetic'
import { ScrollProgress } from './components/motion-primitives/ScrollProgress'

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
  const { pathname } = useLocation()
  const activeId = pathname === '/' ? 'home' : navItems.find(item => item.to !== '/' && pathname.startsWith(item.to))?.id ?? null

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const goHome = () => {
    if (pathname === '/') window.scrollTo({ top:0, behavior:'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <ScrollProgress />
      <nav className="site-nav">
        <Link className="brand" to="/" onClick={goHome} aria-label="UpForge home">
          <img src="/upforge-logo.png" alt="" />
          <span className="brand-name"><b>Up</b>Forge</span>
        </Link>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} onMouseLeave={() => setHovered(null)}>
          {navItems.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              className={`biz-nav-item${activeId === id ? ' active' : ''}`}
              onClick={id === 'home' ? goHome : () => setMenuOpen(false)}
              onMouseEnter={() => setHovered(id)}
              onFocus={() => setHovered(id)}
              aria-current={activeId === id ? 'page' : undefined}
            >
              {(hovered ?? activeId) === id && <AnimatedBackground layoutId="site-nav-pill" />}
              <span>{label}</span>
            </Link>
          ))}
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
