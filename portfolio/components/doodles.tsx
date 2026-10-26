import { cn } from "@/lib/utils"

export function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden className={cn("text-foreground", className)}>
      <path
        d="M98 8c4 22-6 40-22 44-14 4-22-8-14-16 9-9 22 2 18 18-5 20-30 38-62 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M26 88l-10 11 15 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" aria-hidden className={cn("text-foreground", className)}>
      <path d="M8 52L78 14M18 56L92 18M30 58L86 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function AccentSquare({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("relative inline-block h-6 w-6", className)}>
      <span className="absolute inset-0 translate-x-1 translate-y-1 border-2 border-foreground" />
      <span className="absolute inset-0 bg-primary" />
    </span>
  )
}
