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

/** Supplied photos for service detail heroes. */
export const serviceHeroImages: Record<string, ServiceImage> = {
  "solution-architecture": { src:"/images/services/heroes/solution-architecture.jpg", alt:"Team planning a technology architecture with connected AI and cloud systems" },
  "social-media-api-integration": { src:"/images/services/heroes/social-media-api-integration.jpg", alt:"Social media platform logos for connected integrations" },
  "data-management": { src:"/images/services/heroes/data-management.jpg", alt:"Data management illustration with secure connected devices" },
  "api-integration": { src:"/images/services/heroes/api-integration.png", alt:"API connecting web applications, servers and databases" },
  "google-api-integration": { src:"/images/services/heroes/google-api-integration.jpg", alt:"API hub connecting digital services" },
  "selenium-automation": { src:"/images/services/heroes/selenium-automation.jpg", alt:"Selenium automation concept with connected hexagons" },
  "flask-development": { src:"/images/services/heroes/flask-development.jpg", alt:"Illustrated Flask and Python application development workshop" },
  "ai-chatbots": { src:"/images/services/heroes/ai-chatbots.jpg", alt:"AI chatbot assistant offering help" },
  "django-development": { src:"/images/services/heroes/django-development.jpg", alt:"Illustrated Django application development workflow" },
  "web-scraping": { src:"/images/services/heroes/web-scraping.png", alt:"Web scraping and data extraction illustration" },
  "python-development": { src:"/images/services/heroes/python-development.jpg", alt:"Python programming concept with code and a digital python" },
  "pixel-tracking": { src:"/images/services/heroes/pixel-tracking.png", alt:"Website purchase event sent to a conversion tracking dashboard" },
  "paid-advertising": { src:"/images/services/heroes/paid-advertising.png", alt:"Google Ads and LinkedIn logos" },
  "data-analysis": { src:"/images/services/heroes/data-analysis.jpg", alt:"Data analysis charts over a city skyline" },
  "analytics-dashboards": { src:"/images/services/heroes/analytics-dashboards.jpg", alt:"Monitor showing analytics charts and dashboards" },
  "saas-applications": { src:"/images/services/heroes/saas-applications.jpg", alt:"SaaS application development and cloud services illustration" },
  "ai-tools-products": { src:"/images/services/heroes/ai-tools-products.jpg", alt:"AI tools connected on a digital circuit" },
  "data-ai-engineering": { src:"/images/services/heroes/data-ai-engineering.jpg", alt:"Engineer and robot working with data systems" },
  "mobile-development": { src:"/images/services/heroes/mobile-development.jpg", alt:"Mobile applications and communication icons on a tablet" },
  "ui-ux-design": { src:"/images/services/heroes/ui-ux-design.webp", alt:"User interface and user experience design illustration" },
  "seo-services": { src:"/images/services/heroes/seo-services.jpg", alt:"SEO planning with keywords, backlinks and site architecture" },
  "graphic-design": { src:"/images/services/heroes/graphic-design.webp", alt:"Graphic design composition of brand logos forming a tree" },
  "wordpress-development": { src:"/images/services/heroes/wordpress-development.jpg", alt:"WordPress logo surrounded by a network of websites" },
  "no-code-automation": { src:"/images/services/heroes/no-code-automation.jpg", alt:"No-code automation tools and connected workflows" },
  "full-stack-development": { src:"/images/services/heroes/full-stack-development.png", alt:"Full-stack development illustration with programming technologies" },
}
