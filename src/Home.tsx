import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, BrainCircuit, ChevronLeft, ChevronRight, CircleCheck,
  CloudCog, Code2, Database, Layers3, LayoutDashboard, MonitorSmartphone, Palette, PenTool,
  ShieldCheck, Smartphone, Sparkles, TrendingUp, Workflow
} from 'lucide-react'
import { FaAws, FaFacebookF, FaLinkedin, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { TbBrandOpenai } from 'react-icons/tb'
import { SiDjango, SiFigma, SiFlask, SiFlutter, SiGoogle, SiGoogleads, SiGooglecloud, SiGoogletagmanager, SiLooker, SiPandas, SiPostgresql, SiPostman, SiPython, SiReact, SiScrapy, SiSelenium, SiStripe, SiTensorflow, SiWordpress, SiZapier } from 'react-icons/si'
import './styles.css'
import SiteNav from './SiteNav'
import officeHero from './assets/upforge-office-hero.png'
import { ServiceImageLoop } from './components/ServiceImageLoop'
import { AnimatedGroup } from './components/motion-primitives/AnimatedGroup'
import { AnimatedNumber } from './components/motion-primitives/AnimatedNumber'
import { BorderTrail } from './components/motion-primitives/BorderTrail'
import { GlowEffect } from './components/motion-primitives/GlowEffect'
import { InfiniteSlider } from './components/motion-primitives/InfiniteSlider'
import { InView } from './components/motion-primitives/InView'
import { Magnetic } from './components/motion-primitives/Magnetic'
import { Spotlight } from './components/motion-primitives/Spotlight'
import { TextEffect } from './components/motion-primitives/TextEffect'
import { TextLoop } from './components/motion-primitives/TextLoop'
import { TextShimmer } from './components/motion-primitives/TextShimmer'

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

const liveSystemLogos = [
  { name:'Architecture', Icon:FaAws, color:'#ff9900' },
  { name:'Full Stack', Icon:SiReact, color:'#61dafb' },
  { name:'Automation', Icon:SiZapier, color:'#ff4f00' },
  { name:'WordPress', Icon:SiWordpress, color:'#60a5fa' },
  { name:'Graphic Design', Icon:SiFigma, color:'#ff7262' },
  { name:'SEO', Icon:SiGoogle, color:'#fbbc05' },
  { name:'UI/UX', Icon:SiFigma, color:'#a259ff' },
  { name:'Mobile', Icon:SiFlutter, color:'#54c5f8' },
  { name:'Data & AI', Icon:SiTensorflow, color:'#ff6f00' },
  { name:'AI Products', Icon:TbBrandOpenai, color:'#ffffff' },
  { name:'SaaS', Icon:SiStripe, color:'#8b7cff' },
  { name:'Dashboards', Icon:SiLooker, color:'#4285f4' },
  { name:'Data Analysis', Icon:SiPandas, color:'#e70488' },
  { name:'Advertising', Icon:SiGoogleads, color:'#34a853' },
  { name:'Tracking', Icon:SiGoogletagmanager, color:'#8ab4f8' },
  { name:'Python', Icon:SiPython, color:'#ffd43b' },
  { name:'Scraping', Icon:SiScrapy, color:'#60a839' },
  { name:'Django', Icon:SiDjango, color:'#44b78b' },
  { name:'Chatbots', Icon:TbBrandOpenai, color:'#10a37f' },
  { name:'Flask', Icon:SiFlask, color:'#ffffff' },
  { name:'Selenium', Icon:SiSelenium, color:'#43b02a' },
  { name:'Google APIs', Icon:SiGooglecloud, color:'#4285f4' },
  { name:'API Integration', Icon:SiPostman, color:'#ff6c37' },
  { name:'Data Management', Icon:SiPostgresql, color:'#8bb9e8' },
  { name:'Social APIs', Icon:FaLinkedin, color:'#0a66c2' },
]

const featureCards = [
  { title:'Web & SaaS', text:'Full-stack platforms', Icon:MonitorSmartphone, slug:'full-stack-development' },
  { title:'AI & Automation', text:'Workflows that run themselves', Icon:Bot, slug:'no-code-automation', featured:true },
  { title:'SEO & Growth', text:'Search, ads and tracking', Icon:TrendingUp, slug:'seo-services' },
  { title:'Data & Dashboards', text:'Decisions in one view', Icon:LayoutDashboard, slug:'analytics-dashboards' },
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
  const servicesTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const moveServices = (direction: -1 | 1) => {
    const track = servicesTrackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.service-card')
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 14), behavior: 'smooth' })
  }

  return (
    <main className="biz-home">
      <SiteNav />

      <section className="biz-hero" id="home">
        <div className="biz-office-hero">
          <img className="biz-office-image" src={officeHero} alt="UpForge office with a modern workstation and blue brand signage" fetchPriority="high" width={1672} height={941} />
          <div className="biz-office-copy">
        <div className="biz-kicker"><span className="biz-kicker-line" /><TextShimmer duration={2.8}>Professional</TextShimmer><span className="biz-kicker-line" /></div>
        <h1 className="biz-title">
          <motion.span
            className="biz-title-line"
            initial={{ opacity:0, y:28, filter:'blur(8px)' }}
            animate={{ opacity:1, y:0, filter:'blur(0px)' }}
            transition={{ duration:.8, ease:[0.16, 1, 0.3, 1] }}
          >
            Software, AI &amp; Automation
          </motion.span>
          <span className="biz-title-accent">
            <i aria-hidden="true" />
            <TextLoop interval={2.8}>
              <span>Engineered</span>
              <span>Designed</span>
              <span>Automated</span>
              <span>Scaled</span>
            </TextLoop>
            <i aria-hidden="true" />
          </span>
        </h1>
        <p className="biz-subtitle">Modern digital products for startups and companies</p>
        <div className="biz-divider" aria-hidden="true"><span /><i /></div>
        <div className="biz-hero-actions">
          <Magnetic>
            <Link className="biz-btn biz-btn-primary" to="/contact">Get Started <ArrowRight /></Link>
          </Magnetic>
          <button className="biz-btn biz-btn-ghost" type="button" onClick={() => scrollTo('services')}>Explore services</button>
        </div>
          </div>
        </div>

        <AnimatedGroup className="biz-features" itemClassName="biz-feature-motion">
          {featureCards.map(({ title, text, Icon, slug, featured }) => (
            <Link className={`biz-feature${featured ? ' is-featured' : ''}`} to={`/services/${slug}`} key={title}>
              {featured && <BorderTrail size={90} duration={6} />}
              <span className="biz-feature-icon"><Icon /></span>
              <h3>{title}</h3>
              <span className="biz-feature-rule" />
              <p>{text}</p>
              <span className="biz-feature-dots" aria-hidden="true"><i /><i /><i /></span>
            </Link>
          ))}
        </AnimatedGroup>

        <InView className="biz-stats" delay={0.05}>
          <div><strong><AnimatedNumber value={42} suffix="+" /></strong><span>Products shipped</span></div>
          <div><strong><AnimatedNumber value={96} suffix="%" /></strong><span>Client retention</span></div>
          <div><strong><AnimatedNumber value={4.9} decimals={1} /></strong><span>Partner rating</span></div>
          <Magnetic className="biz-stats-cta">
            <div className="biz-glow-wrap">
              <GlowEffect />
              <Link className="biz-btn biz-btn-primary biz-btn-lg" to="/contact">Get Free Quote <ArrowRight /></Link>
            </div>
          </Magnetic>
        </InView>

        <div className="biz-tagline"><span />Modern<i />Fast<i />Secure<i />Scalable<span /></div>

        <InfiniteSlider className="biz-ticker" gap={42} speed={50} speedOnHover={18}>
          {['Solution Architecture', 'Full-Stack Development', 'AI Engineering', 'SaaS Applications', 'No-Code Automation', 'Analytics Dashboards', 'Mobile Apps', 'SEO Services', 'Google & LinkedIn Ads', 'WordPress', 'UI/UX Design'].map((item) => (
            <span key={item}><ShieldCheck /> {item}</span>
          ))}
        </InfiniteSlider>
      </section>

      <section className="intro reveal" id="about">
        <div className="eyebrow"><span>01</span> WHAT WE BELIEVE</div>
        <InView className="intro-copy">
          <h2><TextEffect preset="slide">Not another vendor.</TextEffect><br /><em><TextEffect preset="blur" delay={0.14}>Your unfair advantage.</TextEffect></em></h2>
          <div>
            <p>We are a team of builders, thinkers and problem-solvers obsessed with one thing: making technology genuinely useful for your business.</p>
            <div className="proof"><CircleCheck /> SENIOR TALENT, ZERO HANDOFFS</div>
          </div>
        </InView>
      </section>

      <section className="services" id="services">
        <div className="services-carousel-head reveal">
          <div>
            <div className="eyebrow"><span>02</span> CAPABILITIES</div>
            <h2><TextEffect>Services</TextEffect></h2>
          </div>
          <Link className="services-contact-link" to="/contact">Get in touch <ArrowRight /></Link>
        </div>
        <div className="services-carousel reveal">
          <button className="services-carousel-control services-carousel-prev" type="button" onClick={() => moveServices(-1)} aria-label="Previous services"><ChevronLeft /></button>
          <AnimatedGroup className="services-carousel-track" itemClassName="service-card-motion" containerRef={servicesTrackRef}>
          {services.map((s, i) => {
            return (
              <article className={`service-card service-card-${i % 5}`} key={s.title}>
                <Spotlight size={280} />
                <span className="service-card-number">(&nbsp; {String(i + 1).padStart(3, '0')} &nbsp;)</span>
                <div className="home-service-gallery"><ServiceImageLoop slug={s.slug} title={s.title} /></div>
                <span className="service-card-copy">
                  <span>{s.tag}</span>
                  <h3><Link to={`/services/${s.slug}`}>{s.title}</Link></h3>
                  <p>{s.text}</p>
                </span>
                <Link className="home-service-link" to={`/services/${s.slug}`} aria-label={`View ${s.title}`}>View service <ArrowRight /></Link>
              </article>
            )
          })}
          </AnimatedGroup>
          <button className="services-carousel-control services-carousel-next" type="button" onClick={() => moveServices(1)} aria-label="Next services"><ChevronRight /></button>
        </div>
      </section>

      <section className="impact">
        <InView className="impact-card" direction="left">
          <div className="impact-top"><Sparkles /> THE UPFORGE EFFECT</div>
          <h2><TextEffect preset="slide">Complexity, made</TextEffect><br /><em><TextEffect delay={0.12}>beautifully simple.</TextEffect></em></h2>
          <div className="metrics">
            <div><strong>42+</strong><span>PRODUCTS SHIPPED</span></div>
            <div><strong>96%</strong><span>CLIENT RETENTION</span></div>
            <div><strong>4.9</strong><span>PARTNER RATING</span></div>
          </div>
        </InView>
        <InView className="system-visual" direction="right" delay={0.08}>
          <div className="visual-label">LIVE SYSTEM / 2026</div>
          <div className="core"><img src="/upforge-logo.png" alt="UpForge" /></div>
          <div className="live-logo-orbit" aria-hidden="true">
            {liveSystemLogos.map(({ name, Icon, color }, index) => (
              <span className={`live-logo-position${index % 2 ? ' inner-logo-position' : ''}`} key={name} style={{ '--logo-angle':`${index * (360 / liveSystemLogos.length)}deg` } as CSSProperties}>
                <i className="satellite live-logo" style={{ '--logo-color':color, '--logo-delay':`${index * -.16}s` } as CSSProperties}>
                  <Icon />
                </i>
              </span>
            ))}
          </div>
          <div className="scanline" />
        </InView>
      </section>

      <section className="process" id="process">
        <div className="section-head reveal">
          <div className="eyebrow"><span>03</span> HOW WE WORK</div>
          <h2><TextEffect preset="slide">Sharp process.</TextEffect><br /><em><TextEffect preset="scale" delay={0.12}>Zero drama.</TextEffect></em></h2>
        </div>
        <AnimatedGroup className="process-grid" itemClassName="process-motion-item">
          {process.map(([no, title, text]) => (
            <article key={title}>
              <div className="step">{no}</div>
              <div className="step-dot" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </AnimatedGroup>
      </section>

      <section className="contact" id="contact">
        <div className="contact-noise" />
        <span className="eyebrow-light">HAVE SOMETHING AMBITIOUS IN MIND?</span>
        <h2><TextEffect preset="slide">LET'S BUILD</TextEffect><br /><em><TextEffect preset="blur" delay={0.14}>WHAT'S NEXT.</TextEffect></em></h2>
        <a href="mailto:info@upforge.us">info@upforge.us <ArrowRight /></a>
        <div className="footer-row">
          <div className="brand footer-brand"><img src="/upforge-logo.png" alt="" /><span className="brand-name"><b>Up</b>Forge</span></div>
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
