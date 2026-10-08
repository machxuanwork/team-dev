import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { posts } from "@/data/posts"
import { siteConfig } from "@/config/site"
import { buildMetadata } from "@/lib/seo"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { fmtDate } from "@/lib/format"
import { Cover } from "@/components/ui/Cover"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata = buildMetadata({
  title: "Blog — Chia sẻ về lập trình, thiết kế và làm sản phẩm",
  description: `Những bài viết thực tế từ đội ngũ ${siteConfig.name}: hiệu năng web, kiến trúc phần mềm và kinh nghiệm hợp tác với team công nghệ.`,
  path: "/blog",
  image: siteConfig.ogImage,
})

export default function BlogPage() {
  const [featured, ...rest] = posts
  return (
    <section className="mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-48">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} visible={false} />
      <SectionHeading
        as="h1"
        eyebrow="Blog"
        title={
          <>
            Điều tụi mình <span className="italic text-brand-ink">học được</span> khi làm nghề
          </>
        }
        description="Không lý thuyết suông. Toàn là kinh nghiệm rút ra từ những dự án đã và đang chạy thật."
      />

      <Reveal className="mt-14">
        <Link href={`/blog/${featured.slug}`} className="group grid items-center gap-8 rounded-[2rem] bg-white p-4 ring-1 ring-border transition-shadow hover:shadow-[0_30px_70px_-40px_rgba(30,28,25,0.4)] md:grid-cols-2 md:p-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <div className="size-full transition-transform duration-[900ms] group-hover:scale-[1.04]">
              <Cover title={featured.title} tone={featured.tone} variant="editorial" label={featured.category} image={featured.image} alt={featured.imageAlt} />
            </div>
          </div>
          <article className="p-2 md:p-6">
            <p className="font-mono text-xs tracking-wider text-brand-ink uppercase">
              {featured.category} · {featured.readingMinutes} phút đọc
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight md:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium">
              Đọc tiếp <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </p>
          </article>
        </Link>
      </Reveal>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 100} className="list-none">
            <Link href={`/blog/${p.slug}`} className="group block rounded-[2rem] bg-white p-4 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(30,28,25,0.4)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <div className="size-full transition-transform duration-[900ms] group-hover:scale-[1.04]">
                  <Cover title={p.title} tone={p.tone} variant="editorial" label={p.category} image={p.image} alt={p.imageAlt} />
                </div>
              </div>
              <article className="p-3 pt-6">
                <p className="font-mono text-xs tracking-wider text-brand-ink uppercase">
                  {p.category} · {fmtDate(p.date)}
                </p>
                <h2 className="mt-3 text-2xl leading-snug font-medium tracking-tight">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </article>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
