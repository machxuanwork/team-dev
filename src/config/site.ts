/**
 * Nguồn dữ liệu duy nhất cho thông tin thương hiệu.
 * Toàn bộ số liệu / tên / liên hệ dưới đây là DỮ LIỆU MẪU — hãy thay bằng thông tin thật của team.
 */
export const siteConfig = {
  name: "DevTeam",
  legalName: "DevTeam Software Studio",
  tagline: "Xây phần mềm đẹp, chạy nhanh và dùng lâu dài.",
  description:
    "DevTeam là studio phần mềm tại Việt Nam: thiết kế, phát triển website, ứng dụng di động và hệ thống cloud cho doanh nghiệp. Làm việc minh bạch, bàn giao đúng hẹn.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://team-dev-teal.vercel.app",
  ogImage: "/opengraph-image",
  locale: "vi_VN",
  foundingYear: 2019,
  /** Ngày cập nhật nội dung trang tĩnh (dùng cho sitemap). Đổi khi bạn sửa nội dung thật. */
  lastUpdated: "2026-09-25",
  keywords: [
    "công ty phần mềm",
    "thiết kế website",
    "lập trình web",
    "phát triển ứng dụng mobile",
    "outsource phần mềm",
    "Next.js",
    "React Native",
    "team dev Việt Nam",
  ],
  contact: {
    email: "machngocxuan.work@gmail.com",
    phone: "+84 936 113 142",
    phoneRaw: "+84936113142",
    address: "51 Nguyễn Ngọc Nhựt, Phường Phú Thọ Hòa, Quận Tân Phú, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    country: "VN",
    hours: "Thứ 2 – Thứ 6, 9:00 – 18:00",
  },
  links: {
    github: "https://github.com/mydevteam",
    linkedin: "https://linkedin.com/company/mydevteam",
    facebook: "https://facebook.com/mydevteam",
  },
  nav: [
    { label: "Dịch vụ", href: "/services" },
    { label: "Dự án", href: "/projects" },
    { label: "Về chúng tôi", href: "/about" },
    { label: "Tuyển dụng", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
} as const

export type SiteConfig = typeof siteConfig
