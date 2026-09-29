import { stats } from "@/data/content"
import { CountUp } from "@/components/motion/CountUp"
import { Reveal } from "@/components/motion/Reveal"

export function Stats() {
  return (
    <section aria-label="Con số nổi bật" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 text-background md:px-14 md:py-16">
          <div className="pointer-events-none absolute -top-32 -right-24 size-[420px] animate-blob rounded-full bg-brand/30 blur-[100px]" aria-hidden />
          <div className="bg-dots-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom_right,black,transparent_60%)]" aria-hidden />
          <dl className="relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="border-l border-background/15 pl-6">
                <dd className="font-heading text-5xl font-medium tracking-tight md:text-7xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 text-[15px] text-background/60">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  )
}
