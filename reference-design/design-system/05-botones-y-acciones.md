# Botones y acciones

> Parte del sistema de diseño global de flowlift. Los valores se midieron en las pantallas de MySpot (las referencias tipo "09d" o "24c" son pantallas de ese canvas) y aplican igual a Bookings y Mi Tiendita. Donde el texto dice *familia* / *alumno* / *clase*, léase *cliente final* / *servicio* en los otros productos (ver `09-voz-y-vocabulario.md`).

---

## 6. Botones y acciones

En el canvas conviven dos familias de botón, cada una con su contexto. **No se mezclan en la misma pantalla.**
- **Botón de flujo (DS Button):** pantallas de familia (L1, L3, L4 móvil) y botones de pantallas móviles staff dentro del contenido o en barra inferior.
- **Botón de app (`.btn`):** todo L5/L7 escritorio (headers, tarjetas, tablas) y pantallas móviles staff que usan `.btn` (13d, 09n).

### 6.1 Botón de flujo (DS Button)
| Tamaño | Alto | Padding | Texto | Radio | Gap ícono |
|---|---|---|---|---|---|
| **md** (por defecto) | 36 (38 con borde) | 10 22 | 14/500 | 10 | 8 |
| **sm** | 29 (31 con borde) | 7 14 | 13/500 | 6 | 6 |
| **lg** **[decisión]** | 48 | 0 22 | 15/600 | 10 | 8 |

| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| **primary** | `--green-primary` | #fff | ninguno |
| **secondary** | transparente | `--text-primary` | 1px `--border-input` |
| **ghost** | `--surface-brand-subtle` | `--green-primary` | ninguno |
| **destructive** | `--red-strong` #B3261E | #fff | ninguno (texto 15/600, alto 43, padding 13) |
| **whatsapp** | #25D366 | #fff | ninguno (solo 18c "Escribir a Crescendo por WhatsApp", ícono WhatsApp 16) |

Usos reales:
- md primary: "Continuar →", "Reservar →", "Enviar código →", "Confirmar cambio", "Guardar cambios", "Publicar clase", "Tomar asistencia" (maestro móvil, ancho completo dentro de tarjeta), "Reprogramar", "WhatsApp" (13b, con ícono).
- md secondary: "+ Inscribir a otra clase", "Anotarme a la lista de espera" (ancho completo dentro de caja), "Llamar" (con ícono teléfono), "Cerrar lista".
- sm primary: "Reservar una clase", "Guardar" (dentro de tarjeta, ancho completo).
- sm secondary: "Elegir" (a la derecha de una tarjeta de horario), "Anotarme a la lista de espera" dentro de tarjeta llena.
- sm ghost: "Cargar más horarios" (centrado).
- lg primary: "Actualizar método de pago ↗", "Conectar con Stripe", "Actualizar tarjeta", "Entrar con otro correo", "Guardar" (23, 25: barras con padding 12 20 18).
- lg secondary (blanco, borde 1px `--border-default`): "Reintentar el cobro ahora", "Ya tengo cuenta · Iniciar sesión".
- destructive: "Sí, cancelar clase" (bottom sheet 10b).

### 6.2 Botón de app (`.btn`)
```css
.btn{display:inline-flex;align-items:center;gap:6px;height:38px;padding:0 16px;border-radius:10px;
     font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer}
.btn.pri{background:var(--green-primary);color:#fff}
.btn.sec{background:var(--surface-card);color:var(--text-primary);border:1px solid var(--border-default)}
.btn.sec.danger{color:var(--red)}          /* "Cancelar al terminar el periodo", "Quitar" */
.btn .ico{width:16px;height:16px}          /* "+", calendario, ojo, mensaje, tablet */
```
- Alto 38 en headers H7, en tarjetas y en tablas.
- Con ícono a la izquierda: "+ Agregar alumno", "+ Agregar maestro", "+ Agregar espacio", "+ Agregar ciclo de precio", "Pedir días libres" (calendario), "Ver mi página" (ojo), "Iniciar modo quiosco"/"Iniciar en este dispositivo" (tablet), "WhatsApp"/"Recordar"/"Avisar" (globo de mensaje).
- Variante **pill** (móvil staff, 13d): alto 36, radio full, padding 0 14, 13/600, borde 1px, punto verde 8 a la izquierda ("● Avisar").
- Botones de acción par en tarjeta (16b móvil `.act`): flex 1, alto 44, radio 10, borde 1px, 13/600, gap 6 ("● Recordar" / "Marcar como pagado"), separados 8.
- Tamaño por posición: header escritorio → `.btn`; dentro de tarjetas escritorio → `.btn`; grupo de botones que envuelve (13b escritorio: "Aplicar descuento", "Exentar inscripción", "Marcar como pagado", "Reenviar recordatorio") → `.btn.sec` alto 32 **[decisión: alto 32, padding 0 14]**, gap 8.

### 6.3 Botones especiales
| Nombre | Especificación | Dónde |
|---|---|---|
| **OAuth** | ancho completo, alto 40 (móvil) / 44, borde 1px, radio 10, padding 11, gap 8–10, logo oficial 16 + texto 14/600 primary | 06a, 18 ("Continuar con Google/Microsoft") |
| **Calendario** | pill alto 33, padding 8 16, borde 1px, gap 6, logo 14 + 13/600 | 08a–08d (Google, Outlook, Apple) |
| **Feedback** | círculo 40, borde 1px, emoji 18; par con gap 14, centrado | 08a–08d (👍 👎) |
| **Asistencia móvil** | par 50/50, alto 40, radio 10, borde 1px, 13/600, ícono 14 (✓ / ×), gap 6. Inactivo: blanco, texto secondary. "Asistió" activo: `--surface-brand-subtle`, borde y texto `--green-primary`. "Ausente" activo **[decisión]**: `--red-pale`, borde y texto `--red` | 14a móvil |
| **Asistencia escritorio** | chips pill alto 32, padding 6 13, 13/600, mismos colores; par con gap 10, alineados a la derecha | 14a escritorio |
| **Agregar bloque** (`.add-block-btn`) | ancho completo, alto 43, padding 13, borde 1.5px dashed `--border-default`, radio 16, 13.5/600 secondary, ícono + 14, centrado | 23, 25 ("+ Pedir días libres", "+ Agregar cierre especial") |
| **Agregar tarjeta** | tarjeta punteada: borde 1px dashed `--text-placeholder`, radio 16, padding 14 16, ícono + 16 verde + texto 14/600 verde (o primary 14/600 "Agregar otro alumno"); nota derecha 11.5 tertiary ("puedes agregar 2 más") | 06d, 09l, 12 |
| **Upload** (`.upload-btn`) | flex 1, alto 34, padding 9 0, radio 10, 12.5/600; "Cambiar foto/logo" secundario blanco con borde (D5); "Quitar" blanco con borde, texto `--red` | 28 |
| **Navbtn** | 30×30 (escritorio y móvil) **[decisión D3: 32×32 en barras de herramientas]**, borde 1px, radio 10, fondo blanco, chevron 16; deshabilitado opacity .35 | navegadores de fecha/semana/mes |
| **Botón campana** | 38×38 (H7 staff) / 36×36 (H6 familia) con borde 1px radio 10; ícono 22 sin caja (móvil H2); badge §10.5 | H2, H6, H7 |
| **Cerrar ×** | ícono 16–18 tertiary, área 30 | drawer, panel lateral |
| **Quitar fila ×** (`.hx`) | 30×30, radio 10, ícono 14 tertiary | materiales en 11 |
| **Ícono de nota** | caja 26 `--surface-subtle` radio 6 con ícono 13 | 14a (nota de la familia) |
| **Copiar / Ver** | texto 12/700: "Ver" primary, "Copiar" verde | caja de link (24 móvil) |

### 6.4 Acciones de texto (links)
| Variante | Estilo | Ejemplos |
|---|---|---|
| **Link de acción** | 13/600 `--green-primary`, sin subrayado; prefijo "+ " para agregar | "+ Agregar horario", "+ Agregar material", "+ Agregar opción", "+ Agregar descuento" (12/600), "Cambiar", "Editar", "Configurar →", "Ver todos →" (12–13/600) |
| **Link en tarjeta familia** | 13/600 verde **subrayado** | "Cancelar / reprogramar", "Mi pase", "Administrar mi membresía", "Anotarme a la lista de espera →", "Cambiar de horario", "Aplicar descuento", "Marcar como pagado" |
| **Link en texto** | mismo tamaño que el párrafo, 600 verde subrayado | "Inicia sesión", "Términos y Condiciones", "Avísale a la escuela" |
| **Link en nota** | 700 verde sin subrayado | "Ver política de cancelación", "Políticas del negocio", "Alumnos", "Nueva clase" |
| **Link neutro** | 13/600 primary subrayado | "Escribirle a Escuela de Música Crescendo" |
| **Link deshabilitado/temporizado** | 13/400 `--text-placeholder` subrayado | "Reenviar código (0:24)" |
| **Acción destructiva de texto** | 13–14/600 `--red` (staff) o `--red-strong` (familia), centrada o alineada a la izquierda bajo la columna, sin subrayado | "Cancelar esta clase", "Dar de baja al alumno", "Desactivar maestro", "Eliminar este paquete", "Cancelar suscripción", "Cerrar sesión" (escritorio) |
| **Acción secundaria centrada** | 14/600 verde ("Mejor la reprogramo") o 13/400 tertiary ("No cancelar") | 10b |
| **Link pie de tarjeta** | 12.5–13/600 verde centrado, borde superior 1px, padding 12 | "Ver los 24 alumnos" |
| **Link pie de página** | 12.5/700 primary + chevron 14 | "Depósitos y facturas en Stripe ›" |

### 6.5 Estados de botón
| Estado | Regla |
|---|---|
| Hover primario | §5.3 #1 (fondo `--green-primary-hover`, sombra brand) |
| Hover secundario | fondo `--surface-subtle` |
| Presionado | `scale(.97)` 100 ms |
| Deshabilitado | **opacity .45**, `cursor:not-allowed`, sin hover (07 "Continuar a pago seguro →" hasta marcar el consentimiento) |
| Cargando **[propuesta]** | spinner 16 en lugar del ícono/flecha, texto se mantiene, deshabilitado |
| Foco | `outline: 2px solid var(--green-primary); outline-offset: 2px` |
