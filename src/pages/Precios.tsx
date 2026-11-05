import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Check, Minus } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pill from '../components/Pill'
import Rich from '../components/Rich'
import Faq from '../components/Faq'
import PageHero from '../components/PageHero'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config'
import { PRECIOS, type Cell, type Period, type Plan } from '../content/precios'
import { useLang } from '../i18n/LangContext'
import '../styles/pages.css'
import '../styles/pricing.css'

const ORDER: Period[] = ['monthly', 'annual', 'quarterly']

function PlanCard({ plan, period, popular }: { plan: Plan; period: Period; popular: string }) {
  const p = plan.prices?.[period]
  return (
    <div className={'pr-c' + (plan.key === 'pro' ? ' pr-feat' : '')}>
      <div className="pr-top">
        <span className="num">{plan.name}</span>
        {plan.popular && <span className="pr-badge">{popular}</span>}
      </div>
      <p className="muted pr-note pr-tag">{plan.tagline}</p>
      {plan.free ? (
        <span className="price price-free">{plan.free.price}<span className="per"> {plan.free.per}</span></span>
      ) : p && (
        <div>
          {p.was && <del className="was">{p.was}</del>}
          <span className="price">{p.price}<span className="per"> {p.per}</span></span>
        </div>
      )}
      {p && <span className="muted pr-note">{p.note}</span>}
      {p?.save && <span className="pr-save">{p.save}</span>}
      <p className="pr-label">{plan.featuresLabel}</p>
      <div className="pr-items">
        {plan.items.map((x) => <span className="li" key={x}><Check size={16} aria-hidden="true" />{x}</span>)}
      </div>
      <Pill variant={plan.key === 'pro' ? 'dark' : 'light'} href={LINKS.signup} icon={ArrowRight} className="pr-cta">{plan.cta}</Pill>
    </div>
  )
}

function CellView({ v, t }: { v: Cell; t: { included: string; notIncluded: string } }) {
  if (typeof v === 'string') return <>{v}</>
  return v
    ? <><Check size={18} aria-hidden="true" className="ck" /><span className="sr">{t.included}</span></>
    : <><Minus size={18} aria-hidden="true" className="mn" /><span className="sr">{t.notIncluded}</span></>
}

export default function Precios() {
  const lang = useLang()
  const t = PRECIOS[lang]
  const [period, setPeriod] = useState<Period>('monthly')
  const uid = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    const i = ORDER.indexOf(period)
    const n = e.key === 'ArrowRight' ? (i + 1) % 3 : e.key === 'ArrowLeft' ? (i + 2) % 3 : e.key === 'Home' ? 0 : e.key === 'End' ? 2 : -1
    if (n < 0) return
    e.preventDefault(); setPeriod(ORDER[n]); tabs.current[n]?.focus()
  }

  return (
    <div className="ed">
      <Seo page="precios" />
      <Nav mode="citas" here="precios" />
      <main id="contenido">
        <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

        <section id="planes" className="sec-tight">
          <div className="wrap">
            <div className="seg" role="tablist" aria-label={t.periodLabel} onKeyDown={onKey}>
              {ORDER.map((k, i) => (
                <button
                  key={k} ref={(el) => { tabs.current[i] = el }} type="button" role="tab" id={`${uid}-${k}`}
                  className={'seg-b' + (period === k ? ' on' : '')} aria-selected={period === k} aria-controls={`${uid}-panel`}
                  tabIndex={period === k ? 0 : -1} onClick={() => setPeriod(k)}
                >
                  {t.periods[k].label}
                  {t.periods[k].badge && <span className="seg-tag">{t.periods[k].badge}</span>}
                </button>
              ))}
            </div>
            <div className="pr pr-page" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-${period}`} aria-live="polite">
              {t.plans.map((p) => <PlanCard key={p.key} plan={p} period={period} popular={t.popular} />)}
            </div>
          </div>
        </section>

        <section className="sec sec-sunk">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">{t.compare.n}</span>
              <h2 className="h2"><Rich text={t.compare.title} /></h2>
              <p className="body">{t.compare.lead}</p>
            </div>
            <div className="tbl-wrap rv" role="region" aria-label={t.compare.title.replace(/\*/g, '')} tabIndex={0}>
              <table className="tbl">
                <caption className="sr">{t.compare.title.replace(/\*/g, '')}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.compare.feature}</th>
                    {t.compare.heads.map((h, i) => <th scope="col" key={h} className={i === 1 ? 'hl' : ''}>{h}</th>)}
                  </tr>
                </thead>
                {t.compare.groups.map((g) => (
                  <tbody key={g.title}>
                    <tr><th scope="colgroup" colSpan={4} className="grp">{g.title}</th></tr>
                    {g.rows.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">{r.label}</th>
                        {r.cells.map((c, i) => <td key={i} className={i === 1 ? 'hl' : ''}><CellView v={c} t={t.compare} /></td>)}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">{t.steps.n}</span>
              <h2 className="h2"><Rich text={t.steps.title} /></h2>
              <p className="body">{t.steps.lead}</p>
            </div>
            <ol className="steps rv">
              {t.steps.items.map((s, i) => (
                <li key={s.t}>
                  <span className="steps-n serif" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="serif steps-t">{s.t}</h3>
                  <p className="steps-d">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec-tight">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="sec-head rv" style={{ marginBottom: 40 }}>
              <span className="num">{t.faq.n}</span>
              <h2 className="h2"><Rich text={t.faq.title} /></h2>
            </div>
            <div className="rv"><Faq items={t.faq.items} /></div>
            <p className="rv more"><SmartLink className="ulink" href="/preguntas-frecuentes">{t.faq.all}</SmartLink></p>
          </div>
        </section>
      </main>
      <Footer cta={{
        title: <Rich text={t.cta.title} />, sub: t.cta.sub,
        actions: <>
          <Pill variant="cream" href={LINKS.signup} icon={ArrowRight}>{t.cta.primary}</Pill>
          <Pill variant="ghost" href="#planes" icon={ArrowRight}>{t.cta.secondary}</Pill>
        </>,
      }} />
    </div>
  )
}
