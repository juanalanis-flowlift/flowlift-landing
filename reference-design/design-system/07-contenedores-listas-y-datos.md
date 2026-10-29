# Tarjetas, listas, badges, datos, avatares y overlays

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 8. Tarjetas y contenedores

### 8.1 Tarjeta base (`.card`)
`background:var(--surface-card); border:1px solid var(--border-default); border-radius:16px;` **sin sombra**. Con listas o tablas dentro: `overflow:hidden` y padding 0 (las filas traen su padding).
| Contenido | Padding |
|---|---|
| Tarjeta de lista / tabla | 0 |
| Tarjeta de clase u opción (móvil) | 13 14 / 14 16 |
| Tarjeta de contenido (móvil) | 14 16 / 16 |
| Tarjeta resumen (confirmaciones) | 16–18 |
| Tarjeta de contenido escritorio familia | 18 (destacada 22) |
| Cuerpo de tarjeta escritorio staff | 16 |
- Separación entre tarjetas: 10 (lista móvil), 12 (bloques móviles), 16 (escritorio staff), 20 (escritorio familia).

### 8.2 Encabezado de tarjeta (escritorio y tarjetas de sección)
- Padding **14 16** (staff) / **14 18** (familia), borde inferior 1px `--border-default`, `display:flex; align-items:center; gap:10`.
- Título **15/700** primary a la izquierda (14/700 en tarjetas de sección móviles).
- A la derecha, **una** de estas (margin-left:auto):
  | Elemento | Ejemplo |
  |---|---|
  | Link de acción 12.5–13/600 verde | "Ver agenda →", "Ver todos →", "Cambiar", "Actualizar", "Cambiar de horario", "+ Agregar horario", "Cobrar" |
  | Meta 12.5 tertiary | "24 en total", "4 h por semana", "cobro automático", "3 de 4 este mes", "4 en total · 1 invitación pendiente" |
  | Estado texto con punto (§10.3) | "● Al corriente", "● Activa" |
  | Selector pill 32 (§7.5) | "Semana / Mes", "Automática / Manual" (con etiqueta 12.5 secondary "Lista de espera:" antes) |
  | Navegador pequeño | "‹ 12 – 18 oct ›" 12 tertiary con chevrons 12 |
  | Switch (§7.7) | con descripción 12 tertiary bajo el título |
  | Botones `.btn` | "Marcar a todos" + "Cerrar lista" (14a) |
- Con subtítulo: título + línea 12 tertiary debajo ("4 esperados · 2 de 4 marcados · 2 asistieron · 0 ausentes").
- Con punto de color antes del título (7, §10.6): columnas de 13d escritorio.
- **Tarjetas hermanas en la misma fila tienen el mismo encabezado** (mismo padding, tamaño de título y alto de control) y el mismo alto total (`align-items:stretch`).

### 8.3 Tarjetas especiales
| Tarjeta | Especificación | Dónde |
|---|---|---|
| **Seleccionable** | §7.6 | catálogo, opciones, horarios, alumnos |
| **Destacada (próxima clase)** | fondo `--surface-brand-subtle`, borde 1px `--green-primary`, padding 14 16 (móvil) / 22 (escritorio); cap "PRÓXIMA CLASE" + título 15/700 (móvil) o `serif-title-sm` 26 (escritorio) + filas de info + links o botones | 09 |
| **Resumen** | cap "RESUMEN" + título 15/700 + filas de info (§9.6) + divisor + filas de clave/valor + fila total (14/700 – 15/700) | 07, 08a–08d |
| **Facturación** | fondo `--surface-brand-subtle`, borde 1px `--border-default`, radio 16, padding 14: título 13/700 + periodo 12.5 + divisor + filas concepto/importe 13 / 13/700 + nota 11.5 tertiary | 07 |
| **Llena / no disponible** | fondo `--surface-subtle`, borde 1px **dashed** `--text-placeholder` (o sólido `--border-default` en 04b), radio 16, padding 14–16; título en secondary; badge/estado "Sin cupo"/"Lleno" 12/600 tertiary a la derecha; texto 12.5; botón sm secundario ancho completo o link a lista de espera | 04b, 05, 05b, 09i |
| **Lista de espera** | caja punteada (como "llena") padding 16: título 13.5/700, texto 12.5 secondary, nota con ícono reloj 12 tertiary, "Eres el #2 en la fila" 12/600 tertiary, botón md secundario ancho completo | 05 |
| **Agregar** (punteada) | §6.3 | 06d, 09l, 12 |
| **Caja informativa gris** | fondo `--surface-subtle`, sin borde, radio 10 (interna) o 16 (bloque), padding 10 12 / 12 14 / 14 16; título 12.5–13/700 + texto 12–12.5 secondary lh 1.5 | 10, 13b, 14d, 17, 25, 26b |
| **Cita** | caja gris radio 10, padding 12 14, texto 13.5 secondary lh 1.55, *itálica* en escritorio, entre comillas | 21c, 21d |
| **Alerta amarilla** | fondo `--yellow-pale`, borde 1px `--yellow`, radio 16, padding 14 16, gap 10: ícono info 16 #B36B00 + texto 12.5 #5C4400 lh 1.5 con fechas en 700 | 09g |
| **Aviso ámbar en tarjeta** | tarjeta blanca; punto 7 #B36B00 + título 13.5/700 #8A5300 + texto 12.5 secondary + botón `.btn.sec` | 09n |
| **Nota ámbar suelta** | punto 6 #B36B00 + texto 12 #8A5300 lh 1.45 | 09n, 11, 23 |
| **Alerta de cobro (staff)** | tarjeta blanca: punto 7 ámbar + título 14/700 + subtítulo 11.5/600 #8A5300 ("Día 3 desde el cobro fallido") + texto 13 secondary | 26c |
| **Métrica móvil** (`.stat-card`) | rejilla 2×2 gap 8; tarjeta padding 13, gap 11: caja de ícono 36 radio 6 `--surface-subtle` (ícono 18) + número 18/700 lh 1.1 + etiqueta 11 tertiary lh 1.25 (2 líneas) + chevron 14 | 24 |
| **Métrica escritorio** | 4 columnas gap 12; tarjeta padding 16, gap 12: caja de ícono 36 radio 10 + número 22/700 + etiqueta 12 tertiary + chevron 16 | 24 |
| **KPI de dinero** | etiqueta 13 primary ("Cobrado", "Estimado a cobrar") + `serif-kpi` + barra (§11.2) + leyenda 12 tertiary izq./der. | 16, 16d |
| **Ocupación** (`.occ-card`) | padding 16, gap 16: dona 68 (§11.4) + título 13.5/700 + detalle 12 secondary + chevron | 24 |
| **Identidad** | avatar 40–46 + nombre 14–17/700 + detalle 12–13 tertiary; acción a la derecha opcional | 13b, 19, 21c, 21d |
| **Stripe / cuenta externa** | caja de ícono circular 40 `--surface-subtle` (ícono banco 18) + título 13.5/700 + estado "● Sin conectar" 12/600 secondary con punto gris | 16e |
| **Vista previa WhatsApp** | fondo #e9f5ec radio 16 padding 18; burbuja blanca radio 10 padding 10 12 sombra `0 1px 1px rgba(0,0,0,.08)` ancho 340: escuela 13/700, línea 11.5 tertiary, mensaje 13.5 lh 1.5, links #1f7a44, pie 11 tertiary, hora 11 tertiary a la derecha | 29 |
| **Vista previa de página** | marco con borde y radio 16; banner 88 con degradado; logo 56 radio 16 borde 3 blanco sombra `0 1px 3px rgba(0,0,0,.12)` superpuesto 22 abajo; nombre Serif 15–20 + url 11 tertiary | 28 |
| **Upload** | tarjeta padding 14; área de imagen alto 80–96 radio 10 con degradado placeholder e ícono imagen 18; botones §6.3; ayuda 11 tertiary | 28 |
| **Caja de link** | fondo `--surface-subtle`, borde 1px, radio 10, padding 10 12, gap 8: ícono link 14 + url 12.5 + "Ver" 12/700 + "Copiar" verde 12/700 | 24 |
| **Banda superior de contexto** | ancho completo bajo el header, fondo `--surface-brand-subtle`, borde inferior, padding 12 20: texto 13/700 + derecha 12 secondary + barra segmentada | 04e |

### 8.4 Bloques de pantalla centrados (éxito, error, destructivo)
| Bloque | Especificación |
|---|---|
| **Éxito** | círculo 56 `--green-primary` + check blanco 28 stroke 3; o 60 en 09m; centrado; margen inferior 16 |
| **Error / pago fallido** | círculo 50 `--red-pale` + ícono rojo 22 (tarjeta) |
| **Destructivo** | círculo 50 `--red-pale` + basura roja 22 |
| **Error staff** | círculo 46 `--surface-subtle` + ícono 20 primary (usuario-x, reloj), alineado a la izquierda |
| Debajo | título `serif-title` (centrado) o `serif-title-xs` (izquierda); texto 13 secondary/tertiary lh 1.55, cifras en 700 |

---

## 9. Listas y filas

### 9.1 Fila base (`.row`)
```css
.row{display:flex;align-items:center;gap:12px;padding:12px 16px;min-height:52px;box-sizing:border-box}
.row + .row{border-top:1px solid var(--border-default)}
```
- Móvil staff: padding 12 14; alturas mínimas 52 (simple), 56 (con 2 líneas), 60 (con ícono 32), 64 (con avatar 40).
- Estructura: [líder opcional] → bloque de texto (flex 1; título + detalle) → [valor/estado] → [chevron 16 tertiary si navega].
- Título: 13.5/700 (staff) o 14/700 (familia); detalle: 12 tertiary (margen superior 2).
- Valor derecho: monto 13.5–14/700 tabular; estado §10.3; meta 12 tertiary; botón.
- Hover / presionado: §5.3 #10 (verde pálido).

### 9.2 Líderes de fila
| Líder | Medida |
|---|---|
| Avatar | 32 (listas), 40 (maestros), 26 (tablas escritorio) |
| Caja de ícono | 32 radio 10 `--surface-subtle` ícono 16; tono rojo `--red-pale` + ícono `--red` |
| Columna de hora | ancho 44–52, alineada a la derecha: "4:00" 13/700 + "PM" 10.5 tertiary |
| Checkbox | 20 |
| Punto de estado | 6–7 |
| Número de orden | "1." en el mismo texto del título 12.5/700 |

### 9.3 Filas de navegación (`.nav-row`) — configuración familia y staff
- Padding 14 16 (13 14 en tarjetas de perfil maestro), gap 14 (12), alto 48–51.
- Ícono 20 tertiary sin caja (familia, 09c) **o** caja de ícono 30 radio 6 `--surface-subtle` con ícono 16 (staff, 19).
- Texto 14/400 primary; valor derecho 13 tertiary ("2 de 4"); chevron 16 tertiary o ícono externo 14 si abre fuera.
- Nota bajo el grupo: 11.5 tertiary, margen 8 4 0.

### 9.4 Fila destructiva
- Tarjeta separada (margen superior 16) con una fila: ícono 20 rojo (o caja 30/34 `--red-pale` con ícono rojo) + texto 14/600 `--red-strong` (familia) / `--red` (staff y escritorio). "Cerrar sesión", "Cancelar membresía" (con subtítulo 12 tertiary), "Cancelar suscripción".

### 9.5 Fila de acción (`.action-row`)
- Padding 14 16, gap 14, alto 62: caja de ícono 34 radio 10 `--surface-subtle` (ícono 16) + título 14/700 + subtítulo 12 tertiary lh 1.35 + chevron 16 / ícono externo 14. (09h "Cambiar de horario", "Pausar membresía", "Método de pago y recibos".)

### 9.6 Fila de información (`.info-row`)
- `display:flex; gap:10px; padding:6px 0; font-size:13px; color:var(--text-secondary)`; ícono 14 tertiary (calendario, reloj, persona, pin, bolsa, triángulo verde para "Childcare"); con mini avatar 16 en lugar de ícono para el maestro. Valor resaltado en 700 primary ("Childcare: **Sí**").

### 9.7 Filas de clave / valor
- `display:flex; justify-content:space-between; padding:6–8px 0; font-size:13px`; clave secondary 400, valor primary 700 tabular.
- En tarjeta de lista (16d, 13b escritorio): como `.row` alto 44–46, divisores.
- Fila total: 14/700 + 15/700 (o 20/700 verde para "Total a pagar hoy").
- Nota bajo una fila: 11 tertiary.

### 9.8 Notificaciones (`.notif-row`)
- Padding 14 20, gap 12, divisor entre filas, posición relativa.
- **No leída:** fondo `--surface-brand-subtle` (móvil) / blanco (panel escritorio); punto verde 7 en left 7, top 19; título 13.5/700 primary lh 1.35.
- **Leída:** fondo blanco; título 13.5/600 secondary (escritorio: opacity .75 en el bloque).
- Caja de ícono 36 radio 10: tono rojo (`--red-pale`, ícono `--red`), verde (blanco con borde 1px `--green-primary`, ícono verde), alerta (blanco con borde 1px `--red`, ícono triángulo rojo), neutro (`--surface-subtle`, ícono primary). Panel escritorio: sin caja de ícono.
- Cuerpo 12.5 secondary lh 1.4 (margen 2); tiempo 11 tertiary (margen 6).
- Grupos con cap "NUEVAS · 2" / "LEÍDAS" (padding 20 20 4).

### 9.9 Listas de texto
| Lista | Estilo |
|---|---|
| Viñeta | punto 5 primary + texto 13 secondary, padding 3 0, gap 8 ("Tú llevas") |
| Check | ✓ 14 verde + texto 13 secondary ("La escuela pone", "Qué pasa si cancelas") |
| Check gris | ✓ 14 tertiary + título 13 + subtítulo 12 tertiary, divisores ("Lo que vas a necesitar", 16e) |
| Cruz | × 12 tertiary + texto 13.5 primary, divisores, padding 8 0 ("Qué se borra") |
| Círculo vacío | círculo 10 borde 1.5 tertiary + texto 13 + fecha 12 tertiary a la derecha ("Avisos a las familias") |
| Viñeta gris (escritorio) | punto 5 `--text-tertiary` + 13 primary (26b) |
| Regla (`.rule`) | gap 8, 12.5 secondary lh 1.5, padding 3–4 0, **negritas** en primary |

### 9.10 Listas agrupadas por fecha
- Cap de grupo ("HOY", "AYER", "15 OCT") margen 18 0 8; cada grupo en su propia tarjeta (16c móvil).
- Agenda maestro (20b): encabezado de día 14/700 + "· martes 22 sep" 12/500 tertiary (baseline), margen 20 0 8; tarjetas de clase; día vacío = caja punteada (§14.1).
- Agenda escritorio (20b): una tarjeta, grupos separados por divisor; encabezado del día 13/700 (hoy en verde) + fecha 12 tertiary; filas: hora 13/700 col 75 + título 13.5/700 + detalle 12 tertiary + `.btn.sec` "Tomar asistencia".

### 9.11 Línea de tiempo de etapas (26c)
- Tarjeta con filas (padding 14 16, divisores): punto 9 a la izquierda (actual #B36B00; futuras `--border-default`), rango 11 tertiary ("Días 1 a 7"), título 13.5/700 (futuras en tertiary), texto 12 secondary. Etapa actual con fondo `--surface-subtle`.

### 9.12 Lista de espera numerada (15)
- Filas: "1. Renata Ibarra" 12.5/700 + "Esperando desde hace 2 días" 11 tertiary; derecha: badge "● Notificado" (verde, §10.1) o "En espera" 12 tertiary. Escritorio: tabla de 3 columnas.

---

## 10. Badges, estados y marcas

### 10.1 Badge pill con punto (cupo / estado)
`display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; height:22px` + punto 6 del color del texto.
| Tono | Fondo | Texto/punto | Textos |
|---|---|---|---|
| Verde | `--surface-brand-subtle` | `--badge-success-fg` #1a6638 (punto `--green-primary`) | "Quedan 4 lugares", "Activa", "Pagado", "Al corriente", "Notificado" |
| Ámbar | `--yellow-pale` | `--yellow-dark` (punto #B36B00) | "Queda 1 lugar", "3 en espera" |
| Gris | `--surface-subtle` | `--text-tertiary` (sin punto) | "Sin cupo", "Eres el #2 en la fila", "Lleno" |

### 10.2 Badge de nivel
- **Contorno verde** (detalle de clase): padding 2 9, borde 1px `--green-primary`, fondo `--surface-brand-subtle`, 11/700 verde, alto 18, en línea con la meta.
- **Neutro** (tarjetas de catálogo escritorio, filas): padding 3 10, fondo `--surface-subtle`, 11.5/700 secondary, alto 18.

### 10.3 Estado de texto (`.st`)
`display:inline-flex; align-items:center; gap:6px; font-size:12.5px; font-weight:600; white-space:nowrap` + punto 6.
| Estado | Color |
|---|---|
| Pago pendiente, Fallido, Ausente, Tarjeta rechazada, Sin cobrar | `--red` |
| Por vencer, Pendiente de aprobación, 1 clase fuera de su horario, Pidió días libres, Invitación vencida, Le quedan N clases, Lleno · 3 en espera | #8A5300 (punto #B36B00) |
| En pausa, Efectivo, Reembolsado, Invitación enviada, Sin conectar | `--text-tertiary` / secondary (punto tertiary) |
| Cobrado, Activa, Asistió, Aprobado, Aceptada, Al corriente, En curso, Llegó por QR | `--green-primary` |
- Variante 12/600 (`.st` pequeño) en tarjetas móviles; sin punto cuando va en la columna derecha de una fila con título ("Lleno" en 09i).

### 10.4 Tag pequeño (`.tag`)
`padding:2px 8px; border-radius:999px; font-size:11px; font-weight:600; height:16px; gap:4px`.
- Ámbar: fondo #FFF4E5, texto #8A5300 ("Le quedan 2 clases"). Rojo: fondo `--red-pale`, texto `--red` ("Pago pendiente"). En línea después de "Sin marcar" (14a).

### 10.5 Badge de notificación (rojo)
- **Siempre circular (D12).** Sobre botón de ícono con caja (escritorio y barras): círculo 20×20 (incluye aro blanco de 2px), `border-radius:50%`, `top:-6px; right:-6px`, número 10/700 blanco, fondo `--red`, `box-sizing:border-box`, sin padding. Sobre ícono sin caja (header móvil, área de toque 44): círculo 18×18, `top:5px; right:5px` dentro del área de toque (nunca se corta), número 9.5/700.
- Máximo dos caracteres: de 10 en adelante se muestra **"9+"**. El número exacto va en el `aria-label` del botón ("Notificaciones, 12 nuevas").

### 10.6 Badge de conteo (gris)
- Sidebar/drawer/espera: fondo `--surface-subtle`, 10.5–11/700 primary, padding 1 7 (sidebar), 2 8 (drawer), 3 10 (`.wait-badge`).
- Punto de color antes de cap o título de columna: 6–7 (rojo / ámbar / gris) (13d).

### 10.7 Etiquetas varias
| Etiqueta | Estilo |
|---|---|
| "PRONTO" | 9/700 UPPERCASE ls .4 `--text-placeholder` a la derecha del ítem; ítem deshabilitado en tertiary e ícono a opacity .55 |
| "Vista previa" | 11 tertiary a la derecha del ítem del drawer |
| "Verificado" | ✓ 12 + 12/600 verde dentro del input |
| Marca VISA | caja 32×22 borde 1px radio 4, "VISA" 10/800 #1a1f71 |
| "Editando" / "Editar" | 13/700 verde (editando) / 13/600 verde |

---

## 11. Datos y visualización

### 11.1 Regla de color de datos (D7)
| Significado | Color |
|---|---|
| Dinero cobrado, progreso del alumno/paquete, horario disponible, respuesta "Sí" | `--green-primary` |
| Volumen u ocupación (barras de agenda, ocupación de espacios y maestros, desglose, día actual en gráfica semanal, dona de ocupación) | `--ink` (al 75% `opacity:.75` en barras de capacidad) o `--text-tertiary` en barras pequeñas (`.bar i`) |
| Casi lleno / casi sin horas | ámbar #B36B00 |
| Resto / pista | `--surface-subtle` (`--grey-pale`) |
| Respuesta "No" | `--text-tertiary` |
| Sin respuesta | `--border-default` |
- La animación de todas las marcas sigue §5.4.

### 11.2 Barras
| Barra | Medidas |
|---|---|
| **Barra pequeña** (`.bar`) | alto 4, radio full, pista `--grey-pale`, relleno `--text-tertiary` (o ink/ámbar) ; anchos fijos 40 (tabla maestros), 75 (agenda móvil), 100 (agenda escritorio), 116 (cupo escritorio), o 100% |
| **Barra de capacidad** (`.cap-track`) | alto 5, pista `--surface-subtle`, margen superior 9, relleno ink opacity .75 |
| **Barra de progreso** | alto 6 (mensualidad, Mi pase) u 8 (`.bar` grande), relleno `--green-primary` |
| **Barra de cobrado** | alto 6, verde, ancho completo de la tarjeta KPI |
| **Barra de desglose** | alto 3–4 ink bajo cada fila |
| **Barra de respuesta** | alto 4, verde/tertiary/gris según §11.1 |
| Etiqueta | a la derecha, 11.5–12 tertiary tabular ("6/8", "6 de 8", "12 de 35 h por semana"); con estado opcional "· En curso" 11–12/600 verde |

### 11.3 Barra segmentada (paquetes y límites)
- `display:flex; gap:4px`; segmentos `flex:1; height:8px; border-radius:2px` (6 en confirmación); usados `--green-primary`, disponibles `--surface-subtle`.
- Leyenda debajo 11 tertiary: "7 disponibles · Batería Kids y Piano Inicial" izquierda / "5 usadas" derecha.
- Usos: paquete 12 (04e, 08c, 08d, 09, 09d), mensualidad 8 (09m), límite de alumnos 4 (09l).

### 11.4 Dona / anillo de ocupación
- `.donut` 68×68 (móvil) / 72×72 (escritorio): `background:conic-gradient(var(--ink) 0 65%, var(--border-default) 65% 100%)`; hueco `.donut-hole` 52 (móvil) / 56 (escritorio) blanco con "65%" 15/700 (móvil) / 16/700 (escritorio).
- [Animación §5.4: en implementación usar SVG con `stroke-dashoffset`, trazo 8, `stroke-linecap:round`, mismo color.]

### 11.5 Gráfica semanal de barras (Clases por día)
- `.week-chart`: alto 130, flex, `align-items:flex-end`, gap 8, padding 16 14 12 (dentro de tarjeta, o como tarjeta propia en móvil).
- Barra `.week-bar`: ancho 100% máx. 22, radio 4 4 0 0, `--surface-subtle`; día actual `--ink`. Altura proporcional al número de clases.
- Etiqueta `.wlabel` 10 tertiary margen 6; actual 700 primary. Días "Lun Mar Mié Jue Vie Sáb Dom".
- Nota bajo la gráfica 11–12 tertiary ("El viernes es tu día con más carga (7 clases)…").

### 11.6 Línea de tiempo de disponibilidad (23, 25)
- `.htrack`: alto 10 (8 en móvil), radio 5, relativo.
- Fondo: rayado "cerrado" (§1.1.4) donde la escuela cierra; `--surface-subtle` (`.hlim`) donde está abierta.
- Rango disponible `.hseg`: verde, radio 5.
- Clase asignada `.htick`: 3×16, radio 2, `--ink`, `top:-3`, anillo `0 0 0 1.5px #fff`.
- Regla de horas (escritorio): "8 AM 10 AM 12 PM 2 PM 4 PM 6 PM 8 PM 10 PM" 10.5 tertiary arriba a la derecha; móvil: "8 AM ··· 10 PM".
- Leyenda: barra verde 12×6 "Tu horario"/"Horario", línea ink 2×10 "Clase asignada/programada", caja rayada "La escuela está cerrada" — 11 tertiary, gap 14.

### 11.7 Tira de días (selección de fecha familia, 04a/04e)
- 7 columnas (`.day-cell` gap 6): día corto 11 tertiary (el seleccionado 11/600 primary), número `.day-num` 36 círculo 14/600; seleccionado verde relleno con número blanco; sin clases en placeholder; punto 5 debajo: verde (cupo abierto), ámbar (quedan pocos), gris (no hay clase).
- Leyenda de puntos 11 tertiary en una línea. Cap "DISPONIBILIDAD — SEPTIEMBRE 2026" (ls 1.5). Zona horaria "CST · América/Monterrey" 11 tertiary a la derecha del cap de la fecha.

### 11.8 Tira de semana (staff, 20 móvil)
- 7 `.day-pill` flex 1, padding 9 0, radio 10, gap 4: nombre 10/600 UPPERCASE tertiary, número 26 círculo 14/700, punto 4 verde si hay clases; activo: fondo `--surface-brand-subtle`, nombre verde, número en círculo verde con texto blanco.

### 11.9 Calendario de mes (date picker, 23b/25b)
- Popover: fondo blanco, radio 16, `--shadow-elevated`, padding 14, ancho de la columna del formulario; instrucción 11.5 tertiary arriba.
- Dos meses lado a lado (escritorio) gap 24; título del mes 12.5/700 centrado; encabezados "L M M J V S D" 10.5/600 tertiary.
- Celdas alto 34 (ancho = 1/7 de la columna, ≈27–34), radio 8, 13 primary tabular; fines de semana tertiary; inicio y fin: verde relleno, 700 blanco; rango: `--surface-brand-subtle`; festivo: punto 4 #B36B00 debajo del número; cerrado: rayado (§1.1.4) y número tachado tertiary.
- Leyenda 10.5 tertiary (punto "Día festivo", caja rayada "Ya está cerrado", "Domingo: cerrado"); pie con borde superior: resumen 12.5/700 ("Lun 2 nov – Vie 6 nov · 5 días") + botón primario `.btn` alto 34 "Listo".

### 11.10 Calendario semanal (agenda dueño 24c escritorio, maestro 20 escritorio)
- Rejilla `.cal-row`: columna de horas 56 + 7 columnas `minmax(0,1fr)`; dentro de tarjeta.
- Encabezado de día: alto 43, padding 8 10, borde izquierdo 1px, nombre 12.5/700 + "6 clases" 11 tertiary; hoy: texto verde y columna con fondo `--surface-brand-subtle`; día cerrado: "Cerrado" y columna rayada.
- Filas de hora: etiqueta 10.5 tertiary arriba-derecha; borde `--border-subtle`; horas fuera del horario del negocio rayadas; horas sin clases compactas (alto 20) y con clases normales (alto 54).
- Evento `.cal-block`: blanco, borde 1px, **borde izquierdo 3px del color de la clase** (ink, tertiary, verde en maestro), radio 6, padding 4 6, lh 1.25; título 11.5/700, detalle 10.5 secondary, ocupación 10.5 tertiary; estado 10.5/600–700 ("En curso" verde, "Lleno · 3 en espera" ámbar, "Fuera de su horario" ámbar). Eventos simultáneos lado a lado con gap 4. Hover: `--shadow-elevated`.
- Leyenda debajo: marca de color por clase + "Cerrado (horario del negocio)" + "Horas sin clases: compactas" 11.5 tertiary; nota derecha.
- Vista semana del maestro (20 escritorio): 7 columnas sin horas; día de hoy en caja `--surface-brand-subtle` radio 10; eventos tarjeta borde izquierdo 3 verde (hora 11 tertiary, título 12.5/700, detalle 11 tertiary); días sin clase "—" placeholder.

### 11.11 Barras de respuesta (pregunta especial, 14a)
- Cap "PREGUNTA ESPECIAL · CHILDCARE" + "Solo tú lo ves" 10.5 placeholder; pregunta 13 (13.5/700 escritorio); por respuesta: etiqueta 12.5/700 + conteo 12.5/700 derecha, barra 4 (§11.1), nombres 12 tertiary debajo (escritorio); nota 11 placeholder.

### 11.12 QR
- Tarjeta blanca 160×160 radio 16 borde 1px con QR (celdas 10 `--text-primary`); visor de escaneo 180 con marco blanco 2px y esquinas verdes 3px.

---

## 12. Avatares
- Círculo, fondo `linear-gradient(135deg,#5ec987,#2db35d)`, iniciales blancas **600** con tamaño = **0.36 × diámetro**, 2 letras mayúsculas.
| Diámetro | Uso |
|---|---|
| 16 | mini avatar del maestro en filas de información y tarjetas de horario |
| 20 | marca de escuela en confirmaciones; maestros en cita |
| 26 | usuario en header escritorio familia; tablas escritorio |
| 28 | maestros en acordeón de detalle |
| 30–32 | pie del sidebar; filas de lista |
| 36 | marca de escuela en headers; drawer; selector de maestro |
| 40 | maestros (detalle escritorio, lista de maestros) |
| 44–46 | identidad (perfil, ficha de maestro, solicitud) |
| 52 | perfil maestro móvil (con badge de cámara) |
| 56 | ficha de maestro |
- **Pila:** avatares 28 superpuestos 8 px (cada uno desplazado 20 a la derecha del anterior) en la cabecera del acordeón de maestros (03).
- Con foto **[propuesta]**: `object-fit:cover`, mismo tamaño; si falla, iniciales.

---

## 13. Overlays

### 13.1 Bottom sheet
- Posición fija abajo, ancho completo, fondo blanco, radio **16 16 0 0** (20 en 14b/14c), `--shadow-elevated`, padding 10 20 24.
- Handle 36×4 radio 2 `--border-default` centrado, margen inferior 12.
- Contenido: cap (eyebrow) → título `serif-title` con itálica (roja si destruye) → meta 12.5 tertiary → caja gris "QUÉ PASA SI…" (fondo `--surface-page`, borde 1px, radio 16, padding 10 14) → campos → acciones apiladas (primario/destructivo ancho completo, luego acciones de texto centradas).
- Scrim `rgba(20,20,19,0.28)` sobre la pantalla anterior. Movimiento §5.3 #4.

### 13.2 Drawer de menú (móvil staff)
- Izquierda, ancho **300**, alto completo, blanco, `--shadow-elevated`; scrim §1.1.3.
- Cabecera (padding 20, borde inferior, gap 12): avatar 36 + nombre 14/700 + rol 11.5 tertiary truncado + × 18 a la derecha.
- Sección `.drawer-section`: 10.5/600 UPPERCASE ls 1px tertiary, padding 18 20 8.
- Ítem `.drawer-row`: padding 13 20, alto 56, gap 12: caja `.drawer-icon` 30 radio 6 `--surface-subtle` con ícono 16 + texto 14/400 primary; badge `.drawer-badge` a la derecha.
- Activo: fila con fondo `--surface-brand-subtle`, caja de ícono blanca, texto 14/700 verde e ícono verde.
- Deshabilitado ("PRONTO"): texto tertiary, ícono opacity .55, etiqueta §10.7.
- Pie: borde superior; "Cerrar sesión" con caja de ícono `--red-pale` e ícono/texto `--red` 14/600.

### 13.3 Panel lateral (escritorio: notificaciones)
- Derecha, ancho **420**, alto completo, blanco, `--shadow-elevated`; scrim `rgba(20,20,19,0.32)` sobre el contenido.
- Encabezado alto 60, padding 18, borde inferior, gap 10: título `serif-20` + "Marcar todas" 12/600 verde + × 16.
- Filas: padding 12 18, gap 10, divisor; ver §9.8.

### 13.4 Popover
- Fondo blanco, radio 16, `--shadow-elevated`, padding 14, se abre bajo el control que lo dispara con 8 de separación (date picker §11.9). Indicaciones con "Haz clic en el primer día y luego en el último…".
