# MySpot: clases CSS obligatorias, índice de pantallas y checklist

> Específico de MySpot (Replit). Fase 3 lo convertirá en patrones; Bookings y Mi Tiendita tendrán su propio índice.

## 17. Clases CSS obligatorias (`ds-components.css`)
Cada una se define una vez con los valores de este documento y se usa en todas las pantallas:

`.card` `.card-head` `.card-body` · `.row` `.nav-row` `.action-row` `.info-row` `.kv-row` `.notif-row` `.drawer-row` · `.cap` (eyebrow/sección) `.navsec` · `.btn` `.btn.pri` `.btn.sec` `.btn.sec.danger` `.btn.pill` · `.dsbtn` (md/sm/lg × primary/secondary/ghost/destructive) · `.oauth-btn` `.cal-btn` `.add-block-btn` `.add-card` `.upload-btn` `.navbtn` `.bell` `.hx` · `.chip` `.chip.filter` `.chip.multi` `.chip.person` `.chip-scroll` · `.tabs` `.tab` · `.seg` · `.field` `.field-label.a` `.field-label.b` `.field-input.a` `.field-input.b` `.field-help` `.field-count` `.field-error` `.field-warn` `.field-ok` · `.sel` `.prefix` `.tbtn` `.code-box` `.pinbox` `.search` · `.radio` `.check` `.opt` `.opt-card` `.opt-grid` · `.sw` · `.badge-pill` (verde/ámbar/gris) `.lvl` `.st` `.tag` `.notif-badge` `.count` · `.avatar` (tamaños 16–56) `.avatar-stack` · `.bar` `.cap-track` `.seg-bar` `.donut` `.week-chart` `.htrack` `.day-strip` `.day-pill` `.month-cal` `.cal-row` `.cal-block` · `.sheet` `.drawer` `.side-panel` `.popover` `.scrim` · `.empty-day` `.info-box` `.alert-yellow` `.quote` · `.top` `.side` `.nav` `.ftop` `.fnav` `.stepper` `.bottom-bar` `.lang` · `.num`.

---

## 18. Índice: qué usa cada pantalla
(M = móvil, E = escritorio. Shell → piezas principales.)

| Pantalla | Shell | Piezas principales |
|---|---|---|
| 01-02 Catálogo M/E | L1 / L2 | banner, marca escuela, stepper, `serif-title`, buscador, chips filtro (E), opciones-tarjeta (M lista con check; E rejilla con radio y badge nivel neutro), B1 |
| 03 Detalle de clase M/E | L1 / L2 | H1, stepper, título con itálica, meta + badge nivel contorno, acordeón maestros (M) / tarjetas maestro (E), "Qué llevar" (listas viñeta/check; E 2 columnas), opciones de pago (tarjetas seleccionables, grupo paquetes), B1 |
| 04a Sesión suelta | L1 | eyebrow, selector de maestro, tira de días, leyenda, cap + zona horaria, tarjetas horario con badge cupo, B1 |
| 04b Paquete/mensualidad M/E | L1 / L2 | tarjetas horario recurrente, tarjeta llena con link a lista, nota info, B1 |
| 04c/04d Pregunta especial | L1 | pregunta 14/700, opción-tarjeta grande con radio, nota privacidad, B2 |
| 04e Reservar con paquete | L1 | banda de contexto con barra segmentada, selector de maestro, tira de días, horarios, B1 con "Usa 1 clase de tu paquete" |
| 05 Sin cupo | L1 | tarjeta "HORARIO SOLICITADO" tachada, alternativas con botón sm "Elegir", ghost "Cargar más horarios", caja lista de espera, link "Ver otro día" |
| 05b Reprogramar | L1 (H3 2 líneas) | tarjeta "TU LUGAR ACTUAL", secciones, seleccionable, tarjeta llena, nota, B2 |
| 06a WhatsApp M/E | L1 / L2 | selector pill WhatsApp/Correo, prefijo país + tel, email, divisor "o continúa con", OAuth, legal, B2 |
| 06b Verificación | L1 | código 6 cajas, reenviar temporizado, "Corregir número" |
| 06c Cuenta nueva | L1 | formulario A, fila nombre+edad, link "+ Agregar una nota (opcional)", checkbox legal |
| 06d Cuenta existente | L1 | saludo con itálica, tarjetas alumno seleccionables, tarjeta punteada "Agregar otro alumno" |
| 07 Confirmar M/E | L1 / L2 | tarjeta resumen, tarjeta facturación, total verde 20/700, consentimiento, CTA deshabilitado hasta marcar, nota Stripe |
| 08a–08d Confirmaciones | L3 | éxito, resumen, barra segmentada (08c, 08d), qué llevar, botones calendario, feedback, CTA |
| 09 Mis clases M/E | L4 (H2) / L5 | saludo, chips persona, tarjeta destacada, mensualidad con barra, paquete con barra segmentada y botón sm, historial, B6 (M) |
| 09b Elegir clase paquete | L1 (H3 2 líneas) | seleccionables, B2 |
| 09c Configuración | L4 | grupos `.nav-row`, nota, fila destructiva |
| 09d Mi pase | L4 | nombre con itálica, QR, código FL-0472, tarjeta con badge y barras |
| 09f Notificaciones | L4 | `.notif-row` nuevas/leídas, "Marcar todas" |
| 09g Pago fallido | L4 | bloque error, tarjeta "MEMBRESÍA AFECTADA", alerta amarilla, CTA lg con ícono externo, link de contacto |
| 09h Mi membresía M/E | L4 / L5 | tarjeta con badge (M pill, E texto), clave/valor, cap "ADMINISTRAR", `.action-row`, fila destructiva, nota |
| 09i Cambiar horario | L1 (H3) | tarjeta actual, seleccionables, tarjeta llena con botón sm, resumen clave/valor, B2 |
| 09j Pausar | L1 (H3) | caja informativa, rejilla de opciones 4, resumen clave/valor, check verde, B2 |
| 09k Datos personales | L4 | formulario de perfil A (§7.8), input con sufijo "Verificado", métodos de acceso, B2 |
| 09l Alumnos | L4 | contador + barra segmentada, acordeones con formulario A, tarjeta punteada |
| 09m Asistencia registrada | L3 | éxito, cap verde, tarjeta con barra segmentada, link "Avísale a la escuela" |
| 09n Eliminar cuenta M/E | L4 / L5 | bloque destructivo, aviso ámbar con `.btn.sec`, lista "Qué se borra" (×), "Qué se conserva", nota ámbar |
| 10 Cancelar/reprogramar | L4 (H3) | tarjeta próxima clase, CTA md, acción destructiva de texto, caja gris |
| 10b Confirmar cancelación | sheet | §13.1, chips multi, destructivo, acciones de texto |
| 11 Nueva clase M/E | L6 / L7 | formulario B largo (§7.9), segmentados, tarjetas de horario, error y advertencia, materiales, toggles, tabla (E) |
| 12 Precios M/E | L6 / L7 | filas de ciclo con switch, tarjeta expandida, tabla editable + panel (E), checkboxes, radios, días de la semana |
| 12b Inscripción M/E | L6 / L7 | tarjeta con switch en encabezado, sub-tarjeta descuentos, segmentados, selects compactos, chips multi, lista Sí/No |
| 13 Alumnos M/E | L6 / L7 | KPI "18", alerta navegable, buscador, chips filtro, lista/tabla con `.st`, B2 / botón en header |
| 13b Perfil alumno M/E | L6 / L7 | identidad + Llamar/WhatsApp, secciones, clave/valor, links, badge, historial, acción destructiva |
| 13c Agregar alumno M/E | L6 / L7 | formulario B, prefijo país, validación positiva, selects, opción-tarjeta con descripción |
| 13d Requieren atención M/E | L6 / L7 | caps con punto de color, filas con monto, `.btn.pill` "Avisar"; E 3 columnas |
| 14a Lista de asistencia M/E | L6 / L7 | header 2 líneas + "Quiosco", CTA con ícono, progreso, barras de respuesta, pares Asistió/Ausente, tags, B6 + nota; E tabla |
| 14b Escanear QR / 14c Quiosco | L8 | visor, sheet registrados |
| 14d Config. quiosco M/E | L6 / L7 | intro con caja de ícono verde, PIN, filas con switch, select compacto, caja gris con candado |
| 15 Cupo y lista de espera M/E | L6 / L7 | selector pill mini, tarjeta expandida con badge ámbar, lista numerada, barras |
| 16 Cobros M/E | L6 / L7 | navegador de mes, KPI, desglose, filas de alerta y movimientos, próximos cobros |
| 16b Pagos pendientes M/E | L6 / L7 | tarjetas con estado rojo y par de botones `.act` / tabla con acciones |
| 16c Movimientos M/E | L6 / L7 | chips filtro, grupos por fecha / tabla con `.st`, montos tachado/negativo |
| 16d Renovación M/E | L6 / L7 | KPI, clave/valor, regla con "Cambiar", lista de avisos, lista/tabla de alumnos con pie "Ver los 24" |
| 16e Cobros con tarjeta M/E | L6 / L7 | tarjeta Stripe, checklist, tabla de comisiones, CTA lg |
| 17 Políticas M/E | L6 / L7 | filas navegables; E maestro-detalle con fila activa (borde izquierdo 3 verde + green-pale), radios, cajas grises |
| 18 Login staff | L9 | logo grande, tagline, OAuth, pie |
| 18b/18c Errores de acceso | L9 | bloque error staff, CTA lg (verde o WhatsApp), secundario lg |
| 19 Perfil maestro M/E | L6 / L7 | formulario de perfil A (§7.8), avatar con cámara, solo lectura, contadores, filas de cuenta |
| 20 Agenda maestro M/E | L6 (H2-maestro) / L7 | próxima clase con CTA, alerta, horas con barras y selector pill, pestañas Calendario/Lista, tira de semana / calendario semanal |
| 20b Agenda lista M/E | L6 / L7 | grupos por día, `.empty-day`, filas con "Tomar asistencia" (E) |
| 20c Menú maestro / 24b Menú dueño | drawer | §13.2 |
| 20d / 27 Notificaciones M/E | L6 / panel | §9.8 / §13.3 |
| 21 Maestros y espacios M/E | L6 / L7 | pestañas (M), filas con avatar 40, estados ámbar/gris, barras de horas; E tabla + tarjeta espacios |
| 21b Espacios | L6 | filas de espacio con barra |
| 21c Ficha maestro M/E | L6 / L7 | identidad, cita, checkboxes, horarios, invitaciones con punto, acción destructiva |
| 21d Solicitud días libres M/E | L6 / L7 | identidad + cita, bloques con select de suplente, B4 / botones en header |
| 22 Invitar maestro M/E | L6 / L7 | formulario A, checkboxes, "Paso 1 de 2" |
| 23 Disponibilidad M/E | L6 / L7 | editor semanal (§11.6, §7.2 hora, §7.7), días libres, `.add-block-btn`, CTA lg |
| 23b Pedir días libres M/E | L6 / L7 | chips filtro, fechas, date picker (§11.9), textarea, lista de clases afectadas |
| 24 Inicio dueño M/E | L6 (H2) / L7 | saludo, navegador de día + selector pill, métricas, ocupación (dona), agenda, gráfica semanal, lista de espera |
| 24c Agenda M/E | L6 / L7 | navegador de día, chips, filas con hora y barra / calendario semanal (§11.10) |
| 25 Horario del negocio M/E | L6 / L7 | editor semanal, cierres especiales, caja gris de diferencia |
| 25b Cierre especial M/E | L6 / L7 | chips festivos, fechas, date picker, pestañas Omitir/Reponer (→ selector pill, D2), switch |
| 26 Suscripción M/E | L6 / L7 | plan con badge, método de pago (VISA), recibos con badge y descarga, acción destructiva |
| 26b Cancelar suscripción M/E | L6 / L7 | lista de consecuencias, link Excel, chips multi, B5 / `.btn.sec.danger` en header |
| 26c Pago flowlift fallido M/E | L6 / L7 | alerta de cobro, línea de tiempo de etapas, CTA lg + secundario lg |
| 28 Logo y banner M/E | L6 / L7 | vista previa, upload, botones upload |
| 29 Comunicado M/E | L6 / L7 | selector pill ancho completo, chips filtro, textarea con contador, filas con switch, enviados; E vista previa WhatsApp + costo |

---

## 19. Checklist de auditoría por pantalla (copiar en cada reporte de Replit)
1. ¿El shell es el de §18 y sus medidas son las de §3?
2. ¿Header, stepper y barra inferior son exactamente H1–H7 / S1–S2 / B1–B6?
3. ¿Cada texto usa un rol de §2 (tamaño, peso, color, familia) y la palabra en itálica correcta?
4. ¿Todos los colores son variables o hex permitidos (§1.1.5)?
5. ¿Botones: familia correcta (DS de flujo vs `.btn`), tamaño y variante de §6?
6. ¿Formularios: variante A o B correcta (§7.1), orden etiqueta→control→ayuda, contador y validaciones de §7.3?
7. ¿Chips y segmentados solo de los tipos §7.4–7.5 y alto 32 en barras (D3)?
8. ¿Tarjetas: radio 16, borde 1px, sin sombra, encabezado §8.2 idéntico entre hermanas?
9. ¿Filas: padding, alto mínimo, divisores y chevron en las que navegan (§9)?
10. ¿Estados con punto + texto y colores de §10.3?
11. ¿Datos con la regla de color §11.1 y animación §5.4?
12. ¿Avatares con degradado e iniciales 0.36×?
13. ¿Overlays con medidas de §13 y scrim correcto?
14. ¿Nada del prototipo ("SOLO EN EL PROTOTIPO")?
15. ¿Textos desde i18n y formatos de §2.3 (hora 12 h, montos, fechas)?
