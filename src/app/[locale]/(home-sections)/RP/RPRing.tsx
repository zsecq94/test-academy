import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export function RPRing({
  inView,
  bubbleText,
}: {
  inView: boolean
  bubbleText: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`v768:h-[320px] v768:w-[320px] relative h-[200px] w-[200px]`}
      >
        <div className={`bg-primary absolute inset-0 z-10 rounded-full`}>
          <Image
            src="/images/pages/home/character2.png"
            alt="thumb2"
            width={320}
            height={320}
            loading="eager"
          />

          <div
            className={clsx([
              'absolute inset-0 -top-15 -left-7 z-20 opacity-0',
              inView ? 'pop-hit' : '',
            ])}
          >
            <div
              className={clsx([
                'bg-neongreen relative flex items-center justify-center rounded-full',
                'h-19 w-27',
                'v768:h-21 v768:w-[200px]',
              ])}
            >
              <p className="text-primary v768:text-3xl text-xl font-bold">
                {bubbleText}
              </p>
              <div className="border-t-neongreen absolute -bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-t-10 border-r-10 border-l-10 border-r-transparent border-l-transparent" />
            </div>
          </div>
        </div>
        <div className="border-primary anim-ripple absolute inset-0 rounded-full border-50" />
        <div className="border-primary anim-ripple-delay-600 absolute inset-0 rounded-full border-50" />
        <div className="border-primary anim-ripple-delay-1200 absolute inset-0 rounded-full border-50" />
      </div>
    </div>
  )
}
