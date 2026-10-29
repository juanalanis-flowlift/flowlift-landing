import type { ReactNode } from 'react'
import SmartLink from './SmartLink'

export type FooterLink = { label: string; href: string }

// Cierre oscuro: titular gigante, acciones y barra inferior. `decor` va detrás del texto (fotos de borde).
export default function Footer({ title, sub, actions, links, decor }: {
  title: ReactNode; sub?: string; actions: ReactNode; links: FooterLink[]; decor?: ReactNode
}) {
  return (
    <footer className="foot">
      <div className="foot-cta">
        {decor}
        <h2 className="foot-title rv">{title}</h2>
        {sub && <p className="foot-sub rv">{sub}</p>}
        <div className="foot-actions rv">{actions}</div>
      </div>
      <div className="foot-bar">
        <img src="/assets/brand/logo-white.svg" alt="flowlift" width={129} height={22} />
        <div className="foot-links">
          {links.map((l) => <SmartLink key={l.label} href={l.href}>{l.label}</SmartLink>)}
        </div>
        <span>© 2026 flowlift · Hecho en México</span>
      </div>
    </footer>
  )
}
