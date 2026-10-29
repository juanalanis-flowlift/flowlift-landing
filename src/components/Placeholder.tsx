import type { ReactNode } from 'react'
import { Image } from 'lucide-react'

// Marcador visible de contenido pendiente (foto o texto). Todo uso lleva un TODO en el código.
export default function Placeholder({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <div className="ph-box" style={small ? { fontSize: 12, padding: 10 } : undefined}>
      <Image size={22} aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
