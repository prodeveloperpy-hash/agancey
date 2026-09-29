/**
 * Editable site content — replace the dummy values below with real data.
 *
 * Images can be:
 *  - a full URL (https://...), or
 *  - a file you put in /public, referenced from the site root, e.g. put
 *    `public/images/services/seo.jpg` in the project and use '/images/services/seo.jpg'.
 *
 * Nothing else in the code needs to change when you edit this file.
 */

/** Placeholder helper for the dummy Unsplash photos. Not needed for your own images. */
const unsplash = (id: string, width = 1200) => `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format&fit=crop`

export type ServiceImage = {
  /** Image URL or /public path */
  src: string
  /** Short description of the image for screen readers and SEO */
  alt: string
}

/**
 * One image per service. The key must match the service slug used in the URL
 * (/services/<slug>), so keep the keys as they are and only change src / alt.
 */
export const serviceImages: Record<string, ServiceImage> = {
  "solution-architecture": { src:"/images/services/solution-architecture.png", alt:"Three-tier solution architecture showing presentation, application logic and data layers" },
  "full-stack-development": { src:"/images/services/full-stack-development.png", alt:"Next.js full-stack web development framework" },
  "no-code-automation": { src:"/images/services/no-code-automation.png", alt:"n8n workflow automation platform" },
  "wordpress-development": { src:"/images/services/wordpress-development.png", alt:"WordPress website building interface" },
  "graphic-design": { src:"/images/services/graphic-design.jpg", alt:"Figma graphic design tools" },
  "seo-services": { src:"/images/services/seo-services.png", alt:"Ahrefs search engine optimization platform" },
  "ui-ux-design": { src:"/images/services/ui-ux-design.png", alt:"Figma user interface design tools" },
  "mobile-development": { src:"/images/services/mobile-development.webp", alt:"Flutter application development across devices" },
  "data-ai-engineering": { src:"/images/services/data-ai-engineering.png", alt:"Databricks data and AI platform" },
  "ai-tools-products": { src:"/images/services/ai-tools-products.png", alt:"LangChain AI application development platform" },
  "saas-applications": { src:"/images/services/saas-applications.png", alt:"Supabase application backend platform" },
  "analytics-dashboards": { src:"/images/services/analytics-dashboards.webp", alt:"Metabase business intelligence and analytics dashboards" },
  "data-analysis": { src:"/images/services/data-analysis.svg", alt:"Pandas data analysis charts comparing time series and distributions" },
  "paid-advertising": { src:"/images/services/paid-advertising.svg", alt:"Google Ads campaign platform logo" },
  "pixel-tracking": { src:"/images/services/pixel-tracking.jpg", alt:"Google Tag Manager tag management interface" },
  "python-development": { src:"/images/services/python-development.png", alt:"Python programming language logo" },
  "web-scraping": { src:"/images/services/web-scraping.png", alt:"Scrapy web crawling and data extraction framework" },
  "django-development": { src:"/images/services/django-development.png", alt:"Django Python web framework logo" },
  "ai-chatbots": { src:"/images/services/ai-chatbots.jpg", alt:"Botpress conversational AI platform" },
  "flask-development": { src:"/images/services/flask-development.svg", alt:"Flask Python web framework logo" },
  "selenium-automation": { src:"/images/services/selenium-automation.png", alt:"Selenium browser automation framework" },
  "google-api-integration": { src:"/images/services/google-api-integration.png", alt:"Google Workspace developer integration illustration" },
  "api-integration": { src:"/images/services/api-integration.jpg", alt:"Postman API development platform" },
  "data-management": { src:"/images/services/data-management.png", alt:"PostgreSQL database platform logo" },
  "social-media-api-integration": { src:"/images/services/social-media-api-integration.png", alt:"YouTube Data API integration illustration" },
}

export type Project = {
  /** Project or client name */
  name: string
  /** Short label, e.g. "FINTECH / PRODUCT" */
  category: string
  /** One or two sentences describing the project */
  overview: string
  /** Live website URL (opens in a new tab). Use '' to hide the link. */
  url: string
  /** Screenshot of the project — URL or /public path, ideally 16:10 */
  screenshot: string
  /** Technologies or services used (optional) */
  tags?: string[]
  /** Year delivered (optional) */
  year?: string
}

/** Shown on the Work page in this order. Add or remove entries freely. */
export const projects: Project[] = [
  {
    name:'Meridian',
    category:'FINTECH / PRODUCT',
    overview:'A wealth platform that makes complex financial decisions feel simple, with real-time portfolio views and guided planning.',
    url:'https://example.com',
    screenshot:unsplash('photo-1551288049-bebda4e38f71', 1400),
    tags:['React', 'Node.js', 'PostgreSQL'],
    year:'2026',
  },
  {
    name:'Pulse',
    category:'HEALTHTECH / MOBILE',
    overview:'A human-first care experience connecting patients and providers through booking, messaging and reminders.',
    url:'https://example.com',
    screenshot:unsplash('photo-1551650975-87deedd944c3', 1400),
    tags:['Flutter', 'Firebase'],
    year:'2025',
  },
  {
    name:'Northline',
    category:'LOGISTICS / DATA',
    overview:'Real-time operations intelligence across a national fleet, combining live tracking with performance dashboards.',
    url:'https://example.com',
    screenshot:unsplash('photo-1460925895917-afdab827c52f', 1400),
    tags:['BigQuery', 'Looker Studio', 'Python'],
    year:'2025',
  },
  {
    name:'Orbit',
    category:'SAAS / AUTOMATION',
    overview:'A growth engine that qualifies, nurtures and converts leads around the clock using connected CRM automations.',
    url:'https://example.com',
    screenshot:unsplash('photo-1559028012-481c04fa702d', 1400),
    tags:['GoHighLevel', 'n8n', 'OpenAI'],
    year:'2026',
  },
  {
    name:'Brightside Studio',
    category:'BRAND / WORDPRESS',
    overview:'A fast, editable marketing website and brand refresh for a creative studio, built for easy content updates.',
    url:'https://example.com',
    screenshot:unsplash('photo-1498050108023-c5249f4df085', 1400),
    tags:['WordPress', 'Figma'],
    year:'2024',
  },
  {
    name:'Signal',
    category:'MARKETING / ANALYTICS',
    overview:'Unified paid-media reporting with accurate conversion tracking across Google, Meta and LinkedIn campaigns.',
    url:'https://example.com',
    screenshot:unsplash('photo-1504868584819-f8e8b4b6d7e3', 1400),
    tags:['GA4', 'Tag Manager', 'Google Ads'],
    year:'2026',
  },
]
