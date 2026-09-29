import { LinkButton } from "@/components/ui/link-button"
import { Reveal } from "@/components/motion/Reveal"

type Props = { title?: string; text?: string; cta?: string; href?: string }

export function CtaBand({ title = "Sẵn sàng bắt đầu chưa?", text = "Một cuộc trò chuyện 30 phút, miễn phí — chưa cần chuẩn bị gì cả.", cta = "Đặt lịch trò chuyện", href = "/contact" }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-soft p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 -left-20 size-72 animate-blob rounded-full bg-brand/25 blur-[80px]" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -bottom-24 size-72 animate-blob rounded-full bg-sage blur-[80px]" style={{ animationDelay: "-7s" }} aria-hidden />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">{text}</p>
          <LinkButton href={href} variant="primary" size="lg" arrow className="relative mt-8">
            {cta}
          </LinkButton>
        </div>
      </Reveal>
    </section>
  )
}
