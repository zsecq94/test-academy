'use client'

type ProgressBarProps = {
  progress: number // 0..1
}

export function HeroProgressBar({ progress }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, progress))

  return (
    <div
      className={[
        'v1024:hidden block',
        'absolute right-0 bottom-0 left-0 z-30 h-2 overflow-hidden bg-white/15',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <div
        className="h-full bg-white"
        style={{
          width: `${clamped * 100}%`,
        }}
      />
    </div>
  )
}
