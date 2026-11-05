import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pill from '../components/Pill'
import Rich from '../components/Rich'
import PageHero from '../components/PageHero'
import FeatureGrid from '../components/FeatureGrid'
import { LINKS } from '../config'
import { FUNCIONES } from '../content/funciones'
import { useLang } from '../i18n/LangContext'
import '../styles/pages.css'

const PLAN = { es: { pro: 'Pro+', teams: 'Equipos' }, en: { pro: 'Pro+', teams: 'Teams' } }

export default function Funciones() {
  const lang = useLang()
  const t = FUNCIONES[lang]
  const plan = PLAN[lang]
  const ex = t.exclusive
  return (
    <div className="ed">
      <Seo page="funciones" />
      <Nav mode="citas" here="funciones" />
      <main id="contenido">
        <PageHero eyebrow={lang === 'en' ? '[ flowlift Appointments ]' : '[ flowlift Citas ]'} title={t.hero.title} lead={t.hero.lead} />

        <section className="sec-tight">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">[ 01 ] · {ex.eyebrow}</span>
              <h2 className="h2"><Rich text={ex.title} /></h2>
              <p className="body">{ex.lead}</p>
            </div>
            <div className="rv"><FeatureGrid items={ex.distinct} cols={2} plan={plan} /></div>

            <div className="sub-head rv"><h3>{ex.routine.title}</h3><p>{ex.routine.lead}</p></div>
            <div className="rv"><FeatureGrid level={4} items={ex.routine.items} cols={4} plan={plan} compact /></div>

            <div className="sub-head rv"><h3>{ex.game.title}</h3><p>{ex.game.lead}</p></div>
            <div className="rv"><FeatureGrid level={4} items={ex.game.items} cols={3} plan={plan} /></div>

            <div className="sub-head rv"><h3>{ex.small.title}</h3><p>{ex.small.lead}</p></div>
            <div className="rv"><FeatureGrid level={4} items={ex.small.items} cols={3} plan={plan} compact /></div>
          </div>
        </section>

        <section className="sec sec-sunk">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">[ 02 ] · {t.expected.eyebrow}</span>
              <h2 className="h2"><Rich text={t.expected.title} /></h2>
              <p className="body">{t.expected.lead}</p>
            </div>
            <div className="rv"><FeatureGrid items={t.expected.items} cols={4} plan={plan} compact /></div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">[ 03 ] · {t.barriers.eyebrow}</span>
              <h2 className="h2"><Rich text={t.barriers.title} /></h2>
              <p className="body">{t.barriers.lead}</p>
            </div>
            <div className="rv"><FeatureGrid items={t.barriers.items} cols={2} plan={plan} /></div>
          </div>
        </section>

        <section className="sec sec-sunk">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="num">[ 04 ] · {t.roadmap.eyebrow}</span>
              <h2 className="h2"><Rich text={t.roadmap.title} /></h2>
              <p className="body">{t.roadmap.lead}</p>
            </div>
            <div className="rv"><FeatureGrid items={t.roadmap.items} cols={3} plan={plan} compact muted /></div>
            <div className="callout rv">
              <div><h3>{t.roadmap.next.title}</h3><p>{t.roadmap.next.text}</p></div>
              <Pill variant="light" href="/preguntas-frecuentes" icon={ArrowRight}>{t.roadmap.next.cta}</Pill>
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
