# Button

Botón de acción de flowlift, en dos familias que nunca se mezclan en la misma pantalla: **flow** (pantallas del cliente final y contenido móvil) y **app** (app del negocio en escritorio).

```jsx
<Button>Continuar →</Button>
<Button size="lg" fullWidth>Actualizar método de pago</Button>
<Button kind="app" iconLeft={<PlusIcon/>}>Agregar alumno</Button>
<Button kind="app" variant="secondary" danger>Cancelar al terminar el periodo</Button>
```

## Medidas
| Tamaño | Alto | Padding | Texto | Radio | Gap |
|---|---|---|---|---|---|
| flow `sm` | 29 (31 con borde) | 7 14 | 13/500 | 6 | 6 |
| flow `md` (por defecto) | 36 (38 con borde) | 10 22 | 14/500 | 10 | 8 |
| flow `lg` | 48 | 0 22 | 15/600 | 10 | 8 |
| `pill` (acción pequeña del header H3, p. ej. "Quiosco") | 28 | 6 11 | 12/600 | full | 5 (ícono 13) |
| app | 38 | 0 16 | 13.5/600 | 10 | 6 |

## Variantes
| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| `primary` | `green-primary` | blanco | — |
| `secondary` (flow) | transparente | `text-primary` | 1px `border-input` |
| `secondary` (app, lg) | `surface-card` | `text-primary` | 1px `border-default` |
| `ghost` | `surface-brand-subtle` | `green-primary` | — |
| `destructive` | `red-strong` (#b3261e) | blanco | — (md: alto 43, padding 13, 15/600) |
| `whatsapp` | `whatsapp` (#25d366) | blanco | — (solo errores de acceso) |
| `danger` (con secondary) | igual a secondary | `red` | — |

## Estados
- Hover primario: fondo `green-primary-hover` + `shadow-brand-hover` (150 ms). Hover secundario: fondo `surface-subtle`.
- Presionado: `scale(.97)` en 100 ms.
- Deshabilitado: opacidad .45, sin hover.
- Cargando: spinner de 16 en lugar del ícono; se deshabilita.
- Foco: contorno 2px `green-primary` a 2px de distancia.

## Uso
- Flechas " →" solo en los CTAs que avanzan el flujo del cliente final ("Continuar →"). Guardar y confirmar no llevan flecha.
- Un solo primario por pantalla o por tarjeta.
- En barras inferiores móviles: md ancho completo (o a la derecha de un resumen). En pantallas de pago, error o configuración larga: lg.
- En el header de escritorio del negocio: secundarios primero, primario al final, todos `kind="app"`.
- Íconos de 16 a la izquierda ("+", calendario, ojo, mensaje).
