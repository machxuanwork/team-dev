import { processSteps, principles } from "@/data/content"
import { Icon } from "@/components/ui/Icon"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function Process() {
  return (
    <section id="quy-trinh" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Quy trình"
            title={
              <>
                Rõ ràng từng bước, <span className="italic text-brand-ink">không bất ngờ</span>
              </>
            }
            description="Bạn luôn biết dự án đang ở đâu, tiếp theo là gì và cần bạn quyết định điều gì. Đó là cách tụi mình giữ lời hứa đúng hẹn."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="list-none rounded-2xl bg-white p-5 ring-1 ring-border">
                <Icon name={p.icon} className="mb-3 size-5 text-brand-ink" strokeWidth={1.75} />
                <h3 className="font-sans text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <ol className="relative space-y-4">
          <li role="presentation" aria-hidden className="absolute top-4 bottom-4 left-[27px] w-px list-none bg-border" />
          <li role="presentation" aria-hidden className="timeline-line absolute top-4 bottom-4 left-[26px] w-[3px] list-none rounded-full" />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 60} className="relative list-none pl-[76px]">
              <span className="absolute top-2 left-0 grid size-14 place-items-center rounded-full bg-background font-mono text-sm font-medium text-brand-ink ring-1 ring-border">
                {s.step}
              </span>
              <div className="rounded-3xl bg-white p-6 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(30,28,25,0.3)] md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-medium tracking-tight">{s.title}</h3>
                  <span className="rounded-full bg-sand px-3 py-1 font-mono text-xs text-muted-foreground">{s.duration}</span>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
