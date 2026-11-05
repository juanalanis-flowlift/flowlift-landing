import { Fragment, type ReactNode } from 'react'

// Texto con énfasis: *cursiva* y ~cursiva verde~. Ejemplo: "Tecnología *al servicio de las personas.*"
export default function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*[^*]+\*|~[^~]+~)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <span className="it" key={i}>{p.slice(1, -1)}</span>
        if (p.startsWith('~') && p.endsWith('~') && p.length > 2) return <span className="it green" key={i}>{p.slice(1, -1)}</span>
        return <Fragment key={i}>{p}</Fragment>
      })}
    </>
  )
}
