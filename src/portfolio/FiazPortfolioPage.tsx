import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Bot, Code2, ExternalLink, Github, Globe2, Layers3, LineChart, Mail, Menu, Phone, Plug, Rocket, Sparkles, Target, TrendingUp, Workflow, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import { TextLoop } from '../components/motion-primitives/TextLoop'
import FiazAboutWorkflow from './FiazAboutWorkflow'
import FiazProjectShowcase from './FiazProjectShowcase'
import FiazTechIconStrip from './FiazTechIconStrip'
import {
  aboutFocus,
  aboutIntro,
  contact,
  demos,
  experience,
  heroRoles,
  heroQuickStats,
  hireLinks,
  navItems,
  privateCapabilities,
  profilePhoto,
  profilePhotoHero,
  asset,
} from './fiazProfileData'
import type { AboutFocusIcon } from './fiazProfileData'
import './fiaz-portfolio.css'

const aboutFocusIcons: Record<
  AboutFocusIcon,
  typeof Layers3
> = {
  products: Layers3,
  automation: Workflow,
  data: LineChart,
  ai: Bot,
  remote: Globe2,
}

const workflowSteps = [
  { label: 'Strategy', hint: 'Goals, users & scope', Icon: Target },
  { label: 'Architecture', hint: 'Secure scalable design', Icon: Layers3 },
  { label: 'Build', hint: 'Frontend, backend & APIs', Icon: Code2 },
  { label: 'Integrate', hint: 'CRM, payments & tools', Icon: Plug },
  { label: 'Deploy', hint: 'Cloud, CI/CD & monitoring', Icon: Rocket },
  { label: 'Optimize', hint: 'Performance & growth', Icon: TrendingUp },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function FiazPortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const previousTitle = document.title
    html.classList.add('fiaz-portfolio-active')
    document.title = 'Fiaz Hussain | Solution Architect & Full-Stack Developer'

    return () => {
      html.classList.remove('fiaz-portfolio-active')
      document.title = previousTitle
    }
  }, [])

  const go = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
    <div className="fiaz-portfolio-scope">
      <div className="fiaz-bg-layers" aria-hidden="true">
        <div className="fiaz-bg-mesh" />
        <div className="fiaz-bg-grid" />
        <div className="fiaz-bg-noise" />
        <div className="fiaz-bg-vignette" />
      </div>
      <header className="fiaz-nav">
        <div className="fiaz-nav-inner">
          <button type="button" className="fiaz-logo" onClick={() => go('top')}>
            <img src={profilePhoto} alt="" className="fiaz-logo-photo" />
            <span>Fiaz Hussain</span>
          </button>
          <nav className="fiaz-nav-links" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => go(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="fiaz-nav-actions">
            <a className="fiaz-nav-cta" href={contact.fiverr} target="_blank" rel="noreferrer">Hire me</a>
            <button type="button" className="fiaz-nav-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="fiaz-nav-mobile">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => go(item.id)}>{item.label}</button>
            ))}
            <a href={contact.fiverr} target="_blank" rel="noreferrer" className="fiaz-nav-mobile-icon" aria-label="Fiverr">
              <SiFiverr size={22} />
            </a>
            <a href={contact.upwork} target="_blank" rel="noreferrer" className="fiaz-nav-mobile-icon" aria-label="Upwork">
              <SiUpwork size={22} />
            </a>
          </div>
        )}
      </header>

      <section className="fiaz-hero" id="top">
        <div className="fiaz-hero-glow" aria-hidden="true" />
        <div className="fiaz-wrap fiaz-hero-grid">
          <motion.div className="fiaz-hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            <div className="fiaz-hero-badge-pill">
              <Sparkles size={14} aria-hidden />
              <span>Available for client projects worldwide</span>
            </div>
            <h1 className="fiaz-hero-name">Fiaz Hussain</h1>
            <p className="fiaz-hero-role-line">
              <TextLoop className="fiaz-role-loop">
                {heroRoles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </TextLoop>
            </p>
            <p className="fiaz-hero-lead">
              6+ years delivering web and mobile products, AI systems, CRM integrations, and automation from architecture to production support
            </p>
            <div className="fiaz-hero-connect" aria-label="Contact and hire links">
              <a
                className="fiaz-hero-tile fiaz-hero-tile-email"
                href={`mailto:${contact.email}`}
                title={contact.email}
                aria-label={`Email ${contact.email}`}
              >
                <Mail size={22} strokeWidth={1.75} />
              </a>
              <a
                className="fiaz-hero-tile fiaz-hero-tile-phone"
                href={`tel:${contact.phoneTel}`}
                title={contact.phone}
                aria-label={`Call ${contact.phone}`}
              >
                <Phone size={22} strokeWidth={1.75} />
              </a>
              <a
                className="fiaz-hero-tile fiaz-hero-tile-wa"
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              {hireLinks.map((link) => (
                <a
                  key={link.label}
                  className={`fiaz-hero-tile fiaz-hero-tile-${link.tone}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  title={link.label}
                  aria-label={link.label}
                >
                  {link.tone === 'fiverr' && <SiFiverr size={26} />}
                  {link.tone === 'upwork' && <SiUpwork size={26} />}
                  {link.tone === 'upforge' && <ExternalLink size={22} strokeWidth={1.75} />}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="fiaz-hero-portrait-wrap fiaz-hero-portrait-animated"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="fiaz-portrait-glow" aria-hidden="true" />
            <div className="fiaz-portrait-orbit fiaz-portrait-orbit-1" aria-hidden="true" />
            <div className="fiaz-portrait-orbit fiaz-portrait-orbit-2" aria-hidden="true" />
            <div className="fiaz-hero-portrait fiaz-hero-portrait-circle">
              <div className="fiaz-portrait-spin-ring" aria-hidden="true" />
              <div className="fiaz-portrait-inner">
                <img src={profilePhotoHero} alt="Fiaz Hussain, Solution Architect and Full-Stack Developer" />
              </div>
            </div>
            <div className="fiaz-portrait-badge">
              <strong>6+ yrs</strong>
              <span>Production delivery</span>
            </div>
          </motion.div>
        </div>
        <div className="fiaz-wrap fiaz-hero-lower">
          <div className="fiaz-stats">
            {heroQuickStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="fiaz-consult-banner"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="fiaz-consult-inner">
              <div className="fiaz-consult-copy">
                <p className="fiaz-consult-kicker">Complimentary consultation</p>
                <h3 className="fiaz-consult-title">AI, automation, and architecture guidance</h3>
                <p className="fiaz-consult-msg">
                  Short call with a senior engineer. Clear options, current trends, no sales pitch
                </p>
              </div>
              <div className="fiaz-consult-actions">
                <a
                  className="fiaz-consult-btn fiaz-consult-btn-primary"
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={18} aria-hidden />
                  Message on WhatsApp
                </a>
                <button type="button" className="fiaz-consult-btn fiaz-consult-btn-ghost" onClick={() => go('contact')}>
                  <Mail size={17} strokeWidth={2} aria-hidden />
                  Request a call
                </button>
              </div>
            </div>
          </motion.div>

          <div className="fiaz-tech-section-head" id="skills">
            <span className="fiaz-tech-section-line" aria-hidden="true" />
            <h2 className="fiaz-section-title fiaz-technologies-title">Technologies</h2>
            <span className="fiaz-tech-section-line" aria-hidden="true" />
          </div>
          <FiazTechIconStrip />
        </div>
      </section>

      <section className="fiaz-section fiaz-about-section" id="about">
        <div className="fiaz-wrap">
          <motion.div
            className="fiaz-about-shell"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="fiaz-about-intro">
              <p className="fiaz-about-eyebrow">What I do</p>
              <h2 className="fiaz-section-title fiaz-about-title">About</h2>
              <p className="fiaz-about-lead">{aboutIntro}</p>
            </div>

            <ul className="fiaz-about-grid">
              {aboutFocus.map((item, index) => {
                const Icon = aboutFocusIcons[item.icon]
                return (
                  <motion.li
                    key={item.title}
                    className="fiaz-about-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="fiaz-about-card-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.65} />
                    </span>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </motion.li>
                )
              })}
            </ul>

            <div className="fiaz-about-split" aria-hidden="true" />

            <div className="fiaz-about-workflow">
              <FiazAboutWorkflow steps={workflowSteps} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="fiaz-section" id="work">
        <div className="fiaz-wrap">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="fiaz-section-title">Projects</h2>
          </motion.div>
          <FiazProjectShowcase />
          <img className="fiaz-wide-visual fiaz-companies-strip" src={asset('companies-showcase.svg')} alt="Companies and products" loading="lazy" />
        </div>
      </section>

      <section className="fiaz-section fiaz-section-muted">
        <div className="fiaz-wrap">
          <h2 className="fiaz-section-title">Demos</h2>
          <div className="fiaz-demo-grid">
            {demos.map((demo, index) => (
              <motion.article
                key={demo.title}
                className="fiaz-demo-card"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <img src={demo.image} alt={demo.title} loading="lazy" />
                <h3>{demo.title}</h3>
                <p>{demo.tags}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="fiaz-section fiaz-section-muted" id="experience">
        <div className="fiaz-wrap">
          <h2 className="fiaz-section-title">Experience</h2>
          <div className="fiaz-timeline">
            {experience.map((job) => (
              <article key={job.company + job.role} className="fiaz-timeline-card">
                <div className="fiaz-timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="fiaz-company">{job.company}</p>
                  </div>
                  <span>{job.period}</span>
                </div>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <p className="fiaz-achievement"><strong>Highlight:</strong> {job.achievement}</p>
              </article>
            ))}
          </div>
          <div className="fiaz-edu">
            <h3>Education & certification</h3>
            <p><strong>M.Sc. Computer Science</strong>, GCUL Pakistan (2021)</p>
            <p><strong>Microsoft Data Scientist Certification</strong> (2022)</p>
          </div>
          <details className="fiaz-details">
            <summary>Private engineering capabilities (NDA-friendly)</summary>
            <ul>
              {privateCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <section className="fiaz-section fiaz-contact" id="contact">
        <div className="fiaz-wrap fiaz-contact-wrap">
          <motion.div
            className="fiaz-contact-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="fiaz-section-title fiaz-contact-title">Contact</h2>
            <p className="fiaz-contact-lead">Email, call, WhatsApp, Fiverr, or Upwork anytime</p>
            <div className="fiaz-contact-grid">
              <a
                className="fiaz-contact-tile fiaz-contact-tile-email"
                href={`mailto:${contact.email}`}
                title={contact.email}
                aria-label={`Email ${contact.email}`}
              >
                <Mail size={26} strokeWidth={1.75} />
                <span>Email</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-phone"
                href={`tel:${contact.phoneTel}`}
                title={contact.phone}
                aria-label={`Call ${contact.phone}`}
              >
                <Phone size={26} strokeWidth={1.75} />
                <span>Call</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-wa"
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
                <span>WhatsApp</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-fiverr"
                href={contact.fiverr}
                target="_blank"
                rel="noreferrer"
                title="Fiverr"
                aria-label="Fiverr"
              >
                <SiFiverr size={32} />
                <span>Fiverr</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-upwork"
                href={contact.upwork}
                target="_blank"
                rel="noreferrer"
                title="Upwork"
                aria-label="Upwork"
              >
                <SiUpwork size={32} />
                <span>Upwork</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-upforge"
                href={contact.upforge}
                target="_blank"
                rel="noreferrer"
                title="UpForge Agency"
                aria-label="UpForge Agency"
              >
                <ExternalLink size={26} strokeWidth={1.75} />
                <span>UpForge</span>
              </a>
              <a
                className="fiaz-contact-tile fiaz-contact-tile-github"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={26} strokeWidth={1.75} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
        <footer className="fiaz-footer">
          <p>© {new Date().getFullYear()} Fiaz Hussain, architecture, engineering, automation, data, and AI</p>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} />
          </a>
        </footer>
      </section>
    </div>

    <a className="fiaz-float-wa" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Fiaz Hussain">
      <FaWhatsapp size={24} />
    </a>
  </>
  )
}
