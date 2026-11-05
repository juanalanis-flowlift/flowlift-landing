import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import Img from '../../components/Img'
import BookingFlowNodes from '../../components/BookingFlowNodes'
import { CITAS } from '../../content/citas'
import { useLang } from '../../i18n/LangContext'
import { useFitScale } from '../../hooks/useFitScale'
import { useInterval } from '../../hooks/useInterval'
import { usePageVisible } from '../../hooks/usePageVisible'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const AUTO_MS = 8000

// [01] Del link a tu agenda: fotos por giro + texto que se escribe solo + flujo de nodos.
// Las pestañas avanzan solas cada 8 s; un clic reinicia el temporizador. `flip` re-monta
// el texto y los nodos para que sus animaciones vuelvan a empezar.
export default function Showcase() {
  const t = CITAS[useLang()].flujo
  const VERTICALS = t.verticals
  const [tab, setTab] = useState(0)
  const [flip, setFlip] = useState(0)
  const [resetKey, setResetKey] = useState(0)
  const visible = usePageVisible()
  const reduced = usePrefersReducedMotion()
  const [fitRef, scale] = useFitScale(620)
  const uid = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const go = (i: number, manual: boolean) => {
    setTab(i)
    setFlip((f) => f + 1)
    if (manual) setResetKey((k) => k + 1)
  }
  useInterval(() => go((tab + 1) % VERTICALS.length, false), AUTO_MS, visible && !reduced, resetKey + ':' + tab)

  const onKey = (e: KeyboardEvent) => {
    const n = VERTICALS.length
    const next = e.key === 'ArrowRight' ? (tab + 1) % n : e.key === 'ArrowLeft' ? (tab + n - 1) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1
    if (next < 0) return
    e.preventDefault()
    go(next, true)
    tabRefs.current[next]?.focus()
  }

  const v = VERTICALS[tab]
  return (
    <div className="show rv">
      <div className="show-l">
        {VERTICALS.map((vt, i) => (
          <Img key={vt.name} src={vt.img} className="bg" style={{ opacity: tab === i ? 1 : 0 }} />
        ))}
        <div className="show-card">
          <div role="tablist" aria-label={t.tabsLabel} className="show-tabs" onKeyDown={onKey}>
            {VERTICALS.map((vt, i) => (
              <button
                key={vt.name} ref={(el) => { tabRefs.current[i] = el }} className={'tab' + (tab === i ? ' on' : '')}
                type="button" role="tab" id={`${uid}-t${i}`} aria-selected={tab === i} aria-controls={`${uid}-p`}
                tabIndex={tab === i ? 0 : -1} onClick={() => go(i, true)}
              >{vt.name}</button>
            ))}
          </div>
          <div className="show-ask" role="tabpanel" id={`${uid}-p`} aria-labelledby={`${uid}-t${tab}`}>
            <span className="show-ask-ic"><Calendar size={18} aria-hidden="true" /></span>
            <span className="show-ask-txt"><span className="type" key={flip}>{v.ask}</span><span className="caret" aria-hidden="true" /></span>
            <span className="show-go" aria-hidden="true"><ArrowRight size={16} /></span>
          </div>
        </div>
      </div>
      <div className="dots-dk">
        <div ref={fitRef} className="canvas-fit" style={{ height: 560 * scale }} role="img" aria-label={t.aria(v.svc)}>
          <div className="canvas-in" style={{ transform: `scale(${scale})` }}>
            <BookingFlowNodes key={flip} svc={v.svc} when={v.when} who={v.who} labels={t.nodes} />
          </div>
        </div>
      </div>
    </div>
  )
}
