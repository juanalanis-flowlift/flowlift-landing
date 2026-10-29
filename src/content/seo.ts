import { SITE_URL } from '../config'

export type RouteMeta = { path: string; title: string; description: string; ogImage: string; ogAlt: string }

export const ROUTES_META: RouteMeta[] = [
  {
    path: '/',
    title: 'flowlift — Tu negocio, bajo control',
    description: 'Herramientas sencillas para pequeños negocios en México: citas hoy, clases y tienda a inicios de 2027. Todo desde un solo link.',
    ogImage: '/og/home.png',
    ogAlt: 'flowlift: tu negocio, bajo control',
  },
  {
    path: '/citas',
    title: 'flowlift Citas — Tu agenda, bajo control',
    description: 'Tus clientes reservan desde un link, les llega su confirmación por WhatsApp y apartan con anticipo. Plan gratis para siempre y 14 días de prueba sin tarjeta.',
    ogImage: '/og/citas.png',
    ogAlt: 'flowlift Citas: tu agenda, bajo control',
  },
]

export const NOT_FOUND_META: RouteMeta = {
  path: '/404',
  title: 'Página no encontrada — flowlift',
  description: 'La página que buscas no existe.',
  ogImage: '/og/home.png',
  ogAlt: 'flowlift',
}

export const absolute = (p: string) => SITE_URL + p
