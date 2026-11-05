import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pill from '../components/Pill'
import PageHero from '../components/PageHero'
import { LINKS } from '../config'
import { NOSOTROS } from '../content/nosotros'
import { useLang } from '../i18n/LangContext'
import '../styles/pages.css'

export default function Nosotros() {
  const t = NOSOTROS[useLang()]
  return (
    <div className="ed">
      <Seo page="nosotros" />
      <Nav mode="brand" here="nosotros" />
      <main id="contenido">
        <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />
        <section className="sec-tight">
          <div className="wrap"><div className="about">
            {t.blocks.map((b, i) => (
              <div className="about-b rv" key={b.title}>
                <span className="num">[ {String(i + 1).padStart(2, '0')} ]</span>
                <h2 className="h2">{b.title}</h2>
                <p className="body">{b.text}</p>
              </div>
            ))}
            <div className="rv"><Pill href={LINKS.signup} icon={ArrowRight}>{t.cta}</Pill></div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
