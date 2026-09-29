import { LegalPage } from "@/components/sections/LegalPage"
import { siteConfig } from "@/config/site"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Chính sách bảo mật",
  description: `Cách ${siteConfig.name} thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi truy cập website và liên hệ với chúng tôi.`,
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <LegalPage
      path="/privacy"
      eyebrow="Pháp lý"
      title="Chính sách bảo mật"
      updated="25/09/2026"
      intro="Chúng tôi tôn trọng quyền riêng tư của bạn. Trang này giải thích rõ chúng tôi thu thập gì, dùng vào việc gì và bạn có những quyền nào."
      sections={[
        { heading: "Thông tin chúng tôi thu thập", body: ["Khi bạn gửi biểu mẫu liên hệ, chúng tôi nhận họ tên, email, tên công ty (nếu có), ngân sách dự kiến và nội dung bạn viết.", "Website có thể ghi nhận dữ liệu truy cập ẩn danh như loại trình duyệt, trang đã xem và thời gian ghé thăm để cải thiện trải nghiệm."] },
        { heading: "Mục đích sử dụng", body: ["Thông tin của bạn chỉ dùng để phản hồi yêu cầu, gửi báo giá và trao đổi về dự án.", "Chúng tôi không bán hay chia sẻ thông tin cá nhân cho bên thứ ba vì mục đích quảng cáo."] },
        { heading: "Lưu trữ và bảo mật", body: ["Dữ liệu được lưu trên hạ tầng có mã hoá và kiểm soát truy cập. Chỉ những thành viên cần thiết mới được xem.", "Chúng tôi lưu thông tin liên hệ trong thời gian cần thiết để phục vụ mục đích nêu trên hoặc theo yêu cầu pháp luật."] },
        { heading: "Quyền của bạn", body: ["Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xoá thông tin cá nhân của mình bất cứ lúc nào bằng cách gửi email cho chúng tôi.", `Mọi thắc mắc xin liên hệ: ${siteConfig.contact.email}.`] },
        { heading: "Cookie", body: ["Website chỉ dùng cookie cần thiết cho hoạt động cơ bản và phân tích ẩn danh. Bạn có thể tắt cookie trong cài đặt trình duyệt."] },
      ]}
    />
  )
}
