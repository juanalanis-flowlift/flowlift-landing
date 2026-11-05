import { ArrowRight, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Faq from '../components/Faq'
import Rich from '../components/Rich'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'
import SmartLink from '../components/SmartLink'
import Stage from '../sections/citas/Stage'
import Showcase from '../sections/citas/Showcase'
import Tour from '../sections/citas/Tour'
import Pricing from '../sections/citas/Pricing'
import { LINKS } from '../config'
import { CITAS } from '../content/citas'
import { useLang } from '../i18n/LangContext'
import '../styles/citas.css'

export default function Citas() {
  const t = CITAS[useLang()]
  const h1 = t.hero.lines.split(/(~[^~]+~)/).map((p, i) => (p.startsWith('~') ? <span className="it green" key={i}>{p.slice(1, -1)}</span> : p))
  return (
    <div className="ed">
      <Seo page="citas" />
      <Nav mode="citas" here="citas" />

      <main id="contenido">
        <section className="citas-hero">
          <div className="wrap">
            <span className="num">{t.hero.num}</span>
            <h1 className="giant">{h1}</h1>
            <p className="body">{t.hero.body}</p>
            <div className="hero-actions">
              <Pill href={LINKS.signup} icon={ArrowRight}>{t.hero.primary}</Pill>
              <Pill variant="light" href="#flujo" icon={ChevronDown}>{t.hero.secondary}</Pill>
            </div>
            <span className="muted hero-note">{t.hero.note}</span>
            <Stage />
          </div>
        </section>

        <section id="flujo" className="sec-flujo">
          <div className="center center--wide rv sec-head">
            <span className="num">{t.flujo.n}</span>
            <h2 className="h2"><Rich text={t.flujo.title} /></h2>
            <p className="body">{t.flujo.body}</p>
          </div>
          <div className="wrap" style={{ maxWidth: 1320 }}><Showcase /></div>
        </section>

        <section id="funciones" className="sec-tour">
          <div className="center center--wide rv sec-head" style={{ marginBottom: 40 }}>
            <span className="num">{t.tour.n}</span>
            <h2 className="h2"><Rich text={t.tour.title} /></h2>
          </div>
          <Tour />
          <p className="more"><SmartLink className="ulink" href="/funciones">{t.tour.all}</SmartLink></p>
        </section>

        <section id="precios" className="sec-precios"><Pricing /></section>

        <section className="sec-faq">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="center center--wide rv" style={{ marginBottom: 40 }}>
              <span className="num">{t.faq.n}</span>
              <h2 className="h2"><Rich text={t.faq.title} /></h2>
            </div>
            <div className="rv"><Faq items={t.faq.items} /></div>
            <p className="rv more"><SmartLink className="ulink" href="/preguntas-frecuentes">{t.faq.all}</SmartLink></p>
          </div>
        </section>
      </main>

      <Footer
        cta={{
          title: <>{t.footer.title.split('<br>').map((l, i) => <span key={i}>{i > 0 && <br />}<Rich text={l} /></span>)}</>,
          sub: t.footer.sub,
          actions: <Pill variant="cream" href={LINKS.signup} icon={ArrowRight}>{t.footer.primary}</Pill>,
        }}
      />
      <FloatingCta label={t.float.label} cta={t.float.cta} href={LINKS.signup} />
    </div>
  )
}
