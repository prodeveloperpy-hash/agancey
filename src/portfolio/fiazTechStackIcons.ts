import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'
import { Webhook } from 'lucide-react'
import {
  SiAirtable,
  SiAngular,
  SiCalendly,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGithub,
  SiGooglecloud,
  SiHubspot,
  SiMake,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiShopify,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
  SiZapier,
} from 'react-icons/si'
import highlevelMark from '../assets/highlevel-mark.png'

export type TechStackIcon = {
  id: string
  label: string
  Icon?: IconType | LucideIcon
  imageSrc?: string
  tint?: string
}

/** skillicons.dev single-icon PNG (dark theme) */
const skill = (name: string) => `https://skillicons.dev/icons?i=${name}&theme=dark`

/** Full stack + automation — one strip in Tech stack section */
export const techStackIcons: TechStackIcon[] = [
  { id: 'python', label: 'Python', Icon: SiPython, tint: '#3776AB' },
  { id: 'javascript', label: 'JavaScript', imageSrc: skill('js') },
  { id: 'typescript', label: 'TypeScript', Icon: SiTypescript, tint: '#3178C6' },
  { id: 'php', label: 'PHP', imageSrc: skill('php') },
  { id: 'react', label: 'React', Icon: SiReact, tint: '#61DAFB' },
  { id: 'nextjs', label: 'Next.js', Icon: SiNextdotjs, tint: '#fff' },
  { id: 'angular', label: 'Angular', Icon: SiAngular, tint: '#DD0031' },
  { id: 'nodejs', label: 'Node.js', Icon: SiNodedotjs, tint: '#339933' },
  { id: 'express', label: 'Express.js', Icon: SiExpress, tint: '#fff' },
  { id: 'django', label: 'Django', Icon: SiDjango, tint: '#092E20' },
  { id: 'fastapi', label: 'FastAPI', Icon: SiFastapi, tint: '#009688' },
  { id: 'vite', label: 'Vite', Icon: SiVite, tint: '#646CFF' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss, tint: '#06B6D4' },
  { id: 'postgres', label: 'PostgreSQL', Icon: SiPostgresql, tint: '#4169E1' },
  { id: 'mongodb', label: 'MongoDB', Icon: SiMongodb, tint: '#47A248' },
  { id: 'mysql', label: 'MySQL', imageSrc: skill('mysql') },
  { id: 'redis', label: 'Redis', Icon: SiRedis, tint: '#DC382D' },
  { id: 'aws', label: 'AWS', imageSrc: skill('aws') },
  { id: 'gcp', label: 'Google Cloud', Icon: SiGooglecloud, tint: '#4285F4' },
  { id: 'docker', label: 'Docker', Icon: SiDocker, tint: '#2496ED' },
  { id: 'github', label: 'GitHub', Icon: SiGithub, tint: '#fff' },
  { id: 'flutter', label: 'Flutter', Icon: SiFlutter, tint: '#02569B' },
  { id: 'wordpress', label: 'WordPress', Icon: SiWordpress, tint: '#21759B' },
  { id: 'openai', label: 'OpenAI / LLMs', imageSrc: skill('openai') },
  { id: 'ghl', label: 'GoHighLevel (GHL)', imageSrc: highlevelMark },
  { id: 'make', label: 'Make.com', Icon: SiMake, tint: '#6D00CC' },
  { id: 'zapier', label: 'Zapier', Icon: SiZapier, tint: '#FF4F00' },
  { id: 'n8n', label: 'n8n', Icon: SiN8N, tint: '#EA4B71' },
  { id: 'hubspot', label: 'HubSpot CRM', Icon: SiHubspot, tint: '#FF7A59' },
  { id: 'webhooks', label: 'Webhooks & APIs', Icon: Webhook, tint: '#22d3ee' },
  { id: 'stripe', label: 'Stripe', Icon: SiStripe, tint: '#635BFF' },
  { id: 'shopify', label: 'Shopify', Icon: SiShopify, tint: '#96BF48' },
  { id: 'airtable', label: 'Airtable', Icon: SiAirtable, tint: '#18BFFF' },
  { id: 'calendly', label: 'Calendly', Icon: SiCalendly, tint: '#006BFF' },
]

export const automationHeroBrands = techStackIcons.filter((b) =>
  ['ghl', 'make', 'zapier', 'n8n', 'hubspot'].includes(b.id),
)
