import Image from "next/image"
import { tones, type Tone } from "@/lib/tones"
import { cn } from "@/lib/utils"

const initials = (name: string) => {
  const parts = name.trim().split(/\s+/)
  return ((parts[parts.length - 2]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase()
}

type Props = { name: string; tone?: Tone; image?: string; className?: string; compact?: boolean }

/**
 * Ảnh đại diện. Chưa có ảnh thật → hiển thị monogram thiết kế (nền mesh + chữ cái đầu cỡ lớn), sang và không "giả người".
 * Có ảnh: truyền `image` (vd. "/team/khang.jpg") trong src/data/content.ts.
 */
export function Avatar({ name, tone = "warm", image, className, compact }: Props) {
  const t = tones[tone]
  if (image) {
    return <Image src={image} alt={`Ảnh chân dung ${name}`} width={640} height={800} className={cn("size-full object-cover", className)} />
  }
  return (
    <div
      role="img"
      aria-label={`Ảnh đại diện của ${name}`}
      className={cn("relative size-full overflow-hidden [container-type:size]", className)}
      style={{
        background: `radial-gradient(120% 90% at 85% 5%, #ffffffcc 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, ${t.ink}55 0%, transparent 60%), linear-gradient(140deg, ${t.solid}, ${t.solid}dd)`,
      }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full opacity-60" aria-hidden>
        {[28, 46, 64, 82].map((r) => (
          <circle key={r} cx="88" cy="12" r={r} fill="none" stroke={t.ink} strokeOpacity=".16" strokeWidth=".5" />
        ))}
      </svg>
      <span
        className={cn("absolute font-heading leading-none font-medium tracking-tighter italic", compact ? "inset-0 grid place-items-center" : "bottom-[6cqh] left-[9cqw]")}
        style={{ fontSize: compact ? "38cqw" : "min(46cqw, 60cqh)", color: t.ink }}
      >
        {initials(name)}
      </span>
    </div>
  )
}
