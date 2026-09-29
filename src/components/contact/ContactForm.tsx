"use client"

import { useActionState } from "react"
import { CircleCheck, Send } from "lucide-react"
import { sendContact, type ContactState } from "@/app/contact/actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const initial: ContactState = { status: "idle" }
const budgets = ["Dưới 50 triệu", "50 – 150 triệu", "150 – 500 triệu", "Trên 500 triệu", "Chưa rõ, cần tư vấn"]

function Field({ label, error, children, htmlFor }: { label: string; error?: string; children: React.ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm({ className }: { className?: string }) {
  const [state, action, pending] = useActionState(sendContact, initial)

  if (state.status === "success") {
    return (
      <div className={cn("flex min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-border", className)} role="status">
        <span className="mb-6 grid size-16 place-items-center rounded-full bg-sage text-sage-ink">
          <CircleCheck className="size-8" aria-hidden />
        </span>
        <h3 className="text-3xl font-medium">Tụi mình đã nhận được rồi!</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const e = state.errors ?? {}
  return (
    <form action={action} noValidate className={cn("space-y-5 rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgba(30,28,25,0.35)] ring-1 ring-border md:p-9", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tên của bạn *" htmlFor="name" error={e.name}>
          <Input id="name" name="name" autoComplete="name" placeholder="Nguyễn Văn A" aria-invalid={!!e.name} aria-describedby={e.name ? "name-error" : undefined} />
        </Field>
        <Field label="Email *" htmlFor="email" error={e.email}>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="ban@congty.vn" aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Công ty / Dự án" htmlFor="company">
          <Input id="company" name="company" autoComplete="organization" placeholder="Tuỳ chọn" />
        </Field>
        <Field label="Ngân sách dự kiến" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="h-12 w-full rounded-xl border border-input bg-white/70 px-4 text-base outline-none transition-all hover:border-foreground/25 focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand/15"
          >
            <option value="" disabled>
              Chọn một mức
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Bạn đang muốn làm gì? *" htmlFor="message" error={e.message}>
        <Textarea id="message" name="message" placeholder="Kể sơ qua về ý tưởng, vấn đề bạn đang gặp hoặc thời điểm bạn muốn ra mắt…" aria-invalid={!!e.message} aria-describedby={e.message ? "message-error" : undefined} />
      </Field>

      {/* Honeypot chống spam — ẩn với người dùng */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">Thông tin của bạn được giữ kín và không chia sẻ cho bên thứ ba.</p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand px-8 font-medium text-white shadow-[0_10px_30px_-10px_rgba(217,83,43,0.7)] transition-all hover:bg-brand-ink focus-visible:ring-4 focus-visible:ring-brand/30 active:scale-[0.98] disabled:opacity-60"
        >
          {pending ? "Đang gửi…" : "Gửi cho tụi mình"}
          <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
        </button>
      </div>
    </form>
  )
}
