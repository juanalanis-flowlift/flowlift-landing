import { useState } from 'react'
import { ArrowRight, Check, CreditCard, Lock, ShieldCheck, UserCheck, type LucideIcon } from 'lucide-react'
import Pill from '../../components/Pill'
import { LINKS } from '../../config'
import { PRICING, TRUST } from '../../content/citas'

const TRUST_ICONS: Record<string, LucideIcon> = { Lock, UserCheck, CreditCard, ShieldCheck }

function Items({ items }: { items: string[] }) {
  return (
    <div className="pr-items">
      {items.map((x) => <span className="li" key={x}><Check size={16} aria-hidden="true" />{x}</span>)}
    </div>
  )
}

// [03] Precios con switch mensual / anual.
export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const pro = annual ? PRICING.pro.annual : PRICING.pro.monthly
  const teams = annual ? PRICING.teams.annual : PRICING.teams.monthly
  return (
    <div className="wrap pricing">
      <div className="pr-head rv">
        <div className="pr-title">
          <span className="num">[ 03 ]</span>
          <h2 className="h2">Menos de $12 al día. <span className="it">Con una cita que salves, ya se pagó.</span></h2>
        </div>
        <div className="sw-row">
          <span className={annual ? 'muted' : 'sw-on'}>Mensual</span>
          <button className={'sw' + (annual ? ' on' : '')} type="button" role="switch" aria-checked={annual} aria-label="Pago anual" onClick={() => setAnnual((a) => !a)}>
            <span className="knob" />
          </button>
          <span className={annual ? 'sw-on' : 'muted'}>Anual · 2 meses gratis</span>
        </div>
      </div>

      <div className="pr rv">
        <div className="pr-c">
          <span className="num">{PRICING.starter.name}</span>
          <span className="price">{PRICING.starter.price}</span>
          <span className="muted pr-note">{PRICING.starter.note}</span>
          <Items items={PRICING.starter.items} />
          <Pill variant="light" href={LINKS.signup} icon={ArrowRight} className="pr-cta">Empieza gratis</Pill>
        </div>
        <div className="pr-c pr-feat">
          <div className="pr-top"><span className="num">{PRICING.pro.name}</span><span className="pr-badge">{PRICING.pro.badge}</span></div>
          <span className="price">{pro.price}<span className="per"> {pro.per}</span></span>
          <span className="muted pr-note" aria-live="polite">{pro.note}</span>
          <Items items={PRICING.pro.items} />
          <Pill href={LINKS.signup} icon={ArrowRight} className="pr-cta">14 días gratis</Pill>
        </div>
        <div className="pr-c">
          <span className="num">{PRICING.teams.name}</span>
          <span className="price">{teams.price}<span className="per"> {teams.per}</span></span>
          <span className="muted pr-note" aria-live="polite">{teams.note}</span>
          <Items items={PRICING.teams.items} />
          <Pill variant="light" href={LINKS.signup} icon={ArrowRight} className="pr-cta">14 días gratis</Pill>
        </div>
      </div>

      <p className="muted rv pr-foot">{PRICING.footnote}</p>
      <div className="trust rv">
        {TRUST.map((t) => {
          const Icon = TRUST_ICONS[t.icon]
          return <span className="li" key={t.t}><Icon size={18} aria-hidden="true" />{t.t}</span>
        })}
      </div>
    </div>
  )
}
