import { Check, GitBranch, Star, Zap } from "lucide-react"
import { siteConfig } from "@/config/site"
import { team } from "@/data/content"
import { Avatar } from "@/components/ui/Avatar"
import { LinkButton } from "@/components/ui/link-button"
import { Words } from "@/components/motion/Words"
import { ParallaxStage } from "@/components/motion/ParallaxStage"

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties
const depth = (n: number, extra: React.CSSProperties = {}) => ({ "--depth": n, ...extra }) as React.CSSProperties

/** Hình minh hoạ sản phẩm ở hero — vẽ bằng HTML/SVG, có chuyển động thật (biểu đồ mọc, terminal gõ chữ, parallax). */
function HeroVisual() {
  return (
    <ParallaxStage className="parallax-up relative mx-auto aspect-[1/1] w-full max-w-[600px] sm:aspect-[5/4.6]">
      <div aria-hidden className="absolute inset-0">
        {/* Nền hình khối */}
        <div className="layer absolute inset-[4%] rounded-[3rem] bg-gradient-to-br from-brand-soft via-[#f7e6d3] to-sage" style={depth(-6)} />
        <div className="bg-dots absolute inset-[4%] rounded-[3rem] [mask-image:radial-gradient(circle_at_70%_30%,black,transparent_70%)]" />

        {/* Huy hiệu chữ quay tròn */}
        <div className="layer absolute top-[-2%] left-[-1%] hidden size-28 sm:block" style={depth(18)}>
          <svg viewBox="0 0 100 100" className="size-full animate-[spin-slow_22s_linear_infinite]">
            <defs>
              <path id="circ" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
            </defs>
            <text fontSize="9" fill="#1E1C19" className="font-mono">
              <textPath href="#circ" textLength="232" lengthAdjust="spacing">SẴN SÀNG • BẮT ĐẦU • NÀO •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 m-auto grid size-10 place-items-center rounded-full bg-ink text-background">
            <Zap className="size-4" />
          </span>
        </div>

        {/* Cửa sổ dashboard chính */}
        <div className="layer absolute top-[13%] left-[5%] w-[76%]" style={depth(8)}>
          <div className="rise-float-slow rounded-2xl bg-white shadow-[0_50px_100px_-30px_rgba(30,28,25,0.5)] ring-1 ring-black/5" style={{ ...d(350), "--r": "-1deg" } as React.CSSProperties}>
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="mx-auto flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1 font-mono text-[9px] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-[#28c840]" /> app.khachhang.vn
              </span>
            </div>
            <div className="flex">
              <div className="hidden w-[15%] shrink-0 space-y-2.5 border-r border-border p-3 sm:block">
                <div className="mb-4 size-5 rounded-md bg-ink" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-2 rounded ${i === 0 ? "bg-brand" : "bg-foreground/10"}`} />
                ))}
              </div>
              <div className="flex-1 p-4">
                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground">Doanh thu tháng này</p>
                    <p className="font-heading text-2xl leading-none font-semibold">
                      482 <span className="text-sm font-normal text-muted-foreground">triệu</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-sage px-2 py-0.5 font-mono text-[10px] font-medium text-sage-ink">↑ 24,6%</span>
                </div>
                <div className="flex h-24 items-end gap-1.5 rounded-xl bg-secondary px-3 pt-3 pb-2">
                  {[38, 52, 44, 68, 55, 80, 62, 92, 74, 100].map((h, i) => (
                    <div key={i} className="bar flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 9 ? "#D9532B" : "#E9C9B8", "--d": `${700 + i * 90}ms` } as React.CSSProperties} />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["Đơn hàng", "Khách mới", "Đánh giá"].map((l, i) => (
                    <div key={l} className="rounded-lg bg-secondary/80 p-2">
                      <p className="text-[9px] text-muted-foreground">{l}</p>
                      <p className="text-sm font-semibold">{["1.284", "+312", "4,9★"][i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Điện thoại */}
        <div className="layer absolute right-[1%] bottom-[8%] w-[27%]" style={depth(26)}>
          <div className="rise-float w-full rounded-[1.6rem] bg-ink p-1 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.6)]" style={{ ...d(600), "--r": "3deg" } as React.CSSProperties}>
            <div className="aspect-[9/17.5] overflow-hidden rounded-[1.3rem] bg-background p-2">
              <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-foreground/15" />
              <div className="mb-2 h-14 rounded-xl bg-gradient-to-br from-brand to-[#f0a07f]" />
              {[0, 1, 2].map((i) => (
                <div key={i} className="mb-1.5 flex items-center gap-1.5 rounded-lg bg-secondary p-1.5">
                  <div className="size-5 rounded-md bg-sage" />
                  <div className="space-y-1">
                    <div className="h-1 w-10 rounded bg-foreground/25" />
                    <div className="h-1 w-6 rounded bg-foreground/12" />
                  </div>
                </div>
              ))}
              <div className="mt-2 h-6 rounded-full bg-ink" />
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="layer absolute bottom-[3%] left-[0%] w-[58%]" style={depth(20)}>
          <div className="rise-float overflow-hidden rounded-2xl bg-[#1b1a17] font-mono text-[11px] leading-relaxed text-background shadow-[0_40px_80px_-25px_rgba(0,0,0,0.65)] ring-1 ring-white/10" style={{ ...d(800), "--r": "-2deg" } as React.CSSProperties}>
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <GitBranch className="ml-2 size-3 text-white/40" />
              <span className="text-[10px] text-white/65">main</span>
            </div>
            <div className="space-y-1 p-3">
              <p className="type-line" style={d(1300)}>
                <span className="text-brand">$</span> git push origin main
              </p>
              <p className="type-line text-white/60" style={d(2100)}>
                ✓ 128 tests passed
              </p>
              <p className="type-line text-white/60" style={d(2700)}>
                ✓ Lighthouse 100/100
              </p>
              <p className="type-line text-[#7ed99a]" style={d(3300)}>
                ✓ Deployed in 42s
                <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-brand [animation:blink_1s_steps(1)_infinite]" />
              </p>
            </div>
          </div>
        </div>

        {/* Điểm Lighthouse */}
        <div className="layer absolute top-[1%] right-[2%]" style={depth(34)}>
          <div className="rise-float rounded-2xl bg-white p-3.5 shadow-[0_30px_60px_-20px_rgba(30,28,25,0.45)] ring-1 ring-black/5" style={{ ...d(500), "--r": "4deg" } as React.CSSProperties}>
            <div className="flex items-center gap-3">
              <div className="relative size-14">
                <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#DCE6D5" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#3E5B3A" strokeWidth="3.5" strokeLinecap="round" pathLength="100" className="draw-path" style={{ strokeDasharray: 100, strokeDashoffset: 100, ...d(900) } as React.CSSProperties} />
                </svg>
                <span className="absolute inset-0 grid place-items-center font-heading text-lg font-semibold text-sage-ink">100</span>
              </div>
              <div>
                <p className="flex items-center gap-1 text-[11px] font-medium">
                  <Zap className="size-3 text-brand" /> Hiệu năng
                </p>
                <p className="text-[10px] text-muted-foreground">Core Web Vitals: Đạt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thẻ ra mắt */}
        <div className="layer absolute top-[47%] left-[-5%]" style={depth(14)}>
          <div className="rise-float-slow flex items-center gap-2.5 rounded-2xl bg-ink py-2.5 pr-4 pl-2.5 text-background shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" style={{ ...d(1000), "--r": "-2deg" } as React.CSSProperties}>
            <span className="grid size-8 place-items-center rounded-full bg-[#7ed99a]/20 text-[#7ed99a]">
              <Check className="size-4" />
            </span>
            <div>
              <p className="text-[12px] leading-tight font-medium">Đã ra mắt đúng hẹn</p>
              <p className="text-[10px] text-background/50">Sprint 6 · 0 lỗi nghiêm trọng</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxStage>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="parallax-slow pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -left-40 size-[620px] animate-blob rounded-full bg-brand-soft blur-[100px]" />
        <div className="absolute top-32 -right-48 size-[560px] animate-blob rounded-full bg-sage blur-[110px]" style={{ animationDelay: "-8s" }} />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_65%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="min-w-0">
          <p className="rise inline-flex items-center gap-2.5 rounded-full bg-white/80 py-1.5 pr-4 pl-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur" style={d(0)}>
            <span className="relative grid size-3 place-items-center">
              <span className="absolute size-3 rounded-full bg-sage-ink [animation:ping-dot_2s_ease-out_infinite]" />
              <span className="relative size-2 rounded-full bg-sage-ink" />
            </span>
            Đang nhận thêm 2 dự án cho quý này
          </p>

          <h1 className="mt-7 text-[2.3rem] leading-[1.05] font-medium tracking-[-0.02em] sm:text-6xl xl:text-[4.3rem]">
            <span className="block">
              <Words text="Phần mềm làm" delay={0} step={50} />
            </span>
            <span className="block sm:whitespace-nowrap">
              <span className="relative inline-block italic">
                <Words text="như đồ thủ công," delay={160} step={50} className="text-brand-ink" />
                <svg className="draw-line absolute -bottom-1 left-0 h-3 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" fill="none" aria-hidden>
                  <path d="M3 8c60-6 150-8 294-2" stroke="#D9532B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
                </svg>
              </span>
            </span>
            <span className="block">
              <Words text="kỹ, đẹp và dùng bền." delay={380} step={50} />
            </span>
          </h1>

          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl" style={d(450)}>
            {siteConfig.name} là studio nhỏ gồm 18 kỹ sư và designer ở TP. Hồ Chí Minh. Tụi mình cùng bạn biến ý tưởng thành website, ứng dụng chạy thật — nhanh, gọn và không có bất ngờ khó chịu.
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={d(550)}>
            <LinkButton href="/contact" variant="brand" size="lg" arrow>
              Kể tụi mình nghe dự án
            </LinkButton>
            <LinkButton href="/projects" variant="ghost" size="lg">
              Xem dự án đã làm
            </LinkButton>
          </div>

          <div className="rise mt-12 flex flex-wrap items-center gap-x-8 gap-y-5" style={d(650)}>
            <div className="flex items-center gap-4">
              <ul className="flex -space-x-3" aria-label="Một số thành viên trong team">
                {team.slice(0, 5).map((m) => (
                  <li key={m.name} className="size-11 overflow-hidden rounded-full ring-[3px] ring-background">
                    <Avatar name={m.name} tone={m.tone as never} image={m.image} compact />
                  </li>
                ))}
              </ul>
              <div>
                <div role="img" className="flex gap-0.5 text-[#e8a317]" aria-label="Đánh giá 4.9 trên 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  <strong className="font-semibold text-foreground">4.9/5</strong> từ hơn 60 khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
