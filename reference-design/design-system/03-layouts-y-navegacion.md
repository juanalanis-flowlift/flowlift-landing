# Layouts y navegación

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 3. Layouts (shells) — hay 9 y cada pantalla usa exactamente uno

### 3.1 L1 · Flujo familia móvil (01–07, 05b, 09b, 09i, 09j)
```
┌ Header familia (H1) 69 alto ┐   o Header simple (H3) en 05b/09b/09i/09j
├ Stepper (S1) 45 alto        ┤   solo pasos 01–07
│ Contenido: padding 24 20 8 20, fondo --surface-page, scroll
├ Barra inferior (B1/B2) 69   ┤   fija, blanca, borde superior 1px
```
- Ancho 390, contenido 350 útil.
- Orden del contenido: eyebrow `cap` (ls 1.5) → título `serif-title` 27 (con itálica) → subtítulo 13 tertiary (lh 1.5) → bloques.
- Separación título→primer bloque 16–20; entre bloques 16–22; entre tarjetas de lista 10.
- La barra inferior nunca tapa contenido: el contenido termina con padding inferior ≥ alto de barra.

### 3.2 L2 · Flujo familia escritorio (01-02, 03, 04b, 06a, 07 escritorio)
| Pieza | Medida |
|---|---|
| Header H5 | alto 64, blanco, borde inferior; contenido alineado a la **columna de 600** centrada (x 340–940 en 1280) |
| Stepper S2 | alto 52, blanco, borde inferior, grupo centrado en la página (gap 12) |
| Contenido | columna **600** centrada; padding 24 arriba, 110 abajo |
| Barra inferior B3 | alto 72 + borde superior; contenido alineado a la columna 600; gap 16; resumen a la izquierda, CTA a la derecha (o CTA de 50% de ancho alineado a la derecha cuando no hay resumen: 06a, 07) |
- Rejillas dentro de la columna: 2 columnas iguales, gap 12 (tarjetas de clase, opciones de pago, maestros).

### 3.3 L3 · Confirmación (08a–08d, 09m)
- Sin header, sin stepper. Bloque superior centrado, padding 36 24: círculo verde 56 con check blanco 28 (stroke 3) → marca de la escuela (avatar 20 + nombre 14/700) → título `serif-title` centrado (2 líneas) → subtítulo 12.5 tertiary centrado.
- Tarjetas en columna (padding lateral 20, gap 12). Bloques centrados "Agregar a mi calendario" y "¿Fue fácil…?". CTA ancho completo al final del flujo (no fijo), padding 0 20 28.

### 3.4 L4 · Cuenta familia móvil (09, 09c–09n, 10)
- Header H2 (inicio "Mis clases") o H3 (subpantallas).
- Contenido padding 6 20 (inicio) o 24 20 (subpantallas); secciones con `cap` + ícono 13.
- Barra inferior opcional (B2 o B5).

### 3.5 L5 · Cuenta familia escritorio (09, 09h, 09n escritorio)
| Pieza | Medida |
|---|---|
| Header H6 | alto 64, contenido en contenedor **960** centrado: marca escuela izquierda; derecha: botón campana 36 + avatar 26 + nombre 13.5/600 + selector idioma |
| Pestañas T1 | barra blanca con borde inferior, pestañas centradas "Mis clases" / "Mi cuenta" alto 51 (§4.6) |
| Contenido | contenedor 960 centrado, padding 28 0 32; subpantallas angostas usan columna 600 centrada |
| Rejilla de inicio | 2 columnas **540 + 400, gap 20** (columna izquierda y derecha apilan tarjetas con gap 20) |
| Tarjetas | padding 18 (tarjeta normal `.fcard`), 22 (tarjeta destacada "Próxima clase"); encabezado de tarjeta con divisor: padding 14 18, 15/700 |
- Link de regreso arriba del título: "‹ Mis clases" 12.5 secondary con chevron 14.

### 3.6 L6 · Staff móvil (dueño y maestro: 11–29 móvil)
- Header H2 (pantallas raíz: 20, 20b, 24) con hamburguesa y campana; H3/H4 en subpantallas.
- Contenido padding 16–24 20; secciones `cap`; tarjetas.
- Barra inferior B2 (CTA primario ancho completo) en formularios; B4 (dos botones) en decisiones.
- Menú = Drawer (§13.2).

### 3.7 L7 · Staff escritorio (dueño y maestro)
| Pieza | Medida |
|---|---|
| Sidebar | **232** ancho, blanco, borde derecho 1px, columna flex alto completo |
| Header H7 (`.top`) | alto **64**, padding 0 32, gap 16, blanco, borde inferior |
| Contenido | padding **24 32**; ancho útil en 1280 = 984 |
| Rejillas | 2 columnas: ≈ 66/34 (inicio: 645 + 323, gap 16), ≈ 62/38 (precios, maestros), 50/50 (perfil, quiosco, alumno), 40/60 (renovación), 3 columnas iguales (requieren atención, fila superior de cobros), 4 columnas (métricas, gap 12) |
| Gap entre tarjetas | 16 vertical y horizontal |
| Texto introductorio | 13 secondary, máx. 640 de ancho, margen inferior 12–16 |

### 3.8 L8 · Pantalla oscura (14b escanear QR, 14c quiosco)
- Fondo `#111` (casi negro) a pantalla completa; texto blanco; secundarios `rgba(255,255,255,.8)`, `.55`, `.4`.
- Header oscuro: back blanco + título 14/700 blanco (14b) o título + "Siguiente: …" 11.5 a .55 + botón "Salir" (pill, borde `rgba(255,255,255,.3)`, texto 11 a .7, ícono candado 12) (14c).
- Bottom sheet blanco radio 20 20 0 0, padding 18 20 20, fondo `--surface-page`.

### 3.9 L9 · Acceso staff (18 login, 18b, 18c)
- Sin header de app. 18: contenido centrado vertical; 18b/18c: header con solo logo flowlift (imagen 122×26) padding 20 24; contenido padding 0 28, alineado a la izquierda.
- Pie fijo con borde superior y texto 12 secondary con ícono.

### 3.10 Breakpoints **[decisión]**
| Ancho | Layout |
|---|---|
| < 768 | móvil (L1, L3, L4, L6, L8, L9) |
| 768–1023 | escritorio sin sidebar fijo: L2/L5 igual que escritorio; L7 usa el header móvil H2 + drawer y el contenido a 2 columnas |
| ≥ 1024 | escritorio completo (L2, L5, L7) |

---

## 4. Navegación

### 4.1 H1 · Header del flujo familia (móvil)
- Alto 69, padding 16 20, blanco, borde inferior 1px.
- Izquierda: chevron "‹" 20 (solo si hay paso anterior) → avatar escuela 36 (iniciales 12.96/600) → bloque texto (nombre 14/600 lh 16.8 + "Academia de Música" 12 tertiary). Gap 12.
- Derecha: selector de idioma (§4.8).

### 4.2 H2 · Header de app (móvil, usuario con sesión)
- Alto 55, padding 16 20, blanco, borde inferior.
- Izquierda: hamburguesa 22. Centro-izquierda: logo flowlift (imagen, alto 22). Derecha: campana 22 con badge rojo (§10.5).
- Variante **H2-maestro** (20, 20b): título centrado `serif-header` 19 en lugar del logo; íconos 20.

### 4.3 H3 · Header simple (móvil)
- Alto 55 (una línea) / 63 (dos líneas), padding 16 20, blanco, borde inferior, gap 10–12.
- Chevron back 20 + título (D1: Serif 19 una línea; o Sans 14/700 + subtítulo 12 tertiary).
- Derecha opcional (una sola): link verde 12/600 ("Marcar todas"), texto 13/500 tertiary ("Guardar borrador"), meta 12 tertiary ("Paso 1 de 2"), meta 12.5/700 ("Octubre"), botón pill secundario pequeño ("Quiosco": alto 28, padding 6 11, borde, 12/600, ícono 13).

### 4.4 Stepper
- **S1 móvil:** barra alto 45, padding 14 20, blanco, borde inferior; 3 pasos distribuidos con líneas 1px `--border-default` entre ellos (flex 1).
- **S2 escritorio:** barra alto 52; grupo centrado, gap 12, líneas de 48.
- Paso = círculo 16 + etiqueta 12 (gap 6):
  - Actual: círculo verde relleno, número 10/700 blanco; etiqueta 12/600 primary.
  - Completado: círculo verde con ✓ blanco; etiqueta 12/400 tertiary.
  - Pendiente: círculo borde 1px `--text-placeholder`, número 10/700 tertiary; etiqueta 12/400 tertiary.
- Pasos fijos: Clase · Horario · Cuenta.

### 4.5 H5/H6/H7 · Headers de escritorio
- **H5 flujo familia:** alto 64; marca escuela (avatar 36 + nombre 14/600 + subtítulo 12 tertiary) a la izquierda de la columna 600; idioma a la derecha.
- **H6 cuenta familia:** igual + derecha: botón campana (caja 36, borde 1px, radio 10, ícono 16, badge rojo arriba-derecha) → avatar 26 + nombre 13.5/600 → idioma. Gap 10.
- **H7 staff (`.top`):** alto 64, padding 0 32, gap 16. Izquierda: [back chevron 18 si es subpantalla] + título `serif-page` 22 + [meta en línea 12.5–13 tertiary, p. ej. "18 activos · 5 nuevos este mes", "Paso 1 de 2", "Maestro"]. Derecha (margin-left:auto): acciones en este orden → secundario(s) → primario → botón campana (**38×38**, borde 1px, radio 10, ícono 16; badge rojo 20×18, padding 0 5, 10.5/700, borde 2px blanco, top −4 right −6). Navegador de mes cuando aplica: navbtn 26 + "Octubre 2026" 13/700 + navbtn 26 (deshabilitado opacity .35).

### 4.6 Pestañas con subrayado (cuenta familia escritorio)
- Barra blanca, borde inferior; pestañas centradas, gap 32; cada pestaña alto 51, padding 6 2, 14px; activa 14/700 primary con borde inferior 2px `--green-primary`; inactiva 14/400 secondary con borde inferior 2px transparente.

### 4.7 Sidebar staff escritorio
| Pieza | Especificación |
|---|---|
| Logo | imagen flowlift alto 18–20, padding 20 20 12 |
| Tarjeta negocio | margen 0 12 8; fondo `--surface-page`, borde 1px, radio 16, padding 10 12; "Tu negocio" (dueño) / "Das clases en" (maestro) 10.5 tertiary; nombre `serif-brand` 16 en 2 líneas |
| Sección (`.navsec`) | 10.5/600 UPPERCASE ls 1px tertiary, padding 16 22 6 |
| Ítem (`.nav`) | alto 32, padding 8 12, margen 1 10, radio 10, gap 10, ícono 16 (stroke 2), texto 13.5/400 secondary |
| Ítem activo (`.nav.on`) | fondo `--surface-brand-subtle`, texto e ícono `--green-primary`, peso 700 |
| Hover **[propuesta]** | fondo `--surface-subtle`, 150 ms |
| Conteo (`.badge`) | margin-left auto, pill `--surface-subtle`, 10.5/700 primary, padding 1 7 |
| Pie | borde superior 1px, padding 12 18, gap 10: avatar 30 + nombre 13/700 + rol 11 tertiary ("Dueña", "Maestro") + botón salir (ícono 16 tertiary) a la derecha |
- Secciones del dueño (orden fijo): Inicio · Agenda · Ver mi página / DÍA A DÍA: Alumnos · Toma de asistencia · Cobros (2) · Cupo y lista de espera · Enviar comunicado / CLASES Y PRECIOS: Nueva clase · Precios · Inscripción / CONFIGURACIÓN: Maestros y espacios · Horario del negocio · Políticas del negocio · Cobros con tarjeta · Modo quiosco · Logo y banner / CUENTA: Suscripción de flowlift.
- Maestro: Inicio · Disponibilidad · Toma de asistencia / CUENTA: Mi perfil.

### 4.8 Selector de idioma
- Pill: borde 1px `--border-default`, radio full, padding 5 10, gap 5; ícono globo 13 + "ES" 12/500 secondary. Alto 26, ancho 57.
- Sobre banner (01-02 móvil): fondo `rgba(255,255,255,0.9)`, sin borde, padding 6 12.

### 4.9 Barras inferiores (móvil y escritorio familia)
| Tipo | Especificación | Pantallas |
|---|---|---|
| **B1** resumen + CTA (móvil) | alto 69, padding 16 20, blanco, borde superior 1px; izquierda: título 13/700 (o 13/600) + precio/detalle 12–13 tertiary (o 12.5 verde 600 "Usa 1 clase de tu paquete"); derecha: botón primario DS md | 01-02, 03, 04a, 04b, 04e |
| **B2** CTA ancho completo | igual, botón ocupa 350 | 04c, 04d, 05b, 06a–06d, 09b, 09i–09m, 11–29 formularios |
| **B2+nota** | CTA + nota 11 tertiary centrada 10 debajo (con candado 12 "Pago procesado de forma segura por **Stripe**") → alto 93 | 07, 14a ("2 sin marcar quedarán como…") |
| **B3** escritorio familia | ver §3.2 | |
| **B4** dos botones | secundario 1/3 + primario 2/3, gap 10 | 21d |
| **B5** primario + acción de texto | primario ancho completo + texto centrado debajo (rojo 14/600 "Cancelar al terminar el periodo" o primary 13/700 "Guardar borrador") | 26b, 29 |
| **B6** secundario ancho completo | botón secundario DS md ancho completo | 09 ("+ Inscribir a otra clase"), 14a ("Cerrar lista") |

### 4.10 Link de regreso (escritorio)
"‹ Todas las clases" / "‹ Mis clases" / "‹ Configuración": chevron 14 + texto 12.5 secondary, gap 4, margen inferior 12.
