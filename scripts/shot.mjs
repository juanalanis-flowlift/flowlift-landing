// Uso: node scripts/shot.mjs <ruta> <salida.png> <ancho> [alto]
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')
const [route, out, w, h = '900'] = process.argv.slice(2)
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: +w, height: +h } })
const errors = []
p.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
p.on('pageerror', (e) => errors.push(String(e)))
await p.goto('http://127.0.0.1:5173' + route, { waitUntil: 'networkidle' })
await p.evaluate(() => document.fonts.ready)
const fonts = await p.evaluate(() => ({ serif: document.fonts.check("40px 'DM Serif Display'"), sans: document.fonts.check("16px 'DM Sans'") }))
await p.screenshot({ path: out, fullPage: true })
const sx = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
console.log(JSON.stringify({ out, fonts, overflowX: sx, errors }))
await b.close()
