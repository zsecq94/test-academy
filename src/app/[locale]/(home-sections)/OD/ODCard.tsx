import clsx from 'clsx'
import { ODCardType } from '.'

export function ODCard({ item }: { item: ODCardType }) {
  return (
    <div
      className={clsx([
        'bg-primary relative mt-13 flex flex-col items-center justify-start gap-12 rounded-[18px] px-14 pt-22 pb-17 text-center text-white',
        'col-span-4',
        'v768:col-span-3 v768:mt-17',
        'v1024:col-span-6',
        'v1440:col-span-3 v1440:mt-0',
      ])}
    >
      <div
        className={clsx([
          'bg-electricviolet absolute left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full',
          '-top-13 h-21 w-21',
          'v768:-top-17 v768:h-23 v768:w-23',
        ])}
      >
        <p className={clsx(['text-3xl font-semibold', 'v768:text-5xl'])}>
          {item.id}
        </p>
      </div>
      <p className={clsx(['text-lg font-semibold', 'v768:text-2xl'])}>
        {item.title}
      </p>
      <p className={clsx(['text-sm', 'v768:text-base'])}>{item.description}</p>
    </div>
  )
}
