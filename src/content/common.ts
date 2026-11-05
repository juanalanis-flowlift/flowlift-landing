import type { Lang } from '../i18n/routes'

// Textos de la interfaz compartida: navegación, pie de página, formularios y la 404.
const es = {
  nav: {
    main: 'Principal',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    login: 'Entrar',
    start: 'Comienza gratis',
    language: 'Idioma',
    items: {
      citas: 'Citas', clases: 'Clases', tienda: 'Tienda', ayuda: 'Ayuda', nosotros: 'Sobre nosotros',
      flujo: 'Cómo funciona', funciones: 'Funciones', precios: 'Precios', faq: 'Preguntas',
    },
  },
  footer: {
    company: 'Empresa', start: 'Comenzar', legal: 'Legal', language: 'Idioma', follow: 'Síguenos', contact: 'Contacto',
    about: 'Sobre nosotros', features: 'Funciones', pricing: 'Precios', faq: 'Preguntas', help: 'Ayuda',
    startFree: 'Comienza gratis', login: 'Iniciar sesión',
    privacy: 'Política de Privacidad', terms: 'Términos y Condiciones',
    copyright: '© 2026 flowlift · Hecho en México',
    marks: 'Google™ is a trademark of Google LLC. Microsoft™ is a trademark of Microsoft Corporation. Stripe™ is a trademark of Stripe, Inc. OXXO™ is a trademark of FEMSA Comercio, S.A. de C.V. Use of these names is for identification only and does not imply endorsement.',
    home: 'flowlift, inicio',
  },
  waitlist: {
    label: 'Tu correo electrónico', placeholder: 'tu@correo.com', submit: 'Avísame',
    done: (name: string) => `Listo. Te avisamos en cuanto ${name} esté disponible.`,
    invalid: 'Revisa tu correo: parece que le falta algo.',
    duplicate: 'Ese correo ya está en la lista. Te avisamos en cuanto abra.',
    failed: 'No pudimos guardar tu correo. Inténtalo de nuevo.',
  },
  notFound: {
    title: '*Esta página* ~no existe.~',
    text: 'Puede que el link esté incompleto o que la página ya no esté.',
    back: 'Volver al inicio',
  },
  skip: 'Saltar al contenido',
}

const en: typeof es = {
  nav: {
    main: 'Main',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    login: 'Log in',
    start: 'Start for free',
    language: 'Language',
    items: {
      citas: 'Appointments', clases: 'Classes', tienda: 'Shop', ayuda: 'Help', nosotros: 'About us',
      flujo: 'How it works', funciones: 'Features', precios: 'Pricing', faq: 'FAQ',
    },
  },
  footer: {
    company: 'Company', start: 'Get started', legal: 'Legal', language: 'Language', follow: 'Follow us', contact: 'Contact',
    about: 'About us', features: 'Features', pricing: 'Pricing', faq: 'FAQ', help: 'Help',
    startFree: 'Start for free', login: 'Log in',
    privacy: 'Privacy Policy', terms: 'Terms & Conditions',
    copyright: '© 2026 flowlift · Made in Mexico',
    marks: 'Google™ is a trademark of Google LLC. Microsoft™ is a trademark of Microsoft Corporation. Stripe™ is a trademark of Stripe, Inc. OXXO™ is a trademark of FEMSA Comercio, S.A. de C.V. Use of these names is for identification only and does not imply endorsement.',
    home: 'flowlift, home',
  },
  waitlist: {
    label: 'Your email address', placeholder: 'you@email.com', submit: 'Notify me',
    done: (name: string) => `Done. We'll let you know as soon as ${name} is available.`,
    invalid: 'Check your email: it looks like something is missing.',
    duplicate: "That email is already on the list. We'll let you know as soon as it opens.",
    failed: "We couldn't save your email. Please try again.",
  },
  notFound: {
    title: "*This page* ~doesn't exist.~",
    text: 'The link may be incomplete, or the page may no longer be here.',
    back: 'Back to home',
  },
  skip: 'Skip to content',
}

export const COMMON: Record<Lang, typeof es> = { es, en }
