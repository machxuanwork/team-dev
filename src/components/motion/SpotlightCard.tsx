"use client"

import type { CSSProperties, MouseEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Thẻ có vệt sáng nhẹ đi theo con trỏ chuột — hiệu ứng tinh tế, không loè loẹt. */
export function SpotlightCard({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
  }
  return (
    <div onMouseMove={onMove} className={cn("spotlight", className)} style={style}>
      {children}
    </div>
  )
}
