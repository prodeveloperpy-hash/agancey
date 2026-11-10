import type { Project } from '../data/content'
import { projects as coreWorkProjects } from '../data/content'
import { contact } from './fiazProfileData'

export type PortfolioShowcaseProject = Pick<
  Project,
  'name' | 'category' | 'overview' | 'url' | 'screenshot' | 'mobileShot' | 'stack' | 'slug'
>

const productStack: Project['stack'] = {
  frontend: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
  backend: ['Python', 'Django', 'FastAPI', 'Node.js'],
  database: ['PostgreSQL', 'BigQuery'],
  hosting: ['Google Cloud Run', 'AWS'],
}

const wpStack: Project['stack'] = {
  frontend: ['WordPress', 'WooCommerce', 'Elementor', 'Responsive UI'],
  backend: ['PHP', 'Custom plugins', 'Integrations'],
  database: ['MySQL'],
  hosting: ['Managed hosting', 'Performance tuning'],
}

const enterpriseStack: Project['stack'] = {
  frontend: ['Modern CMS', 'Responsive design', 'Accessibility'],
  backend: ['API integrations', 'Forms & CRM hooks'],
  database: ['SQL', 'Content models'],
  hosting: ['Global CDN', 'Enterprise hosting'],
}

const pickCore = (slug: string) => {
  const item = coreWorkProjects.find((p) => p.slug === slug)
  if (!item) throw new Error(`Missing core project: ${slug}`)
  return {
    slug: item.slug,
    name: item.name,
    category: item.category,
    overview: item.overview,
    url: item.url,
    screenshot: item.screenshot,
    mobileShot: item.mobileShot,
    stack: item.stack,
  } satisfies PortfolioShowcaseProject
}

/** Live public websites — used in showcase + public project grid. */
export const portfolioShowcaseProjects: PortfolioShowcaseProject[] = [
  {
    slug: 'upforge',
    name: 'UpForge',
    category: 'AGENCY / SOFTWARE, AI, AUTOMATION',
    overview: 'Software, AI, automation, and full-stack delivery for modern businesses',
    url: contact.upforge,
    screenshot: '/images/work/upforge.png',
    stack: productStack,
  },
  pickCore('tooli'),
  pickCore('wavehire'),
  pickCore('wavetek'),
  pickCore('winkbooth'),
  {
    slug: 'tooli-art',
    name: 'Tooli-Art',
    category: 'E-COMMERCE / ART SUPPLIES',
    overview: 'Art supplies ecommerce with catalogue browsing and conversion-focused UX',
    url: 'https://tooli-art.com/',
    screenshot: '/images/work/tooli-art.png',
    stack: productStack,
  },
  {
    slug: 'bisviews',
    name: 'BisViews',
    category: 'BUSINESS / REVIEW PLATFORM',
    overview: 'Business discovery, reviews, categories, and registration flows',
    url: 'https://bisviews.com/',
    screenshot: '/images/work/bisviews.png',
    stack: productStack,
  },
  {
    slug: 'cvs2020',
    name: 'CVS2020',
    category: 'RETAIL / E-COMMERCE',
    overview: 'Commercial catering equipment and cleaning supplies online store',
    url: 'https://cvs2020.com/',
    screenshot: '/images/work/cvs2020.png',
    stack: wpStack,
  },
  {
    slug: 'tvpackages',
    name: 'TV Packages',
    category: 'ENTERTAINMENT / IPTV & STREAMING',
    overview: 'IPTV and streaming site with live TV, sports and movies, device guides and WhatsApp support',
    url: 'https://tvpackages.uk/',
    screenshot: '/images/work/tvpackages.jpg',
    stack: productStack,
  },
  {
    slug: 'raz-catering',
    name: 'RAZ Catering Supplies',
    category: 'RETAIL / CATERING SUPPLIES',
    overview: 'UK catering supplies ecommerce with product catalogue and ordering journeys',
    url: 'https://razcateringsupplies.co.uk/',
    screenshot: '/images/work/raz-catering.jpg',
    stack: wpStack,
  },
  {
    slug: 'remotepc',
    name: 'RemotePC',
    category: 'SAAS / REMOTE ACCESS',
    overview: 'Remote access product marketing site with plans, features, and signup flows',
    url: 'https://www.remotepc.com/',
    screenshot: '/images/work/remotepc.jpg',
    stack: enterpriseStack,
  },
  {
    slug: 'asma-sidra',
    name: 'Asma & Sidra',
    category: 'FASHION / E-COMMERCE',
    overview: 'Fashion retail storefront with collections and seasonal campaign landing pages',
    url: 'https://www.asmaandsidra.com/',
    screenshot: '/images/work/asma-sidra.jpg',
    stack: wpStack,
  },
  {
    slug: 'cambrex',
    name: 'Cambrex',
    category: 'PHARMA / ENTERPRISE',
    overview: 'Global pharmaceutical manufacturing corporate site with compliance-led content',
    url: 'https://www.cambrex.com/',
    screenshot: '/images/work/cambrex.jpg',
    stack: enterpriseStack,
  },
]
