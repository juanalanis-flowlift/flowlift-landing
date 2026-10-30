import { ArrowRight, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'
import Stage from '../sections/citas/Stage'
import Showcase from '../sections/citas/Showcase'
import Tour from '../sections/citas/Tour'
import Pricing from '../sections/citas/Pricing'
import { LINKS } from '../config'
import { ROUTES_META } from '../content/seo'
import { CITAS_FAQS, CITAS_NAV } from '../content/citas'
import '../styles/citas.css'

export default function Citas() {
  return (
    <div className="ed">
      <Seo meta={ROUTES_META[1]} />
      <Nav items={CITAS_NAV} product="Citas" homeHref="/" />

      <main>
        <section className="citas-hero">
          <div className="wrap">
            <span className="num">[ flowlift Citas ]</span>
            <h1 className="giant">Tu agenda, <span className="it green">bajo</span> control.</h1>
            <p className="body">Tus clientes reservan desde un link, les llega su confirmación por WhatsApp y apartan con anticipo. Tú solo atiendes.</p>
            <div className="hero-actions">
              <Pill href={LINKS.signup} icon={ArrowRight}>14 días gratis</Pill>
              <Pill variant="light" href="#flujo" icon={ChevronDown}>Ver cómo funciona</Pill>
            </div>
            <span className="muted hero-note">Sin tarjeta. Plan gratis para siempre.</span>
            <Stage />
          </div>
        </section>

        <section id="flujo" className="sec-flujo">
          <div className="center center--wide rv sec-head">
            <span className="num">[ 01 ]</span>
            <h2 className="h2">Del link a tu agenda, <span className="it">sin mensajes de por medio.</span></h2>
            <p className="body">Tu cliente elige, flowlift confirma, le recuerda su cita y la acomoda en tu agenda.</p>
          </div>
          <div className="wrap" style={{ maxWidth: 1320 }}><Showcase /></div>
        </section>

        <section id="funciones" className="sec-tour">
          <div className="center center--wide rv sec-head" style={{ marginBottom: 40 }}>
            <span className="num">[ 02 ]</span>
            <h2 className="h2">Todo lo que usas a diario. <span className="it">Nada de relleno.</span></h2>
          </div>
          <Tour />
        </section>

        <section id="precios" className="sec-precios"><Pricing /></section>

        <section className="sec-faq">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="center center--wide rv" style={{ marginBottom: 40 }}>
              <span className="num">[ 04 ]</span>
              <h2 className="h2">Lo que <span className="it">nos preguntan.</span></h2>
            </div>
            <div className="rv"><Faq items={CITAS_FAQS} /></div>
          </div>
        </section>
      </main>

      <Footer
        title={<>Tu agenda,<br /><span className="it">lista hoy.</span></>}
        sub="Crea tu link en minutos. Sin tarjeta."
        actions={<Pill variant="cream" href={LINKS.signup} icon={ArrowRight}>Crea tu link gratis</Pill>}
        links={[{ label: 'flowlift', href: '/' }, { label: 'Ayuda', href: LINKS.help }, { label: 'Términos', href: LINKS.terms }, { label: 'Privacidad', href: LINKS.privacy }]}
      />
      <FloatingCta label="14 DÍAS GRATIS" cta="Crea tu link" href={LINKS.signup} />
    </div>
  )
}
