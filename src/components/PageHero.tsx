import type { ReactNode } from 'react'
import Rich from './Rich'

// Encabezado de las páginas internas: etiqueta, título grande con una palabra en cursiva verde y texto de apoyo.
export default function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-in">
        <span className="num">{eyebrow}</span>
        <h1 className="page-title"><Rich text={title} /></h1>
        {lead && <p className="body page-lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
