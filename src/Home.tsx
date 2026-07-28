import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Asterisk, Bot, BrainCircuit, ChevronDown, CircleCheck,
  CloudCog, Code2, Database, Layers3, Menu, Palette, PenTool, Smartphone, Sparkles, Workflow, X
} from 'lucide-react'
import './styles.css'

const services = [
  { no: '01', title: 'Web Design', text: 'Distinctive, conversion-focused websites shaped around your brand and audience.', icon: Palette, tag: 'DIGITAL EXPERIENCES' },
  { no: '02', title: 'UI/UX Design', text: 'Intuitive interfaces and thoughtful user journeys grounded in real customer needs.', icon: PenTool, tag: 'PRODUCT DESIGN' },
  { no: '03', title: 'Full-Stack Development', text: 'Robust, scalable web platforms built for real business complexity.', icon: Code2, tag: 'WEB SYSTEMS' },
  { no: '04', title: 'Solution Architecture', text: 'Future-ready technical foundations that scale cleanly with you.', icon: Layers3, tag: 'TECH STRATEGY' },
  { no: '05', title: 'Mobile App Development', text: 'Polished iOS, Android and Flutter experiences users remember.', icon: Smartphone, tag: 'MOBILE' },
  { no: '06', title: 'Data & AI Engineering', text: 'Turn fragmented data into intelligent, actionable systems.', icon: BrainCircuit, tag: 'INTELLIGENCE' },
  { no: '07', title: 'Automation Ecosystems', text: 'GoHighLevel, Make, Zapier, APIs and workflows that run themselves.', icon: Workflow, tag: 'AUTOMATION' },
  { no: '08', title: 'CRM & Conversational AI', text: 'ManyChat, smart funnels and customer journeys that convert.', icon: Bot, tag: 'GROWTH SYSTEMS' },
]

const process = [
  ['01', 'Discover', 'We get close to your business, users, and the problem worth solving.'],
  ['02', 'Architect', 'We map the smartest route from ambitious idea to resilient product.'],
  ['03', 'Create', 'Design and engineering move together in focused, transparent sprints.'],
  ['04', 'Evolve', 'We launch, measure, optimize, and stay beside you as you grow.'],
]

function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector<HTMLElement>('.cursor-glow')
    const move = (e: PointerEvent) => {
      if (glow) glow.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div className="cursor-glow" />
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <CursorGlow />
      <nav>
        <button className="brand" onClick={() => scrollTo('home')} aria-label="UpForge home">
          Up<span>F</span>orge<i>®</i>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => navigate('/services')}>Services</button>
          <button onClick={() => navigate('/work')}>Work</button>
          <button onClick={() => navigate('/about')}>About</button>
          <button className="nav-cta" onClick={() => navigate('/contact')}>Start a project <ArrowRight size={16} /></button>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="grid-lines" />
        <div className="hero-kicker"><span /> INDEPENDENT DIGITAL PRODUCT STUDIO</div>
        <h1>
          <span className="line-mask"><span>WE ENGINEER</span></span>
          <span className="line-mask italic"><span>DIGITAL</span></span>
          <span className="line-mask"><span>ADVANTAGE<span className="acid">.</span></span></span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-orbit">
            <div className="orbit-ring"><Asterisk size={26} /></div>
            <span>SCROLL TO EXPLORE</span>
          </div>
          <p>From first sketch to scaled system—we design, build and automate digital products that make ambitious businesses impossible to ignore.</p>
          <button className="circle-arrow" onClick={() => scrollTo('services')} aria-label="Explore services"><ChevronDown /></button>
        </div>
        <div className="ticker">
          <div>DESIGN <Asterisk /> DEVELOPMENT <Asterisk /> DATA <Asterisk /> AUTOMATION <Asterisk /> STRATEGY <Asterisk /> DESIGN <Asterisk /> DEVELOPMENT <Asterisk /></div>
        </div>
      </section>

      <section className="intro reveal" id="about">
        <div className="eyebrow"><span>01</span> WHAT WE BELIEVE</div>
        <div className="intro-copy">
          <h2>Not another vendor.<br />Your <em>unfair advantage.</em></h2>
          <div>
            <p>We are a team of builders, thinkers and problem-solvers obsessed with one thing: making technology genuinely useful for your business.</p>
            <div className="proof"><CircleCheck /> SENIOR TALENT, ZERO HANDOFFS</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-head reveal">
          <div className="eyebrow"><span>02</span> CAPABILITIES</div>
          <h2>Built for the<br /><em>next move.</em></h2>
          <p>One expert team. Every digital capability your business needs to move faster.</p>
        </div>
        <div className="service-list reveal">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <article className={activeService === i ? 'active' : ''} onMouseEnter={() => setActiveService(i)} key={s.title}>
                <div className="service-no">{s.no}</div>
                <div className="service-icon"><Icon /></div>
                <div className="service-main"><span>{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p></div>
                <ArrowRight className="service-arrow" />
              </article>
            )
          })}
        </div>
      </section>

      <section className="impact reveal">
        <div className="impact-card">
          <div className="impact-top"><Sparkles /> THE UPFORGE EFFECT</div>
          <h2>Complexity, made<br /><em>beautifully simple.</em></h2>
          <div className="metrics">
            <div><strong>42+</strong><span>PRODUCTS SHIPPED</span></div>
            <div><strong>96%</strong><span>CLIENT RETENTION</span></div>
            <div><strong>4.9</strong><span>PARTNER RATING</span></div>
          </div>
        </div>
        <div className="system-visual">
          <div className="visual-label">LIVE SYSTEM / 2026</div>
          <div className="core"><span>N</span></div>
          <div className="satellite sat-1"><Code2 /></div>
          <div className="satellite sat-2"><Database /></div>
          <div className="satellite sat-3"><CloudCog /></div>
          <div className="satellite sat-4"><BrainCircuit /></div>
          <div className="scanline" />
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-head reveal">
          <div className="eyebrow"><span>03</span> HOW WE WORK</div>
          <h2>Sharp process.<br /><em>Zero drama.</em></h2>
        </div>
        <div className="process-grid reveal">
          {process.map(([no, title, text]) => (
            <article key={title}>
              <div className="step">{no}</div>
              <div className="step-dot" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-noise" />
        <span className="eyebrow-light">HAVE SOMETHING AMBITIOUS IN MIND?</span>
        <h2>LET'S BUILD<br /><em>WHAT'S NEXT.</em></h2>
        <a href="mailto:hello@upforge.studio">hello@upforge.studio <ArrowRight /></a>
        <div className="footer-row">
          <div className="brand footer-brand">Up<span>F</span>orge<i>®</i></div>
          <p>ENGINEERING DIGITAL MOMENTUM<br />FROM IDEA TO IMPACT.</p>
          <div><Link to="/services">SERVICES</Link><Link to="/about">ABOUT</Link><Link to="/contact">CONTACT</Link></div>
          <span>© 2026 UPFORGE STUDIO</span>
        </div>
      </section>
    </main>
  )
}
