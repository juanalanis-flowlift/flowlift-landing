import NamedIcon from './NamedIcon'
import type { FeatureItem } from '../content/funciones'

// Cuadrícula editorial de funciones: línea superior gruesa, divisores finos, ícono + título + texto.
export default function FeatureGrid({ items, cols = 3, plan, compact, muted, level = 3 }: {
  items: FeatureItem[]; cols?: 2 | 3 | 4; plan: { pro: string; teams: string }; compact?: boolean; muted?: boolean; level?: 3 | 4
}) {
  const H = `h${level}` as 'h3' | 'h4'
  return (
    <ul className={`fg fg-${cols}${compact ? ' fg-compact' : ''}${muted ? ' fg-muted' : ''}`}>
      {items.map((it) => (
        <li className="fg-i" key={it.title}>
          <span className="fg-ic"><NamedIcon name={it.icon} size={compact ? 20 : 22} /></span>
          <div className="fg-head">
            <H className="serif fg-t">{it.title}</H>
            {it.plan && <span className="plan">{plan[it.plan]}</span>}
          </div>
          <p className="fg-d">{it.text}</p>
        </li>
      ))}
    </ul>
  )
}
