import Image from "next/image"
import { tones, type Tone } from "@/lib/tones"
import { cn } from "@/lib/utils"

export type CoverVariant = "browser" | "phone" | "dashboard" | "map" | "calendar" | "editorial"

type Props = { title: string; tone?: Tone; image?: string; variant?: CoverVariant; className?: string; label?: string }

function Chrome({ children, url = "khachhang.vn" }: { children: React.ReactNode; url?: string }) {
  return (
    <div
      className="absolute inset-x-[7%] top-[13%] bottom-[-14%] overflow-hidden rounded-2xl bg-background shadow-[0_40px_80px_-24px_rgba(30,28,25,0.55)] ring-1 ring-black/5 transition-transform duration-[900ms] ease-out group-hover:-translate-y-2"
      aria-hidden
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-white/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded-full bg-secondary px-4 py-0.5 font-mono text-[9px] text-muted-foreground">{url}</span>
      </div>
      {children}
    </div>
  )
}

export function Cover({ title, tone = "warm", image, variant = "browser", className, label }: Props) {
  const t = tones[tone]
  if (image) {
    return <Image src={image} alt={`Ảnh dự án ${title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className={cn("object-cover", className)} />
  }

  return (
    <div
      role="img"
      aria-label={`Minh hoạ giao diện dự án ${title}`}
      className={cn("group relative size-full overflow-hidden bg-gradient-to-br [container-type:size]", t.gradient, className)}
    >
      <div className="absolute -top-16 -right-16 size-72 rounded-full bg-white/30 blur-3xl" aria-hidden />
      <div className="bg-dots absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />

      {variant === "editorial" && (
        <div className="absolute inset-0 flex flex-col justify-between p-[7%]" aria-hidden>
          <span className="w-fit rounded-full bg-white/60 px-3 py-1 font-mono text-[10px] tracking-widest uppercase" style={{ color: t.ink }}>
            {label ?? "Blog"}
          </span>
          <p className="max-w-[85%] font-heading text-[clamp(1.1rem,3.4cqw,2.2rem)] leading-[1.1] font-medium tracking-tight italic" style={{ color: t.ink }}>
            {title}
          </p>
        </div>
      )}

      {variant === "phone" && (
        <div className="absolute inset-x-0 bottom-0 flex translate-y-[7%] items-end justify-center gap-[4%] px-6" aria-hidden>
          {[0, 1].map((i) => (
            <div
              key={i}
              className={cn(
                "w-[min(38%,_40cqh)] rounded-[2.2rem] bg-ink p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-[900ms] ease-out",
                i === 1 ? "translate-y-[14%] group-hover:translate-y-[18%]" : "group-hover:-translate-y-3"
              )}
            >
              <div className="aspect-[9/18] overflow-hidden rounded-[1.8rem] bg-background p-3">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-foreground/15" />
                <div className="mb-3 flex items-center justify-between">
                  <div className="h-2.5 w-14 rounded bg-foreground/25" />
                  <div className="size-5 rounded-full" style={{ background: t.solid }} />
                </div>
                <div className="relative mb-3 h-20 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(135deg, ${t.solid}, ${t.ink})` }}>
                  <div className="absolute -right-3 -bottom-3 size-16 rounded-full bg-white/30" />
                  <div className="absolute top-2.5 left-2.5 h-2 w-12 rounded bg-white/70" />
                  <div className="absolute top-6 left-2.5 h-1.5 w-8 rounded bg-white/40" />
                </div>
                {[0, 1, 2].map((k) => (
                  <div key={k} className="mb-2 flex items-center gap-2 rounded-xl bg-secondary p-2">
                    <div className="size-8 shrink-0 rounded-lg" style={{ background: t.solid, opacity: 1 - k * 0.15 }} />
                    <div className="flex-1 space-y-1">
                      <div className="h-1.5 w-3/4 rounded bg-foreground/20" />
                      <div className="h-1.5 w-1/3 rounded" style={{ background: t.ink, opacity: 0.5 }} />
                    </div>
                  </div>
                ))}
                <div className="mt-3 h-8 rounded-full bg-ink" />
              </div>
            </div>
          ))}
        </div>
      )}

      {variant === "phone" && (
        <>
          <div className="absolute top-[20%] left-[9%] hidden animate-float-slow rounded-2xl bg-white p-4 shadow-[0_25px_50px_-20px_rgba(30,28,25,0.4)] ring-1 ring-black/5 [@container(min-width:640px)]:block" style={{ "--r": "-2deg" } as React.CSSProperties} aria-hidden>
            <p className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">Đơn #2841</p>
            <p className="mt-1 text-sm font-semibold">Đang giao · 12 phút</p>
            <div className="mt-3 h-1.5 w-40 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-2/3 rounded-full" style={{ background: t.ink }} />
            </div>
          </div>
          <div className="absolute right-[9%] bottom-[24%] hidden animate-float rounded-2xl bg-ink p-4 text-background shadow-[0_25px_50px_-20px_rgba(0,0,0,0.55)] [@container(min-width:640px)]:block" style={{ "--r": "2deg" } as React.CSSProperties} aria-hidden>
            <p className="font-heading text-3xl leading-none font-medium">4.8★</p>
            <p className="mt-1.5 text-[11px] text-background/60">2.140 đánh giá</p>
          </div>
        </>
      )}

      {variant === "browser" && (
        <Chrome url="moclam.vn">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-3.5 w-16 rounded bg-foreground/30" />
              <div className="flex gap-2">
                {[10, 8, 9].map((w, i) => (
                  <div key={i} className="h-2 rounded bg-foreground/12" style={{ width: `${w * 4}px` }} />
                ))}
                <div className="size-4 rounded-full bg-ink" />
              </div>
            </div>
            <div className="relative mb-3 h-[28%] min-h-24 overflow-hidden rounded-xl" style={{ background: `linear-gradient(120deg, ${t.solid}, ${t.ink}aa)` }}>
              <div className="absolute top-4 left-4 space-y-2">
                <div className="h-3 w-28 rounded bg-white/85" />
                <div className="h-3 w-20 rounded bg-white/85" />
                <div className="mt-3 h-6 w-20 rounded-full bg-white" />
              </div>
              <div className="absolute right-6 bottom-0 h-[80%] w-24 rounded-t-3xl bg-white/25" />
              <div className="absolute right-16 bottom-0 h-[55%] w-16 rounded-t-2xl bg-white/35" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="mb-1.5 aspect-square rounded-xl" style={{ background: t.solid, opacity: 0.55 + i * 0.1 }} />
                  <div className="mb-1 h-1.5 w-3/4 rounded bg-foreground/20" />
                  <div className="h-1.5 w-1/3 rounded" style={{ background: t.ink, opacity: 0.6 }} />
                </div>
              ))}
            </div>
          </div>
        </Chrome>
      )}

      {variant === "dashboard" && (
        <Chrome url="app.khachhang.vn">
          <div className="flex h-full">
            <div className="hidden w-[16%] shrink-0 space-y-2 border-r border-border bg-white/50 p-3 sm:block">
              <div className="mb-3 size-5 rounded-md bg-ink" />
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={cn("h-2 rounded", i === 0 ? "bg-foreground/40" : "bg-foreground/10")} />
              ))}
            </div>
            <div className="flex-1 p-4">
              <div className="grid grid-cols-3 gap-3">
                {["+24%", "1.2k", "98%"].map((v, i) => (
                  <div key={i} className="rounded-xl bg-secondary p-3">
                    <div className="mb-2 h-1.5 w-1/2 rounded bg-foreground/15" />
                    <div className="font-heading text-lg leading-none font-semibold" style={{ color: t.ink }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-secondary p-3">
                <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`g-${tone}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor={t.ink} stopOpacity=".35" />
                      <stop offset="1" stopColor={t.ink} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 70 C30 60 45 30 75 42 S120 75 150 45 S200 8 230 28 S280 20 300 10 V90 H0Z" fill={`url(#g-${tone})`} />
                  <path d="M0 70 C30 60 45 30 75 42 S120 75 150 45 S200 8 230 28 S280 20 300 10" fill="none" stroke={t.ink} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="mt-3 space-y-1.5">
                {[0, 1].map((i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-secondary/70 px-2.5 py-1.5">
                    <div className="size-4 rounded" style={{ background: t.solid }} />
                    <div className="h-1.5 w-1/3 rounded bg-foreground/20" />
                    <div className="ml-auto h-1.5 w-8 rounded" style={{ background: t.ink, opacity: 0.45 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Chrome>
      )}

      {variant === "map" && (
        <Chrome url="fleet.luavang.vn">
          <div className="relative h-full bg-[#eef0e9]">
            <svg viewBox="0 0 400 260" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round">
                <path d="M-10 190 C80 150 140 210 220 150 S340 90 420 120" />
                <path d="M60 -10 C90 60 60 120 130 170 S190 260 200 280" />
                <path d="M300 -10 C280 60 330 110 300 170 S330 240 350 280" />
              </g>
              <g fill="none" stroke={t.ink} strokeOpacity=".35" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round">
                <path d="M-10 190 C80 150 140 210 220 150 S340 90 420 120" />
              </g>
              {[
                [90, 168], [160, 190], [225, 148], [305, 108], [130, 60], [310, 200], [60, 110],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="14" fill={t.ink} opacity=".15" />
                  <circle cx={x} cy={y} r="6" fill={i % 3 === 0 ? "#D9532B" : t.ink} stroke="#fff" strokeWidth="2" />
                </g>
              ))}
            </svg>
            <div className="absolute top-3 left-3 space-y-1.5 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur">
              <div className="h-2 w-20 rounded bg-foreground/30" />
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#28c840]" />
                <div className="h-1.5 w-14 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-brand" />
                <div className="h-1.5 w-10 rounded bg-foreground/15" />
              </div>
            </div>
          </div>
        </Chrome>
      )}

      {variant === "calendar" && (
        <Chrome url="app.sotay.vn">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-3 w-24 rounded bg-foreground/30" />
              <div className="flex gap-1.5">
                <div className="size-5 rounded-md bg-secondary" />
                <div className="size-5 rounded-md bg-secondary" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1.5 text-center">
              {Array.from({ length: 28 }).map((_, i) => {
                const busy = [3, 4, 9, 11, 16, 17, 18, 23].includes(i)
                return (
                  <div key={i} className={cn("aspect-[4/3] rounded-lg", busy ? "" : "bg-secondary")} style={busy ? { background: t.solid } : undefined}>
                    {busy && <div className="mx-auto mt-2 h-1 w-3/5 rounded" style={{ background: t.ink, opacity: 0.55 }} />}
                  </div>
                )
              })}
            </div>
          </div>
        </Chrome>
      )}
    </div>
  )
}
