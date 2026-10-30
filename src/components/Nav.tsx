import { LINKS } from '../config'
import SmartLink from './SmartLink'

export type NavItem = { label: string; href: string }

// Navegación fija. `product` agrega el nombre del producto junto al logo (p. ej. "Citas").
export default function Nav({ items, product, homeHref = '#inicio' }: { items: NavItem[]; product?: string; homeHref?: string }) {
  return (
    <header className="nav">
      <SmartLink className="nav-brand" href={homeHref} aria-label={product ? `flowlift ${product}, inicio` : 'flowlift, inicio'}>
        <img src="/assets/brand/logo.svg" alt="flowlift" width={122} height={26} />
        {product && <span className="serif it nav-product">{product}</span>}
      </SmartLink>
      <nav className="nav-links" aria-label="Principal">
        {items.map((i) => (
          <SmartLink key={i.label} className="navlink nav-hide" href={i.href}>{i.label}</SmartLink>
        ))}
        <SmartLink className="navlink" href={LINKS.login}>Entrar</SmartLink>
      </nav>
    </header>
  )
}
