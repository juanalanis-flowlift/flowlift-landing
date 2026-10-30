// Verifica el celular fijo de Funciones en modo timeline (CSS) y en modo IntersectionObserver (respaldo).
// Uso: node scripts/tour-test.mjs
import { createRequire } from 'node:module'
const { chromium } = createRequire(import.meta.url)('playwright')
const b = await chromium.launch()
for (const mode of ['timeline', 'io']) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } })
  const p = await ctx.newPage()
  if (mode === 'io') await p.addInitScript(() => { const o = CSS.supports.bind(CSS); CSS.supports = (...a) => (String(a[0]).includes('timeline') ? false : o(...a)) })
  await p.goto('http://127.0.0.1:5173/citas', { waitUntil: 'networkidle' })
  const top = await p.evaluate(() => document.querySelector('#funciones').getBoundingClientRect().top + scrollY)
  const attr = await p.evaluate(() => document.querySelector('.tour').dataset.mode)
  const seen = []
  for (const k of [0, 2, 3, 5, 7]) {
    const y = await p.evaluate((i) => { const a = document.querySelectorAll('.feat')[i]; return a.getBoundingClientRect().top + scrollY - (innerHeight - a.offsetHeight) / 2 }, k)
    await p.evaluate((v) => scrollTo(0, v), y); await p.waitForTimeout(700)
    const vis = await p.evaluate(() => [...document.querySelectorAll('.tour-ph .phone-in > *')].map((el) => +getComputedStyle(el).opacity).map((o, i) => (o > 0.5 ? i : -1)).filter((i) => i >= 0))
    seen.push(`feat ${k} → pantalla visible ${JSON.stringify(vis)}`)
    if (k === 3) await p.screenshot({ path: `screenshots/fase3-tour-${mode}.png` })
  }
  console.log(mode, '(data-mode=' + attr + ')', seen.join(' | '))
  await ctx.close()
}
await b.close()
