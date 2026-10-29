# Prompt para Claude Code — sitio de marketing de flowlift (flowlift.co)

> Cómo usarlo: descomprime esta carpeta, ábrela con Claude Code (`cd flowlift-landing && claude`) y pega todo lo que está debajo de la línea. Claude Code tiene en esta misma carpeta el diseño de referencia (`reference-design/`), el sistema de diseño (`reference-design/design-system/`) y todas las imágenes ya optimizadas (`public/assets/`).

---

## Contexto

Vas a construir el sitio de marketing de **flowlift**, una empresa mexicana que hace herramientas sencillas para pequeños negocios. La marca se escribe siempre **flowlift**, en minúsculas, nunca "FlowLift". El sitio está en español de México, con tuteo y lenguaje neutro en género.

flowlift tiene tres productos:
- **Citas**, disponible hoy, para negocios que trabajan con citas: estilistas, barberos, uñas, fotógrafos y consultorios.
- **Clases**, que llega a inicios de 2027, para escuelas pequeñas e instructores.
- **Tienda**, que llega a inicios de 2027, para quien vende productos.

El diseño ya está hecho y aprobado. Tu trabajo es **reproducirlo con fidelidad** como un sitio real, listo para publicarse en Replit. No rediseñes, no cambies textos y no inventes contenido. Si algo no se puede reproducir igual, me lo dices antes de cambiarlo.

El objetivo del sitio es dar credibilidad. Se va a compartir por WhatsApp, así que tiene que verse como una empresa formal, cuidada y nada genérica, y cargar rápido en celular.

## Forma de trabajar (obligatorio)

1. **Primero el plan, después el código.** Lee todo `reference-design/` y `reference-design/design-system/README.md`. Después preséntame un plan corto con la estructura de carpetas, los componentes, cómo vas a traducir las animaciones y las dudas que tengas. **Espera mi aprobación antes de escribir código.**
2. Construye por fases y, al terminar cada fase, enséñame capturas: (1) base y componentes compartidos, (2) página Home, (3) página Citas, (4) imagen para compartir, SEO y pulido.
3. Al final corre la verificación descrita en "Verificación" y repórtame el resultado por página.

## Stack

Usa el mismo stack de los productos de flowlift para que se pueda mover a Replit sin fricción:

- **React 18 + Vite + TypeScript**, con **React Router** para las rutas.
- **CSS normal** (un `global.css` con tokens más CSS por sección o CSS Modules). No uses Tailwind para este sitio: el diseño depende de animaciones CSS por scroll, `clamp()` y valores exactos que ya están escritos en CSS en la referencia. Copia esas reglas y no las reinterpretes.
- Íconos con **lucide-react**. El componente `Icon` del sistema de diseño usa Lucide, y los nombres de la referencia (`ArrowRight`, `CalendarCheck`, `MessageSquare`, etc.) son los mismos de lucide-react.
- Fuentes: **DM Serif Display** (títulos) y **DM Sans** (todo lo demás), desde Google Fonts con `display=swap` y `preconnect`.
- Un servidor **Express** mínimo solo si hace falta para el endpoint de la lista de espera. Si no, deja el sitio 100% estático.
- Sin librerías de animación (nada de Framer Motion ni GSAP). Todo el movimiento ya está resuelto en CSS.

## Rutas

| Ruta | Archivo de referencia | Qué es |
|---|---|---|
| `/` | `reference-design/Home.dc.html` | Home de marca (flowlift.co) |
| `/citas` | `reference-design/Citas.dc.html` | Página del producto Citas, versión híbrida final |
| `404` | — | Página simple con el mismo estilo y botón para regresar al inicio |

Archivos que son solo de consulta (no son rutas):
- `Nodes.dc.html`: un componente que se usa dentro de Citas. Constrúyelo como `<BookingFlowNodes svc when who />`.
- `Share.dc.html`: la imagen de 1200×630 que se ve al compartir por WhatsApp (ver "SEO y compartir").
- `Main.dc.html` (Versión A, estilo Melius) y `Editorial.dc.html` (Propuesta B): versiones anteriores. **No son rutas.** Sirven para sacar detalles (por ejemplo, el CSS de los nodos y del switch anual venía de `Main`), pero no las construyas.
- `asset-map.txt`: qué imagen es cada archivo.

## Cómo leer los archivos `.dc.html`

Son archivos de Claude Design. Cada uno tiene tres partes: los estilos dentro de `<helmet><style>`, el marcado dentro de `<x-dc>` y la lógica en un `<script type="text/x-dc">` con `class Component extends DCLogic`. Tradúcelos así:

- `{{ algo }}` es un valor que regresa `renderVals()`. En React es una variable o prop.
- `<sc-for list="{{ items }}" as="x">…</sc-for>` es `items.map(x => …)`. Ignora los atributos `hint-*`.
- `<sc-if value="{{ cond }}">…</sc-if>` es `{cond && …}`.
- `<x-import component-from-global-scope="FlowLiftDesignSystem_980fa8.Icon" name="ArrowRight" size="{{ n16 }}">` es `<ArrowRight size={16} />` de lucide-react,.
- `<dc-import name="Nodes" svc= when= who=>` es `<BookingFlowNodes … />`.
- `this.state` y `setState` en la clase se vuelven `useState`. `componentDidMount` y `componentWillUnmount` se vuelven `useEffect` con su limpieza.
- `onClick="{{ fn }}"` y `onSubmit="{{ fn }}"` son los handlers de React.
- Los atributos `style="…"` que se arman como texto en `renderVals` pasan a objetos `style={{}}` o, mejor, a clases con variables CSS (`--dx`, `--dy`, `--from`, `--to`).
- **Truco de "parity"** (`parityA` / `parityB` en Citas): sirve para reiniciar las animaciones cada vez que cambia la pestaña. En React se hace con `key={tab}` (o `key={flip}`) en el contenedor que se tiene que volver a montar. Así se reinician el texto que se escribe solo y los nodos que aparecen.
- Las rutas de imágenes ya apuntan a `/assets/...`, que en Vite es la carpeta `public/assets/...`.

## Sistema de diseño (no negociable)

Está en `reference-design/design-system/`. Lee `README.md` y `04-movimiento.md`, y toma los tokens de `tokens.css` y `tokens.json`.

- Verde primario `#2DB35D`, hover `#27A052`, claros `#5EC987`, `#A8E6C0` y `#E8F8EE`, oscuro `#1A6638`.
- Texto `#1A1A1A`, `#3D3D3D` y `#767676`.
- Para estas páginas editoriales: fondo papel `#FAF8F3`, texto apagado `#6B665C`, líneas `#D9D3C5` y `#E4DFD3`.
- Radios 6, 10 y 16 px (más los redondeos grandes que ya trae la referencia). Las animaciones de interacción duran menos de 250 ms con ease-out.
- Declara todos los colores como variables CSS en `:root` y úsalas. No dejes hex sueltos repartidos por los componentes.
- Los botones táctiles miden al menos 44 px de alto. Todo control tiene `:focus-visible` con el anillo verde de la referencia.
- **Sin emojis** en la interfaz.

## Página `/` — Home de marca

Reproduce `Home.dc.html` sección por sección:

1. **Navegación fija** con el logo (`/assets/brand/logo.svg`) y los links Citas, Clases y Tienda (anclas a cada producto) y Entrar.
2. **Hero.** Título gigante centrado "TU NEGOCIO, *bajo* CONTROL." en DM Serif Display, en mayúsculas, con "bajo" en itálica verde. Abajo va una línea que rota entre "tu agenda", "tus alumnos" y "tus pedidos" dentro de "Ordena … desde un solo link.". Las fotos flotan **en los márgenes**, nunca encima del texto, y se mueven con parallax al hacer scroll (`.par`, con `--dx` y `--dy`). En pantallas de menos de 700 px se ocultan las fotos del hero (`.hm`). Hay una línea "cue" que invita a bajar.
3. **[01] Manifiesto:** "Tecnología al servicio de las personas.", con el flujo Llega → Aparta → Paga → Regresa unido por una línea que se dibuja al hacer scroll.
4. **[02] Productos:** tres artículos.
   - **Citas:** disponible, con botón "14 días gratis" y "Ver Citas a detalle", que lleva a `/citas`.
   - **Clases:** "Llega a inicios de 2027". Lleva las fotos de piano y de la recepción con papá e hijo, y un formulario de lista de espera.
   - **Tienda:** igual que Clases. Sus fotos y su tercer beneficio siguen pendientes, así que deja los placeholders tal cual están.
5. **[03] La misma base**, una cuadrícula de 6 puntos.
6. **[04] Órbita "¿Cómo trabajas tú?"**: fotos y bloques de color acomodados en una elipse (el cálculo está en `renderVals`), que se separan al hacer scroll (`.ring-s`), con tres botones al centro.
7. **Fundador + [05] Preguntas frecuentes.** La foto y el texto del fundador son placeholders: déjalos marcados y visibles. El acordeón abre una pregunta a la vez y el ícono "+" gira 45°.
8. **Cierre oscuro** con titular gigante, dos botones, footer y la pastilla flotante "CITAS · 14 DÍAS GRATIS".

**Lista de espera (Clases y Tienda).** En la referencia solo cambia el estado de la pantalla. Implementa un `POST /api/waitlist` con `{ email, product }`: valida el correo, rechaza duplicados y deja una función `saveToWaitlist()` aislada con un `TODO` para conectarla después a HubSpot. Mientras tanto guarda en un archivo JSON o en memoria. Pon mensajes de error accesibles (`aria-live`) y no pierdas lo que la persona escribió si falla.

## Página `/citas` — Citas (híbrido)

Reproduce `Citas.dc.html`. Usa el fondo papel y el estilo editorial minimalista, y el protagonismo lo tienen **las pantallas del producto**. No lleva sección de fundador.

1. **Navegación:** logo con "*Citas*" en itálica verde y los links Cómo funciona, Funciones, Precios y Entrar.
2. **Hero:**
   - Eyebrow "[ flowlift Citas ]", título "Tu agenda, *bajo* control.", subtítulo y dos botones en forma de pastilla.
   - Debajo va el "stage": una ventana de escritorio con `screens/d-resumen.webp` y un celular con `screens/m-servicio.webp` encima.
   - Tres avisos flotantes (Nueva reserva, Recordatorio enviado por WhatsApp, Anticipo recibido $200) aparecen uno tras otro, unidos al celular por **líneas verdes SVG que se dibujan** (`pathLength=1` y `stroke-dashoffset`).
   - El escritorio y el celular suben a distinta velocidad con el scroll (`.rise`).
   - En pantallas chicas el stage se escala completo. No lo partas ni lo reacomodes.
3. **[01] Del link a tu agenda:** un panel redondeado dividido en dos.
   - A la izquierda, fotos verticales por giro (barbería, estética, uñas, tatuajes, fotografía) que se funden entre sí. Encima va una tarjeta oscura con pestañas y un campo donde el texto "se escribe solo" con cursor parpadeante.
   - A la derecha, un canvas oscuro con puntos y el componente `BookingFlowNodes`: nodos que aparecen uno por uno, unidos por líneas que se dibujan.
   - Las pestañas avanzan solas cada 8 s. Al hacer clic se reinicia el temporizador. Cada cambio vuelve a montar el texto y los nodos (`key`).
   - Ojo: `Nodes.dc.html` tiene texto blanco y depende de las clases `.pop`, `.d1`–`.d5`, `.draw` y `.l1`–`.l4`, que están en el CSS de Citas. Llévalas al CSS del componente.
4. **[02] Funciones:** a la izquierda, un celular fijo (`position: sticky`) cambia de pantalla según la función que está a la vista. A la derecha, 8 bloques:
   - página y link
   - agenda
   - confirmaciones y recordatorios
   - anticipos y pagos (una tarjeta armada en HTML, no una imagen)
   - historial (Pro+)
   - bloqueos
   - resumen
   - equipo (Equipos)

   La referencia lo hace con `timeline-scope` y `view-timeline-name: --f0…--f7`. Mantén esa técnica cuando el navegador la soporte. Si no la soporta (Safari, Firefox), haz un respaldo con **IntersectionObserver** que cambie la pantalla activa con un fundido de opacidad: no es suficiente con poner un celular debajo de cada bloque. En móvil (menos de 900 px) sí va un celular debajo de cada bloque, como en la referencia (`.feat-ph`).
5. **[03] Precios:**
   - Tres columnas con estilo editorial: **Starter** $0, **Pro+** $349 al mes con etiqueta "Precio de lanzamiento" y **Equipos** $649 al mes.
   - Switch mensual/anual accesible (`role="switch"`, `aria-checked`). En anual, Pro+ cuesta $3,490 al año ("Equivale a $291 al mes") y Equipos $6,490 al año ("Equivale a $541 al mes").
   - Una nota de OXXO y una franja de confianza con 4 puntos.
6. **[04] Preguntas** en acordeón y **cierre oscuro** "TU AGENDA, *lista hoy.*", con footer y pastilla flotante.

## Movimiento (todo en CSS, ya escrito en la referencia)

- Las animaciones por scroll van dentro de `@supports (animation-timeline: view())`:
  - `.rv` aparece al entrar a la vista.
  - `.par` y `.rise` hacen parallax con `scroll(root)`.
  - `.vpar` es el parallax de las fotos en los bordes.
  - `.unclip` anima un `clip-path`.
  - `.cue` y `.flow-line` son líneas que se dibujan.
  - `.ring-s` separa la órbita.
- **Si el navegador no las soporta, el contenido se ve completo y quieto.** Nunca debe quedar algo invisible esperando una animación que no llega.
- `@media (prefers-reduced-motion: reduce)` apaga todo el movimiento, deja las líneas ya dibujadas y detiene la rotación automática de las pestañas.
- Pausa los temporizadores (pestañas y texto rotativo) cuando la pestaña del navegador no está visible (`document.visibilityState`).

## SEO y compartir por WhatsApp

- Cada ruta lleva su `<title>`, `meta description`, `lang="es-MX"`, `canonical` y Open Graph y Twitter completos.
  - Home: "flowlift — Tu negocio, bajo control".
  - Citas: "flowlift Citas — Tu agenda, bajo control".
- Imagen OG de 1200×630: genera un PNG a partir de `Share.dc.html` con un script de Playwright (`scripts/og.ts`) y guárdalo en `public/og/home.png`. Para Citas usa el mismo diseño con su título.
- Favicon a partir del logo.
- Como es un SPA, haz que el HTML de cada ruta salga ya con sus meta tags, por prerender en el build o con un HTML por ruta. WhatsApp no ejecuta JavaScript.

## Rendimiento y accesibilidad

- Todas las imágenes llevan `width`, `height` y `loading="lazy"`, salvo las del hero y el stage, que van con `fetchpriority="high"` y sin lazy. Las imágenes ya están en WebP: no las vuelvas a comprimir.
- Lighthouse en móvil: rendimiento de 90 o más, accesibilidad de 95 o más, sin saltos de layout (CLS menor a 0.05).
- Las imágenes decorativas llevan `alt=""`. Los componentes visuales complejos (stage, nodos) llevan `role="img"` con el `aria-label` de la referencia.
- Sin scroll horizontal a 390 px de ancho.

## Datos que no debes inventar

- No agregues testimonios, logos de clientes, números de usuarios ni estadísticas. No existen todavía.
- Las fotos de clientes son ambientales. No las presentes como clientes reales.
- No describas flowlift como "una app". Los clientes de cada negocio no descargan nada: entran por un link.
- Precios: los de arriba. La prueba es de 14 días y no pide tarjeta. Los paquetes OXXO son de 92 días.
- Placeholders que deben quedarse visibles y marcados con `TODO` en el código: la foto y el texto del fundador, las fotos de Tienda, el tercer beneficio de Tienda, los links de "Entrar" y del registro (ponlos en una constante `LINKS` en `src/config.ts`), el Instagram y el correo de contacto.

## Verificación (al terminar)

1. Capturas con Playwright de `/` y `/citas` a **390 px** y **1280 px**, de página completa, en `screenshots/`. Compáralas contra la referencia y dime qué difiere.
2. Revisa que no queden colores fuera de los tokens, que no haya emojis, que todos los íconos sean de lucide-react, que "flowlift" esté siempre en minúsculas y que no haya scroll horizontal a 390 px.
3. Corre Lighthouse en móvil y repórtame las cuatro calificaciones.
4. Haz una prueba manual con navegación por teclado: pestañas, acordeón, switch anual y formulario.
5. Repórtame por página: "Sistema de diseño: cumple" o la lista de lo que no cumple y por qué.

## Entregables

- Un repositorio listo para Replit (`npm run dev` y `npm run build`), con `README.md` que explique cómo correrlo y dónde cambiar los links, los precios y los textos.
- `src/content/` con los textos y las listas (FAQ, funciones, pestañas, precios) separados de los componentes, para poder editarlos sin tocar el diseño.
- Una estructura lista para agregar `/clases` y `/tienda` después con el mismo molde de `/citas`.
