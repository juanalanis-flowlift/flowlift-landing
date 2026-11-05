import { useId, useState, type FormEvent } from 'react'
import { Bell, CircleCheck } from 'lucide-react'
import Pill from './Pill'
import { COMMON } from '../content/common'
import { useLang } from '../i18n/LangContext'
import { saveToWaitlist, type WaitlistProduct } from '../lib/waitlist'

// Formulario de lista de espera. Conserva lo escrito si falla y anuncia el resultado con aria-live.
export default function Waitlist({ product, name }: { product: WaitlistProduct; name: string }) {
  const id = useId()
  const t = COMMON[useLang()].waitlist
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setState('sending')
    setError('')
    const r = await saveToWaitlist(email, product)
    if (r.ok) setState('done')
    else { setState('idle'); setError(t[r.reason]) }
  }

  if (state === 'done') {
    return (
      <p role="status" className="wl-msg wl-ok">
        <CircleCheck size={18} aria-hidden="true" />
        {t.done(name)}
      </p>
    )
  }
  return (
    <form className="wl" onSubmit={onSubmit} noValidate>
      <label className="sr" htmlFor={id}>{t.label}</label>
      <input
        className="em" id={id} type="email" required placeholder={t.placeholder} autoComplete="email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-err` : undefined}
      />
      <Pill type="submit" icon={Bell} disabled={state === 'sending'}>{t.submit}</Pill>
      <p className="wl-msg wl-err" id={`${id}-err`} aria-live="polite">{error}</p>
    </form>
  )
}
