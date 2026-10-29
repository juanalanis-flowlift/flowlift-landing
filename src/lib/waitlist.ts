// Lista de espera de Clases y Tienda.
// Modo de prueba: sin servidor. Guarda en localStorage del navegador y evita duplicados.
// TODO: reemplazar el cuerpo de saveToWaitlist() por la llamada real a HubSpot
// (o a un endpoint propio) cuando se decida el backend. La firma no cambia.

export type WaitlistProduct = 'clases' | 'tienda'
export type WaitlistResult = { ok: true } | { ok: false; reason: 'invalid' | 'duplicate' | 'failed' }

const KEY = 'flowlift.waitlist.v1'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Entry = { email: string; product: WaitlistProduct; at: string }

function read(): Entry[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Entry[]) : []
  } catch {
    return []
  }
}

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim())
}

export async function saveToWaitlist(email: string, product: WaitlistProduct): Promise<WaitlistResult> {
  const clean = email.trim().toLowerCase()
  if (!isValidEmail(clean)) return { ok: false, reason: 'invalid' }
  const all = read()
  if (all.some((e) => e.email === clean && e.product === product)) return { ok: false, reason: 'duplicate' }
  try {
    localStorage.setItem(KEY, JSON.stringify([...all, { email: clean, product, at: new Date().toISOString() }]))
    return { ok: true }
  } catch {
    return { ok: false, reason: 'failed' }
  }
}
