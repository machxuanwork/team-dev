import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Ảnh chia sẻ mạng xã hội (Facebook, Zalo, LinkedIn…). Thay bằng ảnh thiết kế riêng khi có: đặt opengraph-image.png vào thư mục app/. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#FBF8F3", color: "#1E1C19", position: "relative" }}>
        <div style={{ position: "absolute", top: -120, right: -80, width: 520, height: 520, borderRadius: 999, background: "#FBE4DA" }} />
        <div style={{ position: "absolute", bottom: -160, left: 420, width: 420, height: 420, borderRadius: 999, background: "#DCE6D5" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: "#1E1C19", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9532B", fontSize: 30, fontWeight: 700 }}>{">"}</div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ fontSize: 76, lineHeight: 1.08, fontWeight: 700, maxWidth: 900 }}>{siteConfig.tagline}</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#6B665D", maxWidth: 860 }}>Website · Ứng dụng di động · Cloud · Thiết kế UI/UX</div>
        </div>
      </div>
    ),
    size
  )
}
