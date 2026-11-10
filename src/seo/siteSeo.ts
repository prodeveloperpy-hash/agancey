import { blogPosts } from '../data/blogPosts'
import { projects } from '../data/content'

export const SITE_URL = 'https://upforge.us'
export const SITE_NAME = 'UpForge'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/work/upforge.png`

export type SeoConfig = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
  noindex?: boolean
}

const serviceTitles: Record<string, string> = {
  'solution-architecture': 'Solution Architecture',
  'full-stack-development': 'Full-Stack Development',
  'no-code-automation': 'No-Code Automation',
  'wordpress-development': 'WordPress Development',
  'graphic-design': 'Graphic Design',
  'seo-services': 'SEO Services',
  'ui-ux-design': 'UI/UX Design',
  'mobile-development': 'Mobile App Development',
  'data-ai-engineering': 'Data & AI Engineering',
  'ai-tools-products': 'AI Tools & Products',
  'saas-applications': 'SaaS Applications',
  'analytics-dashboards': 'Analytics Dashboards',
  'data-analysis': 'Data Analysis',
  'paid-advertising': 'Google & LinkedIn Ads',
  'pixel-tracking': 'Pixel & Conversion Tracking',
  'python-development': 'Python Development',
  'web-scraping': 'Web Scraping',
  'django-development': 'Django Development',
  'ai-chatbots': 'AI Chatbots',
  'flask-development': 'Flask Development',
  'selenium-automation': 'Selenium Automation',
  'google-api-integration': 'Google API Integration',
  'api-integration': 'API Integration',
  'data-management': 'Data Management',
  'social-media-api-integration': 'Social Media API Integration',
}

function titleCase(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getSeoForPath(pathname: string): SeoConfig {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/' || path === '') {
    return {
      title: 'UpForge | Software, AI, Automation & Full-Stack Agency',
      description:
        'UpForge is a technology agency for web, mobile, AI, data, automation, SEO, and cloud delivery. Strategy, build, and growth from one senior team',
      path: '/',
    }
  }

  if (path === '/services') {
    return {
      title: 'Services | UpForge Technology Agency',
      description:
        'Full-stack development, AI engineering, automation, WordPress, SEO, UI/UX, mobile apps, and data platforms for modern businesses',
      path: '/services',
    }
  }

  if (path === '/work') {
    return {
      title: 'Work & Case Studies | UpForge',
      description:
        'Selected web, SaaS, marketplace, and ecommerce projects delivered by UpForge across the UK, US, and international clients',
      path: '/work',
    }
  }

  if (path === '/about') {
    return {
      title: 'About UpForge | Engineering Team',
      description:
        'Builders focused on useful software: architecture, delivery, and long-term support for startups and established companies',
      path: '/about',
    }
  }

  if (path === '/contact') {
    return {
      title: 'Contact UpForge | Start a Project',
      description:
        'Tell us what you are building. Email info@upforge.us or WhatsApp +92 304 1769292. We reply within one business day',
      path: '/contact',
    }
  }

  if (path === '/blog') {
    return {
      title: 'Insights & SEO Blog | UpForge',
      description:
        'Guides on technical SEO, full-stack development, AI automation, WordPress, Django, and paid growth for business leaders',
      path: '/blog',
    }
  }

  if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length)
    const post = blogPosts.find((p) => p.slug === slug)
    if (post) {
      return {
        title: `${post.title} | UpForge Blog`,
        description: post.description,
        path,
        ogType: 'article',
      }
    }
  }

  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '')
    const label = serviceTitles[slug] ?? titleCase(slug)
    return {
      title: `${label} Services | UpForge`,
      description: `Hire UpForge for ${label.toLowerCase()}: strategy, implementation, integrations, and ongoing support for business-grade delivery`,
      path,
    }
  }

  if (path.startsWith('/work/')) {
    const slug = path.replace('/work/', '')
    const project = projects.find((p) => p.slug === slug)
    if (project) {
      return {
        title: `${project.name} Case Study | UpForge`,
        description: project.overview.slice(0, 155),
        path,
      }
    }
  }

  if (/^\/Fiazhussain$/i.test(path)) {
    return {
      title: 'Fiaz Hussain | Solution Architect Portfolio',
      description:
        'Senior solution architect portfolio: full-stack, AI, automation, and cloud projects by Fiaz Hussain',
      path: '/Fiazhussain',
    }
  }

  return {
    title: 'UpForge | Technology Agency',
    description: 'Software, AI, automation, and digital growth by UpForge',
    path,
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'UpForge',
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  email: 'info@upforge.us',
  telephone: '+92-304-1769292',
  areaServed: ['US', 'GB', 'PK', 'Worldwide'],
  sameAs: ['https://www.linkedin.com/company/up-forge/'],
  description:
    'Technology agency delivering web, mobile, AI, automation, SEO, and cloud solutions for startups and enterprises',
  priceRange: '$$',
}
