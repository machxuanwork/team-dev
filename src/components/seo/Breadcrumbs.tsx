import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { absoluteUrl, serializeJsonLd } from "@/lib/seo"

export type Crumb = { name: string; href: string }

export function Breadcrumbs({ items, visible = true }: { items: Crumb[]; visible?: boolean }) {
  const all: Crumb[] = [{ name: "Trang chủ", href: "/" }, ...items]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      {visible && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {all.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 opacity-50" aria-hidden />}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-foreground">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="transition-colors hover:text-foreground">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  )
}
