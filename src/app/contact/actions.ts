"use server"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<"name" | "email" | "message", string>>
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {

  if (String(formData.get("website") ?? "").length > 0) return { status: "success" }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()
  const budget = String(formData.get("budget") ?? "").trim()

  const errors: NonNullable<ContactState["errors"]> = {}
  if (name.length < 2) errors.name = "Bạn cho tụi mình xin tên nhé."
  if (!emailRe.test(email)) errors.email = "Email này có vẻ chưa đúng định dạng."
  if (message.length < 10) errors.message = "Hãy kể thêm một chút về dự án của bạn (ít nhất 10 ký tự)."
  if (Object.keys(errors).length) return { status: "error", errors, message: "Bạn kiểm tra lại các ô được đánh dấu nhé." }

  console.info("[contact]", { name, email, company, budget, message })

  return { status: "success", message: "Cảm ơn bạn! Tụi mình sẽ phản hồi trong vòng 1 ngày làm việc." }
}
