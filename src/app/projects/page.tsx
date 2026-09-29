import { projects } from "@/data/content"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBand } from "@/components/sections/CtaBand"
import { ProjectCard } from "@/components/sections/Projects"
import { Testimonials } from "@/components/sections/Testimonials"

export const metadata = buildMetadata({
  title: "Dự án & case study website, ứng dụng",
  description: `Các dự án ${siteConfig.name} đã bàn giao: thương mại điện tử, hệ thống quản trị, ứng dụng di động, y tế số — kèm kết quả đo được.`,
  path: "/projects",
  image: siteConfig.ogImage,
})

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: absoluteUrl(`/projects/${p.slug}`) })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <PageHero
        crumbs={[{ name: "Dự án", href: "/projects" }]}
        eyebrow="Dự án"
        title="Không nói suông, đây là những gì tụi mình đã"
        accent="làm được"
        description="Mỗi dự án đều có vấn đề rõ ràng ở đầu và con số đo được ở cuối. Bấm vào để đọc câu chuyện đằng sau."
      />
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </ul>
      </section>
      <Testimonials />
      <CtaBand title="Dự án tiếp theo có thể là của bạn" />
    </>
  )
}
