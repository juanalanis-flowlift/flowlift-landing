import { CalendarCheck, CreditCard, MessageSquare, type LucideIcon } from 'lucide-react'
import Img from '../../components/Img'
import { STAGE_CHIPS } from '../../content/citas'
import { useFitScale } from '../../hooks/useFitScale'

const ICONS: Record<string, LucideIcon> = { CalendarCheck, MessageSquare, CreditCard }
const W = 1060, H = 600

// Pantallas del producto con avisos conectados por líneas. Se escala completo (no se reacomoda).
export default function Stage() {
  const [ref, scale] = useFitScale(W)
  return (
    <div
      ref={ref} className="stage-fit" style={{ height: H * scale }} role="img"
      aria-label="Panel de flowlift en computadora y página de reserva en celular, conectados con avisos de nueva reserva, recordatorio por WhatsApp y anticipo recibido"
    >
      <div className="stage" style={{ transform: `scale(${scale})` }}>
        <div className="desk rise" style={{ '--dy': '-60px' } as React.CSSProperties}>
          <div className="desk-bar"><i /><i /><i /></div>
          <Img src="/assets/screens/d-resumen.webp" eager />
        </div>
        <div className="phone rise" style={{ left: 780, top: 120, width: 270, height: 560, '--dy': '-150px' } as React.CSSProperties}>
          <div className="phone-in"><Img src="/assets/screens/m-servicio.webp" eager /></div>
        </div>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true" className="stage-lines">
          <path className="draw l1" pathLength="1" d="M790 200 C720 200 700 70 640 50" />
          <path className="draw l2" pathLength="1" d="M790 360 C700 360 690 520 600 540" />
          <path className="draw l3" pathLength="1" d="M1050 300 C1110 300 1110 430 1060 470" />
          <circle cx="790" cy="200" r="3.5" /><circle cx="790" cy="360" r="3.5" /><circle cx="1050" cy="300" r="3.5" />
        </svg>
        {STAGE_CHIPS.map((c) => {
          const Icon = ICONS[c.icon]
          return (
            <div className="chipn" key={c.title} style={{ left: c.left, top: c.top, animationDelay: `${c.delay}ms` }}>
              <span className="chip-ic"><Icon size={18} aria-hidden="true" /></span>
              <span><b>{c.title}</b>{c.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
