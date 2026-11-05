import type { Lang } from '../i18n/routes'

export type Vertical = { name: string; ask: string; svc: string; when: string; who: string; img: string }
export type Feature = { t: string; d: string; img: string; plan: string }
export type Faq = { q: string; a: string }
type Period = { price: string; per: string; note: string }

// Fotos y pantallas por giro / función (no cambian con el idioma)
const VERTICAL_IMG = ['/assets/photos/barbero.webp', '/assets/photos/estilista.webp', '/assets/photos/unas.webp', '/assets/photos/tatuador.webp', '/assets/photos/fotografa.webp']
const FEATURE_IMG = ['/assets/screens/f-perfil.webp', '/assets/screens/f-calendario.webp', '/assets/screens/flow-4.webp', '', '/assets/screens/f-nota.webp', '/assets/screens/f-bloqueo.webp', '/assets/screens/f-resumen.webp', '/assets/screens/flow-2.webp']

// Avisos que flotan junto al celular del hero (posiciones dentro del lienzo de 1060×600)
export const STAGE_POS = [
  { icon: 'CalendarCheck', left: 400, top: 14, delay: 1100 },
  { icon: 'MessageSquare', left: 330, top: 516, delay: 1800 },
  { icon: 'CreditCard', left: 880, top: 470, delay: 2500 },
] as const

const es = {
  meta: {
    title: 'flowlift Citas — Tu agenda, bajo control',
    description: 'Tus clientes reservan desde un link, les llega su confirmación por WhatsApp y apartan con anticipo. Plan gratis para siempre y 14 días de prueba sin tarjeta.',
    ogAlt: 'flowlift Citas: tu agenda, bajo control',
  },
  product: 'Citas',
  nav: { flujo: '#flujo', funciones: '#funciones', precios: '#precios' },
  hero: {
    num: '[ flowlift Citas ]', lines: 'Tu agenda, ~bajo~ control.',
    body: 'Tus clientes reservan desde un link, les llega su confirmación por WhatsApp y apartan con anticipo. Tú solo atiendes.',
    primary: '14 días gratis', secondary: 'Ver cómo funciona', note: 'Sin tarjeta. Plan gratis para siempre.',
    stageLabel: 'Panel de flowlift en computadora y página de reserva en celular, conectados con avisos de nueva reserva, recordatorio por WhatsApp y anticipo recibido',
    chips: [
      { title: 'Nueva reserva', text: 'Julián E. · Corte caballero · sáb 11:00 AM' },
      { title: 'Recordatorio enviado', text: 'Por WhatsApp, un día antes' },
      { title: 'Anticipo recibido', text: '$200 · Horario apartado' },
    ],
  },
  flujo: {
    n: '[ 01 ]', title: 'Del link a tu agenda, *sin mensajes de por medio.*',
    body: 'Tu cliente elige, flowlift confirma, le recuerda su cita y la acomoda en tu agenda.', tabsLabel: 'Tipo de negocio',
    verticals: [
      { name: 'Barbería', ask: 'Corte caballero, jueves 11:00 AM', svc: 'Corte caballero', when: 'jue 11:00 AM', who: 'Con Carlos' },
      { name: 'Estética', ask: 'Tinte completo, sábado 10:00 AM', svc: 'Tinte completo', when: 'sáb 10:00 AM', who: 'Con Gina' },
      { name: 'Uñas', ask: 'Manicura en gel, viernes 5:00 PM', svc: 'Manicura en gel', when: 'vie 5:00 PM', who: 'Con Ana' },
      { name: 'Tatuajes', ask: 'Sesión de tatuaje, lunes 4:00 PM', svc: 'Sesión de tatuaje', when: 'lun 4:00 PM', who: 'Con Juan' },
      { name: 'Fotografía', ask: 'Sesión de fotos, domingo 9:00 AM', svc: 'Sesión de fotos', when: 'dom 9:00 AM', who: 'Estudio' },
    ].map((v, i) => ({ ...v, img: VERTICAL_IMG[i] })) as Vertical[],
    aria: (svc: string) => `Flujo de una reserva: el cliente elige ${svc}, elige día y hora, recibe su confirmación y un recordatorio, y la cita aparece en tu agenda`,
    nodes: {
      chooseService: 'Elige servicio', client: 'Cliente', link: 'Link', dateTime: 'Día y hora', available: 'Disponible',
      confirmation: 'Confirmación', email: 'Correo', confirmed: 'Confirmada', addedCal: 'Se agrega a su calendario',
      agenda: 'Tu agenda', newTag: 'Nueva', reminder: 'Recordatorio por correo', seeYou: 'Te esperamos *pronto*',
    },
  },
  tour: {
    n: '[ 02 ]', title: 'Todo lo que usas a diario. *Nada de relleno.*', all: 'Ver todas las funciones',
    features: [
      { t: 'Tu página y tu link', d: 'Tu negocio con su propio link y código QR. Tus clientes ven tus servicios, precios y horarios libres.', plan: '' },
      { t: 'Agenda sin encimarse', d: 'Ve tus citas en lista o calendario. Crea citas a mano, reagenda o cancela en dos toques.', plan: '' },
      { t: 'Confirmaciones y recordatorios', d: 'Por WhatsApp y por correo, automáticos. Tu cliente puede agregar la cita a su calendario.', plan: '' },
      { t: 'Anticipos y pagos', d: 'Pide un anticipo para apartar la cita. Tus clientes pagan con tarjeta, en OXXO o en tu local.', plan: '' },
      { t: 'Historial de clientes', d: 'Notas privadas y visitas anteriores de cada cliente, a la mano antes de que llegue.', plan: 'Pro+' },
      { t: 'Bloquea tu tiempo', d: 'Descansos, pendientes o vacaciones de varios días. Ese tiempo deja de aparecer para reservar.', plan: '' },
      { t: 'El resumen de tu negocio', d: 'Citas de la semana, ingresos estimados, pendientes y no-shows de un vistazo.', plan: '' },
      { t: 'Tu equipo, una agenda', d: 'Cada quien con su horario y sus servicios. Tus clientes eligen con quién.', plan: 'Equipos' },
    ].map((f, i) => ({ ...f, img: FEATURE_IMG[i] })) as Feature[],
    mock: { title: 'Anticipos', badge: 'Anticipo recibido', when: 'Sábado · 4:00 PM · Tinte completo', methods: 'Formas de pago', card: 'Tarjeta', oxxo: 'OXXO', local: 'En tu local' },
  },
  pricing: {
    n: '[ 03 ]', title: 'Menos de $12 al día. *Con una cita que salves, ya se pagó.*',
    monthly: 'Mensual', annual: 'Anual · 2 meses gratis', switchLabel: 'Pago anual',
    starter: { name: 'Starter', price: '$0', note: 'Para siempre. Para empezar con un servicio.', items: ['Tu link de reservas y código QR', '1 servicio activo, reservas ilimitadas', 'Agenda sin citas encimadas'], cta: 'Empieza gratis' },
    pro: {
      name: 'Pro+', badge: 'Precio de lanzamiento',
      monthly: { price: '$349', per: '/ mes', note: 'Para quien vive de su agenda. $11.63 al día.' } as Period,
      annual: { price: '$3,499', per: '/ año', note: 'Equivale a $292 al mes.' } as Period,
      items: ['Todo lo de Starter', 'Servicios ilimitados', 'Historial de clientes con notas', 'Bloqueos de varios días'], cta: '14 días gratis',
    },
    teams: {
      name: 'Equipos',
      monthly: { price: '$649', per: '/ mes', note: 'Para salones y estudios con equipo.' } as Period,
      annual: { price: '$6,490', per: '/ año', note: 'Equivale a $541 al mes.' } as Period,
      items: ['Todo lo de Pro+', 'Todo tu equipo en una agenda', 'Horarios y servicios por persona', 'Asignación automática de citas'], cta: '14 días gratis',
    },
    footnote: 'Precios en pesos, sin contratos. La prueba no pide tarjeta. También puedes pagar en efectivo en OXXO por periodos de 92 días.',
    compare: 'Ver comparación completa de planes',
    trust: [
      { icon: 'Lock', t: 'Conexión cifrada' }, { icon: 'UserCheck', t: 'Entras con Google o Microsoft' },
      { icon: 'CreditCard', t: 'Pagos con Stripe y OXXO' }, { icon: 'ShieldCheck', t: 'Tus datos no se venden' },
    ] as { icon: 'Lock' | 'UserCheck' | 'CreditCard' | 'ShieldCheck'; t: string }[],
  },
  faq: {
    n: '[ 04 ]', title: 'Lo que *nos preguntan.*', all: 'Ver todas las preguntas',
    items: [
      { q: '¿Mis clientes tienen que descargar algo?', a: 'No. Reservan desde tu link en el navegador de su celular, sin descargar nada y sin crear cuenta.' },
      { q: '¿Necesito tarjeta para empezar?', a: 'No. Starter es gratis para siempre y los 14 días gratis de Pro+ y Equipos tampoco piden tarjeta. Si al terminar no agregas un método de pago, tu cuenta regresa a Starter sin ningún cobro.' },
      { q: '¿Cómo les llegan las confirmaciones y los recordatorios?', a: 'Por WhatsApp y por correo electrónico, de forma automática. Tú no tienes que escribir nada.' },
      { q: '¿Puedo cobrar un anticipo?', a: 'Sí. Tus clientes pueden apartar su cita con un anticipo con tarjeta, en OXXO o pagando en tu local.' },
      { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. No hay contratos. Conservas tu plan hasta que termina el periodo que ya pagaste.' },
    ] as Faq[],
  },
  footer: { title: 'Tu agenda,<br>*lista hoy.*', sub: 'Crea tu link en minutos. Sin tarjeta.', primary: 'Crea tu link gratis' },
  float: { label: '14 DÍAS GRATIS', cta: 'Crea tu link' },
}

const en: typeof es = {
  meta: {
    title: 'flowlift Appointments — Your schedule, under control',
    description: 'Your clients book from a link, get their confirmation on WhatsApp and secure their spot with a deposit. Free plan forever and a 14-day trial with no card.',
    ogAlt: 'flowlift Appointments: your schedule, under control',
  },
  product: 'Appointments',
  nav: { flujo: '#flujo', funciones: '#funciones', precios: '#precios' },
  hero: {
    num: '[ flowlift Appointments ]', lines: 'Your schedule, ~under~ control.',
    body: 'Your clients book from a link, get their confirmation on WhatsApp and secure their spot with a deposit. You just show up.',
    primary: '14 days free', secondary: 'See how it works', note: 'No card. Free plan forever.',
    stageLabel: 'flowlift dashboard on a computer and booking page on a phone, connected by notices for a new booking, a WhatsApp reminder and a deposit received',
    chips: [
      { title: 'New booking', text: "Julián E. · Men's haircut · Sat 11:00 AM" },
      { title: 'Reminder sent', text: 'By WhatsApp, one day before' },
      { title: 'Deposit received', text: '$200 · Spot secured' },
    ],
  },
  flujo: {
    n: '[ 01 ]', title: 'From link to schedule, *no messages in between.*',
    body: 'Your client picks, flowlift confirms, reminds them and slots the appointment into your schedule.', tabsLabel: 'Type of business',
    verticals: [
      { name: 'Barbershop', ask: "Men's haircut, Thursday 11:00 AM", svc: "Men's haircut", when: 'Thu 11:00 AM', who: 'With Carlos' },
      { name: 'Salon', ask: 'Full color, Saturday 10:00 AM', svc: 'Full color', when: 'Sat 10:00 AM', who: 'With Gina' },
      { name: 'Nails', ask: 'Gel manicure, Friday 5:00 PM', svc: 'Gel manicure', when: 'Fri 5:00 PM', who: 'With Ana' },
      { name: 'Tattoos', ask: 'Tattoo session, Monday 4:00 PM', svc: 'Tattoo session', when: 'Mon 4:00 PM', who: 'With Juan' },
      { name: 'Photography', ask: 'Photo session, Sunday 9:00 AM', svc: 'Photo session', when: 'Sun 9:00 AM', who: 'Studio' },
    ].map((v, i) => ({ ...v, img: VERTICAL_IMG[i] })) as Vertical[],
    aria: (svc: string) => `Booking flow: the client picks ${svc}, chooses a date and time, gets a confirmation and a reminder, and the appointment shows up in your schedule`,
    nodes: {
      chooseService: 'Pick a service', client: 'Client', link: 'Link', dateTime: 'Date and time', available: 'Available',
      confirmation: 'Confirmation', email: 'Email', confirmed: 'Confirmed', addedCal: 'Added to their calendar',
      agenda: 'Your schedule', newTag: 'New', reminder: 'Email reminder', seeYou: 'See you *soon*',
    },
  },
  tour: {
    n: '[ 02 ]', title: 'Everything you use daily. *No filler.*', all: 'See all features',
    features: [
      { t: 'Your page and your link', d: 'Your business with its own link and QR code. Your clients see your services, prices and open times.', plan: '' },
      { t: 'A schedule without overlaps', d: 'See your appointments as a list or calendar. Create appointments by hand, reschedule or cancel in two taps.', plan: '' },
      { t: 'Confirmations and reminders', d: 'By WhatsApp and by email, automatic. Your client can add the appointment to their calendar.', plan: '' },
      { t: 'Deposits and payments', d: 'Ask for a deposit to secure the appointment. Your clients pay by card, at OXXO or at your place.', plan: '' },
      { t: 'Client history', d: 'Private notes and past visits for every client, at hand before they arrive.', plan: 'Pro+' },
      { t: 'Block your time', d: 'Breaks, errands or multi-day vacations. That time stops showing up for booking.', plan: '' },
      { t: 'Your business at a glance', d: "This week's appointments, estimated income, pending items and no-shows at a glance.", plan: '' },
      { t: 'Your team, one schedule', d: 'Everyone with their own hours and services. Your clients choose with whom.', plan: 'Teams' },
    ].map((f, i) => ({ ...f, img: FEATURE_IMG[i] })) as Feature[],
    mock: { title: 'Deposits', badge: 'Deposit received', when: 'Saturday · 4:00 PM · Full color', methods: 'Payment methods', card: 'Card', oxxo: 'OXXO', local: 'At your place' },
  },
  pricing: {
    n: '[ 03 ]', title: 'Less than $12 a day. *One saved appointment pays for it.*',
    monthly: 'Monthly', annual: 'Annual · 2 months free', switchLabel: 'Annual billing',
    starter: { name: 'Starter', price: '$0', note: 'Forever. To start with one service.', items: ['Your booking link and QR code', '1 active service, unlimited bookings', 'A schedule with no double bookings'], cta: 'Start free' },
    pro: {
      name: 'Pro+', badge: 'Launch price',
      monthly: { price: '$349', per: '/ month', note: 'For people who live off their schedule. $11.63 a day.' } as Period,
      annual: { price: '$3,499', per: '/ year', note: 'Equals $292 a month.' } as Period,
      items: ['Everything in Starter', 'Unlimited services', 'Client history with notes', 'Multi-day blocks'], cta: '14 days free',
    },
    teams: {
      name: 'Teams',
      monthly: { price: '$649', per: '/ month', note: 'For salons and studios with a team.' } as Period,
      annual: { price: '$6,490', per: '/ year', note: 'Equals $541 a month.' } as Period,
      items: ['Everything in Pro+', 'Your whole team in one schedule', 'Hours and services per person', 'Automatic appointment assignment'], cta: '14 days free',
    },
    footnote: "Prices in pesos, no contracts. The trial doesn't ask for a card. You can also pay in cash at OXXO in 92-day periods.",
    compare: 'See the full plan comparison',
    trust: [
      { icon: 'Lock', t: 'Encrypted connection' }, { icon: 'UserCheck', t: 'Sign in with Google or Microsoft' },
      { icon: 'CreditCard', t: 'Payments with Stripe and OXXO' }, { icon: 'ShieldCheck', t: 'Your data is never sold' },
    ],
  },
  faq: {
    n: '[ 04 ]', title: 'What *people ask us.*', all: 'See all questions',
    items: [
      { q: 'Do my clients have to download anything?', a: "No. They book from your link in their phone's browser, with nothing to download and no account to create." },
      { q: 'Do I need a card to get started?', a: "No. Starter is free forever and the 14-day free trials of Pro+ and Teams don't ask for a card either. If you don't add a payment method when the trial ends, your account goes back to Starter with no charge." },
      { q: 'How do confirmations and reminders reach them?', a: "By WhatsApp and by email, automatically. You don't have to type anything." },
      { q: 'Can I charge a deposit?', a: 'Yes. Your clients can secure their appointment with a deposit by card, at OXXO or by paying at your place.' },
      { q: 'Can I cancel whenever I want?', a: "Yes. There are no contracts. You keep your plan until the period you've already paid for ends." },
    ] as Faq[],
  },
  footer: { title: 'Your schedule,<br>*ready today.*', sub: 'Create your link in minutes. No card.', primary: 'Create your link free' },
  float: { label: '14 DAYS FREE', cta: 'Create your link' },
}

export const CITAS: Record<Lang, typeof es> = { es, en }
