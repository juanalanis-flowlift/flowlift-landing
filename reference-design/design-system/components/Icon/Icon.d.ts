export interface IconProps {
  /** Nombre exacto de Lucide (House, Calendar, CreditCard…). Ver el catálogo. */
  name: string;
  /** 12 · 13 · 14 · 16 (por defecto) · 18 · 20 · 22 */
  size?: number;
  /** Siempre 2 */
  strokeWidth?: number;
  /** Por defecto hereda el color del texto (currentColor) */
  color?: string;
  /** Si el ícono comunica algo sin texto al lado, su nombre accesible */
  title?: string;
}
