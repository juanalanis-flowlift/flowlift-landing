import { useEffect, useRef, useState } from 'react'
import { CreditCard, MapPin, Store } from 'lucide-react'
import Img from '../../components/Img'
import { CITAS } from '../../content/citas'
import { useLang } from '../../i18n/LangContext'

// Pantalla "Anticipos" armada en HTML (no es una imagen).
function PaymentMock({ className = '' }: { className?: string }) {
  const m = CITAS[useLang()].tour.mock
  return (
    <div className={'mock ' + className}>
      <span className="serif mock-h">{m.title}</span>
      <div className="mock-card"><span className="badge">{m.badge}</span><span className="mock-amt">$200</span><span className="muted mock-s">{m.when}</span></div>
      <div className="mock-card">
        <span className="mock-b">{m.methods}</span>
        <span className="li mock-li"><CreditCard size={16} aria-hidden="true" />{m.card}</span>
        <span className="li mock-li"><Store size={16} aria-hidden="true" />{m.oxxo}</span>
        <span className="li mock-li"><MapPin size={16} aria-hidden="true" />{m.local}</span>
      </div>
    </div>
  )
}

const supportsTimeline = () =>
  typeof CSS !== 'undefined' && CSS.supports('timeline-scope: --a') && CSS.supports('animation-timeline: view()')

// [02] Funciones. Con scroll-driven animations (timeline-scope + view-timeline-name) el celular fijo
// cambia de pantalla en CSS puro. Sin soporte (Safari, Firefox), un IntersectionObserver marca la
// función a la vista y la pantalla activa cambia con un fundido de opacidad.
export default function Tour() {
  const FEATURES = CITAS[useLang()].tour.features
  const [mode] = useState<'timeline' | 'io'>(() => (supportsTimeline() ? 'timeline' : 'io'))
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (mode !== 'io') return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [mode])

  const scope = FEATURES.map((_, i) => `--f${i}`).join(', ')
  const n = FEATURES.length
  return (
    <div className="tour wrap" data-mode={mode} style={{ '--scope': scope } as React.CSSProperties}>
      <div className="tour-ph" aria-hidden="true">
        <div className="phone">
          <div className="phone-in">
            {FEATURES.map((f, i) => {
              const st = { '--tl': `--f${i}` } as React.CSSProperties
              const on = mode === 'io' && active === i
              return f.img
                ? <Img key={f.t} src={f.img} className={(i === 0 ? 'first ' : '') + (on ? 'on' : '')} style={st} />
                : <div key={f.t} className={'mock-wrap' + (on ? ' on' : '')} style={st}><PaymentMock /></div>
            })}
          </div>
        </div>
      </div>
      <div>
        {FEATURES.map((f, i) => (
          <article
            key={f.t} className="feat" data-i={i} ref={(el) => { refs.current[i] = el }}
            style={{ '--vt': `--f${i}` } as React.CSSProperties}
          >
            <span className="num feat-n">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
            <div className="feat-h">
              <h3 className="serif">{f.t}</h3>
              {f.plan && <span className="plan">{f.plan}</span>}
            </div>
            <p className="body">{f.d}</p>
            {/* En celular (<900 px) va un celular bajo cada bloque */}
            <div className="feat-ph">
              <div className="feat-ph-in">
                {f.img ? <Img src={f.img} alt={f.t} /> : <PaymentMock className="static" />}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
