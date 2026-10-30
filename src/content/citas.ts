import type { FaqItem } from '../components/Faq'

export const CITAS_NAV = [
  { label: 'Cómo funciona', href: '#flujo' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Precios', href: '#precios' },
]

// Avisos que flotan junto al celular del hero (posiciones dentro del lienzo de 1060×600).
export const STAGE_CHIPS = [
  { icon: 'CalendarCheck', title: 'Nueva reserva', text: 'Julián E. · Corte caballero · sáb 11:00 AM', left: 400, top: 14, delay: 1100 },
  { icon: 'MessageSquare', title: 'Recordatorio enviado', text: 'Por WhatsApp, un día antes', left: 330, top: 516, delay: 1800 },
  { icon: 'CreditCard', title: 'Anticipo recibido', text: '$200 · Horario apartado', left: 880, top: 470, delay: 2500 },
] as const

// Pestañas por giro: cada una cambia la foto, el texto que "se escribe solo" y el flujo de nodos.
export type Vertical = { name: string; ask: string; svc: string; when: string; who: string; img: string }
export const VERTICALS: Vertical[] = [
  { name: 'Barbería', ask: 'Corte caballero, jueves 11:00 AM', svc: 'Corte caballero', when: 'jue 11:00 AM', who: 'Con Carlos', img: '/assets/photos/barbero.webp' },
  { name: 'Estética', ask: 'Tinte completo, sábado 10:00 AM', svc: 'Tinte completo', when: 'sáb 10:00 AM', who: 'Con Gina', img: '/assets/photos/estilista.webp' },
  { name: 'Uñas', ask: 'Manicura en gel, viernes 5:00 PM', svc: 'Manicura en gel', when: 'vie 5:00 PM', who: 'Con Ana', img: '/assets/photos/unas.webp' },
  { name: 'Tatuajes', ask: 'Sesión de tatuaje, lunes 4:00 PM', svc: 'Sesión de tatuaje', when: 'lun 4:00 PM', who: 'Con Juan', img: '/assets/photos/tatuador.webp' },
  { name: 'Fotografía', ask: 'Sesión de fotos, domingo 9:00 AM', svc: 'Sesión de fotos', when: 'dom 9:00 AM', who: 'Estudio', img: '/assets/photos/fotografa.webp' },
]
export const flowAria = (v: Vertical) =>
  `Flujo de una reserva: el cliente elige ${v.svc}, elige día y hora, recibe su confirmación y un recordatorio, y la cita aparece en tu agenda`

// Funciones: el celular fijo cambia de pantalla según la que está a la vista.
// `img` vacío = pantalla armada en HTML (anticipos).
export type Feature = { t: string; d: string; img: string; plan: string }
export const FEATURES: Feature[] = [
  { t: 'Tu página y tu link', d: 'Tu negocio con su propio link y código QR. Tus clientes ven tus servicios, precios y horarios libres.', img: '/assets/screens/f-perfil.webp', plan: '' },
  { t: 'Agenda sin encimarse', d: 'Ve tus citas en lista o calendario. Crea citas a mano, reagenda o cancela en dos toques.', img: '/assets/screens/f-calendario.webp', plan: '' },
  { t: 'Confirmaciones y recordatorios', d: 'Por WhatsApp y por correo, automáticos. Tu cliente puede agregar la cita a su calendario.', img: '/assets/screens/flow-4.webp', plan: '' },
  { t: 'Anticipos y pagos', d: 'Pide un anticipo para apartar la cita. Tus clientes pagan con tarjeta, en OXXO o en tu local.', img: '', plan: '' },
  { t: 'Historial de clientes', d: 'Notas privadas y visitas anteriores de cada cliente, a la mano antes de que llegue.', img: '/assets/screens/f-nota.webp', plan: 'Pro+' },
  { t: 'Bloquea tu tiempo', d: 'Descansos, pendientes o vacaciones de varios días. Ese tiempo deja de aparecer para reservar.', img: '/assets/screens/f-bloqueo.webp', plan: '' },
  { t: 'El resumen de tu negocio', d: 'Citas de la semana, ingresos estimados, pendientes y no-shows de un vistazo.', img: '/assets/screens/f-resumen.webp', plan: '' },
  { t: 'Tu equipo, una agenda', d: 'Cada quien con su horario y sus servicios. Tus clientes eligen con quién.', img: '/assets/screens/flow-2.webp', plan: 'Equipos' },
]

export const PRICING = {
  starter: {
    name: 'Starter', price: '$0', note: 'Para siempre. Para empezar con un servicio.',
    items: ['Tu link de reservas y código QR', '1 servicio activo, reservas ilimitadas', 'Agenda sin citas encimadas'],
  },
  pro: {
    name: 'Pro+', badge: 'Precio de lanzamiento',
    monthly: { price: '$349', per: '/ mes', note: 'Para quien vive de su agenda. $11.63 al día.' },
    annual: { price: '$3,490', per: '/ año', note: 'Equivale a $291 al mes.' },
    items: ['Todo lo de Starter', 'Servicios ilimitados', 'Historial de clientes con notas', 'Bloqueos de varios días'],
  },
  teams: {
    name: 'Equipos',
    monthly: { price: '$649', per: '/ mes', note: 'Para salones y estudios con equipo.' },
    annual: { price: '$6,490', per: '/ año', note: 'Equivale a $541 al mes.' },
    items: ['Todo lo de Pro+', 'Todo tu equipo en una agenda', 'Horarios y servicios por persona', 'Asignación automática de citas'],
  },
  footnote: 'Precios en pesos, sin contratos. La prueba no pide tarjeta. También puedes pagar en efectivo en OXXO por periodos de 92 días.',
}

export const TRUST = [
  { icon: 'Lock', t: 'Conexión cifrada' },
  { icon: 'UserCheck', t: 'Entras con Google o Microsoft' },
  { icon: 'CreditCard', t: 'Pagos con Stripe y OXXO' },
  { icon: 'ShieldCheck', t: 'Tus datos no se venden' },
] as const

export const CITAS_FAQS: FaqItem[] = [
  { q: '¿Mis clientes tienen que descargar algo?', a: 'No. Reservan desde tu link en el navegador de su celular, sin descargar nada y sin crear cuenta.' },
  { q: '¿Necesito tarjeta para empezar?', a: 'No. Starter es gratis para siempre y los 14 días gratis de Pro+ y Equipos tampoco piden tarjeta. Si al terminar no agregas un método de pago, tu cuenta regresa a Starter sin ningún cobro.' },
  { q: '¿Cómo les llegan las confirmaciones y los recordatorios?', a: 'Por WhatsApp y por correo electrónico, de forma automática. Tú no tienes que escribir nada.' },
  { q: '¿Puedo cobrar un anticipo?', a: 'Sí. Tus clientes pueden apartar su cita con un anticipo con tarjeta, en OXXO o pagando en tu local.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. No hay contratos. Conservas tu plan hasta que termina el periodo que ya pagaste.' },
]
