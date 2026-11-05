// Importa los textos de https://flowlift.co/ (español e inglés) como estructura JSON, sin retocar ni una palabra.
// Uso: node scripts/import-site.mjs <carpeta-de-salida>
// Cada página queda como "outline": un árbol de encabezados con bloques (p, ul, ol, note, table, text).
// Los acordeones se abren antes de leer, para incluir las respuestas.
import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync } from 'node:fs'
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

const OUT = process.argv[2]
if (!OUT) { console.error('Uso: node scripts/import-site.mjs <carpeta-de-salida>'); process.exit(1) }
const PAGES = [
  { key: 'funciones', es: '/funciones', en: '/features' },
  { key: 'precios', es: '/precios', en: '/products' },
  { key: 'faq', es: '/preguntas-frecuentes', en: '/faq' },
  { key: 'ayuda', es: '/ayuda', en: '/help' },
  { key: 'nosotros', es: '/nosotros', en: '/about' },
  { key: 'privacidad', es: '/politica-de-privacidad', en: '/privacy-policy' },
  { key: 'terminos', es: '/terminos-y-condiciones', en: '/terms-and-conditions' },
]

// Se ejecuta dentro de la página.
function extract() {
  const SKIP = 'header, footer, nav, aside, script, style, svg, noscript'
  const ALLOWED = { STRONG: 'strong', B: 'strong', EM: 'em', I: 'em', A: 'a', BR: 'br', CODE: 'code' }
  const inline = (node) => {
    let out = ''
    for (const n of node.childNodes) {
      if (n.nodeType === 3) { out += n.textContent.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]); continue }
      if (n.nodeType !== 1) continue
      if (n.matches('svg, script, style')) continue
      const tag = ALLOWED[n.tagName]
      const inner = inline(n)
      if (!tag) { out += inner; continue }
      if (tag === 'br') { out += '<br>'; continue }
      if (tag === 'a') {
        const href = n.getAttribute('href') || ''
        if (!href) { out += inner; continue }
        out += `<a href="${href.replace(/"/g, '&quot;')}">${inner}</a>`; continue
      }
      out += `<${tag}>${inner}</${tag}>`
    }
    return out.replace(/\s+/g, ' ').trim()
  }
  const hasBlockChild = (el) => [...el.children].some((c) => c.matches('p, ul, ol, table, blockquote, h1, h2, h3, h4, h5, h6, div, section, article'))
  const root = document.querySelector('main') || document.body
  const events = []
  const walk = (el) => {
    if (el.matches?.(SKIP)) return
    if (el.hidden) return
    const t = el.tagName
    if (/^H[1-6]$/.test(t)) { const h = inline(el); if (h) events.push({ t: 'h', level: +t[1], h, id: el.id || undefined }); return }
    if (t === 'P') { const h = inline(el); if (h) events.push({ t: 'p', h, strong: parseInt(getComputedStyle(el).fontWeight) >= 600 }); return }
    if (t === 'UL' || t === 'OL') { const items = [...el.children].filter((c) => c.tagName === 'LI').map(inline).filter(Boolean); if (items.length) events.push({ t: t.toLowerCase(), items }); return }
    if (t === 'BLOCKQUOTE') { const h = inline(el); if (h) events.push({ t: 'note', h }); return }
    if (t === 'TABLE') {
      const rows = [...el.querySelectorAll('tr')].map((tr) => [...tr.children].map((c) => inline(c) || (c.querySelector('svg') ? '✓' : '')))
      events.push({ t: 'table', rows }); return
    }
    if (el.id && /^(section-|article-)/.test(el.id)) events.push({ t: 'anchor', id: el.id })
    if (el.children.length === 0 || !hasBlockChild(el)) {
      const h = inline(el)
      if (h && !el.matches('button, input, select, textarea')) events.push({ t: 'text', h })
      else if (h && el.matches('button') && el.getAttribute('aria-expanded') !== null) events.push({ t: 'text', h, button: true })
      return
    }
    for (const c of el.children) walk(c)
  }
  walk(root)
  // Árbol por encabezados
  const top = { level: 0, title: '', blocks: [], children: [] }
  const stack = [top]
  let pendingId
  for (const e of events) {
    if (e.t === 'anchor') { pendingId = e.id; continue }
    if (e.t === 'h') {
      while (stack.at(-1).level >= e.level) stack.pop()
      const node = { level: e.level, title: e.h, id: pendingId || e.id, blocks: [], children: [] }
      pendingId = undefined
      stack.at(-1).children.push(node); stack.push(node)
    } else stack.at(-1).blocks.push(e)
  }
  return { title: document.title, description: document.querySelector('meta[name=description]')?.content || '', lang: document.documentElement.lang, outline: top }
}

const browser = await chromium.launch()
mkdirSync(OUT, { recursive: true })
for (const lang of ['es', 'en']) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: lang === 'es' ? 'es-MX' : 'en-US' })
  await ctx.addInitScript((l) => localStorage.setItem('flowlift-language', l), lang)
  ctx.setDefaultTimeout(10000)
  mkdirSync(`${OUT}/${lang}`, { recursive: true })
  for (const pg of PAGES) {
    const p = await ctx.newPage()
    await p.goto('https://flowlift.co' + pg[lang], { waitUntil: 'networkidle' })
    await p.waitForTimeout(800)
    // abrir acordeones (preguntas) para que sus respuestas estén en el DOM
    await p.evaluate(() => new Promise((res) => { document.querySelectorAll('button[aria-expanded="false"]').forEach((b) => b.click()); setTimeout(res, 800) }))
    const data = await p.evaluate(extract)
    writeFileSync(`${OUT}/${lang}/${pg.key}.json`, JSON.stringify(data, null, 1))
    const count = (n) => n.blocks.length + n.children.reduce((a, c) => a + count(c), 0)
    console.log(lang, pg.key.padEnd(11), data.outline.children.length, 'raíces,', count(data.outline), 'bloques')
    await p.close()
  }
  await ctx.close()
}
await browser.close()
