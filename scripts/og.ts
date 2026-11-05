// Genera las imágenes para compartir (1200×630) a partir del diseño de reference-design/Share.dc.html.
// Uso: npm run og   → public/og/home.png y public/og/citas.png
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { launch } from './lib-browser'

type Variant = { file: string; line1: string; line2: string; sub: string; product?: string }

// TODO: confirmar el texto de home.png. Share.dc.html dice "Tu agenda. Bajo control." (texto de Citas);
// para la Home de marca podría ir "Tu negocio. Bajo control."
const VARIANTS: Variant[] = [
  { file: 'home-en', line1: 'Your schedule.', line2: 'Under control.', sub: 'Your clients book on their own from a link. No app, no calls.' },
  { file: 'citas-en', line1: 'Your schedule.', line2: 'Under control.', sub: 'Your clients book on their own from a link. No app, no calls.', product: 'Appointments' },
  { file: 'home', line1: 'Tu agenda.', line2: 'Bajo control.', sub: 'Tus clientes reservan solos desde un link. Sin app, sin llamadas.' },
  { file: 'citas', line1: 'Tu agenda.', line2: 'Bajo control.', sub: 'Tus clientes reservan solos desde un link. Sin app, sin llamadas.', product: 'Citas' },
]

const root = resolve('public')
const asset = (p: string) => pathToFileURL(resolve(root, p.replace(/^\//, ''))).href

const html = (v: Variant) => `<!doctype html><html lang="es-MX"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap">
<link rel="stylesheet" href="${pathToFileURL(resolve('src/styles/tokens.css')).href}">
<style>
body{margin:0}
.og{width:1200px;height:630px;box-sizing:border-box;background:var(--white);position:relative;overflow:hidden;font-family:var(--font-sans);color:var(--ink);display:flex}
.l{flex:1;padding:72px 0 72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:16px}
.brand img{height:40px;width:auto}
.brand span{font-family:var(--font-display);font-style:italic;font-size:34px;color:var(--badge-success-fg)}
.t{display:flex;flex-direction:column;gap:20px}
h1{margin:0;font-family:var(--font-display);font-weight:400;font-size:84px;line-height:1.02;letter-spacing:-1px}
h1 em{color:var(--green-primary-hover)}
p{margin:0;font-size:26px;line-height:1.45;color:var(--text-secondary);max-width:560px}
.url{font-size:22px;font-weight:600;color:var(--badge-success-fg)}
.r{width:470px;background:var(--green-pale);position:relative}
.ph{position:absolute;left:90px;top:64px;width:300px;height:620px;background:var(--ink);border-radius:46px;padding:10px;box-sizing:border-box;box-shadow:var(--shadow-elevated)}
.ph div{width:100%;height:100%;border-radius:37px;overflow:hidden;background:var(--white)}
.ph img{display:block;width:100%;height:auto}
</style></head><body><div class="og">
<div class="l">
<div class="brand"><img src="${asset('/assets/brand/logo.svg')}" alt="flowlift">${v.product ? `<span>${v.product}</span>` : ''}</div>
<div class="t"><h1>${v.line1}<br><em>${v.line2}</em></h1><p>${v.sub}</p></div>
<span class="url">flowlift.co</span>
</div>
<div class="r"><div class="ph"><div><img src="${asset('/assets/screens/m-servicio.webp')}" alt=""></div></div></div>
</div></body></html>`

const browser = await launch()
mkdirSync(resolve(root, 'og'), { recursive: true })
for (const v of VARIANTS) {
  const tmp = resolve('scripts/og', `.tmp-${v.file}.html`)
  writeFileSync(tmp, html(v))
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: resolve(root, 'og', `${v.file}.png`), clip: { x: 0, y: 0, width: 1200, height: 630 } })
  await page.close()
  rmSync(tmp)
  console.log('og/' + v.file + '.png')
}
await browser.close()
