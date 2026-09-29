import { milestones, principles } from "@/data/content"
import { siteConfig } from "@/config/site"
import { buildMetadata } from "@/lib/seo"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Icon } from "@/components/ui/Icon"
import { Reveal } from "@/components/motion/Reveal"
import { Team } from "@/components/sections/Team"
import { CtaBand } from "@/components/sections/CtaBand"

export const metadata = buildMetadata({
  title: "Về chúng tôi — Đội ngũ, giá trị và câu chuyện",
  description: `Câu chuyện, giá trị và đội ngũ đứng sau ${siteConfig.name} — studio phần mềm nhỏ, làm việc tỉ mỉ, thành lập năm ${siteConfig.foundingYear}.`,
  path: "/about",
  image: siteConfig.ogImage,
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Về chúng tôi", href: "/about" }]} visible={false} />
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="pointer-events-none absolute -top-24 right-0 size-[420px] animate-blob rounded-full bg-brand-soft blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            as="h1"
            eyebrow="Về chúng tôi"
            title={
              <>
                Một team nhỏ, tin vào việc <span className="italic text-brand-ink">làm cho tử tế</span>
              </>
            }
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
            <Reveal delay={200}>
              <p className="text-xl leading-relaxed text-foreground/85">
                {siteConfig.name} bắt đầu từ ba người bạn cùng làm ở một công ty phần mềm lớn và cùng có chung nỗi bực: sản phẩm bị giao vội, code chồng code, người dùng là người chịu thiệt.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="leading-relaxed text-muted-foreground">
                Năm {siteConfig.foundingYear}, tụi mình rời đi để làm theo cách mình tin: ít dự án hơn, kỹ hơn, và nói chuyện thẳng thắn với khách hàng. Bảy năm sau, team đã có 18 người, hơn 60 sản phẩm đang chạy — nhưng cách làm vẫn giữ nguyên như ngày đầu.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24" aria-labelledby="values">
        <h2 id="values" className="sr-only">
          Giá trị cốt lõi
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="list-none rounded-3xl bg-white p-7 ring-1 ring-border">
              <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-brand-soft text-brand-ink">
                <Icon name={p.icon} className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-ink py-20 text-background md:py-28" aria-labelledby="timeline">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading tone="dark" eyebrow="Hành trình" title={<span id="timeline">Vài cột mốc trên đường đi</span>} />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-background/10 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 90} className="list-none bg-ink p-8">
                <p className="font-heading text-5xl text-brand italic">{m.year}</p>
                <h3 className="mt-6 text-xl font-medium text-background">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-background/60">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Team />
      <CtaBand title="Muốn làm việc cùng tụi mình?" />
    </>
  )
}
