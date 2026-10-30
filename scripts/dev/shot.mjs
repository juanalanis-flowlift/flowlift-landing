// Uso: node scripts/shot.mjs <ruta> <salida.png> <ancho> [alto] [--static] [--scroll=Y]
//  --static: apaga animaciones (equivale a un navegador sin soporte): se ve todo el contenido final.
//  --scroll=Y: captura solo la ventana, ya desplazada a Y px, con las animaciones por scroll activas.
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')
const args = process.argv.slice(2)
const flags = args.filter((a) => a.startsWith('--'))
const [route, out, w, h = '900'] = args.filter((a) => !a.startsWith('--'))
const scrollArg = flags.find((f) => f.startsWith('--scroll='))
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: +w, height: +h } })
const errors = []
p.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
p.on('pageerror', (e) => errors.push(String(e)))
await p.goto('http://127.0.0.1:5173' + route, { waitUntil: 'networkidle' })
await p.evaluate(() => document.fonts.ready)
if (flags.includes('--static')) await p.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}.draw{stroke-dashoffset:0!important}' })
// Recorre la página para que carguen las imágenes lazy antes de capturar.
if (!scrollArg) {
  const total = await p.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < total; y += +h * 0.8) { await p.evaluate((v) => window.scrollTo(0, v), y); await p.waitForTimeout(120) }
  await p.evaluate(() => window.scrollTo(0, 0))
  await p.waitForLoadState('networkidle')
}
if (scrollArg) {
  await p.evaluate((y) => window.scrollTo(0, y), +scrollArg.split('=')[1])
  await p.waitForTimeout(1500)
}
const sliceArg = flags.find((f) => f.startsWith('--slices='))
if (sliceArg && !scrollArg) {
  const sh = +sliceArg.split('=')[1]
  const total = await p.evaluate(() => document.documentElement.scrollHeight)
  for (let i = 0, y = 0; y < total; i++, y += sh) {
    await p.screenshot({ path: out.replace('.png', `-${String(i + 1).padStart(2, '0')}.png`), fullPage: true, clip: { x: 0, y, width: +w, height: Math.min(sh, total - y) } })
  }
} else {
  await p.screenshot({ path: out, fullPage: !scrollArg })
}
const m = await p.evaluate(() => ({
  overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  height: document.documentElement.scrollHeight,
  serif: document.fonts.check("40px 'DM Serif Display'"),
}))
console.log(JSON.stringify({ out, ...m, errors }))
await b.close()
