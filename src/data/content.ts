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
/** Shown on the Work page in this order. Add or remove entries freely. */
export const projects: Project[] = [
  {
    name:'Tooli',
    category:'MARKETPLACE / PRICE COMPARISON',
    overview:'A UK plant and tool hire comparison platform. Contractors search by equipment category, location and hire dates to compare local and national suppliers, check availability and book delivery, while suppliers can list their own equipment.',
    url:'https://www.tooli.uk/',
    screenshot:'/images/work/tooli.jpg',
    tags:['Marketplace', 'Search & filtering', 'Supplier listings', 'Location pages'],
  },
  {
    name:'WaveHire',
    category:'BROADCAST / EQUIPMENT RENTAL',
    overview:'A London rental site for professional wireless broadcast gear: wireless video, camera control and IP data systems for TV, live sports and film crews. Visitors browse the equipment catalogue, build an enquiry basket and read production insights.',
    url:'https://wavehire.tv/',
    screenshot:'/images/work/wavehire.jpg',
    tags:['Equipment catalogue', 'Enquiry basket', 'Blog & insights', 'Light / dark mode'],
  },
  {
    name:'Wavetek TV',
    category:'BROADCAST / E-COMMERCE',
    overview:'An e-commerce storefront for Wavetek\'s live-production video, control and connectivity products. It pairs a product catalogue and cart with time-limited offers, countdown sales, product video and support resources.',
    url:'https://wavetek-frontend-7homzqrazq-ew.a.run.app/',
    screenshot:'/images/work/wavetek.jpg',
    tags:['E-commerce', 'Product catalogue', 'Promotions & countdowns', 'Google Cloud Run'],
  },
  {
    name:'WinkBooth',
    category:'EVENTS / BOOKING SITE',
    overview:'A luxury photo booth hire brand for weddings, birthdays, corporate events and brand activations across the UK. The site showcases packages and a gallery, with availability checks, custom requests and WhatsApp enquiries.',
    url:'https://winkbooth.co.uk/',
    screenshot:'/images/work/winkbooth.jpg',
    tags:['Brand website', 'Packages & gallery', 'Enquiry forms', 'WhatsApp chat'],
  },
]
