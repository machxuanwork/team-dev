import type { CoverVariant } from "@/components/ui/Cover"

export type ProjectExtra = {
  client: string
  services: string[]
  duration: string
  team: string
  platform: string
  highlights: { title: string; text: string }[]
  screens: { variant: CoverVariant; caption: string; image?: string }[]
  phases: { name: string; time: string; text: string }[]
  quoteBy: { name: string; role: string }
}

export const projectExtras: Record<string, ProjectExtra> = {
  "moc-lam-ecommerce": {
    client: "Mộc Lam Furniture",
    services: ["Thiết kế UI/UX", "Phát triển web", "Tối ưu SEO"],
    duration: "10 tuần",
    team: "5 người",
    platform: "Web · Mobile web",
    highlights: [
      { title: "Xem thử nội thất bằng AR", text: "Khách đặt món đồ vào chính căn phòng của mình ngay trên điện thoại trước khi quyết định mua." },
      { title: "Thanh toán còn 3 bước", text: "Bỏ bớt các trường thông tin không cần thiết, tự điền địa chỉ và ghi nhớ lựa chọn của khách." },
      { title: "Ảnh tải gần như tức thì", text: "Ảnh sản phẩm dùng định dạng AVIF, tải theo nhu cầu và cache toàn cầu nên trang chủ hiển thị dưới 1,2 giây." },
    ],
    screens: [
      { variant: "browser", caption: "Trang chủ và danh mục sản phẩm", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "phone", caption: "Trải nghiệm mua hàng trên điện thoại", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "dashboard", caption: "Trang quản lý đơn hàng cho nhân viên", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
    ],
    phases: [
      { name: "Khám phá", time: "1 tuần", text: "Phân tích hành vi khách hàng, tìm ra điểm khiến họ bỏ giỏ hàng." },
      { name: "Thiết kế", time: "2 tuần", text: "Thiết kế lại luồng mua hàng và bộ thành phần giao diện." },
      { name: "Xây dựng", time: "6 tuần", text: "Phát triển theo sprint, demo mỗi hai tuần cho đội Mộc Lam." },
      { name: "Ra mắt", time: "1 tuần", text: "Kiểm thử, chuyển dữ liệu từ hệ thống cũ và trực cùng đội trong ngày đầu." },
    ],
    quoteBy: { name: "Chị Lan Phương", role: "Founder, Mộc Lam" },
  },
  "lua-vang-logistics": {
    client: "Lúa Vàng Logistics",
    services: ["Thiết kế sản phẩm", "Phát triển web app", "Hạ tầng cloud"],
    duration: "14 tuần",
    team: "6 người",
    platform: "Web app",
    highlights: [
      { title: "Bản đồ theo thời gian thực", text: "Vị trí hơn 400 xe cập nhật mỗi vài giây, mượt kể cả khi mở hàng trăm điểm cùng lúc." },
      { title: "Cảnh báo trễ chuyến chủ động", text: "Hệ thống dự đoán chuyến có nguy cơ trễ và báo cho điều phối viên trước khi khách hàng phàn nàn." },
      { title: "Báo cáo hiệu suất tự động", text: "Thống kê quãng đường, thời gian dừng và mức tiêu hao theo tài xế, xuất ra Excel chỉ với một cú bấm." },
    ],
    screens: [
      { variant: "map", caption: "Bản đồ điều phối thời gian thực", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "dashboard", caption: "Bảng chỉ số vận hành", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "calendar", caption: "Lịch chuyến và phân công tài xế", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
    ],
    phases: [
      { name: "Khám phá", time: "2 tuần", text: "Theo chân điều phối viên một ngày để hiểu quy trình thực tế." },
      { name: "Thiết kế", time: "3 tuần", text: "Thiết kế giao diện tối ưu cho việc theo dõi lâu, ít mỏi mắt." },
      { name: "Xây dựng", time: "8 tuần", text: "Backend xử lý luồng GPS, giao diện realtime và hệ thống cảnh báo." },
      { name: "Ra mắt", time: "1 tuần", text: "Chạy song song với hệ thống cũ một tuần trước khi chuyển hẳn." },
    ],
    quoteBy: { name: "Anh Quang Huy", role: "Giám đốc vận hành, Lúa Vàng" },
  },
  "bep-nha-app": {
    client: "Bếp Nhà",
    services: ["Thiết kế UI/UX", "Ứng dụng di động", "Backend & thanh toán"],
    duration: "12 tuần",
    team: "6 người",
    platform: "iOS · Android",
    highlights: [
      { title: "Đặt món chỉ với 2 chạm", text: "Từ màn hình chính tới xác nhận đơn hàng chưa tới 10 giây, thân thiện với cả người lớn tuổi." },
      { title: "Theo dõi đơn theo thời gian thực", text: "Thông báo đẩy từng bước: bếp nhận đơn, đang nấu, đang giao, kèm thời gian dự kiến chính xác." },
      { title: "Chịu tải giờ cao điểm", text: "Hệ thống được kiểm thử chịu tải với gấp 5 lần lượng đơn dự kiến, chạy êm vào khung giờ ăn trưa." },
    ],
    screens: [
      { variant: "phone", caption: "Trang chủ và luồng đặt món", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "calendar", caption: "Lịch đặt món theo tuần", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
      { variant: "dashboard", caption: "Trang quản lý cho từng gian bếp", image: "https://vinaweb.net/upload/cdn/images/mau-website-ban-hang-dep-hai-phong-1(1).jpg" },
    ],
    phases: [
      { name: "Khám phá", time: "1 tuần", text: "Trò chuyện với các gia đình nấu ăn và người đặt món để tìm ra nhu cầu thật." },
      { name: "Thiết kế", time: "3 tuần", text: "Giao diện chữ lớn, màu ấm, thử nghiệm với người dùng nhiều lứa tuổi." },
      { name: "Xây dựng", time: "7 tuần", text: "Ứng dụng React Native, backend NestJS và tích hợp cổng thanh toán nội địa." },
      { name: "Ra mắt", time: "1 tuần", text: "Phát hành thử trong một khu dân cư, sửa nhanh theo phản hồi rồi mở rộng." },
    ],
    quoteBy: { name: "Chị Thảo Vy", role: "CEO, Bếp Nhà" },
  },
  "so-tay-clinic": {
    client: "Sổ Tay Clinic",
    services: ["Thiết kế sản phẩm", "Phát triển web app", "Bảo mật & tuân thủ"],
    duration: "16 tuần",
    team: "7 người",
    platform: "Web app · Cổng bệnh nhân",
    highlights: [
      { title: "Đặt lịch không trùng", text: "Hệ thống kiểm tra lịch của bác sĩ, phòng khám và trang thiết bị trước khi xác nhận, chấm dứt tình trạng trùng lịch." },
      { title: "Hồ sơ mã hoá và phân quyền", text: "Mỗi vai trò chỉ thấy đúng phần thông tin cần thiết, mọi lượt truy cập đều được ghi nhật ký." },
      { title: "Nhắc lịch tự động", text: "Tin nhắn nhắc lịch qua SMS và Zalo giúp giảm hẹn bỏ và giữ lịch khám luôn đầy đặn." },
    ],
    screens: [
      { variant: "calendar", caption: "Lịch hẹn của bác sĩ", image: "https://nguyenhoanghuy.shop/assets/projects/tiktok/promo_hero_banner_1787800513204.jpg" },
      { variant: "dashboard", caption: "Tổng quan phòng khám", image: "https://nguyenhoanghuy.shop/assets/projects/tiktok/promo_hero_banner_1787800513204.jpg" },
      { variant: "browser", caption: "Cổng đặt lịch cho bệnh nhân", image: "https://nguyenhoanghuy.shop/assets/projects/tiktok/promo_hero_banner_1787800513204.jpg" },
    ],
    phases: [
      { name: "Khám phá", time: "2 tuần", text: "Quan sát quy trình tiếp đón và khám tại 3 phòng khám." },
      { name: "Thiết kế", time: "3 tuần", text: "Thiết kế luồng cho lễ tân, bác sĩ và bệnh nhân, mỗi nhóm một trải nghiệm riêng." },
      { name: "Xây dựng", time: "10 tuần", text: "Phát triển hệ thống, mã hoá dữ liệu và tích hợp nhắc lịch." },
      { name: "Ra mắt", time: "1 tuần", text: "Triển khai lần lượt từng phòng khám, đào tạo nhân viên tại chỗ." },
    ],
    quoteBy: { name: "Bác sĩ Minh Châu", role: "Giám đốc chuyên môn, Sổ Tay Clinic" },
  },
}
