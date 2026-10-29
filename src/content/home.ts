import type { FaqItem } from '../components/Faq'

export const HOME_NAV = [
  { label: 'Citas', href: '#citas' },
  { label: 'Clases', href: '#clases' },
  { label: 'Tienda', href: '#tienda' },
]

export const ROTATING_WORDS = ['tu agenda', 'tus alumnos', 'tus pedidos']

// Fotos y bloques de color que flotan en los márgenes del hero.
// --dx / --dy: desplazamiento del parallax. `hide`: se oculta en pantallas de menos de 700 px.
export type FloatItem = {
  src?: string; color?: string
  pos: Record<string, string>; w: number; h: number; dx?: number; dy: number; delay: number
  // En pantallas de menos de 700 px las fotos van en la franja libre junto a la línea "cue", nunca sobre el texto.
  // Sin `m` se ocultan.
  m?: { l?: string; r?: string; t: number; w: number; h: number; dy?: number }
}
export const HERO_FLOATS: FloatItem[] = [
  { src: '/assets/photos/unas.webp', pos: { left: '3%', top: '150px' }, w: 150, h: 190, dx: -40, dy: -260, delay: 200, m: { l: '5%', t: 560, w: 84, h: 106 } },
  { src: '/assets/photos/cliente-pagando.webp', pos: { left: '10%', top: '470px' }, w: 118, h: 118, dx: -30, dy: -140, delay: 320 },
  { src: '/assets/photos/barbero.webp', pos: { left: '2%', top: '700px' }, w: 170, h: 210, dx: -60, dy: -380, delay: 440, m: { l: '26%', t: 690, w: 80, h: 100 } },
  { src: '/assets/photos/estilista-y-clienta.webp', pos: { right: '4%', top: '120px' }, w: 160, h: 204, dx: 40, dy: -300, delay: 260, m: { r: '5%', t: 540, w: 88, h: 112 } },
  { src: '/assets/photos/entrenador.webp', pos: { right: '11%', top: '470px' }, w: 110, h: 140, dx: 30, dy: -160, delay: 380 },
  { src: '/assets/photos/recepcionista.webp', pos: { right: '3%', top: '700px' }, w: 180, h: 180, dx: 50, dy: -420, delay: 500, m: { r: '26%', t: 680, w: 84, h: 84 } },
  { src: '/assets/photos/entrada-salon.webp', pos: { left: '27%', top: '54px' }, w: 96, h: 96, dy: -110, delay: 560 },
  { src: '/assets/photos/clase-taekwondo.webp', pos: { right: '27%', top: '40px' }, w: 128, h: 84, dy: -200, delay: 620 },
  { src: '/assets/photos/c17.webp', pos: { left: '22%', bottom: '40px' }, w: 130, h: 92, dy: -80, delay: 700 },
  { src: '/assets/photos/fotografa.webp', pos: { right: '21%', bottom: '20px' }, w: 92, h: 114, dy: -240, delay: 760 },
  { color: 'var(--green-light)', pos: { left: '15%', top: '300px' }, w: 38, h: 28, dy: -320, delay: 820, m: { l: '40%', t: 640, w: 28, h: 20 } },
  { color: 'var(--green-primary)', pos: { right: '17%', top: '330px' }, w: 26, h: 20, dy: -180, delay: 860 },
  { color: 'var(--block-sand)', pos: { right: '9%', top: '640px' }, w: 50, h: 34, dy: -260, delay: 900, m: { r: '40%', t: 620, w: 34, h: 24 } },
  { color: 'var(--block-sage)', pos: { left: '13%', top: '640px' }, w: 30, h: 40, dy: -140, delay: 940 },
]

export const FLOW_STEPS = [
  { t: 'Llega', d: 'Te encuentra por tu link o tu QR.', on: true },
  { t: 'Aparta', d: 'Elige su cita, su clase o su pedido.', on: false },
  { t: 'Paga', d: 'Con tarjeta, en OXXO o en tu local.', on: false },
  { t: 'Regresa', d: 'Con recordatorios por WhatsApp.', on: true },
]

export const SHARED_BASE = [
  { icon: 'Link', t: 'Un link y un QR', d: 'Para tu bio, tu estado de WhatsApp o tu mostrador.' },
  { icon: 'Smartphone', t: 'Nada que descargar', d: 'Tus clientes usan el navegador de su celular.' },
  { icon: 'MessageSquare', t: 'WhatsApp como canal', d: 'Confirmaciones y avisos donde sí los leen.' },
  { icon: 'CreditCard', t: 'Pagos en pesos', d: 'Con tarjeta o en efectivo en OXXO.' },
  { icon: 'ShieldCheck', t: 'Seguro desde el inicio', d: 'Entras con Google o Microsoft. Tus datos no se venden.' },
  { icon: 'MapPin', t: 'Hecho en México', d: 'Español primero, para como trabajas aquí.' },
] as const

export const ORBIT_PICS = [
  '/assets/photos/c01.webp', '/assets/photos/clase-taekwondo.webp', '/assets/photos/c04.webp',
  '/assets/photos/clase-ballet.webp', '/assets/photos/c07.webp', '/assets/photos/clase-natacion.webp',
  '/assets/photos/estilista-y-clienta.webp', '/assets/photos/clase-salsa.webp', '/assets/photos/consultoria.webp',
  '/assets/photos/clase-arte.webp', '/assets/photos/inflables.webp', '/assets/photos/estilista.webp',
]
export const ORBIT_BLOCKS = ['var(--green-light)', 'var(--block-sand)', 'var(--green-primary)', 'var(--block-sage)']

export const HOME_FAQS: FaqItem[] = [
  { q: '¿Qué es flowlift?', a: 'Herramientas sencillas para pequeños negocios de servicio en México. Hoy puedes usar Citas; Clases y Tienda llegan a inicios de 2027.' },
  { q: '¿Mis clientes tienen que descargar algo?', a: 'No. Todo funciona desde un link en el navegador de su celular, sin descargar nada y sin crear cuenta.' },
  { q: '¿Cuánto cuesta?', a: 'Citas tiene un plan gratis para siempre, y Pro+ cuesta $349 al mes con 14 días gratis, sin tarjeta. Los precios de Clases y Tienda se anunciarán al lanzarlos.' },
  { q: '¿Cuándo llegan Clases y Tienda?', a: 'A inicios de 2027. Déjanos tu correo en cada una y te avisamos en cuanto abran.' },
  { q: '¿Para qué tipo de negocio es?', a: 'Para negocios pequeños que trabajan con citas, con clases o vendiendo sus productos: salones, barberías, consultorios, academias, instructores y tiendas.' },
]

export type HomeProduct = {
  id: 'citas' | 'clases' | 'tienda'
  n: string
  name: string
  live: boolean
  tagline: string
  points: string[]
  main?: { src: string; alt: string; pos?: string }
  small?: { src: string; alt: string; pos?: string }
  reverse?: boolean
}

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    id: 'citas', n: '02.1', name: 'Citas', live: true,
    tagline: 'Para quien trabaja con citas: estilistas, barberos, uñas, fotógrafos, consultorios.',
    points: [
      'Tus clientes reservan desde tu link, sin descargar nada.',
      'Cero citas encimadas: solo se ven tus horarios libres.',
      'Confirmaciones, recordatorios y anticipos sin escribir nada.',
    ],
    main: { src: '/assets/photos/full-estilista-hero.webp', alt: 'Estilista atendiendo a su clienta', pos: '40% center' },
    small: { src: '/assets/photos/barbero.webp', alt: 'Barbero con su cliente' },
  },
  {
    id: 'clases', n: '02.2', name: 'Clases', live: false, reverse: true,
    tagline: 'Para escuelas pequeñas e instructores: música, yoga, pilates, deportes, tutorías.',
    points: [
      'Las familias inscriben desde un link en menos de 2 minutos.',
      'Cupo, mensualidades, paquetes y lista de espera.',
      'Avisos y confirmaciones por WhatsApp, sin mandarlos uno por uno.',
    ],
    main: { src: '/assets/photos/clase-piano.webp', alt: 'Maestra de piano guiando a una alumna', pos: '62% center' },
    small: { src: '/assets/photos/clase-recepcion-papa-hijo.webp', alt: 'Recepción de un estudio atendiendo a un papá y su hijo', pos: '70% center' },
  },
  {
    // TODO: fotos de Tienda y tercer beneficio, pendientes de confirmar
    id: 'tienda', n: '02.3', name: 'Tienda', live: false,
    tagline: 'Para quien vende sus productos: repostería, ropa, artesanías, belleza.',
    points: [
      'Tu catálogo en un link que compartes por WhatsApp e Instagram.',
      'Tus pedidos ordenados en un solo lugar, no en veinte chats.',
      '[Tercer beneficio de Tienda por confirmar]',
    ],
  },
]
