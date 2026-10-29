Sistema de diseño global de flowlift: una sola base visual para **Bookings** (citas 1:1), **MySpot** (clases recurrentes) y **Mi Tiendita** (productos). Español de México primero, inglés como segundo idioma. Mobile-first: referencia 390 px de ancho en móvil y 1280 px en escritorio.

La marca se escribe siempre **flowlift**, en minúsculas.

## Cómo usar este sistema

1. **Nada se inventa.** Cada color, tamaño, peso, alto, padding, radio, borde, sombra, duración y curva sale de `tokens.json` o de las secciones `.md`. Si algo no está, se pregunta antes de construirlo.
2. **Todo color es token.**
   - Se usa `var(--green-primary)`, `var(--text-primary)`, `var(--border-default)` y así con todos.
   - Los hex sueltos permitidos están listados en `02-fundamentos.md` §1.1.5.
3. **Un componente = una clase.** Las clases `.fl-*` de `components/bundle.css` se definen una vez y se reutilizan. No se redefinen por pantalla.
4. **Tipografía por rol, no por tamaño.**
   - Serif (`--font-display`, DM Serif Display 400) es solo para títulos con emoción: título de pantalla, nombre del negocio, montos grandes.
   - Todo lo demás es Sans (`--font-sans`, DM Sans) en sus roles definidos en `02-fundamentos.md` §2.
5. **Medidas exactas.** 13.5 px es 13.5 px. Los controles dentro de barras de herramientas y encabezados de tarjeta miden `--ctl-h` (32 px).
6. **Antes de cerrar una pantalla**, revísala contra la checklist de `08-estados-copy-y-accesibilidad.md` y `01-reglas-unificadas.md`.

## Fundamentos en una línea

- **Color.** El verde `--green-primary` (#2DB35D) es la marca y se usa con intención: acción primaria, selección, progreso y dinero. Ink y grises para todo lo demás.
  - Página `--surface-page` (#FAFAFA), tarjetas blancas con borde 1 px `--border-default`.
  - Rojo y ámbar solo comunican estado.
- **Radios.**
  - `--radius-sm` 6: chips y celdas pequeñas.
  - `--radius` 10: botones, inputs y badges.
  - `--radius-lg` 16: tarjetas y diálogos.
  - `--radius-full`: pills.
  - Intermedios para casos medidos: `--radius-xs` 5, `--radius-tab` 7, `--radius-cell` 8.
- **Espaciado.** Escala de 4 px (`--space-1` 4 … `--space-20` 80), incluido `--space-5` 20.
- **Sombra.** Las tarjetas no llevan sombra en reposo. Solo se eleva lo que flota: diálogo, sheet, toast, popover y el pulgar de las pestañas (`--shadow-tab`).
- **Foco de input.** Borde de 1 px que cambia a `--green-primary`, sin anillo ni sombra, en 150 ms. El error rojo manda sobre el foco. Un campo de solo lectura no cambia.
- **Movimiento.** Tranquilo y con propósito, nunca rebota salvo el switch.
  - Duraciones `--t-press` 100, `--t-state` 150, `--t-enter` 250, `--t-sheet` 350, `--t-exit` 200, `--t-fill` 1400 (gráficas).
  - Curvas `--ease-std`, `--ease-enter`, `--ease-exit`, `--ease-ios`, `--ease-spring`, `--ease-fill`.
  - Siempre se respeta `prefers-reduced-motion`.
- **Hora.** 12 h con AM/PM ("5:00 PM").
- **Iconos.** Lucide (`lucide-react` 0.460.0), trazo 2, puntas redondas, color del texto. 16 px por defecto (12–22 según contexto). Un concepto = un ícono (catálogo en `02b-iconografia.md`). Nunca emoji como ícono.

## Secciones

- `01-reglas-unificadas.md`: reglas de uso y las decisiones D1–D15 (headers, segmentados, alto de controles, chips, formato de hora, color de datos, badges, variantes de formulario, drawer, bordes de casillas, badge de notificaciones, íconos).
- `02-fundamentos.md`: color, radios, espaciado, puntos de estado y los ~40 roles tipográficos.
- `02b-iconografia.md`: librería (Lucide), tamaños y separación por contexto, y el catálogo de un ícono por concepto.
- `03-layouts-y-navegacion.md`: los 9 layouts, breakpoints, headers H1–H7, stepper, sidebar, barras inferiores.
- `04-movimiento.md`: tokens, catálogo aprobado y la regla genérica para animar cualquier gráfica.
- `05-botones-y-acciones.md`: botón de flujo, botón de app, especiales (WhatsApp, destructivo), links y estados.
- `06-formularios.md`: campo A (persona) y B (configuración), controles, validación, chips, segmentados, radio/checkbox, switch, edición de perfil y formularios largos.
- `07-contenedores-listas-y-datos.md`: tarjetas, filas, badges, visualización de datos, calendarios, avatares y overlays.
- `08-estados-copy-y-accesibilidad.md`: vacío, carga, error, éxito, deshabilitado, tono y accesibilidad.
- `09-voz-y-vocabulario.md`: voz de marca y el vocabulario fijo de cada producto.
- `10-productos.md`: qué comparte cada producto y qué es propio.
- `11-myspot-clases-e-indice.md`: clases CSS obligatorias e índice de pantallas de MySpot.

## Componentes

En `components/`, todos con el namespace `FlowLiftDesignSystem_980fa8`. Cada uno tiene un `README.md` con su especificación y un `preview.html` con sus variantes.

- **Iconografía:** Icon (catálogo de Lucide).
- **Acciones:** Button, IconButton, TextLink.
- **Estados:** Badge, Tag.
- **Formularios:** Input, Select, Checkbox, Radio, Switch, Chip, OptionCard, CodeInput, PhoneInput, TimeButton.
- **Navegación:** Tabs, SegmentedControl, Stepper, Header, Sidebar, BottomBar.
- **Contenido:** Card, Avatar.
- **Listas y filas:** Row (con InfoRow, KeyValue, BulletList, SectionLabel), Table, Accordion, NotificationItem, CopyLink.
- **Datos y gráficas:** ProgressBar, SegmentedBar, Ring, BarChart, Stat.
- **Fechas y agenda:** DayStrip, MonthCalendar, WeekCalendar, AvailabilityTrack.
- **Overlays:** Dialog, Sheet, Drawer, SidePanel, Popover.
- **Retroalimentación:** Toast, Tooltip, Alert, EmptyState, Skeleton, StatusBlock.
- **MySpot · Patrones:** ClassCard, ScheduleSlot, NextClassCard, PackageCard, WaitlistCard, AttendanceToggle, WhatsAppPreview, QrPass, PagePreview.
- **MySpot · Pantallas:** cliente final móvil (elegir clase, Mis clases) e inicio del negocio en escritorio, armadas solo con componentes del sistema.

Las páginas de ejemplo anteriores, de la versión de Bookings, quedaron en `archived/`.
