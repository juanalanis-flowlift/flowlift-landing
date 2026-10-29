import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

// Rutas internas ("/citas") van por React Router; anclas y URLs externas, por <a>.
export default function SmartLink({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={href} {...rest}>{children}</Link>
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} {...(external ? { rel: 'noopener' } : {})} {...rest}>{children}</a>
  )
}
