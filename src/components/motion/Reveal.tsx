"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  /** Độ trễ (ms) — dùng để các phần tử xuất hiện lần lượt, nhẹ nhàng */
  delay?: number
  variant?: "up" | "left" | "scale"
  as?: "div" | "li" | "section" | "article"
}

const variantClass = { up: "reveal", left: "reveal-left", scale: "reveal-scale" } as const

/** Hiện dần khi cuộn tới. Nếu tắt JS hoặc bật "giảm chuyển động", nội dung vẫn hiển thị bình thường. */
export function Reveal({ children, className, delay = 0, variant = "up", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(variantClass[variant], shown && "is-in", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
