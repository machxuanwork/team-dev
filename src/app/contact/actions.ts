"use server"

import nodemailer from "nodemailer"
import { siteConfig } from "@/config/site"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<"name" | "email" | "message", string>>
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const gmailUser = process.env.GMAIL_USER
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

// Gửi bằng chính email Gmail của bạn qua SMTP. Cần bật Xác minh 2 bước và tạo Mật khẩu ứng dụng
// (Google không cho đăng nhập SMTP bằng mật khẩu thường) — xem hướng dẫn trong README.
const transporter =
  gmailUser && gmailAppPassword
    ? nodemailer.createTransport({ service: "gmail", auth: { user: gmailUser, pass: gmailAppPassword } })
    : null

const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: người thật không thấy ô này, bot thì điền
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

  // Luôn ghi log phía server — hữu ích để đối chiếu nếu email có vấn đề.
  console.info("[contact]", { name, email, company, budget, message })

  if (!transporter) {
    console.error(
      "[contact] Thiếu biến môi trường GMAIL_USER / GMAIL_APP_PASSWORD nên KHÔNG gửi được email thật. " +
        "Xem hướng dẫn thiết lập trong README hoặc hỏi lại Claude."
    )
    return {
      status: "error",
      message: `Hệ thống gửi email chưa được bật. Bạn liên hệ trực tiếp giúp mình qua ${siteConfig.contact.email} hoặc ${siteConfig.contact.phone} nhé.`,
    }
  }

  const html = `
    <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #1e1c19;">
      <h2 style="margin: 0 0 16px;">Yêu cầu tư vấn mới từ website</h2>
      <p><strong>Tên:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Công ty / Dự án:</strong> ${escapeHtml(company)}</p>` : ""}
      ${budget ? `<p><strong>Ngân sách dự kiến:</strong> ${escapeHtml(budget)}</p>` : ""}
      <p><strong>Nội dung:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `.trim()

  const text = `Yêu cầu tư vấn mới từ website\n\nTên: ${name}\nEmail: ${email}\n${company ? `Công ty / Dự án: ${company}\n` : ""}${budget ? `Ngân sách dự kiến: ${budget}\n` : ""}\nNội dung:\n${message}`

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} — Website" <${gmailUser}>`,
      to: siteConfig.contact.email,
      replyTo: email,
      subject: `[Website] Yêu cầu tư vấn từ ${name}`,
      html,
      text,
    })
  } catch (err) {
    console.error("[contact] Gửi email thất bại:", err)
    return {
      status: "error",
      message: `Có lỗi khi gửi, bạn thử lại hoặc email trực tiếp cho ${siteConfig.contact.email} nhé.`,
    }
  }

  return { status: "success", message: "Cảm ơn bạn! Tụi mình sẽ phản hồi trong vòng 1 ngày làm việc." }
}
