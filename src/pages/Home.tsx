import { ArrowRight, Bell, Check, ChevronDown, CreditCard, Link as LinkIcon, MapPin, MessageSquare, ShieldCheck, Smartphone, type LucideIcon } from 'lucide-react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Pill from '../components/Pill'
import Img from '../components/Img'
import Faq from '../components/Faq'
import Rich from '../components/Rich'
import Waitlist from '../components/Waitlist'
import Placeholder from '../components/Placeholder'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config'
import { HERO_FLOATS, HOME, ORBIT_BLOCKS, ORBIT_PICS, type FloatItem, type HomeProduct } from '../content/home'
import { useLang } from '../i18n/LangContext'
import { usePageVisible } from '../hooks/usePageVisible'
import '../styles/home.css'

const ICONS: Record<string, LucideIcon> = { Link: LinkIcon, Smartphone, MessageSquare, CreditCard, ShieldCheck, MapPin }

// Posiciones de la órbita (misma fórmula de la referencia).
const ORBIT = Array.from({ length: 16 }, (_, i) => {
  const N = 16, rx = 500, ry = 320
  const a = (i / N) * Math.PI * 2 - Math.PI / 2
  const isImg = i % 4 !== 3
  const w = isImg ? [118, 92, 140, 104][i % 4] : 36 + (i % 3) * 8
  const h = isImg ? Math.round(w * (i % 3 === 0 ? 1.25 : 0.78)) : Math.round(w * 0.7)
  const x = 580 + Math.cos(a) * rx * (0.86 + (i % 3) * 0.08) - w / 2
  const y = 380 + Math.sin(a) * ry * (0.86 + ((i + 1) % 3) * 0.08) - h / 2
  return { isImg, w, h, x: Math.round(x), y: Math.round(y), src: ORBIT_PICS[(i * 7) % ORBIT_PICS.length], color: ORBIT_BLOCKS[i % 4] }
})

function HeroFloat({ f }: { f: FloatItem }) {
  const style = {
    '--l': f.pos.left, '--r': f.pos.right, '--t': f.pos.top, '--b': f.pos.bottom,
    '--w': `${f.w}px`, '--h': `${f.h}px`, '--dxd': `${f.dx ?? 0}px`, '--dyd': `${f.dy}px`,
    '--ml': f.m?.l, '--mr': f.m?.r, '--mt': f.m ? `${f.m.t}px` : undefined,
    '--mw': f.m ? `${f.m.w}px` : undefined, '--mh': f.m ? `${f.m.h}px` : undefined, '--dym': `${f.m?.dy ?? -60}px`,
    animationDelay: `${f.delay}ms`,
    ...(f.color ? { background: f.color } : {}),
  } as React.CSSProperties
  const cls = `fl${f.color ? ' fl-b' : ''} par${f.m ? '' : ' hm'}`
  return (
    <div className={cls} style={style}>
      {f.src && <div className="fl-in"><Img src={f.src} eager={!!f.m} /></div>}
    </div>
  )
}

function Product({ p, t }: { p: HomeProduct; t: (typeof HOME)['es']['products'] }) {
  const side = p.reverse ? 'l' : 'r'
  return (
    <article id={p.id} className={'prod' + (p.reverse ? ' rev' : '')}>
      <div className="prod-media">
        <div className="prod-img unclip">
          {p.main
            ? <Img src={p.main.src} alt={p.main.alt} style={{ objectPosition: p.main.pos }} />
            // TODO: foto de Tienda (emprendedora empacando pedidos), vertical 4:5
            : <Placeholder>{t.photoMain}<br />{t.photoMainSub}</Placeholder>}
        </div>
        <div className={`prod-sm ${side} vpar`} style={{ '--from': '80px', '--to': '-80px' } as React.CSSProperties}>
          {p.small
            ? <Img src={p.small.src} alt={p.small.alt} style={{ objectPosition: p.small.pos }} />
            // TODO: foto de Tienda (producto listo para entregar)
            : <Placeholder small>{t.photoSmall}</Placeholder>}
        </div>
      </div>
      <div className="prod-copy rv">
        <div className="prod-row">
          <span className="num">[ {p.n} ]</span>
          {p.live
            ? <span className="status st-on"><span className="dotlive" />{t.available}</span>
            : <span className="status st-soon">{t.soon}</span>}
        </div>
        <h3 className="pname">{p.name}</h3>
        <p className="serif it tagline">{p.tagline}</p>
        <div className="points">
          {p.points.map((x) => <span className="li" key={x}><Check size={18} aria-hidden="true" />{x}</span>)}
        </div>
        {p.live ? (
          <>
            <div className="cta-row">
              <Pill href={LINKS.signup} icon={ArrowRight}>{t.trial}</Pill>
              <SmartLink className="ulink" href="/citas">{t.detail}</SmartLink>
            </div>
            <span className="muted note">{t.price}</span>
          </>
        ) : (
          <>
            <div style={{ paddingTop: 6 }}><Waitlist product={p.id as 'clases' | 'tienda'} name={p.name} /></div>
            <span className="muted note">{t.waitNote}</span>
          </>
        )}
      </div>
    </article>
  )
}

export default function Home() {
  const lang = useLang()
  const t = HOME[lang]
  const visible = usePageVisible()
  return (
    <div className="ed" data-paused={!visible}>
      <Seo page="home" />
      <Nav mode="brand" here="home" />

      <main id="contenido">
        <section id="inicio" className="hero">
          <div aria-hidden="true">{HERO_FLOATS.map((f, i) => <HeroFloat key={i} f={f} />)}</div>
          <h1 className="giant">{t.hero.lines.map((l, i) => <span key={i}>{l.startsWith('~') ? <span className="it green">{l.slice(1, -1)}</span> : l}</span>)}</h1>
          <div className="hero-sub">
            <p className="serif">
              {t.hero.before}{' '}
              <span className="rot" aria-hidden="true">
                <span className="rot-in">
                  {[...t.hero.words, t.hero.words[0]].map((w, i) => <span key={i}>{w}</span>)}
                </span>
              </span>
              <span className="sr">{t.hero.sr}</span>{' '}
              {t.hero.after}
            </p>
            <Pill href="#productos" icon={ChevronDown}>{t.hero.cta}</Pill>
          </div>
          <div className="cue" aria-hidden="true" />
        </section>

        <section className="sec-manifesto">
          <div aria-hidden="true">
            <div className="edge vpar hm" style={{ left: '5%', top: 40, width: 130, height: 164, '--from': '160px', '--to': '-200px' } as React.CSSProperties}><Img src="/assets/photos/duena-con-telefono.webp" /></div>
            <div className="edge vpar hm" style={{ right: '7%', top: 260, width: 150, height: 112, '--from': '60px', '--to': '-260px' } as React.CSSProperties}><Img src="/assets/photos/clase-ballet.webp" /></div>
            <div className="edge vpar" style={{ right: '18%', top: 40, width: 34, height: 26, background: 'var(--green-light)', boxShadow: 'none', '--from': '100px', '--to': '-140px' } as React.CSSProperties} />
          </div>
          <div className="center rv" style={{ padding: '0 28px', position: 'relative' }}>
            <span className="num">{t.manifesto.n}</span>
            <h2 className="h2"><Rich text={t.manifesto.title} /></h2>
            <p className="body">{t.manifesto.body}</p>
          </div>
          <div className="wrap" style={{ marginTop: 96 }}>
            <div className="flow rv">
              <div className="flow-line" aria-hidden="true" />
              {t.manifesto.steps.map((s) => (
                <div className="flow-st" key={s.t}>
                  <span className={'flow-dot' + (s.on ? ' on' : '')} />
                  <span className="num">{s.t}</span>
                  <span className="small">{s.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" style={{ padding: '40px 0 120px' }}>
          <div className="center rv" style={{ padding: '0 28px', marginBottom: 120 }}>
            <span className="num">{t.products.n}</span>
            <h2 className="h2"><Rich text={t.products.title} /></h2>
          </div>
          <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 180 }}>
            {t.products.list.map((p) => <Product key={p.id} p={p} t={t.products} />)}
          </div>
        </section>

        <section style={{ padding: '140px 0 120px' }}>
          <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 680 }}>
              <span className="num">{t.shared.n}</span>
              <h2 className="h2"><Rich text={t.shared.title} /></h2>
            </div>
            <div className="shared rv">
              {t.shared.items.map((s) => {
                const Icon = ICONS[s.icon]
                return (
                  <div className="sh" key={s.t}>
                    <Icon size={22} aria-hidden="true" />
                    <span className="serif sh-t">{s.t}</span>
                    <span className="muted sh-d">{s.d}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="orbit-sec" aria-labelledby="q4">
          <div className="ring-s" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
            <div className="ring">
              {ORBIT.map((o, i) => (
                <div
                  className="oi" key={i}
                  style={{ left: o.x, top: o.y, width: o.w, height: o.h, ...(o.isImg ? {} : { background: o.color, boxShadow: 'none' }) }}
                >
                  {o.isImg && <Img src={o.src} />}
                </div>
              ))}
            </div>
          </div>
          <div className="center" style={{ position: 'relative', zIndex: 2, maxWidth: 560, padding: '0 24px' }}>
            <span className="num">{t.orbit.n}</span>
            <h2 id="q4" className="h2"><Rich text={t.orbit.title} /></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, paddingTop: 8 }}>
              <Pill variant="light" href="#citas">{t.orbit.buttons[0]}</Pill>
              <Pill variant="light" href="#clases">{t.orbit.buttons[1]}</Pill>
              <Pill variant="light" href="#tienda">{t.orbit.buttons[2]}</Pill>
            </div>
          </div>
        </section>

        <section style={{ padding: '120px 0 140px' }}>
          <div className="wrap" style={{ maxWidth: 880, display: 'flex', flexDirection: 'column', gap: 120 }}>
            <div className="founder rv">
              {/* TODO: texto del fundador (la foto ya está) */}
              <div className="founder-photo"><Img src="/assets/photos/fundador.webp" alt={t.founder.photoAlt} /></div>
              <div className="founder-copy">
                <span className="num">{t.founder.label}</span>
                <p className="serif">{t.founder.text}</p>
                <span className="muted by">{t.founder.by}</span>
              </div>
            </div>
            <div>
              <div className="center rv" style={{ marginBottom: 40 }}>
                <span className="num">{t.faq.n}</span>
                <h2 className="h2"><Rich text={t.faq.title} /></h2>
              </div>
              <div className="rv"><Faq items={t.faq.items} /></div>
              <p className="rv more"><SmartLink className="ulink" href="/preguntas-frecuentes">{t.faq.all}</SmartLink></p>
            </div>
          </div>
        </section>
      </main>

      <Footer
        cta={{
          title: <>{t.footer.title.split('<br>').map((l, i) => <span key={i}>{i > 0 && <br />}<Rich text={l} /></span>)}</>,
          decor: (
            <div aria-hidden="true">
              <div className="edge edge-foot vpar hm" style={{ left: '6%', top: 90, width: 150, height: 190, '--from': '120px', '--to': '-120px' } as React.CSSProperties}><Img src="/assets/photos/estilista.webp" /></div>
              <div className="edge edge-foot vpar hm" style={{ right: '7%', top: 220, width: 130, height: 130, '--from': '40px', '--to': '-200px' } as React.CSSProperties}><Img src="/assets/photos/unas-estacion.webp" /></div>
            </div>
          ),
          actions: <>
            <Pill variant="cream" href={LINKS.signup} icon={ArrowRight}>{t.footer.primary}</Pill>
            <Pill variant="ghost" href="#clases" icon={Bell}>{t.footer.secondary}</Pill>
          </>,
        }}
      />
      <FloatingCta label={t.float.label} cta={t.float.cta} href={LINKS.signup} />
    </div>
  )
}
