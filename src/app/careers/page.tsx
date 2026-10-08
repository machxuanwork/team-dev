import Link from "next/link"
import { ArrowUpRight, Inbox, MapPin } from "lucide-react"
import { benefits, hiringSteps, openings } from "@/data/content"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBand } from "@/components/sections/CtaBand"
import { Icon } from "@/components/ui/Icon"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = buildMetadata({
  title: "Tuyển dụng — Cùng làm phần mềm tử tế",
  description: `Thông tin tuyển dụng tại ${siteConfig.name}. Hiện chưa có vị trí nào đang mở, nhưng luôn chào đón hồ sơ gửi trước.`,
  path: "/careers",
  image: siteConfig.ogImage,
})

export default function CareersPage() {
  const jsonLd = openings.map((o) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: o.title,
    description: o.text,
    datePosted: "2026-09-01",
    employmentType: o.type === "Thực tập" ? "INTERN" : "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: siteConfig.name, sameAs: siteConfig.url },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: siteConfig.contact.city, addressCountry: "VN" } },
    url: absoluteUrl(`/careers#${o.slug}`),
  }))
  return (
    <>
      {jsonLd.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />}
      <PageHero
        crumbs={[{ name: "Tuyển dụng", href: "/careers" }]}
        eyebrow="Tuyển dụng"
        title="Đến làm phần mềm cùng những người"
        accent="tử tế"
        description="Tụi mình nhỏ nhưng tuyển kỹ. Nếu bạn thích làm sản phẩm thật, học nhanh và nói chuyện thẳng thắn — chỗ này có thể hợp với bạn."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20" aria-labelledby="benefits">
        <SectionHeading eyebrow="Quyền lợi" title={<span id="benefits">Điều bạn nhận được khi đồng hành</span>} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 3) * 90} className="group list-none rounded-3xl bg-white p-7 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(30,28,25,0.35)]">
              <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand-ink transition-transform duration-500 group-hover:rotate-[-8deg]">
                <Icon name={b.icon} className="size-6" strokeWidth={1.7} />
              </span>
              <h3 className="text-xl font-medium">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="vi-tri" className="bg-ink py-20 text-background md:py-28" aria-labelledby="openings">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading tone="dark" eyebrow="Vị trí đang mở" title={<span id="openings">Vị trí đang mở</span>} />
          {openings.length > 0 ? (
            <ul className="mt-12 divide-y divide-background/10 border-y border-background/10">
              {openings.map((o, i) => (
                <Reveal as="li" key={o.slug} delay={i * 60} className="list-none">
                  <div id={o.slug} className="group grid scroll-mt-28 items-center gap-4 py-8 md:grid-cols-[1.4fr_1fr_auto] md:gap-8">
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-background transition-colors group-hover:text-brand">{o.title}</h3>
                      <p className="mt-2 max-w-xl text-background/60">{o.text}</p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-sm text-background/75">
                        <MapPin className="size-4 text-brand" aria-hidden /> {o.place} · {o.type}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {o.tags.map((t) => (
                          <li key={t} className="rounded-full px-3 py-1 text-xs text-background/70 ring-1 ring-background/15">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`mailto:${siteConfig.contact.email}?subject=Ứng tuyển: ${encodeURIComponent(o.title)}`}
                      className="inline-flex h-12 items-center gap-2 justify-self-start rounded-full bg-background px-6 font-medium text-ink transition-all hover:bg-brand hover:text-white md:justify-self-end"
                    >
                      Ứng tuyển <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal className="mt-12 flex flex-col items-center gap-5 rounded-3xl border border-background/10 py-16 text-center">
              <span className="grid size-14 place-items-center rounded-2xl bg-background/10 text-background/70">
                <Inbox className="size-6" aria-hidden />
              </span>
              <div>
                <p className="text-xl font-medium text-background">Hiện tại chưa có vị trí nào đang mở</p>
                <p className="mt-2 max-w-md text-background/60">Nhưng tụi mình luôn chào đón hồ sơ gửi trước — khi có đợt tuyển mới sẽ ưu tiên liên hệ lại.</p>
              </div>
              <Link
                href={`mailto:${siteConfig.contact.email}?subject=Gửi hồ sơ ứng tuyển`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-6 font-medium text-ink transition-all hover:bg-brand hover:text-white"
              >
                Gửi hồ sơ cho tụi mình <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28" aria-labelledby="steps">
        <SectionHeading eyebrow="Quy trình tuyển dụng" title={<span id="steps">Bốn bước, gọn và tôn trọng thời gian của bạn</span>} />
        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {hiringSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 100} className="list-none rounded-3xl bg-sand p-7">
              <p className="font-heading text-5xl text-brand italic">{s.step}</p>
              <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand title="Chưa thấy vị trí phù hợp?" text="Cứ gửi hồ sơ cho tụi mình. Nhiều thành viên hiện tại cũng bắt đầu như vậy." cta="Gửi hồ sơ tự do" href={`mailto:${siteConfig.contact.email}`} />
    </>
  )
}
