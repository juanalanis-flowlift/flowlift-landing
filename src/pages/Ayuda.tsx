import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Search } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pill from '../components/Pill'
import Rich from '../components/Rich'
import PageHero from '../components/PageHero'
import Blocks, { type DocBlock } from '../components/Blocks'
import { LINKS } from '../config'
import { useLang } from '../i18n/LangContext'
import es from '../content/help/ayuda.es.json'
import en from '../content/help/ayuda.en.json'
import '../styles/pages.css'
import '../styles/docs.css'

type Article = { id: string; title: string; plan?: 'pro' | 'teams'; blocks: DocBlock[] }
type Section = { id: string; n: string; title: string; lead: string; articles: Article[] }

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const strip = (h: string) => h.replace(/<[^>]+>/g, ' ')
const blockText = (b: DocBlock): string => {
  switch (b.t) {
    case 'ul': case 'ol': return b.items.join(' ')
    case 'table': return b.rows.flat().join(' ')
    default: return b.h
  }
}
const textOf = (a: Article) => a.title + ' ' + a.blocks.map((b) => strip(blockText(b))).join(' ')
const PLAN = { es: { pro: 'Pro+', teams: 'Equipos' }, en: { pro: 'Pro+', teams: 'Teams' } }

export default function Ayuda() {
  const lang = useLang()
  const t = lang === 'en' ? en : es
  const sections = t.sectionsList as unknown as Section[]
  const total = sections.reduce((n, s) => n + s.articles.length, 0)
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<Set<string>>(new Set())
  const [active, setActive] = useState(sections[0].id)
  const [all, setAll] = useState(false)
  const searchId = useId()
  const query = fold(q.trim())

  const shown = useMemo(() => {
    if (!query) return sections
    return sections
      .map((s) => ({ ...s, articles: s.articles.filter((a) => fold(textOf(a)).includes(query)) }))
      .filter((s) => s.articles.length)
  }, [query, sections])
  const found = shown.reduce((n, s) => n + s.articles.length, 0)

  const toggle = (id: string) => setOpen((o) => { const n = new Set(o); n.has(id) ? n.delete(id) : n.add(id); return n })
  const isOpen = (id: string) => all || !!query || open.has(id)

  // Un enlace con #article-… abre ese artículo.
  useEffect(() => {
    const go = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      if (!id) return
      if (id.startsWith('article-')) setOpen((o) => new Set(o).add(id))
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
    go()
    window.addEventListener('hashchange', go)
    return () => window.removeEventListener('hashchange', go)
  }, [])

  // Sección activa en el índice lateral.
  const obs = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    obs.current?.disconnect()
    if (query) return
    obs.current = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) setActive(e.target.id) }, { rootMargin: '-20% 0px -70% 0px' })
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.current!.observe(el) })
    return () => obs.current?.disconnect()
  }, [query, sections])

  const status = query ? (found === 0 ? t.none : found === 1 ? t.one : t.many.replace('{n}', String(found))) : ''

  return (
    <div className="ed">
      <Seo page="ayuda" />
      <Nav mode="citas" here="ayuda" />
      <main id="contenido">
        <PageHero eyebrow={`[ ${t.eyebrow} ]`} title={t.title} lead={t.lead}>
          <form className="faq-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <label className="sr" htmlFor={searchId}>{t.searchLabel}</label>
            <Search size={18} aria-hidden="true" />
            <input id={searchId} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.searchLabel} autoComplete="off" />
          </form>
          <div className="help-pop">
            <span>{t.popularLabel}</span>
            {t.popular.map((p) => <a key={p.t} className="chip" href={`#${p.target}`} onClick={() => setQ('')}>{p.t}</a>)}
          </div>
          <p className="sr" role="status" aria-live="polite">{status}</p>
        </PageHero>

        {!query && (
          <section className="wrap">
            <div className="help-cards">
              {t.cards.map((c) => (
                <a key={c.t} className="help-card" href={`#${c.target}`}>
                  <span className="serif help-card-t">{c.t}</span>
                  <span className="help-card-d">{c.d}</span>
                  <span className="help-card-o">{t.open}<ArrowRight size={16} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="sec-tight">
          <div className="wrap doc">
            <nav className="doc-toc" aria-label={t.sections}>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} aria-current={active === s.id && !query ? 'true' : undefined}>
                      <span className="doc-tn" aria-hidden="true">{s.n}</span>{s.title}
                      <span className="faqp-n" aria-hidden="true">{s.articles.length}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="doc-main help-main">
              {!query && (
                <div className="help-guide">
                  <span className="num">{t.guide.eyebrow}</span>
                  <h2 className="h2"><Rich text={t.guide.title} /></h2>
                  <p className="help-count">{t.guide.counts.replace('{s}', String(sections.length)).replace('{a}', String(total))}</p>
                  <p className="doc-note"><strong>{t.guide.tipLabel}</strong> {t.guide.tip}</p>
                  <button type="button" className="chip chip-l" onClick={() => setAll((a) => !a)} aria-pressed={all}>{all ? t.collapse : t.expand}</button>
                </div>
              )}
              {query && found === 0 && <p className="body">{t.none}</p>}
              {shown.map((s) => (
                <section key={s.id} id={s.id} className="doc-sec help-sec" aria-labelledby={`${s.id}-h`}>
                  <header className="doc-h help-h">
                    <span className="num">{s.n}</span>
                    <div>
                      <h2 id={`${s.id}-h`} className="serif">{s.title}</h2>
                      <p className="help-lead">{s.lead}</p>
                      <span className="help-count">{s.articles.length} {s.articles.length === 1 ? t.article1 : t.articles}</span>
                    </div>
                  </header>
                  <div className="help-arts">
                    {s.articles.map((a) => {
                      const o = isOpen(a.id)
                      return (
                        <article key={a.id} id={a.id} className="help-art">
                          <h3>
                            <button type="button" className="help-q" aria-expanded={o} aria-controls={`${a.id}-p`} onClick={() => toggle(a.id)}>
                              <span className="serif">{a.title}</span>
                              {a.plan && <span className="plan">{PLAN[lang][a.plan]}</span>}
                              <ChevronDown size={20} aria-hidden="true" className={'help-chev' + (o ? ' open' : '')} />
                            </button>
                          </h3>
                          {o && <div id={`${a.id}-p`} className="doc-body help-body"><Blocks blocks={a.blocks} subLevel={4} /></div>}
                        </article>
                      )
                    })}
                  </div>
                </section>
              ))}

              <aside className="help-support">
                <h2 className="serif"><Rich text={t.support.title} /> <span className="it">{t.support.sub}</span></h2>
                <p>{t.support.text}</p>
                <div className="help-support-a">
                  <Pill variant="light" href={`mailto:${LINKS.contactEmail}`}>{t.support.mail}</Pill>
                  <Pill variant="light" href="/">{t.support.back}</Pill>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
