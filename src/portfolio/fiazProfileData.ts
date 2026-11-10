export const asset = (path: string) => `/Fiazhussain/assets/${path}`

export const profilePhoto = '/Fiazhussain/fiaz-profile.jpg'
/** Tighter crop for hero — full face visible (landscape source photo). */
export const profilePhotoHero = '/Fiazhussain/fiaz-profile-hero.jpg'

export const contact = {
  email: 'mail.fiazhussain.dev@gmail.com',
  phone: '+92 348 3476760',
  phoneTel: '+923483476760',
  whatsapp: 'https://wa.me/923483476760',
  github: 'https://github.com/prodeveloperpy-hash',
  upforge: 'https://upforge.us/',
  fiverr: 'https://www.fiverr.com/s/1EElBG4',
  upwork: 'https://www.upwork.com/freelancers/~01c6bbb90a62c0821f?mp_source=share',
}

export const heroRoles = [
  'Senior Solution Architect',
  'Full-Stack Product Engineer',
  'AI & Automation Specialist',
  'CRM & Integration Expert',
]

export const hireLinks = [
  { label: 'Hire on Fiverr', url: contact.fiverr, tone: 'fiverr' as const },
  { label: 'Hire on Upwork', url: contact.upwork, tone: 'upwork' as const },
  { label: 'UpForge Agency', url: contact.upforge, tone: 'upforge' as const },
]

export const aboutIntro =
  'Architect and engineer for web, mobile, APIs, CRM, data, and AI for remote teams in the US, UK, and Pakistan'

export type AboutFocusIcon = 'products' | 'automation' | 'data' | 'ai' | 'remote'

export const aboutFocus: { title: string; text: string; icon: AboutFocusIcon }[] = [
  { title: 'Products & platforms', text: 'Web, mobile, SaaS, multi-tenant CRM', icon: 'products' },
  { title: 'Automation', text: 'Leads, pipelines, alerts, tool sync', icon: 'automation' },
  { title: 'Data & dashboards', text: 'KPIs, ops and marketing insights', icon: 'data' },
  { title: 'AI systems', text: 'Chatbots, search, agents, copilots', icon: 'ai' },
  { title: 'Remote delivery', text: 'US, UK, PK builds and support', icon: 'remote' },
]

/** @deprecated use aboutFocus — kept for legacy markdown only */
export const highlights = aboutFocus.map((item) => `${item.title}: ${item.text}`)

export const skillGroups = [
  {
    title: 'Languages & Frontend',
    iconUrl: 'https://skillicons.dev/icons?i=python,php,js,ts,html,css,react,nextjs,angular,tailwind,nodejs',
  },
  {
    title: 'Backend, Mobile & Databases',
    iconUrl: 'https://skillicons.dev/icons?i=django,fastapi,flask,express,flutter,dart,kotlin,firebase,mysql,postgres,mongodb',
  },
  {
    title: 'Cloud, DevOps & Tools',
    iconUrl: 'https://skillicons.dev/icons?i=aws,gcp,docker,git,github,linux,postman,figma,vscode,wordpress',
  },
]

export const skillTags = [
  { label: 'Automation', items: 'Selenium · Playwright · Web Scraping · GHL · HubSpot · n8n · Zapier · Make.com · Webhooks · Lead Routing' },
  { label: 'Data & Analytics', items: 'BigQuery · Elasticsearch · Kibana · Looker Studio · Power BI · Grafana · ETL/ELT · KPI Analysis' },
  { label: 'AI & Tracking', items: 'LLMs · RAG · AI Agents · OpenAI · Claude · GTM · Meta Pixel · LinkedIn Insight Tag' },
  { label: 'Engineering', items: 'Solution Architecture · REST APIs · Microservices · SaaS · PostgreSQL · AWS · GCP · CI/CD' },
]

export const stackRows: { area: string; tech: string }[] = [
  { area: 'Languages', tech: 'Python · JavaScript · TypeScript · PHP · SQL · Dart · Kotlin · HTML5 · CSS3' },
  { area: 'Frontend', tech: 'React · Next.js · Angular · Vite · Tailwind · Dashboards · Accessibility' },
  { area: 'Backend', tech: 'Django · DRF · FastAPI · Flask · Node.js · Express · REST · Microservices' },
  { area: 'Databases', tech: 'PostgreSQL · MySQL · MongoDB · Supabase · Firebase · BigQuery' },
  { area: 'AI Engineering', tech: 'LLMs · RAG · AI Agents · OpenAI API · Claude API · Chatbots' },
  { area: 'Automation & CRM', tech: 'GHL · HubSpot · Salesforce · n8n · Zapier · Make · Stripe · Shopify' },
  { area: 'Mobile', tech: 'Flutter · React Native · Android · iOS · Firebase · Push · Payments' },
  { area: 'Cloud & DevOps', tech: 'AWS · GCP · Cloud Run · Docker · Linux · CI/CD · Monitoring' },
]

export type PortfolioProject = {
  name: string
  tagline: string
  url: string
  image: string
  stack?: string
}

export const projects: PortfolioProject[] = [
  { name: 'UpForge', tagline: 'Software, AI & automation engineering agency', url: contact.upforge, image: asset('projects/upforge.png'), stack: 'React · Python · Cloud' },
  { name: 'Tooli UK', tagline: 'Tool & plant hire comparison marketplace', url: 'https://www.tooli.uk/', image: '/images/work/tooli.jpg', stack: 'React · Django · GCP' },
  { name: 'Tooli-Art', tagline: 'Art supplies ecommerce experience', url: 'https://tooli-art.com/', image: asset('projects/tooli-art.png'), stack: 'E-commerce · UX' },
  { name: 'WinkBooth', tagline: 'Premium photo booth & 360 event experiences', url: 'https://winkbooth.co.uk/', image: asset('projects/winkbooth.jpg'), stack: 'Brand site · Lead gen' },
  { name: 'Wavehire', tagline: 'Broadcast equipment hire platform', url: 'https://wavehire.tv/', image: asset('projects/wavehire.png'), stack: 'React · Django · Cloud Run' },
  { name: 'Wavetek TV', tagline: 'Live production technology on Cloud Run', url: 'https://wavetek-frontend-7homzqrazq-ew.a.run.app/', image: asset('projects/wavetek.png'), stack: 'React · GCP' },
  { name: 'BisViews', tagline: 'Business reviews, search & analytics', url: 'https://bisviews.com/', image: asset('projects/bisviews.png'), stack: 'Python · Elasticsearch · BigQuery' },
  { name: 'TV Packages', tagline: 'UK IPTV, streaming setup & WhatsApp support', url: 'https://tvpackages.uk/', image: asset('projects/tvpackages.jpg'), stack: 'React · Vite · Conversion UX' },
]

export const demos = [
  { title: 'AI System Optimization & Chat Assistant', tags: 'Performance, code optimization, AI assistance', image: asset('projects/system-chatbot-demo.gif') },
  { title: 'E-Commerce Website', tags: 'Storefront, product experience, order workflow', image: asset('projects/ecommerce-website-demo.gif') },
  { title: 'Resume Analytics, AI Recruitment Copilot', tags: 'Resume analysis, JD workflow, recruitment AI', image: asset('projects/resume-analytics-demo.gif') },
  { title: 'TalentAI, Resume & Job-Fit Analyzer', tags: 'Skills extraction, job matching, shortlisting', image: asset('projects/resume-job-fit-demo.gif') },
]

export const experience = [
  {
    role: 'Senior Solution Architect',
    company: 'UpForge',
    period: 'July 2026 - Present, full-time',
    points: [
      'Architect SaaS, AI, automation, and enterprise systems with Python, FastAPI, Django, Node.js, PostgreSQL, Supabase',
      'Design REST APIs, microservices, auth, integrations, AWS/Docker/CI/CD, and LLM/RAG/agent workflows',
      'Lead technical decisions from requirements through delivery and optimization',
    ],
    achievement: 'Delivered end-to-end architectures for AI, SaaS, automation, and API-integrated production platforms',
  },
  {
    role: 'Backend Engineer',
    company: 'UpSurge',
    period: 'June 2024 - July 2026, full-time',
    points: [
      'Built scalable backends, databases, secure APIs, integrations, and automation with Python/Django/FastAPI/Node',
      'Deployed on AWS with Docker/CI/CD, integrated OpenAI, Claude, RAG, and AI agents',
    ],
    achievement: 'Production-ready backend and AI automation combining APIs, data, cloud, and AI services',
  },
  {
    role: 'Full-Stack Engineer',
    company: 'ISHO Tech',
    period: 'Remote',
    points: [
      'CRM and multi-tenant apps with Python APIs, React, automation, chatbots, and conversion tracking',
    ],
    achievement: 'Remote delivery of CRM platforms, integrations, and automation for international clients',
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Fashion Commerce',
    period: 'Remote',
    points: [
      'AI ecommerce journeys, B2B marketing workflows, dashboards, and campaign automation',
    ],
    achievement: 'Remote builds for AI-led ecommerce flows, marketing ops, and reporting dashboards',
  },
  {
    role: 'Backend & Data Engineer',
    company: 'BisViews',
    period: 'Remote',
    points: [
      'Search ranking, Elasticsearch/BigQuery sync, analytics, warehousing, and Kibana monitoring',
    ],
    achievement: 'Remote search, analytics, and data pipeline work on a live review platform',
  },
]

export const privateCapabilities = [
  'CRM and multi-tenant platforms with Freshdesk, Pipedrive, calendars, and secure REST APIs',
  'AI and ecommerce automation: recommendations, lead workflows, chatbots, campaign reporting',
  'No-code automation with GHL, n8n, Zapier, and Make for pipelines, notifications, and sync',
  'Search and recommendations: Elasticsearch, BigQuery, ranking tuning, Kibana monitoring',
  'Marketing data: GTM, Meta Pixel, LinkedIn Ads, conversion events, reporting dashboards',
  'Mobile apps: Flutter/React Native, Firebase, payments, maps, release support',
  'WordPress and WooCommerce: Elementor builds, plugins, SEO, performance, maintenance',
]

/** Hero stat row under profile */
export const heroQuickStats: { value: string; label: string }[] = [
  { value: '40+', label: 'Products & platforms' },
  { value: '96%', label: 'Client satisfaction focus' },
  { value: 'Remote', label: 'US, UK, and PK clients' },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Technologies' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
