export interface ButtonProps {
  children: React.ReactNode;
  /** primary = verde sólido · secondary = contorno · ghost = verde pálido · destructive = rojo fuerte #b3261e · whatsapp = solo pantallas de error de acceso */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'whatsapp';
  /** Solo para kind="flow": sm (31) · md (36/38) · lg (48) */
  size?: 'sm' | 'md' | 'lg' | 'pill';
  /** flow = pantallas del cliente final y botones dentro del contenido móvil · app = botón de 38 de la app del negocio en escritorio */
  kind?: 'flow' | 'app';
  /** Texto rojo en un botón secundario ("Quitar", "Cancelar al terminar el periodo") */
  danger?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Muestra un spinner de 16 y deshabilita */
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent) => void;
}
