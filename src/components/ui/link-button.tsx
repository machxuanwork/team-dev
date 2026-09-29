import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "brand" | "ghost" | "light"
  size?: "md" | "lg"
  arrow?: boolean
  className?: string
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">

const variants = {
  primary: "bg-ink text-background hover:bg-ink/90 shadow-[0_8px_24px_-8px_rgba(30,28,25,0.5)]",
  brand: "bg-brand text-white hover:bg-brand-ink shadow-[0_10px_30px_-10px_rgba(217,83,43,0.7)]",
  ghost: "bg-transparent text-foreground ring-1 ring-inset ring-foreground/15 hover:bg-foreground/[0.04] hover:ring-foreground/30",
  light: "bg-background text-ink hover:bg-white",
}

export function LinkButton({ href, children, variant = "primary", size = "md", arrow = false, className, ...rest }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group btn-shine inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none hover:-translate-y-0.5",
        "focus-visible:ring-4 focus-visible:ring-brand/30 active:scale-[0.98]",
        size === "md" ? "h-11 px-6 text-[15px]" : "h-14 px-8 text-base",
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </Link>
  )
}
