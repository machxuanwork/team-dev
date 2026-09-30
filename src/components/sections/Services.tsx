import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { services } from "@/data/content"
import { Icon } from "@/components/ui/Icon"
import { ServiceVisual } from "@/components/ui/ServiceVisual"
import { Reveal } from "@/components/motion/Reveal"
import { SpotlightCard } from "@/components/motion/SpotlightCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"

const toneBg: Record<string, string> = {
  sand: "bg-sand",
  sage: "bg-sage/70",
  brand: "bg-brand-soft",
  sky: "bg-sky/80",
}
const toneIcon: Record<string, string> = {
  sand: "text-foreground",
  sage: "text-sage-ink",
  brand: "text-brand-ink",
  sky: "text-[#25476a]",
}

const span: Record<string, string> = { web: "lg:col-span-2", cloud: "lg:col-span-2", ai: "lg:col-span-2" }

export function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section id="dich-vu" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {!compact && (
        <SectionHeading
          eyebrow="Dịch vụ"
          title={
            <>
              Mọi thứ bạn cần để sản phẩm <span className="italic text-brand-ink">đứng vững</span> trên thị trường
            </>
          }
          description="Từ bản vẽ đầu tiên đến lúc vận hành hằng ngày, một team duy nhất lo trọn — để bạn không phải làm việc với ba bốn bên khác nhau."
        />
      )}

      <ul className={cn("grid gap-5 md:grid-cols-2 lg:grid-cols-3", !compact && "mt-14")}>
        {services.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={(i % 3) * 90} className={cn("list-none", span[s.slug])}>
            <SpotlightCard className={cn("group flex h-full flex-col rounded-3xl p-7 ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-35px_rgba(30,28,25,0.4)] md:p-8", toneBg[s.tone])}>
              <div className="flex items-start justify-between">
                <span className={cn("grid size-12 place-items-center rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110", toneIcon[s.tone])}>
                  <Icon name={s.icon} className="size-6" strokeWidth={1.75} />
                </span>
                <Link
                  href={`/services/${s.slug}`}
                  aria-label={`Xem chi tiết dịch vụ ${s.title}`}
                  className="grid size-10 place-items-center rounded-full bg-white/70 opacity-0 ring-1 ring-black/5 transition-all duration-300 group-hover:opacity-100 hover:bg-ink hover:text-background focus-visible:opacity-100"
                >
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
              <h3 className="mt-7 text-2xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-1 font-medium text-foreground/70">{s.short}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2.5 text-[15px]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-ink" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <ServiceVisual slug={s.slug} />
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
