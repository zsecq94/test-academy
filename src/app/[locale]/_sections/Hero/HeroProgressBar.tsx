'use client'

type ProgressBarProps = {
  /** 슬라이드 변경 시 key로 내려주면 애니메이션이 항상 처음부터 다시 시작됨 */
  className?: string
}

const DEFAULT_DURATION_MS = 8000

export function HeroProgressBar({ className }: ProgressBarProps) {
  return (
    <div
      className={[
        'v1280:hidden block',
        'absolute right-0 bottom-0 left-0 z-30 h-2 overflow-hidden bg-white/15',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <div
        className="h-full bg-white"
        style={{
          width: '0%',
          animation: `progress-fill ${DEFAULT_DURATION_MS}ms linear forwards`,
        }}
      />
    </div>
  )
}
