import { useRef } from 'react'
import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import { useInView } from 'motion/react'
import highlevelMark from '../assets/highlevel-mark.png'
import { FaAws, FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaMicrosoft, FaYoutube } from 'react-icons/fa6'
import { TbBrandOpenai } from 'react-icons/tb'
import {
  SiAndroid, SiAnthropic, SiApacheairflow, SiApple, SiCelery, SiCloudflare, SiDialogflow, SiDjango, SiDocker,
  SiElementor, SiFastapi, SiFigma, SiFirebase, SiFlask, SiFlutter, SiFramer, SiGithub,
  SiGmail, SiGoogle, SiGoogleads, SiGoogleanalytics, SiGooglebigquery, SiGooglecalendar, SiGooglecloud, SiGoogledrive,
  SiGooglegemini, SiGooglemaps, SiGooglesearchconsole, SiGooglesheets, SiGoogletagmanager, SiGraphql, SiHubspot,
  SiJupyter, SiJsonwebtokens, SiKotlin, SiKubernetes, SiLangchain, SiLooker, SiMailchimp, SiMake,
  SiMongodb, SiMysql, SiN8N, SiNextdotjs, SiNodedotjs, SiPandas, SiRabbitmq, SiRasa,
  SiPhp, SiPostgresql, SiPytorch, SiPython, SiReact, SiRedis, SiScikitlearn,
  SiPostman, SiScrapy, SiSelenium, SiSemrush, SiSketch, SiSnowflake, SiStreamlit, SiStripe, SiSupabase, SiSwagger, SiSwift, SiTelegram, SiTensorflow,
  SiTypescript, SiVercel, SiWhatsapp, SiWoocommerce, SiWordpress, SiYoutube, SiYoast, SiZapier, SiHuggingface,
} from 'react-icons/si'

export type BrandTool = { name:string; Icon?:IconType; image?:string; color:string }

const tool = (name:string, Icon:IconType, color:string): BrandTool => ({ name, Icon, color })
const highlevelTool: BrandTool = { name:'HighLevel', image:highlevelMark, color:'#2896fb' }

export const serviceTools: Record<string, BrandTool[]> = {
  'solution-architecture': [
    tool('AWS',FaAws,'#ff9900'), tool('Google Cloud',SiGooglecloud,'#4285f4'), tool('Docker',SiDocker,'#2496ed'), tool('Kubernetes',SiKubernetes,'#326ce5'),
    tool('GitHub',SiGithub,'#181717'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('MongoDB',SiMongodb,'#47a248'), tool('Redis',SiRedis,'#dc382d'),
  ],
  'full-stack-development': [
    tool('React',SiReact,'#087ea4'), tool('Next.js',SiNextdotjs,'#111111'), tool('Node.js',SiNodedotjs,'#5fa04e'), tool('Python',SiPython,'#3776ab'),
    tool('REST APIs',SiSwagger,'#268400'), tool('GraphQL',SiGraphql,'#e10098'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Cloud deployment',FaAws,'#d97706'),
  ],
  'no-code-automation': [
    highlevelTool, tool('Make',SiMake,'#6d00cc'), tool('Zapier',SiZapier,'#ff4f00'), tool('n8n',SiN8N,'#ea4b71'),
    tool('HubSpot',SiHubspot,'#ff7a59'), tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Google',SiGoogle,'#4285f4'), tool('Mailchimp',SiMailchimp,'#ffe01b'),
  ],
  'wordpress-development': [
    tool('WordPress',SiWordpress,'#21759b'), tool('WooCommerce',SiWoocommerce,'#96588a'), tool('Elementor',SiElementor,'#92003b'), tool('Yoast',SiYoast,'#a4286a'),
    tool('PHP',SiPhp,'#777bb4'), tool('MySQL',SiMysql,'#4479a1'), tool('Cloudflare',SiCloudflare,'#f38020'), tool('Vercel',SiVercel,'#111111'),
  ],
  'graphic-design': [
    tool('Figma',SiFigma,'#f24e1e'), tool('Elementor',SiElementor,'#92003b'), tool('Framer',SiFramer,'#0055ff'), tool('Sketch',SiSketch,'#f7b500'),
    tool('React',SiReact,'#61dafb'), tool('WordPress',SiWordpress,'#21759b'), tool('Google',SiGoogle,'#4285f4'), tool('GitHub',SiGithub,'#181717'),
  ],
  'seo-services': [
    tool('Google',SiGoogle,'#4285f4'), tool('Search Console',SiGooglesearchconsole,'#458cf5'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Semrush',SiSemrush,'#ff642d'),
    tool('Yoast',SiYoast,'#a4286a'), tool('WordPress',SiWordpress,'#21759b'), tool('Cloudflare',SiCloudflare,'#f38020'), tool('HubSpot',SiHubspot,'#ff7a59'),
  ],
  'ui-ux-design': [
    tool('Figma',SiFigma,'#f24e1e'), tool('Framer',SiFramer,'#0055ff'), tool('Sketch',SiSketch,'#f7b500'), tool('Elementor',SiElementor,'#92003b'),
    tool('React',SiReact,'#61dafb'), tool('Flutter',SiFlutter,'#02569b'), tool('GitHub',SiGithub,'#181717'), tool('Vercel',SiVercel,'#111111'),
  ],
  'mobile-development': [
    tool('Flutter',SiFlutter,'#02569b'), tool('Kotlin',SiKotlin,'#7f52ff'), tool('Swift',SiSwift,'#f05138'), tool('Android',SiAndroid,'#3ddc84'),
    tool('Apple',SiApple,'#111111'), tool('Firebase',SiFirebase,'#ffca28'), tool('React',SiReact,'#61dafb'), tool('Supabase',SiSupabase,'#3fcf8e'),
  ],
  'data-ai-engineering': [
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'), tool('Airflow',SiApacheairflow,'#017cee'),
    tool('Snowflake',SiSnowflake,'#29b5e8'), tool('TensorFlow',SiTensorflow,'#ff6f00'), tool('PyTorch',SiPytorch,'#ee4c2c'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'ai-tools-products': [
    tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Gemini',SiGooglegemini,'#8e75b2'), tool('LangChain',SiLangchain,'#1c3c3c'), tool('Python',SiPython,'#3776ab'),
    tool('PyTorch',SiPytorch,'#ee4c2c'), tool('TensorFlow',SiTensorflow,'#ff6f00'), tool('FastAPI',SiFastapi,'#009688'), tool('Supabase',SiSupabase,'#3fcf8e'),
  ],
  'saas-applications': [
    tool('React',SiReact,'#61dafb'), tool('Next.js',SiNextdotjs,'#111111'), tool('Node.js',SiNodedotjs,'#5fa04e'), tool('Stripe',SiStripe,'#635bff'),
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('AWS',FaAws,'#ff9900'), tool('Docker',SiDocker,'#2496ed'), tool('Vercel',SiVercel,'#111111'),
  ],
  'analytics-dashboards': [
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Looker',SiLooker,'#4285f4'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Pandas',SiPandas,'#150458'),
    tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Microsoft BI',FaMicrosoft,'#5e5e5e'), tool('Python',SiPython,'#3776ab'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'data-analysis': [
    tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'), tool('Jupyter',SiJupyter,'#f37626'), tool('scikit-learn',SiScikitlearn,'#f7931e'),
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Looker',SiLooker,'#4285f4'), tool('PostgreSQL',SiPostgresql,'#4169e1'),
  ],
  'paid-advertising': [
    tool('Google Ads',SiGoogleads,'#4285f4'), tool('Meta Ads',FaFacebook,'#0866ff'), tool('LinkedIn Ads',FaLinkedin,'#0a66c2'), tool('Analytics',SiGoogleanalytics,'#e37400'),
    tool('Tag Manager',SiGoogletagmanager,'#246fdb'), tool('HubSpot',SiHubspot,'#ff7a59'), tool('Mailchimp',SiMailchimp,'#ffe01b'), tool('Google',SiGoogle,'#4285f4'),
  ],
  'pixel-tracking': [
    tool('Tag Manager',SiGoogletagmanager,'#246fdb'), tool('Analytics',SiGoogleanalytics,'#e37400'), tool('Meta Pixel',FaFacebook,'#0866ff'), tool('LinkedIn',FaLinkedin,'#0a66c2'),
    tool('Google Ads',SiGoogleads,'#4285f4'), tool('HubSpot',SiHubspot,'#ff7a59'), tool('React',SiReact,'#61dafb'), tool('Next.js',SiNextdotjs,'#111111'),
  ],
  'python-development': [
    tool('Python',SiPython,'#3776ab'), tool('FastAPI',SiFastapi,'#009688'), tool('Django',SiDjango,'#092e20'), tool('Flask',SiFlask,'#111111'),
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Celery',SiCelery,'#37814a'), tool('Redis',SiRedis,'#dc382d'), tool('Docker',SiDocker,'#2496ed'),
  ],
  'web-scraping': [
    tool('Scrapy',SiScrapy,'#60a839'), tool('Selenium',SiSelenium,'#43b02a'), tool('Python',SiPython,'#3776ab'), tool('Pandas',SiPandas,'#150458'),
    tool('MongoDB',SiMongodb,'#47a248'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Docker',SiDocker,'#2496ed'), tool('Airflow',SiApacheairflow,'#017cee'),
  ],
  'django-development': [
    tool('Django',SiDjango,'#092e20'), tool('Python',SiPython,'#3776ab'), tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('Redis',SiRedis,'#dc382d'),
    tool('Celery',SiCelery,'#37814a'), tool('Docker',SiDocker,'#2496ed'), tool('AWS',FaAws,'#ff9900'), tool('Google Cloud',SiGooglecloud,'#4285f4'),
  ],
  'ai-chatbots': [
    tool('OpenAI',TbBrandOpenai,'#10a37f'), tool('Anthropic',SiAnthropic,'#191919'), tool('LangChain',SiLangchain,'#1c3c3c'), tool('Hugging Face',SiHuggingface,'#ffd21e'),
    tool('Dialogflow',SiDialogflow,'#ff9800'), tool('Rasa',SiRasa,'#5a17ee'), tool('WhatsApp',SiWhatsapp,'#25d366'), tool('Telegram',SiTelegram,'#26a5e4'),
  ],
  'flask-development': [
    tool('Flask',SiFlask,'#111111'), tool('Python',SiPython,'#3776ab'), tool('FastAPI',SiFastapi,'#009688'), tool('PostgreSQL',SiPostgresql,'#4169e1'),
    tool('Redis',SiRedis,'#dc382d'), tool('Celery',SiCelery,'#37814a'), tool('Docker',SiDocker,'#2496ed'), tool('GitHub',SiGithub,'#181717'),
  ],
  'selenium-automation': [
    tool('Selenium',SiSelenium,'#43b02a'), tool('Python',SiPython,'#3776ab'), tool('Scrapy',SiScrapy,'#60a839'), tool('Pandas',SiPandas,'#150458'),
    tool('Docker',SiDocker,'#2496ed'), tool('GitHub',SiGithub,'#181717'), tool('Airflow',SiApacheairflow,'#017cee'), tool('Google',SiGoogle,'#4285f4'),
  ],
  'google-api-integration': [
    tool('Google',SiGoogle,'#4285f4'), tool('Google Cloud',SiGooglecloud,'#4285f4'), tool('Google Sheets',SiGooglesheets,'#34a853'), tool('Google Maps',SiGooglemaps,'#4285f4'),
    tool('Gmail',SiGmail,'#ea4335'), tool('Google Drive',SiGoogledrive,'#4285f4'), tool('Google Calendar',SiGooglecalendar,'#4285f4'), tool('BigQuery',SiGooglebigquery,'#669df6'),
  ],
  'api-integration': [
    tool('Postman',SiPostman,'#ff6c37'), tool('Swagger',SiSwagger,'#85ea2d'), tool('GraphQL',SiGraphql,'#e10098'), tool('FastAPI',SiFastapi,'#009688'),
    tool('Node.js',SiNodedotjs,'#5fa04e'), tool('TypeScript',SiTypescript,'#3178c6'), tool('JWT',SiJsonwebtokens,'#111111'), tool('GitHub',SiGithub,'#181717'),
  ],
  'data-management': [
    tool('PostgreSQL',SiPostgresql,'#4169e1'), tool('MySQL',SiMysql,'#4479a1'), tool('MongoDB',SiMongodb,'#47a248'), tool('Redis',SiRedis,'#dc382d'),
    tool('BigQuery',SiGooglebigquery,'#669df6'), tool('Snowflake',SiSnowflake,'#29b5e8'), tool('Pandas',SiPandas,'#150458'), tool('Airflow',SiApacheairflow,'#017cee'),
  ],
  'social-media-api-integration': [
    tool('LinkedIn',FaLinkedin,'#0a66c2'), tool('Facebook',FaFacebook,'#0866ff'), tool('YouTube',SiYoutube,'#ff0000'), tool('Google',SiGoogle,'#4285f4'),
    tool('Postman',SiPostman,'#ff6c37'), tool('Swagger',SiSwagger,'#85ea2d'), tool('Python',SiPython,'#3776ab'), tool('Node.js',SiNodedotjs,'#5fa04e'),
  ],
}

export function BrandMark({ tool }: { tool:BrandTool }) {
  const Icon = tool.Icon
  return tool.image ? <img src={tool.image} alt="" /> : Icon ? <Icon /> : null
}

export function ServiceImageLoop({ slug, title }: { slug:string; title:string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { margin:'100px' })
  const brands = serviceTools[slug] ?? []
  return (
    <div ref={ref} className="service-image-loop" role="region" aria-label={`${title} technology images`}>
      <div className="service-image-window" tabIndex={0} aria-label="Technology images; scroll to explore">
        <div className="service-image-track" style={{ '--loop-duration':`${brands.length * 4}s`, animationPlayState:!visible ? 'paused' : 'running' } as CSSProperties}>
          {[0, 1].map(copy => (
            <div className="service-image-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {brands.map(brand => (
                <figure className="service-image-slide" key={brand.name} style={{ '--brand-color':brand.color } as CSSProperties}>
                  <span className="service-image-mark" aria-hidden="true"><BrandMark tool={brand} /></span>
                  <figcaption>{brand.name}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="service-image-controls">
        <span>{brands.length} technologies</span>
      </div>
    </div>
  )
}

