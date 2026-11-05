import type { Lang } from '../i18n/routes'

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

export const ORBIT_PICS = [
  '/assets/photos/c01.webp', '/assets/photos/clase-taekwondo.webp', '/assets/photos/c04.webp',
  '/assets/photos/clase-ballet.webp', '/assets/photos/c07.webp', '/assets/photos/clase-natacion.webp',
  '/assets/photos/estilista-y-clienta.webp', '/assets/photos/clase-salsa.webp', '/assets/photos/consultoria.webp',
  '/assets/photos/clase-arte.webp', '/assets/photos/inflables.webp', '/assets/photos/estilista.webp',
]
export const ORBIT_BLOCKS = ['var(--green-light)', 'var(--block-sand)', 'var(--green-primary)', 'var(--block-sage)']


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

export type SharedItem = { icon: 'Link' | 'Smartphone' | 'MessageSquare' | 'CreditCard' | 'ShieldCheck' | 'MapPin'; t: string; d: string }

const PHOTO = {
  citasMain: '/assets/photos/full-estilista-hero.webp',
  citasSmall: '/assets/photos/barbero.webp',
  clasesMain: '/assets/photos/clase-piano.webp',
  clasesSmall: '/assets/photos/clase-recepcion-papa-hijo.webp',
}

const es = {
  meta: { title: 'flowlift — Tu negocio, bajo control', description: 'Herramientas sencillas para pequeños negocios en México: citas hoy, clases y tienda a inicios de 2027. Todo desde un solo link.', ogAlt: 'flowlift: tu negocio, bajo control' },
  nav: { citas: '#citas', clases: '#clases', tienda: '#tienda' },
  hero: { lines: ['Tu negocio,', '~bajo~', 'control.'], before: 'Ordena', after: 'desde un solo link.', words: ['tu agenda', 'tus alumnos', 'tus pedidos'], sr: 'tu agenda, tus alumnos o tus pedidos', cta: 'Conoce flowlift' },
  manifesto: {
    n: '[ 01 ]', title: 'Tecnología *al servicio de las personas.*',
    body: 'Todo negocio pequeño tiene el mismo ritmo: alguien llega, aparta su lugar, paga y regresa. Puede ser una cita, una clase o un pedido. flowlift ordena ese ritmo para que tú te dediques a lo que sabes hacer.',
    steps: [
      { t: 'Llega', d: 'Te encuentra por tu link o tu QR.', on: true },
      { t: 'Aparta', d: 'Elige su cita, su clase o su pedido.', on: false },
      { t: 'Paga', d: 'Con tarjeta, en OXXO o en tu local.', on: false },
      { t: 'Regresa', d: 'Con recordatorios por WhatsApp.', on: true },
    ],
  },
  products: {
    n: '[ 02 ]', title: 'Una herramienta para cada *forma de trabajar.*',
    available: 'Disponible', soon: 'Llega a inicios de 2027',
    trial: '14 días gratis', detail: 'Ver Citas a detalle', price: 'Desde $0. Pro+ en $349 al mes.', waitNote: 'Déjanos tu correo y te avisamos al abrir.',
    list: [
      {
        id: 'citas', n: '02.1', name: 'Citas', live: true,
        tagline: 'Para quien trabaja con citas: estilistas, barberos, uñas, fotógrafos, consultorios.',
        points: ['Tus clientes reservan desde tu link, sin descargar nada.', 'Cero citas encimadas: solo se ven tus horarios libres.', 'Confirmaciones, recordatorios y anticipos sin escribir nada.'],
        main: { src: PHOTO.citasMain, alt: 'Estilista atendiendo a su clienta', pos: '40% center' },
        small: { src: PHOTO.citasSmall, alt: 'Barbero con su cliente' },
      },
      {
        id: 'clases', n: '02.2', name: 'Clases', live: false, reverse: true,
        tagline: 'Para escuelas pequeñas e instructores: música, yoga, pilates, deportes, tutorías.',
        points: ['Las familias inscriben desde un link en menos de 2 minutos.', 'Cupo, mensualidades, paquetes y lista de espera.', 'Avisos y confirmaciones por WhatsApp, sin mandarlos uno por uno.'],
        main: { src: PHOTO.clasesMain, alt: 'Maestra de piano guiando a una alumna', pos: '62% center' },
        small: { src: PHOTO.clasesSmall, alt: 'Recepción de un estudio atendiendo a un papá y su hijo', pos: '70% center' },
      },
      {
        // TODO: fotos de Tienda y tercer beneficio, pendientes de confirmar
        id: 'tienda', n: '02.3', name: 'Tienda', live: false,
        tagline: 'Para quien vende sus productos: repostería, ropa, artesanías, belleza.',
        points: ['Tu catálogo en un link que compartes por WhatsApp e Instagram.', 'Tus pedidos ordenados en un solo lugar, no en veinte chats.', '[Tercer beneficio de Tienda por confirmar]'],
      },
    ] as HomeProduct[],
    photoMain: '[Foto: emprendedora empacando pedidos en su tiendita]', photoMainSub: 'Vertical 4:5', photoSmall: '[Foto: producto listo para entregar]',
  },
  shared: {
    n: '[ 03 ]', title: 'La misma base, *en cada herramienta.*',
    items: [
      { icon: 'Link', t: 'Un link y un QR', d: 'Para tu bio, tu estado de WhatsApp o tu mostrador.' },
      { icon: 'Smartphone', t: 'Nada que descargar', d: 'Tus clientes usan el navegador de su celular.' },
      { icon: 'MessageSquare', t: 'WhatsApp como canal', d: 'Confirmaciones y avisos donde sí los leen.' },
      { icon: 'CreditCard', t: 'Pagos en pesos', d: 'Con tarjeta o en efectivo en OXXO.' },
      { icon: 'ShieldCheck', t: 'Seguro desde el inicio', d: 'Entras con Google o Microsoft. Tus datos no se venden.' },
      { icon: 'MapPin', t: 'Hecho en México', d: 'Español primero, para como trabajas aquí.' },
    ] as SharedItem[],
  },
  orbit: { n: '[ 04 ]', title: '¿Cómo *trabajas tú?*', buttons: ['Con citas', 'Con clases', 'Vendo productos'] },
  founder: {
    // TODO: texto del fundador (la foto ya está)
    label: 'Quién está detrás', photoAlt: 'Juan Alanis, fundador de flowlift',
    text: '[2 o 3 frases con tus palabras: por qué creaste flowlift y para quién.]', by: 'Juan Alanis · Fundador de flowlift',
  },
  faq: {
    n: '[ 05 ]', title: 'Lo que *nos preguntan.*',
    items: [
      { q: '¿Qué es flowlift?', a: 'Herramientas sencillas para pequeños negocios de servicio en México. Hoy puedes usar Citas; Clases y Tienda llegan a inicios de 2027.' },
      { q: '¿Mis clientes tienen que descargar algo?', a: 'No. Todo funciona desde un link en el navegador de su celular, sin descargar nada y sin crear cuenta.' },
      { q: '¿Cuánto cuesta?', a: 'Citas tiene un plan gratis para siempre, y Pro+ cuesta $349 al mes con 14 días gratis, sin tarjeta. Los precios de Clases y Tienda se anunciarán al lanzarlos.' },
      { q: '¿Cuándo llegan Clases y Tienda?', a: 'A inicios de 2027. Déjanos tu correo en cada una y te avisamos en cuanto abran.' },
      { q: '¿Para qué tipo de negocio es?', a: 'Para negocios pequeños que trabajan con citas, con clases o vendiendo sus productos: salones, barberías, consultorios, academias, instructores y tiendas.' },
    ],
    all: 'Ver todas las preguntas',
  },
  footer: { title: 'Tu negocio,<br>*listo hoy.*', primary: 'Crea tu link de citas', secondary: 'Avísame de Clases y Tienda' },
  float: { label: 'CITAS · 14 DÍAS GRATIS', cta: 'Crea tu link' },
}

const en: typeof es = {
  meta: { title: 'flowlift — Your business, under control', description: 'Simple tools for small businesses in Mexico: appointments today, classes and shop in early 2027. All from a single link.', ogAlt: 'flowlift: your business, under control' },
  nav: { citas: '#citas', clases: '#clases', tienda: '#tienda' },
  hero: { lines: ['Your business,', '~under~', 'control.'], before: 'Organize', after: 'from a single link.', words: ['your schedule', 'your students', 'your orders'], sr: 'your schedule, your students or your orders', cta: 'Meet flowlift' },
  manifesto: {
    n: '[ 01 ]', title: 'Technology *at the service of people.*',
    body: 'Every small business has the same rhythm: someone shows up, saves their spot, pays and comes back. It can be an appointment, a class or an order. flowlift organizes that rhythm so you can focus on what you do best.',
    steps: [
      { t: 'Arrives', d: 'Finds you through your link or QR.', on: true },
      { t: 'Books', d: 'Picks their appointment, class or order.', on: false },
      { t: 'Pays', d: 'By card, at OXXO or at your place.', on: false },
      { t: 'Returns', d: 'With WhatsApp reminders.', on: true },
    ],
  },
  products: {
    n: '[ 02 ]', title: 'A tool for every *way of working.*',
    available: 'Available', soon: 'Coming early 2027',
    trial: '14 days free', detail: 'See Appointments in detail', price: 'From $0. Pro+ at $349 a month.', waitNote: "Leave your email and we'll let you know when it opens.",
    list: [
      {
        id: 'citas', n: '02.1', name: 'Appointments', live: true,
        tagline: 'For people who work by appointment: stylists, barbers, nails, photographers, clinics.',
        points: ['Your clients book from your link, with nothing to download.', 'Zero double bookings: only your open times show.', 'Confirmations, reminders and deposits without typing a thing.'],
        main: { src: PHOTO.citasMain, alt: 'Stylist attending to a client', pos: '40% center' },
        small: { src: PHOTO.citasSmall, alt: 'Barber with a client' },
      },
      {
        id: 'clases', n: '02.2', name: 'Classes', live: false, reverse: true,
        tagline: 'For small schools and instructors: music, yoga, pilates, sports, tutoring.',
        points: ['Families sign up from a link in under 2 minutes.', 'Capacity, monthly plans, packages and waitlist.', 'WhatsApp notices and confirmations, without sending them one by one.'],
        main: { src: PHOTO.clasesMain, alt: 'Piano teacher guiding a student', pos: '62% center' },
        small: { src: PHOTO.clasesSmall, alt: 'Studio front desk helping a parent and child', pos: '70% center' },
      },
      {
        // TODO: Shop photos and third benefit, still to be confirmed
        id: 'tienda', n: '02.3', name: 'Shop', live: false,
        tagline: 'For people who sell products: baking, clothing, crafts, beauty.',
        points: ['Your catalog in a link you share on WhatsApp and Instagram.', 'Your orders in one place, not in twenty chats.', '[Third Shop benefit to be confirmed]'],
      },
    ] as HomeProduct[],
    photoMain: '[Photo: entrepreneur packing orders in their little shop]', photoMainSub: 'Vertical 4:5', photoSmall: '[Photo: product ready for delivery]',
  },
  shared: {
    n: '[ 03 ]', title: 'The same foundation, *in every tool.*',
    items: [
      { icon: 'Link', t: 'One link and a QR', d: 'For your bio, your WhatsApp status or your counter.' },
      { icon: 'Smartphone', t: 'Nothing to download', d: "Your clients use their phone's browser." },
      { icon: 'MessageSquare', t: 'WhatsApp as a channel', d: 'Confirmations and notices where they actually read them.' },
      { icon: 'CreditCard', t: 'Payments in pesos', d: 'By card or in cash at OXXO.' },
      { icon: 'ShieldCheck', t: 'Secure from the start', d: 'You sign in with Google or Microsoft. Your data is never sold.' },
      { icon: 'MapPin', t: 'Made in Mexico', d: 'Spanish first, built for how you work here.' },
    ] as SharedItem[],
  },
  orbit: { n: '[ 04 ]', title: 'How do *you work?*', buttons: ['With appointments', 'With classes', 'I sell products'] },
  founder: {
    // TODO: founder text (the photo is in place)
    label: "Who's behind this", photoAlt: 'Juan Alanis, founder of flowlift',
    text: '[2 or 3 sentences in your own words: why you created flowlift and for whom.]', by: 'Juan Alanis · Founder of flowlift',
  },
  faq: {
    n: '[ 05 ]', title: 'What *people ask us.*',
    items: [
      { q: 'What is flowlift?', a: 'Simple tools for small service businesses in Mexico. Today you can use Appointments; Classes and Shop arrive in early 2027.' },
      { q: 'Do my clients have to download anything?', a: "No. Everything works from a link in their phone's browser, with nothing to download and no account to create." },
      { q: 'How much does it cost?', a: 'Appointments has a free plan forever, and Pro+ costs $349 a month with 14 days free, no card. Pricing for Classes and Shop will be announced at launch.' },
      { q: 'When do Classes and Shop arrive?', a: "Early 2027. Leave your email on each one and we'll let you know as soon as they open." },
      { q: 'What kind of business is it for?', a: 'Small businesses that work by appointment, with classes, or selling their products: salons, barbershops, clinics, academies, instructors and shops.' },
    ],
    all: 'See all questions',
  },
  footer: { title: 'Your business,<br>*ready today.*', primary: 'Create your appointments link', secondary: 'Notify me about Classes and Shop' },
  float: { label: 'APPOINTMENTS · 14 DAYS FREE', cta: 'Create your link' },
}

export const HOME: Record<Lang, typeof es> = { es, en }

