import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_OG_IMAGE, SITE_URL, getSeoForPath, organizationJsonLd } from '../seo/siteSeo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)
    const url = seo.path === '/' ? SITE_URL : `${SITE_URL}${seo.path}`

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', seo.noindex ? 'noindex,nofollow' : 'index,follow')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:site_name', 'UpForge')
    upsertMeta('property', 'og:type', seo.ogType ?? 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)

    if (pathname === '/' || pathname === '') {
      upsertJsonLd('upforge-org-jsonld', organizationJsonLd)
    }
  }, [pathname])

  return null
}
