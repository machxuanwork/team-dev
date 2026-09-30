import { cn } from "@/lib/utils"

type Props = {
  text: string

  delay?: number

  step?: number
  className?: string
}

export function Words({ text, delay = 0, step = 70, className }: Props) {
  const words = text.split(" ")
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="word-mask">
            <span className={cn("word", className)} style={{ "--d": `${delay + i * step}ms` } as React.CSSProperties}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  )
}
