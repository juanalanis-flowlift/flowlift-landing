import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { COMMON } from '../content/common'
import { LINKS } from '../config'
import { useLang } from '../i18n/LangContext'
import { path, type PageKey } from '../i18n/routes'
import SmartLink from './SmartLink'
import LangSwitch from './LangSwitch'
import Pill from './Pill'

type Mode = 'brand' | 'citas'
type Item = { key: string; href: string }

// Enlaces de la barra según el contexto: la marca (Home, Sobre nosotros, legales) o el producto Citas.
// Los hrefs se escriben en español; SmartLink los convierte al idioma de la página.
function barItems(mode: Mode, here: PageKey): Item[] {
  if (mode === 'brand') {
    const home = here === 'home'
    return [
      { key: 'citas', href: home ? '#citas' : '/citas' },
      { key: 'clases', href: home ? '#clases' : '/#clases' },
      { key: 'tienda', href: home ? '#tienda' : '/#tienda' },
      { key: 'ayuda', href: '/ayuda' },
    ]
  }
  if (here === 'citas') {
    return [
      { key: 'flujo', href: '#flujo' }, { key: 'funciones', href: '#funciones' }, { key: 'precios', href: '#precios' }, { key: 'ayuda', href: '/ayuda' },
    ]
  }
  return [
    { key: 'flujo', href: '/citas#flujo' }, { key: 'funciones', href: '/funciones' }, { key: 'precios', href: '/precios' },
    { key: 'faq', href: '/preguntas-frecuentes' }, { key: 'ayuda', href: '/ayuda' },
  ]
}

// Menú del celular: todo el sitio.
const SHEET: Item[] = [
  { key: 'citas', href: '/citas' }, { key: 'clases', href: '/#clases' }, { key: 'tienda', href: '/#tienda' },
  { key: 'funciones', href: '/funciones' }, { key: 'precios', href: '/precios' }, { key: 'faq', href: '/preguntas-frecuentes' },
  { key: 'ayuda', href: '/ayuda' }, { key: 'nosotros', href: '/nosotros' },
]

export default function Nav({ mode, here }: { mode: Mode; here: PageKey }) {
  const lang = useLang()
  const t = COMMON[lang].nav
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const sheet = useRef<HTMLDivElement>(null)
  const items = barItems(mode, here)
  const product = mode === 'citas' ? (lang === 'en' ? 'Appointments' : 'Citas') : undefined

  // El menú se cierra al cambiar de página.
  useEffect(() => { setOpen(false) }, [pathname])

  // Bloquea el scroll de fondo, mueve el foco al abrir y lo devuelve al cerrar; Esc cierra; Tab no sale del menú.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const links = () => [...(sheet.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])]
    links()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); return }
      if (e.key !== 'Tab') return
      const l = [toggle.current!, ...links()]
      const i = l.indexOf(document.activeElement as HTMLElement)
      if (e.shiftKey && i <= 0) { e.preventDefault(); l.at(-1)!.focus() }
      else if (!e.shiftKey && i === l.length - 1) { e.preventDefault(); l[0].focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [open])

  const isHere = (href: string) => !href.startsWith('#') && href.split('#')[0] === path(here, 'es') && !href.includes('#')

  return (
    <>
      <a className="skip" href="#contenido">{COMMON[lang].skip}</a>
      <header className="nav">
        <SmartLink className="nav-brand" href="/" aria-label={COMMON[lang].footer.home}>
          <img src="/assets/brand/logo.svg" alt="flowlift" width={122} height={26} />
          {product && <span className="serif it nav-product">{product}</span>}
        </SmartLink>
        <nav className="nav-links" aria-label={t.main}>
          {items.map((i) => (
            <SmartLink key={i.key} className="navlink nav-hide" href={i.href} aria-current={isHere(i.href) ? 'page' : undefined}>
              {t.items[i.key as keyof typeof t.items]}
            </SmartLink>
          ))}
          <LangSwitch className="nav-hide" />
          <SmartLink className="navlink" href={LINKS.login}>{t.login}</SmartLink>
          <button
            ref={toggle} type="button" className="nav-toggle" aria-expanded={open} aria-controls="menu-movil"
            aria-label={open ? t.menuClose : t.menuOpen} onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <div id="menu-movil" ref={sheet} className={'sheet' + (open ? ' open' : '')} hidden={!open}>
        <nav className="sheet-nav" aria-label={t.main}>
          {SHEET.map((i) => (
            <SmartLink key={i.key} className="sheet-link serif" href={i.href} aria-current={isHere(i.href) ? 'page' : undefined}>
              {t.items[i.key as keyof typeof t.items]}
            </SmartLink>
          ))}
        </nav>
        <div className="sheet-foot">
          <Pill href={LINKS.signup} icon={ArrowRight}>{t.start}</Pill>
          <LangSwitch />
        </div>
      </div>
    </>
  )
}
