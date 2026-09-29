import { techStack } from "@/data/content"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function TechStack() {
  return (
    <section aria-labelledby="tech-title" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div id="tech-title">
            <SectionHeading
              eyebrow="Công nghệ"
              title={
                <>
                  Chọn công cụ <span className="italic text-brand-ink">vì bạn</span>, không vì mốt
                </>
              }
              description="Tụi mình ưu tiên công nghệ phổ biến, có cộng đồng lớn — để sau này bạn dễ tuyển người, dễ bảo trì và không bị phụ thuộc vào ai."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((g, i) => (
              <Reveal key={g.group} delay={i * 90} className="rounded-3xl bg-white p-6 ring-1 ring-border">
                <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-full bg-sand px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-brand-soft hover:text-brand-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
