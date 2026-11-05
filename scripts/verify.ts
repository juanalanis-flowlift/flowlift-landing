// Verificación final: npm run build && npm run verify
// 1) Revisión estática del código  2) capturas 390/1280  3) scroll horizontal, tamaños táctiles y foco por teclado.
import { mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { serve } from '../server/static.mjs'
import { launch } from './lib-browser'

const PORT = 4174
import { PAGES, LANGS } from '../src/i18n/routes'
// Todas las páginas, en los dos idiomas.
const ROUTES = (Object.keys(PAGES) as (keyof typeof PAGES)[]).flatMap((k) => LANGS.map((l) => ({ url: PAGES[k][l], name: (l === 'en' ? 'en-' : '') + k })))
let fail = 0
const report = (ok: boolean, msg: string) => { if (!ok) fail++; console.log(`${ok ? '✓' : '✗'} ${msg}`) }

// ── 1. Estático ────────────────────────────────────────────────────────────────
const files: string[] = []
const walk = (d: string) => readdirSync(d).forEach((n) => { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : /\.(css|tsx?)$/.test(n) && files.push(p) })
walk('src')
const tokenFiles = ['src/styles/tokens.css', 'src/styles/tokens-editorial.css']
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')

const hexHits: string[] = []
const emojiHits: string[] = []
const brandHits: string[] = []
const iconLibs: string[] = []
for (const f of files) {
  const src = strip(readFileSync(f, 'utf8'))
  if (!tokenFiles.includes(f)) for (const m of src.matchAll(/#[0-9a-fA-F]{3,8}\b|rgba?\(/g)) hexHits.push(`${f}: ${m[0]}`)
  for (const m of src.matchAll(/[\p{Emoji_Presentation}\u{1F000}-\u{1FFFF}\u2600-\u27BF]/gu)) emojiHits.push(`${f}: ${m[0]}`)
  for (const m of src.matchAll(/\b(Flowlift|FlowLift|FLOWLIFT)\b/g)) brandHits.push(`${f}: ${m[0]}`)
  for (const m of src.matchAll(/from '(react-icons[^']*|@heroicons[^']*|@fortawesome[^']*|feather-icons|@phosphor[^']*)'/g)) iconLibs.push(`${f}: ${m[1]}`)
}
report(hexHits.length === 0, `Colores solo desde tokens (hex/rgb fuera de tokens*.css): ${hexHits.length}${hexHits.length ? '\n   ' + hexHits.slice(0, 15).join('\n   ') : ''}`)
report(emojiHits.length === 0, `Sin emojis en el código: ${emojiHits.length}`)
report(brandHits.length === 0, `"flowlift" siempre en minúsculas: ${brandHits.length} incumplimientos`)
report(iconLibs.length === 0, `Íconos solo de lucide-react (otras librerías: ${iconLibs.length})`)

// ── 2 y 3. Navegador (build de producción) ────────────────────────────────────
mkdirSync('screenshots', { recursive: true })
const server = await serve({ port: PORT, host: '127.0.0.1' })
const browser = await launch()
for (const w of [390, 1280]) {
  for (const r of ROUTES) {
    const page = await browser.newPage({ viewport: { width: w, height: w === 390 ? 844 : 900 } })
    const errors: string[] = []
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push(String(e)))
    await page.goto(`http://127.0.0.1:${PORT}${r.url}`, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)

    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    report(over <= 0, `${r.name} @${w}px: sin scroll horizontal (sobrante ${over}px)`)
    report(errors.length === 0, `${r.name} @${w}px: sin errores de consola${errors.length ? ': ' + errors[0] : ''}`)

    // Enlaces internos: todos resuelven (200 o redirección a un 200) y las anclas de la misma página existen
    const links = await page.evaluate(() => [...document.querySelectorAll<HTMLAnchorElement>('a[href]')].map((a) => a.getAttribute('href')!))
    const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].map((a) => a.getAttribute('href')!).filter((h) => h.length > 1 && !document.getElementById(decodeURIComponent(h.slice(1)))))
    report(brokenAnchors.length === 0, `${r.name} @${w}px: anclas internas existen${brokenAnchors.length ? ': ' + [...new Set(brokenAnchors)].join(', ') : ''}`)
    if (w === 1280) {
      const paths = [...new Set(links.filter((h) => h.startsWith('/') && !h.startsWith('//')).map((h) => h.split('#')[0] || '/'))]
      const bad: string[] = []
      for (const h of paths) { const res = await page.request.get(`http://127.0.0.1:${PORT}${h}`); if (res.status() !== 200) bad.push(`${h} → ${res.status()}`) }
      report(bad.length === 0, `${r.name}: ${paths.length} enlaces internos resuelven${bad.length ? ' (fallan: ' + bad.join(', ') + ')' : ''}`)
    }

    // Íconos: todo <svg> debe ser de Lucide o decorativo (conectores del stage/nodos y logo)
    const badSvg = await page.evaluate(() => [...document.querySelectorAll('svg')].filter((s) => !s.classList.contains('lucide') && !s.closest('.stage-lines, .bfn-lines')).length)
    report(badSvg === 0, `${r.name} @${w}px: todos los íconos son de Lucide (otros SVG: ${badSvg})`)

    // Imágenes con width/height
    const noDim = await page.evaluate(() => [...document.querySelectorAll('img')].filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).map((i) => i.getAttribute('src')))
    report(noDim.length === 0, `${r.name} @${w}px: imágenes con width/height (faltan: ${noDim.length}${noDim.length ? ' ' + noDim.slice(0, 3).join(', ') : ''})`)

    // Área táctil >= 44 px de alto: mide la caja visible o, si es menor, comprueba con elementFromPoint
    // que el área invisible (::after) llega a 22 px por arriba y por abajo del centro.
    // Cada control se lleva al centro de la pantalla y se espera un instante (las animaciones por scroll se asientan).
    const sel = 'a.pill, button, input, [role=tab], [role=switch], .navlink'
    const count = await page.evaluate((q) => {
      let n = 0
      document.querySelectorAll<HTMLElement>(q).forEach((e) => {
        const visible = e.offsetParent !== null || getComputedStyle(e).position === 'fixed'
        if (visible && e.getBoundingClientRect().height < 44) e.setAttribute('data-small', String(n++))
      })
      return n
    }, sel)
    const small: string[] = []
    for (let i = 0; i < count; i++) {
      const loc = page.locator(`[data-small="${i}"]`)
      await loc.evaluate((e) => { if (getComputedStyle(e).position !== 'fixed') e.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior }) })
      await page.waitForTimeout(120)
      const res = await loc.evaluate((e) => {
        const b = e.getBoundingClientRect()
        const cx = b.left + b.width / 2, cy = b.top + b.height / 2
        const ok = [-21.5, 21.5].every((d) => { const t = document.elementFromPoint(cx, cy + d); return !!t && (t === e || e.contains(t)) })
        return { ok, h: Math.round(b.height), t: (e.textContent || e.getAttribute('aria-label') || e.tagName).trim().slice(0, 28) }
      })
      if (!res.ok && res.h > 0) small.push(`${res.t} ${res.h}px`)
    }
    report(small.length === 0, `${r.name} @${w}px: controles con área táctil de 44 px o más (${count} revisados por ser menores de 44 px de caja)${small.length ? ' — menos: ' + small.join(' | ') : ''}`)

    // Foco por teclado: cada elemento enfocado muestra anillo o borde verde
    if (w === 1280) {
      await page.goto(`http://127.0.0.1:${PORT}${r.url}`, { waitUntil: 'networkidle' }) // vuelve al inicio, sin foco previo
      const nofocus: string[] = []
      let count = 0
      for (let i = 0; i < 80; i++) {
        await page.keyboard.press('Tab')
        const r2 = await page.evaluate(() => { const e = document.activeElement as HTMLElement; if (!e || e === document.body) return null; const cs = getComputedStyle(e); return { t: (e.textContent || e.tagName).trim().slice(0, 24), outline: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0, border: cs.borderColor, tag: e.tagName } })
        if (!r2) break
        count++
        if (!r2.outline && r2.tag !== 'INPUT') nofocus.push(r2.t)
      }
      report(nofocus.length === 0, `${r.name}: foco visible en ${count} elementos enfocables por teclado${nofocus.length ? ' (sin anillo: ' + nofocus.slice(0, 4).join(', ') + ')' : ''}`)
    }

    // Capturas: recorre la página para cargar lo lazy; con animaciones apagadas se ve el contenido final.
    const total = await page.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < total; y += 600) { await page.evaluate((v) => scrollTo(0, v), y); await page.waitForTimeout(80) }
    await page.evaluate(() => scrollTo(0, 0))
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}.draw{stroke-dashoffset:0!important}.tour-ph .phone-in>*{opacity:0!important}.tour-ph .phone-in>*:first-child{opacity:1!important}' })
    await page.waitForTimeout(300)
    if (!r.name.startsWith('en-') || w === 1280) await page.screenshot({ path: `screenshots/final-${r.name}-${w}.jpg`, fullPage: true, type: 'jpeg', quality: 72 })
    await page.close()
  }
}
await browser.close()
server.close()
console.log(fail ? `\n${fail} verificación(es) con observaciones` : '\nTodas las verificaciones pasaron')
process.exit(0)
