import { useId, useState, type FormEvent } from 'react'
import { Bell, CircleCheck } from 'lucide-react'
import Pill from './Pill'
import { saveToWaitlist, type WaitlistProduct } from '../lib/waitlist'

const ERRORS = {
  invalid: 'Revisa tu correo: parece que le falta algo.',
  duplicate: 'Ese correo ya está en la lista. Te avisamos en cuanto abra.',
  failed: 'No pudimos guardar tu correo. Inténtalo de nuevo.',
} as const

// Formulario de lista de espera. Conserva lo escrito si falla y anuncia el resultado con aria-live.
export default function Waitlist({ product, name }: { product: WaitlistProduct; name: string }) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setState('sending')
    setError('')
    const r = await saveToWaitlist(email, product)
    if (r.ok) setState('done')
    else { setState('idle'); setError(ERRORS[r.reason]) }
  }

  if (state === 'done') {
    return (
      <p role="status" className="wl-msg wl-ok">
        <CircleCheck size={18} aria-hidden="true" />
        Listo. Te avisamos en cuanto {name} esté disponible.
      </p>
    )
  }
  return (
    <form className="wl" onSubmit={onSubmit} noValidate>
      <label className="sr" htmlFor={id}>Tu correo electrónico</label>
      <input
        className="em" id={id} type="email" required placeholder="tu@correo.com" autoComplete="email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-err` : undefined}
      />
      <Pill type="submit" icon={Bell} disabled={state === 'sending'}>Avísame</Pill>
      <p className="wl-msg wl-err" id={`${id}-err`} aria-live="polite">{error}</p>
    </form>
  )
}
