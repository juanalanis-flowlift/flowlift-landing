import type { ComponentType, ReactNode } from 'react'
import type { LucideProps } from 'lucide-react'
import SmartLink from './SmartLink'

type Variant = 'dark' | 'light' | 'cream' | 'ghost'

type Props = {
  children: ReactNode
  variant?: Variant
  small?: boolean
  icon?: ComponentType<LucideProps>
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const VARIANT: Record<Variant, string> = { dark: '', light: ' pill-l', cream: ' pill-cream', ghost: ' pill-ghost' }

export default function Pill({ children, variant = 'dark', small, icon: Icon, href, type = 'button', disabled, className = '', onClick }: Props) {
  const cls = `pill${VARIANT[variant]}${small ? ' pill-sm' : ''}${className ? ' ' + className : ''}`
  const dot = Icon && (
    <span className="pill-dot"><Icon size={small ? 14 : 16} aria-hidden="true" /></span>
  )
  if (href !== undefined) {
    return <SmartLink className={cls} href={href} onClick={onClick}>{children}{dot}</SmartLink>
  }
  return <button className={cls} type={type} disabled={disabled} onClick={onClick}>{children}{dot}</button>
}
