import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, Clock, Wallet } from "lucide-react"
import { projects, serviceDetails, services } from "@/data/content"
import { serviceSeo } from "@/data/service-seo"
import { getPost } from "@/data/posts"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBand } from "@/components/sections/CtaBand"
import { Faq } from "@/components/sections/Faq"
import { ProjectCard } from "@/components/sections/Projects"
import { Icon } from "@/components/ui/Icon"
import { ServiceVisual } from "@/components/ui/ServiceVisual"
import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/motion/Reveal"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const seo = serviceSeo[slug]
  if (!seo) return { title: "Không tìm thấy dịch vụ" }
  return buildMetadata({ title: seo.metaTitle, description: seo.metaDescription, path: `/services/${slug}`, image: siteConfig.ogImage, keywords: seo.keywords })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  const seo = serviceSeo[slug]
  if (!service || !seo) notFound()

  const d = serviceDetails[slug]
  const others = services.filter((s) => s.slug !== slug)
  const posts = seo.relatedPosts.map(getPost).filter((p) => p !== undefined)
  const relatedProjects = projects.filter((p) => p.tags.some((t) => d.tech.includes(t))).slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: seo.metaDescription,
    url: absoluteUrl(`/services/${slug}`),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "Việt Nam" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Hạng mục trong ${service.title}`,
      itemListElement: d.deliverables.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x } })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <PageHero
        crumbs={[
          { name: "Dịch vụ", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
        eyebrow={service.title}
        title={seo.h1}
        accent={seo.h1Accent}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {seo.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <div className="flex flex-wrap gap-3 pt-3">
            <LinkButton href="/contact" variant="brand" size="lg" arrow>
              Nhận báo giá miễn phí
            </LinkButton>
          </div>
        </div>
        <Reveal variant="scale">
          <div className="rounded-3xl bg-sand p-7 ring-1 ring-black/[0.04]">
            <span className="grid size-12 place-items-center rounded-2xl bg-white">
              <Icon name={service.icon} className="size-6 text-brand-ink" strokeWidth={1.7} />
            </span>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/70 p-4">
                <dt className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                  <Clock className="size-3.5" aria-hidden /> Thời gian
                </dt>
                <dd className="mt-1 font-medium">{d.timeline}</dd>
              </div>
              <div className="rounded-2xl bg-white/70 p-4">
                <dt className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                  <Wallet className="size-3.5" aria-hidden /> Chi phí
                </dt>
                <dd className="mt-1 font-medium">{d.from}</dd>
              </div>
            </dl>
            <ServiceVisual slug={slug} className="mt-4 h-32" />
          </div>
        </Reveal>
      </section>

      <section className="bg-ink py-20 text-background md:py-24" aria-labelledby="deliverables">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="deliverables" className="max-w-xl text-4xl font-medium tracking-tight text-background md:text-5xl">
            Bạn nhận được <span className="italic text-brand">những gì</span>
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {d.deliverables.map((x, i) => (
              <Reveal as="li" key={x} delay={i * 70} className="flex list-none items-start gap-4 rounded-2xl bg-background/[0.06] p-5 ring-1 ring-background/10">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-lg">{x}</span>
              </Reveal>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {d.tech.map((t) => (
              <li key={t} className="rounded-full px-4 py-1.5 text-sm text-background/75 ring-1 ring-background/20">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="related-projects">
          <h2 id="related-projects" className="text-3xl font-medium tracking-tight md:text-4xl">
            Dự án liên quan
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {relatedProjects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} index={i} />
            ))}
          </ul>
        </section>
      )}

      <Faq items={seo.faqs} id="hoi-dap-dich-vu" />

      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="related-posts">
          <h2 id="related-posts" className="text-3xl font-medium tracking-tight">
            Bài viết nên đọc
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block rounded-3xl bg-white p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(30,28,25,0.35)]">
                  <p className="font-mono text-xs tracking-wider text-brand-ink uppercase">{p.category}</p>
                  <h3 className="mt-2 text-xl leading-snug font-medium">{p.title}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium">
                    Đọc tiếp <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="other-services">
        <h2 id="other-services" className="text-3xl font-medium tracking-tight">
          Dịch vụ khác
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="flex h-full items-center gap-3 rounded-2xl bg-sand p-4 font-medium transition-colors hover:bg-brand-soft">
                <Icon name={s.icon} className="size-5 shrink-0 text-brand-ink" strokeWidth={1.7} />
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Cần ${service.title.toLowerCase()}?`} />
    </>
  )
}
