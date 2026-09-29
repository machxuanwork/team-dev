import { clients } from "@/data/content"

/** Dải tên khách hàng chạy ngang. Danh sách được nhân đôi để vòng lặp liền mạch; bản sao ẩn với trình đọc màn hình. */
export function ClientMarquee() {
  return (
    <section aria-label="Khách hàng đã tin tưởng" className="border-y border-border bg-white/50 py-8">
      <p className="mb-6 text-center font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Được tin tưởng bởi các đội ngũ như</p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {clients.map((c) => (
              <li key={c} className="font-heading text-2xl font-medium whitespace-nowrap text-foreground/60 transition-colors hover:text-foreground">
                {c}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
