"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hiển thị chỉ số như "+38%", "1.2s", "400+", "4.8★" và đếm lên khi cuộn tới.
 * Giá trị không đếm được (vd. "4 → 1") được hiển thị nguyên. Giá trị cuối luôn nằm trong HTML gốc.
 */
export function AnimatedValue({ value, duration = 1600 }: { value: string; duration?: number }) {
  const m = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/.exec(value)
  const [prefix, numStr, suffix] = m && !value.includes("→") ? [m[1], m[2], m[3]] : ["", "", ""]
  const target = Number(numStr)
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0

  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!el || !numStr) return
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setN(target * (1 - Math.pow(1 - t, 4)))
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
  }, [numStr, target, duration])

  if (!numStr) return <span>{value}</span>
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}
