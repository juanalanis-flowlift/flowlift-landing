import type { CSSProperties } from 'react'
import sizes from '../content/imageSizes.json'

const SIZES = sizes as unknown as Record<string, [number, number]>

type Props = {
  src: string
  alt?: string
  eager?: boolean
  className?: string
  style?: CSSProperties
}

// <img> con width/height reales (sin saltos de layout). `eager` = imagen de arriba del pliegue:
// sin lazy y con prioridad alta (React 18 solo acepta el atributo en minúsculas). El resto carga lazy.
export default function Img({ src, alt = '', eager, className, style }: Props) {
  const [w, h] = SIZES[src] ?? [undefined, undefined]
  return (
    <img
      src={src} alt={alt} width={w} height={h} className={className} style={style}
      decoding="async"
      {...(eager ? ({ fetchpriority: 'high' } as object) : { loading: 'lazy' as const })}
    />
  )
}
