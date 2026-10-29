// Lee las dimensiones de cada imagen de public/assets y las guarda en src/content/imageSizes.json
// para poner width/height en <img> (evita saltos de layout). Uso: node scripts/image-sizes.mjs
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = 'public/assets'
const out = {}

function webp(buf) {
  const kind = buf.toString('ascii', 12, 16)
  if (kind === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff]
  if (kind === 'VP8L') {
    const b = buf.readUInt32LE(21)
    return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1]
  }
  if (kind === 'VP8X') return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1]
  return null
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!p.endsWith('.webp')) continue
    const size = webp(readFileSync(p))
    if (size) out['/assets/' + relative(ROOT, p)] = size
  }
}
walk(ROOT)
writeFileSync('src/content/imageSizes.json', JSON.stringify(out, null, 1))
console.log(Object.keys(out).length + ' imágenes')
