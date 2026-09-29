"use client"

import { useEffect, useRef, useState } from "react"

type Props = { value: number; suffix?: string; duration?: number }

/** Đếm số mượt khi cuộn tới. Giá trị cuối luôn có trong HTML ban đầu để SEO/no-JS vẫn đọc đúng. */
export function CountUp({ value, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          setN(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        setN(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}
