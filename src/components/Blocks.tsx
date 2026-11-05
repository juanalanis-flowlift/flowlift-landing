import type { ReactNode } from 'react'

export type DocBlock =
  | { t: 'p'; h: string }
  | { t: 'sub'; h: string }
  | { t: 'note'; h: string }
  | { t: 'clause'; n: string; h: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'table'; rows: string[][] }

// Los textos vienen de scripts/import-site.mjs, que solo deja <strong>, <em>, <a>, <br> y <code>.
const Html = ({ h, as: Tag = 'span' }: { h: string; as?: 'span' | 'p' | 'li' | 'div' }) => <Tag dangerouslySetInnerHTML={{ __html: h }} />

// Bloques de un documento (ayuda y textos legales).
export default function Blocks({ blocks, subLevel = 3 }: { blocks: DocBlock[]; subLevel?: 3 | 4 }): ReactNode {
  const Sub = `h${subLevel}` as 'h3' | 'h4'
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p': return <Html key={i} as="p" h={b.h} />
          case 'sub': return <Sub key={i} className="doc-sub" dangerouslySetInnerHTML={{ __html: b.h }} />
          case 'note': return <div key={i} className="doc-note" dangerouslySetInnerHTML={{ __html: b.h }} />
          case 'clause': return <p key={i} className="doc-clause"><span className="doc-cn">{b.n}</span><Html h={b.h} /></p>
          case 'ul': return <ul key={i} className="doc-ul">{b.items.map((x, j) => <Html key={j} as="li" h={x} />)}</ul>
          case 'ol': return <ol key={i} className="doc-ol">{b.items.map((x, j) => <Html key={j} as="li" h={x} />)}</ol>
          case 'table': {
            const [head, ...rows] = b.rows
            return (
              <div key={i} className="doc-tbl" role="region" tabIndex={0} aria-label={head.join(', ')}>
                <table>
                  <thead><tr>{head.map((c, j) => <th scope="col" key={j} dangerouslySetInnerHTML={{ __html: c }} />)}</tr></thead>
                  <tbody>{rows.map((r, j) => <tr key={j}>{r.map((c, k) => (k === 0 ? <th scope="row" key={k} dangerouslySetInnerHTML={{ __html: c }} /> : <td key={k} dangerouslySetInnerHTML={{ __html: c }} />))}</tr>)}</tbody>
                </table>
              </div>
            )
          }
        }
      })}
    </>
  )
}
