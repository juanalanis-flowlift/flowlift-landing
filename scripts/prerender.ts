// Después de `vite build`: abre cada ruta en Chromium y guarda su HTML ya renderizado
// (con <title>, descripción, canonical y Open Graph) para que WhatsApp, que no ejecuta JavaScript, los vea.
// Salida: dist/index.html, dist/citas/index.html y dist/404.html
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { preview } from 'vite'
import { launch } from './lib-browser'

import { PAGES, LANGS } from '../src/i18n/routes'
import { SITE_URL } from '../src/config'

// Cada página en cada idioma → su carpeta con index.html; más la 404.
const ROUTES = [
  ...(Object.values(PAGES) as { es: string; en: string }[]).flatMap((p) => LANGS.map((l) => ({ url: p[l], out: (p[l] === '/' ? '' : p[l].slice(1) + '/') + 'index.html' }))),
  { url: '/no-existe', out: '404.html' },
]

// URLs de los archivos de fuente (subconjunto latin) que usa el CSS de Google Fonts de index.html,
// para precargarlas desde el HTML y que el cambio de fuente no mueva el layout.
const fontsHref = /href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)"/.exec(readFileSync('dist/index.html', 'utf8'))?.[1].replace(/&amp;/g, '&')
const server = await preview({ preview: { port: 4180, strictPort: true, host: '127.0.0.1' } })
const browser = await launch()
let fontPreloads = ''
let fontFaces = ''
if (fontsHref) {
  const p0 = await browser.newPage()
  await p0.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded' })
  const css: string = await p0.evaluate(async (u) => (await fetch(u)).text(), fontsHref)
  await p0.close()
  const urls = [...css.matchAll(/\/\* latin \*\/\s*@font-face\s*{([^}]*)}/g)]
    .map((m) => ({ family: /font-family:\s*'([^']+)'/.exec(m[1])?.[1], style: /font-style:\s*(\w+)/.exec(m[1])?.[1], url: /url\(([^)]+\.woff2)\)/.exec(m[1])?.[1] }))
    // DM Sans cursiva no se usa arriba del pliegue
    .filter((f) => f.url && !(f.family === 'DM Sans' && f.style === 'italic'))
  // @font-face del subconjunto latin, en línea: el navegador descubre y descarga las fuentes sin esperar el CSS de Google
  fontFaces = '<style data-fonts-inline>' + [...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*{[^}]*})/g)].map((m) => m[1].replace(/\s+/g, ' ')).join('') + '</style>'
  fontPreloads = urls.map((f) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="${f.url}">`).join('')
  console.log('fuentes precargadas:', urls.map((f) => `${f.family} ${f.style}`).join(', '))
}
const outputs: { file: string; html: string }[] = []
for (const r of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  await page.goto('http://127.0.0.1:4180' + r.url, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const origin = 'http://127.0.0.1:4180'
  // Vite agrega links absolutos (con el host del prerender) para el chunk diferido; se vuelven relativos
  const html = ('<!doctype html>\n' + (await page.evaluate(() => {
    // el onload del link de fuentes lo dejó en media="all"; se restaura para que el HTML siga sin bloquear el render
    const f = document.querySelector<HTMLLinkElement>('link[data-fonts]')
    if (f) f.media = 'print'
    return document.documentElement.outerHTML
  }))).replaceAll(origin, '')
  const extra = (r.out === '404.html' ? '' : fontPreloads + fontFaces)
  const out = extra ? html.replace('</head>', extra + '</head>') : html
  const file = resolve('dist', r.out)
  outputs.push({ file, html: out })
  console.log('prerender', r.url, '→', r.out, `(${(html.length / 1024).toFixed(0)} KB)`)
  await page.close()
}
// Se escribe al final: si no, la ruta siguiente cargaría el HTML ya prerenderizado de la anterior.
for (const o of outputs) { mkdirSync(resolve(o.file, '..'), { recursive: true }); writeFileSync(o.file, o.html) }
// sitemap.xml con alternos de idioma (hreflang)
const urlTag = (key: keyof typeof PAGES) => {
  const alt = (l: string, href: string) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${href}"/>`
  return LANGS.map((l) => `  <url><loc>${SITE_URL}${PAGES[key][l]}</loc>${alt('es-MX', PAGES[key].es)}${alt('en', PAGES[key].en)}${alt('x-default', PAGES[key].es)}</url>`).join('\n')
}
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${(Object.keys(PAGES) as (keyof typeof PAGES)[]).map(urlTag).join('\n')}\n</urlset>\n`)
console.log('sitemap.xml:', Object.keys(PAGES).length * LANGS.length, 'URLs')
await browser.close()
await server.close()
