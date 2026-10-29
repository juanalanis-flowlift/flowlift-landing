# Estados, copy y accesibilidad

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 14. Estados de pantalla y de contenido

### 14.1 Vacío
| Caso | Patrón del canvas |
|---|---|
| Día sin clases (lista) | caja `.empty-day`: borde 1px dashed `--border-default`, radio 16, padding 12 14, "Sin clases este día." 12.5 `--text-placeholder` |
| Día sin clases (agenda escritorio) | texto 12 placeholder bajo el encabezado del día |
| Celda/valor vacío | "—" `--text-placeholder` |
| Sin datos en tarjeta | fila única: texto 13 secondary + link "Configurar →" a la derecha ("Sin ciclos de precio configurados") |
| Sin conexión externa | estado "● Sin conectar" + explicación + CTA grande (16e) |
| Lista vacía general **[propuesta]** | centrado en la tarjeta: ícono 20 tertiary en círculo 46 `--surface-subtle`, título 14/700, texto 12.5 tertiary (máx. 2 líneas), link o botón sm |

### 14.2 Carga **[propuesta]**
- Skeleton con la forma del componente: bloques `--border-default` con brillo §5.3 #9. Tarjetas: misma caja con 2–3 barras de texto (alto 10, radio 5). Tablas: 5 filas. Nunca spinner de página completa. Spinner 16 solo dentro de botones.

### 14.3 Error
- **De campo:** §7.3.
- **De bloqueo** (pago fallido): pantalla con bloque centrado §8.4 + tarjeta de contexto + alerta amarilla + CTA lg + nota + link de contacto (09g).
- **De acceso** (staff sin invitación / vencida): §3.9 (18b, 18c).
- **De carga [propuesta]:** caja `--red-pale` borde 1px `--red` radio 10 padding 12 14, ícono 16 rojo + texto 12.5 `--red-dark` + link "Reintentar" 12.5/600.

### 14.4 Éxito
- Pantalla de confirmación L3 (08a–08d, 09m).
- Confirmación breve: toast §5.3 #8 (fondo `--ink`, texto `--surface-page` 13/600, punto verde 8, radio 10, padding 11 14, abajo con 16 de margen) **[propuesta del sistema de movimiento aprobado]**.

### 14.5 Deshabilitado
- Botones: opacity .45. Navbtn: opacity .35. Ítems de menú "PRONTO": texto tertiary e ícono .55. Días del calendario cerrados: rayado + tachado. Inputs **[propuesta]**: fondo `--surface-subtle`, texto tertiary (igual que solo lectura).

---

## 15. Contenido y tono (copy)
- Español de México, tuteo, neutro en género ("Te damos la bienvenida", "¿Quién toma la clase?", "papá, mamá o responsable").
- Títulos de paso como pregunta o frase corta con una palabra en itálica: "¿Cuándo *te acomoda*?", "Último paso, *tus datos*".
- Subtítulos explican la consecuencia: "Te avisamos por WhatsApp…", "No se te cobra nada hasta que confirmes."
- Botones: verbo + objeto, 1–4 palabras; flecha " →" solo para avanzar en el flujo familia.
- Notas al pie explican reglas en una oración ("Solo el negocio ve tu respuesta…").
- WhatsApp es el canal por defecto en textos ("Te enviamos los detalles por WhatsApp").
- Montos y fechas siempre explícitos en confirmaciones de cobro ("Acepto que se me cobre **$600.00 MXN** automáticamente cada mes…").
- Todo texto sale de i18n (es y en). Prohibido texto fijo en componentes.

---

## 16. Accesibilidad
- Área táctil mínima 44×44 en móvil: botones de 36–38 de alto reciben área extra con padding o pseudo-elemento; íconos de 20–22 en headers tienen área 44.
- Contraste: `--text-tertiary` (#767676) es el gris más claro permitido para texto; `--text-placeholder` solo para placeholder, deshabilitado y "—".
- Foco visible en todo elemento interactivo: botones y links con outline §6.5; campos con el borde verde de §7.1.
- Estados nunca solo por color: siempre punto + texto o ícono + texto.
- Roles: switch `role="switch"`, pestañas `role="tablist"/"tab"` con `aria-selected`, selector pill `role="radiogroup"/"radio"`, chips de filtro `aria-pressed`, filas navegables son `<a>` o `<button>`, campana con `aria-label="Notificaciones (3 nuevas)"`.
- Formularios: `<label for>`, `aria-describedby` para ayuda y error, `autocomplete` (`name`, `email`, `tel`), `inputmode="numeric"` en códigos, PIN y montos.
- `prefers-reduced-motion` según §5.2.

---

