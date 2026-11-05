import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { localize } from '../i18n/routes'

// Las rutas internas se escriben en español ("/citas") y aquí se convierten al idioma de la página.
// Anclas (#flujo), correos y URLs externas se dejan igual.
export default function SmartLink({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const lang = useLang()
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={localize(href, lang)} {...rest}>{children}</Link>
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} {...(external ? { rel: 'noopener' } : {})} {...rest}>{children}</a>
  )
}
