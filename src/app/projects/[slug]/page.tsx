import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react"
import { projects } from "@/data/content"
import { projectExtras } from "@/data/project-extras"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { siteConfig } from "@/config/site"
import { tones } from "@/lib/tones"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { Cover } from "@/components/ui/Cover"
import { Avatar } from "@/components/ui/Avatar"
import { LinkButton } from "@/components/ui/link-button"
import { CtaBand } from "@/components/sections/CtaBand"
import { coverVariant } from "@/components/sections/Projects"
import { Reveal } from "@/components/motion/Reveal"
import { Words } from "@/components/motion/Words"
import { TiltCard } from "@/components/motion/TiltCard"
import { AnimatedValue } from "@/components/motion/AnimatedValue"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

const find = (slug: string) => projects.find((p) => p.slug === slug)

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const p = find(slug)
  if (!p) return { title: "Không tìm thấy dự án" }
  return buildMetadata({
    title: `${p.name} — ${p.category}`,
    description: `${p.summary} Xem thách thức, giải pháp và kết quả đo được của dự án ${p.name}.`,
    path: `/projects/${p.slug}`,
    image: siteConfig.ogImage,
  })
}

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const p = find(slug)
  const x = projectExtras[slug]
  if (!p || !x) notFound()

  const t = tones[p.tone]
  const idx = projects.findIndex((y) => y.slug === slug)
  const next = projects[(idx + 1) % projects.length]
  const nextTone = tones[next.tone]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.category}`,
    description: p.summary,
    dateCreated: p.year,
    url: absoluteUrl(`/projects/${p.slug}`),
    creator: { "@id": absoluteUrl("/#organization") },
    keywords: p.tags.join(", "),
  }

  const meta = [
    ["Khách hàng", x.client],
    ["Dịch vụ", x.services.join(" · ")],
    ["Thời gian", x.duration],
    ["Đội ngũ", `${x.team} · ${x.platform}`],
  ]

  const toc = [
    ["01", "Bài toán", "bai-toan"],
    ["02", "Giải pháp", "giai-phap"],
    ["03", "Điểm nhấn", "diem-nhan"],
    ["04", "Hành trình", "hanh-trinh"],
    ["05", "Màn hình", "man-hinh"],
  ]

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Dự án", href: "/projects" }, { name: p.name, href: `/projects/${p.slug}` }]} visible={false} />

      {/* ============ HERO ============ */}
      <header className="relative pt-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${t.solid}66 0%, ${t.solid}22 45%, transparent 80%)` }} />
        <div className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
        <div className="parallax-slow absolute -top-24 -right-32 size-[520px] animate-blob rounded-full blur-[110px]" style={{ background: `${t.solid}aa` }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <Link href="/projects" className="group rise inline-flex items-center gap-2 rounded-full bg-white/70 py-1.5 pr-4 pl-3 text-sm text-muted-foreground ring-1 ring-black/5 backdrop-blur transition-colors hover:text-foreground">
            <ArrowRight className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" aria-hidden /> Tất cả dự án
          </Link>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={d(100)}>
            <span className="rounded-full px-4 py-1.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase" style={{ background: `${t.solid}`, color: t.ink }}>
              {p.category}
            </span>
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">Case study · {p.year}</span>
          </div>

          <h1 className="mt-6 text-[3.4rem] leading-[0.98] font-medium tracking-[-0.03em] sm:text-7xl md:text-[7.5rem]">
            <Words text={p.name} delay={200} step={90} />
          </h1>

          <p className="rise mt-8 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-[1.65rem] md:leading-[1.5]" style={d(600)}>
            {p.summary}
          </p>

          <dl className="rise mt-14 grid gap-x-8 gap-y-7 border-t border-foreground/15 pt-8 sm:grid-cols-2 lg:grid-cols-4" style={d(750)}>
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">{k}</dt>
                <dd className="mt-2 text-[17px] leading-snug font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Ảnh minh hoạ lớn, nổi lên khỏi phần hero */}
        <div className="relative mx-auto mt-16 max-w-6xl px-6">
          <Reveal variant="scale">
            <TiltCard max={2.5}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-[0_60px_120px_-50px_rgba(30,28,25,0.55)] ring-1 ring-black/5 md:rounded-[2.5rem]">
                <Cover title={p.name} tone={p.tone} variant={coverVariant[p.slug]} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/[0.14] to-transparent" aria-hidden />
              </div>
            </TiltCard>
          </Reveal>

          {/* Chỉ số nổi trên ảnh */}
          <div className="pointer-events-none absolute right-10 -bottom-6 left-10 hidden justify-between md:flex" aria-hidden>
            <div className="rise-float rounded-2xl bg-white px-6 py-4 shadow-[0_30px_60px_-25px_rgba(30,28,25,0.45)] ring-1 ring-black/5" style={{ ...d(900), "--r": "-1.5deg" } as React.CSSProperties}>
              <p className="font-heading text-4xl leading-none font-medium tracking-tight" style={{ color: t.ink }}>
                {p.results[0].value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.results[0].label}</p>
            </div>
            <div className="rise-float rounded-2xl bg-ink px-6 py-4 text-background shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]" style={{ ...d(1100), "--r": "1.5deg" } as React.CSSProperties}>
              <p className="font-heading text-4xl leading-none font-medium tracking-tight">{p.results[1].value}</p>
              <p className="mt-1.5 text-sm text-background/65">{p.results[1].label}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ============ KẾT QUẢ ============ */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-8 md:pt-32" aria-labelledby="ket-qua">
        <h2 id="ket-qua" className="sr-only">
          Kết quả đạt được
        </h2>
        <Reveal variant="scale">
          <dl className="relative grid overflow-hidden rounded-[2rem] bg-ink text-background md:grid-cols-3">
            <div className="pointer-events-none absolute -top-24 left-1/3 size-72 rounded-full blur-[90px]" style={{ background: `${t.solid}55` }} aria-hidden />
            {p.results.map((r, i) => (
              <div key={r.label} className="relative border-background/10 px-8 py-10 md:px-10 md:py-14 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l">
                <dd className="font-heading text-6xl leading-none font-medium tracking-tight md:text-7xl" style={{ color: i === 0 ? t.solid : undefined }}>
                  <AnimatedValue value={r.value} />
                </dd>
                <dt className="mt-4 text-[17px] text-background/65">{r.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ============ CÂU CHUYỆN ============ */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <nav aria-label="Mục lục case study" className="hidden lg:block">
            <ol className="sticky top-32 space-y-1 border-l border-border">
              {toc.map(([n, label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px flex items-baseline gap-3 border-l border-transparent py-2 pl-5 text-[15px] text-muted-foreground transition-all hover:border-brand hover:text-foreground">
                    <span className="font-mono text-[11px] text-brand-ink">{n}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 space-y-24">
            <Reveal as="section" className="scroll-mt-28">
              <div id="bai-toan">
                <p className="font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">01 · Bài toán</p>
                <h2 className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl">Điều gì đang cản trở?</h2>
                <p className="mt-7 text-xl leading-[1.75] text-foreground/80 md:text-[1.35rem]">{p.challenge}</p>
              </div>
            </Reveal>

            <Reveal as="section" className="scroll-mt-28">
              <div id="giai-phap">
                <p className="font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">02 · Giải pháp</p>
                <h2 className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl">
                  Cách tụi mình <span className="italic text-brand-ink">giải quyết</span>
                </h2>
                <p className="mt-7 text-xl leading-[1.75] text-foreground/80 md:text-[1.35rem]">{p.solution}</p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Công nghệ sử dụng">
                  {p.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-sand px-4 py-2 text-sm font-medium ring-1 ring-black/[0.04]">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <section id="diem-nhan" className="scroll-mt-28">
              <Reveal>
                <p className="font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">03 · Điểm nhấn</p>
                <h2 className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl">Những chi tiết làm nên khác biệt</h2>
              </Reveal>
              <ul className="mt-10 space-y-4">
                {x.highlights.map((h, i) => (
                  <Reveal as="li" key={h.title} delay={i * 90} className="group list-none">
                    <div className="grid gap-5 rounded-3xl bg-white p-7 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(30,28,25,0.35)] sm:grid-cols-[auto_1fr] sm:gap-8 md:p-8">
                      <span className="font-heading text-5xl leading-none italic transition-transform duration-500 group-hover:-translate-y-1" style={{ color: t.ink }}>
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-2xl font-medium tracking-tight">{h.title}</h3>
                        <p className="mt-2 text-[17px] leading-relaxed text-muted-foreground">{h.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* ============ HÀNH TRÌNH ============ */}
      <section id="hanh-trinh" className="scroll-mt-28 bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">04 · Hành trình</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl">
              Từ ý tưởng tới ngày ra mắt trong <span className="italic text-brand-ink">{x.duration}</span>
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-4">
            {x.phases.map((ph, i) => (
              <Reveal as="li" key={ph.name} delay={i * 100} className="list-none">
                <div className="relative h-full rounded-3xl bg-white p-6 ring-1 ring-border">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-full font-mono text-sm font-medium" style={{ background: t.solid, color: t.ink }}>
                      {i + 1}
                    </span>
                    <span className="rounded-full bg-sand px-3 py-1 font-mono text-[11px] text-muted-foreground">{ph.time}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-medium">{ph.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{ph.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ MÀN HÌNH ============ */}
      <section id="man-hinh" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">05 · Màn hình</p>
          <h2 className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl">Một vài màn hình tiêu biểu</h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-6">
          {x.screens.map((s, i) => (
            <Reveal as="li" key={s.caption} delay={i * 100} className={`list-none ${i === 0 ? "md:col-span-6" : "md:col-span-3"}`}>
              <figure className="group">
                <div className={`relative overflow-hidden rounded-[2rem] ring-1 ring-black/5 ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <div className="size-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]">
                    <Cover title={`${p.name} — ${s.caption}`} tone={p.tone} variant={s.variant} />
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center gap-3 text-[15px] text-muted-foreground">
                  <span className="font-mono text-xs text-brand-ink">0{i + 1}</span>
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ============ TRÍCH DẪN ============ */}
      <section className="mx-auto max-w-6xl px-6 pb-24" aria-label="Nhận xét của khách hàng">
        <Reveal variant="scale">
          <figure className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 md:px-16 md:py-20" style={{ background: `linear-gradient(135deg, ${t.solid}, ${t.solid}cc)` }}>
            <Quote className="absolute -top-4 right-10 size-40 opacity-[0.07]" style={{ color: t.ink }} fill="currentColor" aria-hidden />
            <blockquote className="relative max-w-4xl font-heading text-3xl leading-[1.25] font-medium tracking-tight italic md:text-5xl md:leading-[1.2]" style={{ color: t.ink }}>
              “{p.testimonial}”
            </blockquote>
            <figcaption className="relative mt-10 flex items-center gap-4">
              <span className="size-14 overflow-hidden rounded-full ring-2 ring-white/70">
                <Avatar name={x.quoteBy.name} tone={p.tone} compact />
              </span>
              <span>
                <span className="block text-lg font-semibold" style={{ color: t.ink }}>
                  {x.quoteBy.name}
                </span>
                <span className="block text-[15px]" style={{ color: `${t.ink}bb` }}>
                  {x.quoteBy.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ============ DỰ ÁN TIẾP THEO ============ */}
      <section className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="next-project">
        <h2 id="next-project" className="sr-only">
          Dự án tiếp theo
        </h2>
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-background outline-none focus-visible:ring-4 focus-visible:ring-brand/40 md:grid-cols-[1.1fr_1fr] md:p-12"
          >
            <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full opacity-60 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" style={{ background: `${nextTone.solid}66` }} aria-hidden />
            <div className="relative">
              <p className="font-mono text-xs tracking-[0.18em] text-background/60 uppercase">Dự án tiếp theo</p>
              <h3 className="mt-4 text-5xl leading-none font-medium tracking-tight text-background md:text-7xl">{next.name}</h3>
              <p className="mt-5 max-w-md text-background/65">{next.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-medium text-ink transition-all group-hover:gap-3 group-hover:bg-brand group-hover:text-white">
                Xem case study <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <div className="size-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
                <Cover title={next.name} tone={next.tone} variant={coverVariant[next.slug]} />
              </div>
            </div>
          </Link>
        </Reveal>
        <div className="mt-8 flex justify-center">
          <LinkButton href="/projects" variant="ghost">
            Xem tất cả dự án
          </LinkButton>
        </div>
      </section>

      <CtaBand title={`Muốn có một sản phẩm như ${p.name}?`} text="Kể cho tụi mình nghe ý tưởng của bạn — buổi tư vấn đầu tiên hoàn toàn miễn phí." />
    </article>
  )
}
