import clsx from 'clsx'
import Image from 'next/image'

export function ODRing({ inView }: { inView: boolean }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`v768:h-[320px] v768:w-[320px] relative h-[200px] w-[200px]`}
      >
        <div className={`bg-accent absolute inset-0 z-10 rounded-full`}>
          <Image
            src="/images/pages/home/character1.png"
            alt="thumb1"
            width={320}
            height={320}
            loading="eager"
            unoptimized
          />

          <div
            className={clsx([
              'bg-electricviolet absolute inset-0 top-0 left-6 h-3 w-20 rotate-60 rounded-full opacity-0',
              'v768:top-0 v768:left-5 v768:h-5 v768:w-25',
              inView ? 'anim-pop-hit' : '',
            ])}
          />
          <div
            className={clsx([
              'bg-electricviolet absolute inset-0 -top-4 left-19 h-3 w-17 rotate-80 rounded-full opacity-0',
              'v768:-top-5 v768:left-22 v768:h-5 v768:w-22',
              inView ? 'anim-pop-hit-delay-150' : '',
            ])}
          />
          <div
            className={clsx([
              'bg-electricviolet absolute inset-0 top-11 -left-2 h-3 w-17 rotate-35 rounded-full opacity-0',
              'v768:top-18 v768:-left-3 v768:h-5 v768:w-22',
              inView ? 'anim-pop-hit-delay-300' : '',
            ])}
          />
        </div>
        <div className="border-accent anim-ripple absolute inset-0 rounded-full border-50" />
        <div className="border-accent anim-ripple-delay-600 absolute inset-0 rounded-full border-50" />
        <div className="border-accent anim-ripple-delay-1200 absolute inset-0 rounded-full border-50" />
      </div>
    </div>
  )
}
