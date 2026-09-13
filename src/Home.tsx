import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Asterisk, BrainCircuit, ChevronDown, CircleCheck,
  CloudCog, Code2, Database, Layers3, Menu, Palette, PenTool, Smartphone, Sparkles, Workflow, X
} from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import './styles.css'
import heroAiVisual from './assets/hero-ai-upforge.webp'
import ThemeToggle from './ThemeToggle'

const services = [
  { title: 'Solution Architecture', text: 'Future-ready technical foundations that scale cleanly with your business.', icon: Layers3, tag: 'TECH STRATEGY', slug: 'solution-architecture' },
  { title: 'Full-Stack Development', text: 'Secure, scalable web platforms covering frontend, backend, APIs and databases.', icon: Code2, tag: 'WEB SYSTEMS', slug: 'full-stack-development' },
  { title: 'No-Code Automation', text: 'GoHighLevel, Make, Zapier and n8n workflows that remove repetitive work.', icon: Workflow, tag: 'AUTOMATION', slug: 'no-code-automation' },
  { title: 'WordPress Development', text: 'Fast business websites, custom themes, plugins and WooCommerce stores.', icon: CloudCog, tag: 'WORDPRESS', slug: 'wordpress-development' },
  { title: 'Graphic Design', text: 'Distinctive brand identities, social creatives and visual communication systems.', icon: Palette, tag: 'CREATIVE DESIGN', slug: 'graphic-design' },
  { title: 'SEO Services', text: 'Technical, on-page, local and off-page SEO designed for sustainable visibility.', icon: Sparkles, tag: 'ORGANIC GROWTH', slug: 'seo-services' },
  { title: 'UI/UX Design', text: 'Clear interfaces and user journeys grounded in real customer needs.', icon: PenTool, tag: 'PRODUCT DESIGN', slug: 'ui-ux-design' },
  { title: 'Mobile App Development', text: 'Polished iOS, Android and Flutter experiences users remember.', icon: Smartphone, tag: 'MOBILE', slug: 'mobile-development' },
  { title: 'Data & AI Engineering', text: 'Data pipelines, analytics and applied AI systems for better decisions.', icon: BrainCircuit, tag: 'INTELLIGENCE', slug: 'data-ai-engineering' },
  { title: 'AI Tools & Products', text: 'Practical AI assistants, RAG systems and intelligent tools built around real workflows.', icon: BrainCircuit, tag: 'AI PRODUCTS', slug: 'ai-tools-products' },
  { title: 'SaaS Applications', text: 'Subscription platforms with secure accounts, billing, dashboards and scalable cloud foundations.', icon: CloudCog, tag: 'SAAS PRODUCTS', slug: 'saas-applications' },
  { title: 'Analytics Dashboards', text: 'Clear KPI dashboards that bring performance, sales and operations into one view.', icon: Database, tag: 'BUSINESS INTELLIGENCE', slug: 'analytics-dashboards' },
  { title: 'Data Analysis', text: 'Clean reporting, trend analysis and actionable insights from fragmented business data.', icon: Database, tag: 'DATA INSIGHTS', slug: 'data-analysis' },
  { title: 'Google & LinkedIn Ads', text: 'Intent-led paid campaigns with audience strategy, measurement and ongoing optimization.', icon: Sparkles, tag: 'PAID GROWTH', slug: 'paid-advertising' },
  { title: 'Pixel & Conversion Tracking', text: 'Reliable Meta Pixel, Google Tag Manager, GA4 and conversion-event implementation.', icon: Workflow, tag: 'TRACKING', slug: 'pixel-tracking' },
  { title: 'Python Development', text: 'Python applications, APIs, data processing and automation systems built for dependable operation.', icon: Code2, tag: 'PYTHON ENGINEERING', slug: 'python-development' },
  { title: 'Web Scraping', text: 'Structured and responsible web-data extraction using Scrapy, Selenium and robust processing pipelines.', icon: Database, tag: 'DATA EXTRACTION', slug: 'web-scraping' },
  { title: 'Django Development', text: 'Secure Django applications, portals, REST APIs and admin systems with scalable foundations.', icon: Layers3, tag: 'PYTHON WEB', slug: 'django-development' },
  { title: 'AI Chatbots & Assistants', text: 'Conversational AI for support, lead qualification, knowledge access and internal operations.', icon: BrainCircuit, tag: 'CONVERSATIONAL AI', slug: 'ai-chatbots' },
  { title: 'Flask Development', text: 'Lean Flask applications, APIs, integrations and focused microservices for modern businesses.', icon: Code2, tag: 'PYTHON APIS', slug: 'flask-development' },
  { title: 'Selenium Automation', text: 'Reliable browser workflows for testing, data collection, monitoring and repetitive web operations.', icon: Workflow, tag: 'BROWSER AUTOMATION', slug: 'selenium-automation' },
  { title: 'Google API Integration', text: 'Google Workspace, Sheets, Maps, Gmail, Drive and reporting APIs connected to your workflows.', icon: CloudCog, tag: 'GOOGLE ECOSYSTEM', slug: 'google-api-integration' },
  { title: 'API Integration', text: 'Secure REST, GraphQL, webhook and third-party integrations that keep business systems synchronized.', icon: Layers3, tag: 'CONNECTED SYSTEMS', slug: 'api-integration' },
  { title: 'Data Management', text: 'Database design, migration, quality, access controls and dependable cloud data operations.', icon: Database, tag: 'DATA OPERATIONS', slug: 'data-management' },
  { title: 'Social Media API Integration', text: 'LinkedIn, Facebook and YouTube APIs connected for publishing, leads, video data and reporting.', icon: Workflow, tag: 'SOCIAL CONNECTIONS', slug: 'social-media-api-integration' },
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
  const heroWords = ['NO-CODE AUTOMATION EXPERTS', 'FULL-STACK PRODUCT TEAM', 'DATA & AI ENGINEERS', 'DIGITAL GROWTH PARTNERS']
  const [typedText, setTypedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const current = heroWords[wordIndex]
    const complete = typedText === current
    const empty = typedText === ''
    const delay = complete ? 1500 : deleting ? 38 : 72
    const timer = window.setTimeout(() => {
      if (complete && !deleting) return setDeleting(true)
      if (empty && deleting) {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % heroWords.length)
        return
      }
      setTypedText(current.slice(0, typedText.length + (deleting ? -1 : 1)))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [typedText, deleting, wordIndex])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <CursorGlow />
      <nav>
        <button className="brand" onClick={() => scrollTo('home')} aria-label="UpForge home">
          <b>Up</b><span>Forge</span><i>®</i>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className="active" onClick={() => scrollTo('home')} aria-current="page">Home</button>
          <button onClick={() => navigate('/services')}>Services</button>
          <button onClick={() => navigate('/work')}>Work</button>
          <button onClick={() => navigate('/about')}>About</button>
          <button className="nav-cta" onClick={() => navigate('/contact')}>Start a project <ArrowRight size={16} /></button>
        </div>
        <div className="nav-controls">
          <ThemeToggle />
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-ai-visual" aria-hidden="true">
          <img src={heroAiVisual} alt="" />
          <span className="ai-pulse ai-pulse-one" />
          <span className="ai-pulse ai-pulse-two" />
          <div className="hero-code-console">
            <div className="code-console-bar">
              <span /><span /><span />
              <small>upforge.system.ts</small>
            </div>
            <div className="code-console-body">
              <div className="code-line line-one"><b>01</b><code><i>const</i> vision = <strong>'your idea'</strong></code></div>
              <div className="code-line line-two"><b>02</b><code><i>await</i> upforge.<em>architect</em>(vision)</code></div>
              <div className="code-line line-three"><b>03</b><code>product.<em>build</em>({'{'} scalable: <u>true</u> {'}'})</code></div>
              <div className="code-line line-four"><b>04</b><code>automation.<em>connect</em>(business)</code></div>
              <div className="code-line line-five"><b>05</b><code><strong>return</strong> measurableGrowth</code></div>
            </div>
            <div className="code-console-status"><span /> SYSTEM READY <b>100%</b></div>
          </div>
          <div className="hero-tech-chip chip-react">REACT</div>
          <div className="hero-tech-chip chip-ai">AI SYSTEMS</div>
          <div className="hero-tech-chip chip-cloud">CLOUD</div>
          <span className="data-beam beam-one" />
          <span className="data-beam beam-two" />
          <span className="hero-spark spark-one" />
          <span className="hero-spark spark-two" />
          <span className="hero-spark spark-three" />
        </div>
        <div className="grid-lines" />
        <div className="hero-kicker"><span /> SOFTWARE · AI · AUTOMATION · GROWTH</div>
        <h1>
          <span className="line-mask"><span>UPFORGE</span></span>
          <span className="line-mask italic type-line"><span>{typedText}<i className="type-caret" /></span></span>
          <span className="line-mask"><span>FOR MODERN BUSINESS<span className="acid">.</span></span></span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-orbit">
            <div className="orbit-ring"><Asterisk size={26} /></div>
            <span>SCROLL TO EXPLORE</span>
          </div>
          <p>From first sketch to scaled system—we design, build and automate digital products that make ambitious businesses impossible to ignore.</p>
          <p className="hero-value">We design and build SaaS applications, AI tools, business automation, analytics dashboards and growth systems that make work simpler and decisions clearer.</p>
          <button className="circle-arrow" onClick={() => scrollTo('services')} aria-label="Explore services"><ChevronDown /></button>
        </div>
        <div className="ticker">
          <div>
            SOLUTION ARCHITECTURE <Asterisk />
            FULL-STACK DEVELOPMENT <Asterisk />
            PYTHON <Asterisk />
            MOBILE APPS <Asterisk />
            FLUTTER <Asterisk />
            DATA ENGINEERING <Asterisk />
            DATA SCIENCE <Asterisk />
            BIGQUERY <Asterisk />
            AI ENGINEERING <Asterisk />
            AI TOOLS & PRODUCTS <Asterisk />
            SAAS APPLICATIONS <Asterisk />
            ANALYTICS DASHBOARDS <Asterisk />
            DATA ANALYSIS <Asterisk />
            GOHIGHLEVEL <Asterisk />
            MAKE <Asterisk />
            ZAPIER <Asterisk />
            N8N <Asterisk />
            API INTEGRATION <Asterisk />
            WORDPRESS <Asterisk />
            GRAPHIC DESIGN <Asterisk />
            UI/UX DESIGN <Asterisk />
            SEO SERVICES <Asterisk />
            GOOGLE ADS <Asterisk />
            LINKEDIN ADS <Asterisk />
            PIXEL TRACKING <Asterisk />
            CLOUD & DEVOPS <Asterisk />
            SOLUTION ARCHITECTURE <Asterisk />
            FULL-STACK DEVELOPMENT <Asterisk />
            PYTHON <Asterisk />
            MOBILE APPS <Asterisk />
            FLUTTER <Asterisk />
            DATA ENGINEERING <Asterisk />
            DATA SCIENCE <Asterisk />
            BIGQUERY <Asterisk />
            AI ENGINEERING <Asterisk />
            AI TOOLS & PRODUCTS <Asterisk />
            SAAS APPLICATIONS <Asterisk />
            ANALYTICS DASHBOARDS <Asterisk />
            DATA ANALYSIS <Asterisk />
            GOHIGHLEVEL <Asterisk />
            MAKE <Asterisk />
            ZAPIER <Asterisk />
            N8N <Asterisk />
            API INTEGRATION <Asterisk />
            WORDPRESS <Asterisk />
            GRAPHIC DESIGN <Asterisk />
            UI/UX DESIGN <Asterisk />
            SEO SERVICES <Asterisk />
            GOOGLE ADS <Asterisk />
            LINKEDIN ADS <Asterisk />
            PIXEL TRACKING <Asterisk />
            CLOUD & DEVOPS <Asterisk />
          </div>
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
              <article className={activeService === i ? 'active' : ''} onMouseEnter={() => setActiveService(i)} onClick={() => navigate(`/services/${s.slug}`)} onKeyDown={(e) => e.key === 'Enter' && navigate(`/services/${s.slug}`)} role="link" tabIndex={0} key={s.title}>
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
        <a href="mailto:info@upforge.us">info@upforge.us <ArrowRight /></a>
        <div className="footer-row">
          <div className="brand footer-brand"><b>Up</b><span>Forge</span><i>®</i></div>
          <p>ENGINEERING DIGITAL MOMENTUM<br />FROM IDEA TO IMPACT.</p>
          <div className="footer-links">
            <Link to="/services">SERVICES</Link><Link to="/about">ABOUT</Link><Link to="/contact">CONTACT</Link>
            <a className="social-link linkedin" href="https://www.linkedin.com/company/up-forge/" target="_blank" rel="noreferrer" aria-label="UpForge on LinkedIn"><FaLinkedinIn /></a>
            <span className="social-link facebook disabled" aria-label="UpForge Facebook page coming soon" title="Facebook page coming soon"><FaFacebookF /></span>
            <span className="social-link youtube disabled" aria-label="UpForge YouTube channel coming soon" title="YouTube channel coming soon"><FaYoutube /></span>
            <a className="footer-whatsapp-number" href="https://wa.me/923041769292" target="_blank" rel="noreferrer">WhatsApp: +92 304 1769292</a>
          </div>
          <span>© 2026 UPFORGE — TECHNOLOGY AGENCY & SOFTWARE HOUSE</span>
        </div>
      </section>
    </main>
  )
}
