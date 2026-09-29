const rows = [
  ["Website", "Mobile App", "Cloud", "UI/UX", "AI", "DevOps"],
  ["Thiết kế", "Lập trình", "Kiểm thử", "Ra mắt", "Đồng hành", "Tối ưu"],
]

/** Dải chữ khổng lồ chạy ngược chiều nhau — điểm nhấn thị giác ngăn cách các phần. Trang trí, ẩn với trình đọc màn hình. */
export function BigMarquee() {
  return (
    <div aria-hidden className="relative overflow-hidden py-6 select-none md:py-10">
      {rows.map((row, r) => (
        <div key={r} className="flex overflow-hidden">
          {[0, 1].map((c) => (
            <ul
              key={c}
              className={`flex shrink-0 items-center gap-8 pr-8 font-heading text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[1.1] font-medium tracking-tight whitespace-nowrap ${r === 0 ? "animate-marquee" : "[animation:marquee-rev_50s_linear_infinite]"}`}
            >
              {row.map((w, i) => (
                <li key={w} className="flex items-center gap-8">
                  <span className={i % 2 ? "outline-text text-foreground/30 italic" : "text-foreground"}>{w}</span>
                  <span className="text-brand">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  )
}
