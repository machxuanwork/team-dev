import Image from "next/image"
import { principles } from "@/data/content"
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
                Năm {siteConfig.foundingYear}, tụi mình rời đi để làm theo cách mình tin: ít dự án hơn, kỹ hơn, và nói chuyện thẳng thắn với khách hàng. Cách làm đó vẫn là kim chỉ nam của chúng tôi cho tới hôm nay.
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

      <section className="bg-ink py-20 text-background md:py-28" aria-labelledby="location">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading tone="dark" eyebrow="Ở đâu" title={<span id="location">Làm việc từ TP. Hồ Chí Minh</span>} />
            <dl className="mt-10 space-y-5 text-[17px]">
              <div>
                <dt className="font-mono text-xs tracking-[0.18em] text-background/50 uppercase">Địa chỉ</dt>
                <dd className="mt-1 text-background/85">{siteConfig.contact.address}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.18em] text-background/50 uppercase">Giờ làm việc</dt>
                <dd className="mt-1 text-background/85">{siteConfig.contact.hours}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.18em] text-background/50 uppercase">Liên hệ</dt>
                <dd className="mt-1 text-background/85">
                  <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-4 hover:text-brand">
                    {siteConfig.contact.email}
                  </a>
                  {" · "}
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="underline underline-offset-4 hover:text-brand">
                    {siteConfig.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image src="/about/hcmc.jpg" alt="Toàn cảnh Thành phố Hồ Chí Minh, Việt Nam" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-xs text-background/50">
              Ảnh:{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City,_Vietnam_(Unsplash_e7cHiYzQdmM).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-background">
                Tony Lam Hoang
              </a>{" "}
              · CC0 · Wikimedia Commons
            </figcaption>
          </figure>
        </div>
      </section>

      <Team />
      <CtaBand title="Muốn làm việc cùng tụi mình?" />
    </>
  )
}
