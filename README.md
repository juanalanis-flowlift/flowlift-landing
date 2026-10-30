# flowlift-landing

Sitio de marketing de flowlift (flowlift.co): Home (`/`), Citas (`/citas`) y 404.
React 18 + Vite + TypeScript + React Router. CSS normal con tokens del sistema de diseño de flowlift. Sin librerías de animación: todo el movimiento es CSS.

## Correrlo

Necesitas Node.js 20 o más nuevo.

```bash
npm install
npm run dev        # desarrollo, http://localhost:5173 (con recarga automática)
```

Para producción:

```bash
npx playwright install chromium   # una sola vez: el build usa Chromium para generar el HTML de cada ruta
npm run build                     # compila y genera dist/ con el HTML de cada ruta
npm start                         # sirve dist/ en http://localhost:4173 (usa la variable PORT si existe)
```

Qué hace `npm run build`: compila con Vite y después abre cada ruta en Chromium (`scripts/prerender.ts`) para guardar su HTML ya renderizado en `dist/` (`index.html`, `citas/index.html`, `404.html`). Así WhatsApp, que no ejecuta JavaScript, ve el título, la descripción y la imagen correctos de cada página. Si no puedes instalar Chromium (por ejemplo en un entorno limitado), `npm run build:fast` compila sin ese paso, pero entonces todas las rutas comparten los meta tags de la Home al compartirse.

`npm start` usa `server/static.mjs`, un servidor sin dependencias que sirve `/citas` con su propio HTML y devuelve la 404 real para rutas desconocidas. Si publicas en otro hosting estático, asegúrate de que `/citas` abra `dist/citas/index.html` y de que las rutas desconocidas abran `dist/404.html`.

### En Replit

1. Importa este repositorio de GitHub.
2. Desarrollo: `npm install` y `npm run dev`.
3. Publicación: build `npm run build`, run `npm start`.

## Dónde cambiar cada cosa

| Qué | Dónde |
|---|---|
| Links de "Entrar", registro, Instagram, correo, ayuda | `src/config.ts` (constante `LINKS`) |
| Textos y listas de la Home (preguntas, pasos, productos, fotos del hero) | `src/content/home.ts` |
| Textos y listas de Citas (pestañas, funciones, precios, preguntas) | `src/content/citas.ts` |
| Precios | `src/content/citas.ts`, objeto `PRICING` |
| Título, descripción e imagen para compartir de cada página | `src/content/seo.ts` |
| Imágenes para compartir (1200×630) | `scripts/og.ts` y luego `npm run og` (genera `public/og/*.png`) |
| Colores, radios, sombras | `src/styles/tokens.css` (sistema, no se modifica) y `src/styles/tokens-editorial.css` (paleta de papel) |
| Lista de espera de Clases y Tienda | `src/lib/waitlist.ts`, función `saveToWaitlist()` |
| Imágenes | `public/assets/`. Si agregas o cambias una, corre `node scripts/image-sizes.mjs` para actualizar sus medidas |

## Pendientes marcados con TODO

- Foto y texto del fundador (Home).
- Fotos de Tienda y su tercer beneficio (Home).
- Links de "Entrar" y de registro, Instagram y correo de contacto (`src/config.ts`).
- Lista de espera: hoy guarda en el navegador de quien la usa. Falta conectarla a HubSpot en `saveToWaitlist()`.
- Texto de la imagen `home.png` (`scripts/og.ts`): hoy dice "Tu agenda. Bajo control.", que es el texto de Citas.

## Verificación

```bash
npm run build && npm run verify
```

`scripts/verify.ts` revisa: colores solo desde tokens, sin emojis, "flowlift" en minúsculas, íconos solo de Lucide, sin scroll horizontal a 390 px, sin errores de consola, imágenes con medidas, áreas táctiles de 44 px y foco visible por teclado. Guarda capturas de página completa en `screenshots/final-*.png`.

Utilidades de desarrollo en `scripts/dev/` (capturas por ruta y scroll, prueba del celular de Funciones, prueba de pestañas y precios).

## Cómo agregar /clases o /tienda

1. Copia `src/pages/Citas.tsx` a `src/pages/Clases.tsx` y su contenido a `src/content/clases.ts`.
2. Agrega la ruta en `src/App.tsx`, su entrada en `src/content/seo.ts`, en `ROUTES` de `scripts/prerender.ts` y en `public/sitemap.xml`.
3. Agrega su variante en `scripts/og.ts` y corre `npm run og`.
4. Enlázala desde la navegación de la Home (`HOME_NAV` en `src/content/home.ts`).

## Movimiento

Las animaciones por scroll (`src/styles/motion.css`, `home.css`, `citas.css`) viven dentro de `@supports (animation-timeline: view())`: si el navegador no las soporta, el contenido se ve completo y quieto. Con `prefers-reduced-motion: reduce` se apaga todo, las líneas quedan dibujadas y las pestañas dejan de avanzar solas. Los temporizadores (pestañas y texto rotativo) se pausan cuando la pestaña del navegador no está visible.
