/** Template được mount lại mỗi lần chuyển trang → chạy hiệu ứng vào trang mượt mà. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>
}
