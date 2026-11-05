// Página Sobre nosotros. Textos de flowlift.co sin cambios.
export type NosotrosContent = { hero: { eyebrow: string; title: string; lead: string }; blocks: { title: string; text: string }[]; cta: string }

const es: NosotrosContent = {
  hero: { eyebrow: '[ flowlift ]', title: 'Acerca de *flowlift*', lead: 'Nuestra misión es hacer que las reservas sean simples para negocios de servicios en todas partes.' },
  blocks: [
    { title: 'Nuestra Misión', text: 'flowlift fue creado para ayudar a los negocios de servicios a optimizar su proceso de reservas. Creemos que gestionar citas debe ser simple, eficiente y accesible para todos, desde profesionales independientes hasta equipos en crecimiento.' },
    { title: 'Nuestra Historia', text: 'Fundado por emprendedores que experimentaron los desafíos de gestionar reservas de primera mano, flowlift combina características poderosas con una interfaz intuitiva. Estamos comprometidos a proporcionar herramientas que ayuden a los negocios a enfocarse en lo que mejor hacen: servir a sus clientes.' },
  ],
  cta: 'Comienza gratis',
}

const en: NosotrosContent = {
  hero: { eyebrow: '[ flowlift ]', title: 'About *flowlift*', lead: "We're on a mission to make booking simple for service businesses everywhere." },
  blocks: [
    { title: 'Our Mission', text: 'flowlift was created to help service businesses streamline their booking process. We believe that managing appointments should be simple, efficient, and accessible to everyone—from solo practitioners to growing teams.' },
    { title: 'Our Story', text: "Founded by entrepreneurs who experienced the challenges of managing bookings firsthand, flowlift combines powerful features with an intuitive interface. We're committed to providing tools that help businesses focus on what they do best: serving their customers." },
  ],
  cta: 'Start for free',
}

export const NOSOTROS = { es, en }
