import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const absoluteUrl = (path = "/") => `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`

type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  keywords?: readonly string[]
}

/** Metadata chuẩn cho mỗi trang: title, description, canonical, Open Graph, Twitter. */
export function buildMetadata({ title, description, path, image, type = "website", publishedTime, keywords }: PageMeta): Metadata {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}

/** Serialize JSON-LD an toàn (tránh đóng thẻ script sớm bằng ký tự "<"). */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c")
