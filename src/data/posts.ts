export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }

export type Post = {
  slug: string
  title: string

  metaTitle?: string
  excerpt: string
  category: string
  date: string
  readingMinutes: number
  author: string
  tone: "warm" | "green" | "blue" | "sun"

  image?: string
  imageAlt?: string
  imageCredit?: { author: string; license: string; url: string }
  sources?: { label: string; url: string }[]
  body: PostBlock[]
}

const AUTHOR = "Đội ngũ DevTeam"
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`

const allPosts: Post[] = [
  {
    slug: "core-web-vitals-7-viec-nho",
    title: "Core Web Vitals là gì? Ba chỉ số Google dùng để đo trải nghiệm trang web",
    metaTitle: "Core Web Vitals: LCP, INP, CLS và cách đo đúng",
    excerpt:
      "LCP, INP và CLS có ngưỡng 'tốt' cụ thể do Google công bố. Bài viết tóm tắt các ngưỡng đó, cách đo bằng dữ liệu thật và một việc nhỏ giúp trang mượt hơn.",
    category: "Hiệu năng",
    date: "2026-08-12",
    readingMinutes: 5,
    author: AUTHOR,
    tone: "warm",
    image: "/blog/core-web-vitals.jpg",
    imageAlt: "Màn hình laptop hiển thị mã nguồn",
    imageCredit: { author: "Marc Mueller (seven11nash)", license: "CC0", url: commons("Macro_laptop_coding_(Unsplash).jpg") },
    sources: [
      { label: "web.dev — Web Vitals", url: "https://web.dev/articles/vitals" },
      { label: "Next.js Docs — Image Optimization", url: "https://nextjs.org/docs/app/getting-started/images" },
    ],
    body: [
      { type: "p", text: "Core Web Vitals là bộ chỉ số Google dùng để mô tả trải nghiệm thực tế của người dùng trên một trang web. Khác với điểm số tổng hợp, mỗi chỉ số đo một khía cạnh cụ thể và đều có ngưỡng 'tốt' được công bố công khai." },
      { type: "h2", text: "Ba chỉ số và ngưỡng khuyến nghị" },
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint) — tốc độ hiển thị nội dung chính: nên xảy ra trong vòng 2,5 giây kể từ khi trang bắt đầu tải.",
          "INP (Interaction to Next Paint) — độ nhạy khi tương tác: nên đạt 200 mili giây hoặc thấp hơn.",
          "CLS (Cumulative Layout Shift) — độ ổn định bố cục: nên giữ ở mức 0,1 hoặc thấp hơn.",
        ],
      },
      { type: "h2", text: "Đo ở đâu và đo thế nào" },
      { type: "p", text: "Theo web.dev, ngưỡng nên được đánh giá ở phân vị thứ 75 của các lượt tải trang, tách riêng thiết bị di động và máy tính. Một trang được coi là đạt khi cả ba chỉ số cùng đạt ngưỡng ở mức phân vị này." },
      {
        type: "ul",
        items: [
          "Dữ liệu thực tế (field data): Chrome User Experience Report, PageSpeed Insights, báo cáo Core Web Vitals trong Search Console.",
          "Dữ liệu phòng thí nghiệm (lab data): Chrome DevTools và Lighthouse đo được LCP và CLS.",
          "Lưu ý: các công cụ mô phỏng như Lighthouse không đo được INP vì không có người dùng thật tương tác.",
        ],
      },
      { type: "quote", text: "Điểm Lighthouse trên máy bạn chỉ là gợi ý. Dữ liệu từ người dùng thật mới là thước đo cuối cùng." },
      { type: "h2", text: "Một việc nhỏ với ảnh" },
      { type: "p", text: "Tài liệu Next.js nêu rõ component Image tự phục vụ ảnh đúng kích thước cho từng thiết bị bằng các định dạng hiện đại như WebP, chỉ tải ảnh khi vào vùng nhìn thấy và ngăn dịch chuyển bố cục khi ảnh đang tải — tác động trực tiếp đến LCP và CLS." },
      { type: "p", text: "Muốn biết trang của bạn đang ở đâu? Dán địa chỉ vào PageSpeed Insights và xem phần dữ liệu thực tế trước khi quyết định tối ưu gì." },
    ],
  },
  {
    slug: "nextjs-hay-react-thuan",
    title: "Nên chọn Next.js hay React thuần? Tài liệu React nói gì",
    metaTitle: "Next.js hay React thuần: nên chọn gì cho dự án mới?",
    excerpt:
      "Trang chính thức của React khuyến nghị bắt đầu dự án mới bằng một framework. Bài viết tóm tắt lập luận đó và những trường hợp tự dựng từ đầu vẫn hợp lý.",
    category: "Kiến trúc",
    date: "2026-07-03",
    readingMinutes: 4,
    author: AUTHOR,
    tone: "blue",
    image: "/blog/nextjs-react.jpg",
    imageAlt: "Lập trình viên làm việc trước máy tính",
    imageCredit: { author: "Crew", license: "CC0", url: commons("Programmer_at_work_(Unsplash).jpg") },
    sources: [
      { label: "react.dev — Creating a React App", url: "https://react.dev/learn/creating-a-react-app" },
      { label: "Next.js Docs — Image Optimization", url: "https://nextjs.org/docs/app/getting-started/images" },
    ],
    body: [
      { type: "p", text: "React là thư viện xây dựng giao diện. Phần còn lại của một ứng dụng — định tuyến, lấy dữ liệu, tối ưu tải trang — bạn phải tự chọn hoặc dùng một framework. Đội ngũ React đã nói khá rõ quan điểm của họ về chuyện này." },
      { type: "h2", text: "React khuyến nghị gì?" },
      { type: "p", text: "Trên react.dev, hướng dẫn tạo ứng dụng mới ghi: nếu muốn xây một ứng dụng hoặc website mới bằng React, nên bắt đầu với một framework. Lý do là các framework được khuyến nghị đã có sẵn giải pháp cho những vấn đề như định tuyến và lấy dữ liệu." },
      { type: "p", text: "Các framework full-stack được react.dev nêu tên gồm Next.js (App Router), React Router (v7) và Expo (cho ứng dụng native Android, iOS và web)." },
      { type: "quote", text: "Tự dựng từ đầu nghĩa là bạn đang tự xây một framework của riêng mình." },
      { type: "h2", text: "Khi nào vẫn nên tự dựng từ đầu?" },
      {
        type: "ul",
        items: [
          "Ứng dụng có ràng buộc mà các framework hiện có không đáp ứng tốt.",
          "Bạn muốn tự xây framework riêng.",
          "Bạn chỉ muốn học những kiến thức nền tảng của một ứng dụng React.",
        ],
      },
      { type: "p", text: "Trong trường hợp đó, react.dev gợi ý dùng các công cụ build như Vite, Parcel hoặc RSbuild." },
      { type: "h2", text: "Điều này có ý nghĩa gì với dự án của bạn?" },
      { type: "p", text: "Với website giới thiệu, blog hay cửa hàng trực tuyến — nơi tốc độ tải ban đầu và khả năng được tìm thấy quan trọng — dùng framework giúp bạn không phải tự giải quyết lại những bài toán đã có lời giải. Ví dụ, Next.js có sẵn component Image tự tối ưu kích thước và định dạng ảnh." },
    ],
  },
  {
    slug: "lam-viec-voi-team-outsource",
    title: "Hợp tác với team phần mềm: 3 khái niệm trong Scrum Guide nên thống nhất từ đầu",
    metaTitle: "Thuê team phần mềm: thống nhất Definition of Done từ đầu",
    excerpt:
      "Scrum Guide 2020 định nghĩa rõ 'xong' nghĩa là gì và ai chịu trách nhiệm về giá trị sản phẩm. Mượn những khái niệm đó để tránh hiểu lầm giữa khách hàng và đội phát triển.",
    category: "Hợp tác",
    date: "2026-05-20",
    readingMinutes: 4,
    author: AUTHOR,
    tone: "green",
    image: "/blog/scrum-outsource.jpg",
    imageAlt: "Một nhóm làm việc đang họp Scrum hằng ngày",
    imageCredit: { author: "Nghungdo", license: "CC BY-SA 4.0", url: commons("H%E1%BB%8Dp_Scrum_h%C3%A0ng_ng%C3%A0y_.jpg") },
    sources: [{ label: "Scrum Guide 2020 (scrumguides.org)", url: "https://scrumguides.org/scrum-guide.html" }],
    body: [
      { type: "p", text: "Hiểu lầm giữa khách hàng và đội phát triển thường không nằm ở code, mà ở những từ ai cũng nghĩ mình hiểu: 'xong', 'ưu tiên', 'nghiệm thu'. Scrum Guide — tài liệu chính thức của khung làm việc Scrum, phiên bản 2020 — đã định nghĩa các khái niệm này khá rõ." },
      { type: "h2", text: "1. 'Xong' nghĩa là gì" },
      { type: "p", text: "Scrum Guide định nghĩa Definition of Done là mô tả chính thức về trạng thái của Increment (phần sản phẩm hoàn thành) khi nó đạt các tiêu chuẩn chất lượng mà sản phẩm yêu cầu. Nói cách khác, 'xong' không phải cảm giác — đó là danh sách tiêu chí hai bên đã đồng ý trước." },
      { type: "h2", text: "2. Ai chịu trách nhiệm về giá trị sản phẩm" },
      { type: "p", text: "Theo Scrum Guide, Product Owner chịu trách nhiệm tối đa hoá giá trị sản phẩm do Scrum Team tạo ra, bao gồm quản lý Product Backlog: xây dựng Product Goal, tạo và sắp xếp thứ tự các hạng mục. Với dự án thuê ngoài, nên chỉ định rõ ai bên khách hàng giữ vai trò này." },
      { type: "h2", text: "3. Review để điều chỉnh, không phải để 'chấm điểm'" },
      { type: "p", text: "Mục đích của Sprint Review, theo Scrum Guide, là kiểm tra kết quả của Sprint và xác định những điều chỉnh trong tương lai. Tài liệu cũng nhấn mạnh Sprint Review không nên bị coi là cửa ải để phát hành giá trị." },
      { type: "quote", text: "Thống nhất định nghĩa 'xong' trước khi viết dòng code đầu tiên rẻ hơn nhiều so với tranh luận về nó vào ngày bàn giao." },
      { type: "p", text: "Bạn không cần áp dụng Scrum đầy đủ. Chỉ cần viết ra ba điều trên thành một trang thoả thuận ngắn ngay từ buổi làm việc đầu tiên." },
    ],
  },
  {
    slug: "chi-phi-thiet-ke-website",
    title: "Làm website: những khoản cần dự trù ngoài tiền thiết kế",
    metaTitle: "Chi phí làm website: các khoản cần dự trù ngoài thiết kế",
    excerpt:
      "Báo giá thiết kế mới chỉ là một phần. Danh sách các hạng mục thường bị bỏ sót khi lập ngân sách website, kèm các khuyến nghị công khai của Google về nội dung và SEO.",
    category: "Chi phí",
    date: "2026-09-10",
    readingMinutes: 4,
    author: AUTHOR,
    tone: "sun",
    image: "/blog/chi-phi-website.jpg",
    imageAlt: "Bàn làm việc với sổ ghi chú, điện thoại và laptop",
    imageCredit: { author: "JESHOOTS.COM", license: "CC0", url: commons("White_work_table_with_notes,_smartphone_and_laptop_(Unsplash).jpg") },
    sources: [
      { label: "Google Search Central — Sitemap", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" },
      { label: "Google Search Central — Title link", url: "https://developers.google.com/search/docs/appearance/title-link" },
      { label: "web.dev — Web Vitals", url: "https://web.dev/articles/vitals" },
    ],
    body: [
      { type: "p", text: "Giá làm website phụ thuộc phạm vi, nên bài này không đưa ra một con số chung. Thay vào đó là danh sách các hạng mục thường bị bỏ sót khi lập ngân sách — để bạn có thể hỏi đúng câu khi nhận báo giá." },
      { type: "h2", text: "Các khoản cần hỏi rõ khi nhận báo giá" },
      {
        type: "ul",
        items: [
          "Tên miền và hosting: chi phí lặp lại hằng năm, không chỉ trả một lần.",
          "Nội dung và hình ảnh: ai viết, ai chụp, ai chịu chi phí bản quyền ảnh.",
          "SEO cơ bản: Google khuyến nghị mỗi trang có thẻ title riêng, mô tả đúng nội dung trang.",
          "Sitemap và Search Console: Google nêu rằng website mới, ít liên kết từ bên ngoài, là trường hợp nên có sitemap.",
          "Hiệu năng: kiểm tra LCP, INP, CLS theo ngưỡng của Google trước khi bàn giao.",
          "Bảo trì sau bàn giao: cập nhật, sao lưu, sửa lỗi và hỗ trợ.",
        ],
      },
      { type: "quote", text: "Báo giá rẻ nhưng thiếu hạng mục thường đắt hơn báo giá đủ hạng mục." },
      { type: "h2", text: "Cách so sánh các báo giá" },
      {
        type: "ul",
        items: [
          "Yêu cầu liệt kê từng hạng mục thay vì một con số tổng.",
          "Hỏi rõ phần nào đã gồm, phần nào tính thêm (ví dụ chỉnh sửa sau bàn giao).",
          "Hỏi về quyền sở hữu mã nguồn và tài khoản (tên miền, hosting) đứng tên ai.",
        ],
      },
      { type: "p", text: "Nếu bạn muốn một bảng báo giá chi tiết cho dự án cụ thể, hãy gửi yêu cầu cho chúng tôi — tư vấn ban đầu miễn phí." },
    ],
  },
  {
    slug: "chi-phi-lam-app-mobile",
    title: "Native, React Native hay Flutter? So sánh cách tiếp cận làm app mobile",
    metaTitle: "Native, React Native hay Flutter: chọn gì cho app mobile?",
    excerpt:
      "Ba hướng làm app mobile phổ biến, mô tả đúng theo trang chính thức của React Native và Flutter, kèm các tiêu chí giúp bạn chọn hướng phù hợp với sản phẩm.",
    category: "Công nghệ",
    date: "2026-08-28",
    readingMinutes: 4,
    author: AUTHOR,
    tone: "warm",
    image: "/blog/app-mobile.jpg",
    imageAlt: "Điện thoại Samsung hiển thị cửa hàng ứng dụng Google Play",
    imageCredit: { author: "William Iven (firmbee)", license: "CC0", url: commons("Samsung_phones_Google_play_(Unsplash).jpg") },
    sources: [
      { label: "React Native", url: "https://reactnative.dev/" },
      { label: "Flutter", url: "https://flutter.dev/" },
    ],
    body: [
      { type: "p", text: "Chọn công nghệ làm app ảnh hưởng đến ngân sách, tiến độ và trải nghiệm người dùng. Có ba hướng phổ biến: native cho từng nền tảng, React Native và Flutter." },
      { type: "h2", text: "React Native" },
      { type: "p", text: "Theo trang chủ, React Native cho phép tạo ứng dụng native cho Android, iOS và các nền tảng khác bằng React. Họ mô tả: viết bằng JavaScript, hiển thị bằng mã native — các thành phần như View, Text, Image ánh xạ trực tiếp sang thành phần giao diện gốc của hệ điều hành." },
      { type: "h2", text: "Flutter" },
      { type: "p", text: "Flutter tự mô tả là framework mã nguồn mở để xây dựng ứng dụng đa nền tảng, biên dịch native, từ một codebase duy nhất. Flutter dùng ngôn ngữ Dart và có thể triển khai lên di động, web, desktop và thiết bị nhúng." },
      { type: "h2", text: "Native (Swift/Kotlin)" },
      { type: "p", text: "Viết riêng cho từng hệ điều hành bằng công cụ chính thức của Apple và Google. Bạn truy cập mọi tính năng mới của nền tảng sớm nhất, đổi lại phải duy trì hai codebase." },
      { type: "h2", text: "Tiêu chí chọn" },
      {
        type: "ul",
        items: [
          "Cần ra mắt nhanh trên cả iOS và Android với đội nhỏ: nghiêng về React Native hoặc Flutter.",
          "Đội đã quen React/JavaScript: React Native giúp tận dụng kỹ năng sẵn có.",
          "Cần giao diện tuỳ biến cao trên nhiều nền tảng từ một codebase: cân nhắc Flutter.",
          "Phụ thuộc sâu vào tính năng phần cứng hoặc API mới nhất của hệ điều hành: cân nhắc native.",
        ],
      },
      { type: "p", text: "Chi phí cụ thể còn tuỳ số màn hình, tích hợp và yêu cầu vận hành. Hãy mô tả ý tưởng cho chúng tôi để nhận báo giá chi tiết." },
    ],
  },
  {
    slug: "checklist-seo-cho-website-moi",
    title: "Checklist SEO kỹ thuật trước khi ra mắt, đối chiếu với tài liệu Google",
    metaTitle: "Checklist SEO kỹ thuật cho website mới (theo Google)",
    excerpt:
      "Canonical, robots.txt, noindex, sitemap, title, Core Web Vitals: mỗi mục dưới đây đều đối chiếu với tài liệu chính thức của Google Search Central để bạn tự kiểm chứng.",
    category: "SEO",
    date: "2026-09-18",
    readingMinutes: 5,
    author: AUTHOR,
    tone: "green",
    image: "/blog/seo-checklist.jpg",
    imageAlt: "Điện thoại hiển thị ứng dụng Google Analytics",
    imageCredit: { author: "Edho Pratama (edhoradic)", license: "CC0", url: commons("Google_analytics_phone_(Unsplash).jpg") },
    sources: [
      { label: "Google — Consolidate duplicate URLs (canonical)", url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
      { label: "Google — Giới thiệu robots.txt", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
      { label: "Google — Block indexing (noindex)", url: "https://developers.google.com/search/docs/crawling-indexing/block-indexing" },
      { label: "Google — Sitemaps overview", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" },
      { label: "Google — Title link", url: "https://developers.google.com/search/docs/appearance/title-link" },
      { label: "web.dev — Web Vitals", url: "https://web.dev/articles/vitals" },
    ],
    body: [
      { type: "p", text: "Phần lớn lỗi SEO kỹ thuật đến từ những điểm cơ bản bị quên lúc ra mắt. Mỗi mục dưới đây dựa trên tài liệu chính thức của Google — bạn có thể mở nguồn ở cuối bài để kiểm chứng." },
      { type: "h2", text: "Thu thập và lập chỉ mục" },
      {
        type: "ul",
        items: [
          "robots.txt cho trình thu thập biết được truy cập URL nào, chủ yếu nhằm tránh quá tải máy chủ. Google khẳng định đây không phải cơ chế để giữ trang khỏi kết quả tìm kiếm.",
          "Muốn ngăn một trang được lập chỉ mục, dùng thẻ meta robots noindex (hoặc bảo vệ bằng mật khẩu).",
          "Trang có noindex không được chặn trong robots.txt — nếu chặn, Google không thấy chỉ thị noindex và trang vẫn có thể xuất hiện trong kết quả.",
          "Kiểm tra không còn thẻ noindex bị để lại từ môi trường thử nghiệm.",
        ],
      },
      { type: "h2", text: "Canonical và sitemap" },
      {
        type: "ul",
        items: [
          "rel=canonical là tín hiệu mạnh cho Google biết URL nào là bản chính; nên đặt canonical tự trỏ về chính trang đó và dùng URL tuyệt đối.",
          "Việc khai báo canonical là tuỳ chọn, nhưng Google khuyến khích dùng.",
          "Sitemap hữu ích khi website mới và ít liên kết từ bên ngoài, hoặc website lớn; sau đó gửi sitemap qua Search Console.",
        ],
      },
      { type: "h2", text: "Nội dung trên trang" },
      {
        type: "ul",
        items: [
          "Mỗi trang có thẻ title riêng, mô tả đúng nội dung và ngắn gọn; tránh các nhãn mơ hồ như 'Trang chủ'.",
          "Google không quy định giới hạn ký tự cho title, nhưng hiển thị có thể bị cắt cho vừa chiều rộng thiết bị — nên viết súc tích.",
          "Tránh nhồi từ khoá hoặc lặp cụm từ trong title.",
        ],
      },
      { type: "h2", text: "Trải nghiệm trang" },
      { type: "ul", items: ["Đạt ngưỡng Core Web Vitals ở phân vị 75: LCP ≤ 2,5 giây, INP ≤ 200 ms, CLS ≤ 0,1."] },
      { type: "quote", text: "Làm đúng từ đầu rẻ hơn nhiều so với sửa sau khi trang đã được lập chỉ mục sai." },
      { type: "p", text: "Các mục kỹ thuật này đều nằm trong quy trình bàn giao của chúng tôi. Liên hệ nếu bạn muốn rà soát website hiện tại." },
    ],
  },
]

export const posts: Post[] = [...allPosts].sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
