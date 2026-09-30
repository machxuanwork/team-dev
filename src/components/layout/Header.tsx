"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"
import { LinkButton } from "@/components/ui/link-button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  const [openFor, setOpenFor] = useState<string | null>(null)
  const open = openFor === pathname

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)

      if (Math.abs(y - last) > 8) {
        setHidden(y > 240 && y > last)
        last = y
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", hidden && !open && "-translate-y-[120%]")}>
      <div className="scroll-progress absolute inset-x-0 top-0 h-[2px] bg-brand" aria-hidden />
      <div
        className={cn(
          "mx-auto mt-3 flex h-14 w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500 md:h-16 md:px-6",
          scrolled || open
            ? "bg-background/80 shadow-[0_8px_30px_-12px_rgba(30,28,25,0.18)] ring-1 ring-foreground/[0.06] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Logo />

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = item.href === pathname
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton href="/contact" variant="primary" className="hidden h-10 sm:inline-flex">
            Trao đổi dự án
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpenFor(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="grid size-10 place-items-center rounded-full ring-1 ring-foreground/10 transition hover:bg-foreground/5 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 -z-10 bg-background/95 pt-28 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav aria-label="Điều hướng di động" className="mx-auto flex max-w-6xl flex-col gap-1 px-6">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={cn(
                "border-b border-border py-4 font-heading text-3xl transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton href="/contact" variant="brand" size="lg" arrow className="mt-8">
            Trao đổi dự án
          </LinkButton>
        </nav>
      </div>
    </header>
  )
}
