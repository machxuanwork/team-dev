import {
  Cloud,
  Globe,
  Layers,
  MessagesSquare,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react"
import type { IconName } from "@/data/content"

const map = {
  globe: Globe,
  smartphone: Smartphone,
  palette: Palette,
  cloud: Cloud,
  sparkles: Sparkles,
  shield: ShieldCheck,
  search: Search,
  layers: Layers,
  zap: Zap,
  messages: MessagesSquare,
  rocket: Rocket,
  wrench: Wrench,
} satisfies Record<IconName, React.ComponentType<LucideProps>>

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name]
  return <C aria-hidden {...props} />
}
