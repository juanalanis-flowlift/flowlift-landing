import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { counterpart, type Lang } from '../i18n/routes'
import { COMMON } from '../content/common'

// Selector ES / EN: lleva a la misma página en el otro idioma.
export default function LangSwitch({ className = '' }: { className?: string }) {
  const lang = useLang()
  const { pathname, hash } = useLocation()
  const t = COMMON[lang].nav
  const item = (l: Lang, label: string, name: string) =>
    l === lang
      ? <span className="lang-on" aria-current="true"><span aria-hidden="true">{label}</span><span className="sr">{name}</span></span>
      : <Link className="lang-off" to={counterpart(pathname, l) + (hash || '')} hrefLang={l === 'en' ? 'en' : 'es-MX'} lang={l} aria-label={name}>{label}</Link>
  return (
    <div className={'lang ' + className} role="group" aria-label={t.language}>
      {item('es', 'ES', 'Español')}
      <span className="lang-sep" aria-hidden="true">/</span>
      {item('en', 'EN', 'English')}
    </div>
  )
}
