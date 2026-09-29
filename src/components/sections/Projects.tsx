import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/content"
import { Cover, type CoverVariant } from "@/components/ui/Cover"
import { Reveal } from "@/components/motion/Reveal"
import { TiltCard } from "@/components/motion/TiltCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { LinkButton } from "@/components/ui/link-button"
import { cn } from "@/lib/utils"

export const coverVariant: Record<(typeof projects)[number]["slug"], CoverVariant> = {
  "moc-lam-ecommerce": "browser",
  "lua-vang-logistics": "map",
  "bep-nha-app": "phone",
  "so-tay-clinic": "calendar",
}

type Project = (typeof projects)[number]

export function ProjectCard({ p, dark = false, index = 0 }: { p: Project; dark?: boolean; index?: number }) {
  return (
    <Reveal as="li" delay={(index % 2) * 120} className={cn("list-none", dark && index % 2 === 1 && "md:mt-16")}>
      <Link href={`/projects/${p.slug}`} className="group block rounded-3xl outline-none focus-visible:ring-4 focus-visible:ring-brand/40">
        <article>
          <TiltCard max={4}>
            <div className={cn("relative aspect-[4/3] overflow-hidden rounded-3xl ring-1", dark ? "ring-white/10" : "ring-black/5")}>
              <div className="size-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                <Cover title={p.name} tone={p.tone} variant={coverVariant[p.slug]} />
              </div>
              <span className="absolute top-5 right-5 grid size-12 translate-y-2 scale-90 place-items-center rounded-full bg-background text-ink opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ArrowUpRight className="size-5" aria-hidden />
              </span>
              <span className="absolute bottom-5 left-5 rounded-full bg-ink/85 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-background uppercase backdrop-blur">{p.results[0].value} · {p.results[0].label}</span>
            </div>
          </TiltCard>
          <div className="mt-6">
            <p className={cn("font-mono text-xs tracking-[0.15em] uppercase", dark ? "text-background/65" : "text-muted-foreground")}>
              {p.category} · {p.year}
            </p>
            <h3 className={cn("mt-2 text-3xl font-medium tracking-tight transition-colors", dark ? "text-background" : "text-foreground", "group-hover:text-brand")}>{p.name}</h3>
            <p className={cn("mt-2 max-w-md leading-relaxed", dark ? "text-background/65" : "text-muted-foreground")}>{p.summary}</p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className={cn("rounded-full px-3 py-1 text-xs ring-1", dark ? "text-background/70 ring-background/15" : "text-muted-foreground ring-foreground/15")}>
                {t}
              </li>
            ))}
          </ul>
        </article>
      </Link>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="du-an" className="relative overflow-hidden bg-ink py-20 text-background md:py-28">
      <div className="pointer-events-none absolute top-1/3 -left-40 size-[500px] rounded-full bg-brand/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Dự án chọn lọc"
            title={
              <>
                Những sản phẩm <span className="italic text-brand">đang chạy thật</span>
              </>
            }
            description="Vài dự án tụi mình tự hào. Mỗi dự án đều bắt đầu từ một vấn đề cụ thể và kết thúc bằng con số đo được."
          />
          <LinkButton href="/projects" variant="light" arrow>
            Xem tất cả dự án
          </LinkButton>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} dark index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
