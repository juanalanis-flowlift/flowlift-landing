import { ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Seo from '../components/Seo'
import { NOT_FOUND_META } from '../content/seo'

export default function NotFound() {
  return (
    <div className="ed">
      <Seo meta={NOT_FOUND_META} />
      <Nav homeHref="/" items={[]} />
      <main className="nf">
        <span className="num">[ 404 ]</span>
        <h1 className="giant nf-title">Esta página <span className="it green">no existe.</span></h1>
        <p className="body nf-sub">Puede que el link esté incompleto o que la página ya no esté.</p>
        <Pill href="/" icon={ArrowRight}>Volver al inicio</Pill>
      </main>
    </div>
  )
}
