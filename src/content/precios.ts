// Contenido de la página de Precios. Textos y cifras tomados de flowlift.co (precio anual de Pro+ confirmado: $3,499).
// Cambios de forma, no de texto: el plan gratis se llama "Starter" en todo el sitio, y se omite la tira de
// estadísticas de la página actual ("10 min ahorrados por reserva", etc.) y la etiqueta "-50% HOY".
export type Period = 'monthly' | 'annual' | 'quarterly'
export type PlanPrice = { price: string; per: string; was?: string; note: string; save?: string }
export type Plan = {
  key: 'starter' | 'pro' | 'teams'; name: string; tagline: string; featuresLabel: string; items: string[]; cta: string
  free?: { price: string; per: string }
  prices?: Record<Period, PlanPrice>
  popular?: boolean
}
export type Cell = boolean | string
export type Row = { label: string; cells: [Cell, Cell, Cell] }
export type RowGroup = { title: string; rows: Row[] }

export type PreciosContent = {
  hero: { eyebrow: string; title: string; lead: string }
  periodLabel: string
  periods: Record<Period, { label: string; badge?: string }>
  popular: string
  plans: Plan[]
  compare: { n: string; title: string; lead: string; feature: string; included: string; notIncluded: string; heads: [string, string, string]; groups: RowGroup[] }
  steps: { n: string; title: string; lead: string; items: { t: string; d: string }[] }
  faq: { n: string; title: string; items: { q: string; a: string }[]; all: string }
  cta: { title: string; sub: string; primary: string; secondary: string }
}

const es: PreciosContent = {
  hero: { eyebrow: 'PRECIOS', title: 'Precios directos y *honestos*', lead: 'Sin cargos sorpresa por tipo de cambio. Sin pedir tarjeta para el plan gratis. Solo precios reales en pesos.' },
  periodLabel: 'Periodo de cobro',
  periods: { monthly: { label: 'Mensual' }, annual: { label: 'Anual', badge: 'Ahorra 16%' }, quarterly: { label: 'Trimestral OXXO', badge: 'Efectivo · Ahorra 10%' } },
  popular: 'Más popular',
  plans: [
    {
      key: 'starter', name: 'Starter', tagline: 'Para profesionales independientes empezando', featuresLabel: 'Funciones principales:',
      free: { price: 'Gratis', per: 'para siempre' },
      items: ['1 servicio', 'Página de reservas + link compartible', 'Confirmaciones y recordatorios por correo', 'Calendario y panel', 'Soporte por correo'],
      cta: 'Empieza gratis',
    },
    {
      key: 'pro', name: 'Pro+', tagline: 'Para negocios de servicios en crecimiento', featuresLabel: 'Todo en Starter, más:', popular: true,
      items: ['Servicios ilimitados', 'Imágenes por servicio', 'Bloquea múltiples días (vacaciones, cierre por inventario, etc.)', 'Disponibilidad personalizada por servicio', 'Código QR descargable', 'Soporte prioritario', 'Directorio de clientes'],
      cta: 'Comenzar',
      prices: {
        monthly: { price: '$349', per: 'MXN/mes', was: '$699', note: 'Cobro mensual', save: 'Ahorras 50%. Por tiempo limitado y sujeto a disponibilidad.' },
        annual: { price: '$3,499', per: 'MXN/año', note: 'Cobro anual · 2 meses gratis' },
        quarterly: { price: '$945', per: 'MXN/trim.', note: 'Efectivo en OXXO · 10% de descuento' },
      },
    },
    {
      key: 'teams', name: 'Equipos', tagline: 'Para equipos de hasta 5 miembros', featuresLabel: 'Todo en Pro+, más:',
      items: ['Hasta 5 miembros del equipo', 'Vista de calendario del equipo', 'Notificaciones por miembro', 'Soporte dedicado de configuración'],
      cta: 'Comenzar',
      prices: {
        monthly: { price: '$649', per: 'MXN/mes', was: '$1,299', note: 'Cobro mensual', save: 'Ahorras 50%. Por tiempo limitado y sujeto a disponibilidad.' },
        annual: { price: '$6,490', per: 'MXN/año', note: 'Cobro anual · 2 meses gratis' },
        quarterly: { price: '$1,750', per: 'MXN/trim.', note: 'Efectivo en OXXO · 10% de descuento' },
      },
    },
  ],
  compare: {
    n: '[ 01 ]', title: 'Compara *cada plan*', lead: 'Cada función, lado a lado, en un solo lugar.',
    feature: 'Función', included: 'Incluido', notIncluded: 'No incluido', heads: ['Starter', 'Pro+', 'Equipos'],
    groups: [
      { title: 'Reservaciones', rows: [
        { label: 'Página de reservas compartible', cells: [true, true, true] },
        { label: 'Agenda 24/7 en línea', cells: [true, true, true] },
        { label: 'Vista de calendario (día / semana / mes)', cells: [true, true, true] },
        { label: 'Generador de código QR', cells: [true, true, true] },
        { label: 'Servicios permitidos', cells: ['1', 'Ilimitados', 'Ilimitados'] },
        { label: 'Imágenes por servicio', cells: [false, true, true] },
        { label: 'Bloquea múltiples días', cells: [false, true, true] },
        { label: 'Disponibilidad personalizada por servicio', cells: [false, true, true] },
      ] },
      { title: 'Comunicación', rows: [
        { label: 'Confirmaciones por correo', cells: [true, true, true] },
        { label: 'Notificaciones en la app', cells: [true, true, true] },
        { label: 'Recordatorios automáticos', cells: [true, true, true] },
        { label: 'Notificaciones por miembro', cells: [false, false, true] },
      ] },
      { title: 'Gestión', rows: [
        { label: 'Panel y analíticas', cells: [true, true, true] },
        { label: 'Historial de clientes', cells: [true, true, true] },
        { label: 'Directorio de clientes', cells: [false, true, true] },
        { label: 'Modo oscuro en el panel', cells: [true, true, true] },
      ] },
      { title: 'Equipo', rows: [
        { label: 'Miembros del equipo', cells: ['Solo titular', 'Solo titular', 'Hasta 5'] },
        { label: 'Vista de calendario del equipo', cells: [false, false, true] },
        { label: 'Código QR descargable', cells: [false, true, true] },
      ] },
      { title: 'Soporte', rows: [
        { label: 'Soporte por correo', cells: [true, true, true] },
        { label: 'Soporte prioritario', cells: [false, true, true] },
        { label: 'Llamada de bienvenida', cells: [false, false, true] },
      ] },
      { title: 'Método de pago', rows: [
        { label: 'Tarjetas crédito / débito (Stripe)', cells: [true, true, true] },
        { label: 'OXXO Pay (paquetes trimestrales)', cells: [false, true, true] },
      ] },
    ],
  },
  steps: {
    n: '[ 02 ]', title: 'Del registro a la primera reserva, *en cuatro pasos*', lead: 'Una incorporación tan ligera que olvidarás que pasó.',
    items: [
      { t: 'Regístrate', d: 'Plan Starter gratis. Sin tarjeta. Correo o Replit Auth.' },
      { t: 'Agrega tus servicios', d: 'Define duración, precio y disponibilidad por servicio. Suma una foto en Pro+.' },
      { t: 'Comparte tu link', d: 'Envía un link o imprime un QR. Tus clientes se reservan solos, 24/7, en EN o ES.' },
      { t: 'Recibe reservas', d: 'Las confirmaciones y recordatorios salen automáticamente. Tú te enfocas en el trabajo.' },
    ],
  },
  faq: {
    n: '[ 03 ]', title: 'Preguntas sobre *precios*', all: 'Ver todas las preguntas',
    items: [
      { q: '¿El plan Starter es realmente gratis?', a: 'Sí. Gratis para siempre, sin tarjeta. Obtienes un servicio, la página de reservas, el calendario y las confirmaciones y recordatorios por correo. Hacemos dinero cuando lo superas.' },
      { q: '¿Cómo funciona el pago en OXXO?', a: 'Elige la opción trimestral OXXO al pagar, recibe un voucher y paga en efectivo en cualquier OXXO. Cuando entra el pago, tu plan se activa por 3 meses — con 10% de descuento vs. cobro mensual con tarjeta.' },
      { q: '¿Puedo cambiar entre Starter, Pro+ y Teams después?', a: 'Sí. Sube de plan cuando quieras y prorrateamos. Si bajas, te quedas en tu nivel actual hasta el final del ciclo y luego cambias.' },
      { q: '¿Los precios son realmente en MXN?', a: 'Sí. Stripe cobra tu tarjeta en MXN, sin márgenes de tipo de cambio de nuestra parte. (Tu banco puede agregar su propio cargo si tu tarjeta es extranjera.)' },
      { q: '¿Hay prueba gratis en Pro+ y Teams?', a: 'Sí. 14 días, sin tarjeta. Si no actualizas, regresas a Starter — nunca un cobro por sorpresa.' },
    ],
  },
  cta: { title: 'Una manera más *inteligente* de manejar reservas', sub: 'Empieza gratis hoy. Actualiza cuando crezcas.', primary: 'Empieza gratis', secondary: 'Comparar planes' },
}

const en: PreciosContent = {
  hero: { eyebrow: 'PRICING', title: 'Honest, upfront *pricing*', lead: 'No surprise FX fees. No card-required free tier. Just real prices in pesos.' },
  periodLabel: 'Billing period',
  periods: { monthly: { label: 'Monthly' }, annual: { label: 'Annual', badge: 'Save 16%' }, quarterly: { label: 'OXXO Quarterly', badge: 'Cash · Save 10%' } },
  popular: 'Most popular',
  plans: [
    {
      key: 'starter', name: 'Starter', tagline: 'For solo practitioners getting started', featuresLabel: 'Core features:',
      free: { price: 'Free', per: 'forever' },
      items: ['1 service', 'Booking page + shareable link', 'Email confirmations & reminders', 'Calendar & dashboard', 'Email support'],
      cta: 'Start free',
    },
    {
      key: 'pro', name: 'Pro+', tagline: 'For growing service businesses', featuresLabel: 'Everything in Starter, plus:', popular: true,
      items: ['Unlimited services', 'Per-service images', 'Block multiple days (vacations, inventory, etc.)', 'Custom availability per service', 'Downloadable QR code', 'Priority support', 'Customer Directory'],
      cta: 'Get started',
      prices: {
        monthly: { price: '$349', per: 'MXN/mo', was: '$699', note: 'Billed monthly', save: 'Save 50%. Limited time, subject to availability.' },
        annual: { price: '$3,499', per: 'MXN/yr', note: 'Billed yearly · 2 months free' },
        quarterly: { price: '$945', per: 'MXN/qtr', note: 'Cash via OXXO · 10% off' },
      },
    },
    {
      key: 'teams', name: 'Teams', tagline: 'For teams up to 5 members', featuresLabel: 'Everything in Pro+, plus:',
      items: ['Up to 5 team members', 'Team calendar view', 'Per-member notifications', 'Dedicated setup support'],
      cta: 'Get started',
      prices: {
        monthly: { price: '$649', per: 'MXN/mo', was: '$1,299', note: 'Billed monthly', save: 'Save 50%. Limited time, subject to availability.' },
        annual: { price: '$6,490', per: 'MXN/yr', note: 'Billed yearly · 2 months free' },
        quarterly: { price: '$1,750', per: 'MXN/qtr', note: 'Cash via OXXO · 10% off' },
      },
    },
  ],
  compare: {
    n: '[ 01 ]', title: 'Compare *every plan*', lead: 'Every feature, side by side, in one place.',
    feature: 'Feature', included: 'Included', notIncluded: 'Not included', heads: ['Starter', 'Pro+', 'Teams'],
    groups: [
      { title: 'Reservations', rows: [
        { label: 'Shareable booking page', cells: [true, true, true] },
        { label: '24/7 online scheduling', cells: [true, true, true] },
        { label: 'Calendar view (day / week / month)', cells: [true, true, true] },
        { label: 'QR code generator', cells: [true, true, true] },
        { label: 'Services allowed', cells: ['1', 'Unlimited', 'Unlimited'] },
        { label: 'Per-service images', cells: [false, true, true] },
        { label: 'Block multiple days', cells: [false, true, true] },
        { label: 'Custom availability per service', cells: [false, true, true] },
      ] },
      { title: 'Communications', rows: [
        { label: 'Email confirmations', cells: [true, true, true] },
        { label: 'In-app notifications', cells: [true, true, true] },
        { label: 'Automated reminders', cells: [true, true, true] },
        { label: 'Per-member notifications', cells: [false, false, true] },
      ] },
      { title: 'Management', rows: [
        { label: 'Dashboard & analytics', cells: [true, true, true] },
        { label: 'Client history', cells: [true, true, true] },
        { label: 'Customer Directory', cells: [false, true, true] },
        { label: 'Dark mode dashboard', cells: [true, true, true] },
      ] },
      { title: 'Team', rows: [
        { label: 'Team members', cells: ['Owner only', 'Owner only', 'Up to 5'] },
        { label: 'Team calendar view', cells: [false, false, true] },
        { label: 'Downloadable QR code', cells: [false, true, true] },
      ] },
      { title: 'Support', rows: [
        { label: 'Email support', cells: [true, true, true] },
        { label: 'Priority support', cells: [false, true, true] },
        { label: 'Onboarding call', cells: [false, false, true] },
      ] },
      { title: 'Payment method', rows: [
        { label: 'Credit / debit cards (Stripe)', cells: [true, true, true] },
        { label: 'OXXO Pay (quarterly bundles)', cells: [false, true, true] },
      ] },
    ],
  },
  steps: {
    n: '[ 02 ]', title: 'From sign-up to first booking, *in four steps*', lead: "Onboarding so light you'll forget it happened.",
    items: [
      { t: 'Sign up', d: 'Free Starter tier. No credit card. Email or Replit Auth.' },
      { t: 'Add your services', d: 'Set duration, price and availability per service. Drop in a photo on Pro+.' },
      { t: 'Share your link', d: 'Send a link or print a QR code. Customers book themselves, 24/7, in EN or ES.' },
      { t: 'Get bookings', d: 'Confirmations and reminders go out automatically. You focus on the work.' },
    ],
  },
  faq: {
    n: '[ 03 ]', title: 'Pricing *FAQs*', all: 'See all FAQs',
    items: [
      { q: 'Is the Starter plan really free?', a: 'Yes. Free forever, no credit card. You get one service, the booking page, the calendar and email confirmations & reminders. We make money when you outgrow it.' },
      { q: 'How does OXXO Pay work?', a: 'Pick the OXXO quarterly option at checkout, get a voucher and pay cash at any OXXO store. Once the payment posts, your plan is active for 3 months — at 10% off vs. monthly card billing.' },
      { q: 'Can I switch between Starter, Pro+ and Teams later?', a: 'Yes. Upgrade any time and we prorate. Downgrade keeps you at your current tier until the end of your billing cycle, then drops to the new one.' },
      { q: 'Are prices really in MXN?', a: 'Yes. Stripe charges your card in MXN, no FX margins from us. (Your bank may add its own conversion fee if your card is foreign.)' },
      { q: 'Is there a free trial on Pro+ and Teams?', a: "Yes. 14 days, no credit card required. If you don't upgrade, you fall back to Starter — never charged by surprise." },
    ],
  },
  cta: { title: 'A *smarter* way to run bookings', sub: 'Start free today. Upgrade when you grow.', primary: 'Start free', secondary: 'Compare plans' },
}

export const PRECIOS = { es, en }
