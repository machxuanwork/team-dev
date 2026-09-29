import { Quote } from "lucide-react"
import { testimonials } from "@/data/content"
import { Avatar } from "@/components/ui/Avatar"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"

const tones = ["warm", "green", "sun"] as const

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Khách hàng nói gì"
        align="center"
        title={
          <>
            Lời nhận xét <span className="italic text-brand-ink">chân thật</span> từ những người từng làm cùng
          </>
        }
      />
      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 110} className="list-none">
            <figure className={cn("flex h-full flex-col rounded-3xl p-8 ring-1 ring-black/[0.05]", i === 1 ? "bg-ink text-background" : "bg-white")}>
              <Quote className={cn("mb-5 size-8 fill-current opacity-90", i === 1 ? "text-brand" : "text-brand/70")} aria-hidden />
              <blockquote className={cn("flex-1 text-[17px] leading-relaxed", i === 1 ? "text-background/90" : "text-foreground/85")}>{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="size-11 overflow-hidden rounded-full">
                  <Avatar name={t.name} tone={tones[i]} compact />
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className={cn("block text-sm", i === 1 ? "text-background/55" : "text-muted-foreground")}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
