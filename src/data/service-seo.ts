export type ServiceSeo = {
  metaTitle: string
  metaDescription: string
  h1: string
  h1Accent: string
  intro: string[]
  keywords: string[]
  faqs: { q: string; a: string }[]
  relatedPosts: string[]
}

export const serviceSeo: Record<string, ServiceSeo> = {
  web: {
    metaTitle: "Thiết kế website chuẩn SEO tại TP.HCM",
    metaDescription: "Dịch vụ thiết kế website, lập trình web app chuẩn SEO, tốc độ cao bằng Next.js. Báo giá minh bạch, demo mỗi 2 tuần, bảo hành 3 tháng, bàn giao mã nguồn.",
    h1: "Thiết kế website chuẩn SEO,",
    h1Accent: "tải nhanh và dễ mở rộng",
    intro: [
      "Một website tốt không chỉ đẹp. Nó phải tải dưới 2 giây, hiển thị hoàn hảo trên điện thoại và được Google hiểu đúng nội dung. Đó là lý do chúng tôi xây website bằng Next.js và TypeScript, với tối ưu SEO kỹ thuật ngay từ dòng code đầu tiên.",
      "Dù bạn cần một website giới thiệu doanh nghiệp, cửa hàng thương mại điện tử hay ứng dụng web nội bộ, quy trình vẫn là: hiểu mục tiêu kinh doanh, thiết kế trên Figma để bạn duyệt, rồi phát triển theo sprint 2 tuần với bản demo thật.",
    ],
    keywords: ["thiết kế website", "thiết kế website chuẩn SEO", "lập trình web", "làm web app", "website thương mại điện tử"],
    faqs: [
      { q: "Thiết kế website chuẩn SEO nghĩa là gì?", a: "Là website được tối ưu cả về kỹ thuật (tốc độ, Core Web Vitals, cấu trúc heading, sitemap, dữ liệu có cấu trúc, tương thích di động) lẫn nội dung (thẻ title, description, URL thân thiện, liên kết nội bộ). Chúng tôi làm toàn bộ phần kỹ thuật và hướng dẫn bạn phần nội dung." },
      { q: "Làm website mất bao lâu?", a: "Website giới thiệu doanh nghiệp thường 3–5 tuần. Website bán hàng hoặc web app có nhiều tính năng mất 8–12 tuần, tuỳ độ phức tạp. Bạn sẽ có lịch làm việc chi tiết ngay sau buổi tư vấn đầu tiên." },
      { q: "Chi phí thiết kế website là bao nhiêu?", a: "Website giới thiệu bắt đầu từ khoảng 45 triệu đồng. Cửa hàng online và web app phức tạp hơn sẽ báo giá theo từng hạng mục. Chúng tôi luôn gửi bảng chi tiết để bạn biết mình đang trả tiền cho phần nào." },
      { q: "Tôi có tự cập nhật nội dung website được không?", a: "Được. Chúng tôi tích hợp trang quản trị nội dung (CMS) dễ dùng và hướng dẫn team bạn cách đăng bài, sửa trang, thay hình mà không cần biết lập trình." },
    ],
    relatedPosts: ["core-web-vitals-7-viec-nho", "nextjs-hay-react-thuan"],
  },
  mobile: {
    metaTitle: "Phát triển ứng dụng di động iOS & Android",
    metaDescription: "Thiết kế và lập trình app mobile iOS, Android bằng React Native, Flutter. Ra mắt nhanh, mượt như native, có thanh toán, thông báo đẩy, lên App Store và Google Play.",
    h1: "Phát triển ứng dụng di động",
    h1Accent: "iOS & Android mượt như native",
    intro: [
      "Một codebase, hai nền tảng: React Native và Flutter giúp bạn ra thị trường nhanh hơn và tiết kiệm chi phí, mà trải nghiệm vẫn mượt như ứng dụng viết riêng cho từng hệ điều hành.",
      "Chúng tôi lo trọn từ thiết kế giao diện, lập trình, tích hợp thanh toán, bản đồ, thông báo đẩy cho tới thủ tục đưa ứng dụng lên App Store và Google Play.",
    ],
    keywords: ["làm app mobile", "phát triển ứng dụng di động", "lập trình app iOS Android", "React Native", "Flutter"],
    faqs: [
      { q: "Nên làm app native hay cross-platform (React Native, Flutter)?", a: "Với đa số sản phẩm kinh doanh, cross-platform là lựa chọn tốt: một team, một codebase, chi phí thấp hơn 30–40% và ra mắt nhanh hơn. App native phù hợp khi cần hiệu năng đồ hoạ cực cao hoặc tính năng phần cứng đặc thù." },
      { q: "Làm một ứng dụng di động mất bao lâu?", a: "Bản MVP thường mất 8–12 tuần. Ứng dụng đầy đủ tính năng mất 3–5 tháng. Chúng tôi khuyên bạn ra mắt bản MVP trước để kiểm chứng thị trường rồi mới mở rộng." },
      { q: "Chi phí làm app mobile là bao nhiêu?", a: "MVP một nền tảng bắt đầu từ khoảng 150 triệu đồng. Chi phí phụ thuộc số lượng màn hình, tích hợp bên thứ ba và backend. Xem thêm bài phân tích chi phí chi tiết trên blog của chúng tôi." },
      { q: "Các bạn có hỗ trợ đưa app lên App Store và Google Play không?", a: "Có. Chúng tôi lo hồ sơ tài khoản nhà phát triển, ảnh chụp màn hình, mô tả, chính sách quyền riêng tư và xử lý phản hồi từ Apple, Google." },
    ],
    relatedPosts: ["chi-phi-lam-app-mobile"],
  },
  design: {
    metaTitle: "Thiết kế UI/UX cho website & ứng dụng",
    metaDescription: "Dịch vụ thiết kế UI/UX: nghiên cứu người dùng, wireframe, prototype Figma, design system. Giao diện đẹp, dễ dùng, bàn giao chuẩn cho lập trình viên.",
    h1: "Thiết kế UI/UX",
    h1Accent: "đẹp, dễ dùng và làm được",
    intro: [
      "Thiết kế tốt bắt đầu từ việc hiểu người dùng, không phải từ việc chọn màu. Chúng tôi nghiên cứu, phác thảo luồng sử dụng, rồi mới đến giao diện chi tiết và prototype tương tác trên Figma.",
      "Designer làm việc cùng kỹ sư từ tuần đầu tiên nên mọi bản thiết kế đều khả thi. Bạn còn nhận được design system để sản phẩm sau này mở rộng vẫn nhất quán.",
    ],
    keywords: ["thiết kế UI/UX", "thiết kế giao diện app", "thiết kế giao diện website", "prototype Figma", "design system"],
    faqs: [
      { q: "UI và UX khác nhau như thế nào?", a: "UX (trải nghiệm người dùng) là cách sản phẩm vận hành: luồng đi, độ dễ dùng. UI (giao diện) là vẻ ngoài: màu sắc, chữ, hình ảnh. Sản phẩm tốt cần cả hai." },
      { q: "Tôi nhận được những gì khi thuê thiết kế UI/UX?", a: "Bạn nhận file Figma đầy đủ gồm wireframe, giao diện các màn hình, prototype tương tác, bộ thành phần (component) và hướng dẫn cho lập trình viên." },
      { q: "Có thể chỉ thuê thiết kế mà không thuê lập trình không?", a: "Được. Nhiều khách hàng chỉ thuê thiết kế rồi giao cho đội ngũ nội bộ. Chúng tôi bàn giao chuẩn để team bạn triển khai dễ dàng." },
    ],
    relatedPosts: [],
  },
  cloud: {
    metaTitle: "Dịch vụ Cloud & DevOps trên AWS",
    metaDescription: "Thiết kế hạ tầng cloud AWS, CI/CD tự động, giám sát, sao lưu và tối ưu chi phí. Deploy an toàn, giảm sự cố, giảm hoá đơn cloud cho doanh nghiệp.",
    h1: "Dịch vụ Cloud & DevOps",
    h1Accent: "ổn định, an toàn, tiết kiệm",
    intro: [
      "Hạ tầng tốt là hạ tầng bạn không phải nghĩ tới. Chúng tôi thiết kế kiến trúc cloud trên AWS, dựng quy trình CI/CD để mỗi lần deploy chỉ là một cú bấm, kèm giám sát và cảnh báo để phát hiện sự cố trước khi khách hàng nhận ra.",
      "Nhiều doanh nghiệp đang trả tiền cloud nhiều hơn 30–50% mức cần thiết. Chúng tôi rà soát, tối ưu và ghi lại mọi thứ để team bạn tự vận hành được.",
    ],
    keywords: ["dịch vụ DevOps", "triển khai AWS", "CI/CD", "tối ưu chi phí cloud", "hạ tầng cloud"],
    faqs: [
      { q: "DevOps là gì và doanh nghiệp nhỏ có cần không?", a: "DevOps là cách phối hợp giữa lập trình và vận hành để phát hành phần mềm nhanh và ít lỗi. Doanh nghiệp nhỏ càng cần vì không có nhiều người để sửa sự cố thủ công." },
      { q: "Các bạn có giúp giảm chi phí AWS không?", a: "Có. Chúng tôi phân tích hoá đơn, tắt tài nguyên thừa, chọn loại máy phù hợp và dùng các gói tiết kiệm. Nhiều trường hợp giảm được 30% trở lên." },
      { q: "Dữ liệu của tôi có được sao lưu và bảo mật không?", a: "Có. Chúng tôi thiết lập sao lưu tự động, mã hoá dữ liệu, phân quyền tối thiểu và kiểm tra khôi phục định kỳ." },
    ],
    relatedPosts: [],
  },
  ai: {
    metaTitle: "Tích hợp AI, chatbot cho doanh nghiệp",
    metaDescription: "Tích hợp AI vào sản phẩm: chatbot chăm sóc khách hàng, trợ lý tra cứu tài liệu, tìm kiếm thông minh, tự động hoá quy trình. Bảo mật dữ liệu, kiểm soát chi phí.",
    h1: "Tích hợp AI vào sản phẩm",
    h1Accent: "đúng chỗ, đo được hiệu quả",
    intro: [
      "AI không phải phép màu. Nó hiệu quả nhất khi giải quyết một bài toán cụ thể: trả lời khách hàng 24/7, tìm nhanh thông tin trong hàng nghìn tài liệu, hay tự động hoá công việc lặp đi lặp lại.",
      "Chúng tôi bắt đầu bằng việc xác định xem AI có thực sự đáng làm với bài toán của bạn không, sau đó xây dựng, đo chất lượng và kiểm soát chi phí vận hành.",
    ],
    keywords: ["tích hợp AI", "chatbot doanh nghiệp", "trợ lý AI nội bộ", "tự động hoá bằng AI", "tìm kiếm ngữ nghĩa"],
    faqs: [
      { q: "Dữ liệu doanh nghiệp có bị lộ khi dùng AI không?", a: "Không nếu thiết kế đúng. Chúng tôi dùng các nhà cung cấp cam kết không huấn luyện trên dữ liệu khách hàng, mã hoá dữ liệu và phân quyền truy cập rõ ràng." },
      { q: "Chatbot AI có thay thế được nhân viên chăm sóc khách hàng không?", a: "Nó xử lý tốt các câu hỏi phổ biến và chuyển những trường hợp khó cho nhân viên. Mục tiêu là giúp nhân viên tập trung vào việc có giá trị, không phải thay thế họ." },
      { q: "Chi phí vận hành AI hằng tháng như thế nào?", a: "Phụ thuộc lượng sử dụng. Chúng tôi ước tính trước, đặt giới hạn và có bảng theo dõi để bạn luôn biết mình đang chi bao nhiêu." },
    ],
    relatedPosts: [],
  },
  maintenance: {
    metaTitle: "Bảo trì website & ứng dụng theo tháng",
    metaDescription: "Gói bảo trì website, ứng dụng: vá lỗi, cập nhật bảo mật, giám sát uptime, tối ưu hiệu năng. Cam kết thời gian phản hồi bằng văn bản, báo cáo hàng tháng.",
    h1: "Bảo trì website & ứng dụng",
    h1Accent: "yên tâm vận hành lâu dài",
    intro: [
      "Ra mắt chỉ là bước đầu. Phần mềm cần được cập nhật, vá lỗi bảo mật và tối ưu liên tục để không chậm dần, không bị tấn công và luôn phù hợp với nhu cầu mới.",
      "Gói bảo trì của chúng tôi có thời gian phản hồi cam kết bằng văn bản, giám sát 24/7 và báo cáo hằng tháng để bạn luôn biết tình trạng sản phẩm.",
    ],
    keywords: ["bảo trì website", "bảo trì ứng dụng", "dịch vụ hỗ trợ kỹ thuật", "cập nhật bảo mật", "giám sát uptime"],
    faqs: [
      { q: "Bảo trì website gồm những việc gì?", a: "Gồm cập nhật thư viện và bảo mật, sao lưu, giám sát hoạt động, sửa lỗi, tối ưu tốc độ và bổ sung các thay đổi nhỏ theo nhu cầu." },
      { q: "Các bạn có nhận bảo trì hệ thống do đơn vị khác làm không?", a: "Có. Chúng tôi thường bắt đầu bằng buổi đánh giá kỹ thuật ngắn để hiểu hiện trạng, sau đó đề xuất gói bảo trì phù hợp." },
      { q: "Thời gian phản hồi khi có sự cố là bao lâu?", a: "Sự cố nghiêm trọng được phản hồi trong vòng 2 giờ làm việc. Yêu cầu thông thường trong 1 ngày làm việc. Cam kết được ghi rõ trong hợp đồng." },
    ],
    relatedPosts: ["core-web-vitals-7-viec-nho"],
  },
}
