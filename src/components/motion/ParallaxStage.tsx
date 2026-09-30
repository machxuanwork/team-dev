"use client"

import { useRef, type PointerEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function ParallaxStage({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2))
    el.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2))
  }
  const reset = () => {
    ref.current?.style.setProperty("--px", "0")
    ref.current?.style.setProperty("--py", "0")
  }

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={cn(className)}>
      {children}
    </div>
  )
}
