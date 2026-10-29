# Iconografía

> Parte del sistema de diseño global de flowlift. Aplica igual a MySpot, Bookings y Mi Tiendita.

## 1.4b Librería (D13)
- **Lucide**, paquete `lucide-react` con versión fija **0.460.0**. Es la librería que ya trae shadcn/ui y su estilo coincide con el del canvas.
- Prohibido mezclar otra librería, dibujar íconos a mano o usar emoji como ícono.
- En la app: `import { House } from 'lucide-react'` y `<House size={16} strokeWidth={2} />`. Mejor aún, un solo componente `Icon` que reciba el nombre, para que nadie cambie trazo ni tamaño por su cuenta.

## Reglas
| Regla | Valor |
|---|---|
| Trazo | **2** (el de Lucide por defecto; escala con el tamaño). Nunca `absoluteStrokeWidth`. Excepción: check de éxito grande, trazo 3 |
| Puntas y uniones | redondas; sin relleno |
| Color | `currentColor` (color del texto). Apoyo `text-tertiary`; activo `green-primary`; destructivo `red` |
| Posición | a la **izquierda** del texto, centrado vertical (`align-items:center`), `flex-shrink:0` |
| Accesibilidad | junto a texto: `aria-hidden`; ícono solo: dentro de un botón con `aria-label` |

## Tamaño y separación por contexto
| Contexto | Ícono | Separación con el texto |
|---|---|---|
| Botón de flujo md / lg | 16 | 8 |
| Botón de flujo sm, botón de app (38) | 16 | 6 |
| Botón pill del header ("Quiosco") | 13 | 5 |
| Ítem del sidebar | **16** | **10** |
| Fila del drawer (en caja de 30) | 16 | 12 |
| Fila de lista con caja (32) / acción (34) | 16 | 12 / 14 |
| Fila de configuración del cliente final (sin caja) | 20 | 14 |
| Fila de información | 14 | 10 |
| Pestañas Calendario / Lista, chips | 14 | 6 |
| Título de sección (cap) | 13 | 6 |
| Selector de idioma | 13 | 5 |
| Notas y leyendas | 12 | 5–6 |
| Métrica (caja de 36) | 18 | — |
| Back del header móvil / escritorio | 20 / 18 | — |
| Hamburguesa y campana sin caja | 22 (área táctil 44) | — |
| Campana con caja (36–38) | 16 | — |
| Chevron de fila navegable | 16 (14 en métrica móvil) | — |
| Ícono de "abre fuera" | 14 | — |
| Ícono central de error / vacío | 20–22 en círculo de 46–50 | — |

## Catálogo: un concepto = un ícono
El canvas usaba a veces dos íconos distintos para lo mismo (el menú de escritorio y el drawer móvil no coincidían) y el mismo reloj para "Cupo y lista de espera" y "Horario del negocio". Este catálogo fija uno solo por concepto (**D14**). La tarjeta del componente `Icon` lo muestra completo.

### Navegación y acciones
| Concepto | Lucide | Dónde y tamaño |
|---|---|---|
| Regresar | `ChevronLeft` | headers (20), link de regreso (14), navegador de fechas |
| Ir / avanzar | `ChevronRight` | filas navegables (16), navegador de fechas |
| Desplegar / contraer | `ChevronDown` | select (14), acordeón (16); ChevronUp al abrir |
| Cerrar | `X` | drawer, panel, sheet (16–18) |
| Quitar elemento | `X` | botón de fila .hx (14), lista "Qué se borra" (12) |
| Menú | `Menu` | header móvil (22) |
| Notificaciones | `Bell` | header (16 con caja · 22 sin caja) |
| Agregar | `Plus` | botones "+ Agregar …" (16), bloque punteado (14) |
| Buscar | `Search` | buscador (16) |
| Idioma | `Globe` | selector de idioma (13) |
| Cerrar sesión / salir | `LogOut` | pie del sidebar (16), drawer (16) |
| Abre fuera de la app | `SquareArrowOutUpRight` | Stripe, términos, privacidad (14) |
| Copiar | `Copy` | copiar horario (13), caja de link |
| Link | `Link` | caja de link (14), compartir |
| Descargar | `Download` | recibos, facturas (15) |
| Subir imagen | `ImageUp` | banner y logo (20) |
| Eliminar | `Trash2` | eliminar bloque o cuenta (15–22) |
| Listo / correcto | `Check` | verificado (12), listas de check (14), Asistió (14) |
| Vista calendario | `Calendar` | pestañas Calendario/Lista (14) |
| Vista lista | `List` | pestañas Calendario/Lista (14) |

### Menú del negocio (sidebar y drawer)
| Concepto | Lucide | Dónde y tamaño |
|---|---|---|
| Inicio | `House` | sidebar / drawer (16) |
| Agenda | `Calendar` | sidebar / drawer (16) |
| Ver mi página | `Eye` | sidebar, botón de header (16) |
| Alumnos / clientes | `Users` | sidebar / drawer (16) |
| Toma de asistencia | `SquareCheckBig` | sidebar / drawer (16) |
| Cobros | `CreditCard` | sidebar / drawer (16) |
| Cupo y lista de espera | `Hourglass` | sidebar / drawer (16) · D14 |
| Enviar comunicado | `MessageSquare` | sidebar / drawer, botones Recordar/Avisar (16) |
| Nueva clase / nuevo servicio | `Plus` | sidebar / drawer (16) |
| Precios | `Tag` | sidebar / drawer (16) |
| Inscripción | `FileText` | sidebar / drawer (16) |
| Maestros y espacios / equipo | `UserCheck` | sidebar / drawer (16) |
| Horario del negocio | `Clock` | sidebar / drawer (16) |
| Políticas del negocio | `ShieldCheck` | sidebar / drawer (16) |
| Cobros con tarjeta | `Landmark` | sidebar / drawer (16), tarjeta Stripe (18) |
| Modo quiosco | `Tablet` | sidebar / drawer, botón "Iniciar modo quiosco" (16) |
| Logo y banner | `Image` | sidebar / drawer (16) |
| Suscripción de flowlift | `Repeat` | sidebar / drawer (16) |
| Disponibilidad (maestro) | `CalendarCheck` | menú del maestro (16) |
| Mi perfil / datos personales | `UserRound` | menú del maestro, configuración del cliente final (16–20) |
| Ayuda | `CircleHelp` | menú (16–20) |

### Información en filas y tarjetas
| Concepto | Lucide | Dónde y tamaño |
|---|---|---|
| Fecha / día | `Calendar` | filas de información (14), campo de fecha (16) |
| Hora / duración | `Clock` | filas de información (14), nota de lista de espera (12) |
| Persona / responsable | `UserRound` | filas de información (14), "Cualquier disponible" (18) |
| Lugar / dirección | `MapPin` | filas de información (14) |
| Materiales / qué llevar | `ShoppingBag` | filas de información (14) |
| Información | `Info` | alerta amarilla (16), notas (14) |
| Advertencia | `TriangleAlert` | notificación de alerta (16), respuesta especial (14) |
| Error | `CircleAlert` | caja de error (16), pago fallido (22) |
| Pago seguro / bloqueado | `Lock` | nota de Stripe (12–14), salir del quiosco (12) |
| Paquete / membresía | `Ticket` | tarjeta de paquete, "Mi membresía" (14–20) |
| Cobro recurrente / mensualidad | `Repeat` | tarjeta de mensualidad (14) |
| Método de pago / tarjeta | `CreditCard` | configuración, pago fallido (16–22) |
| Recibo | `ReceiptText` | recibos, cobros pendientes (14–18) |
| Teléfono | `Phone` | botón "Llamar" (15) |
| Código QR | `QrCode` | Mi pase, quiosco (15–46) |
| Cámara / escanear | `Camera` | escanear QR (15), cambiar foto (11) |
| Pausar | `Pause` | "Pausar membresía" (16) |
| Cancelar membresía | `Ban` | fila de acción (16) |
| Cancelar suscripción | `CircleX` | fila destructiva (15) |
| Términos / documento | `FileText` | configuración (20) |
| Privacidad | `Shield` | configuración (20) |
| Usuario sin acceso | `UserX` | error de acceso (20–24) |
| Clase nueva asignada | `CalendarPlus` | notificación (16) |
| Cancelaciones | `CalendarX` | notificación (16) |

### Métricas del inicio
| Concepto | Lucide | Dónde y tamaño |
|---|---|---|
| Clases hoy | `CalendarCheck` | métrica (18) |
| Cobrado hoy | `TrendingUp` | métrica (18) |
| Cobros pendientes | `ReceiptText` | métrica (18) |
| En lista de espera | `Hourglass` | métrica (18) · D14 |
| Clases por día (gráfica) | `ChartColumn` | encabezado de sección (13) |

### Categorías de negocio (registro)
| Concepto | Lucide | Dónde y tamaño |
|---|---|---|
| Música | `Music` | selector de categoría (18–24) |
| Yoga | `PersonStanding` | selector de categoría (18) |
| Golf | `Flag` | selector de categoría (18) |
| Spinning | `Bike` | selector de categoría (18) |
| Baile | `Footprints` | selector de categoría (18) |
| Fútbol | `Volleyball` | selector de categoría (18) |

### Logos de marca
WhatsApp, Google, Microsoft, Apple, Outlook, Stripe y VISA **no** son íconos de Lucide: se usan sus SVG oficiales a todo color, al tamaño del contexto (16 en botones OAuth, 14 en botones de calendario).
