import { projects } from "@/data/content"
import { siteConfig } from "@/config/site"
import { absoluteUrl, buildMetadata, serializeJsonLd } from "@/lib/seo"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBand } from "@/components/sections/CtaBand"
import { ProjectCard } from "@/components/sections/Projects"

export const metadata = buildMetadata({
  title: "Dự án mẫu: website doanh nghiệp, phần mềm quản lý, CMS",
  description: `Dự án mẫu của ${siteConfig.name}: website giới thiệu xây dựng, spa, nhà hàng và phần mềm quản lý chấm công, nhà hàng, quán cà phê, CMS portal.`,
  path: "/projects",
  image: siteConfig.ogImage,
})

const groups = [
  { key: "website", title: "Website giới thiệu doanh nghiệp", text: "Xây dựng, spa, nhà hàng: website thể hiện đúng thương hiệu, tải nhanh, chuẩn SEO và có sẵn đường dẫn tới liên hệ, đặt lịch hoặc đặt bàn." },
  { key: "software", title: "Phần mềm quản lý & CMS", text: "Chấm công, quản lý nhà hàng, quán cà phê, cổng nội bộ và quản trị nội dung: phần mềm theo nghiệp vụ, phân quyền rõ và có báo cáo." },
] as const

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
        eyebrow="Dự án mẫu"
        title="Sản phẩm số cho doanh nghiệp"
        accent="Việt Nam"
        description="Hai nhóm sản phẩm chúng tôi thường làm: website giới thiệu doanh nghiệp và phần mềm quản lý nghiệp vụ. Các dự án dưới đây là dự án mẫu do chúng tôi thiết kế để minh hoạ cách làm."
      />
      {groups.map((g) => (
        <section key={g.key} className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby={`nhom-${g.key}`}>
          <h2 id={`nhom-${g.key}`} className="text-3xl font-medium tracking-tight md:text-4xl">
            {g.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{g.text}</p>
          <ul className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects
              .filter((p) => p.group === g.key)
              .map((p, i) => (
                <ProjectCard key={p.slug} p={p} index={i} />
              ))}
          </ul>
        </section>
      ))}
      <CtaBand title="Dự án tiếp theo có thể là của bạn" />
    </>
  )
}
