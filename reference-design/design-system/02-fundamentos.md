# Fundamentos: color, radios, espaciado, íconos y tipografía

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 1. Tokens

### 1.1 Color

#### 1.1.1 Marca y neutros (de `tokens.css`)
| Token | Hex | Uso en el canvas |
|---|---|---|
| `--green-primary` | #2db35d | CTA primario, activo/seleccionado, links, check, toggle encendido, progreso positivo |
| `--green-primary-hover` | #27a052 | hover de CTA primario |
| `--green-mid` | #5ec987 | inicio del degradado de avatar |
| `--green-light` | #a8e6c0 | (reservado) |
| `--green-pale` = `--surface-brand-subtle` | #e8f8ee | fondo de seleccionado, nav activo, notificación no leída, chips opcionales activos, tarjeta "próxima clase" |
| `--ink` = `--text-primary` | #1a1a1a | texto principal, marcas de datos de volumen (§11.1), chips del prototipo |
| `--grey-dark` = `--text-secondary` | #3d3d3d | texto de cuerpo, nav inactivo, chips inactivos |
| `--grey-mid` = `--text-tertiary` | #767676 | meta, ayudas, caps, íconos de apoyo, barras de ocupación secundarias |
| `--grey-light` = `--text-placeholder` | #c4c4c4 | placeholder, borde punteado de "lleno", switch apagado, deshabilitado |
| `--grey-pale` = `--surface-subtle` | #f5f5f5 | cajas informativas, contenedor de pestañas, caja de ícono, pista de barras, filas atenuadas |
| `--surface` = `--surface-page` | #fafafa | fondo de toda pantalla |
| `--white` = `--surface-card` | #ffffff | tarjetas, headers, barras inferiores, inputs |
| `--border-default` | #ebebeb | todos los bordes y divisores |
| `--border-input` | #e0e0e0 | borde de botón secundario del flujo familia (DS Button) |
| `--border-subtle` | #f0f0f0 | divisor de celdas del calendario |

#### 1.1.2 Semánticos
| Token | Hex | Uso |
|---|---|---|
| `--red` | #e05050 | texto de error, estado "Pago pendiente/Fallido/Ausente", acciones destructivas de texto, badge de notificación, borde de input con error, palabra itálica de títulos negativos |
| `--red-pale` | #fff0f0 | fondo de ícono rojo, tag "Pago pendiente" |
| `--red-dark` | #7a1515 | (texto de badge error) |
| Rojo fuerte | **#B3261E** | botón destructivo relleno ("Sí, cancelar clase"), texto "Cerrar sesión" en configuración familia, "Cancelar esta clase", "Dar de baja al alumno" |
| `--yellow` | #f0ad00 | borde de alerta amarilla |
| `--yellow-pale` | #fff8e6 | fondo alerta amarilla, badge "Queda 1 lugar" |
| `--yellow-dark` | #7a5500 | texto de badge ámbar |
| Ámbar punto | **#B36B00** | punto de estado "pendiente/por vencer/casi lleno", barra casi llena, marca de día festivo |
| Ámbar texto | **#8A5300** | texto de estado ámbar (12–14px) |
| Ámbar fondo tag | **#FFF4E5** | tag "Le quedan 2 clases" |
| `--badge-success-fg` | #1a6638 | texto de badge de cupo verde ("Quedan 4 lugares") |
| `--blue` | #3b82f6 | no se usa |

#### 1.1.3 Overlays y sombras
| Nombre | Valor | Uso |
|---|---|---|
| Scrim hoja / drawer | `rgba(20,20,19,0.28)` | detrás de drawer y bottom sheet |
| Scrim panel lateral escritorio | `rgba(20,20,19,0.32)` | detrás del panel de notificaciones |
| `--shadow-elevated` | `0 8px 28px rgba(26,26,26,0.12)` | bottom sheet, drawer, panel lateral, popover de fechas, logo flotante |
| Sombra de pestaña activa | `0 1px 2px rgba(0,0,0,0.06)` | opción activa de Pestañas (§7.5) |
| Sombra knob switch | `0 1px 3px rgba(0,0,0,0.12)` [propuesta: el canvas no la pone] | |
| Anillo de badge | `border: 2px solid #fff` | badge rojo sobre campana |
| `--shadow-brand-hover` | `0 4px 16px rgba(45,179,93,0.3)` | hover de CTA primario (§5) |
| Tarjetas | **sin sombra** (solo borde) | |

#### 1.1.4 Degradados y patrones
| Nombre | Valor |
|---|---|
| Avatar | `linear-gradient(135deg, #5ec987, #2db35d)` |
| Banner por defecto del negocio | `linear-gradient(135deg, #163a2b 0%, #2db35d 100%)` (catálogo) |
| Banner placeholder (marca) | `linear-gradient(135deg, #cfe9d9, #eef6f0)` |
| Rayado "cerrado" (calendario) | `repeating-linear-gradient(135deg, #f5f5f5 0 5px, #fafafa 5px 10px)` |
| Rayado "cerrado" (día del date picker) | `repeating-linear-gradient(135deg, #f5f5f5 0 3px, #fff 3px 6px)` |
| Rayado "cerrado" (línea de tiempo) | `repeating-linear-gradient(135deg, #f5f5f5 0 3px, #ebebeb 3px 4px)` |
| Fondo vista previa WhatsApp | `#e9f5ec` (burbuja blanca) |
| Link dentro de vista previa WhatsApp | `#1f7a44` |

#### 1.1.5 Hex permitidos fuera de variables
Solo: #B3261E, #B36B00, #8A5300, #5C4400 (texto de alerta amarilla), #FFF4E5, #25D366 (botón WhatsApp de 18c), #e9f5ec, #1f7a44, #111 (fondo de pantallas oscuras), los de §1.1.4, los colores oficiales de logos (Google, Microsoft, Apple, VISA #1a1f71) y blanco `#fff` para texto sobre verde/rojo. **[decisión]** Crear variables para ellos en `ds-components.css`: `--red-strong:#B3261E; --amber-dot:#B36B00; --amber-text:#8A5300; --amber-bg:#FFF4E5`.

### 1.2 Radios
| Token | Valor | Dónde |
|---|---|---|
| `--radius-sm` | 6px | botón DS pequeño (h31), caja de ícono del drawer/menú (30), evento del calendario, caja de ícono de métrica móvil |
| — | 4–5px | checkbox (4 en precios, 5 en el resto) |
| — | 7px (`calc(var(--radius) - 3px)`) | opción interna de Pestañas |
| — | 8px | celda de día del date picker |
| `--radius` | 10px | botones, inputs, selects, navbtn, cajas de ícono 34–36, opciones de rejilla, cajas grises internas, nav item del sidebar |
| `--radius-lg` | 16px | tarjetas, tarjetas seleccionables, caja punteada, popover, bottom sheet (esquinas superiores), cajas grises grandes |
| — | 20px 20px 0 0 | sheet inferior de escaneo/quiosco (14b, 14c) |
| `--radius-full` | 999px | chips, pills, badges, segmentado pill, switch, barras |
| — | 50% | avatares, puntos, radios, círculos de paso, día seleccionado |

### 1.3 Espaciado (valores reales usados)
| Valor | Uso |
|---|---|
| 2–3 | separación título/subtítulo dentro de una fila; padding de contenedor de segmentado (3) |
| 4 | gap ícono pequeño |
| 5–6 | gap punto–texto, gap chip-scroll (6) |
| 8 | gap de chips, gap entre tarjetas de métricas móvil, label→input (6–8) |
| 10 | gap entre tarjetas de lista (`.class-card + .class-card`), gap entre opciones |
| 12 | gap interno de fila (`.row`), gap de rejilla de métricas escritorio |
| 14–16 | padding de tarjetas, gap entre columnas de rejillas escritorio (16) |
| 18–24 | margen superior de títulos de sección (cap: 22 arriba / 8 abajo) |
| 20 | padding lateral de pantalla móvil |
| 24 / 32 | padding del contenido escritorio (24 arriba-abajo, 32 lados) |
| 28 | padding superior de la cuenta familia escritorio |
| 110 | padding inferior del contenido cuando hay barra inferior fija (escritorio familia) |

### 1.4 Íconos
> Librería, catálogo y tamaños por contexto: ver `02b-iconografia.md` (D13, D14). Las medidas de esta sección siguen vigentes.
- Estilo lineal, `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"` (1,154 de 1,300 íconos), `stroke-linecap/linejoin="round"`. Excepción: check de confirmación grande 2.6–3.5.
- **Tamaños:** 16 (por defecto: botones, chevrons, campana, acciones), 14 (filas de información con texto 13), 13 (ícono junto a caps de sección), 15 (chevrons de navegador), 20 (filas de navegación de configuración y drawer), 18 (íconos dentro de cajas 34–36), 12 (meta pequeña), 22 (hamburguesa), 28–34 (ícono central de pantallas de error), 120 (marco QR).
- **Color:** hereda del texto; íconos de apoyo `--text-tertiary`; chevron de fila `--text-tertiary`; íconos activos `--green-primary`.
- **Chevron de fila:** 16, tertiary, a la derecha, siempre en filas que navegan. **Ícono externo** (↗ cuadrado con flecha) 14 tertiary para links que abren fuera (Stripe, WhatsApp).
- **Emoji:** solo 👋 en saludos y 👍/👎 en "¿Fue fácil…?". Nunca como ícono de interfaz.

### 1.5 Puntos de estado (dot)
| Tamaño | Uso |
|---|---|
| 4 | indicador bajo día con clase (tira de semana) |
| 5 | indicador bajo día en selector de fecha familia; viñeta de lista |
| 6 | punto de estado `.st` y de badge |
| 7 | punto de notificación no leída; punto de caps con color (13d) |
| 8 | punto en botón "Avisar/Recordar" (verde WhatsApp) |

---

## 2. Tipografía

**Familias:** `--font-sans` = 'DM Sans' (400/500/600/700) para todo; `--font-display` = 'DM Serif Display' 400 (normal e *itálica*) solo para los roles Serif. Cargar DM Serif Display con itálica (`ital@0;1`).

**Line-height por defecto:** `normal` en textos de una línea (lo que usa el canvas). Para párrafos: 1.5 (13–14px) y 1.4 (12–12.5px). Títulos Serif: 1.25.

**Números:** clase `.num` → `font-variant-numeric: tabular-nums` en todo monto, hora, conteo y porcentaje.

### 2.1 Roles Serif (DM Serif Display 400)
| Rol | Tamaño | Dónde |
|---|---|---|
| `serif-kpi` | 34 (escritorio) / 36 (móvil) | monto principal: "$20,750" Cobrado, "$17,200" Renovación |
| `serif-hero` | 32 | título de pantalla familia escritorio ("Elige tu *clase*"), saludo cuenta familia escritorio ("Hola, *Karla* 👋"), "Mi membresía" escritorio, horas "2.5 h" |
| `serif-hero-detail` | 34 | título de detalle de clase escritorio ("Batería *Kids*") |
| `serif-title` | 27 | título de paso del flujo familia móvil y escritorio (01–10b) y de confirmaciones (08) |
| `serif-title-sm` | 26 | títulos de cuenta familia ("Eliminar tu *cuenta*", "¿Qué clase quieres *reservar*?"), nombre de clase en tarjeta "próxima clase" escritorio |
| `serif-title-xs` | 25 | errores staff (18b, 18c), 05b |
| `serif-24` | 24 | saludo dueño/maestro escritorio ("Hola, Ana 👋"), título de pago fallido, nombre en Mi pase, "Plan Escuela" escritorio, subtítulo de sección "¿Cómo quieres *tomarla*?" escritorio |
| `serif-page` | 22 | **título del header escritorio staff** (`.ttl`), código de membresía (letter-spacing 2px), título login staff |
| `serif-20` | 20 | nombre de escuela en inicio móvil staff, nombre del alumno (13b móvil), rango de semana (24c), título del panel de notificaciones |
| `serif-header` | 19 | **título del header simple móvil** (D1), saludo cuenta familia móvil ("Hola, *Karla* 👋") |
| `serif-brand` | 16 | nombre del negocio en la tarjeta "Tu negocio" del sidebar (2 líneas) |

**Palabra en itálica:** en títulos `serif-title`, `serif-hero`, `serif-title-sm` y saludos, una palabra o frase final va en *itálica* color `--green-primary` ("¿Cuándo *te acomoda*?", "Listo — tu clase está *confirmada*"). En pantallas negativas/destructivas va en `--red` ("Eliminar tu *cuenta*", "No pudimos cobrar tu *mensualidad*", "¿Cancelar *esta clase*?"). Títulos de header (`serif-header`, `serif-page`) **nunca** llevan itálica.

### 2.2 Roles Sans (DM Sans)
| Rol | Tamaño/peso | Color | Dónde (ejemplos reales) |
|---|---|---|---|
| `metric-xl` | 22/700 | primary | número de métrica escritorio ("6", "$2,130") |
| `amount-total` | 20/700 | green | "Total a pagar hoy $1,340.00" |
| `otp` | 20/600 | primary | dígitos del código de verificación |
| `metric` | 18/700 | primary | número de métrica móvil (`.snum`), nombre en identidad escritorio |
| `name-lg` | 17/700 | primary | nombre en tarjeta identidad maestro escritorio, título próxima clase maestro |
| `card-headline` | 16/700 | primary | "Martes y Jueves" (horario recurrente), "Total a pagar hoy" |
| `headline` | 15/700 | primary | **encabezado de tarjeta en escritorio (staff y familia)**, título de tarjeta-resumen ("Batería Kids"), precio de opción, total pagado, "2 de 8 clases tomadas" |
| `title-14b` | 14/700 | primary | título de tarjeta/opción ("Sesión suelta"), nombre de clase en lista, título de tarjeta de sección móvil |
| `title-14` | 14/600 | primary | preguntas ("¿Con qué maestro?"), nombre de escuela en header, título de header de dos líneas |
| `body-14` | 14/400 | secondary | descripción de clase (lh 1.5), textos explicativos largos |
| `row-label` | 14/400 | primary | etiqueta de fila de navegación ("Datos personales") |
| `btn-flow` | 14/500 | según botón | botón del flujo familia (DS Button md) |
| `row-title` | 13.5/700 | primary | título de fila de lista staff ("Diego Torres"); primera columna de tablas escritorio va 13.5/600 |
| `btn-app` | 13.5/600 | según botón | botón `.btn` staff, ítem de menú activo 13.5/700 green |
| `nav` | 13.5/400 | secondary | ítem de sidebar inactivo; celdas de tabla (`.tbl td`) primary |
| `body-13` | 13/400 | secondary | texto de apoyo en tarjetas, filas de info (`.info-row`) |
| `strong-13` | 13/600 | primary | fecha/hora destacada, encabezado de bloque |
| `sub-13` | 13/700 | primary | subtítulo de sub-sección ("Lo que vas a necesitar", "Tú llevas" escritorio, "Horario semanal") |
| `link` | 13/600 | green | link de acción ("+ Agregar horario", "Ver todos →", "Cambiar") |
| `chip` | 13/600 | secondary / blanco activo | chips |
| `meta-13` | 13/400 | tertiary | meta en headers y listas, "¿Ya tienes cuenta?" |
| `meta` | 12.5/400 | tertiary | meta de tarjeta ("6–9 años · 45 min · Principiante"), notas |
| `desc` | 12.5/400 | secondary | descripción corta (bio, texto de alerta) |
| `status` | 12.5/600 | color de estado | `.st` ("● Pago pendiente") |
| `label-b` | 12/600 | secondary | etiqueta de formulario B (§7.1) |
| `meta-12` | 12/400 | tertiary | detalle bajo título de fila, ayudas |
| `badge-cupo` | 12/600 | según tono | badges de cupo |
| `lang` | 12/500 | secondary | selector de idioma "ES" |
| `note` | 11.5/400 | tertiary | notas al pie de formularios y tarjetas, contadores "12 / 40" |
| `cap` | 11/600 UPPERCASE ls 1px | tertiary | títulos de sección (`.cap`/`.sec-title`/`.fcap`), eyebrow ("BATERÍA KIDS · 6–9 AÑOS" ls 1.5px) |
| `th` | 11/600 UPPERCASE ls .6px | tertiary | encabezados de tabla |
| `legend` | 11/400 | tertiary | leyendas, días cortos, "Hace 3 h" |
| `navsec` | 10.5/600 UPPERCASE ls 1px | tertiary | secciones del sidebar y drawer |
| `count` | 10.5/700 | primary (o blanco) | badges de conteo |
| `step-num` | 10/700 | blanco / tertiary | número del stepper |
| `tag-xs` | 9/700 UPPERCASE ls .4px | placeholder | "PRONTO" |
| Avatar | 0.36 × diámetro / 600 | blanco | iniciales (ver §12) |

**Reglas de peso:** 400 cuerpo; 500 botones del flujo familia y valores de input de hora; 600 todo lo clicable y etiquetas; 700 títulos de fila/tarjeta, montos, activo. 800 solo "VISA".

**Letter-spacing:** 0 en todo excepto caps (1px; 1.5px en eyebrow de paso y en "DISPONIBILIDAD — SEPTIEMBRE 2026"), `th` (.6px), código FL-0472 (2px), PIN (6px).

### 2.3 Formatos de texto
- **Separador de meta:** " · " (punto medio con espacios): "6–9 años · 45 min · Principiante".
- **Rangos:** guion largo sin espacios en edades "6–9 años"; con espacios en horas "5:00 PM – 5:45 PM" y fechas "12 – 18 oct".
- **Hora:** "5:00 PM" (D6). En columna: "5:00" 13/700 y "PM" 10.5 tertiary debajo, alineado a la derecha, ancho 44–52.
- **Fechas:** largo "jueves, 3 septiembre" / "Martes, 1 septiembre"; corto "Lun 2 nov", "15 oct", "1 oct 2026"; mes "Octubre 2026".
- **Dinero:** "$450.00" en precios del flujo familia y recibos; "$450" en listas staff; "$600.00/mes"; "$899 MXN / mes"; negativo "−$450".
- **Cupo:** "6/8" en barras compactas; "6 de 8" en listas; "5 de 6 alumnos"; "12 de 12 lugares · lleno"; "Quedan 4 lugares" / "Queda 1 lugar".
- **Conteos en caps:** "NUEVAS · 2", "PAGOS PENDIENTES · 2".
- **CTA de avance del flujo familia:** termina en " →" ("Continuar →", "Enviar código →"). CTAs de guardar no llevan flecha.
- **Links de navegación:** "Ver todos →", "Ver agenda →", "Administrar mi membresía →".
- **Opcional:** "(opcional)" en el mismo texto de la etiqueta; en títulos de tarjeta escritorio va 400 tertiary.
- **Pasos:** "Paso 1 de 2" 12 tertiary a la derecha del header.
