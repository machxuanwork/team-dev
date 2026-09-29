import { LegalPage } from "@/components/sections/LegalPage"
import { siteConfig } from "@/config/site"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Điều khoản sử dụng",
  description: `Điều khoản sử dụng website ${siteConfig.name}: quyền sở hữu nội dung, báo giá và hợp đồng, giới hạn trách nhiệm và liên kết bên ngoài.`,
  path: "/terms",
})

export default function TermsPage() {
  return (
    <LegalPage
      path="/terms"
      eyebrow="Pháp lý"
      title="Điều khoản sử dụng"
      updated="25/09/2026"
      intro="Khi truy cập website này, bạn đồng ý với các điều khoản dưới đây. Điều khoản cho từng dự án cụ thể sẽ được ghi rõ trong hợp đồng riêng."
      sections={[
        { heading: "Nội dung website", body: ["Toàn bộ nội dung, hình ảnh và mã nguồn trên website thuộc quyền sở hữu của chúng tôi hoặc được sử dụng có giấy phép. Vui lòng không sao chép khi chưa được đồng ý."] },
        { heading: "Báo giá và hợp đồng", body: ["Thông tin về chi phí và thời gian trên website chỉ mang tính tham khảo. Báo giá chính thức được lập sau khi trao đổi và có hiệu lực theo từng hợp đồng.", "Quyền sở hữu mã nguồn được chuyển giao cho khách hàng sau khi hoàn tất thanh toán theo hợp đồng."] },
        { heading: "Giới hạn trách nhiệm", body: ["Chúng tôi nỗ lực giữ thông tin chính xác nhưng không đảm bảo website luôn không có sai sót hoặc gián đoạn. Chúng tôi không chịu trách nhiệm cho thiệt hại phát sinh từ việc sử dụng thông tin trên website ngoài phạm vi hợp đồng."] },
        { heading: "Liên kết bên ngoài", body: ["Website có thể chứa liên kết tới trang của bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung của các trang đó."] },
        { heading: "Liên hệ", body: [`Nếu có câu hỏi về điều khoản, xin gửi email tới ${siteConfig.contact.email}.`] },
      ]}
    />
  )
}
