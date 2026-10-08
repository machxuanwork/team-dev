export type IconName =
  | "globe"
  | "smartphone"
  | "palette"
  | "cloud"
  | "sparkles"
  | "shield"
  | "search"
  | "layers"
  | "zap"
  | "messages"
  | "rocket"
  | "wrench"

export const stats = [
  { value: 60, suffix: "+", label: "dự án đã bàn giao" },
  { value: 7, suffix: " năm", label: "làm nghề cùng nhau" },
  { value: 96, suffix: "%", label: "khách quay lại hợp tác tiếp" },
  { value: 18, suffix: "", label: "kỹ sư, designer & QA" },
]

export const clients = [
  "Mộc Lam",
  "Lúa Vàng",
  "Bếp Nhà",
  "Sổ Tay Clinic",
  "Hải Âu Travel",
  "Nhà Sách Gió",
  "An Phát Group",
  "Cà Phê Sương",
]

export const techStack = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Astro"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Go", "PostgreSQL", "Redis"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { group: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions"] },
]

export const services = [
  {
    slug: "web",
    icon: "globe" as IconName,
    title: "Website & Web App",
    short: "Từ trang giới thiệu tới hệ thống quản trị phức tạp.",
    description:
      "Chúng tôi xây website và ứng dụng web bằng Next.js, TypeScript — tải nhanh, chuẩn SEO, dễ mở rộng. Bạn nhận về một sản phẩm gọn gàng, không phải một mớ code khó đụng vào.",
    points: ["Website doanh nghiệp, landing page", "Cổng thương mại điện tử", "Dashboard & hệ thống nội bộ"],
    tone: "sand",
    span: "md:col-span-2",
  },
  {
    slug: "mobile",
    icon: "smartphone" as IconName,
    title: "Ứng dụng di động",
    short: "iOS & Android mượt như app native.",
    description:
      "React Native và Flutter cho những sản phẩm cần ra thị trường nhanh mà vẫn đủ mượt. Có push notification, thanh toán, offline — làm gọn từ đầu tới lúc lên store.",
    points: ["iOS & Android một codebase", "Tích hợp thanh toán, bản đồ", "Lên App Store / Google Play"],
    tone: "sage",
    span: "",
  },
  {
    slug: "design",
    icon: "palette" as IconName,
    title: "Thiết kế UI/UX",
    short: "Giao diện đẹp, dùng là hiểu ngay.",
    description:
      "Designer ngồi cùng kỹ sư ngay từ tuần đầu, nên thiết kế nào ra cũng làm được và làm đúng. Có design system để sản phẩm về sau vẫn nhất quán.",
    points: ["Nghiên cứu người dùng", "Prototype tương tác trên Figma", "Design system"],
    tone: "brand",
    span: "",
  },
  {
    slug: "cloud",
    icon: "cloud" as IconName,
    title: "Cloud & DevOps",
    short: "Hạ tầng ổn định, deploy không toát mồ hôi.",
    description:
      "Thiết lập CI/CD, giám sát, sao lưu và tối ưu chi phí cloud. Team bạn deploy được bất cứ lúc nào mà không phải cầu nguyện.",
    points: ["CI/CD tự động", "Giám sát & cảnh báo", "Tối ưu chi phí AWS"],
    tone: "sky",
    span: "",
  },
  {
    slug: "ai",
    icon: "sparkles" as IconName,
    title: "Tích hợp AI",
    short: "Đưa AI vào sản phẩm đúng chỗ, đúng cách.",
    description:
      "Chatbot chăm sóc khách hàng, tìm kiếm thông minh, tự động hoá tài liệu. Chúng tôi chỉ đề xuất AI khi nó thực sự tiết kiệm thời gian hoặc tiền bạc cho bạn.",
    points: ["Chatbot & trợ lý nội bộ", "Tìm kiếm ngữ nghĩa", "Tự động hoá quy trình"],
    tone: "sand",
    span: "",
  },
  {
    slug: "maintenance",
    icon: "wrench" as IconName,
    title: "Bảo trì & đồng hành",
    short: "Ra mắt rồi, chúng tôi vẫn ở đây.",
    description:
      "Sản phẩm sống cần được chăm. Chúng tôi nhận vá lỗi, nâng cấp, theo dõi hiệu năng và bảo mật — có cam kết thời gian phản hồi rõ ràng bằng văn bản.",
    points: ["SLA phản hồi rõ ràng", "Cập nhật bảo mật", "Báo cáo hàng tháng"],
    tone: "sand",
    span: "md:col-span-2",
  },
]

export const projects = [
  {
    slug: "thien-phu-construction",
    group: "website",
    name: "Thiên Phú Xây Dựng",
    category: "Website giới thiệu · Xây dựng",
    year: "2026",
    summary: "Website giới thiệu năng lực tổng thầu xây dựng: lĩnh vực hoạt động, hồ sơ dự án tiêu biểu và biểu mẫu nhận báo giá.",
    challenge:
      "Doanh nghiệp xây dựng thường có hồ sơ năng lực ở dạng file PDF rời rạc, khách hàng khó đánh giá uy tín trước khi liên hệ. Website cần thể hiện rõ lĩnh vực hoạt động, dự án tiêu biểu, chứng chỉ, quy trình an toàn lao động và một đường dẫn ngắn tới yêu cầu báo giá.",
    solution:
      "Cấu trúc nhiều tầng: trang chủ với hero và các lĩnh vực; trang dự án có bộ lọc theo loại công trình; trang năng lực gồm nhân sự, thiết bị, chứng chỉ; mục tin tức; biểu mẫu báo giá gửi thẳng về email và CRM. Dựng bằng Next.js, tối ưu SEO theo từ khoá ngành và khu vực.",
    results: [
      { value: "8", label: "trang chính, hiển thị tốt trên máy tính và điện thoại" },
      { value: "4", label: "lĩnh vực hoạt động trình bày riêng" },
      { value: "1", label: "biểu mẫu báo giá nối thẳng email và CRM" },
    ],
    tags: ["Next.js", "CMS", "SEO", "Google Maps"],
    tone: "blue",
    image: "/projects/thien-phu-construction.png" as string | undefined,
  },
  {
    slug: "la-sen-spa",
    group: "website",
    name: "Lá Sen Spa",
    category: "Website giới thiệu · Spa & Wellness",
    year: "2026",
    summary: "Website spa với trang dịch vụ, bảng liệu trình và đặt lịch trực tuyến theo dịch vụ và khung giờ còn trống.",
    challenge:
      "Spa phụ thuộc nhiều vào lịch hẹn nhưng thường nhận đặt lịch qua tin nhắn, dễ trùng giờ và khó nhắc khách. Khách mới lại cần thấy ngay dịch vụ, liệu trình, thời lượng và không gian trước khi quyết định.",
    solution:
      "Giao diện nhẹ nhàng, ưu tiên hình ảnh và nội dung từng liệu trình. Luồng đặt lịch ba bước: chọn dịch vụ, chọn khung giờ còn trống, xác nhận (có thể đặt cọc). Trang quản trị cho lễ tân xem lịch theo ngày và theo kỹ thuật viên, kèm nhắc lịch tự động.",
    results: [
      { value: "3", label: "bước để đặt một lịch hẹn" },
      { value: "6", label: "trang chính: dịch vụ, liệu trình, bảng giá, đặt lịch…" },
      { value: "2", label: "kênh nhắc lịch: SMS và Zalo" },
    ],
    tags: ["Next.js", "Đặt lịch", "Thanh toán cọc", "Zalo"],
    tone: "warm",
    image: "/projects/la-sen-spa.png" as string | undefined,
  },
  {
    slug: "bep-lang-restaurant",
    group: "website",
    name: "Bếp Làng",
    category: "Website giới thiệu · Nhà hàng",
    year: "2026",
    summary: "Website nhà hàng món Việt với thực đơn có hình, đặt bàn trực tuyến theo giờ và số khách, trang ưu đãi theo mùa.",
    challenge:
      "Khách thường tìm nhà hàng trên điện thoại ngay trước bữa ăn: họ cần xem thực đơn, địa chỉ, giờ mở cửa và đặt bàn trong vài chạm. Thực đơn dạng ảnh chụp hay file PDF vừa khó đọc vừa nặng, làm trang tải chậm.",
    solution:
      "Thực đơn dạng dữ liệu, lọc theo nhóm món, ảnh tối ưu tải nhanh. Luồng đặt bàn chọn ngày, giờ, số khách và gửi xác nhận cho nhà hàng. Mỗi chi nhánh có trang riêng với bản đồ, giờ mở cửa và số điện thoại bấm gọi ngay.",
    results: [
      { value: "3", label: "thông tin để đặt bàn: ngày, giờ, số khách" },
      { value: "4", label: "nhóm món trên thực đơn trực tuyến" },
      { value: "100%", label: "bố cục ưu tiên điện thoại (mobile-first)" },
    ],
    tags: ["Next.js", "Đặt bàn", "Thực đơn số", "Bản đồ"],
    tone: "sun",
    image: "/projects/bep-lang-restaurant.png" as string | undefined,
  },
  {
    slug: "chamcong-360",
    group: "software",
    name: "ChấmCông 360",
    category: "Phần mềm · Chấm công & nhân sự",
    year: "2026",
    summary: "Phần mềm quản lý chấm công và nhân sự: chấm công bằng GPS, FaceID hoặc QR, quản lý ca, nghỉ phép và xuất bảng lương.",
    challenge:
      "Chấm công bằng bảng tính hoặc sổ giấy dễ sai sót, khó kiểm soát đi muộn và gian lận hộ. Bộ phận nhân sự mất nhiều ngày cuối tháng để tổng hợp giờ công trước khi tính lương.",
    solution:
      "Ứng dụng di động cho nhân viên chấm công trong vùng địa lý cho phép bằng GPS, nhận diện khuôn mặt hoặc mã QR. Web quản trị cấu hình ca làm, quy tắc đi muộn, luồng duyệt nghỉ phép; báo cáo giờ công tự tổng hợp và xuất Excel phục vụ tính lương.",
    results: [
      { value: "3", label: "hình thức chấm công: GPS, FaceID, QR" },
      { value: "4", label: "phân hệ: chấm công, ca làm, nghỉ phép, bảng lương" },
      { value: "2", label: "nền tảng: web quản trị và ứng dụng di động" },
    ],
    tags: ["React", "NestJS", "PostgreSQL", "React Native"],
    tone: "blue",
    image: "/projects/chamcong-360.png" as string | undefined,
  },
  {
    slug: "bep-truong-pos",
    group: "software",
    name: "Bếp Trưởng POS",
    category: "Phần mềm · Quản lý nhà hàng",
    year: "2026",
    summary: "Phần mềm quản lý nhà hàng: sơ đồ bàn, gọi món bằng điện thoại, màn hình bếp, thanh toán và báo cáo.",
    challenge:
      "Nhà hàng đông khách cần phối hợp nhịp nhàng giữa phục vụ, bếp và thu ngân. Ghi order bằng giấy dễ nhầm món, bếp không nắm được thứ tự ưu tiên và thu ngân tính tiền chậm vào giờ cao điểm.",
    solution:
      "Sơ đồ bàn theo thời gian thực với ba trạng thái. Nhân viên gọi món trên điện thoại hoặc máy tính bảng, order gửi thẳng tới màn hình bếp. Thu ngân gộp hoặc tách hoá đơn theo bàn; kho nguyên liệu trừ theo định lượng món.",
    results: [
      { value: "3", label: "trạng thái bàn: trống, đang phục vụ, chờ thanh toán" },
      { value: "4", label: "phân hệ: sơ đồ bàn, gọi món, bếp, kho" },
      { value: "1", label: "luồng order từ bàn đến bếp, không cần ghi giấy" },
    ],
    tags: ["Next.js", "NestJS", "WebSocket", "PostgreSQL"],
    tone: "sun",
    image: "/projects/bep-truong-pos.png" as string | undefined,
  },
  {
    slug: "hat-vang-cafe-pos",
    group: "software",
    name: "Hạt Vàng Coffee POS",
    category: "Phần mềm · Quản lý quán cà phê",
    year: "2026",
    summary: "Phần mềm bán hàng và quản lý quán cà phê: màn hình bán nhanh, kho nguyên liệu theo định lượng và báo cáo doanh thu theo ca.",
    challenge:
      "Quán cà phê có số đơn lớn, giá trị mỗi đơn nhỏ nên mọi thao tác phải nhanh. Chủ quán lại cần biết món nào bán chạy, nguyên liệu nào sắp hết và doanh thu từng ca mà không phải ngồi tổng hợp thủ công.",
    solution:
      "Màn hình bán hàng dạng lưới món có ảnh, thêm món một chạm, thanh toán tiền mặt hoặc mã QR. Mỗi món gắn công thức định lượng để tự trừ kho và cảnh báo sắp hết. Báo cáo theo giờ, ca và chi nhánh xem được ngay trên điện thoại.",
    results: [
      { value: "1", label: "chạm để thêm món vào đơn" },
      { value: "2", label: "cách thanh toán trên màn hình: tiền mặt, QR/thẻ" },
      { value: "3", label: "báo cáo: theo giờ, theo ca, theo chi nhánh" },
    ],
    tags: ["React", "NestJS", "PostgreSQL", "Báo cáo"],
    tone: "warm",
    image: "/projects/hat-vang-cafe-pos.png" as string | undefined,
  },
  {
    slug: "cau-noi-portal-cms",
    group: "software",
    name: "Cầu Nối Portal & CMS",
    category: "Phần mềm · Cổng nội bộ & CMS",
    year: "2026",
    summary: "Cổng thông tin nội bộ và hệ quản trị nội dung: đăng tin, phê duyệt nhiều cấp, phân quyền và lối tắt tới các nghiệp vụ hằng ngày.",
    challenge:
      "Thông báo nội bộ rải rác qua nhóm chat và email nên nhân viên dễ bỏ sót, còn bộ phận truyền thông không biết ai đã duyệt gì. Doanh nghiệp cần một nơi tập trung để đăng tin, duyệt bài và truy cập nhanh các ứng dụng nội bộ.",
    solution:
      "CMS có trình soạn thảo, chuyên mục, lịch xuất bản và luồng phê duyệt nhiều cấp. Portal cho nhân viên hiển thị tin nổi bật, lối tắt tới nghỉ phép, chấm công, phiếu lương và danh sách việc cần duyệt. Phân quyền theo vai trò và phòng ban, đăng nhập một lần (SSO).",
    results: [
      { value: "3", label: "cấp phê duyệt: biên tập, trưởng phòng, ban giám đốc" },
      { value: "6", label: "lối tắt nghiệp vụ trên portal nhân viên" },
      { value: "1", label: "tài khoản đăng nhập một lần cho mọi ứng dụng" },
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "SSO"],
    tone: "green",
    image: "/projects/cau-noi-portal-cms.png" as string | undefined,
  },
] as const

export const processSteps = [
  {
    step: "01",
    title: "Lắng nghe & làm rõ",
    text: "Một buổi trò chuyện thẳng thắn về mục tiêu, ngân sách và những điều bạn lo lắng. Chúng tôi hỏi nhiều — và sẵn sàng nói \"cái này chưa cần làm\".",
    duration: "1 tuần",
  },
  {
    step: "02",
    title: "Thiết kế & chốt phạm vi",
    text: "Wireframe, prototype trên Figma và bản kế hoạch có mốc thời gian rõ ràng. Bạn xem, chỉnh, duyệt trước khi dòng code đầu tiên được viết.",
    duration: "1–2 tuần",
  },
  {
    step: "03",
    title: "Xây dựng theo sprint",
    text: "Làm việc theo chu kỳ 2 tuần, cuối mỗi chu kỳ có bản demo thật để bạn dùng thử. Không có chuyện mất tích 3 tháng rồi mới báo cáo.",
    duration: "4–12 tuần",
  },
  {
    step: "04",
    title: "Kiểm thử & ra mắt",
    text: "QA kiểm tra kỹ trên nhiều thiết bị, đo hiệu năng và bảo mật. Chúng tôi trực cùng bạn trong ngày ra mắt để mọi thứ trơn tru.",
    duration: "1 tuần",
  },
  {
    step: "05",
    title: "Đồng hành sau ra mắt",
    text: "Theo dõi, sửa lỗi và cải tiến dựa trên dữ liệu thật từ người dùng. Bàn giao tài liệu đầy đủ nếu bạn muốn tự vận hành.",
    duration: "Lâu dài",
  },
]

export const principles = [
  {
    icon: "messages" as IconName,
    title: "Nói thật, nói sớm",
    text: "Có rủi ro, trễ tiến độ hay ý tưởng chưa ổn — bạn sẽ nghe từ chúng tôi đầu tiên, kèm theo phương án.",
  },
  {
    icon: "layers" as IconName,
    title: "Code để người khác đọc",
    text: "Kiến trúc rõ ràng, có test, có tài liệu. Ngày mai đổi người vẫn tiếp quản được.",
  },
  {
    icon: "zap" as IconName,
    title: "Nhanh là một tính năng",
    text: "Chúng tôi đo Core Web Vitals trên từng bản build, vì một trang chậm là một khách hàng đã rời đi.",
  },
  {
    icon: "shield" as IconName,
    title: "An toàn theo mặc định",
    text: "Bảo mật không phải phần thêm vào cuối dự án. Nó nằm trong từng quyết định thiết kế.",
  },
]

export const testimonials = [
  {
    quote:
      "Điều mình thích nhất là họ dám phản biện. Có những tính năng tụi mình đòi làm, họ bảo \"để sau\" và giải thích rất thuyết phục. Cuối cùng tiết kiệm được cả tháng công.",
    name: "Chị Lan Phương",
    role: "Founder, Mộc Lam",
  },
  {
    quote:
      "Lần đầu tiên làm với một team mà mình không phải nhắc deadline. Cuối sprint nào cũng có bản demo, chạy thật chứ không phải slide.",
    name: "Anh Quang Huy",
    role: "Giám đốc vận hành, Lúa Vàng Logistics",
  },
  {
    quote:
      "App ra mắt đúng hẹn, lượng người dùng tăng gấp mấy lần dự kiến mà hệ thống vẫn chạy êm. Team xử lý sự cố lúc 10 giờ đêm mà không hề than phiền.",
    name: "Chị Thảo Vy",
    role: "CEO, Bếp Nhà",
  },
]

export const engagementModels = [
  {
    title: "Dự án trọn gói",
    text: "Phạm vi và giá cố định. Phù hợp khi bạn đã biết rõ cần gì và muốn có cam kết cụ thể.",
    for: "Website, MVP, app có phạm vi rõ",
    features: ["Báo giá & timeline cố định", "Một đầu mối quản lý dự án", "Bảo hành 3 tháng sau bàn giao"],
    highlight: false,
  },
  {
    title: "Team chuyên trách",
    text: "Một nhóm kỹ sư làm việc như đội nội bộ của bạn, tính theo tháng. Linh hoạt khi yêu cầu thay đổi liên tục.",
    for: "Sản phẩm đang phát triển, startup",
    features: ["Điều chỉnh quy mô theo tháng", "Họp hằng ngày với team bạn", "Có thể chuyển giao lại bất cứ lúc nào"],
    highlight: true,
  },
  {
    title: "Bảo trì & tối ưu",
    text: "Gói theo tháng cho sản phẩm đã chạy: vá lỗi, cập nhật, tối ưu và giám sát.",
    for: "Hệ thống đang vận hành",
    features: ["SLA phản hồi bằng văn bản", "Báo cáo hiệu năng hằng tháng", "Giờ hỗ trợ khẩn cấp"],
    highlight: false,
  },
]

export const faqs = [
  {
    q: "Một website hay ứng dụng thường mất bao lâu và chi phí thế nào?",
    a: "Website giới thiệu thường mất 3–5 tuần, ứng dụng web hoặc mobile từ 2–4 tháng tuỳ độ phức tạp. Chi phí phụ thuộc phạm vi cụ thể nên chúng tôi báo giá sau buổi trao đổi đầu tiên (miễn phí) — luôn kèm bảng chi tiết từng hạng mục để bạn biết mình đang trả tiền cho gì.",
  },
  {
    q: "Tôi chưa có ý tưởng rõ ràng, có thể làm việc với các bạn không?",
    a: "Hoàn toàn được. Nhiều khách hàng đến với một vấn đề chứ chưa có giải pháp. Giai đoạn đầu chúng tôi cùng bạn làm rõ mục tiêu, người dùng và phạm vi tối thiểu (MVP) — để bạn bắt đầu nhỏ, kiểm chứng, rồi mới mở rộng.",
  },
  {
    q: "Ai sở hữu mã nguồn sau khi dự án hoàn thành?",
    a: "Bạn. Toàn bộ mã nguồn, thiết kế và tài liệu được bàn giao và thuộc quyền sở hữu của bạn sau khi thanh toán. Chúng tôi làm việc trên repository của chính bạn ngay từ đầu, không có chuyện bị \"khoá\" vào team.",
  },
  {
    q: "Các bạn có nhận sửa, nâng cấp hệ thống đã có sẵn không?",
    a: "Có. Chúng tôi thường bắt đầu bằng một buổi đánh giá kỹ thuật ngắn (code review, hiệu năng, bảo mật) rồi đề xuất lộ trình: sửa dần từng phần hay viết lại. Không phải lúc nào cũng cần làm lại từ đầu.",
  },
  {
    q: "Làm sao để theo dõi tiến độ dự án?",
    a: "Bạn có quyền truy cập bảng công việc (Linear/Jira/Notion tuỳ bạn), một kênh chat chung với team và bản demo mỗi 2 tuần. Có một người quản lý dự án phụ trách trả lời bạn trong giờ làm việc.",
  },
  {
    q: "Sau khi bàn giao, nếu có lỗi thì sao?",
    a: "Mọi dự án trọn gói được bảo hành lỗi miễn phí trong 3 tháng. Sau đó bạn có thể chọn gói bảo trì theo tháng với thời gian phản hồi được cam kết bằng văn bản, hoặc gọi chúng tôi khi cần.",
  },
]

export const team = [
  {
    name: "Nguyễn Minh Khang",
    role: "Founder & Tech Lead",
    bio: "12 năm làm phần mềm, từng dẫn dắt team kỹ thuật ở hai công ty sản phẩm trước khi lập DevTeam. Thích những bài toán kiến trúc và cà phê đen.",
    tone: "warm",
    links: { linkedin: "#", github: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Trần Thu Hà",
    role: "Design Lead",
    bio: "Designer sản phẩm với con mắt kỹ tính. Tin rằng thiết kế tốt là khi người dùng không cần nghĩ mà vẫn đi đúng đường.",
    tone: "green",
    links: { linkedin: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Mạch Ngọc Xuân",
    role: "Fullstack Developer",
    bio: "Làm chủ cả hai đầu: dựng API bằng NestJS buổi sáng, tinh chỉnh giao diện Next.js buổi chiều. Thích nhận trọn một tính năng từ đầu đến cuối để hiểu rõ toàn hệ thống, không chỉ mảnh mình phụ trách.",
    tone: "sun",
    links: { linkedin: "#", github: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Đăng Công Huynh",
    role: "Fullstack Developer",
    bio: "Thích đào sâu vào hiệu năng và cơ sở dữ liệu, nhưng vẫn tự tay chỉnh giao diện khi cần. Không ngại nhận một tính năng từ lúc chỉ là ý tưởng tới lúc chạy thật trên production.",
    tone: "blue",
    links: { linkedin: "#", github: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Mai Thành Hải Quân",
    role: "Fullstack Developer",
    bio: "Quen với việc chuyển qua lại giữa frontend và backend trong cùng một buổi làm việc. Viết test trước khi viết tính năng, và hiếm khi để lại một đoạn code không ai hiểu nổi.",
    tone: "warm",
    links: { linkedin: "#", github: "#" },
    image: undefined as string | undefined,
  },
]

export const serviceDetails: Record<string, { deliverables: string[]; tech: string[]; timeline: string; from: string }> = {
  web: {
    deliverables: ["Thiết kế UI/UX + prototype", "Website chuẩn SEO, tốc độ cao", "Trang quản trị nội dung (CMS)", "Tích hợp thanh toán, CRM, email", "Hướng dẫn sử dụng & tài liệu kỹ thuật"],
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    timeline: "3 – 12 tuần",
    from: "Báo giá theo yêu cầu",
  },
  mobile: {
    deliverables: ["Thiết kế theo chuẩn iOS/Android", "Ứng dụng React Native / Flutter", "Push notification, đăng nhập, thanh toán", "Đưa lên App Store & Google Play", "Theo dõi lỗi & phân tích người dùng"],
    tech: ["React Native", "Flutter", "Firebase", "NestJS"],
    timeline: "8 – 16 tuần",
    from: "Báo giá theo yêu cầu",
  },
  design: {
    deliverables: ["Nghiên cứu & phỏng vấn người dùng", "Wireframe → prototype tương tác", "Design system trên Figma", "Bộ nhận diện giao diện", "Bàn giao chuẩn cho dev"],
    tech: ["Figma", "FigJam", "Storybook", "Lottie"],
    timeline: "2 – 6 tuần",
    from: "Báo giá theo yêu cầu",
  },
  cloud: {
    deliverables: ["Thiết kế kiến trúc cloud", "CI/CD tự động, môi trường staging", "Giám sát, cảnh báo, sao lưu", "Rà soát & tối ưu chi phí", "Runbook xử lý sự cố"],
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    timeline: "1 – 4 tuần",
    from: "Báo giá theo yêu cầu",
  },
  ai: {
    deliverables: ["Xác định bài toán đáng làm AI", "Chatbot / trợ lý tra cứu tài liệu", "Tích hợp vào sản phẩm sẵn có", "Đánh giá chất lượng & kiểm soát chi phí", "Bảo vệ dữ liệu riêng tư"],
    tech: ["OpenAI / Claude API", "LangChain", "pgvector", "Python"],
    timeline: "3 – 8 tuần",
    from: "Báo giá theo yêu cầu",
  },
  maintenance: {
    deliverables: ["Vá lỗi & cập nhật bảo mật", "Theo dõi uptime & hiệu năng 24/7", "Thêm tính năng nhỏ mỗi tháng", "Báo cáo tình trạng hằng tháng", "Kênh hỗ trợ ưu tiên"],
    tech: ["Sentry", "Grafana", "GitHub", "Slack"],
    timeline: "Theo tháng",
    from: "Báo giá theo yêu cầu",
  },
}

export const comparison = [
  { topic: "Báo giá", us: "Chi tiết từng hạng mục, cố định phạm vi", others: "Một con số chung chung, phát sinh thêm về sau" },
  { topic: "Tiến độ", us: "Demo chạy thật mỗi 2 tuần", others: "Im lặng vài tháng rồi mới báo cáo" },
  { topic: "Người làm", us: "Đúng những người bạn đã gặp", others: "Đổi người sau khi ký hợp đồng" },
  { topic: "Mã nguồn", us: "Thuộc về bạn, nằm trên repo của bạn", others: "Bị giữ lại hoặc khó bàn giao" },
  { topic: "Sau ra mắt", us: "Bảo hành 3 tháng, SLA bằng văn bản", others: "Liên hệ khó, tính phí mọi thứ" },
]

export const credentials = [
  { title: "AWS Partner", text: "Đối tác dịch vụ cloud" },
  { title: "Google Cloud", text: "Kỹ sư được chứng nhận" },
  { title: "OWASP", text: "Quy trình bảo mật theo chuẩn" },
  { title: "ISO 27001", text: "Thực hành quản trị an toàn thông tin" },
]

export const benefits = [
  { icon: "rocket" as IconName, title: "Lớn lên cùng sản phẩm thật", text: "Không làm việc vặt. Bạn được sở hữu tính năng từ thiết kế tới lúc lên production." },
  { icon: "layers" as IconName, title: "Ngân sách học tập 20 triệu/năm", text: "Khoá học, sách, hội nghị — chọn thứ bạn thật sự muốn học." },
  { icon: "shield" as IconName, title: "Bảo hiểm sức khoẻ cao cấp", text: "Áp dụng cho cả bạn và người thân sau 1 năm làm việc." },
  { icon: "zap" as IconName, title: "Làm việc linh hoạt", text: "Hybrid, giờ giấc thoải mái. Chỉ cần có mặt ở các buổi họp quan trọng." },
  { icon: "messages" as IconName, title: "Văn hoá nói thẳng", text: "Góp ý cởi mở, không đổ lỗi. Sai thì cùng sửa, đúng thì cùng ăn mừng." },
  { icon: "sparkles" as IconName, title: "Thiết bị & môi trường tốt", text: "MacBook Pro, màn hình 4K, văn phòng thoáng và cà phê không giới hạn." },
]

export type Opening = { slug: string; title: string; type: string; place: string; level: string; tags: string[]; text: string }

/** Hiện tại chưa tuyển vị trí nào. Khi có đợt tuyển mới, thêm object vào đây theo đúng mẫu cũ (xem lịch sử file). */
export const openings: Opening[] = []

export const hiringSteps = [
  { step: "01", title: "Gửi hồ sơ", text: "CV hoặc GitHub/Portfolio đều được. Không cần thư xin việc dài dòng." },
  { step: "02", title: "Trò chuyện 30 phút", text: "Làm quen, chia sẻ về kinh nghiệm và điều bạn đang tìm kiếm." },
  { step: "03", title: "Bài trao đổi kỹ thuật", text: "Cùng giải một bài toán thực tế — không đố mẹo, không viết code trên bảng." },
  { step: "04", title: "Gặp đội ngũ & offer", text: "Bạn gặp những người sẽ làm việc cùng và nhận phản hồi trong 3 ngày làm việc." },
]

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`

/** Ảnh thật (Wikimedia Commons, giấy phép CC0) minh hoạ cho từng dịch vụ. */
export const serviceImages: Record<string, { src: string; alt: string; author: string; license: string; url: string }> = {
  web: { src: "/services/web.jpg", alt: "Lập trình viên làm việc trên máy iMac", author: "Lee Campbell", license: "CC0", url: commons("Developer_working_on_an_iMac_(Unsplash).jpg") },
  mobile: { src: "/services/mobile.jpg", alt: "Một phụ nữ dùng điện thoại thông minh tại Việt Nam", author: "Tony Lam Hoang", license: "CC0", url: commons("Vietnam_woman_on_smartphone_(Unsplash).jpg") },
  design: { src: "/services/design.jpg", alt: "Bàn làm việc của designer với hai màn hình", author: "Lee Campbell", license: "CC0", url: commons("Designer%27s_two-screen_setup_(Unsplash).jpg") },
  cloud: { src: "/services/cloud.jpg", alt: "Mặt sau thiết bị máy chủ trong tủ rack", author: "Thomas Kvistholt", license: "CC0", url: commons("Beautiful_technology_(Unsplash).jpg") },
  ai: { src: "/services/ai.jpg", alt: "Những dòng mã nguồn nhiều màu trên màn hình", author: "Ilya Pavlov", license: "CC0", url: commons("Colorful_lines_of_code_(Unsplash).jpg") },
  maintenance: { src: "/services/maintenance.jpg", alt: "Các dòng mã nguồn trên màn hình", author: "Artem Sapegin", license: "CC0", url: commons("Lines_of_code_(Unsplash).jpg") },
}
