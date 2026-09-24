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
  'solution-architecture': { src:unsplash('photo-1523961131990-5ea7c61b2107'), alt:'Abstract network of connected cloud architecture blocks' },
  'full-stack-development': { src:unsplash('photo-1633356122544-f134324a6cee'), alt:'React code open in a code editor' },
  'no-code-automation': { src:unsplash('photo-1550751827-4bd374c3f58b'), alt:'Glowing circuit paths representing automated workflows' },
  'wordpress-development': { src:unsplash('photo-1498050108023-c5249f4df085'), alt:'Laptop on a desk showing website code' },
  'graphic-design': { src:unsplash('photo-1561070791-2526d30994b5'), alt:'Colour swatches and brand design materials' },
  'seo-services': { src:unsplash('photo-1504868584819-f8e8b4b6d7e3'), alt:'Laptop showing search and traffic analytics' },
  'ui-ux-design': { src:unsplash('photo-1522542550221-31fd19575a2d'), alt:'Sketched wireframes for app screens' },
  'mobile-development': { src:unsplash('photo-1551650975-87deedd944c3'), alt:'Phone displaying a mobile app dashboard' },
  'data-ai-engineering': { src:unsplash('photo-1597733336794-12d05021d510'), alt:'Glowing neural network of data points' },
  'ai-tools-products': { src:unsplash('photo-1677442136019-21780ecad995'), alt:'Three-dimensional AI lettering' },
  'saas-applications': { src:unsplash('photo-1559028012-481c04fa702d'), alt:'Desktop monitor showing a web application interface' },
  'analytics-dashboards': { src:unsplash('photo-1551288049-bebda4e38f71'), alt:'Analytics dashboard with charts and KPIs' },
  'data-analysis': { src:unsplash('photo-1666875753105-c63a6f3bdc86'), alt:'Colourful 3D charts and data visualisations' },
  'paid-advertising': { src:unsplash('photo-1557838923-2985c318be48'), alt:'Letter tiles spelling digital marketing' },
  'pixel-tracking': { src:unsplash('photo-1460925895917-afdab827c52f'), alt:'Laptop displaying conversion tracking charts' },
  'python-development': { src:unsplash('photo-1542831371-29b0f74f9713'), alt:'Laptop with Python code on screen' },
  'web-scraping': { src:unsplash('photo-1526374965328-7f61d4dc18c5'), alt:'Streams of green code representing extracted data' },
  'django-development': { src:unsplash('photo-1504639725590-34d0984388bd'), alt:'Close-up of backend application code' },
  'ai-chatbots': { src:unsplash('photo-1485827404703-89b55fcc595e'), alt:'Friendly service robot representing an AI assistant' },
  'flask-development': { src:unsplash('photo-1555066931-4365d14bab8c'), alt:'Code editor open on a laptop in a dark room' },
  'selenium-automation': { src:unsplash('photo-1531746790731-6c087fecd65a'), alt:'Robotic hand representing browser automation' },
  'google-api-integration': { src:unsplash('photo-1563986768609-322da13575f3'), alt:'Laptop and phone working together on connected apps' },
  'api-integration': { src:unsplash('photo-1544197150-b99a580bb7a8'), alt:'Network cables connected to a patch panel' },
  'data-management': { src:unsplash('photo-1558494949-ef010cbdcc31'), alt:'Server racks in a data centre' },
  'social-media-api-integration': { src:unsplash('photo-1432888622747-4eb9a8efeb07'), alt:'Phone showing a social media app next to social media letter tiles' },
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
