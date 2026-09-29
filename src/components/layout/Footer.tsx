import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { services } from "@/data/content"
import { Logo } from "./Logo"
import { SocialLinks } from "@/components/ui/Social"
import { LinkButton } from "@/components/ui/link-button"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-ink text-background">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-background/10 pb-20 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl leading-[1.1] font-medium tracking-tight text-background md:text-6xl">
            Có ý tưởng trong đầu?
            <br />
            <span className="text-brand italic">Kể tụi mình nghe.</span>
          </h2>
          <LinkButton href="/contact" variant="light" size="lg" arrow>
            Bắt đầu cuộc trò chuyện
          </LinkButton>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed text-background/60">{siteConfig.description}</p>
            <SocialLinks className="mt-7 flex items-center gap-2" />
          </div>

          <nav aria-label="Dịch vụ" className="md:col-span-2">
            <h3 className="mb-5 font-mono text-xs tracking-[0.18em] text-background/60 uppercase">Dịch vụ</h3>
            <ul className="space-y-3 text-[15px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-background/75 transition hover:text-background">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Công ty" className="md:col-span-2">
            <h3 className="mb-5 font-mono text-xs tracking-[0.18em] text-background/60 uppercase">Công ty</h3>
            <ul className="space-y-3 text-[15px]">
              {[
                ["Về chúng tôi", "/about"],
                ["Dự án", "/projects"],
                ["Tuyển dụng", "/careers"],
                ["Blog", "/blog"],
                ["Liên hệ", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-background/75 transition hover:text-background">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="text-[15px] not-italic md:col-span-3">
            <h3 className="mb-5 font-mono text-xs tracking-[0.18em] text-background/60 uppercase">Liên hệ</h3>
            <ul className="space-y-3 text-background/75">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 transition hover:text-background">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden /> {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-start gap-3 transition hover:text-background">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden /> {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city}
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-background/10 pt-8 text-sm text-background/65 md:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Bảo lưu mọi quyền.
          </p>
          <p className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-background">Chính sách bảo mật</Link>
            <Link href="/terms" className="transition hover:text-background">Điều khoản</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
