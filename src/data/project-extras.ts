export type ProjectExtra = {
  client: string
  focus: string[]
  published: string
  highlights: { title: string; text: string }[]
  deliverables: string[]
}

/** Dự án mẫu (concept) do DevTeam tự thiết kế để minh hoạ năng lực — thương hiệu và dữ liệu trong ảnh là giả định. */
const client = "Thương hiệu giả định (dự án mẫu)"
const published = "10/2026"

export const projectExtras: Record<string, ProjectExtra> = {
  "thien-phu-construction": {
    client,
    focus: ["Hồ sơ năng lực", "Dự án tiêu biểu", "Nhận báo giá"],
    published,
    highlights: [
      { title: "Hồ sơ dự án có bộ lọc", text: "Mỗi công trình có trang riêng: quy mô, hạng mục, thời gian thi công và hình ảnh; lọc theo loại công trình để khách tìm đúng nhóm dự án họ quan tâm." },
      { title: "Trang năng lực và chứng chỉ", text: "Nhân sự chủ chốt, thiết bị, chứng chỉ và quy trình an toàn lao động được trình bày rõ ràng, thay cho file hồ sơ năng lực dạng PDF." },
      { title: "Biểu mẫu báo giá", text: "Biểu mẫu ngắn thu thập loại công trình, quy mô và khu vực; thông tin gửi thẳng về email và CRM của bộ phận kinh doanh." },
    ],
    deliverables: ["Thiết kế giao diện desktop và mobile", "8 trang chính + trang chi tiết dự án", "Trang quản trị nội dung (CMS)", "Tối ưu SEO và tốc độ tải trang", "Tích hợp bản đồ và biểu mẫu báo giá"],
  },
  "la-sen-spa": {
    client,
    focus: ["Đặt lịch", "Liệu trình", "Nhắc lịch"],
    published,
    highlights: [
      { title: "Đặt lịch theo khung giờ còn trống", text: "Khách chọn dịch vụ, ngày và giờ; hệ thống chỉ hiển thị khung giờ còn trống theo kỹ thuật viên và phòng." },
      { title: "Trang liệu trình rõ ràng", text: "Mỗi liệu trình có mô tả, thời lượng, các bước thực hiện và lưu ý, giúp khách mới yên tâm trước khi đặt." },
      { title: "Đặt cọc và nhắc lịch", text: "Tuỳ chọn đặt cọc để giữ chỗ; tin nhắc lịch qua SMS và Zalo giúp giảm tình trạng khách quên hẹn." },
    ],
    deliverables: ["Thiết kế giao diện tông màu thương hiệu", "Trang dịch vụ, liệu trình, bảng giá", "Luồng đặt lịch và đặt cọc", "Trang quản trị lịch cho lễ tân", "Tích hợp SMS và Zalo"],
  },
  "bep-lang-restaurant": {
    client,
    focus: ["Thực đơn số", "Đặt bàn", "Đa chi nhánh"],
    published,
    highlights: [
      { title: "Thực đơn dạng dữ liệu", text: "Món ăn có ảnh, mô tả, nhóm món và nhãn như cay, chay; cập nhật một lần là hiển thị trên toàn bộ website." },
      { title: "Đặt bàn trong vài chạm", text: "Chọn ngày, giờ và số khách; nhà hàng nhận thông báo, khách nhận xác nhận qua email hoặc tin nhắn." },
      { title: "Trang riêng cho từng chi nhánh", text: "Bản đồ, giờ mở cửa, số điện thoại bấm gọi ngay và ưu đãi riêng theo từng địa điểm." },
    ],
    deliverables: ["Thiết kế giao diện ưu tiên điện thoại", "Thực đơn trực tuyến có lọc nhóm món", "Luồng đặt bàn và thông báo", "Trang chi nhánh và ưu đãi", "Tối ưu ảnh và tốc độ tải"],
  },
  "chamcong-360": {
    client,
    focus: ["GPS · FaceID · QR", "Ca làm việc", "Bảng lương"],
    published,
    highlights: [
      { title: "Chấm công đa hình thức", text: "Nhân viên chấm công bằng GPS trong vùng cho phép, nhận diện khuôn mặt hoặc quét mã QR tại văn phòng." },
      { title: "Ca làm và quy tắc linh hoạt", text: "Cấu hình ca sáng, ca chiều, ca xoay; quy định đi muộn, về sớm, làm thêm giờ cho từng nhóm nhân viên." },
      { title: "Nghỉ phép và phê duyệt", text: "Nhân viên gửi đơn trên điện thoại, quản lý duyệt nhanh; số ngày phép còn lại luôn được cập nhật." },
      { title: "Báo cáo và xuất lương", text: "Giờ công tự tổng hợp theo kỳ lương, xuất Excel theo mẫu để bộ phận kế toán tính lương." },
    ],
    deliverables: ["Web quản trị cho nhân sự", "Ứng dụng di động iOS và Android", "Phân quyền theo vai trò và phòng ban", "Báo cáo giờ công, đi muộn, nghỉ phép", "Xuất dữ liệu Excel phục vụ tính lương"],
  },
  "bep-truong-pos": {
    client,
    focus: ["Sơ đồ bàn", "Màn hình bếp", "Thanh toán"],
    published,
    highlights: [
      { title: "Sơ đồ bàn thời gian thực", text: "Ba trạng thái trực quan: trống, đang phục vụ, chờ thanh toán; cập nhật tức thì trên mọi thiết bị." },
      { title: "Gọi món bằng điện thoại", text: "Phục vụ chọn món tại bàn, gửi order thẳng tới màn hình bếp, hạn chế nhầm món." },
      { title: "Thanh toán linh hoạt", text: "Gộp hoặc tách hoá đơn theo bàn, áp dụng khuyến mãi và nhiều hình thức thanh toán." },
      { title: "Kho và định lượng", text: "Mỗi món gắn công thức nguyên liệu, tự trừ kho khi bán và cảnh báo khi sắp hết." },
    ],
    deliverables: ["Web POS cho thu ngân và quản lý", "Giao diện gọi món cho điện thoại và máy tính bảng", "Màn hình bếp (KDS)", "Quản lý thực đơn, kho và định lượng", "Báo cáo doanh thu theo ca, ngày, tháng"],
  },
  "hat-vang-cafe-pos": {
    client,
    focus: ["Bán nhanh", "Kho nguyên liệu", "Báo cáo ca"],
    published,
    highlights: [
      { title: "Màn hình bán hàng dạng lưới", text: "Món có ảnh, lọc theo nhóm, thêm vào đơn bằng một chạm; thiết kế cho giờ cao điểm." },
      { title: "Định lượng tự trừ kho", text: "Công thức từng món gắn với nguyên liệu; hệ thống trừ kho khi bán và báo sắp hết." },
      { title: "Báo cáo trên điện thoại", text: "Chủ quán xem doanh thu theo giờ, theo ca và theo chi nhánh ngay trên điện thoại." },
    ],
    deliverables: ["Web POS cho quầy thu ngân", "Ứng dụng báo cáo cho chủ quán", "Quản lý thực đơn, kho, nhà cung cấp", "Quản lý nhiều chi nhánh", "In hoá đơn và tem ly"],
  },
  "cau-noi-portal-cms": {
    client,
    focus: ["CMS", "Phê duyệt", "Phân quyền"],
    published,
    highlights: [
      { title: "Soạn bài và lên lịch xuất bản", text: "Trình soạn thảo trực quan, chuyên mục, thư viện ảnh và lịch xuất bản cho bộ phận truyền thông." },
      { title: "Luồng phê duyệt nhiều cấp", text: "Bài viết đi từ biên tập viên đến trưởng phòng và ban giám đốc, mỗi bước đều có lịch sử." },
      { title: "Portal cho nhân viên", text: "Tin nổi bật, lối tắt tới nghỉ phép, chấm công, phiếu lương và danh sách việc cần duyệt trên một màn hình." },
    ],
    deliverables: ["CMS quản trị nội dung", "Portal nhân viên responsive", "Phân quyền theo vai trò, phòng ban", "Đăng nhập một lần (SSO)", "Nhật ký thao tác và lịch sử phiên bản"],
  },
}
