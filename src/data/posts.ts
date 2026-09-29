export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }

export type Post = {
  slug: string
  title: string
  /** Tiêu đề hiển thị trên Google (≤ 55 ký tự). Bỏ trống thì dùng title. */
  metaTitle?: string
  excerpt: string
  category: string
  date: string // ISO
  readingMinutes: number
  author: string
  tone: "warm" | "green" | "blue" | "sun"
  body: PostBlock[]
}

const allPosts: Post[] = [
  {
    slug: "core-web-vitals-7-viec-nho",
    title: "Core Web Vitals: 7 việc nhỏ giúp website nhanh gấp đôi",
    excerpt:
      "Bạn không cần viết lại cả website để tải nhanh hơn. Đây là những thay đổi nhỏ mà chúng tôi hay làm đầu tiên — và thường mang lại hiệu quả rõ nhất.",
    category: "Hiệu năng",
    date: "2026-08-12",
    readingMinutes: 6,
    author: "Phạm Ngọc Anh",
    tone: "warm",
    body: [
      { type: "p", text: "Mỗi lần nhận một website chậm, chúng tôi thường thấy cùng một vài nguyên nhân quen thuộc. Tin vui là phần lớn sửa được trong vài ngày, không cần đập đi xây lại." },
      { type: "h2", text: "1. Bắt đầu từ ảnh" },
      { type: "p", text: "Ảnh thường chiếm hơn một nửa dung lượng trang. Chuyển sang định dạng AVIF/WebP, khai báo đúng kích thước và chỉ tải ảnh khi người dùng cuộn tới. Với Next.js, component Image làm gần hết việc này cho bạn." },
      { type: "h2", text: "2. Giảm JavaScript không cần thiết" },
      { type: "p", text: "Mỗi thư viện thêm vào là thêm vài chục KB người dùng phải tải. Hãy kiểm tra bundle định kỳ và mạnh dạn bỏ những gì không còn dùng." },
      { type: "ul", items: ["Ưu tiên Server Components cho phần chỉ hiển thị", "Tách code theo route và tải lười các phần nặng", "Thay thư viện nặng bằng hàm tự viết khi chỉ dùng 1–2 tính năng"] },
      { type: "h2", text: "3. Font chữ cũng là tài nguyên" },
      { type: "p", text: "Font tải chậm gây nhấp nháy chữ và đẩy layout. Host font cùng domain, chỉ lấy các subset cần dùng và đặt font-display hợp lý." },
      { type: "quote", text: "Người dùng không đo Lighthouse. Họ chỉ cảm nhận: trang này mượt hay trang này bực." },
      { type: "h2", text: "4. Đo đúng chỗ, đo thường xuyên" },
      { type: "p", text: "Điểm số trên máy bạn không nói lên nhiều điều. Hãy theo dõi dữ liệu thực từ người dùng (field data) và đặt ngưỡng cảnh báo trong CI để hiệu năng không lặng lẽ tụt dốc." },
    ],
  },
  {
    slug: "nextjs-hay-react-thuan",
    title: "Nên chọn Next.js hay React thuần cho dự án của bạn?",
    excerpt:
      "Câu hỏi khách hàng hỏi chúng tôi nhiều nhất. Câu trả lời ngắn gọn là: tuỳ vào việc bạn có cần Google tìm thấy mình hay không.",
    category: "Kiến trúc",
    date: "2026-07-03",
    readingMinutes: 5,
    author: "Nguyễn Minh Khang",
    tone: "blue",
    body: [
      { type: "p", text: "React là thư viện xây giao diện. Next.js là framework xây dựng trên React, thêm vào routing, render phía server và rất nhiều thứ đã được tối ưu sẵn. Vậy khi nào nên dùng cái nào?" },
      { type: "h2", text: "Chọn Next.js khi" },
      { type: "ul", items: ["Bạn cần SEO tốt — trang giới thiệu, blog, thương mại điện tử", "Tốc độ tải lần đầu quan trọng với người dùng", "Bạn muốn có cả frontend và API trong cùng một dự án"] },
      { type: "h2", text: "React thuần vẫn hợp lý khi" },
      { type: "p", text: "Sản phẩm nằm sau đăng nhập và không cần SEO, ví dụ công cụ quản trị nội bộ. Khi đó sự đơn giản của một ứng dụng chạy hoàn toàn trên trình duyệt đôi khi là đủ." },
      { type: "quote", text: "Framework tốt nhất là framework mà team bạn duy trì được trong ba năm tới." },
      { type: "p", text: "Nếu còn phân vân, hãy nhắn cho chúng tôi. Một buổi trao đổi 30 phút thường đủ để chọn hướng đi phù hợp." },
    ],
  },
  {
    slug: "lam-viec-voi-team-outsource",
    title: "Làm việc với team outsource: 5 điều nên thoả thuận ngay từ đầu",
    metaTitle: "5 điều cần thoả thuận khi thuê team outsource",
    excerpt:
      "Hầu hết mâu thuẫn trong dự án phần mềm không đến từ code, mà từ những điều hai bên tưởng là hiển nhiên. Hãy nói rõ chúng trước khi bắt đầu.",
    category: "Hợp tác",
    date: "2026-05-20",
    readingMinutes: 5,
    author: "Vũ Thanh Mai",
    tone: "green",
    body: [
      { type: "p", text: "Sau hơn 60 dự án, chúng tôi rút ra một điều: dự án suôn sẻ là dự án mà hai bên đã nói chuyện đủ rõ ngay từ tuần đầu." },
      { type: "h2", text: "Năm điều cần chốt sớm" },
      { type: "ul", items: ["Định nghĩa \"xong\" của từng tính năng là gì", "Ai là người quyết định cuối cùng khi có ý kiến khác nhau", "Cách thay đổi phạm vi và ảnh hưởng của nó tới chi phí", "Kênh liên lạc và khung giờ phản hồi", "Quyền sở hữu mã nguồn và tài liệu bàn giao"] },
      { type: "quote", text: "Một bản thoả thuận rõ ràng không thể hiện sự nghi ngờ. Nó thể hiện sự tôn trọng hai bên." },
      { type: "p", text: "Chỉ cần dành thêm một buổi để bàn những điểm này, bạn sẽ tiết kiệm được vô số cuộc họp căng thẳng về sau." },
    ],
  },
  {
    slug: "chi-phi-thiet-ke-website",
    title: "Thiết kế website giá bao nhiêu? Bảng chi phí chi tiết và cách tiết kiệm",
    metaTitle: "Thiết kế website giá bao nhiêu? Chi phí 2026",
    excerpt: "Giá làm website dao động từ vài triệu đến vài trăm triệu. Bài viết này giải thích tiền của bạn đi đâu, các yếu tố làm giá tăng giảm và cách chọn gói vừa túi tiền.",
    category: "Chi phí",
    date: "2026-09-10",
    readingMinutes: 7,
    author: "Nguyễn Minh Khang",
    tone: "sun",
    body: [
      { type: "p", text: "Câu hỏi đầu tiên hầu như khách hàng nào cũng hỏi: làm website hết bao nhiêu tiền? Câu trả lời trung thực là: tuỳ. Nhưng bạn hoàn toàn có thể ước lượng khá chính xác nếu hiểu chi phí đến từ đâu." },
      { type: "h2", text: "Các mức giá phổ biến trên thị trường" },
      { type: "ul", items: ["Website mẫu, dựng nhanh: 3 – 10 triệu đồng. Rẻ nhưng khó tuỳ biến, tốc độ và SEO thường hạn chế.", "Website giới thiệu thiết kế riêng: 30 – 80 triệu đồng. Phù hợp đa số doanh nghiệp vừa và nhỏ.", "Website thương mại điện tử: 80 – 250 triệu đồng, tuỳ số lượng sản phẩm, thanh toán và vận chuyển.", "Web app, hệ thống nghiệp vụ: từ 150 triệu đồng trở lên, phụ thuộc độ phức tạp."] },
      { type: "h2", text: "Bốn yếu tố quyết định giá" },
      { type: "p", text: "Thứ nhất là thiết kế: giao diện làm riêng và có nghiên cứu người dùng đắt hơn dùng mẫu có sẵn. Thứ hai là số lượng tính năng: đăng nhập, thanh toán, đa ngôn ngữ, tích hợp CRM đều cộng thêm công. Thứ ba là công nghệ: nền tảng hiện đại cho tốc độ và SEO tốt hơn nhưng cần kỹ sư giỏi hơn. Thứ tư là thời gian: cần gấp thì phải huy động nhiều người hơn." },
      { type: "quote", text: "Website rẻ nhất chưa chắc là rẻ nhất. Hãy tính cả chi phí bạn mất khi khách hàng rời đi vì trang chậm." },
      { type: "h2", text: "Cách tiết kiệm mà vẫn có website tốt" },
      { type: "ul", items: ["Bắt đầu bằng phiên bản tối thiểu (MVP) rồi mở rộng dần theo số liệu thật.", "Chuẩn bị sẵn nội dung và hình ảnh, việc này thường làm chậm dự án nhiều nhất.", "Chọn đơn vị báo giá chi tiết từng hạng mục để bạn cắt bớt phần chưa cần.", "Đừng quên chi phí tên miền, hosting và bảo trì hằng năm."] },
      { type: "p", text: "Nếu bạn muốn một bảng báo giá cụ thể cho dự án của mình, hãy gửi yêu cầu cho chúng tôi. Tư vấn ban đầu hoàn toàn miễn phí." },
    ],
  },
  {
    slug: "chi-phi-lam-app-mobile",
    title: "Chi phí làm app mobile năm 2026: Native hay Cross-platform?",
    metaTitle: "Chi phí làm app mobile 2026: Native hay Cross?",
    excerpt: "So sánh chi phí, thời gian và ưu nhược điểm giữa app native và cross-platform (React Native, Flutter) để chọn hướng đi đúng cho sản phẩm của bạn.",
    category: "Chi phí",
    date: "2026-08-28",
    readingMinutes: 6,
    author: "Đỗ Hoàng Long",
    tone: "warm",
    body: [
      { type: "p", text: "Chọn công nghệ làm app là quyết định ảnh hưởng trực tiếp tới ngân sách và tiến độ. Hai hướng chính hiện nay là app native (viết riêng cho iOS và Android) và cross-platform (một codebase chạy cả hai)." },
      { type: "h2", text: "App native" },
      { type: "p", text: "Viết bằng Swift cho iOS và Kotlin cho Android. Hiệu năng cao nhất và truy cập được mọi tính năng phần cứng, nhưng bạn phải phát triển và bảo trì hai ứng dụng riêng biệt, chi phí gần gấp đôi." },
      { type: "h2", text: "Cross-platform: React Native và Flutter" },
      { type: "p", text: "Một codebase, hai nền tảng. Tiết kiệm khoảng 30–40% chi phí và thời gian, trải nghiệm đủ mượt cho phần lớn ứng dụng kinh doanh, thương mại điện tử, đặt lịch, mạng xã hội." },
      { type: "h2", text: "Khi nào nên chọn native?" },
      { type: "ul", items: ["Game hoặc ứng dụng đồ hoạ 3D nặng.", "Cần tích hợp sâu với cảm biến, Bluetooth, camera chuyên dụng.", "Yêu cầu hiệu năng cực cao và có ngân sách lớn."] },
      { type: "h2", text: "Ước tính chi phí tham khảo" },
      { type: "ul", items: ["MVP cross-platform: 150 – 350 triệu đồng, 8 – 12 tuần.", "Ứng dụng đầy đủ tính năng: 350 – 800 triệu đồng, 3 – 5 tháng.", "App native hai nền tảng: cộng thêm 60 – 80% so với cross-platform."] },
      { type: "quote", text: "Đừng làm mọi thứ ngay từ đầu. Ra mắt bản nhỏ, học từ người dùng thật, rồi mới đầu tư tiếp." },
      { type: "p", text: "Muốn ước tính chính xác cho ý tưởng của bạn? Hãy trao đổi với chúng tôi để nhận báo giá chi tiết miễn phí." },
    ],
  },
  {
    slug: "checklist-seo-cho-website-moi",
    title: "Checklist SEO kỹ thuật cho website mới trước khi ra mắt",
    excerpt: "14 việc cần kiểm tra trước ngày go-live để Google thu thập và xếp hạng website của bạn ngay từ tuần đầu tiên, thay vì mất hàng tháng sửa lỗi.",
    category: "SEO",
    date: "2026-09-18",
    readingMinutes: 8,
    author: "Phạm Ngọc Anh",
    tone: "green",
    body: [
      { type: "p", text: "Phần lớn lỗi SEO xuất phát từ những thiếu sót rất cơ bản khi ra mắt. Danh sách dưới đây là những gì chúng tôi luôn kiểm tra trước khi bàn giao bất kỳ website nào." },
      { type: "h2", text: "Nền tảng kỹ thuật" },
      { type: "ul", items: ["Website chạy HTTPS và chuyển hướng http sang https, www sang không www (hoặc ngược lại).", "File robots.txt cho phép Google thu thập và khai báo sitemap.", "Sitemap.xml liệt kê đúng các trang muốn lập chỉ mục.", "Mỗi trang có thẻ canonical trỏ về địa chỉ chính.", "Không còn thẻ noindex bị để lại từ môi trường thử nghiệm."] },
      { type: "h2", text: "Nội dung trên trang" },
      { type: "ul", items: ["Mỗi trang có một thẻ H1 duy nhất chứa từ khoá chính.", "Title dưới 60 ký tự và description 140–160 ký tự, mỗi trang một bộ riêng.", "URL ngắn, không dấu, có ý nghĩa.", "Hình ảnh có thuộc tính alt mô tả nội dung.", "Liên kết nội bộ giữa các trang liên quan."] },
      { type: "h2", text: "Tốc độ và trải nghiệm" },
      { type: "ul", items: ["LCP dưới 2,5 giây, CLS dưới 0,1, INP dưới 200ms.", "Giao diện hiển thị tốt trên điện thoại.", "Ảnh nén, dùng định dạng hiện đại (WebP, AVIF)."] },
      { type: "h2", text: "Dữ liệu có cấu trúc và đo lường" },
      { type: "ul", items: ["Gắn dữ liệu schema phù hợp: Organization, Article, FAQ, BreadcrumbList.", "Đã thêm website vào Google Search Console và gửi sitemap.", "Đã cài Google Analytics hoặc công cụ đo lường tương đương."] },
      { type: "quote", text: "SEO không phải việc làm một lần. Nhưng làm đúng ngay từ đầu giúp bạn tiết kiệm hàng tháng chỉnh sửa." },
      { type: "p", text: "Tất cả các mục kỹ thuật trên đều đã có sẵn trong website chúng tôi bàn giao. Liên hệ để được tư vấn chi tiết hơn cho dự án của bạn." },
    ],
  },

]

/** Bài mới nhất đứng đầu */
export const posts: Post[] = [...allPosts].sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
