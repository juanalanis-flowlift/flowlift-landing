import {
  Banknote, BarChart3, Bell, BellRing, BookUser, CalendarDays, Cookie, Coins, CreditCard, Globe, History, Image, Languages, Layers,
  LifeBuoy, Mail, MapPin, MessageSquare, Moon, QrCode, ReceiptText, RefreshCw, ShieldCheck, SlidersHorizontal, Smartphone, Sparkles, Store, Undo2, Users, Clock,
  type LucideIcon,
} from 'lucide-react'

// Los íconos de los contenidos se piden por nombre (todos de Lucide).
const ICONS: Record<string, LucideIcon> = {
  Banknote, BarChart3, Bell, BellRing, BookUser, CalendarDays, Cookie, Coins, CreditCard, Globe, History, Image, Languages, Layers,
  LifeBuoy, Mail, MapPin, MessageSquare, Moon, QrCode, ReceiptText, RefreshCw, ShieldCheck, SlidersHorizontal, Smartphone, Sparkles, Store, Undo2, Users, Clock,
}

export default function NamedIcon({ name, size = 22 }: { name: string; size?: number }) {
  const I = ICONS[name] ?? Sparkles
  return <I size={size} aria-hidden="true" />
}
