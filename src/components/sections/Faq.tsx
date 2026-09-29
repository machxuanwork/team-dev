import { Plus } from "lucide-react"
import { faqs } from "@/data/content"
import { Reveal } from "@/components/motion/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { serializeJsonLd } from "@/lib/seo"

/** Accordion dùng thẻ <details> gốc: nội dung luôn có trong HTML (tốt cho SEO), hoạt động cả khi tắt JS, hỗ trợ bàn phím sẵn. */
export function Faq({ items = faqs, id = "hoi-dap" }: { items?: { q: string; a: string }[]; id?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Câu hỏi thường gặp"
          title={
            <>
              Còn điều gì <span className="italic text-brand-ink">băn khoăn</span>?
            </>
          }
          description="Nếu chưa thấy câu trả lời ở đây, cứ nhắn cho tụi mình — thường là trong vòng một ngày làm việc sẽ có phản hồi."
        />
        <div className="divide-y divide-border border-y border-border">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="faq group" name="faq">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-medium outline-none transition-colors hover:text-brand-ink focus-visible:text-brand-ink">
                  {f.q}
                  <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full ring-1 ring-foreground/15 transition-transform duration-300">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </summary>
                <div className="pr-14 pb-6 leading-relaxed text-muted-foreground">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
