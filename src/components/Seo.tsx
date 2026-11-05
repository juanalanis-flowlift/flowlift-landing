import { useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import { PAGES, type PageKey } from '../i18n/routes'
import { absolute, metaFor, type Meta } from '../content/seo'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const sel = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ':not([hreflang])'}`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) { el = document.createElement('link'); el.rel = rel; if (hreflang) el.hreflang = hreflang; document.head.appendChild(el) }
  el.href = href
}

// Actualiza title, meta tags y alternos de idioma al navegar dentro del SPA. El HTML inicial de cada ruta
// sale con estos mismos valores desde el prerender (scripts/prerender.ts).
export default function Seo({ page, custom }: { page?: PageKey; custom?: Meta & { noindex?: boolean } }) {
  const lang = useLang()
  useEffect(() => {
    const m: Meta & { noindex?: boolean } = custom ?? metaFor(page!, lang)
    const url = absolute(page ? PAGES[page][lang] : lang === 'en' ? '/en' : '/')
    document.title = m.title
    setLink('canonical', url)
    // alternos de idioma (solo si la página existe en ambos)
    if (page) {
      setLink('alternate', absolute(PAGES[page].es), 'es-MX')
      setLink('alternate', absolute(PAGES[page].en), 'en')
      setLink('alternate', absolute(PAGES[page].es), 'x-default')
    }
    setMeta('name', 'description', m.description)
    setMeta('property', 'og:title', m.title)
    setMeta('property', 'og:description', m.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'es_MX')
    setMeta('property', 'og:image', absolute(m.ogImage))
    setMeta('property', 'og:image:alt', m.ogAlt)
    setMeta('name', 'twitter:title', m.title)
    setMeta('name', 'twitter:description', m.description)
    setMeta('name', 'twitter:image', absolute(m.ogImage))
    setMeta('name', 'twitter:image:alt', m.ogAlt)
    setMeta('name', 'robots', m.noindex ? 'noindex' : 'index,follow')
  }, [page, custom, lang])
  return null
}
