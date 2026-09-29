import { Check, Minus } from "lucide-react"
import { comparison, credentials } from "@/data/content"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/config/site"

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Vì sao chọn chúng tôi"
        title={
          <>
            Khác biệt nằm ở <span className="italic text-brand-ink">cách làm việc</span>
          </>
        }
        description="Ai cũng nói mình chuyên nghiệp. Đây là những điều bạn sẽ thật sự cảm nhận được khi làm cùng tụi mình."
      />

      <Reveal className="mt-14" variant="scale">
        <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-border">
          <div className="grid grid-cols-[0.6fr_1fr_1fr] border-b border-border bg-sand/60 text-sm font-medium max-md:hidden">
            <div className="p-5" />
            <div className="flex items-center gap-2 p-5 text-brand-ink">
              <span className="size-2 rounded-full bg-brand" /> {siteConfig.name}
            </div>
            <div className="p-5 text-muted-foreground">Thường gặp ở nơi khác</div>
          </div>
          {comparison.map((row) => (
            <div key={row.topic} className="grid gap-y-2 border-b border-border p-5 last:border-b-0 md:grid-cols-[0.6fr_1fr_1fr] md:gap-0 md:p-0">
              <div className="font-mono text-xs tracking-wider text-muted-foreground uppercase md:p-5 md:pt-6">{row.topic}</div>
              <div className="flex items-start gap-3 md:p-5 md:pt-5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sage text-sage-ink">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <p className="font-medium">{row.us}</p>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground md:p-5 md:pt-5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary">
                  <Minus className="size-3.5" aria-hidden />
                </span>
                <p>{row.others}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 80} className="list-none rounded-2xl bg-sand px-5 py-4">
            <p className="font-heading text-lg font-medium">{c.title}</p>
            <p className="text-sm text-muted-foreground">{c.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
