# Formularios y controles

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 7. Formularios y controles

### 7.1 Campo (etiqueta + control + ayuda)
Estructura fija, siempre en este orden y de arriba hacia abajo: **etiqueta → control → ayuda/contador → mensaje de validación**. Nunca etiqueta a la izquierda del control (excepto filas de toggle §7.7 y radios §7.6).

Dos variantes **(D9)** con regla de uso fija:

| | **A · Persona** | **B · Configuración** |
|---|---|---|
| Cuándo | Datos de una persona: registro familia (06a, 06c), datos personales (09k), alumnos (09l), perfil maestro (19), invitar maestro (22) | Datos del negocio: nueva clase (11), precios (12, 12b), agregar alumno (13c), días libres (23b), cierre especial (25b), comunicado (29), quiosco (14d) |
| Etiqueta | 13/600 `--text-primary`, margen inferior 6 | 12/600 `--text-secondary`, margen inferior 6 |
| Input texto | 15/400, padding 12 14, alto 43 | 14/400, padding 11 13, alto 40 (escritorio) / min 44 (móvil) |
| Separación entre campos | 14 | 12–14 |
| Ayuda | 11.5/400 tertiary, margen superior 6 | 11.5/400 tertiary, margen superior 6 |

Comunes a ambas:
- Control: ancho 100%, fondo `--surface-card`, borde 1px `--border-default`, radio 10, color `--text-primary`, `box-sizing:border-box`.
- Placeholder: `--text-placeholder` (ej. "55 1234 5678", "tu@email.com", "Ej. llega 5 minutos antes…").
- **"(opcional)"** dentro del texto de la etiqueta: "Correo (opcional)", "Notas para el maestro (opcional)", "Bio corta (opcional)".
- **Contador** de caracteres: 11.5 tertiary alineado a la derecha en la misma línea que la ayuda ("Corto y claro: así aparece en el catálogo." …… "12 / 40"); en escritorio puede ir en línea al final de la ayuda: "… · 18 / 40".
- **Activo / con foco (confirmado en el canvas, 23b y 25b):** borde **1px `--green-primary` (#2db35d)**, mismo grosor que en reposo (no cambia a 2px, para que el campo no "brinque"), **sin sombra ni anillo**, fondo blanco sin cambio. Transición del color del borde 150 ms `--ease-std`. Aplica igual a input, textarea, select y campo de fecha (este último también mientras su calendario está abierto).
- **Error:** borde 1px `--red` (tiene prioridad sobre el verde de foco).
- **Solo lectura:** no cambia de borde al recibir foco.
- **Campos en fila:** gap 10 (B) / 12 (A). Proporciones reales: "Nombre del alumno" flex + "Edad" 80; "Edad mín./Edad máx./Duración" tres iguales; "Día/Hora" y "Maestro/Espacio" 50/50; "País" 78 + "WhatsApp" flex; "WhatsApp/Correo" 50/50 (escritorio); "Nombre del paquete" 2fr + "Precio" 1fr + "Vigencia (días)" 1fr.

### 7.2 Tipos de control
| Control | Especificación | Dónde |
|---|---|---|
| **Texto / email / tel** | base §7.1; `type` correcto (`email`, `tel`) e `inputmode` | todos |
| **Textarea** | base, `line-height:1.5`, `resize:none` (familia) / `vertical` con asa (11); alturas: 60 (notas alumno), 72 (descripción clase), 94 (bio maestro), 108 (mensaje comunicado), 56 (nota días libres) | 09l, 11, 19, 23b, 29 |
| **Select** | caja igual a input; valor a la izquierda; chevron ⌄ 14 tertiary a la derecha (padding derecho 13); en móvil abre la hoja nativa | 11 (Maestro, Espacio), 13c (Clase, Plan) |
| **Select compacto** (`.sel`) | alto 29–36, padding 6–8 10, borde 1px, radio 10, 13/600 primary, gap 6–8, chevron 12; puede llevar etiqueta interna tertiary 400 ("Suplente: **Ana Torres**") | 12 ("Día 15"), 12b ("1", "Agosto"), 14d ("Salón A"), 21d (suplente), tablas escritorio |
| **Prefijo de país** | caja separada alto 43 (A) / 44 (B), ancho 78–87, padding 0 10, gap 4: "MX +52" + chevron 12; gap 8 con el input | 06a, 13c, 13c escritorio ("País") |
| **Input con sufijo** | sufijo dentro del input a la derecha: "✓ Verificado" 12/600 verde con check 12 (09k); "Google" 11 tertiary (19); "· Google" en línea (19 escritorio) | |
| **Solo lectura** | fondo `--surface-subtle`, texto `--text-tertiary`, borde 1px `--border-default`, sin cursor de texto; sufijo con el origen ("Google") | 19 correo |
| **Fecha** | input B con ícono calendario 16 tertiary a la derecha; valor "Lun 2 nov"; activo (picker abierto) borde `--green-primary`; abre el date picker §11.9 | 23b, 25b |
| **Fecha de nacimiento** | input con valor "14 / 03 / 2018" (dd / mm / aaaa, espacios alrededor de "/") | 09l, 13c |
| **Hora** (`.tbtn`) | alto 36, ancho mínimo 92, padding 0 10, borde 1px, radio 10, 13.5/500 tabular, centrado; par "4:00 PM — 8:00 PM" con guion 13 tertiary y gap 8 | 23, 25 |
| **Moneda** | input con "$" en el valor: "$800.00", "$600.00", "$1,200.00" | 12, 12b |
| **Buscador** | input con lupa 16 tertiary a 14 del borde izquierdo, padding-left 38–40; alto 44 (móvil) / 38 (escritorio, 13.5) / 42 (catálogo); placeholder "Buscar clase", "Buscar alumno o papá/mamá" | 01-02, 13 |
| **Código de verificación** (`.code-box`) | 6 cajas 44×52, gap 10, borde 1.5px `--border-default`, radio 10, 20/600 centrado; llena: borde `--green-primary`; vacía: punto central 4 `--text-placeholder` | 06b |
| **PIN** (`.pinbox`) | 4 cajas 44×50, borde 1px, radio 10, 22/700; mostrado como "••••" 24 ls 6px (móvil) o "● ● ● ●" 18 (escritorio) | 14d |

### 7.3 Mensajes de validación
| Tipo | Estilo | Ejemplo |
|---|---|---|
| **Error** | input con borde 1px `--red`; debajo: punto 6 `--red` + texto 12/400 `--red` lh 1.45, gap 7, margen superior 6 | "Salón A está ocupado a esta hora (Batería Kids). Elige otro espacio u hora para poder guardar." |
| **Advertencia** (no bloquea) | sin cambio en el input; punto 6 ámbar #B36B00 + texto 12–12.5 #8A5300 lh 1.45 | "Ana no tiene disponibilidad los jueves a esta hora. Puedes guardar; le avisamos y se marca en la agenda." |
| **Éxito** | check 12 verde + texto 12/600 `--green-primary` | "✓ Cuenta nueva: le enviaremos acceso por WhatsApp" |
| **Neutro** | punto 6 tertiary + 12 tertiary | escritorio 13c |
| En tabla (escritorio) | el mensaje va dentro de la celda, 12 ámbar/rojo con punto, bajo el valor | 11 escritorio |

### 7.4 Chips
Base `.chip`: `min-height:32px; padding:6px 13px; border-radius:999px; font-size:13px; font-weight:600; white-space:nowrap; display:inline-flex; align-items:center`.
| Variante | Inactivo | Activo | Dónde |
|---|---|---|---|
| **Filtro / selección única (D4)** | blanco, borde 1px `--border-default`, texto `--text-secondary` | fondo y borde `--green-primary`, texto #fff | filtros de edad (01-02 esc.), clase (13, 24c, 12 esc.), movimientos (16c), motivo (23b, alto 36 padding 7 14), tipo de aviso (29), festivos (25b) |
| **Selección múltiple / opcional (D4)** | blanco, borde 1px, texto `--text-secondary` | `--surface-brand-subtle`, borde 1px `--green-primary`, texto `--green-primary` | avisos de renovación (12b: "4 semanas"…), motivo de cancelación (10b, 12.5/600 padding 7 12 alto 30), motivo de baja (26b) |
| **Persona (alumno)** | blanco, borde 1px, 13.5/500 primary, padding 8 18, alto 38 (esc.) / 33 (móvil) | `--surface-brand-subtle`, borde `--green-primary`, 13.5/700 primary | selector de hijo (09) |
| Fila de chips | gap 8 (6 en móvil con scroll); en móvil una sola fila con `overflow-x:auto` sin barra y padding lateral 20 (`.chip-scroll`); en escritorio envuelven | |

### 7.5 Segmentados (D2 · solo dos tipos)
**Tipo 1 · Pestañas** (cambia la sección que se ve, ocupa todo el ancho):
```css
.tabs{display:flex;gap:3px;padding:3px;background:var(--surface-subtle);border-radius:10px}
.tab{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 0;
     border-radius:7px;font-size:13.5px;font-weight:600;color:var(--text-tertiary)}
.tab.active{background:var(--surface-card);color:var(--text-primary);box-shadow:0 1px 2px rgba(0,0,0,.06)}
```
Usos: Maestros/Espacios (21), Calendario/Lista con íconos 14 (20, 20b móvil). Alto total 37.

**Tipo 2 · Selector pill** (elige un valor o un modo; tamaño de contenido):
```css
.seg{display:inline-flex;padding:3px;background:var(--surface-card);border:1px solid var(--border-default);border-radius:999px}
.seg > *{height:24px;padding:0 12px;border-radius:999px;display:flex;align-items:center;
         font-size:12.5px;font-weight:600;color:var(--text-secondary)}
.seg > .on{background:var(--green-primary);color:#fff}
```
Alto total **32** (D3). Usos: Hoy/Semana (24), Semana/Mes (20), Semana/Día (24c), Calendario/Lista (escritorio), Automática/Manual (11, 15), Nivel Todos/Principiante/Intermedio/Avanzado (11), Alumno/Familia (12b), Única vez/Semestral/Anual (12b), Lo pone la escuela/Lo trae el alumno (11), Omitir/Reponer después (25b), WhatsApp/Correo (06a), Para: Clases/Familias/Maestros (29, ancho completo con opciones flex 1).
- Variante ancho completo: `.seg{display:flex}` y opciones `flex:1`.
- Variante en fila de formulario: puede ir a la derecha de una pregunta en la misma línea (06a, 15).

### 7.6 Radio, checkbox y opciones-tarjeta
| Control | Especificación |
|---|---|
| **Radio** | círculo 18, borde 1.5px `--grey-mid` **(D11)** en todos los casos, fondo transparente; seleccionado: borde `--green-primary` + punto interno 9 `--green-primary`. Texto 13–13.5 a 10 de distancia; alineado al centro (lista) o arriba con margin-top 2 (tarjeta) |
| **Lista de radios** | filas alto 38, padding 10 0, gap 10 (17 escritorio) |
| **Checkbox** | cuadro 18 (radio 4–5) o 20 (radio 5); vacío: fondo blanco + borde 1px `--grey-mid` **(D11)**; marcado: fondo y borde `--green-primary` + ✓ blanco 12; texto 13–14 a 8–12 de distancia |
| **Fila checkbox en tarjeta** | `.row` (§9.1) con checkbox 20 + nombre 14 (13.5/700 escritorio) + meta derecha 12 tertiary ("1 horario") |
| **Consentimiento** | caja `--surface-brand-subtle`, borde 1px `--border-default`, radio 16, padding 14; checkbox 18 + texto 12.5 secondary lh 1.55 con montos en **700** y link verde 700 |
| **Opción-tarjeta** (`.opt`, `.slot`, `.fcard` seleccionable) | tarjeta blanca, borde 1px `--border-default`, radio 16, padding 14 16 (14 en horarios); seleccionada: fondo `--surface-brand-subtle` + borde 1px `--green-primary` (1.5px en `.slot.on`); indicador: check verde 18 (círculo relleno con ✓ blanco) abajo-derecha o a la derecha, o radio 18 a la izquierda (escritorio) |
| **Opción-tarjeta grande con radio** (`.opt-card`) | alto 56, padding 16, gap 12, radio de 22 (`.opt-radio`, borde 1.5px) + texto 14/700 | 04c, 04d |
| **Opción-tarjeta con descripción** | radio 18 arriba-izquierda + título 13.5/700 + descripción 12 secondary lh 1.45 | 13c "¿Cómo va a pagar?" |
| **Rejilla de opciones** (`.opt` en rejilla) | 4 columnas iguales gap 8, alto 50, radio 10, padding 12 6, 13/600 centrado; activa `--surface-brand-subtle` + borde 1.5px verde + texto verde; última con ícono calendario 13 ("Otra fecha") | 09j |
| **Selector de maestro** | 3 tarjetas iguales gap 10, radio 10, padding 10 6, centradas: avatar 36 (o ícono persona 18 en "Cualquier disponible"), nombre 11/600 lh 1.2 en 2 líneas; activa green-pale + borde verde | 04a, 04e |
| **Días de la semana** | círculos 30–32, 12/600, borde 1px; activo verde relleno texto blanco; inactivo blanco texto secondary; gap 6 ("Lu Ma Mi Ju Vi Sá Do") | 12 escritorio |

### 7.7 Switch (toggle)
```css
.sw{width:40px;height:24px;border-radius:999px;position:relative;flex-shrink:0;cursor:pointer;
    background:var(--text-placeholder)}            /* apagado: #c4c4c4 */
.sw.on{background:var(--green-primary)}
.sw .k{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff}
.sw.on .k{transform:translateX(16px)}
```
- `role="switch"`, `aria-checked`, `aria-label` ("Activar día").
- **Fila con switch:** título 13.5/700 (o 14/400 en filas simples) + descripción 12 tertiary lh 1.4 a la izquierda; switch a la derecha **alineado arriba** cuando hay descripción, centrado cuando no; gap 12; filas separadas por divisor 1px; padding 14 16.
- **Encabezado de tarjeta con switch:** título + descripción a la izquierda, switch a la derecha (11 "Qué llevar a la clase", 12b "Cobrar inscripción").
- **Día con switch:** nombre del día 14/700 (13.5/700 escritorio) + switch; si está apagado, el resto de la fila muestra "La escuela cierra" / "Cerrado" 13 tertiary.

### 7.8 Formularios de edición de perfil y datos (patrón completo)
Aplica a 09k (datos personales), 09l (alumnos), 19 (perfil maestro), 22 (invitar maestro), 21c (ficha maestro, vista dueño), 13b (perfil alumno, vista dueño).

**Móvil:**
1. Header H3 con título Serif 19 ("Datos personales", "Mi perfil").
2. **Bloque de identidad** (padding 20 20 0): 
   - Familia (09k): nombre 15/700 + rol 12 tertiary ("Responsable de la cuenta · Escuela de Música Crescendo").
   - Maestro (19): avatar 52 con **badge de cámara** (círculo 18 blanco con borde 1px, ícono cámara 11 verde, abajo-derecha, superpuesto 2px) = "cambiar foto"; a la derecha nombre 15/700 + rol 12 tertiary con ícono persona 12. Gap 12.
   - Vista dueño (13b, 21c): nombre `serif-20`/21 + meta 12.5 tertiary; debajo, 2 botones 50/50 ("Llamar" secundario con ícono, "WhatsApp" primario con ícono).
3. **Secciones** con `cap` + ícono 13 (margen 22 0 10): "INFORMACIÓN PERSONAL" / "TUS DATOS", "MIS CLASES", "CUENTA", "CÓMO INICIAS SESIÓN".
4. **Campos** tipo A apilados con gap 14; ayudas y contadores bajo su campo; el correo de origen Google es solo lectura.
5. **Listas relacionadas** dentro de tarjetas (clases asignadas, métodos de acceso con estado a la derecha: "Activo" verde 12/600, "Conectado" 12 tertiary, "Conectar" link verde 12/600 subrayado).
6. **Grupo de navegación** (§9.3) y tarjeta separada "Cerrar sesión" (§9.4).
7. **Barra inferior B2** con "Guardar cambios" (primario md ancho completo). El botón guarda todo el formulario.

**Acordeón de entidad (09l alumnos):** tarjeta por alumno; cabecera (nombre 14/700 + meta 12 tertiary + chevron 16 ↑/↓) padding 14 16; expandida: divisor + formulario A con padding 14 16 16 y botón sm primario "Guardar" ancho completo al final de la tarjeta; colapsada: solo cabecera. Al final, tarjeta punteada "+ Agregar alumno" con nota "puedes agregar 2 más", y nota de límite 11 tertiary. Encima, contador "2 de 4 alumnos" 13.5/700 + "Límite de Escuela de Música Crescendo" 11 tertiary a la derecha + barra segmentada de 4 (§11.3).

**Escritorio (19, 22, 13c):**
- Rejilla 2 columnas (≈ 58/42 o 50/50). Izquierda: tarjeta "Información personal"/"Datos del maestro" con encabezado (§8.2) y cuerpo padding 16 con el bloque de identidad (avatar 44 + nombre 15/700 + rol 12 tertiary + link "Cambiar foto" 12/600 verde) y los campos (WhatsApp/Correo en 2 columnas). Derecha: tarjetas de listas ("Mis clases", "Cuenta", "Clases que podrá dar" con checkboxes).
- El botón de guardar va en el **header H7** ("Guardar cambios", "Guardar y crear invitación", "Agregar y enviar link por WhatsApp"), no al pie.

### 7.9 Formularios largos de configuración (11 nueva clase, 12 precios)
- **Móvil:** secciones con `cap`+ícono; cada grupo dentro de tarjeta (padding 14 16); tarjetas repetibles (horarios) con borde sólido la primera y **punteado** las adicionales (borde 1px dashed `--border-default`); link "+ Agregar horario" debajo; materiales: fila input (flex) + botón × (`.hx`) + debajo selector pill pequeño (alto 24, 12/600).
- **Escritorio:** rejilla 2 columnas (≈ 60/40) de tarjetas con encabezado; los horarios pasan a **tabla** (DÍA, HORA, MAESTRO, ESPACIO, CUPO) con mensajes de conflicto dentro de la celda.
- **Edición en línea** (12 precios): tabla de paquetes; la fila en edición tiene fondo `--surface-brand-subtle` y la acción "Editando" verde 700; debajo de la tabla se abre un **panel** (fondo `--surface-page`, borde superior 1px, padding 16) con los campos, y al pie: acción roja "Eliminar este paquete" a la izquierda + botón `.btn.sec` "Listo" a la derecha. En móvil, el ciclo de precio en edición es una tarjeta expandida con fondo `--surface-brand-subtle` y borde 1px verde.
- **Guardar:** "Publicar clase"/"Guardar" en barra inferior (móvil) o header (escritorio). "Guardar borrador" como texto 13/500 tertiary en el header móvil o `.btn.sec` en escritorio.
