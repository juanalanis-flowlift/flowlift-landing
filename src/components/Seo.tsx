import { useEffect } from 'react'
import { absolute, type RouteMeta } from '../content/seo'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

// Actualiza title y meta tags al navegar dentro del SPA. El HTML inicial de cada ruta
// ya sale con estos mismos valores desde el prerender (scripts/prerender.ts).
export default function Seo({ meta }: { meta: RouteMeta }) {
  useEffect(() => {
    document.title = meta.title
    const url = absolute(meta.path === '/404' ? '/' : meta.path)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = url
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', absolute(meta.ogImage))
    setMeta('property', 'og:image:alt', meta.ogAlt)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)
    setMeta('name', 'twitter:image', absolute(meta.ogImage))
    setMeta('name', 'twitter:image:alt', meta.ogAlt)
    setMeta('name', 'robots', meta.path === '/404' ? 'noindex' : 'index,follow')
  }, [meta])
  return null
}
