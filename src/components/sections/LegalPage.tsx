import { PageHero } from "./PageHero"

type Section = { heading: string; body: string[] }

export function LegalPage({ eyebrow, title, updated, intro, sections, path }: { path: string; eyebrow: string; title: string; updated: string; intro: string; sections: Section[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro} crumbs={[{ name: title, href: path }]} />
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <p className="mb-10 font-mono text-xs tracking-wider text-muted-foreground uppercase">Cập nhật lần cuối: {updated}</p>
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-medium tracking-tight">
                <span className="mr-3 font-mono text-sm text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 leading-[1.8] text-muted-foreground">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-14 rounded-2xl bg-sand p-5 text-sm text-muted-foreground">
          Đây là nội dung mẫu để bạn tham khảo. Hãy nhờ tư vấn pháp lý rà soát và chỉnh sửa cho phù hợp với hoạt động thực tế của doanh nghiệp trước khi công bố.
        </p>
      </article>
    </>
  )
}
