import { ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Rich from '../components/Rich'
import Seo from '../components/Seo'
import { COMMON } from '../content/common'
import { useLang } from '../i18n/LangContext'

export default function NotFound() {
  const lang = useLang()
  const t = COMMON[lang].notFound
  return (
    <div className="ed">
      <Seo custom={{ title: lang === 'en' ? 'Page not found — flowlift' : 'Página no encontrada — flowlift', description: t.text, ogImage: '/og/home.png', ogAlt: 'flowlift', noindex: true }} />
      <Nav mode="brand" here="home" />
      <main id="contenido" className="nf">
        <span className="num">[ 404 ]</span>
        <h1 className="giant nf-title"><Rich text={t.title} /></h1>
        <p className="body nf-sub">{t.text}</p>
        <Pill href="/" icon={ArrowRight}>{t.back}</Pill>
      </main>
    </div>
  )
}
