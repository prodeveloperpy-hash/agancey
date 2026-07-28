import { ArrowLeft, ArrowRight, Asterisk, BrainCircuit, CloudCog, Code2, Database, Layers3, Palette, PenTool, Smartphone, Workflow } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageShellProps = {
  index: string
  label: string
  title: ReactNode
  intro: string
  children: ReactNode
}

function PageShell({ index, label, title, intro, children }: PageShellProps) {
  return (
    <main className="inner-page">
      <header className="inner-nav">
        <Link className="brand" to="/">Up<span>F</span>orge<i>®</i></Link>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`} to="/contact">Start a project <ArrowRight size={15} /></NavLink>
        </div>
      </header>
      <section className="page-hero">
        <div className="page-orb"><Asterisk /></div>
        <div className="eyebrow"><span>{index}</span> {label}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      {children}
      <section className="page-cta">
        <span>READY WHEN YOU ARE</span>
        <h2>Let's make it<br /><em>remarkable.</em></h2>
        <Link to="/contact">Start a conversation <ArrowRight /></Link>
      </section>
      <footer className="inner-footer">
        <Link to="/"><ArrowLeft /> Back home</Link>
        <span>© 2026 UPFORGE STUDIO</span>
      </footer>
    </main>
  )
}

const serviceDetails = [
  ['01', 'Web Design', 'Distinctive, responsive websites that express your brand clearly and turn attention into action.', Palette, ['UI & UX design', 'Responsive design', 'Design systems']],
  ['02', 'UI/UX Design', 'Research-led product experiences that make complex journeys feel clear, useful, and effortless.', PenTool, ['User research', 'Wireframes & prototypes', 'Interface design']],
  ['03', 'Full-Stack Platforms', 'Fast, secure and scalable web experiences built around the realities of your business.', Code2, ['React & Next.js', 'Node & APIs', 'Cloud deployment']],
  ['04', 'SaaS Applications', 'Subscription software designed for secure multi-tenant operation, smooth onboarding, and sustainable growth.', CloudCog, ['SaaS architecture', 'Billing integration', 'Cloud deployment']],
  ['05', 'Solution Architecture', 'Technical strategy and resilient foundations that save expensive rebuilds later.', Layers3, ['System design', 'Technical audits', 'Scale planning']],
  ['06', 'Mobile Applications', 'Native-quality cross-platform apps with product thinking built into every screen.', Smartphone, ['Flutter', 'iOS & Android', 'App strategy']],
  ['07', 'Data & AI', 'Modern data infrastructure and intelligent tools that move decisions closer to real time.', BrainCircuit, ['Data pipelines', 'AI integration', 'Analytics']],
  ['08', 'Automation', 'Connected operations using GoHighLevel, Make, Zapier and custom integrations.', Workflow, ['CRM workflows', 'API integration', 'Lead automation']],
  ['09', 'Data Engineering', 'Reliable pipelines, warehouses and reporting layers your team can actually trust.', Database, ['ETL / ELT', 'Warehousing', 'Data quality']],
] as const

export function ServicesPage() {
  return (
    <PageShell index="01" label="CAPABILITIES" title={<>Expertise that turns<br /><em>ideas into impact.</em></>} intro="Strategy, engineering, data, and automation—one senior team from first conversation to long-term scale.">
      <section className="detail-grid">
        {serviceDetails.map(([no, title, text, Icon, tags]) => (
          <article key={title}>
            <div className="detail-top"><span>{no}</span><Icon /></div>
            <h2>{title}</h2><p>{text}</p>
            <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

const projects = [
  ['FINTECH / PRODUCT', 'Meridian', 'A wealth platform that makes complex decisions feel simple.', '01'],
  ['HEALTHTECH / MOBILE', 'Pulse', 'A human-first care experience connecting patients and providers.', '02'],
  ['LOGISTICS / DATA', 'Northline', 'Real-time operations intelligence across a national fleet.', '03'],
  ['SAAS / AUTOMATION', 'Orbit', 'A growth engine that qualifies, nurtures and converts around the clock.', '04'],
]

export function WorkPage() {
  return (
    <PageShell index="02" label="SELECTED WORK" title={<>Products made to<br /><em>move the needle.</em></>} intro="A selection of digital systems built around hard problems, real users, and measurable outcomes.">
      <section className="work-list">
        {projects.map(([tag, name, text, no]) => <article key={name}><span>{no}</span><div><small>{tag}</small><h2>{name}</h2><p>{text}</p></div><ArrowRight /></article>)}
      </section>
    </PageShell>
  )
}

export function AboutPage() {
  return (
    <PageShell index="03" label="ABOUT UPFORGE" title={<>Small by design.<br /><em>Big on ambition.</em></>} intro="We built UpForge to be the kind of technology partner we always wanted: senior, honest, curious, and deeply invested.">
      <section className="about-story">
        <div><span>OUR POINT OF VIEW</span><h2>Good technology should disappear into a great experience.</h2></div>
        <div className="story-copy"><p>We bring product strategy, design sensibility, and serious engineering into one room. No telephone game. No bloated process. Just clear thinking and excellent craft applied to problems that matter.</p><p>Our distributed team works with ambitious founders and established companies around the world—turning complexity into momentum.</p></div>
      </section>
      <section className="values">
        {['Clarity over theatre', 'Outcomes over output', 'Craft without ego', 'Partnership over handoff'].map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3></div>)}
      </section>
    </PageShell>
  )
}

export function ContactPage() {
  return (
    <PageShell index="04" label="START A PROJECT" title={<>Bring us the<br /><em>hard problem.</em></>} intro="Tell us what you are building, fixing, or reimagining. We usually reply within one business day.">
      <section className="contact-panel">
        <div><span>EMAIL US DIRECTLY</span><a href="mailto:hello@upforge.studio">hello@upforge.studio</a><p>Prefer a quick intro? Send a short note with your goals, timing, and where you need the most help.</p></div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Your name<input placeholder="Jane Smith" required /></label>
          <label>Work email<input type="email" placeholder="jane@company.com" required /></label>
          <label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Web design</option><option>UI/UX design</option><option>Web development</option><option>SaaS application</option><option>Mobile application</option><option>Data & AI</option><option>Automation</option><option>Something else</option></select></label>
          <label>Tell us about the project<textarea placeholder="A little context goes a long way..." rows={5} /></label>
          <button>Send project brief <ArrowRight /></button>
        </form>
      </section>
    </PageShell>
  )
}
