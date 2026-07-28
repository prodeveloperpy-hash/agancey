import { ArrowLeft, ArrowRight, Asterisk, BrainCircuit, CircleCheck, CloudCog, Code2, Database, Layers3, Palette, PenTool, Smartphone, Sparkles, Workflow } from 'lucide-react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import founderPhoto from './assets/team/founder-head-professional.webp'
import cofounderPhoto from './assets/team/hassan-riaz-cofounder.webp'
import usmanPhoto from './assets/team/muhammad-usman-cofounder.webp'
import servicesHero from './assets/services-hero.webp'
import workHero from './assets/work-hero.webp'
import aboutHero from './assets/about-hero.webp'

type PageShellProps = {
  index: string
  label: string
  title: ReactNode
  intro: string
  heroImage?: string
  children: ReactNode
}

function PageShell({ index, label, title, intro, heroImage, children }: PageShellProps) {
  useEffect(() => {
    if (!window.location.hash) return
    const timer = window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'auto', block: 'start' }), 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="inner-page">
      <header className="inner-nav">
        <Link className="brand" to="/"><b>Up</b><span>Forge</span><i>®</i></Link>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`} to="/contact">Start a project <ArrowRight size={15} /></NavLink>
        </div>
      </header>
      <section className={`page-hero${heroImage ? ' page-hero-visual' : ''}`}>
        {heroImage ? <div className="page-hero-image" aria-hidden="true"><img src={heroImage} alt="" /></div> : <div className="page-orb"><Asterisk /></div>}
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
        <span>© 2026 UPFORGE — TECHNOLOGY AGENCY & SOFTWARE HOUSE</span>
      </footer>
    </main>
  )
}

const serviceDetails = [
  { slug:'solution-architecture', title:'Solution Architecture', text:'Technical strategy and resilient foundations that prevent expensive rebuilds and support future growth.', Icon:Layers3, tags:['System design','Technical audits','Cloud architecture','Scale planning','Security'] },
  { slug:'full-stack-development', title:'Full-Stack Development', text:'Complete web platforms engineered across interface, backend, APIs, databases and cloud delivery.', Icon:Code2, tags:['React & Next.js','Node.js','Python','REST & GraphQL','PostgreSQL','Cloud deployment'] },
  { slug:'no-code-automation', title:'No-Code Automation', text:'Connected workflows that remove repetitive tasks while keeping your operations reliable and visible.', Icon:Workflow, tags:['GoHighLevel','Make','Zapier','n8n','ManyChat','API integration'] },
  { slug:'wordpress-development', title:'WordPress Development', text:'Fast, manageable websites and online stores built beyond generic templates.', Icon:CloudCog, tags:['Custom themes','Plugin development','WooCommerce','Elementor','Performance','Security'] },
  { slug:'graphic-design', title:'Graphic Design', text:'A consistent visual language that helps your business look credible, recognizable and ready to grow.', Icon:Palette, tags:['Brand identity','Logo systems','Social media design','Marketing collateral','Pitch decks','Creative direction'] },
  { slug:'seo-services', title:'SEO Services', text:'Search foundations and authority strategies that improve discoverability and sustainable organic growth.', Icon:Sparkles, tags:['Technical SEO','On-page SEO','Local SEO','Off-page SEO','Internal linking','SEO reporting'] },
  { slug:'ui-ux-design', title:'UI/UX Design', text:'Research-led product experiences that make complex journeys feel clear and effortless.', Icon:PenTool, tags:['User research','Wireframes','Prototypes','Interface design','Design systems'] },
  { slug:'mobile-development', title:'Mobile Applications', text:'Native-quality cross-platform apps with product thinking built into every screen.', Icon:Smartphone, tags:['Flutter','Kotlin','iOS & Android','Push notifications','App strategy'] },
  { slug:'data-ai-engineering', title:'Data & AI Engineering', text:'Modern data infrastructure and useful AI systems that move decisions closer to real time.', Icon:BrainCircuit, tags:['Data pipelines','BigQuery','Analytics','AI integration','RAG systems'] },
  { slug:'ai-tools-products', title:'AI Tools & Products', text:'Purpose-built AI products that improve support, knowledge access, content operations and internal productivity.', Icon:BrainCircuit, tags:['AI assistants','RAG systems','Knowledge search','LLM integration','Prompt systems','AI automation'] },
  { slug:'saas-applications', title:'SaaS App Development', text:'Complete subscription software platforms designed, engineered and prepared for dependable growth.', Icon:Layers3, tags:['Multi-tenant architecture','Subscriptions','User roles','Admin dashboards','API development','Cloud deployment'] },
  { slug:'analytics-dashboards', title:'Analytics & Dashboards', text:'Reliable reporting systems that turn scattered operational and marketing data into decisions.', Icon:Database, tags:['Data analysis','BI dashboards','BigQuery','Looker Studio','Power BI','Automated reporting'] },
  { slug:'data-analysis', title:'Data Analysis', text:'Structured analysis that turns raw business information into clear trends, explanations and practical recommendations.', Icon:Database, tags:['Data cleaning','Exploratory analysis','KPI analysis','Forecasting','Automated reports','Business insights'] },
  { slug:'paid-advertising', title:'Google & LinkedIn Ads', text:'Trackable paid campaigns focused on qualified demand, efficient spend and measurable business outcomes.', Icon:Sparkles, tags:['Google Search Ads','LinkedIn Ads','Audience strategy','Remarketing','Budget optimization','Campaign analytics'] },
  { slug:'pixel-tracking', title:'Pixel & Conversion Tracking', text:'Accurate measurement infrastructure so advertising platforms and teams can understand what actually converts.', Icon:Workflow, tags:['Meta Pixel','Google Tag Manager','GA4','LinkedIn Insight Tag','Conversion APIs','Event testing'] },
] as const

export function ServicesPage() {
  return (
    <PageShell index="01" label="CAPABILITIES" heroImage={servicesHero} title={<>Expertise that turns<br /><em>ideas into impact.</em></>} intro="Strategy, engineering, data, and automation—one senior team from first conversation to long-term scale.">
      <section className="detail-grid">
        {serviceDetails.map(({ slug, title, text, Icon, tags }) => (
          <article key={title}>
            <div className="detail-top"><Icon /></div>
            <h2>{title}</h2><p>{text}</p>
            <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            <Link className="detail-link" to={`/services/${slug}`}>View service <ArrowRight /></Link>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceDetails.find(item => item.slug === slug)
  if (!service) return <PageShell index="" label="SERVICE" title={<>Service not found.</>} intro="Return to our services catalogue to choose another capability."><section className="missing-service"><Link to="/services">View all services <ArrowRight /></Link></section></PageShell>
  const { title, text, Icon, tags } = service
  return (
    <PageShell index="" label="UPFORGE SERVICE" title={<>{title}<br /><em>built around you.</em></>} intro={text}>
      <section className="service-detail">
        <div className="service-detail-intro"><Icon /><span>WHAT'S INCLUDED</span><h2>A complete service,<br />not a partial handoff.</h2><p>We combine strategy, execution, testing and documentation so your team receives a solution that is clear, maintainable and ready to use.</p></div>
        <div className="included-list">{tags.map(tag => <article key={tag}><CircleCheck /><h3>{tag}</h3><p>Planned and delivered around your goals, users and existing systems.</p></article>)}</div>
      </section>
      <section className="delivery-strip"><div><strong>Discover</strong><span>Understand the goal</span></div><div><strong>Design</strong><span>Plan the right solution</span></div><div><strong>Build</strong><span>Execute with clarity</span></div><div><strong>Launch</strong><span>Test, document and support</span></div></section>
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
    <PageShell index="02" label="SELECTED WORK" heroImage={workHero} title={<>Products made to<br /><em>move the needle.</em></>} intro="A selection of digital systems built around hard problems, real users, and measurable outcomes.">
      <section className="work-list">
        {projects.map(([tag, name, text, no]) => <article key={name}><span>{no}</span><div><small>{tag}</small><h2>{name}</h2><p>{text}</p></div><ArrowRight /></article>)}
      </section>
    </PageShell>
  )
}

export function AboutPage() {
  return (
    <PageShell index="03" label="ABOUT UPFORGE" heroImage={aboutHero} title={<>Small by design.<br /><em>Big on ambition.</em></>} intro="We built UpForge to be the kind of technology partner we always wanted: senior, honest, curious, and deeply invested.">
      <section className="about-story">
        <div><span>OUR POINT OF VIEW</span><h2>Good technology should disappear into a great experience.</h2></div>
        <div className="story-copy"><p>We bring product strategy, design sensibility, and serious engineering into one room. No telephone game. No bloated process. Just clear thinking and excellent craft applied to problems that matter.</p><p>Our distributed team works with ambitious founders and established companies around the world—turning complexity into momentum.</p></div>
      </section>
      <section className="leadership-profile" id="leadership">
        <div className="leadership-photo"><img src={founderPhoto} alt="Fiaz Hussain, Founder and CEO of UpForge" /></div>
        <div className="leadership-copy">
          <span>LEADERSHIP</span>
          <h2>Fiaz Hussain</h2>
          <h3>Founder &amp; CEO</h3>
          <p>Fiaz leads UpForge across technology strategy, solution architecture and reliable project delivery—from early discovery through launch and long-term growth.</p>
          <div className="leadership-roles">
            <div><Layers3 /><span>Solution Architecture</span></div>
            <div><Code2 /><span>Full-Stack Engineering</span></div>
            <div><Workflow /><span>Python Development</span></div>
            <div><BrainCircuit /><span>Technology Strategy</span></div>
          </div>
          <Link to="/contact">Discuss your project <ArrowRight /></Link>
        </div>
      </section>
      <section className="leadership-profile leadership-profile-alt" id="co-founder">
        <div className="leadership-photo"><img src={cofounderPhoto} alt="Hassan Riaz, Co-Founder of UpForge" /></div>
        <div className="leadership-copy">
          <span>LEADERSHIP</span>
          <h2>Hassan Riaz</h2>
          <h3>Co-Founder &amp; Automation Lead</h3>
          <p>Hassan leads no-code automation and project delivery at UpForge—connecting business tools, simplifying complex workflows and building dependable GoHighLevel systems that save time and support sustainable growth.</p>
          <div className="leadership-roles">
            <div><Workflow /><span>No-Code Automation</span></div>
            <div><CloudCog /><span>GoHighLevel</span></div>
            <div><Layers3 /><span>API Integrations</span></div>
            <div><BrainCircuit /><span>Project Delivery</span></div>
          </div>
          <Link to="/contact">Build with our team <ArrowRight /></Link>
        </div>
      </section>
      <section className="leadership-profile leadership-profile-usmaan" id="muhammad-usman">
        <div className="leadership-photo"><img src={usmanPhoto} alt="Muhammad Usman, Co-Founder of UpForge" /></div>
        <div className="leadership-copy">
          <span>LEADERSHIP</span>
          <h2>Muhammad Usman</h2>
          <h3>Co-Founder &amp; Business Automation Lead</h3>
          <p>Muhammad Usman helps businesses organize digital operations through practical automation, dependable WordPress solutions and well-managed project delivery—from planning through launch.</p>
          <div className="leadership-roles">
            <div><Workflow /><span>Business Automation</span></div>
            <div><CloudCog /><span>WordPress</span></div>
            <div><BrainCircuit /><span>CRM Systems</span></div>
            <div><Layers3 /><span>Project Management</span></div>
          </div>
          <Link to="/contact">Work with our team <ArrowRight /></Link>
        </div>
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
        <div><span>EMAIL US DIRECTLY</span><a href="mailto:info@upforge.us">info@upforge.us</a><p>Prefer a quick intro? Send a short note with your goals, timing, and where you need the most help.</p></div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Your name<input placeholder="Jane Smith" required /></label>
          <label>Work email<input type="email" placeholder="jane@company.com" required /></label>
          <label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Solution architecture</option><option>Full-stack development</option><option>No-code automation</option><option>WordPress development</option><option>Graphic design</option><option>SEO services</option><option>UI/UX design</option><option>Mobile application</option><option>Data & AI engineering</option><option>AI tools & products</option><option>SaaS app development</option><option>Analytics & dashboards</option><option>Performance marketing</option><option>Something else</option></select></label>
          <label>Tell us about the project<textarea placeholder="A little context goes a long way..." rows={5} /></label>
          <button>Send project brief <ArrowRight /></button>
        </form>
      </section>
    </PageShell>
  )
}
