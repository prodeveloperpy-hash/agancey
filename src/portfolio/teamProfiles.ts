import type { PortfolioShowcaseProject } from './fiazShowcaseProjects'
import { portfolioShowcaseProjects } from './fiazShowcaseProjects'
import * as fiaz from './fiazProfileData'
import type { AboutFocusIcon } from './fiazProfileData'

export type TeamContact = {
  email: string
  phone: string
  phoneTel: string
  whatsapp: string
  github?: string
  upforge: string
  fiverr?: string
  upwork?: string
}

export type TeamPortfolioProfile = {
  id: string
  fullName: string
  documentTitle: string
  portraitAlt: string
  profilePhoto: string
  profilePhotoHero: string
  asset: (path: string) => string
  contact: TeamContact
  heroRoles: string[]
  heroLead: string
  hireLinks: { label: string; url: string; tone: 'fiverr' | 'upwork' | 'upforge' }[]
  aboutIntro: string
  aboutFocus: { title: string; text: string; icon: AboutFocusIcon }[]
  heroQuickStats: { value: string; label: string }[]
  navItems: { id: string; label: string }[]
  experience: typeof fiaz.experience
  demos: typeof fiaz.demos
  privateCapabilities: string[]
  education: { lines: string[] }
  showcaseProjects: PortfolioShowcaseProject[]
  companiesStrip: string
  footerTagline: string
}

export const fiazProfile: TeamPortfolioProfile = {
  id: 'fiaz',
  fullName: 'Fiaz Hussain',
  documentTitle: 'Fiaz Hussain | Solution Architect & Full-Stack Developer',
  portraitAlt: 'Fiaz Hussain, Solution Architect and Full-Stack Developer',
  profilePhoto: fiaz.profilePhoto,
  profilePhotoHero: fiaz.profilePhotoHero,
  asset: fiaz.asset,
  contact: fiaz.contact,
  heroRoles: fiaz.heroRoles,
  heroLead:
    '6+ years delivering web and mobile products, AI systems, CRM integrations, and automation from architecture to production support',
  hireLinks: fiaz.hireLinks,
  aboutIntro: fiaz.aboutIntro,
  aboutFocus: fiaz.aboutFocus,
  heroQuickStats: fiaz.heroQuickStats,
  navItems: fiaz.navItems,
  experience: fiaz.experience,
  demos: fiaz.demos,
  privateCapabilities: fiaz.privateCapabilities,
  education: {
    lines: [
      'B.Sc. Computer Science — GCUL Pakistan (2018)',
      'M.Sc. Computer Science — GCUL Pakistan (2021)',
      'Microsoft Data Scientist Certification (2022)',
    ],
  },
  showcaseProjects: portfolioShowcaseProjects,
  companiesStrip: fiaz.asset('companies-showcase.svg'),
  footerTagline: 'architecture, engineering, automation, data, and AI',
}

const sharedShowcase = portfolioShowcaseProjects

function teammateBase(
  id: string,
  fullName: string,
  photoBase: string,
  email: string,
): TeamPortfolioProfile {
  return {
    id,
    fullName,
    documentTitle: `${fullName} | Full-Stack Engineer · UpForge`,
    portraitAlt: `${fullName}, software engineer at UpForge`,
    profilePhoto: `${photoBase}/profile.svg`,
    profilePhotoHero: `${photoBase}/profile-hero.svg`,
    asset: (path) => `${photoBase}/assets/${path}`,
    contact: {
      email,
      phone: fiaz.contact.phone,
      phoneTel: fiaz.contact.phoneTel,
      whatsapp: fiaz.contact.whatsapp,
      github: fiaz.contact.github,
      upforge: fiaz.contact.upforge,
      fiverr: fiaz.contact.fiverr,
      upwork: fiaz.contact.upwork,
    },
    heroRoles: [
      'Full-Stack Engineer',
      'React & Python Developer',
      'API & Integration Specialist',
      'Cloud & DevOps Contributor',
    ],
    heroLead:
      'Building web apps, APIs, and integrations with the UpForge team for clients in the US, UK, and worldwide',
    hireLinks: fiaz.hireLinks,
    aboutIntro:
      'Engineer focused on reliable web products, clean APIs, and delivery with the UpForge software team',
    aboutFocus: fiaz.aboutFocus,
    heroQuickStats: [
      { value: '20+', label: 'Products shipped' },
      { value: 'Remote', label: 'Global clients' },
      { value: 'UpForge', label: 'Core team' },
    ],
    navItems: fiaz.navItems,
    experience: [
      {
        role: 'Full-Stack Engineer',
        company: 'UpForge',
        period: 'Present · full-time',
        points: [
          'React, Python, and Django delivery for client web and SaaS products',
          'API design, third-party integrations, and production deployments',
        ],
        achievement: 'Shipped production features across agency and product builds',
      },
    ],
    demos: fiaz.demos,
    privateCapabilities: fiaz.privateCapabilities,
    education: { lines: ['B.Sc. Computer Science (placeholder — update with final details)'] },
    showcaseProjects: sharedShowcase,
    companiesStrip: '/Fiazhussain/assets/companies-showcase.svg',
    footerTagline: 'software engineering · UpForge team',
  }
}

const upforgeInbox = 'info@upforge.us'

export const asadProfile = teammateBase('asad', 'Asad', '/Asad', upforgeInbox)

export const arslanProfile: TeamPortfolioProfile = {
  ...teammateBase('arslan', 'Arslan', '/Arslan', upforgeInbox),
  profilePhoto: '/Arslan/arslan-profile.jpg',
  profilePhotoHero: '/Arslan/arslan-profile-hero.jpg',
}