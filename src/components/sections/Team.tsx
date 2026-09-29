import { team } from "@/data/content"
import { Avatar } from "@/components/ui/Avatar"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"

export function Team({ heading = true }: { heading?: boolean }) {
  return (
    <section id="doi-ngu" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {heading && (
        <SectionHeading
          eyebrow="Đội ngũ"
          title={
            <>
              Những con người <span className="italic text-brand-ink">đứng sau</span> mỗi dòng code
            </>
          }
          description="Một team nhỏ, làm việc cùng nhau nhiều năm. Bạn sẽ gặp đúng những người sẽ làm dự án của mình — không qua trung gian."
        />
      )}
      <ul className={cn("grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", heading && "mt-14")}>
        {team.map((m, i) => (
          <Reveal as="li" key={m.name} delay={(i % 3) * 100} className={cn("group list-none", i % 3 === 1 && "lg:mt-10")}>
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-black/5">
              <div className="size-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
                <Avatar name={m.name} tone={m.tone as never} image={m.image} />
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-medium tracking-tight">{m.name}</h3>
            <p className="mt-0.5 font-mono text-xs tracking-wider text-brand-ink uppercase">{m.role}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{m.bio}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
