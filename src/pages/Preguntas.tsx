import { useId, useMemo, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pill from '../components/Pill'
import Rich from '../components/Rich'
import Faq from '../components/Faq'
import PageHero from '../components/PageHero'
import { LINKS } from '../config'
import { FAQ_PAGE } from '../content/faq'
import { useLang } from '../i18n/LangContext'
import '../styles/pages.css'

// Sin acentos ni mayúsculas, para que "politica" encuentre "política".
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function Preguntas() {
  const t = FAQ_PAGE[useLang()]
  const [q, setQ] = useState('')
  const id = useId()
  const query = fold(q.trim())
  const cats = useMemo(() => {
    if (!query) return t.categories
    return t.categories
      .map((c) => ({ ...c, items: c.items.filter((it) => fold(it.q + ' ' + it.a).includes(query)) }))
      .filter((c) => c.items.length)
  }, [query, t])
  const total = cats.reduce((n, c) => n + c.items.length, 0)

  return (
    <div className="ed">
      <Seo page="faq" />
      <Nav mode="citas" here="faq" />
      <main id="contenido">
        <PageHero eyebrow={`[ ${t.hero.eyebrow} ]`} title={t.hero.title} lead={t.hero.lead}>
          <form className="faq-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <label className="sr" htmlFor={id}>{t.search.label}</label>
            <Search size={18} aria-hidden="true" />
            <input id={id} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search.label} autoComplete="off" />
          </form>
          <p className="sr" role="status" aria-live="polite">
            {query ? (total === 0 ? t.search.none : total === 1 ? t.search.one : t.search.many.replace('{n}', String(total))) : ''}
          </p>
        </PageHero>

        <section className="sec-tight">
          <div className="wrap faqp">
            {!query && (
              <nav className="faqp-index" aria-label={t.search.index}>
                <ul>
                  {t.categories.map((c) => (
                    <li key={c.id}><a href={`#${c.id}`}>{c.title}<span className="faqp-n" aria-hidden="true">{c.items.length}</span></a></li>
                  ))}
                </ul>
              </nav>
            )}
            <div className={'faqp-main' + (query ? ' full' : '')}>
              {query && total === 0 && <p className="body faqp-none">{t.search.none}</p>}
              {cats.map((c) => (
                <section key={c.id} id={c.id} className="faqp-cat" aria-labelledby={`${c.id}-h`}>
                  <h2 className="faqp-h serif" id={`${c.id}-h`}>{c.title}<span className="faqp-n" aria-hidden="true">{c.items.length}</span></h2>
                  <Faq items={c.items} initial={-1} openAll={!!query} />
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer cta={{
        title: <Rich text={t.cta.title} />, sub: t.cta.text,
        actions: <Pill variant="cream" href={LINKS.signup} icon={ArrowRight}>{t.cta.primary}</Pill>,
      }} />
    </div>
  )
}
