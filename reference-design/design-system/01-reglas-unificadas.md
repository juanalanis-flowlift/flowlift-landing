# Reglas de uso y decisiones unificadas (D1–D10)

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

## 0. Reglas de uso (leer primero)

1. **Nada se inventa.** Cada color, tamaño de letra, peso, alto, padding, radio, borde, sombra, duración y curva sale de este documento. Si un elemento no está aquí, se pregunta antes de construirlo.
2. **Todo color es variable CSS** (`var(--…)`) de `tokens.css`. Hex sueltos solo los de la lista §1.1.5.
3. **Un componente = una clase.** Las clases de §17 se definen una sola vez en `ds-components.css` y se usan en todas las pantallas. Prohibido estilos sueltos por pantalla (`style=`, clases utilitarias de Tailwind con valores arbitrarios, o CSS local que redefina un componente).
4. **Medidas en px exactos** como están aquí; no redondear (13.5px es 13.5px, no 14px).
5. **Tipografía por rol** (§2): se elige el rol, no el tamaño.
6. **Mobile = 390 de ancho de referencia; escritorio = 1280.** Breakpoints en §3.10.
7. **El HTML de referencia de `design-reference/` manda sobre la interpretación.** Este documento explica qué hay en ese HTML y fija las reglas; si hay diferencia entre ambos, se reporta.
8. **Nada de "SOLO EN EL PROTOTIPO · VER ESTADO"** (chips negros al pie de algunas pantallas) ni la banda negra "PROTOTIPO · CASO" (09m): son controles del prototipo, no van a la app.
9. **Antes de cerrar una pantalla**, correr la checklist §19 y reportarla con citas literales del código.

### 0.1 Decisiones de unificación (el canvas tenía más de una versión) — **APROBADAS por Juan el 12-oct-2026**
| # | Elemento | Variantes encontradas | Decisión |
|---|---|---|---|
| D1 | Título del header simple móvil | Serif 19 (≈30 pantallas) y Sans 14/600–700 (≈12) | Header de una línea → **Serif 19/400**. Header con título + subtítulo → **Sans 14/700 + subtítulo 12 tertiary**. (Corregir 09d, 09g, 09n, 10, 11, 13b a Serif 19.) |
| D2 | Control segmentado | 6 combinaciones de contenedor y activo | Dos tipos y solo dos (§7.5): **Pestañas** (contenedor gris, activo blanco) y **Selector pill** (contenedor blanco con borde, activo verde). |
| D3 | Alto de controles en barras de herramientas | segmentado 26–34, navbtn 26–36 | **32 px** para todo control dentro de un header de tarjeta o barra de herramientas (`--ctl-h: 32px`). |
| D4 | Chips activos | verde relleno / verde pálido | Filtro o selección única → **verde relleno**. Selección múltiple u opcional → **verde pálido con borde verde** (§7.4). |
| D5 | Botones "Cambiar foto / Cambiar logo" | móvil verde pálido, escritorio blanco | **Botón secundario blanco** en ambos. |
| D6 | Formato de hora | 12 h "5:00 PM" en todo el canvas | **12 h con AM/PM**: "5:00 PM", "10:00 AM", en columnas "5:00" + "PM" debajo. (Corrige la v1 que decía 24 h.) |
| D7 | Color de marcas de datos | verde, ink y gris mezclados | Regla §11.1: verde = progreso/dinero/disponible; ink = volumen/ocupación; ámbar = casi lleno. |
| D8 | Badge "Activa" | pill verde pálido / texto con punto | Dentro de encabezado de tarjeta → **texto con punto** (§10.3). Junto a un título dentro del cuerpo → **pill** (§10.1). |
| D9 | Etiquetas de formulario | 13/600 primary y 12/600 secondary | Dos variantes con regla fija (§7.1): **A Persona** y **B Configuración**. |
| D10 | Ancho del drawer móvil | 300 | **300 px**. |
| D11 | Borde de checkbox y radio sin marcar | `--border-default` #EBEBEB (casi invisible) | **`--grey-mid` #767676** (contraste 4.5:1 sobre blanco): checkbox 1px, radio 1.5px. Aprobada por Juan el 13-oct-2026. |
| D12 | Badge rojo de notificaciones | móvil ovalado y cortado; escritorio pill de esquinas redondeadas | **Siempre círculo**: 20 px sobre botón con caja, 18 px sobre ícono sin caja, dentro del área de toque; máximo "9+". Aprobada por Juan el 13-oct-2026. |
| D13 | Librería de íconos | trazos a mano estilo Feather/Lucide, sin librería definida | **Lucide** (`lucide-react` 0.460.0), trazo 2, tamaños por contexto (`02b-iconografia.md`). Aprobada por Juan el 13-oct-2026. |
| D14 | Íconos por concepto | menú de escritorio y drawer con íconos distintos; mismo reloj para "Cupo y lista de espera" y "Horario del negocio" | **Un concepto = un ícono** según el catálogo; "Cupo y lista de espera" = `Hourglass`, "Horario del negocio" = `Clock`, "Suscripción de flowlift" = `Repeat`. Aprobada por Juan el 13-oct-2026. |
| D15 | Conteos del menú | "0" visible en el conteo de Cobros (Replit) | El conteo solo aparece si es **mayor que 0**. Aprobada por Juan el 13-oct-2026. |
