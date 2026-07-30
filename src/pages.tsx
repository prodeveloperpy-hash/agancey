import { ArrowLeft, ArrowRight, Asterisk, BrainCircuit, CloudCog, Code2, Database, Layers3, Menu, Palette, PenTool, Smartphone, Sparkles, Workflow, X } from 'lucide-react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { CSSProperties, FormEvent, ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { FaAws, FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaMicrosoft, FaYoutube } from 'react-icons/fa6'
import { TbBrandOpenai } from 'react-icons/tb'
import {
  SiAndroid, SiAnthropic, SiApacheairflow, SiApple, SiCelery, SiCloudflare, SiDialogflow, SiDjango, SiDocker,
  SiElementor, SiFastapi, SiFigma, SiFirebase, SiFlask, SiFlutter, SiFramer, SiGithub,
  SiGmail, SiGoogle, SiGoogleads, SiGoogleanalytics, SiGooglebigquery, SiGooglecalendar, SiGooglecloud, SiGoogledrive,
  SiGooglegemini, SiGooglemaps, SiGooglesearchconsole, SiGooglesheets, SiGoogletagmanager, SiGraphql, SiHubspot,
  SiJupyter, SiJsonwebtokens, SiKotlin, SiKubernetes, SiLangchain, SiLooker, SiMailchimp, SiMake,
  SiMongodb, SiMysql, SiN8N, SiNextdotjs, SiNodedotjs, SiPandas, SiRabbitmq, SiRasa,
  SiPhp, SiPostgresql, SiPytorch, SiPython, SiReact, SiRedis, SiScikitlearn,
  SiPostman, SiScrapy, SiSelenium, SiSemrush, SiSketch, SiSnowflake, SiStreamlit, SiStripe, SiSupabase, SiSwagger, SiSwift, SiTelegram, SiTensorflow,
  SiTypescript, SiVercel, SiWhatsapp, SiWoocommerce, SiWordpress, SiYoutube, SiYoast, SiZapier, SiHuggingface,
} from 'react-icons/si'
import servicesHero from './assets/services-hero.webp'
import workHero from './assets/work-hero.webp'
import aboutHero from './assets/about-hero.webp'
import highlevelMark from './assets/highlevel-mark.png'
import ThemeToggle from './ThemeToggle'

type PageShellProps = {
  index: string
  label: string
  title: ReactNode
  intro: string
  heroImage?: string
  heroDecor?: ReactNode
  children: ReactNode
}

function PageShell({ index, label, title, intro, heroImage, heroDecor, children }: PageShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!window.location.hash) return
    const timer = window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'auto', block: 'start' }), 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="inner-page">
      <header className="inner-nav">
        <Link className="brand" to="/"><b>Up</b><span>Forge</span><i>®</i></Link>
        <div className={`inner-links${menuOpen ? ' open' : ''}`}>
          <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/services">Services</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/work">Work</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`} to="/contact">Start a project <ArrowRight size={15} /></NavLink>
        </div>
        <div className="inner-controls">
          <ThemeToggle />
          <button className="inner-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <section className={`page-hero${heroImage ? ' page-hero-visual' : ''}`}>
        {heroImage ? <div className="page-hero-image" aria-hidden="true"><img src={heroImage} alt="" /></div> : heroDecor || <div className="page-orb"><Asterisk /></div>}
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
        <div className="inner-socials">
          <a className="social-link linkedin" href="https://www.linkedin.com/company/up-forge/" target="_blank" rel="noreferrer" aria-label="UpForge on LinkedIn"><FaLinkedinIn /></a>
          <span className="social-link facebook disabled" aria-label="UpForge Facebook page coming soon" title="Facebook page coming soon"><FaFacebookF /></span>
          <span className="social-link youtube disabled" aria-label="UpForge YouTube channel coming soon" title="YouTube channel coming soon"><FaYoutube /></span>
        </div>
        <a className="footer-whatsapp-number" href="https://wa.me/923041769292" target="_blank" rel="noreferrer">WhatsApp: +92 304 1769292</a>
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
  { slug:'python-development', title:'Python Development', text:'Reliable Python software for APIs, data processing, automation and business-critical backend systems.', Icon:Code2, tags:['Python applications','FastAPI services','Data processing','Background jobs','System integrations','Testing & documentation'] },
  { slug:'web-scraping', title:'Web Scraping & Data Extraction', text:'Responsible data collection pipelines that convert public web information into clean, structured business data.', Icon:Database, tags:['Scrapy crawlers','Selenium automation','Data cleaning','Scheduled extraction','Proxy integration','Export pipelines'] },
  { slug:'django-development', title:'Django Development', text:'Secure Django applications, portals and APIs built on a mature Python framework for dependable growth.', Icon:Layers3, tags:['Django applications','Django REST APIs','Admin portals','Authentication','PostgreSQL','Cloud deployment'] },
  { slug:'ai-chatbots', title:'AI Chatbots & Assistants', text:'Useful conversational assistants for support, lead qualification, knowledge access and internal operations.', Icon:BrainCircuit, tags:['AI chatbots','Knowledge-base RAG','WhatsApp assistants','Website chat','Lead qualification','Human handoff'] },
  { slug:'flask-development', title:'Flask Development', text:'Lean Flask applications and APIs for focused products, integrations, internal tools and automation services.', Icon:Code2, tags:['Flask applications','REST APIs','Microservices','Authentication','Database integration','Cloud deployment'] },
  { slug:'selenium-automation', title:'Selenium Browser Automation', text:'Reliable browser automation for repetitive web tasks, quality assurance, monitoring and structured extraction.', Icon:Workflow, tags:['Browser workflows','Form automation','Automated testing','Data extraction','Scheduled runs','Error monitoring'] },
  { slug:'google-api-integration', title:'Google API Integration', text:'Connected Google services for business workflows, reporting, communication, maps and document operations.', Icon:CloudCog, tags:['Google Workspace','Google Sheets API','Google Maps API','Gmail API','OAuth setup','Automated reporting'] },
  { slug:'api-integration', title:'API Integration & Development', text:'Secure APIs and dependable third-party integrations that keep applications and business systems synchronized.', Icon:Layers3, tags:['REST APIs','GraphQL','Webhooks','OAuth & JWT','API documentation','Monitoring & testing'] },
  { slug:'data-management', title:'Data Management', text:'Organized, governed and accessible business data across databases, cloud warehouses and operational systems.', Icon:Database, tags:['Data modeling','Database design','Data migration','Data quality','Access control','Backup & recovery'] },
  { slug:'social-media-api-integration', title:'LinkedIn, Facebook & YouTube Integration', text:'Connected social-platform APIs for publishing, lead capture, reporting, video data and automated business workflows.', Icon:Workflow, tags:['LinkedIn API','Meta Graph API','YouTube Data API','Social publishing','Lead synchronization','Analytics reporting'] },
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

const automationCapabilities = [
  { title:'Software Integration', text:'Connect your CRM, apps and data so information moves securely across the business.', Icon:CloudCog, mark:'+' },
  { title:'Process Automation', text:'Replace repetitive work with dependable workflows, approvals and intelligent routing.', Icon:Workflow, mark:'••' },
  { title:'AI Integration', text:'Add useful AI assistants, classification and content workflows to existing operations.', Icon:BrainCircuit, mark:'◒' },
  { title:'Data Strategy', text:'Structure scattered business data into reliable sources for reporting and automation.', Icon:Database, mark:'◇' },
  { title:'Document Automation', text:'Generate, review, route and archive documents without manual copying or spreadsheet work.', Icon:Layers3, mark:'⌗' },
  { title:'No-Code Development', text:'Launch internal tools, portals and workflow applications faster with maintainable platforms.', Icon:Code2, mark:'✣' },
] as const

type BrandTool = { name:string; Icon?:IconType; image?:string; color:string }

const tool = (name:string, Icon:IconType, color:string): BrandTool => ({ name, Icon, color })
const highlevelTool: BrandTool = { name:'HighLevel', image:highlevelMark, color:'#2896fb' }

const serviceTools: Record<string, BrandTool[]> = {
  'solution-architecture': [
    tool('AWS',FaAws,'#ff9900'), tool('Google Cloud',SiGooglecloud,'#4285f4'), tool('Docker',SiDocker,'#2496ed'), tool('Kubernetes',SiKubernetes,'#326ce5'),
    tool('GitHub',SiGithub,'#181717'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('MongoDB',SiMongodb,'#47a248'), tool('Redis',SiRedis,'#dc382d'),
  ],
  'full-stack-development': [
    tool('React',SiReact,'#61dafb'), tool('Next.js',SiNextdotjs,'#111111'), tool('Node.js',SiNodedotjs,'#5fa04e'), tool('TypeScript',SiTypescript,'#3178c6'),
    tool('Python',SiPython,'#3776ab'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('MongoDB',SiMongodb,'#47a248'), tool('GraphQL',SiGraphql,'#e10098'),
  ],
  'no-code-automation': [
    highlevelTool, tool('Make',SiMake,'#6d00cc'), tool('Zapier',SiZapier,'#ff4f00'), tool('n8n',SiN8N,'#ea4b71'),
    tool('HubSpot',SiHubspot,'#ff7a59'), tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Google',SiGoogle,'#4285f4'), tool('Mailchimp',SiMailchimp,'#ffe01b'),
  ],
  'wordpress-development': [
    tool('WordPress',SiWordpress,'#21759b'), tool('WooCommerce',SiWoocommerce,'#96588a'), tool('Elementor',SiElementor,'#92003b'), tool('Yoast',SiYoast,'#a4286a'),
    tool('PHP',SiPhp,'#777bb4'), tool('MySQL',SiMysql,'#4479a1'), tool('Cloudflare',SiCloudflare,'#f38020'), tool('Vercel',SiVercel,'#111111'),
  ],
  'graphic-design': [
    tool('Figma',SiFigma,'#f24e1e'), tool('Elementor',SiElementor,'#92003b'), tool('Framer',SiFramer,'#0055ff'), tool('Sketch',SiSketch,'#f7b500'),
    tool('React',SiReact,'#61dafb'), tool('WordPress',SiWordpress,'#21759b'), tool('Google',SiGoogle,'#4285f4'), tool('GitHub',SiGithub,'#181717'),
  ],
  'seo-services': [
    tool('Google',SiGoogle,'#4285f4'), tool('Search Console',SiGooglesearchconsole,'#458cf5'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Semrush',SiSemrush,'#ff642d'),
    tool('Yoast',SiYoast,'#a4286a'), tool('WordPress',SiWordpress,'#21759b'), tool('Cloudflare',SiCloudflare,'#f38020'), tool('HubSpot',SiHubspot,'#ff7a59'),
  ],
  'ui-ux-design': [
    tool('Figma',SiFigma,'#f24e1e'), tool('Framer',SiFramer,'#0055ff'), tool('Sketch',SiSketch,'#f7b500'), tool('Elementor',SiElementor,'#92003b'),
    tool('React',SiReact,'#61dafb'), tool('Flutter',SiFlutter,'#02569b'), tool('GitHub',SiGithub,'#181717'), tool('Vercel',SiVercel,'#111111'),
  ],
  'mobile-development': [
    tool('Flutter',SiFlutter,'#02569b'), tool('Kotlin',SiKotlin,'#7f52ff'), tool('Swift',SiSwift,'#f05138'), tool('Android',SiAndroid,'#3ddc84'),
    tool('Apple',SiApple,'#111111'), tool('Firebase',SiFirebase,'#ffca28'), tool('React',SiReact,'#61dafb'), tool('Supabase',SiSupabase,'#3fcf8e'),
  ],
  'data-ai-engineering': [
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'), tool('Airflow',SiApacheairflow,'#017cee'),
    tool('Snowflake',SiSnowflake,'#29b5e8'), tool('TensorFlow',SiTensorflow,'#ff6f00'), tool('PyTorch',SiPytorch,'#ee4c2c'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'ai-tools-products': [
    tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Gemini',SiGooglegemini,'#8e75b2'), tool('LangChain',SiLangchain,'#1c3c3c'), tool('Python',SiPython,'#3776ab'),
    tool('PyTorch',SiPytorch,'#ee4c2c'), tool('TensorFlow',SiTensorflow,'#ff6f00'), tool('FastAPI',SiFastapi,'#009688'), tool('Supabase',SiSupabase,'#3fcf8e'),
  ],
  'saas-applications': [
    tool('React',SiReact,'#61dafb'), tool('Next.js',SiNextdotjs,'#111111'), tool('Node.js',SiNodedotjs,'#5fa04e'), tool('Stripe',SiStripe,'#635bff'),
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('AWS',FaAws,'#ff9900'), tool('Docker',SiDocker,'#2496ed'), tool('Vercel',SiVercel,'#111111'),
  ],
  'analytics-dashboards': [
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Looker',SiLooker,'#4285f4'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Pandas',SiPandas,'#150458'),
    tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Microsoft BI',FaMicrosoft,'#5e5e5e'), tool('Python',SiPython,'#3776ab'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'data-analysis': [
    tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'), tool('Jupyter',SiJupyter,'#f37626'), tool('scikit-learn',SiScikitlearn,'#f7931e'),
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Looker',SiLooker,'#4285f4'), tool('PostgreSQL',SiPostgresql,'#4169e1'),
  ],
  'paid-advertising': [
    tool('Google Ads',SiGoogleads,'#4285f4'), tool('Meta Ads',FaFacebook,'#0866ff'), tool('LinkedIn Ads',FaLinkedin,'#0a66c2'), tool('Analytics',SiGoogleanalytics,'#e37400'),
    tool('Tag Manager',SiGoogletagmanager,'#246fdb'), tool('HubSpot',SiHubspot,'#ff7a59'), tool('Mailchimp',SiMailchimp,'#ffe01b'), tool('Google',SiGoogle,'#4285f4'),
  ],
  'pixel-tracking': [
    tool('Tag Manager',SiGoogletagmanager,'#246fdb'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Meta Pixel',FaFacebook,'#0866ff'), tool('LinkedIn',FaLinkedin,'#0a66c2'),
    tool('Google Ads',SiGoogleads,'#4285f4'), tool('HubSpot',SiHubspot,'#ff7a59'), tool('React',SiReact,'#61dafb'), tool('Next.js',SiNextdotjs,'#111111'),
  ],
  'python-development': [
    tool('Python',SiPython,'#3776ab'), tool('FastAPI',SiFastapi,'#009688'), tool('Django',SiDjango,'#092e20'), tool('Flask',SiFlask,'#111111'),
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Celery',SiCelery,'#37814a'), tool('Redis',SiRedis,'#dc382d'), tool('Docker',SiDocker,'#2496ed'),
  ],
  'web-scraping': [
    tool('Scrapy',SiScrapy,'#60a839'), tool('Selenium',SiSelenium,'#43b02a'), tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'),
    tool('MongoDB',SiMongodb,'#47a248'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Docker',SiDocker,'#2496ed'), tool('Airflow',SiApacheairflow,'#017cee'),
  ],
  'django-development': [
    tool('Django',SiDjango,'#092e20'), tool('Python',SiPython,'#3776ab'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Redis',SiRedis,'#dc382d'),
    tool('Celery',SiCelery,'#37814a'), tool('Docker',SiDocker,'#2496ed'), tool('AWS',FaAws,'#ff9900'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'ai-chatbots': [
    tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Anthropic',SiAnthropic,'#191919'), tool('LangChain',SiLangchain,'#1c3c3c'), tool('Hugging Face',SiHuggingface,'#ffd21e'),
    tool('Dialogflow',SiDialogflow,'#ff9800'), tool('Rasa',SiRasa,'#5a17ee'), tool('WhatsApp',SiWhatsapp,'#25d366'), tool('Telegram',SiTelegram,'#26a5e4'),
  ],
  'flask-development': [
    tool('Flask',SiFlask,'#111111'), tool('Python',SiPython,'#3776ab'), tool('FastAPI',SiFastapi,'#009688'), tool('PostgreSQL',SiPostgresql,'#4169e1'),
    tool('Redis',SiRedis,'#dc382d'), tool('Celery',SiCelery,'#37814a'), tool('Docker',SiDocker,'#2496ed'), tool('GitHub',SiGithub,'#181717'),
  ],
  'selenium-automation': [
    tool('Selenium',SiSelenium,'#43b02a'), tool('Python',SiPython,'#3776ab'), tool('Scrapy',SiScrapy,'#60a839'), tool('Pandas',SiPandas,'#150458'),
    tool('Docker',SiDocker,'#2496ed'), tool('GitHub',SiGithub,'#181717'), tool('Airflow',SiApacheairflow,'#017cee'), tool('Google',SiGoogle,'#4285f4'),
  ],
  'google-api-integration': [
    tool('Google',SiGoogle,'#4285f4'), tool('Google Cloud',SiGooglecloud,'#4285f4'), tool('Google Sheets',SiGooglesheets,'#34a853'), tool('Google Maps',SiGooglemaps,'#4285f4'),
    tool('Gmail',SiGmail,'#ea4335'), tool('Google Drive',SiGoogledrive,'#4285f4'), tool('Google Calendar',SiGooglecalendar,'#4285f4'), tool('BigQuery',SiGooglebigquery,'#669df6'),
  ],
  'api-integration': [
    tool('Postman',SiPostman,'#ff6c37'), tool('Swagger',SiSwagger,'#85ea2d'), tool('GraphQL',SiGraphql,'#e10098'), tool('FastAPI',SiFastapi,'#009688'),
    tool('Node.js',SiNodedotjs,'#5fa04e'), tool('TypeScript',SiTypescript,'#3178c6'), tool('JWT',SiJsonwebtokens,'#111111'), tool('GitHub',SiGithub,'#181717'),
  ],
  'data-management': [
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('MySQL',SiMysql,'#4479a1'), tool('MongoDB',SiMongodb,'#47a248'), tool('Redis',SiRedis,'#dc382d'),
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Pandas',SiPandas,'#150458'), tool('Airflow',SiApacheairflow,'#017cee'),
  ],
  'social-media-api-integration': [
    tool('LinkedIn',FaLinkedin,'#0a66c2'), tool('Facebook',FaFacebook,'#0866ff'), tool('YouTube',SiYoutube,'#ff0000'), tool('Google',SiGoogle,'#4285f4'),
    tool('Postman',SiPostman,'#ff6c37'), tool('Swagger',SiSwagger,'#85ea2d'), tool('Python',SiPython,'#3776ab'), tool('Node.js',SiNodedotjs,'#5fa04e'),
  ],
}

function BrandMark({ tool }: { tool:BrandTool }) {
  const Icon = tool.Icon
  return tool.image ? <img src={tool.image} alt="" /> : Icon ? <Icon /> : null
}

function BrandNode({ tool, className }: { tool:BrandTool; className:string }) {
  return (
    <span className={`tool-node ${className}`} style={{ '--brand-color':tool.color } as CSSProperties}>
      <BrandMark tool={tool} />
      <small>{tool.name}</small>
    </span>
  )
}

function ServiceHeroLogos({ tools }: { tools:BrandTool[] }) {
  return (
    <div className="service-hero-logos" aria-hidden="true">
      <div className="service-hero-orbit orbit-outer" />
      <div className="service-hero-orbit orbit-inner" />
      <div className="service-hero-core"><Sparkles /></div>
      {tools.map((brand,index) => (
        <span
          key={brand.name}
          className={`service-hero-logo hero-logo-${index + 1}`}
          style={{ '--brand-color':brand.color, '--logo-delay':`${index * -.65}s` } as CSSProperties}
        >
          <BrandMark tool={brand} />
          <small>{brand.name}</small>
        </span>
      ))}
    </div>
  )
}

function ServiceShowcase({ slug, title, text, tags }: { slug:string; title:string; text:string; tags:readonly string[] }) {
  const tools = serviceTools[slug] ?? serviceTools['solution-architecture']
  const capabilityCopy = slug === 'no-code-automation'
    ? automationCapabilities
    : tags.slice(0,6).map((tag,index) => ({
      title:tag,
      text:`Professional ${tag.toLowerCase()} planned, implemented and validated around your business goals.`,
      Icon:Code2,
      mark:'',
    }))
  const capabilities = capabilityCopy.map((capability,index) => ({ ...capability, brand:tools[index % tools.length] }))
  const leftTools = tools.slice(0,4)
  const rightTools = tools.slice(4,8)

  return (
    <>
      <section className="automation-capabilities">
        <div className="automation-heading">
          <span>UPFORGE EXPERTISE</span>
          <h2>Unlock new possibilities with<br /><em>{title.toLowerCase()}.</em></h2>
          <p>{text} Every engagement combines clear planning, experienced execution and dependable support.</p>
        </div>
        <div className="automation-card-grid">
          {capabilities.map(({ title, text, brand }) => {
            return (
            <article key={title}>
              <div
                className="automation-card-logo"
                title={brand.name}
                aria-label={`${brand.name} logo`}
                style={{ '--brand-color':brand.color } as CSSProperties}
              >
                <BrandMark tool={brand} />
              </div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
            )
          })}
        </div>
      </section>
      <section className="automation-ecosystem">
        <div className="tool-rail tool-rail-left" aria-hidden="true">
          <svg viewBox="0 0 360 440" preserveAspectRatio="none">
            <path d="M0 55 H100 C190 55 180 170 350 190" />
            <path d="M0 160 H120 C200 160 205 205 350 215" />
            <path d="M0 275 H125 C210 275 210 240 350 235" />
            <path d="M0 385 H95 C195 385 180 270 350 255" />
          </svg>
          {leftTools.map((brand,index) => <BrandNode key={brand.name} tool={brand} className={`node-${['one','two','three','four'][index]}`} />)}
        </div>
        <div className="automation-ecosystem-copy">
          <span>CONNECTED TOOLKIT</span>
          <h2>Our expertise in {title.toLowerCase()} tools.</h2>
          <p>We work with proven platforms and modern technologies selected around your users, existing systems and long-term operating needs.</p>
          <Link to="/contact">Schedule a discovery call <ArrowRight /></Link>
        </div>
        <div className="tool-rail tool-rail-right" aria-hidden="true">
          <svg viewBox="0 0 360 440" preserveAspectRatio="none">
            <path d="M360 55 H260 C170 55 180 170 10 190" />
            <path d="M360 160 H240 C160 160 155 205 10 215" />
            <path d="M360 275 H235 C150 275 150 240 10 235" />
            <path d="M360 385 H265 C165 385 180 270 10 255" />
          </svg>
          {rightTools.map((brand,index) => <BrandNode key={brand.name} tool={brand} className={`node-${['one','two','three','four'][index]}`} />)}
        </div>
      </section>
    </>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceDetails.find(item => item.slug === slug)
  if (!service) return <PageShell index="" label="SERVICE" title={<>Service not found.</>} intro="Return to our services catalogue to choose another capability."><section className="missing-service"><Link to="/services">View all services <ArrowRight /></Link></section></PageShell>
  const { title, text, Icon, tags } = service
  const tools = serviceTools[slug ?? ''] ?? serviceTools['solution-architecture']
  return (
    <PageShell
      index=""
      label="UPFORGE SERVICE"
      title={<>{title}<br /><em>built around you.</em></>}
      intro={text}
      heroDecor={<ServiceHeroLogos tools={tools} />}
    >
      <ServiceShowcase slug={slug ?? ''} title={title} text={text} tags={tags} />
      <section className="service-detail">
        <div className="service-detail-intro"><Icon /><span>WHAT'S INCLUDED</span><h2>A complete service,<br />not a partial handoff.</h2><p>We combine strategy, execution, testing and documentation so your team receives a solution that is clear, maintainable and ready to use.</p></div>
        <div className="included-list">{tags.map((tag,index) => {
          const brand = tools[index % tools.length]
          return (
            <article key={tag}>
              <span className="included-brand-logo" style={{ '--brand-color':brand.color } as CSSProperties}><BrandMark tool={brand} /></span>
              <h3>{tag}</h3>
              <p>Planned and delivered around your goals, users and existing systems.</p>
            </article>
          )
        })}</div>
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
    <PageShell index="03" label="ABOUT UPFORGE" heroImage={aboutHero} title={<>Technology made<br /><em>clear and useful.</em></>} intro="UpForge is a digital engineering company that designs, builds and improves software, automation and data systems for modern businesses.">
      <section className="about-story">
        <div><span>WHO WE ARE</span><h2>A practical technology partner for ambitious companies.</h2></div>
        <div className="story-copy"><p>We combine product strategy, thoughtful design and dependable engineering in one focused team. Our job is to understand the business problem first, then build the simplest strong solution around it.</p><p>From customer-facing products to internal operations, UpForge helps startups and established organizations replace complexity with systems that are easier to use, manage and scale.</p></div>
      </section>
      <section className="company-overview">
        <div className="company-overview-head">
          <span>WHAT WE DO</span>
          <h2>One team from idea to reliable delivery.</h2>
          <p>We plan, design, engineer and support complete digital solutions—without passing your project between disconnected suppliers.</p>
        </div>
        <div className="company-pillars">
          <article><Code2 /><h3>Digital Products</h3><p>Web applications, SaaS platforms, mobile experiences and WordPress systems designed around real users.</p></article>
          <article><Workflow /><h3>Business Automation</h3><p>Connected CRM, GoHighLevel, n8n, Make and API workflows that reduce manual work and improve visibility.</p></article>
          <article><BrainCircuit /><h3>Data &amp; Intelligence</h3><p>Data pipelines, analytics dashboards and practical AI tools that turn information into better decisions.</p></article>
        </div>
      </section>
      <section className="company-method">
        <div><span>HOW WE WORK</span><h2>Clear communication.<br />Focused delivery.<br />Measurable value.</h2></div>
        <div className="company-method-list">
          <article><strong>01</strong><div><h3>Understand the goal</h3><p>We begin with your users, operations and business outcome—not a preselected technology.</p></div></article>
          <article><strong>02</strong><div><h3>Design the right system</h3><p>We define the experience, architecture and delivery plan before expensive development begins.</p></div></article>
          <article><strong>03</strong><div><h3>Build with visibility</h3><p>You receive regular progress, working releases and clear decisions throughout the engagement.</p></div></article>
          <article><strong>04</strong><div><h3>Improve after launch</h3><p>We test, document, monitor and evolve the solution as your needs and opportunities grow.</p></div></article>
        </div>
      </section>
      <section className="values">
        {['Clarity in every step', 'Outcomes before output', 'Quality without complexity', 'Partnership beyond launch'].map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3></div>)}
      </section>
    </PageShell>
  )
}

export function ContactPage() {
  const openGmailWithProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || 'Not provided')
    const company = String(data.get('company') || 'Not provided')
    const service = String(data.get('service') || 'Not selected')
    const budget = String(data.get('budget') || 'Not selected')
    const timeline = String(data.get('timeline') || 'Not selected')
    const message = String(data.get('message') || 'No additional details provided')
    const subject = `New UpForge project inquiry — ${service} — ${name}`
    const body = [
      'Hello UpForge,',
      '',
      'I would like to discuss a project.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Company: ${company}`,
      `Service required: ${service}`,
      `Estimated budget: ${budget}`,
      `Preferred timeline: ${timeline}`,
      '',
      'Project details:',
      message,
      '',
      'Please reply to the email address provided above.',
    ].join('\n')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('info@upforge.us')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    const composeWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    if (!composeWindow) window.location.href = `mailto:info@upforge.us?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <PageShell index="04" label="START A PROJECT" title={<>Bring us the<br /><em>hard problem.</em></>} intro="Tell us what you are building, fixing, or reimagining. We usually reply within one business day.">
      <section className="contact-panel">
        <div><span>EMAIL US DIRECTLY</span><a href="mailto:info@upforge.us">info@upforge.us</a><p>Prefer a quick intro? Send a short note with your goals, timing, and where you need the most help.</p></div>
        <form onSubmit={openGmailWithProject}>
          <div className="form-heading"><span>PROJECT INQUIRY</span><h2>Tell us what you want to build.</h2><p>Complete the brief below. We will prepare everything in Gmail so you can review it before sending.</p></div>
          <label>Your name<input name="name" placeholder="Jane Smith" required /></label>
          <label>Work email<input name="email" type="email" placeholder="jane@company.com" required /></label>
          <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+92 300 0000000" /></label>
          <label>Company<input name="company" placeholder="Company name" /></label>
          <label className="full-field">What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{serviceDetails.map(({ slug, title }) => <option key={slug} value={title}>{title}</option>)}<option value="Something else">Something else</option></select></label>
          <label>Estimated budget<select name="budget" defaultValue=""><option value="">Select budget</option><option>Under $1,000</option><option>$1,000 – $5,000</option><option>$5,000 – $15,000</option><option>$15,000+</option></select></label>
          <label>Preferred timeline<select name="timeline" defaultValue=""><option value="">Select timeline</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>3+ months</option></select></label>
          <label className="full-field">Tell us about the project<textarea name="message" placeholder="A little context goes a long way..." rows={5} required /></label>
          <button type="submit">Continue to Gmail <ArrowRight /></button>
        </form>
      </section>
    </PageShell>
  )
}
