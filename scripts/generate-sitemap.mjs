import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://upforge.us'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const serviceSlugs = [
  'solution-architecture', 'full-stack-development', 'no-code-automation', 'wordpress-development',
  'graphic-design', 'seo-services', 'ui-ux-design', 'mobile-development', 'data-ai-engineering',
  'ai-tools-products', 'saas-applications', 'analytics-dashboards', 'data-analysis', 'paid-advertising',
  'pixel-tracking', 'python-development', 'web-scraping', 'django-development', 'ai-chatbots',
  'flask-development', 'selenium-automation', 'google-api-integration', 'api-integration',
  'data-management', 'social-media-api-integration',
]

const workSlugs = ['tooli', 'wavehire', 'wavetek', 'winkbooth']

const blogSlugs = [
  'technical-seo-checklist-for-business-websites',
  'full-stack-development-guide-for-growing-companies',
  'ai-automation-where-to-start',
  'wordpress-or-custom-app-how-to-choose',
  'seo-and-google-ads-working-together',
  'django-rest-apis-for-saas-products',
]

const staticPaths = ['/', '/services', '/work', '/about', '/contact', '/blog', '/Fiazhussain']

const urls = [
  ...staticPaths,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...workSlugs.map((s) => `/work/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
]

const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path.startsWith('/blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/services') || path === '/contact' ? '0.9' : '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8')
console.log(`Wrote sitemap.xml (${urls.length} URLs)`)
