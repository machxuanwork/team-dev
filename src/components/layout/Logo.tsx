import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden>
      <rect width="32" height="32" rx="10" fill="#1E1C19" />
      <path d="M11 11l6 5-6 5" fill="none" stroke="#FBF8F3" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18.5" y="20" width="5.5" height="2.6" rx="1.3" fill="#D9532B" />
    </svg>
  )
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${siteConfig.name} — về trang chủ`}>
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[-8deg]" />
      <span className={cn("font-heading text-[22px] leading-none font-semibold tracking-tight", light ? "text-background" : "text-foreground")}>
        {siteConfig.name}
      </span>
    </Link>
  )
}
