import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  as?: "h1" | "h2"
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light", as: H = "h2", className }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <p className={cn("mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] uppercase", tone === "dark" ? "text-[#f58b64]" : "text-brand-ink")}>
          <span className="h-px w-6 bg-current" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <H className={cn("text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl", tone === "dark" && "text-background")}>{title}</H>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-background/65" : "text-muted-foreground")}>{description}</p>
        </Reveal>
      )}
    </div>
  )
}
