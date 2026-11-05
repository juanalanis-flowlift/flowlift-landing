import type { Lang, PageKey } from '../i18n/routes'

// Título, descripción y texto alternativo de la imagen para compartir de las páginas internas.
type M = { title: string; description: string; ogAlt: string }
type Rest = Exclude<PageKey, 'home' | 'citas'>

const es: Record<Rest, M> = {
  funciones: { title: 'Funciones de flowlift Citas — flowlift', description: 'Todo lo que necesitas para administrar un negocio de reservas — y algunas cosas que no sabías que necesitabas.', ogAlt: 'Funciones de flowlift Citas' },
  precios: { title: 'Precios y planes de flowlift Citas — flowlift', description: 'Sin cargos sorpresa por tipo de cambio. Sin pedir tarjeta para el plan gratis. Solo precios reales en pesos.', ogAlt: 'Precios de flowlift Citas' },
  faq: { title: 'Preguntas frecuentes — flowlift', description: 'Todo lo que necesitas saber sobre flowlift. ¿No encuentras una respuesta? Escríbenos y te responderemos pronto.', ogAlt: 'Preguntas frecuentes de flowlift' },
  ayuda: { title: 'Centro de ayuda — flowlift', description: 'Todo lo que puedes hacer en flowlift, en español claro: configuración, servicios, disponibilidad, reservas, pagos, planes y analíticas.', ogAlt: 'Centro de ayuda de flowlift' },
  nosotros: { title: 'Sobre nosotros — flowlift', description: 'Nuestra misión es hacer que las reservas sean simples para negocios de servicios en todas partes.', ogAlt: 'Sobre flowlift' },
  privacidad: { title: 'Aviso de Privacidad — flowlift', description: 'Aviso de Privacidad Integral de flowlift.', ogAlt: 'Aviso de Privacidad de flowlift' },
  terminos: { title: 'Términos y Condiciones — flowlift', description: 'Términos y Condiciones de uso de flowlift.', ogAlt: 'Términos y Condiciones de flowlift' },
}

const en: Record<Rest, M> = {
  funciones: { title: 'flowlift Appointments features — flowlift', description: "Everything you need to run a booking business — and a few things you didn't know you needed.", ogAlt: 'flowlift Appointments features' },
  precios: { title: 'flowlift Appointments pricing and plans — flowlift', description: 'No surprise FX fees. No card-required free tier. Just real prices in pesos.', ogAlt: 'flowlift Appointments pricing' },
  faq: { title: 'Frequently asked questions — flowlift', description: "Everything you need to know about flowlift. Can't find an answer? Write to us and we'll get back to you soon.", ogAlt: 'flowlift frequently asked questions' },
  ayuda: { title: 'Help center — flowlift', description: 'Plain-language answers for every part of flowlift — setup, services, availability, bookings, payments, plans and analytics.', ogAlt: 'flowlift help center' },
  nosotros: { title: 'About us — flowlift', description: 'Our mission is to make booking simple for service businesses everywhere.', ogAlt: 'About flowlift' },
  privacidad: { title: 'Privacy Notice — flowlift', description: 'flowlift Comprehensive Privacy Notice (courtesy translation).', ogAlt: 'flowlift Privacy Notice' },
  terminos: { title: 'Terms and Conditions — flowlift', description: 'flowlift Terms and Conditions of use (courtesy translation).', ogAlt: 'flowlift Terms and Conditions' },
}

export const PAGE_META: Record<Rest, Record<Lang, M>> = {
  funciones: { es: es.funciones, en: en.funciones },
  precios: { es: es.precios, en: en.precios },
  faq: { es: es.faq, en: en.faq },
  ayuda: { es: es.ayuda, en: en.ayuda },
  nosotros: { es: es.nosotros, en: en.nosotros },
  privacidad: { es: es.privacidad, en: en.privacidad },
  terminos: { es: es.terminos, en: en.terminos },
}
