import type { Metadata, Viewport } from "next"
import { Be_Vietnam_Pro, Fraunces } from "next/font/google"
import "./globals.css"
import OrganizationSchema from "@/components/seo/OrganizationSchema"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// Be Vietnam Pro: thiết kế riêng cho tiếng Việt nên dấu luôn đẹp, dễ đọc.
const body = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" })
// Fraunces: serif mềm, có cá tính — tạo cảm giác "người thật" thay vì template.
const display = Fraunces({ subsets: ["latin", "vietnamese"], style: ["normal", "italic"], variable: "--font-display", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
  // Dán mã xác minh Google Search Console vào đây khi có:
  // verification: { google: "..." },
}

export const viewport: Viewport = {
  themeColor: "#FBF8F3",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={cn(body.variable, display.variable)}>
      <body>
        <OrganizationSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-background"
        >
          Bỏ qua điều hướng, tới nội dung chính
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
