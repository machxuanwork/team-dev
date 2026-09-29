/**
 * Nội dung mẫu cho toàn bộ website. Chỉ cần sửa file này (và src/config/site.ts) là cập nhật được nội dung.
 * Mọi tên khách hàng / dự án / con số đều là dữ liệu giả — thay bằng dữ liệu thật của team.
 */

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
    slug: "moc-lam-ecommerce",
    name: "Mộc Lam",
    category: "Thương mại điện tử",
    year: "2025",
    summary: "Cửa hàng nội thất thủ công, tải nhanh gấp 3 và tăng đơn hàng ngay quý đầu.",
    challenge:
      "Mộc Lam là xưởng nội thất thủ công có sản phẩm rất đẹp nhưng website cũ tải chậm, ảnh nặng và thanh toán rối. Phần lớn khách bỏ đi trước khi kịp thêm vào giỏ hàng.",
    solution:
      "Chúng tôi dựng lại toàn bộ bằng Next.js, tối ưu ảnh sản phẩm, viết lại luồng thanh toán còn 3 bước và thêm công cụ xem sản phẩm trong không gian thực (AR) cho các món bán chạy.",
    results: [
      { value: "+38%", label: "tỷ lệ chuyển đổi" },
      { value: "1.2s", label: "thời gian tải trang chính" },
      { value: "-52%", label: "giỏ hàng bị bỏ dở" },
    ],
    tags: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    tone: "warm",
    image: "/projects/moc-lam.png" as string | undefined,
    testimonial: "Đội ngũ hiểu việc kinh doanh của tụi mình hơn cả kỳ vọng.",
  },
  {
    slug: "lua-vang-logistics",
    name: "Lúa Vàng Logistics",
    category: "Hệ thống quản trị",
    year: "2025",
    summary: "Bảng điều khiển theo dõi 400+ xe theo thời gian thực cho công ty vận tải.",
    challenge:
      "Điều phối viên phải mở 4 phần mềm khác nhau để biết xe đang ở đâu, chở gì và có trễ giờ không. Dữ liệu chậm, sai lệch và không ai tin hoàn toàn.",
    solution:
      "Một dashboard duy nhất hiển thị vị trí xe realtime, cảnh báo trễ chuyến tự động và báo cáo hiệu suất tài xế. Backend Go xử lý hàng nghìn tín hiệu GPS mỗi phút.",
    results: [
      { value: "400+", label: "xe theo dõi cùng lúc" },
      { value: "-30%", label: "chuyến giao trễ" },
      { value: "4 → 1", label: "phần mềm cần dùng" },
    ],
    tags: ["React", "Go", "WebSocket", "AWS"],
    tone: "green",
    image: "/projects/lua-vang.png" as string | undefined,
    testimonial: "Sáng nào tụi mình cũng mở nó đầu tiên.",
  },
  {
    slug: "bep-nha-app",
    name: "Bếp Nhà",
    category: "Ứng dụng di động",
    year: "2024",
    summary: "App đặt cơm nhà nấu giao trong khu dân cư, 50.000 lượt tải sau 6 tháng.",
    challenge:
      "Bếp Nhà kết nối những gia đình nấu ăn ngon với hàng xóm quanh đó. Họ cần một app thân thiện với cả người lớn tuổi và chạy ổn định giờ cao điểm bữa trưa.",
    solution:
      "App React Native với luồng đặt món 2 chạm, thông báo đơn theo thời gian thực và cổng thanh toán nội địa. Giao diện chữ lớn, màu ấm, dễ dùng với mọi lứa tuổi.",
    results: [
      { value: "50k", label: "lượt tải sau 6 tháng" },
      { value: "4.8★", label: "đánh giá trên store" },
      { value: "99.9%", label: "uptime giờ cao điểm" },
    ],
    tags: ["React Native", "NestJS", "Firebase", "VNPay"],
    tone: "sun",
    image: "/projects/bep-nha.png" as string | undefined,
    testimonial: "Ba mẹ mình 60 tuổi cũng tự đặt món được.",
  },
  {
    slug: "so-tay-clinic",
    name: "Sổ Tay Clinic",
    category: "Y tế số",
    year: "2024",
    summary: "Hệ thống đặt lịch và hồ sơ bệnh án điện tử cho chuỗi 6 phòng khám.",
    challenge:
      "Lịch hẹn ghi tay và nhắn Zalo khiến phòng khám thường xuyên trùng lịch. Hồ sơ bệnh nhân nằm rải rác, khó tra cứu và tiềm ẩn rủi ro về bảo mật.",
    solution:
      "Cổng đặt lịch cho bệnh nhân, phân quyền cho bác sĩ và lễ tân, hồ sơ mã hoá và nhật ký truy cập đầy đủ. Tích hợp nhắc lịch qua SMS, Zalo.",
    results: [
      { value: "-70%", label: "lịch hẹn bị trùng" },
      { value: "6", label: "phòng khám đang dùng" },
      { value: "100%", label: "hồ sơ được mã hoá" },
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    tone: "blue",
    image: "/projects/so-tay-clinic.png" as string | undefined,
    testimonial: "Lễ tân đỡ áp lực hẳn, bệnh nhân cũng hài lòng hơn.",
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
    name: "Lê Quốc Bảo",
    role: "Senior Backend Engineer",
    bio: "Chuyên hệ thống chịu tải cao và cơ sở dữ liệu. Người mà cả team gọi khi server \"có vẻ hơi lạ\".",
    tone: "blue",
    links: { github: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Phạm Ngọc Anh",
    role: "Frontend Engineer",
    bio: "Ám ảnh với từng pixel và từng mili-giây. Hay chỉnh animation đến khi mượt mới chịu dừng.",
    tone: "sun",
    links: { github: "#", linkedin: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Đỗ Hoàng Long",
    role: "Mobile Engineer",
    bio: "Đã đưa hơn 15 ứng dụng lên App Store và Google Play. Luôn mang theo đủ loại điện thoại để test.",
    tone: "warm",
    links: { github: "#" },
    image: undefined as string | undefined,
  },
  {
    name: "Vũ Thanh Mai",
    role: "Project Manager & QA",
    bio: "Người giữ nhịp cho cả dự án. Tỉ mỉ, điềm tĩnh, và có thể tìm ra lỗi mà không ai nghĩ tới.",
    tone: "green",
    links: { linkedin: "#" },
    image: undefined as string | undefined,
  },
]

export const milestones = [
  { year: "2019", title: "Bắt đầu từ căn phòng nhỏ", text: "Ba người bạn cũ nghỉ việc công ty lớn để làm phần mềm theo cách mình tin. Dự án đầu tiên là website cho một quán cà phê quen." },
  { year: "2021", title: "Thêm mảng mobile", text: "Ra mắt ứng dụng di động đầu tiên và mở rộng team lên 10 người." },
  { year: "2023", title: "Văn phòng mới, khách hàng mới", text: "Làm việc với khách hàng ở Singapore và Úc. Đặt ra chuẩn code review và quy trình QA cho toàn team." },
  { year: "2025", title: "60+ dự án, vẫn nhỏ và tỉ mỉ", text: "Chúng tôi chủ động giữ team gọn để mỗi dự án đều được chăm chút như sản phẩm của chính mình." },
]

/* ---------- Bổ sung: dịch vụ chi tiết, so sánh, chứng nhận, tuyển dụng ---------- */

export const serviceDetails: Record<string, { deliverables: string[]; tech: string[]; timeline: string; from: string }> = {
  web: {
    deliverables: ["Thiết kế UI/UX + prototype", "Website chuẩn SEO, tốc độ cao", "Trang quản trị nội dung (CMS)", "Tích hợp thanh toán, CRM, email", "Hướng dẫn sử dụng & tài liệu kỹ thuật"],
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    timeline: "3 – 12 tuần",
    from: "từ 45 triệu",
  },
  mobile: {
    deliverables: ["Thiết kế theo chuẩn iOS/Android", "Ứng dụng React Native / Flutter", "Push notification, đăng nhập, thanh toán", "Đưa lên App Store & Google Play", "Theo dõi lỗi & phân tích người dùng"],
    tech: ["React Native", "Flutter", "Firebase", "NestJS"],
    timeline: "8 – 16 tuần",
    from: "từ 150 triệu",
  },
  design: {
    deliverables: ["Nghiên cứu & phỏng vấn người dùng", "Wireframe → prototype tương tác", "Design system trên Figma", "Bộ nhận diện giao diện", "Bàn giao chuẩn cho dev"],
    tech: ["Figma", "FigJam", "Storybook", "Lottie"],
    timeline: "2 – 6 tuần",
    from: "từ 25 triệu",
  },
  cloud: {
    deliverables: ["Thiết kế kiến trúc cloud", "CI/CD tự động, môi trường staging", "Giám sát, cảnh báo, sao lưu", "Rà soát & tối ưu chi phí", "Runbook xử lý sự cố"],
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    timeline: "1 – 4 tuần",
    from: "từ 20 triệu",
  },
  ai: {
    deliverables: ["Xác định bài toán đáng làm AI", "Chatbot / trợ lý tra cứu tài liệu", "Tích hợp vào sản phẩm sẵn có", "Đánh giá chất lượng & kiểm soát chi phí", "Bảo vệ dữ liệu riêng tư"],
    tech: ["OpenAI / Claude API", "LangChain", "pgvector", "Python"],
    timeline: "3 – 8 tuần",
    from: "từ 60 triệu",
  },
  maintenance: {
    deliverables: ["Vá lỗi & cập nhật bảo mật", "Theo dõi uptime & hiệu năng 24/7", "Thêm tính năng nhỏ mỗi tháng", "Báo cáo tình trạng hằng tháng", "Kênh hỗ trợ ưu tiên"],
    tech: ["Sentry", "Grafana", "GitHub", "Slack"],
    timeline: "Theo tháng",
    from: "từ 8 triệu/tháng",
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

export const openings = [
  { slug: "senior-frontend", title: "Senior Frontend Engineer", type: "Toàn thời gian", place: "TP.HCM / Hybrid", level: "Senior", tags: ["Next.js", "TypeScript", "Design System"], text: "Dẫn dắt phần giao diện cho các sản phẩm web của khách hàng, review code và kèm cặp các bạn trẻ." },
  { slug: "backend-engineer", title: "Backend Engineer (Node.js / Go)", type: "Toàn thời gian", place: "TP.HCM / Hybrid", level: "Middle – Senior", tags: ["NestJS", "PostgreSQL", "AWS"], text: "Thiết kế API, cơ sở dữ liệu và hệ thống chịu tải cho các sản phẩm đang có người dùng thật." },
  { slug: "product-designer", title: "Product Designer (UI/UX)", type: "Toàn thời gian", place: "TP.HCM / Remote", level: "Middle", tags: ["Figma", "Design System", "Research"], text: "Từ nghiên cứu người dùng tới giao diện hoàn chỉnh, làm việc sát cánh với kỹ sư ngay từ ngày đầu." },
  { slug: "qa-engineer", title: "QA Engineer", type: "Toàn thời gian", place: "TP.HCM", level: "Junior – Middle", tags: ["Playwright", "Cypress", "Manual QA"], text: "Đảm bảo mỗi bản phát hành đều chất lượng bằng cả kiểm thử thủ công lẫn tự động." },
  { slug: "intern-web", title: "Thực tập sinh Web Developer", type: "Thực tập", place: "TP.HCM", level: "Intern", tags: ["React", "JavaScript", "Học hỏi"], text: "Chương trình 3 tháng có mentor kèm 1-1, làm dự án thật và có cơ hội nhận offer chính thức." },
]

export const hiringSteps = [
  { step: "01", title: "Gửi hồ sơ", text: "CV hoặc GitHub/Portfolio đều được. Không cần thư xin việc dài dòng." },
  { step: "02", title: "Trò chuyện 30 phút", text: "Làm quen, chia sẻ về kinh nghiệm và điều bạn đang tìm kiếm." },
  { step: "03", title: "Bài trao đổi kỹ thuật", text: "Cùng giải một bài toán thực tế — không đố mẹo, không viết code trên bảng." },
  { step: "04", title: "Gặp đội ngũ & offer", text: "Bạn gặp những người sẽ làm việc cùng và nhận phản hồi trong 3 ngày làm việc." },
]
