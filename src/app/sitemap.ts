import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { posts } from "@/data/posts"
import { projects, services } from "@/data/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(siteConfig.lastUpdated)
  const url = (path: string) => `${siteConfig.url}${path}`

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/careers"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...services.map((s) => ({ url: url(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...projects.map((p) => ({ url: url(`/projects/${p.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: url(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
