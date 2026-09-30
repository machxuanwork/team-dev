import { posts } from "@/data/posts"
import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/seo"

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export function GET() {
  const items = posts
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${absoluteUrl(`/blog/${p.slug}`)}</link>
<guid isPermaLink="true">${absoluteUrl(`/blog/${p.slug}`)}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<category>${esc(p.category)}</category>
<description>${esc(p.excerpt)}</description>
</item>`
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(siteConfig.name)} — Blog</title>
<link>${absoluteUrl("/blog")}</link>
<description>${esc(siteConfig.description)}</description>
<language>vi-VN</language>
<atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } })
}
