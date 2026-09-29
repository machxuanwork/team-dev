import { Hero } from "@/components/sections/Hero"
import { ClientMarquee } from "@/components/sections/Marquee"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { Process } from "@/components/sections/Process"
import { TechStack } from "@/components/sections/TechStack"
import { Team } from "@/components/sections/Team"
import { Testimonials } from "@/components/sections/Testimonials"
import { Engagement } from "@/components/sections/Engagement"
import { BigMarquee } from "@/components/sections/BigMarquee"
import { WhyUs } from "@/components/sections/WhyUs"
import { Faq } from "@/components/sections/Faq"
import { siteConfig } from "@/config/site"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Thiết kế website & phát triển phần mềm tại TP.HCM`,
  description: siteConfig.description,
  path: "/",
  image: siteConfig.ogImage,
  keywords: siteConfig.keywords,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Stats />
      <BigMarquee />
      <Services />
      <Projects />
      <Process />
      <WhyUs />
      <TechStack />
      <Team />
      <Testimonials />
      <Engagement />
      <Faq />
    </>
  )
}
