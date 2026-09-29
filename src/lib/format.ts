export const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })
