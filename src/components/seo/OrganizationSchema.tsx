import { siteConfig } from "@/config/site"
import { absoluteUrl, serializeJsonLd } from "@/lib/seo"

/** Structured data cho toàn site: Organization + WebSite. Render một lần trong root layout. */
export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: absoluteUrl("/icon"),
        image: absoluteUrl("/opengraph-image"),
        foundingDate: String(siteConfig.foundingYear),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: siteConfig.contact.city,
          addressCountry: siteConfig.contact.country,
        },
        areaServed: ["VN", "SG", "AU"],
        knowsLanguage: ["vi", "en"],
        sameAs: Object.values(siteConfig.links).filter(Boolean),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          contactType: "sales",
          availableLanguage: ["Vietnamese", "English"],
          areaServed: siteConfig.contact.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "vi-VN",
        publisher: { "@id": absoluteUrl("/#organization") },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
}
