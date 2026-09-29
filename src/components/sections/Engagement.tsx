import { Check } from "lucide-react"
import { engagementModels } from "@/data/content"
import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"

export function Engagement() {
  return (
    <section id="hop-tac" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Cách hợp tác"
        title={
          <>
            Chọn cách làm việc <span className="italic text-brand-ink">hợp với bạn</span>
          </>
        }
        description="Mỗi dự án một khác. Tụi mình linh hoạt về hình thức, nhưng nhất quán về chất lượng."
      />
      <ul className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
        {engagementModels.map((m, i) => (
          <Reveal as="li" key={m.title} delay={i * 100} className="list-none">
            <div className={cn("relative flex h-full flex-col rounded-3xl p-8 ring-1", m.highlight ? "bg-ink text-background ring-ink lg:-my-4 lg:py-12" : "bg-white ring-border")}>
              {m.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-ink px-3 py-1 font-mono text-[11px] font-medium tracking-wider text-white uppercase">Được chọn nhiều nhất</span>
              )}
              <h3 className="text-2xl font-medium tracking-tight">{m.title}</h3>
              <p className={cn("mt-1 font-mono text-xs tracking-wider uppercase", m.highlight ? "text-[#f58b64]" : "text-brand-ink")}>{m.for}</p>
              <p className={cn("mt-5 leading-relaxed", m.highlight ? "text-background/70" : "text-muted-foreground")}>{m.text}</p>
              <ul className="mt-7 flex-1 space-y-3 text-[15px]">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={cn("mt-0.5 size-4 shrink-0", m.highlight ? "text-brand" : "text-sage-ink")} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <LinkButton href="/contact" variant={m.highlight ? "brand" : "ghost"} arrow className="mt-9 w-full">
                Trao đổi thêm
              </LinkButton>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-10 text-center text-sm text-muted-foreground">Báo giá miễn phí, không ràng buộc. Chúng tôi chỉ nhận dự án khi chắc chắn mình làm tốt được.</p>
    </section>
  )
}
