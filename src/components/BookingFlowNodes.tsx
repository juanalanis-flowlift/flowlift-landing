import { Mail } from 'lucide-react'
import Img from './Img'
import Rich from './Rich'
import '../styles/nodes.css'

export type NodeLabels = {
  chooseService: string; client: string; link: string; dateTime: string; available: string; confirmation: string; email: string
  confirmed: string; addedCal: string; agenda: string; newTag: string; reminder: string; seeYou: string
}

// Flujo de una reserva (620×560): los nodos aparecen uno por uno y las líneas se dibujan.
// Para reiniciar la animación, vuelve a montarlo cambiando su `key`.
export default function BookingFlowNodes({ svc, when, who, labels }: { svc: string; when: string; who: string; labels: NodeLabels }) {
  return (
    <div className="bfn">
      <svg width="620" height="560" viewBox="0 0 620 560" fill="none" aria-hidden="true" className="bfn-lines">
        <path className="draw l1" pathLength="1" d="M172 150 C205 150 192 262 225 262" />
        <path className="draw l2" pathLength="1" d="M397 262 C430 262 417 150 450 150" />
        <path className="draw l3" pathLength="1" d="M535 286 L535 322" />
        <path className="draw l4" pathLength="1" d="M450 240 C410 240 452 474 417 474" />
        {[[172, 150], [225, 262], [397, 262], [450, 150], [535, 322], [417, 474]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />
        ))}
      </svg>

      <div className="pop d1 bfn-card" style={{ left: 0, top: 18, width: 172 }}>
        <div className="bfn-cap"><span>{labels.chooseService}</span><span className="dim">{labels.client}</span></div>
        <div className="bfn-box">
          <span className="bfn-tag">{labels.link}</span>
          <Img src="/assets/screens/flow-1.webp" className="bfn-img" />
          <span className="bfn-txt">{svc}</span>
        </div>
      </div>

      <div className="pop d2 bfn-card" style={{ left: 225, top: 130, width: 172 }}>
        <div className="bfn-cap"><span>{labels.dateTime}</span><span className="dim">{who}</span></div>
        <div className="bfn-box">
          <span className="bfn-tag">{labels.available}</span>
          <Img src="/assets/screens/flow-2.webp" className="bfn-img mid" />
          <span className="bfn-txt">{when}</span>
        </div>
      </div>

      <div className="pop d3 bfn-card" style={{ left: 450, top: 18, width: 170 }}>
        <div className="bfn-cap"><span>{labels.confirmation}</span><span className="dim">{labels.email}</span></div>
        <div className="bfn-box">
          <span className="bfn-tag">{labels.confirmed}</span>
          <Img src="/assets/screens/flow-4.webp" className="bfn-img" />
          <span className="bfn-txt">{labels.addedCal}</span>
        </div>
      </div>

      <div className="pop d4 bfn-card" style={{ left: 450, top: 322, width: 170 }}>
        <div className="bfn-box">
          <div className="bfn-row"><span className="bfn-tag light">{labels.agenda}</span><span className="bfn-cap-s">{labels.newTag}</span></div>
          <Img src="/assets/screens/m-reservas.webp" className="bfn-img" />
        </div>
      </div>

      <div className="pop d5 bfn-mail" style={{ left: 215, top: 422, width: 202 }}>
        <span className="bfn-mail-h"><Mail size={12} aria-hidden="true" />{labels.reminder}</span>
        <span className="bfn-mail-t"><Rich text={labels.seeYou} /></span>
        <span className="bfn-mail-s">{svc} · {when}</span>
      </div>
    </div>
  )
}
