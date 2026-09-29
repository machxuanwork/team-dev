import { ImageResponse } from "next/og"
import { getPost, posts } from "@/data/posts"
import { siteConfig } from "@/config/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#FBF8F3", color: "#1E1C19" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28 }}>
          <div style={{ fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ color: "#B23F1B", textTransform: "uppercase", letterSpacing: 3, fontSize: 24 }}>{post?.category ?? "Blog"}</div>
        </div>
        <div style={{ fontSize: 68, lineHeight: 1.12, fontWeight: 700 }}>{post?.title ?? "Blog"}</div>
        <div style={{ fontSize: 28, color: "#6B665D" }}>{`${post?.author ?? ""} · ${siteConfig.url.replace(/^https?:\/\//, "")}`}</div>
      </div>
    ),
    size
  )
}
