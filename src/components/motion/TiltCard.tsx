"use client"

import type { MouseEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Thẻ nghiêng 3D theo vị trí chuột, kèm vệt sáng. Chỉ hoạt động với chuột. */
export function TiltCard({ children, className, max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty("--rx", String(x * max * 2))
    el.style.setProperty("--ry", String(y * max * 2))
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
  }
  const reset = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0")
    e.currentTarget.style.setProperty("--ry", "0")
  }
  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className={cn("tilt", className)}>
      {children}
    </div>
  )
}
