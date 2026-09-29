# Ảnh dự án

Mỗi dự án dùng ảnh ở **2 chỗ khác nhau** trên trang, và mỗi chỗ sửa ở một file dữ liệu khác nhau.

## 1. Ảnh bìa (thẻ dự án, đầu trang chi tiết, thẻ "dự án tiếp theo")

Sửa trong `src/data/content.ts`, mảng `projects`, trường `image`:

```ts
{
  slug: "moc-lam-ecommerce",
  name: "Mộc Lam",
  ...
  image: "/projects/moc-lam/cover.jpg", // ← thêm dòng này, xoá "undefined as string | undefined"
}
```

- Tỷ lệ ngang **4:3** hoặc **16:10**, tối thiểu ~1600px chiều ngang.

## 2. "Một vài màn hình tiêu biểu" (3 ảnh mỗi dự án, cuối trang chi tiết)

Sửa trong `src/data/project-extras.ts`, đúng dự án đó, mảng `screens`, thêm trường `image` cho từng màn hình:

```ts
screens: [
  { variant: "browser", caption: "Trang chủ và danh mục sản phẩm", image: "/projects/moc-lam/home.jpg" },
  { variant: "phone",   caption: "Trải nghiệm mua hàng trên điện thoại", image: "/projects/moc-lam/mobile.jpg" },
  { variant: "dashboard", caption: "Trang quản lý đơn hàng cho nhân viên", image: "/projects/moc-lam/admin.jpg" },
],
```

Ảnh đầu tiên trong mảng hiển thị to (16:8), hai ảnh sau nhỏ hơn (4:3) — nên chọn ảnh đẹp nhất, rõ nhất đặt lên đầu.

## Cấu trúc thư mục gợi ý

Mỗi dự án một thư mục con để dễ quản lý, đặt trong `public/projects/`:

```
public/projects/
  moc-lam/
    cover.jpg      (dùng cho content.ts)
    home.jpg       (dùng cho screens[0])
    mobile.jpg     (dùng cho screens[1])
    admin.jpg      (dùng cho screens[2])
  lua-vang/
    cover.jpg
    map.jpg
    dashboard.jpg
    calendar.jpg
  bep-nha/
    cover.jpg
    home.jpg
    calendar.jpg
    admin.jpg
  so-tay-clinic/
    cover.jpg
    calendar.jpg
    dashboard.jpg
    portal.jpg
```

**Yêu cầu ảnh chung:**
- Chụp màn hình sản phẩm thật (trình duyệt/điện thoại/dashboard) — không cần chụp nguyên khung viền máy, ảnh chụp phần nội dung là đủ, khung trang đã tự vẽ viền đẹp rồi.
- `.jpg`, `.png` hoặc `.webp`, dung lượng dưới ~800KB mỗi ảnh.

**Chưa có ảnh:** cứ để trống `image` (xoá dòng hoặc để `undefined`) — trang tự hiển thị mockup vẽ bằng CSS/SVG đúng loại giao diện (`variant`: browser / phone / dashboard / calendar / map), không lỗi, không vỡ layout.
