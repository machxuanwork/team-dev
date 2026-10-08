import { Check, Clock, Wallet } from "lucide-react"
import { serviceDetails, services, processSteps } from "@/data/content"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBand } from "@/components/sections/CtaBand"
import { Icon } from "@/components/ui/Icon"
import { ServicePhoto } from "@/components/ui/ServicePhoto"
import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/motion/Reveal"
import { Faq } from "@/components/sections/Faq"

export const metadata = buildMetadata({
  title: "Dịch vụ phát triển website, app, UI/UX, Cloud, AI",
  description: `Dịch vụ thiết kế website, phát triển ứng dụng di động, UI/UX, cloud/DevOps, tích hợp AI và bảo trì của ${siteConfig.name}. Quy trình rõ ràng, báo giá minh bạch.`,
  path: "/services",
  image: siteConfig.ogImage,
})

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@id": absoluteUrl("/#organization") },
      areaServed: "VN",
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <PageHero
        crumbs={[{ name: "Dịch vụ", href: "/services" }]}
        eyebrow="Dịch vụ"
        title="Một team lo trọn từ ý tưởng đến"
        accent="vận hành"
        description="Sáu mảng dịch vụ bổ trợ cho nhau. Bạn có thể chọn từng phần hoặc giao trọn gói — tụi mình đều làm với cùng một tiêu chuẩn."
      />

      <div className="mx-auto max-w-6xl space-y-6 px-6 pb-24">
        {services.map((s, i) => {
          const d = serviceDetails[s.slug]
          return (
            <Reveal as="section" key={s.slug} className="scroll-mt-28">
              <div id={s.slug} className={`group grid gap-10 rounded-[2rem] p-7 ring-1 ring-black/[0.04] md:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 ${["bg-sand", "bg-sage/60", "bg-brand-soft", "bg-sky/70", "bg-sand", "bg-sage/60"][i]}`}>
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-white shadow-sm">
                      <Icon name={s.icon} className="size-7 text-brand-ink" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-xs text-foreground/40">0{i + 1} / 0{services.length}</span>
                  </div>
                  <h2 className="mt-6 text-4xl font-medium tracking-tight">{s.title}</h2>
                  <p className="mt-2 text-lg font-medium text-foreground/70">{s.short}</p>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{s.description}</p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                        <Clock className="size-3.5" aria-hidden /> Thời gian
                      </p>
                      <p className="mt-1 font-medium">{d.timeline}</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                        <Wallet className="size-3.5" aria-hidden /> Chi phí
                      </p>
                      <p className="mt-1 font-medium">{d.from}</p>
                    </div>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {d.tech.map((t) => (
                      <li key={t} className="rounded-full bg-white/80 px-3.5 py-1.5 text-sm font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Bạn nhận được</h3>
                  <ul className="mt-5 space-y-3.5">
                    {d.deliverables.map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-brand-ink">
                          <Check className="size-3.5" aria-hidden />
                        </span>
                        <span className="text-[17px]">{x}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ServicePhoto slug={s.slug} />
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <LinkButton href={`/services/${s.slug}`} variant="primary" arrow>
                      Xem chi tiết
                    </LinkButton>
                    <LinkButton href="/contact" variant="ghost">
                      Nhận báo giá
                    </LinkButton>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <section className="bg-ink py-20 text-background md:py-24" aria-labelledby="flow">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="flow" className="max-w-xl text-4xl font-medium tracking-tight text-background md:text-5xl">
            Dịch vụ nào cũng đi qua <span className="italic text-brand">cùng một quy trình</span>
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-background/10 md:grid-cols-5">
            {processSteps.map((s) => (
              <li key={s.step} className="bg-ink p-6">
                <p className="font-mono text-sm text-brand">{s.step}</p>
                <h3 className="mt-4 text-lg font-medium text-background">{s.title}</h3>
                <p className="mt-2 text-sm text-background/50">{s.duration}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  )
}
