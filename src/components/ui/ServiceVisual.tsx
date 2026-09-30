import { cn } from "@/lib/utils"

export function ServiceVisual({ slug, className }: { slug: string; className?: string }) {
  const base = "relative h-28 overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 " + (className ?? "")
  switch (slug) {
    case "web":
      return (
        <div className={base} aria-hidden>
          <div className="flex items-center gap-1 border-b border-black/5 px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-[#ff5f57]" />
            <span className="size-1.5 rounded-full bg-[#febc2e]" />
            <span className="size-1.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-3 p-3">
            <div className="space-y-2">
              <div className="h-2.5 w-3/4 rounded bg-foreground/70" />
              <div className="h-2 w-full animate-pulse rounded bg-foreground/10" />
              <div className="h-2 w-5/6 animate-pulse rounded bg-foreground/10 [animation-delay:200ms]" />
              <div className="h-5 w-16 rounded-full bg-brand" />
            </div>
            <div className="rounded-lg bg-gradient-to-br from-brand-soft to-sage" />
          </div>
        </div>
      )
    case "mobile":
      return (
        <div className={cn(base, "flex items-end justify-center gap-3 px-4 pt-3")} aria-hidden>
          {[0, 1, 2].map((i) => (
            <div key={i} className={cn("w-1/4 rounded-t-2xl bg-ink p-1 pb-0 transition-transform duration-500 group-hover:-translate-y-2", i === 1 && "h-[110%] group-hover:-translate-y-3")} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="h-full rounded-t-xl bg-background p-1.5">
                <div className="mb-1 h-4 rounded bg-sage" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/20" />
              </div>
            </div>
          ))}
        </div>
      )
    case "design":
      return (
        <div className={cn(base, "flex items-center justify-center gap-2")} aria-hidden>
          {["#D9532B", "#F3C0A6", "#DCE6D5", "#1E1C19", "#DDE7F0"].map((c, i) => (
            <span key={c} className="size-9 rounded-full ring-2 ring-white transition-transform duration-500 group-hover:-translate-y-1.5" style={{ background: c, transitionDelay: `${i * 50}ms` }} />
          ))}
          <svg viewBox="0 0 20 20" className="absolute right-[22%] bottom-3 size-6 text-ink transition-transform duration-700 group-hover:-translate-x-6 group-hover:-translate-y-3" fill="currentColor">
            <path d="M3 2l14 7-6 2-2 6z" />
          </svg>
        </div>
      )
    case "cloud":
      return (
        <div className={cn(base, "flex items-center justify-center")} aria-hidden>
          <svg viewBox="0 0 240 90" className="h-full w-full">
            <g stroke="#25476a" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
              <path d="M40 45 L120 20 L200 45 M40 45 L120 70 L200 45 M120 20 L120 70" />
            </g>
            {[[40, 45], [120, 20], [120, 70], [200, 45]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="9" fill="#25476a" opacity=".15" className="origin-center animate-pulse" style={{ transformBox: "fill-box", animationDelay: `${i * 300}ms` }} />
                <circle cx={x} cy={y} r="5" fill={i === 1 ? "#D9532B" : "#25476a"} />
              </g>
            ))}
          </svg>
        </div>
      )
    case "ai":
      return (
        <div className={cn(base, "space-y-2 p-3")} aria-hidden>
          <div className="w-3/4 rounded-2xl rounded-bl-sm bg-secondary px-3 py-1.5 text-[11px]">Tóm tắt giúp mình hợp đồng này?</div>
          <div className="ml-auto flex w-fit items-center gap-1 rounded-2xl rounded-br-sm bg-ink px-3 py-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-1.5 animate-bounce rounded-full bg-background/80" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        </div>
      )
    default:
      return (
        <div className={cn(base, "flex flex-col justify-center gap-2 px-4")} aria-hidden>
          <div className="flex items-center justify-between text-[11px] font-medium">
            <span>Uptime 30 ngày</span>
            <span className="text-sage-ink">99,98%</span>
          </div>
          <div className="flex gap-[3px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className={cn("h-7 flex-1 rounded-[3px]", i === 17 ? "bg-[#e8a317]" : "bg-sage-ink/70")} />
            ))}
          </div>
        </div>
      )
  }
}
