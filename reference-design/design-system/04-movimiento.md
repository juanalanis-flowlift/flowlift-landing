# Movimiento

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 5. Movimiento (APROBADO el 12-oct-2026 tras prueba interactiva de 10 animaciones)

**Filosofía:** el movimiento confirma una acción o explica un cambio; nunca decora. Inspirado en Apple (hojas con curva iOS, respuesta inmediata al toque) y Google (entrada que desacelera, salida más corta que la entrada). Como máximo 1–2 elementos animándose a la vez por vista. Referencia visual: artefacto "Movimiento flowlift".

### 5.1 Tokens (copiar tal cual a `:root`)
| Token | Valor | Uso |
|---|---|---|
| `--t-press` | 100ms | respuesta al toque (scale) |
| `--t-state` | 150ms | hover, color, borde, fondo, texto activo |
| `--t-enter` | 250ms | aparece contenido: listas, toasts, cambio de pestaña, switch |
| `--t-sheet` | 350ms | hoja inferior, drawer, modal |
| `--t-exit` | 200ms | todo lo que se cierra (≈60% de la entrada) |
| `--t-fill` | 1400ms | llenado de datos (barras, anillos, líneas; ver 5.4) |
| `--t-draw` | 400ms | trazo de check de éxito |
| `--ease-std` | cubic-bezier(.2,0,0,1) | cambios de estado y presión |
| `--ease-enter` | cubic-bezier(.05,.7,.1,1) | entradas (desacelera) |
| `--ease-exit` | cubic-bezier(.3,0,.8,.15) | salidas (acelera) |
| `--ease-ios` | cubic-bezier(.32,.72,0,1) | hojas, drawers, pastilla del segmentado |
| `--ease-spring` | cubic-bezier(.34,1.3,.64,1) | SOLO knob del switch y círculo del check de éxito |
| `--ease-fill` | cubic-bezier(.25,.8,.25,1) | llenado de datos (frenado largo y suave) |
| `--green-soft` | #d3f1de (oscuro #1f4a2f) | estado presionado de fila navegable |

### 5.2 Reglas generales
1. Solo animar `transform`, `opacity`, `background-color`, `border-color`, `box-shadow`, `color` y, en SVG, `stroke-dashoffset`. Prohibido animar `width`, `height`, `top`, `left`, `margin`. Prohibido `transition: all`.
2. Entrada con `--ease-enter`; salida con `--ease-exit`; cambio de estado con `--ease-std`; hojas con `--ease-ios`. Nunca `linear` salvo el brillo del skeleton.
3. El movimiento nunca bloquea el toque; toda animación es interrumpible (usar transiciones CSS, no temporizadores que deshabiliten la UI).
4. **Movimiento reducido:** con `prefers-reduced-motion: reduce` todos los tokens `--t-*` valen `1ms`, no hay desplazamiento y el skeleton queda estático. Los datos siguen siendo legibles al instante.
5. Nada se anima al hacer scroll. Sin parallax, sin desenfoque de fondo, sin transiciones de página con deslizamiento.
6. La animación solo corre cuando el elemento monta o el dato cambia, no en bucle (única excepción: brillo del skeleton mientras carga).

### 5.3 Catálogo aprobado (las 10)
| # | Componente | Comportamiento exacto |
|---|---|---|
| 1 | **Botones** | Presionar: `scale(.97)`, `--t-press`, `--ease-std`, sin sombra. Hover primario: fondo `--green-primary-hover` + `box-shadow: var(--shadow-brand-hover)` en `--t-state`. Secundario hover: fondo `--surface-subtle`. No se desplaza de lugar. |
| 2 | **Segmentado (Hoy/Semana, Maestros/Recursos)** | En el Selector pill (§7.5) la pastilla verde (`--green-primary`, radio full) se desliza; en Pestañas la pastilla es blanca con sombra `0 1px 2px rgba(0,0,0,.06)` y radio 7. En ambos casos se desliza con `transform: translateX(100%)`, `--t-enter`, `--ease-ios`. El texto cambia de color en `--t-state`. El contenido se reemplaza con fundido + `translateY(6px→0)`, `--t-enter`, `--ease-enter`. |
| 3 | **Switch** | Medidas del canvas: track 40×24, knob 18 (§7.7). Knob viaja con `transform: translateX(16px)`, `--t-enter`, `--ease-spring`. Al presionar el knob se estira a 22 px de ancho (`--t-press`). Fondo del track en `--t-state`. |
| 4 | **Hoja inferior / drawer / modal móvil** | Entra `translateY(100%→0)`, `--t-sheet`, `--ease-ios`. Sale `--t-exit`, `--ease-exit`. Scrim `rgba(20,20,19,.32)` fade `--t-enter` / `--t-exit`. Sin blur. Handle 36×4. Clic en scrim cierra. |
| 5 | **Lista escalonada** | Cada fila: `opacity 0→1` + `translateY(8px→0)`, `--t-enter`, `--ease-enter`, retraso `i × 40ms`, máximo 6 filas escalonadas (el resto entra junto con la 6.ª). Solo al abrir pantalla, nunca en scroll ni en refrescos de datos. |
| 6 | **Barras y anillos de datos** | Ver 5.4 (regla genérica para cualquier gráfica). |
| 7 | **Confirmación de éxito** | Círculo `--green-pale`: `scale(.6→1)` + fade, `--t-enter`, `--ease-spring`. Check: trazo con `stroke-dashoffset` 30→0, `--t-draw`, `--ease-enter`, retraso 120ms. Texto: fade + `translateY(4px→0)`, retraso 300ms. |
| 8 | **Toast** | Entra `translateY(16px→0)` + fade, `--t-enter`, `--ease-enter`. Dura 4 s. Sale `--t-exit`, `--ease-exit`. `role="status"`, no roba el foco. Fondo `--ink`, texto `--bg`. |
| 9 | **Skeleton** | Fondo `--border-default`; brillo `linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent)` (oscuro: .08) que cruza con `translateX(-100%→100%)`, 1.4 s, `linear`, infinito. Al llegar los datos, fundido de contenido real `--t-enter` (con `translateY(6px→0)`). El skeleton tiene la forma exacta del contenido. |
| 10 | **Fila / tarjeta navegable** | Hover: fondo `--green-pale`, borde `--green-primary`, flecha chevron pasa a verde y avanza `translateX(3px)`, todo `--t-state`. Presionado: fondo `--green-soft`, `scale(.985)`, `--t-press`. |

### 5.4 Animación de datos: barras, anillos y cualquier gráfica (REGLA GENÉRICA)
Aplica a toda visualización: barras horizontales y verticales, anillos/donas, medidores, líneas, áreas, sparklines, barras apiladas, progreso de paquete, ocupación, cobros. Una sola receta para todas.

**Cuándo anima:** (a) al montarse la gráfica por primera vez en la pantalla, (b) al cambiar de segmento/rango (Hoy→Semana, Maestros→Recursos), (c) NUNCA en refrescos silenciosos de datos ni al volver a una pantalla ya vista en la misma sesión. En (b) la gráfica nueva anima desde cero; si solo cambia un valor, la marca existente se interpola al nuevo valor en `--t-enter`/`--ease-std` (sin reiniciar).

**Receta base:** duración `--t-fill` (1400ms), curva `--ease-fill`, la marca crece desde su origen natural (la línea base):
| Tipo | Propiedad animada | Origen / dirección |
|---|---|---|
| Barra horizontal | `transform: scaleX(0→1)` en el relleno, `transform-origin: left` | de izquierda a derecha |
| Barra vertical | `transform: scaleY(0→1)`, `transform-origin: bottom` | de abajo hacia arriba |
| Barra apilada | cada segmento `scaleX/scaleY` con su propio retraso (stagger entre segmentos) | en el orden del apilado |
| Anillo / dona / medidor | `stroke-dashoffset` de `circumference` a `circumference × (1 − valor)`, `stroke-linecap: round`, rotado −90° para empezar arriba | sentido horario |
| Semicírculo / medidor | igual que anillo con la longitud de arco del medio círculo | izquierda → derecha |
| Línea / sparkline | trazo: `stroke-dasharray = longitud`, `stroke-dashoffset` longitud→0 | izquierda → derecha |
| Área | misma animación de la línea, y el relleno hace fade de 0→1 en `--t-enter` con retraso igual a `--t-fill × .6` | |
| Puntos de dispersión / marcadores | `opacity 0→1` + `scale(.6→1)`, `--t-enter`, stagger 20ms | por orden de datos |

**Escalonado (stagger):**
- Varias marcas hermanas (barras de una lista): retraso `i × 120ms`, máximo 4 marcas escalonadas (de la 5.ª en adelante entran junto con la 4.ª).
- Barras verticales de muchas categorías (>8): retraso `i × 40ms`, tope total 400ms.
- Marcas secundarias (anillo junto a barras, valor numérico): retraso fijo `+360ms` respecto a la primera marca.

**Números y etiquetas:**
- Los valores (94%, $2,130) NO se animan con conteo. Aparecen ya finales desde el primer cuadro (legibles aunque la barra aún crezca) con `font-variant-numeric: tabular-nums`.
- Etiquetas de eje, leyenda y cuadrícula aparecen sin animación; solo las marcas de datos se mueven.
- Tooltips: fade `--t-state`, sin desplazamiento.

**Color:** el color de la marca no cambia durante la animación. Umbrales (≥90% ámbar, 100% lleno) se aplican al color final desde el inicio.

**Hover/foco sobre marcas:** la marca activa sube de opacidad (las demás 0.5) en `--t-state`; sin escala ni sombra.

**Implementación recomendada (CSS, sin librerías):**
```css
.chart-mark{transform:scaleX(0);transform-origin:left;
  transition:transform var(--t-fill) var(--ease-fill);transition-delay:calc(var(--i,0)*120ms)}
.chart.is-in .chart-mark{transform:scaleX(1)}            /* barras */
.chart-ring{stroke-dasharray:var(--len);stroke-dashoffset:var(--len);
  transition:stroke-dashoffset var(--t-fill) var(--ease-fill) 360ms}
.chart.is-in .chart-ring{stroke-dashoffset:calc(var(--len)*(1 - var(--v)))}  /* v entre 0 y 1 */
.chart.is-reset,.chart.is-reset *{transition:none!important}  /* reiniciar sin animación inversa */
```
Para reiniciar al cambiar de segmento: añadir `is-reset`, quitar `is-in`, forzar reflow, quitar `is-reset`, esperar dos `requestAnimationFrame` y añadir `is-in`. (Si no se desactiva la transición al reiniciar, la gráfica se vacía lentamente y la animación nueva apenas se ve.) Para librerías (Recharts, etc.): `isAnimationActive` activado, `animationDuration=1400`, `animationEasing="ease-out"`, `animationBegin` escalonado; y desactivado cuando `prefers-reduced-motion`.

**Accesibilidad:** cada gráfica lleva `role="img"` con `aria-label` que resume el dato ("Ocupación de hoy: 78%") o una tabla alternativa; el estado final es idéntico con movimiento reducido.

### 5.5 Qué NO se hace
Rebotes grandes, giros, zoom de página, parallax, animaciones al hacer scroll, contadores numéricos, confeti, transiciones de página con deslizamiento, animaciones en bucle (salvo skeleton), duraciones >1.4 s.

### 5.6 Hoja `motion.css` para Replit
Definir en `client/src/styles/motion.css` los tokens de 5.1, el bloque `@media (prefers-reduced-motion: reduce){:root{--t-press:1ms;--t-state:1ms;--t-enter:1ms;--t-sheet:1ms;--t-exit:1ms;--t-fill:1ms;--t-draw:1ms}}`, y las clases `.chart-mark`, `.chart-ring`, `.is-in`, `.is-reset`, `.sheet`, `.scrim`, `.toast`, `.skeleton`, `.stagger-item` de este capítulo. Ningún componente declara duraciones o curvas propias: siempre `var(--t-…)` y `var(--ease-…)`.
