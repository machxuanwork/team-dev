import Image from "next/image"
import { serviceImages } from "@/data/content"
import { cn } from "@/lib/utils"

export function ServicePhoto({ slug, className }: { slug: string; className?: string }) {
  const img = serviceImages[slug]
  if (!img) return null
  return (
    <figure className={className}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-black/5">
        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className={cn("object-cover")} />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">
        Ảnh:{" "}
        <a href={img.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
          {img.author}
        </a>{" "}
        · {img.license} · Wikimedia Commons
      </figcaption>
    </figure>
  )
}
