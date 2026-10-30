import { useLayoutEffect, useRef, useState } from 'react'

// Escala un lienzo de tamaño fijo (designWidth) para que quepa en su contenedor, sin usar `zoom`.
// El contenedor (ref) debe tener width:100% y max-width = designWidth.
export function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / designWidth))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designWidth])
  return [ref, scale] as const
}
