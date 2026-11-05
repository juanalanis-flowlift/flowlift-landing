// Página de Preguntas frecuentes. Las preguntas y respuestas (43 en 10 categorías) y los textos de la página salen de
// flowlift.co sin cambios; solo se agregó el énfasis tipográfico del título y los mensajes del buscador.
export type FaqCategory = { id: string; title: string; items: { q: string; a: string }[] }
export type FaqPageContent = {
  hero: { eyebrow: string; title: string; lead: string }
  search: { label: string; one: string; many: string; none: string; index: string }
  categories: FaqCategory[]
  cta: { title: string; text: string; primary: string }
}

const es: FaqPageContent = {
  hero: {
    eyebrow: "FAQ",
    title: "Preguntas *frecuentes*",
    lead: "Todo lo que necesitas saber sobre flowlift. ¿No encuentras una respuesta? Escríbenos y te responderemos pronto.",
  },
  search: {
    label: "Buscar preguntas",
    one: "1 pregunta encontrada",
    many: "{n} preguntas encontradas",
    none: "No encontramos preguntas con esa búsqueda. Prueba con otra palabra.",
    index: "Categorías",
  },
  categories: [
    {
      id: "c1",
      title: "Seguridad y privacidad",
      items: [
        {
          q: "¿Mis datos están seguros?",
          a: "Sí. Toda la información transmitida entre tú y flowlift está cifrada mediante TLS (Transport Layer Security). flowlift funciona sobre la infraestructura de nube empresarial de Replit, que incluye parches de seguridad automáticos, monitoreo continuo y protección contra DDoS.",
        },
        {
          q: "¿Guardan mi contraseña?",
          a: "No. flowlift utiliza Google y Microsoft para la autenticación mediante el estándar OAuth 2.0. Inicias sesión con tu cuenta de Google o Microsoft existente — flowlift jamás recibe, maneja ni almacena ninguna contraseña. Tu configuración de autenticación de dos factores con esos proveedores también aplica automáticamente.",
        },
        {
          q: "¿Cómo se protegen los pagos?",
          a: "Los pagos con tarjeta y suscripciones son procesados por Stripe, un proveedor certificado PCI DSS Nivel 1 — el nivel de seguridad más alto en la industria de pagos. flowlift nunca ve ni almacena los datos crudos de tu tarjeta. Los vouchers de efectivo en México se gestionan a través de OXXO, también integrado mediante la infraestructura de Stripe.",
        },
        {
          q: "¿Puedo exportar o eliminar mis datos?",
          a: "Sí. Puedes solicitar una exportación completa de tus datos o eliminar tu cuenta de forma permanente en cualquier momento desde el menú de configuración dentro de la app. La eliminación es irreversible, por lo que recomendamos exportar primero.",
        },
      ],
    },
    {
      id: "c2",
      title: "Primeros pasos",
      items: [
        {
          q: "¿Qué es flowlift?",
          a: "flowlift es una plataforma de gestión de citas diseñada para pequeños negocios de servicios. Configuras tus servicios y disponibilidad, compartes tu enlace de reservas, y tus clientes se agendan solos — sin llamadas ni mensajes de ida y vuelta. Tu página pública siempre está activa para que puedan reservar en cualquier momento.",
        },
        {
          q: "¿Necesito instalar algo?",
          a: "No. flowlift es 100% web. Tus clientes abren un enlace desde cualquier dispositivo y reservan en segundos. Tú administras todo desde el navegador.",
        },
        {
          q: "¿Cómo dejo mi página de reservas en línea?",
          a: "Completa el asistente de configuración: agrega la información de tu negocio, define tu disponibilidad y crea al menos un servicio. Tu página queda activa en cuanto terminas — puedes compartir el enlace de inmediato.",
        },
        {
          q: "¿Puedo usar flowlift en español?",
          a: "Sí. Puedes cambiar el idioma del panel a español en cualquier momento desde tu configuración. La página de reservas de tus clientes se adapta automáticamente al idioma de su navegador.",
        },
        {
          q: "¿Mis clientes necesitan crear una cuenta para reservar?",
          a: "No. Los clientes reservan solo con su nombre y correo electrónico — sin cuenta, sin contraseña, sin fricción.",
        },
        {
          q: "¿Pueden mis clientes reservar fuera de mi horario?",
          a: "Sí. Tu página pública siempre está disponible. Los clientes pueden ver los servicios y elegir cualquier horario disponible en cualquier momento — pero solo recibirás citas dentro del horario que hayas configurado.",
        },
        {
          q: "¿Qué pasa si dos clientes intentan reservar el mismo horario?",
          a: "flowlift verifica conflictos en tiempo real. Si un horario se ocupa justo cuando alguien más lo intenta reservar, el segundo cliente verá la disponibilidad actualizada y deberá elegir otro horario.",
        },
      ],
    },
    {
      id: "c3",
      title: "Servicios",
      items: [
        {
          q: "¿Cuántos servicios puedo ofrecer?",
          a: "En el plan Starter puedes ofrecer un servicio. Actualiza a Pro+ para agregar servicios ilimitados, cada uno con su propia duración, precio y configuración.",
        },
        {
          q: "¿Puedo mostrar un rango de precio en lugar de un precio fijo?",
          a: "Sí, en Pro+ y Teams. Puedes habilitar un rango de precio por servicio y definir un mínimo y un máximo en lugar de un precio único.",
        },
        {
          q: "¿Puedo requerir aprobación antes de confirmar una reserva?",
          a: "Sí. Activa \"Requiere confirmación\" en cualquier servicio. Las reservas de ese servicio quedarán como pendientes hasta que las apruebes desde tu sección de Reservas. El cliente recibe el correo de confirmación solo después de que apruebes.",
        },
        {
          q: "¿Puedo establecer un tiempo mínimo de anticipación para que los clientes no reserven a última hora?",
          a: "Sí. Puedes configurar un aviso de anticipación por servicio — por ejemplo, exigir al menos 24 horas antes de que se pueda reservar una cita.",
        },
      ],
    },
    {
      id: "c4",
      title: "Disponibilidad",
      items: [
        {
          q: "¿Cómo configuro mi horario de trabajo?",
          a: "Ve a Disponibilidad y configura tus días y horarios de atención. Puedes establecer horas diferentes para cada día de la semana o marcar días como cerrado.",
        },
        {
          q: "¿Puedo bloquear días libres o vacaciones?",
          a: "Sí. Usa Bloquear tiempo para marcar cualquier período como no disponible. En Pro+ y Teams puedes bloquear múltiples días de una vez — ideal para vacaciones, cierre por inventario o días festivos.",
        },
        {
          q: "¿Cuántos clientes pueden reservar a la misma hora?",
          a: "Cada horario de disponibilidad tiene una configuración de reservas concurrentes máximas. Ponla en 1 para citas de uno en uno, o más alto si ofreces sesiones grupales.",
        },
      ],
    },
    {
      id: "c5",
      title: "Equipo",
      items: [
        {
          q: "¿Puedo gestionar varios miembros del equipo?",
          a: "Sí, en el plan Teams. Agrega a cada miembro con su nombre, rol, servicios que realiza y su horario individual.",
        },
        {
          q: "¿Cada miembro del equipo puede tener horarios diferentes?",
          a: "Sí. Cada miembro tiene su propio horario de disponibilidad, que puede diferir del resto del equipo y del horario general del negocio.",
        },
        {
          q: "¿Los clientes pueden elegir a un miembro específico al reservar?",
          a: "Sí. Los clientes pueden seleccionar a una persona específica o elegir \"cualquier disponible\" — en ese caso, flowlift asigna automáticamente al primer miembro disponible que pueda realizar el servicio solicitado.",
        },
        {
          q: "¿Qué impide que dos clientes reserven a la misma persona al mismo tiempo?",
          a: "flowlift revisa las reservas de cada miembro del equipo de forma individual. Aunque dos servicios estén disponibles en el mismo horario, el sistema no permitirá que ambos se asignen a la misma persona.",
        },
      ],
    },
    {
      id: "c6",
      title: "Reservas",
      items: [
        {
          q: "¿Puedo agregar una reserva manualmente para un cliente que me llamó o escribió?",
          a: "Sí. Usa el botón \"+ Nueva Reserva\" desde el panel. La vista de línea de tiempo muestra el horario de tu equipo para que puedas elegir el slot correcto sin conflictos.",
        },
        {
          q: "¿Los clientes pueden cancelar o reagendar por su cuenta?",
          a: "Sí. Cada correo de confirmación incluye un enlace de cancelación. Los clientes también pueden solicitar un reagendamiento, lo que te envía un nuevo horario propuesto para que apruebes o rechaces.",
        },
        {
          q: "¿Qué pasa cuando marco una reserva como no presentado?",
          a: "La reserva se actualiza al estado de no presentado y la métrica de tasa de no presentados en tu panel se actualiza. No se envía ninguna notificación al cliente.",
        },
        {
          q: "¿Puedo aprobar o rechazar solicitudes de reserva antes de confirmarlas?",
          a: "Sí. Puedes configurar cualquier servicio para requerir aprobación manual. Cuando un cliente reserva, recibes una notificación y puedes confirmar o rechazar. El cliente es notificado automáticamente en ambos casos.",
        },
      ],
    },
    {
      id: "c7",
      title: "Compartir y página de reservas",
      items: [
        {
          q: "¿Cómo encuentran los clientes mi página de reservas?",
          a: "Tu página tiene una URL única basada en el nombre de tu negocio. Puedes copiar el enlace desde el panel y compartirlo en cualquier lugar: tu bio de Instagram, WhatsApp, un botón en tu sitio web o un flyer impreso.",
        },
        {
          q: "¿Puedo obtener un código QR para mi página de reservas?",
          a: "Sí, en Pro+ y Teams. Genera un código QR desde la sección de Compartir, luego descárgalo e imprímelo para tu mostrador, menú o cualquier material impreso.",
        },
        {
          q: "¿Puedo mostrar mis redes sociales en mi página de reservas?",
          a: "Sí. Agrega tus redes en la Configuración del Negocio y activa \"Mostrar redes sociales en la página de reservas.\"",
        },
        {
          q: "¿Puedo mostrar mi política de cancelación a los clientes antes de que confirmen?",
          a: "Sí. Activa \"Mostrar política de cancelación en la página de reservas\" y tu texto de política aparecerá como parte del flujo de reserva.",
        },
      ],
    },
    {
      id: "c8",
      title: "Correos y notificaciones",
      items: [
        {
          q: "¿Qué correos envía flowlift automáticamente?",
          a: "flowlift envía correos de confirmación cuando se realiza o aprueba una reserva, avisos de cancelación cuando se cancela una reserva, y respuestas de modificación cuando se acepta o rechaza una solicitud de reagendamiento. Tú recibes notificaciones por nuevas reservas, cancelaciones y solicitudes de modificación de tus clientes.",
        },
        {
          q: "¿Puedo personalizar los correos?",
          a: "Por ahora no. Los correos de confirmación incluyen automáticamente el nombre de tu negocio, tu logo y los detalles de la cita.",
        },
        {
          q: "¿Cómo sé cuando llega una nueva reserva?",
          a: "Verás un indicador de notificación en el panel. Las notificaciones también aparecen para citas próximas y campos del perfil que aún estén incompletos.",
        },
      ],
    },
    {
      id: "c9",
      title: "Planes y precios",
      items: [
        {
          q: "¿Qué planes existen y qué incluyen?",
          a: "Hay tres planes. Starter (Gratis): 1 servicio activo, reservas ilimitadas, página pública de reservas, correos de confirmación y dashboard de métricas. Pro+ ($349 MXN/mes): todo Starter más servicios ilimitados, imágenes por servicio, código QR descargable, bloqueo de múltiples días y aviso de anticipación por servicio. Teams ($649 MXN/mes): todo Pro+ más gestión de equipo, disponibilidad individual por miembro, asignación automática y vista swimlane de citas.",
        },
        {
          q: "¿Qué periodos de facturación están disponibles?",
          a: "Puedes pagar mensual, trimestral ($945 MXN / $1,750 MXN) o anual ($3,499 MXN / $6,490 MXN para Pro+ / Teams). La facturación anual ofrece el mayor ahorro.",
        },
        {
          q: "¿Qué métodos de pago se aceptan?",
          a: "Aceptamos todas las tarjetas de crédito y débito principales — Visa, Mastercard y American Express. Los pagos son procesados de forma segura por Stripe. OXXO no está disponible para pagos de suscripción.",
        },
        {
          q: "¿Puedo usar un código de promoción o cupón?",
          a: "¡Sí! Al hacer clic en Suscribirse, la página de pago de Stripe incluye un campo para ingresar tu código de promoción antes de completar el pago.",
        },
        {
          q: "¿Cómo puedo subir, bajar o cancelar mi plan?",
          a: "Abre el panel de Planes y Membresía desde tu menú de configuración en cualquier momento. Los cambios de plan aplican de inmediato con prorrateo automático — solo pagas (o recibes crédito) por los días utilizados. Al cancelar, tu plan permanece activo hasta el final del período actual y luego regresa al plan Starter gratuito.",
        },
        {
          q: "¿Hay costos de instalación o cargos ocultos?",
          a: "Ninguno. Solo pagas el precio de la suscripción que eliges — sin costos de configuración, sin comisiones por reserva, sin sorpresas.",
        },
      ],
    },
    {
      id: "c10",
      title: "Cuenta y ajustes",
      items: [
        {
          q: "¿Puedo cambiar la URL de mi página de reservas?",
          a: "Sí. Puedes actualizar el slug de tu negocio desde la página de Configuración del Negocio, lo que cambia tu URL pública. Comparte el enlace actualizado con tus clientes después del cambio.",
        },
        {
          q: "¿Hay modo oscuro?",
          a: "Sí. Alterna entre modo claro y oscuro desde el menú de configuración. La preferencia aplica solo a tu panel y no afecta la página de reservas de tus clientes.",
        },
        {
          q: "¿Qué pasa con mis datos si cancelo mi suscripción?",
          a: "Tu cuenta y datos permanecen accesibles. Las funciones que requieren un plan superior quedarán restringidas, pero tu historial de reservas y perfil del negocio se conservan.",
        },
        {
          q: "¿Cómo envío comentarios o reporto un problema?",
          a: "Abre el menú de configuración en la esquina superior y toca \"Enviar comentarios\". Puedes reportar un error, compartir una idea o dejar un comentario general. Incluye tu teléfono o correo si deseas respuesta — el equipo de flowlift lee cada envío personalmente.",
        },
      ],
    },
  ],
  cta: {
    title: "¿Aún tienes *preguntas?*",
    text: "Crea tu cuenta gratis y explora flowlift en minutos.",
    primary: "Comienza gratis",
  },
}

const en: FaqPageContent = {
  hero: {
    eyebrow: "FAQ",
    title: "Frequently asked *questions*",
    lead: "Everything you need to know about flowlift. Can't find an answer? Reach out and we'll get back to you.",
  },
  search: {
    label: "Search questions",
    one: "1 question found",
    many: "{n} questions found",
    none: "We couldn't find questions matching that search. Try another word.",
    index: "Categories",
  },
  categories: [
    {
      id: "c1",
      title: "Security & Privacy",
      items: [
        {
          q: "Is my data secure?",
          a: "Yes. All data transmitted between you and flowlift is encrypted using TLS (Transport Layer Security). flowlift runs on Replit's enterprise cloud infrastructure, which includes automatic security patches, continuous monitoring, and DDoS protection.",
        },
        {
          q: "Do you store my password?",
          a: "No. flowlift uses Google and Microsoft for authentication via the OAuth 2.0 standard. You sign in using your existing Google or Microsoft account — flowlift never receives, handles, or stores any password. Your two-factor authentication settings with those providers also apply automatically.",
        },
        {
          q: "How are payments secured?",
          a: "Card and subscription payments are processed by Stripe, a PCI DSS Level 1 certified provider — the highest security tier in the payments industry. flowlift never sees or stores your raw card details. Cash vouchers in México are handled through OXXO, also integrated via Stripe's infrastructure.",
        },
        {
          q: "Can I export or delete my data?",
          a: "Yes. You can request a full export of your account data or permanently delete your account at any time from the settings menu inside the app. Deletion is irreversible, so we recommend exporting first.",
        },
      ],
    },
    {
      id: "c2",
      title: "Getting started",
      items: [
        {
          q: "What is flowlift?",
          a: "flowlift is an appointment management platform built for small service businesses. You set up your services and availability, share your booking link, and customers book themselves — no back-and-forth needed. Your public booking page is always live, so clients can browse and book any open slot at any time of day.",
        },
        {
          q: "Do I need to install anything?",
          a: "No. flowlift is 100% web-based. Your clients open a link on any device and book in seconds. You manage everything from your browser dashboard.",
        },
        {
          q: "How do I get my booking page live?",
          a: "Complete the setup wizard: add your business info, set your availability, and create at least one service. Your booking page is live the moment you finish — you can share the link right away.",
        },
        {
          q: "Can I use flowlift in Spanish?",
          a: "Yes. You can switch the dashboard language to Spanish at any time from your settings. Your customers' booking page adapts to their browser language automatically.",
        },
        {
          q: "Do my customers need to create an account to book?",
          a: "No. Customers book with just their name and email — no account, no password, no friction.",
        },
        {
          q: "Can my clients book outside business hours?",
          a: "Yes. Your public booking page is always live. Clients can browse services and book any open slot at any time — you only receive appointments within the hours you have configured.",
        },
        {
          q: "What happens if two clients try to book the same slot?",
          a: "flowlift checks for conflicts in real time. If a slot is taken the moment someone else books it, the second client will see updated availability and be asked to choose another time.",
        },
      ],
    },
    {
      id: "c3",
      title: "Services",
      items: [
        {
          q: "How many services can I offer?",
          a: "On the Starter plan you can offer one service. Upgrade to Pro+ to add unlimited services, each with its own duration, pricing, and settings.",
        },
        {
          q: "Can I show a price range instead of a fixed price?",
          a: "Yes, on Pro+ and Teams. You can enable a price range per service and set a minimum and maximum instead of a single price.",
        },
        {
          q: "Can I require approval before a booking is confirmed?",
          a: "Yes. Enable \"Requires Confirmation\" on any service. Bookings for that service will be created as pending until you approve them from your Bookings section. The customer receives a confirmation email only after you approve.",
        },
        {
          q: "Can I set a minimum lead time so customers can't book last minute?",
          a: "Yes. You can set an advance notice window per service — for example, requiring at least 24 hours before an appointment can be booked.",
        },
      ],
    },
    {
      id: "c4",
      title: "Availability",
      items: [
        {
          q: "How do I set my working hours?",
          a: "Go to Availability and configure your open days and hours. You can set different hours for each day of the week or mark days as closed.",
        },
        {
          q: "Can I block time off for a vacation or holiday?",
          a: "Yes. Use Block Time to mark any period as unavailable. On Pro+ and Teams you can block multiple days at once — perfect for vacations, inventory closure, or public holidays.",
        },
        {
          q: "How often can customers book at the same time?",
          a: "Each availability slot has a maximum concurrent bookings setting. Set it to 1 for one-at-a-time appointments, or higher if you run group sessions.",
        },
      ],
    },
    {
      id: "c5",
      title: "Team",
      items: [
        {
          q: "Can I manage multiple staff members?",
          a: "Yes, on the Teams plan. Add each team member with their name, role, services they perform, and their individual schedule.",
        },
        {
          q: "Can each team member have different working hours?",
          a: "Yes. Each team member has their own availability schedule that can differ from the rest of the team and from the general business hours.",
        },
        {
          q: "Can customers choose a specific team member when booking?",
          a: "Yes. Customers can select a specific person or choose \"any available\" — in which case flowlift automatically assigns the first available member who can perform the requested service.",
        },
        {
          q: "What prevents two customers from booking the same person at the same time?",
          a: "flowlift checks each team member's bookings individually. Even if two services are available at the same time slot, the system will not allow both to be assigned to the same person.",
        },
      ],
    },
    {
      id: "c6",
      title: "Bookings",
      items: [
        {
          q: "Can I add a booking manually for a customer who called or messaged me?",
          a: "Yes. Use the \"+ New Booking\" button from the dashboard. The timeline view shows your team's schedule so you can pick the right slot without conflicts.",
        },
        {
          q: "Can customers cancel or reschedule on their own?",
          a: "Yes. Every confirmation email includes a cancellation link. Customers can also request a reschedule, which sends you a proposed new time to approve or decline.",
        },
        {
          q: "What happens when I mark a booking as a no-show?",
          a: "The booking is updated to no-show status and your no-show rate metric on the dashboard updates accordingly. No notification is sent to the customer.",
        },
        {
          q: "Can I approve or reject booking requests before they're confirmed?",
          a: "Yes. You can set any service to require manual approval. When a customer books, you receive a notification and can confirm or decline. The customer is notified automatically either way.",
        },
      ],
    },
    {
      id: "c7",
      title: "Sharing & booking page",
      items: [
        {
          q: "How do customers find my booking page?",
          a: "Your page lives at a unique URL based on your business name. You can copy the link from the dashboard and share it anywhere — your Instagram bio, WhatsApp, a website button, or a printed flyer.",
        },
        {
          q: "Can I get a QR code for my booking page?",
          a: "Yes, on Pro+ and Teams. Generate a QR code from the Sharing section, then download and print it for your counter, menu, or any printed material.",
        },
        {
          q: "Can I show my social media links on my booking page?",
          a: "Yes. Add your social handles in the Business Setup and toggle on \"Show social links on booking page.\"",
        },
        {
          q: "Can I show my cancellation policy to customers before they confirm?",
          a: "Yes. Enable \"Show cancellation policy on booking page\" and your policy text will appear as part of the booking flow.",
        },
      ],
    },
    {
      id: "c8",
      title: "Emails & notifications",
      items: [
        {
          q: "What emails does flowlift send automatically?",
          a: "flowlift sends confirmation emails when a booking is made or approved, cancellation notices when a booking is cancelled, and modification responses when a reschedule request is accepted or declined. You receive notifications for new bookings, cancellations, and modification requests from customers.",
        },
        {
          q: "Can I customize the emails?",
          a: "Not at this time. Confirmation emails include your business name, logo, and appointment details automatically.",
        },
        {
          q: "How do I know when a new booking comes in?",
          a: "You'll see a notification badge in the dashboard. Notifications also appear for upcoming appointments and any profile fields that are still incomplete.",
        },
      ],
    },
    {
      id: "c9",
      title: "Plans & pricing",
      items: [
        {
          q: "What plans are available and what do they include?",
          a: "There are three plans. Starter (Free): 1 active service, unlimited bookings, public booking page, confirmation emails, and a metrics dashboard. Pro+ ($349 MXN/mo): everything in Starter plus unlimited services, per-service images, downloadable QR code, block multiple days at once, and advance notice settings per service. Teams ($649 MXN/mo): everything in Pro+ plus team member management, individual availability per member, auto-assignment, and a swimlane booking view.",
        },
        {
          q: "What billing intervals are available?",
          a: "You can pay monthly, quarterly ($945 MXN / $1,750 MXN), or annually ($3,499 MXN / $6,490 MXN for Pro+ / Teams). Annual billing offers the biggest saving.",
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept all major credit and debit cards — Visa, Mastercard, and American Express. Payments are processed securely by Stripe. OXXO is not available for subscription payments.",
        },
        {
          q: "Can I use a promo or coupon code?",
          a: "Yes. When you click Subscribe, the Stripe checkout page includes an \"Add promotion code\" field. Enter your code there before completing payment.",
        },
        {
          q: "How do I upgrade, downgrade, or cancel?",
          a: "Open the Plans & Membership panel from your settings menu at any time. Upgrades and downgrades apply immediately with automatic proration — you only pay (or receive credit) for the days used. Cancellations stay active until the end of the current billing period, then revert to the free Starter plan.",
        },
        {
          q: "Are there setup fees or hidden costs?",
          a: "None. You pay the listed subscription price and nothing else — no setup fees, no per-booking transaction fees, no surprise charges.",
        },
      ],
    },
    {
      id: "c10",
      title: "Account & settings",
      items: [
        {
          q: "Can I change my booking page URL?",
          a: "Yes. You can update your business slug from the Business Setup page, which changes your public URL. Share the updated link with your customers after making the change.",
        },
        {
          q: "Is there a dark mode?",
          a: "Yes. Toggle between light and dark mode from the settings menu. The preference applies to your dashboard only and doesn't affect your customers' booking page.",
        },
        {
          q: "What happens to my data if I cancel my subscription?",
          a: "Your account and data remain accessible. Features that require a higher plan will be restricted, but your booking history and business profile are preserved.",
        },
        {
          q: "How do I send feedback or report a problem?",
          a: "Open the settings menu in the top corner and tap \"Send feedback.\" You can report a bug, share an idea, or leave a general comment. Include your phone or email if you'd like a reply — the flowlift team reads every submission personally.",
        },
      ],
    },
  ],
  cta: {
    title: "Still have *questions?*",
    text: "Start your free account and explore flowlift in minutes.",
    primary: "Start for free",
  },
}

export const FAQ_PAGE = { es, en }
