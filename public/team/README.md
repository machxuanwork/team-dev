# Ảnh chân dung đội ngũ

Đặt ảnh vào đúng thư mục này (`public/team/`), rồi mở `src/data/content.ts`, tìm người tương ứng trong mảng `team` và điền vào trường `image`:

```ts
{
  name: "Mạch Ngọc Xuân",
  role: "Fullstack Developer",
  ...
  image: "/team/xuan.jpg", // ← thêm dòng này, xoá "undefined as string | undefined"
}
```

**Tên file gợi ý** (không bắt buộc đúng y hệt, chỉ cần khớp với `image` bạn điền ở trên):

| Thành viên | Đường dẫn gợi ý |
|---|---|
| Nguyễn Minh Khang | `/team/khang.jpg` |
| Trần Thu Hà | `/team/ha.jpg` |
| Mạch Ngọc Xuân | `/team/xuan.jpg` |
| Lê Quốc Bảo | `/team/bao.jpg` |
| Phạm Ngọc Anh | `/team/ngoc-anh.jpg` |
| Đỗ Hoàng Long | `/team/long.jpg` |
| Vũ Thanh Mai | `/team/mai.jpg` |

**Yêu cầu ảnh:**
- Tỷ lệ dọc, khoảng **4:5** (vd. 800×1000px trở lên) — khớp khung hiển thị trên trang Đội ngũ và trang Chủ.
- Định dạng `.jpg` hoặc `.webp`, dung lượng dưới ~500KB (Next.js sẽ tự tối ưu thêm).
- Ảnh chân dung rõ mặt, nền đơn giản — ảnh càng đồng bộ phong cách giữa mọi người thì trang càng chuyên nghiệp.

Người nào chưa có ảnh cứ để nguyên `image: undefined` — trang sẽ tự hiển thị monogram (chữ cái đầu tên trên nền màu) thay vì báo lỗi.
