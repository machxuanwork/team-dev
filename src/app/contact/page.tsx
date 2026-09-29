import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { buildMetadata, absoluteUrl, serializeJsonLd } from "@/lib/seo"
import { Breadcrumbs } from "@/components/seo/Breadcrumbs"
import { ContactForm } from "@/components/contact/ContactForm"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Reveal } from "@/components/motion/Reveal"

export const metadata = buildMetadata({
  title: "Liên hệ & báo giá",
  description: `Liên hệ ${siteConfig.name} để nhận báo giá website, ứng dụng, hệ thống phần mềm. Tư vấn miễn phí, phản hồi trong vòng 1 ngày làm việc. Hotline ${siteConfig.contact.phone}.`,
  path: "/contact",
  image: siteConfig.ogImage,
})

const info = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Điện thoại", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phoneRaw}` },
  { icon: MapPin, label: "Văn phòng", value: `${siteConfig.contact.address}, ${siteConfig.contact.city}` },
  { icon: Clock, label: "Giờ làm việc", value: siteConfig.contact.hours },
]

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: `Liên hệ ${siteConfig.name}`,
    mainEntity: { "@id": absoluteUrl("/#organization") },
  }
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-48">
      <Breadcrumbs items={[{ name: "Liên hệ", href: "/contact" }]} visible={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <div className="pointer-events-none absolute -top-20 -left-24 size-[420px] animate-blob rounded-full bg-sage blur-[100px]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Liên hệ"
            title={
              <>
                Cùng nhau làm <span className="italic text-brand-ink">điều gì đó hay ho</span>
              </>
            }
            description="Điền vài dòng về dự án, tụi mình sẽ phản hồi trong vòng một ngày làm việc — không có kịch bản bán hàng, chỉ có một cuộc trò chuyện thật."
          />
          <ul className="mt-12 space-y-6">
            {info.map((it, i) => (
              <Reveal as="li" key={it.label} delay={i * 80} className="flex list-none items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white ring-1 ring-border">
                  <it.icon className="size-5 text-brand-ink" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{it.label}</p>
                  {it.href ? (
                    <a href={it.href} className="text-lg font-medium underline-offset-4 hover:text-brand-ink hover:underline">
                      {it.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium">{it.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
