# Icon

Íconos lineales de **Lucide** (`lucide-react` versión fija **0.460.0**). Un concepto = un ícono: el catálogo de la sección *Iconografía* dice cuál usar para cada cosa (Inicio = `House`, Cobros = `CreditCard`, Cupo y lista de espera = `Hourglass`…).

```jsx
<Icon name="Calendar" size={14} />          // en el sistema de diseño
import { Calendar } from 'lucide-react';    // en la app
<Calendar size={14} strokeWidth={2} />
```

## Reglas
- Trazo **2**, puntas y uniones redondas, sin relleno. Nunca `absoluteStrokeWidth`.
- Color = color del texto (`currentColor`). Apoyo en `text-tertiary`; activo en `green-primary`; destructivo en `red`.
- Tamaño por contexto: **16** por defecto (botones, menú, campana con caja), 14 (filas de información, Calendario/Lista), 13 (junto a títulos de sección, globo de idioma), 12 (notas), 18 (métricas, caja de 36), 20 (filas de configuración del cliente final, back del header), 22 (hamburguesa y campana sin caja).
- Siempre a la **izquierda** del texto, centrado vertical (`align-items:center`), `flex-shrink:0`. Separación: botón md/lg 8, botón sm y app 6, ítem del menú 10, fila 12–14, fila de información 10, chip 6.
- Ícono solo (sin texto) siempre dentro de un botón con `aria-label`; ícono junto a texto lleva `aria-hidden`.
- Prohibido: emoji como ícono, mezclar otra librería, cambiar el ícono de un concepto entre pantallas.
- Logos de marca (WhatsApp, Google, Microsoft, Apple, Outlook, Stripe, VISA) **no** son de Lucide: se usan sus SVG oficiales a color.
