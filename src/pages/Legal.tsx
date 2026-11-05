import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Blocks, { type DocBlock } from '../components/Blocks'
import type { PageKey } from '../i18n/routes'
import '../styles/pages.css'
import '../styles/docs.css'

export type LegalDoc = {
  title: string; subtitle: string; meta: string[]; intro: string[]
  facts: { label: string; value: string; note: string }[]; tocLabel: string
  sections: { n: number; title: string; blocks: DocBlock[]; simple?: { label: string; text: string; applies: string } }[]
  annex: { title: string; blocks: DocBlock[]; simple?: { label: string; text: string; applies: string } } | null
}

// Documento legal (Aviso de Privacidad, Términos y Condiciones): índice, secciones numeradas y resumen "En simple".
export default function Legal({ page, doc }: { page: PageKey; doc: LegalDoc }) {
  return (
    <div className="ed">
      <Seo page={page} />
      <Nav mode="brand" here={page} />
      <main id="contenido">
        <PageHero eyebrow="[ flowlift ]" title={`${doc.title} ~${doc.subtitle}~`}>
          <p className="legal-meta">{doc.meta.map((m) => <span key={m} className="legal-chip">{m}</span>)}</p>
          <div className="legal-intro body">{doc.intro.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}</div>
        </PageHero>

        {doc.facts.length > 0 && (
          <section className="wrap">
            <dl className="legal-facts">
              {doc.facts.map((f) => (
                <div key={f.label} className="legal-fact">
                  <dt>{f.label}</dt>
                  <dd className="serif">{f.value}</dd>
                  <dd className="legal-fact-n">{f.note}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="sec-tight">
          <div className="wrap doc">
            <nav className="doc-toc" aria-label={doc.tocLabel}>
              <details className="doc-toc-d" open>
                <summary>{doc.tocLabel}</summary>
                <ol>
                  {doc.sections.map((s) => (
                    <li key={s.n}><a href={`#s${s.n}`}><span className="doc-tn" aria-hidden="true">{s.n}</span>{s.title}</a></li>
                  ))}
                  {doc.annex && <li><a href="#anexo"><span className="doc-tn" aria-hidden="true">·</span>{doc.annex.title}</a></li>}
                </ol>
              </details>
            </nav>
            <div className="doc-main">
              {doc.sections.map((s) => (
                <section key={s.n} id={`s${s.n}`} className="doc-sec" aria-labelledby={`s${s.n}-h`}>
                  <header className="doc-h">
                    <span className="num">{s.n}</span>
                    <h2 id={`s${s.n}-h`} className="serif">{s.title}</h2>
                  </header>
                  <div className="doc-body"><Blocks blocks={s.blocks} /></div>
                  {s.simple && (
                    <aside className="doc-simple">
                      <span className="doc-simple-l">{s.simple.label}</span>
                      <p dangerouslySetInnerHTML={{ __html: s.simple.text }} />
                      <span className="doc-simple-a">{s.simple.applies}</span>
                    </aside>
                  )}
                </section>
              ))}
              {doc.annex && (
                <section id="anexo" className="doc-sec doc-annex" aria-labelledby="anexo-h">
                  <header className="doc-h"><h2 id="anexo-h" className="serif">{doc.annex.title}</h2></header>
                  <div className="doc-body"><Blocks blocks={doc.annex.blocks} /></div>
                </section>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
