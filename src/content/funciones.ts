// Contenido de la página de Funciones. Los textos salen de flowlift.co (importados sin cambios);
// solo se agregaron marcas de énfasis tipográfico (*cursiva*, ~verde~) en los títulos.
// Generado con scripts/import-site.mjs + un script de conversión; editable a mano.
export type IconName = string
export type FeatureItem = { icon: IconName; title: string; text: string; plan?: 'pro' | 'teams' }
type Block = { title: string; lead: string; items: FeatureItem[] }
export type FuncionesContent = {
  hero: { title: string; lead: string; eyebrow: string }
  exclusive: { eyebrow: string; title: string; lead: string; distinct: FeatureItem[]; routine: Block; game: Block; small: Block }
  expected: { eyebrow: string; title: string; lead: string; items: FeatureItem[] }
  barriers: { eyebrow: string; title: string; lead: string; items: FeatureItem[] }
  roadmap: { eyebrow: string; title: string; lead: string; items: FeatureItem[]; next: { title: string; text: string; cta: string } }
  cta: { title: string; text: string; primary: string }
}

const es: FuncionesContent = {
  hero: {
    title: "Funciones de ~flowlift~",
    lead: "Todo lo que necesitas para administrar un negocio de reservas — y algunas cosas que no sabías que necesitabas.",
    eyebrow: "FUNCIONES EXCLUSIVAS",
  },
  exclusive: {
    eyebrow: "FUNCIONES EXCLUSIVAS",
    title: "Lo que nos *distingue*",
    lead: "Las funciones que hacen que flowlift destaque entre las apps de reservas genéricas.",
    distinct: [
      {
        icon: "MapPin",
        title: "Hecho para México",
        text: "Diseñado para negocios mexicanos de servicios — no adaptado de una plantilla gringa.",
      },
      {
        icon: "ReceiptText",
        title: "Pago en OXXO",
        text: "Acepta pagos en efectivo por OXXO para los paquetes trimestrales. Inclusión financiera real.",
      },
      {
        icon: "Languages",
        title: "Bilingüe EN/ES",
        text: "Cambia entre inglés y español con un clic. Tus clientes ven la página de reservas en su idioma.",
      },
      {
        icon: "LifeBuoy",
        title: "Soporte local",
        text: "Personas reales que entienden la industria de servicios mexicana. Correo para todos, respuesta prioritaria en Pro+.",
      },
    ],
    routine: {
      title: "Asesinos de rutina",
      lead: "Deja de hacer el trabajo que el software debería hacer por ti.",
      items: [
        {
          icon: "BellRing",
          title: "Recordatorios automáticos",
          text: "Enviamos el recordatorio la noche anterior. Menos no-shows, cero esfuerzo.",
        },
        {
          icon: "Mail",
          title: "Confirmaciones por correo",
          text: "Cada reserva recibe una confirmación pulida — para ti y tu cliente — automáticamente.",
        },
        {
          icon: "Bell",
          title: "Notificaciones en la app",
          text: "Mira nuevas reservas, cancelaciones y modificaciones en el momento en que ocurren.",
        },
        {
          icon: "Users",
          title: "Alertas por miembro",
          text: "En Teams, cada miembro recibe sus propias notificaciones — sin caos de bandeja compartida.",
          plan: "teams",
        },
      ],
    },
    game: {
      title: "Cambios de juego",
      lead: "Las pequeñas cosas que se acumulan en una gran ganancia de productividad.",
      items: [
        {
          icon: "QrCode",
          title: "Link compartible + código QR",
          text: "Envía un link o imprime un QR descargable. Tus clientes se reservan solos, 24/7.",
        },
        {
          icon: "Image",
          title: "Imágenes por servicio",
          text: "Pro+ te permite adjuntar una foto a cada servicio para que tu página de reservas se venda sola.",
          plan: "pro",
        },
        {
          icon: "SlidersHorizontal",
          title: "Disponibilidad por servicio",
          text: "¿Diferentes horarios para cortes vs. consultorías? Sin problema.",
        },
        {
          icon: "Layers",
          title: "Bloquea múltiples días",
          text: "Bloquea múltiples días de una sola vez — vacaciones, cierre por inventario, días festivos. Sin bloquear cada día por separado.",
          plan: "pro",
        },
        {
          icon: "History",
          title: "Historial de clientes",
          text: "Cada visita, modificación y cancelación por cliente. Sin hojas de cálculo.",
        },
        {
          icon: "CalendarDays",
          title: "Vista de calendario",
          text: "Tu semana de un vistazo. Vistas de día, semana y mes.",
        },
        {
          icon: "BookUser",
          title: "Directorio de clientes",
          text: "Pro+ y Teams incluyen un directorio privado construido desde tus reservas — busca, contacta, reagenda y exporta en segundos.",
          plan: "pro",
        },
      ],
    },
    small: {
      title: "Y un montón de detalles más",
      lead: "Pequeñas victorias que notarás en la primera semana.",
      items: [
        {
          icon: "Moon",
          title: "Modo oscuro en el panel",
          text: "Fácil para los ojos, especialmente fuera de horas.",
        },
        {
          icon: "Undo2",
          title: "Auto-cancelación del cliente",
          text: "Tus clientes cancelan o reagendan con un solo enlace.",
        },
        {
          icon: "Cookie",
          title: "Aviso de cookies incluido",
          text: "Consentimiento estilo GDPR que mantenemos nosotros — no es tu problema.",
        },
      ],
    },
  },
  expected: {
    eyebrow: "LO QUE ESPERARÍAS",
    title: "Lo que *esperarías*",
    lead: "Todas las cosas estándar de una plataforma de reservas seria.",
    items: [
      {
        icon: "Globe",
        title: "Página de reservas",
        text: "Página compartible y con tu marca donde tus clientes se reservan solos.",
      },
      {
        icon: "Clock",
        title: "Agenda 24/7 en línea",
        text: "Tus clientes reservan cuando quieran — incluso a las 3am.",
      },
      {
        icon: "CalendarDays",
        title: "Vista de calendario",
        text: "Diseños de día, semana y mes.",
      },
      {
        icon: "Mail",
        title: "Confirmaciones por correo",
        text: "Impulsadas por Resend, diseñadas por nosotros.",
      },
      {
        icon: "BarChart3",
        title: "Panel y analíticas",
        text: "Reservas, ingresos y tendencias de un vistazo.",
      },
      {
        icon: "History",
        title: "Historial de clientes",
        text: "Cada interacción con cada cliente.",
      },
      {
        icon: "SlidersHorizontal",
        title: "Disponibilidad personalizada",
        text: "Define tus horarios por día y por servicio.",
      },
      {
        icon: "Users",
        title: "Gestión de equipo",
        text: "Hasta 5 miembros en Teams.",
      },
      {
        icon: "Smartphone",
        title: "Diseño responsivo",
        text: "Funcionalidad completa en cualquier teléfono.",
      },
      {
        icon: "ShieldCheck",
        title: "Privacidad primero",
        text: "Tus datos son tuyos. Conscientes del GDPR.",
      },
      {
        icon: "CreditCard",
        title: "Pagos con Stripe",
        text: "Tarjetas y OXXO vía Stripe Checkout.",
      },
      {
        icon: "RefreshCw",
        title: "Actualizaciones en tiempo real",
        text: "Sincronización instantánea en todos tus dispositivos.",
      },
    ],
  },
  barriers: {
    eyebrow: "REMOVIENDO BARRERAS",
    title: "Diseñado para *remover barreras*",
    lead: "Sudamos los detalles para que más personas puedan usarlo — y para que tus clientes no tengan que pensar.",
    items: [
      {
        icon: "Sparkles",
        title: "Plan Starter gratis para siempre",
        text: "Sin tarjeta de crédito. Prueba el producto, lanza tu página de reservas, consigue tu primer cliente — a costo cero.",
      },
      {
        icon: "ReceiptText",
        title: "OXXO para los no bancarizados",
        text: "La mayoría de las apps de reservas en México requieren tarjeta de crédito. Nosotros no. Paga en efectivo tu paquete anual o trimestral.",
      },
      {
        icon: "Smartphone",
        title: "Móvil primero, siempre",
        text: "La mayoría de tus clientes reservarán desde un celular. Por eso diseñamos la página de reservas mobile-first.",
      },
      {
        icon: "Languages",
        title: "EN ↔ ES con un clic",
        text: "Tanto tú como tus clientes pueden cambiar de idioma en la misma página. Sin bloqueos regionales.",
      },
    ],
  },
  roadmap: {
    eyebrow: "HOJA DE RUTA",
    title: "Funciones que *probablemente no aparecerán*",
    lead: "Cosas que no estamos persiguiendo ahora mismo — y la razón honesta del por qué.",
    items: [
      {
        icon: "Smartphone",
        title: "App móvil nativa",
        text: "El navegador hace lo que necesitamos hoy. Saltarnos las tiendas de apps nos permite enviar más rápido.",
      },
      {
        icon: "Globe",
        title: "Dominio personalizado",
        text: "Tu página vive en flowlift.co/tunegocio. Los dominios personalizados agregan complejidad que preferimos invertir en mejorar la experiencia de reservas.",
      },
      {
        icon: "MessageSquare",
        title: "Recordatorios por SMS",
        text: "Correo + notificaciones en la app cubren el 95% de los casos a una fracción del costo. SMS agrega facturas, no valor, hoy.",
      },
      {
        icon: "Store",
        title: "POS integrado",
        text: "Somos una herramienta de reservas, no una caja registradora. Nuestro trabajo es llenar tu agenda — tú decides cómo cobras.",
      },
      {
        icon: "Coins",
        title: "Multi-divisa",
        text: "Solo MXN mantiene las matemáticas, las integraciones y el soporte simples. Lo revisaremos cuando crezca el mercado.",
      },
    ],
    next: {
      title: "Qué viene",
      text: "¿Curioso de en qué estamos trabajando? Revisa nuestras Preguntas para lo más reciente.",
      cta: "Ver Preguntas",
    },
  },
  cta: {
    title: "Enfócate en reservas, *no en rutina.*",
    text: "Empieza gratis con flowlift hoy.",
    primary: "Comienza gratis",
  },
}

const en: FuncionesContent = {
  hero: {
    title: "~flowlift~ features",
    lead: "Everything you need to run a booking business — and a few things you didn't know you needed.",
    eyebrow: "EXCLUSIVE FEATURES",
  },
  exclusive: {
    eyebrow: "EXCLUSIVE FEATURES",
    title: "What sets us *apart*",
    lead: "The features that make flowlift stand out from generic booking apps.",
    distinct: [
      {
        icon: "MapPin",
        title: "Built for México",
        text: "Designed for Mexican service businesses — not retrofitted from a US template.",
      },
      {
        icon: "ReceiptText",
        title: "OXXO Pay",
        text: "Accept cash payments through OXXO for quarterly plan bundles. Real financial inclusion.",
      },
      {
        icon: "Languages",
        title: "Bilingual EN/ES",
        text: "Toggle between English and Spanish with one click. Customers see your booking page in their language.",
      },
      {
        icon: "LifeBuoy",
        title: "Local support",
        text: "Real humans who understand the Mexican service industry. Email support for everyone, priority response on Pro+.",
      },
    ],
    routine: {
      title: "Routine killers",
      lead: "Stop doing the work the software should do for you.",
      items: [
        {
          icon: "BellRing",
          title: "Automated reminders",
          text: "We send the reminder email the night before. Fewer no-shows, zero effort.",
        },
        {
          icon: "Mail",
          title: "Email confirmations",
          text: "Every booking gets a polished confirmation — for you and your customer — automatically.",
        },
        {
          icon: "Bell",
          title: "In-app notifications",
          text: "See new bookings, cancellations and modifications the moment they happen.",
        },
        {
          icon: "Users",
          title: "Per-member alerts",
          text: "On Teams, each member gets their own notifications — no shared inbox chaos.",
          plan: "teams",
        },
      ],
    },
    game: {
      title: "Game changers",
      lead: "The little things that compound into a big productivity win.",
      items: [
        {
          icon: "QrCode",
          title: "Shareable link + QR code",
          text: "Send a link or print a downloadable QR. Customers book themselves, 24/7.",
        },
        {
          icon: "Image",
          title: "Per-service images",
          text: "Pro+ lets you attach a photo to each service so your booking page sells itself.",
          plan: "pro",
        },
        {
          icon: "SlidersHorizontal",
          title: "Custom availability per service",
          text: "Different hours for haircuts vs. consultations? No problem.",
        },
        {
          icon: "Layers",
          title: "Block multiple days",
          text: "Block multiple days at once — vacations, inventory closure, holidays. No need to block each day one by one.",
          plan: "pro",
        },
        {
          icon: "History",
          title: "Client history",
          text: "Every visit, modification and cancellation per customer. No spreadsheet required.",
        },
        {
          icon: "CalendarDays",
          title: "Calendar view",
          text: "Your week at a glance. Day, week and month layouts.",
        },
        {
          icon: "BookUser",
          title: "Customer Directory",
          text: "Pro+ and Teams get a private client list built from your bookings — search, contact, rebook, and export in seconds.",
          plan: "pro",
        },
      ],
    },
    small: {
      title: "And a bunch of small touches",
      lead: "Little wins you'll notice within the first week.",
      items: [
        {
          icon: "Moon",
          title: "Dark mode dashboard",
          text: "Easy on the eyes, especially after hours.",
        },
        {
          icon: "Undo2",
          title: "Customer self-cancel",
          text: "Customers cancel or reschedule themselves with a single link.",
        },
        {
          icon: "Cookie",
          title: "Cookie consent built-in",
          text: "GDPR-style consent that we maintain — not your problem.",
        },
      ],
    },
  },
  expected: {
    eyebrow: "FEATURES YOU EXPECT",
    title: "What you'd *expect*",
    lead: "All the standard things from a serious booking platform.",
    items: [
      {
        icon: "Globe",
        title: "Booking page",
        text: "Shareable, branded page where customers self-book.",
      },
      {
        icon: "Clock",
        title: "24/7 online scheduling",
        text: "Customers book whenever they want — even at 3am.",
      },
      {
        icon: "CalendarDays",
        title: "Calendar view",
        text: "Day, week and month layouts.",
      },
      {
        icon: "Mail",
        title: "Email confirmations",
        text: "Powered by Resend, designed by us.",
      },
      {
        icon: "BarChart3",
        title: "Dashboard & analytics",
        text: "Bookings, revenue and trends at a glance.",
      },
      {
        icon: "History",
        title: "Client history",
        text: "Every interaction with every customer.",
      },
      {
        icon: "SlidersHorizontal",
        title: "Custom availability",
        text: "Set your hours per day, per service.",
      },
      {
        icon: "Users",
        title: "Team management",
        text: "Up to 5 members on Teams.",
      },
      {
        icon: "Smartphone",
        title: "Mobile responsive",
        text: "Full functionality on any phone.",
      },
      {
        icon: "ShieldCheck",
        title: "Privacy first",
        text: "Your data is yours. GDPR-aware.",
      },
      {
        icon: "CreditCard",
        title: "Stripe-powered payments",
        text: "Cards and OXXO via Stripe Checkout.",
      },
      {
        icon: "RefreshCw",
        title: "Real-time updates",
        text: "Instant sync across all your devices.",
      },
    ],
  },
  barriers: {
    eyebrow: "REMOVING BARRIERS",
    title: "Built to *remove barriers*",
    lead: "We sweat the details so more people can use it — and so your customers don't have to think.",
    items: [
      {
        icon: "Sparkles",
        title: "Free Starter tier forever",
        text: "No credit card. Try the product, ship your booking page, get your first customer — at zero cost.",
      },
      {
        icon: "ReceiptText",
        title: "OXXO for the unbanked",
        text: "Most Mexican booking apps require a credit card. We don't. Pay in cash for your annual or quarterly bundle.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-first, always",
        text: "Most of your customers will book from a phone. So we designed the booking page mobile-first.",
      },
      {
        icon: "Languages",
        title: "EN ↔ ES with one click",
        text: "Both you and your customer can switch languages on the same page. No locale lock-in.",
      },
    ],
  },
  roadmap: {
    eyebrow: "ROADMAP",
    title: "Features *unlikely to appear*",
    lead: "Things we're not chasing right now — and the honest reason why.",
    items: [
      {
        icon: "Smartphone",
        title: "Native mobile app",
        text: "The browser does what we need today. Skipping the app stores lets us ship faster.",
      },
      {
        icon: "Globe",
        title: "Custom booking domain",
        text: "Your page lives at flowlift.co/yourbusiness. Custom domains add complexity we'd rather spend on improving the booking experience itself.",
      },
      {
        icon: "MessageSquare",
        title: "SMS reminders",
        text: "Email + in-app notifications cover 95% of cases at a fraction of the cost. SMS adds bills, not value, today.",
      },
      {
        icon: "Store",
        title: "In-product POS",
        text: "We're a booking tool, not a register. Our job is to fill your calendar — how you collect payment is up to you.",
      },
      {
        icon: "Coins",
        title: "Multi-currency",
        text: "MXN-only keeps the math, the integrations and the support simple. We'll revisit when the market grows.",
      },
    ],
    next: {
      title: "What's next",
      text: "Curious what we're working on? Browse the FAQ for the latest on what we're shipping.",
      cta: "See FAQ",
    },
  },
  cta: {
    title: "Focus on bookings, *not routine.*",
    text: "Start free with flowlift today.",
    primary: "Start for free",
  },
}

export const FUNCIONES = { es, en }
