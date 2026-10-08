import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import { getPost, posts } from "@/data/posts"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { fmtDate } from "@/lib/format"
import { Cover } from "@/components/ui/Cover"
import { LinkButton } from "@/components/ui/link-button"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Không tìm thấy bài viết" }
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    type: "article",
    publishedTime: post.date,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "vi-VN",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": absoluteUrl("/#organization") },
  }
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  }

  return (
    <article className="pt-32 pb-24 md:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumb) }} />

      <div className="mx-auto max-w-3xl px-6">
        <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden /> Tất cả bài viết
        </Link>
        <p className="rise mt-8 font-mono text-xs tracking-[0.18em] text-brand-ink uppercase">{post.category}</p>
        <h1 className="rise mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-6xl" style={{ "--d": "80ms" } as React.CSSProperties}>
          {post.title}
        </h1>
        <p className="rise mt-6 text-xl leading-relaxed text-muted-foreground" style={{ "--d": "160ms" } as React.CSSProperties}>
          {post.excerpt}
        </p>
        <div className="rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground" style={{ "--d": "240ms" } as React.CSSProperties}>
          <span>
            Bởi <strong className="font-medium text-foreground">{post.author}</strong>
          </span>
          <time dateTime={post.date}>{fmtDate(post.date)}</time>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden /> {post.readingMinutes} phút đọc
          </span>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
          <Cover title={post.title} tone={post.tone} variant="editorial" label={post.category} image={post.image} alt={post.imageAlt} />
        </div>
        {post.imageCredit && (
          <p className="mt-3 text-xs text-muted-foreground">
            Ảnh:{" "}
            <a href={post.imageCredit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              {post.imageCredit.author}
            </a>
            {" "}· {post.imageCredit.license} · Wikimedia Commons
          </p>
        )}
      </div>

      <div className="mx-auto mt-14 max-w-2xl space-y-6 px-6 text-[18px] leading-[1.85] text-foreground/85">
        {post.body.map((b, i) => {
          switch (b.type) {
            case "h2":
              return (
                <h2 key={i} className="!mt-12 text-3xl font-medium tracking-tight text-foreground">
                  {b.text}
                </h2>
              )
            case "ul":
              return (
                <ul key={i} className="space-y-3 pl-1">
                  {b.items.map((it) => (
                    <li key={it} className="relative pl-7 before:absolute before:top-[0.8em] before:left-1 before:size-1.5 before:rounded-full before:bg-brand">
                      {it}
                    </li>
                  ))}
                </ul>
              )
            case "quote":
              return (
                <blockquote key={i} className="!my-10 border-l-[3px] border-brand pl-6 font-heading text-2xl leading-snug text-foreground italic">
                  {b.text}
                </blockquote>
              )
            default:
              return <p key={i}>{b.text}</p>
          }
        })}
      </div>

      {post.sources && post.sources.length > 0 && (
        <aside className="mx-auto mt-14 max-w-2xl px-6" aria-labelledby="sources">
          <h2 id="sources" className="text-lg font-medium">
            Nguồn tham khảo
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="mx-auto mt-20 max-w-2xl px-6">
        <div className="rounded-3xl bg-brand-soft p-8 text-center md:p-10">
          <h2 className="text-2xl font-medium md:text-3xl">Bạn đang có dự án tương tự?</h2>
          <p className="mt-2 text-muted-foreground">Kể cho tụi mình nghe, tư vấn ban đầu hoàn toàn miễn phí.</p>
          <LinkButton href="/contact" arrow className="mt-6">
            Trao đổi cùng tụi mình
          </LinkButton>
        </div>
      </div>

      {related.length > 0 && (
        <aside className="mx-auto mt-24 max-w-6xl px-6" aria-labelledby="related">
          <h2 id="related" className="mb-8 text-2xl font-medium">
            Đọc thêm
          </h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block rounded-3xl bg-white p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(30,28,25,0.35)]">
                  <p className="font-mono text-xs tracking-wider text-brand-ink uppercase">{p.category}</p>
                  <h3 className="mt-2 text-xl leading-snug font-medium">{p.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  )
}
