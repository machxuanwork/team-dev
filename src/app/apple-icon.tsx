import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1E1C19" }}>
        <svg width="110" height="110" viewBox="0 0 32 32">
          <path d="M11 11l6 5-6 5" fill="none" stroke="#FBF8F3" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="18.5" y="20" width="5.5" height="2.8" rx="1.4" fill="#D9532B" />
        </svg>
      </div>
    ),
    size
  )
}
