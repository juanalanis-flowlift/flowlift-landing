// Servidor estático mínimo (sin dependencias) para `npm start`.
// Sirve dist/ con "URLs limpias": /citas → dist/citas/index.html (cada ruta con su propio HTML y sus meta tags),
// y cualquier ruta desconocida → dist/404.html con código 404.
import { createReadStream, existsSync, statSync, readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { gzipSync } from 'node:zlib'

const REDIRECTS = JSON.parse(readFileSync(new URL('./redirects.json', import.meta.url), 'utf8'))

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.woff2': 'font/woff2',
}
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.json', '.svg', '.txt', '.xml'])

export function serve({ port = Number(process.env.PORT) || 4173, host = '0.0.0.0', root = 'dist' } = {}) {
  const base = resolve(root)
  const gz = new Map()

  const find = (pathname) => {
    let p = normalize(decodeURIComponent(pathname))
    const abs = join(base, p)
    if (abs !== base && !abs.startsWith(base + sep)) return null // sin salir de dist/
    if (existsSync(abs)) {
      const st = statSync(abs)
      if (st.isFile()) return abs
      const idx = join(abs, 'index.html')
      if (existsSync(idx)) return idx
    }
    return null
  }

  const server = createServer((req, res) => {
    let file = null
    let url
    try { url = new URL(req.url, 'http://x') } catch { /* URL mal formada → 404 */ }
    // URLs antiguas del sitio → su dirección nueva (301, conserva el #ancla del lado del navegador)
    const clean = url && url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url?.pathname
    if (url && REDIRECTS[clean]) {
      res.writeHead(301, { location: REDIRECTS[clean] + url.search, 'cache-control': 'public, max-age=3600' })
      return res.end()
    }
    try { if (url) file = find(url.pathname) } catch { /* ruta inválida → 404 */ }
    let status = 200
    if (!file) {
      file = join(base, '404.html'); status = 404
      if (!existsSync(file)) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('404') }
    }
    const ext = extname(file)
    const headers = { 'content-type': TYPES[ext] || 'application/octet-stream', 'x-content-type-options': 'nosniff' }
    headers['cache-control'] = ext === '.html' || status === 404 ? 'no-cache' : file.includes(`${sep}assets${sep}`) && /-[\w-]{8}\./.test(file) ? 'public, max-age=31536000, immutable' : 'public, max-age=86400'
    if (COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      const key = file + statSync(file).mtimeMs // si dist/ se reconstruye, no se sirve el gzip viejo
      if (!gz.has(key)) gz.set(key, gzipSync(readFileSync(file)))
      const body = gz.get(key)
      res.writeHead(status, { ...headers, 'content-encoding': 'gzip', 'content-length': body.length, vary: 'accept-encoding' })
      return res.end(req.method === 'HEAD' ? undefined : body)
    }
    res.writeHead(status, { ...headers, 'content-length': statSync(file).size })
    if (req.method === 'HEAD') return res.end()
    createReadStream(file).pipe(res)
  })
  return new Promise((ok) => server.listen(port, host, () => ok(server)))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (!existsSync('dist/index.html')) { console.error('Falta dist/. Corre primero: npm run build'); process.exit(1) }
  const s = await serve()
  console.log(`flowlift-landing en http://localhost:${s.address().port}`)
}
