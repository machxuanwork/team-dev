import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs"
import { Words } from "@/components/motion/Words"

type Props = { eyebrow: string; title: string; accent?: string; description?: string; crumbs?: Crumb[] }

export function PageHero({ eyebrow, title, accent, description, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 md:pt-48 md:pb-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -right-24 size-[480px] animate-blob rounded-full bg-brand-soft blur-[100px]" />
        <div className="absolute top-20 -left-40 size-[420px] animate-blob rounded-full bg-sage blur-[110px]" style={{ animationDelay: "-6s" }} />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_20%_10%,black,transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <p className="rise mb-5 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
          <span className="h-px w-6 bg-current" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.04] font-medium tracking-tight md:text-7xl">
          <Words text={title} delay={100} />
          {accent && (
            <>
              {" "}
              <span className="italic text-brand-ink">
                <Words text={accent} delay={100 + title.split(" ").length * 70} />
              </span>
            </>
          )}
        </h1>
        {description && (
          <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ "--d": "700ms" } as React.CSSProperties}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
