// Registro de páginas: cada página tiene su URL en español (raíz) y en inglés (/en/...).
// Las URLs en español son las que ya existen en flowlift.co; las de inglés llevan prefijo /en.
import redirects from '../../server/redirects.json'

export type Lang = 'es' | 'en'
export const LANGS: Lang[] = ['es', 'en']

export const PAGES = {
  home: { es: '/', en: '/en' },
  citas: { es: '/citas', en: '/en/appointments' },
  funciones: { es: '/funciones', en: '/en/features' },
  precios: { es: '/precios', en: '/en/pricing' },
  faq: { es: '/preguntas-frecuentes', en: '/en/faq' },
  ayuda: { es: '/ayuda', en: '/en/help' },
  nosotros: { es: '/nosotros', en: '/en/about' },
  privacidad: { es: '/politica-de-privacidad', en: '/en/privacy-policy' },
  terminos: { es: '/terminos-y-condiciones', en: '/en/terms-and-conditions' },
} as const
export type PageKey = keyof typeof PAGES

// URLs que existían en flowlift.co (inglés sin prefijo y alias) → su nueva dirección. Se redirigen con 301.
// La lista vive en server/redirects.json para que la use también el servidor.
export const REDIRECTS: Record<string, string> = redirects

export const path = (key: PageKey, lang: Lang) => PAGES[key][lang]

export function langOf(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

/** Página a la que corresponde una ruta (en cualquier idioma), o undefined. */
export function pageOf(pathname: string): PageKey | undefined {
  const p = norm(pathname)
  return (Object.keys(PAGES) as PageKey[]).find((k) => PAGES[k].es === p || PAGES[k].en === p)
}

/** Convierte un href escrito en español ("/citas#flujo") a la URL del idioma pedido. Lo demás queda igual. */
export function localize(href: string, lang: Lang): string {
  if (lang === 'es' || !href.startsWith('/') || href.startsWith('//')) return href
  const m = /^([^#?]*)(.*)$/.exec(href)!
  const key = pageOf(m[1])
  return key ? PAGES[key].en + m[2] : href
}

/** La misma página en el otro idioma (para el selector ES / EN). */
export function counterpart(pathname: string, to: Lang): string {
  const key = pageOf(pathname)
  return key ? PAGES[key][to] : PAGES.home[to]
}
