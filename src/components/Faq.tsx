import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

export type FaqItem = { q: string; a: string }

// Acordeón de una pregunta abierta a la vez.
export default function Faq({ items, initial = 0, openAll = false }: { items: FaqItem[]; initial?: number; openAll?: boolean }) {
  const [open, setOpen] = useState(initial)
  const uid = useId()
  return (
    <div className="faq-list">
      {items.map((it, i) => {
        const isOpen = openAll || open === i
        return (
          <div className="faq-item" key={it.q}>
            <button
              className="faq-q" type="button" aria-expanded={isOpen}
              aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{it.q}</span>
              <span className={'faq-ico' + (isOpen ? ' open' : '')}><Plus size={22} aria-hidden="true" /></span>
            </button>
            {isOpen && <p className="faq-a" id={`${uid}-${i}`}>{it.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
