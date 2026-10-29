import { ArrowRight, ChevronDown } from 'lucide-react'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Faq from '../components/Faq'
import Waitlist from '../components/Waitlist'
import Placeholder from '../components/Placeholder'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'
import { LINKS } from '../config'

// Muestrario de la fase 1 (solo desarrollo).
export default function Kit() {
  return (
    <div className="ed">
      <Nav items={[{ label: 'Citas', href: '#a' }, { label: 'Clases', href: '#b' }, { label: 'Tienda', href: '#c' }]} />
      <div className="wrap" style={{ paddingTop: 130, display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h1 className="giant" style={{ fontSize: 'clamp(54px,9vw,140px)' }}>Tu negocio, <span className="it green">bajo</span> control.</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Pill href="#" icon={ArrowRight}>14 días gratis</Pill>
          <Pill href="#" variant="light" icon={ChevronDown}>Ver cómo funciona</Pill>
          <Pill small href="#" icon={ArrowRight}>Crea tu link</Pill>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28 }}>
          <div><Waitlist product="clases" name="Clases" /></div>
          <div style={{ aspectRatio: '4/5' }}><Placeholder>[Foto: pendiente]<br />Vertical 4:5</Placeholder></div>
        </div>
        <Faq items={[
          { q: '¿Mis clientes tienen que descargar algo?', a: 'No. Reservan desde tu link en el navegador de su celular, sin descargar nada y sin crear cuenta.' },
          { q: '¿Necesito tarjeta para empezar?', a: 'No. Starter es gratis para siempre y los 14 días gratis tampoco piden tarjeta.' },
        ]} />
      </div>
      <Footer
        title={<>Tu negocio,<br /><span className="it">listo hoy.</span></>}
        actions={<><Pill variant="cream" href="#" icon={ArrowRight}>Crea tu link de citas</Pill><Pill variant="ghost" href="#clases" icon={ArrowRight}>Avísame de Clases y Tienda</Pill></>}
        links={[{ label: 'Citas', href: '/citas' }, { label: 'Ayuda', href: LINKS.help }, { label: 'Términos', href: LINKS.terms }, { label: 'Privacidad', href: LINKS.privacy }]}
      />
      <FloatingCta label="CITAS · 14 DÍAS GRATIS" cta="Crea tu link" href="#" />
    </div>
  )
}
