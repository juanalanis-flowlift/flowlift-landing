import { SITE_URL } from '../config'
import { PAGES, path, type Lang, type PageKey } from '../i18n/routes'
import { CITAS } from './citas'
import { HOME } from './home'
import { PAGE_META } from './pages-meta'

export type Meta = { title: string; description: string; ogImage: string; ogAlt: string }

const OG: Partial<Record<PageKey, string>> = { home: 'home', citas: 'citas' }

export function metaFor(key: PageKey, lang: Lang): Meta {
  const src = key === 'home' ? HOME[lang].meta : key === 'citas' ? CITAS[lang].meta : PAGE_META[key][lang]
  const base = OG[key] ?? 'home'
  return { title: src.title, description: src.description, ogAlt: src.ogAlt, ogImage: `/og/${base}${lang === 'en' ? '-en' : ''}.png` }
}

export const absolute = (p: string) => SITE_URL + p
export const urlOf = (key: PageKey, lang: Lang) => absolute(path(key, lang))
export const ALL_PAGES = Object.keys(PAGES) as PageKey[]
