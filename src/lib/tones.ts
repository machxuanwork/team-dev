export type Tone = "warm" | "green" | "blue" | "sun"

/** Bảng màu dịu cho ảnh minh hoạ tạm (cover dự án, avatar). Khi có ảnh thật, các khối này sẽ không còn dùng tới. */
export const tones: Record<Tone, { gradient: string; solid: string; ink: string }> = {
  warm: { gradient: "from-[#f8d9c9] via-[#f3c0a6] to-[#e9967a]", solid: "#f3c0a6", ink: "#8a3a1c" },
  green: { gradient: "from-[#e2ecd9] via-[#c5d8b9] to-[#9dbb8d]", solid: "#c5d8b9", ink: "#2f4a2b" },
  blue: { gradient: "from-[#e1ebf5] via-[#c0d5ea] to-[#8fb2d6]", solid: "#c0d5ea", ink: "#25476a" },
  sun: { gradient: "from-[#fbeac0] via-[#f7d98a] to-[#eeb85a]", solid: "#f7d98a", ink: "#75510b" },
}
