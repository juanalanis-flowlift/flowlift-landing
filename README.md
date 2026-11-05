# flowlift-landing

Sitio de marketing de flowlift (flowlift.co), en español e inglés.
React 18 + Vite + TypeScript + React Router. CSS normal con los tokens del sistema de diseño de flowlift. Sin librerías de animación: todo el movimiento es CSS.

## Páginas

| Página | Español | Inglés |
|---|---|---|
| Home de marca | `/` | `/en` |
| Citas (producto) | `/citas` | `/en/appointments` |
| Funciones | `/funciones` | `/en/features` |
| Precios | `/precios` | `/en/pricing` |
| Preguntas frecuentes | `/preguntas-frecuentes` | `/en/faq` |
| Centro de ayuda | `/ayuda` | `/en/help` |
| Sobre nosotros | `/nosotros` | `/en/about` |
| Aviso de Privacidad | `/politica-de-privacidad` | `/en/privacy-policy` |
| Términos y Condiciones | `/terminos-y-condiciones` | `/en/terms-and-conditions` |

Las URLs antiguas de flowlift.co en inglés (`/features`, `/products`, `/help`, `/faq`, `/about`, `/privacy-policy`, `/terms-and-conditions`) redirigen con 301 a su nueva dirección (`server/redirects.json`). El idioma sale de la URL (`/en/...` = inglés) y se recuerda en `localStorage` (`flowlift-language`, la misma llave del sitio anterior).

## Correrlo

Necesitas Node.js 20 o más nuevo.

```bash
npm install
npm run dev        # desarrollo, http://localhost:5173 (con recarga automática)
```

Para producción:

```bash
npx playwright install chromium   # una sola vez: el build usa Chromium para generar el HTML de cada ruta
npm run build                     # compila y genera dist/ con el HTML de cada ruta y el sitemap
npm start                         # sirve dist/ en http://localhost:4173 (usa la variable PORT si existe)
```

Qué hace `npm run build`: compila con Vite y después abre cada ruta (18 páginas) en Chromium (`scripts/prerender.ts`) para guardar su HTML ya renderizado en `dist/` (por ejemplo `dist/citas/index.html`), con su título, descripción, canonical, `hreflang` y Open Graph. Así WhatsApp, que no ejecuta JavaScript, ve los datos correctos de cada página. También genera `dist/sitemap.xml` con los alternos de idioma. Si no puedes instalar Chromium, `npm run build:fast` compila sin ese paso, pero entonces todas las rutas comparten los meta tags de la Home al compartirse.

`npm start` usa `server/static.mjs`, un servidor sin dependencias que sirve `/citas` con su propio HTML, aplica las redirecciones 301 y devuelve la 404 real para rutas desconocidas. Si publicas en otro hosting estático, asegúrate de que cada ruta abra su `index.html`, de que las rutas desconocidas abran `dist/404.html` y de replicar `server/redirects.json`.

### En Replit

1. Importa este repositorio de GitHub.
2. Desarrollo: `npm install` y `npm run dev`.
3. Publicación: build `npm run build`, run `npm start`.

## Dónde cambiar cada cosa

| Qué | Dónde |
|---|---|
| Links de "Entrar", registro, Instagram, Facebook, correo de contacto | `src/config.ts` (constante `LINKS`) |
| Textos de la interfaz (menú, pie de página, 404, lista de espera) | `src/content/common.ts` |
| Textos de la Home y de Citas (español e inglés) | `src/content/home.ts`, `src/content/citas.ts` |
| Funciones, Precios, Preguntas, Sobre nosotros | `src/content/funciones.ts`, `precios.ts`, `faq.ts`, `nosotros.ts` |
| Precios | `src/content/precios.ts` (planes y periodos) y `src/content/citas.ts`, objeto `pricing` |
| Centro de ayuda | `src/content/help/ayuda.es.json` y `ayuda.en.json` |
| Aviso de Privacidad y Términos | `src/content/legal/*.json` |
| Título, descripción e imagen para compartir | `src/content/home.ts`, `citas.ts` (campo `meta`) y `src/content/pages-meta.ts` |
| Imágenes para compartir (1200×630) | `scripts/og.ts` y luego `npm run og` (genera `public/og/*.png`) |
| Colores, radios, sombras | `src/styles/tokens.css` (sistema, no se modifica) y `src/styles/tokens-editorial.css` (paleta de papel) |
| Lista de espera de Clases y Tienda | `src/lib/waitlist.ts`, función `saveToWaitlist()` |
| Imágenes | `public/assets/`. Si agregas o cambias una, corre `node scripts/image-sizes.mjs` |

Los textos en español de Funciones, Precios, Preguntas, Sobre nosotros, Ayuda y los legales se importaron de flowlift.co con `scripts/import-site.mjs` (`node scripts/import-site.mjs <carpeta>` los guarda como estructura JSON). Los textos de la Home y de Citas en inglés son un borrador de traducción pendiente de revisión.

## Pendientes marcados con TODO

- Texto del fundador (Home). La foto ya está en `public/assets/photos/fundador.webp`.
- Fotos de Tienda y su tercer beneficio (Home).
- Lista de espera: hoy guarda en el navegador de quien la usa. Falta conectarla a HubSpot en `saveToWaitlist()`.
- Texto de la imagen `home.png` y `home-en.png` (`scripts/og.ts`): hoy dicen "Tu agenda. Bajo control.", que es el texto de Citas.
- Revisión del inglés de la Home y de Citas.
- WhatsApp: la Home y Citas hablan de confirmaciones y recordatorios por WhatsApp; el centro de ayuda actual dice que aún no se envían. Alinear los textos cuando se lance.
- Los avisos legales siguen citando `juan.alanis@flowlift.co` como contacto del responsable (texto legal, no se modificó).

## Verificación

```bash
npm run build && npm run verify
```

`scripts/verify.ts` revisa, en las 18 páginas y a 390 y 1280 px: colores solo desde tokens, sin emojis, "flowlift" en minúsculas, íconos solo de Lucide, sin scroll horizontal, sin errores de consola, imágenes con medidas, enlaces internos y anclas válidos, áreas táctiles de 44 px y foco visible por teclado. Guarda capturas de página completa en `screenshots/final-*.jpg`.

Utilidades de desarrollo en `scripts/dev/` (capturas por ruta, pruebas del menú, precios, buscadores, ayuda y legales).

## Movimiento

Las animaciones por scroll (`src/styles/motion.css`, `home.css`, `citas.css`) viven dentro de `@supports (animation-timeline: view())`: si el navegador no las soporta, el contenido se ve completo y quieto. Con `prefers-reduced-motion: reduce` se apaga todo, las líneas quedan dibujadas y las pestañas dejan de avanzar solas. Los temporizadores (pestañas y texto rotativo) se pausan cuando la pestaña del navegador no está visible.
