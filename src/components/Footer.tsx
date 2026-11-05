import type { ReactNode } from 'react'
import { LINKS } from '../config'
import { COMMON } from '../content/common'
import { useLang } from '../i18n/LangContext'
import SmartLink from './SmartLink'
import LangSwitch from './LangSwitch'

export type FooterCta = { title: ReactNode; sub?: string; actions: ReactNode; decor?: ReactNode }

// Cierre oscuro: bloque de llamada a la acción (opcional) y barra inferior con las columnas del sitio.
export default function Footer({ cta }: { cta?: FooterCta }) {
  const lang = useLang()
  const f = COMMON[lang].footer
  const col = (title: string, links: { label: string; href: string }[]) => (
    <nav className="foot-col" aria-label={title}>
      <h2 className="foot-h">{title}</h2>
      <ul>{links.map((l) => <li key={l.label}><SmartLink href={l.href}>{l.label}</SmartLink></li>)}</ul>
    </nav>
  )
  return (
    <footer className="foot">
      {cta && (
        <div className="foot-cta">
          {cta.decor}
          <h2 className="foot-title rv">{cta.title}</h2>
          {cta.sub && <p className="foot-sub rv">{cta.sub}</p>}
          <div className="foot-actions rv">{cta.actions}</div>
        </div>
      )}
      <div className="foot-bar">
        <div className="foot-brand">
          <img src="/assets/brand/logo-white.svg" alt="flowlift" width={129} height={22} />
          <span>{f.copyright}</span>
          <a className="foot-mail" href={`mailto:${LINKS.contactEmail}`}>{LINKS.contactEmail}</a>
        </div>
        {col(f.company, [
          { label: f.about, href: '/nosotros' }, { label: f.features, href: '/funciones' }, { label: f.pricing, href: '/precios' },
          { label: f.faq, href: '/preguntas-frecuentes' }, { label: f.help, href: '/ayuda' },
        ])}
        {col(f.start, [{ label: f.startFree, href: LINKS.signup }, { label: f.login, href: LINKS.login }])}
        {col(f.legal, [{ label: f.privacy, href: '/politica-de-privacidad' }, { label: f.terms, href: '/terminos-y-condiciones' }])}
        <div className="foot-col">
          <h2 className="foot-h">{f.language}</h2>
          <LangSwitch className="lang-foot" />
        </div>
        {col(f.follow, [{ label: 'Instagram', href: LINKS.instagram }, { label: 'Facebook', href: LINKS.facebook }])}
      </div>
      <p className="foot-marks">{f.marks}</p>
    </footer>
  )
}
