# Ảnh bìa bài blog

Đặt ảnh vào đúng thư mục này (`public/blog/`), rồi mở `src/data/posts.ts`, tìm bài viết và điền vào trường `image`:

```ts
{
  slug: "checklist-seo-cho-website-moi",
  title: "...",
  ...
  image: "/blog/checklist-seo.jpg", // ← thêm dòng này
}
```

**Yêu cầu ảnh:** tỷ lệ ngang **16:8**, tối thiểu ~1600px chiều ngang, `.jpg` hoặc `.webp`.

Bài nào chưa có ảnh cứ để trống `image` — trang tự hiển thị bìa minh hoạ kiểu editorial thay vì báo lỗi.
