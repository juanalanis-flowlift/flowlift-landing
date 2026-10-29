import { ArrowRight } from 'lucide-react'
import Pill from './Pill'

export default function FloatingCta({ label, cta, href }: { label: string; cta: string; href: string }) {
  return (
    <div className="float">
      <span className="float-txt">{label}</span>
      <Pill small href={href} icon={ArrowRight}>{cta}</Pill>
    </div>
  )
}
