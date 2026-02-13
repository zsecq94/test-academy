'use client'

import clsx from 'clsx'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import { Section2 } from './types'
import { richKey } from '@/i18n/rich'
import { useActiveSection } from '../../../useActiveSection'

const sectionIds = [
  'eligibility',
  'english',
  'conditional',
  'topik',
  'considerations',
]

export function ContentNav() {
  const t = useTranslations('guide')
  const section2 = t.raw('withoutTopik.section2') as Section2

  const activeId = useActiveSection(sectionIds)

  return (
    <div className="flex flex-col gap-6 rounded-r-[18px] border border-gray-200 bg-[#EAEFFA] px-10 py-14">
      <p className="font-semibold">Contents</p>

      <ul className="flex flex-col gap-4">
        {section2.questions.map((question, index) => {
          const id = sectionIds[index]
          const isActive = activeId === id

          return (
            <li key={question}>
              <Link
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()

                  const el = document.getElementById(id)
                  if (!el) return

                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })

                  history.replaceState(null, '', `#${id}`)
                }}
                className="flex items-start gap-3"
              >
                <p
                  className={clsx([
                    'flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white',
                    isActive ? 'bg-primary' : 'bg-gray-400',
                  ])}
                >
                  {index + 1}
                </p>
                <p
                  className={clsx([
                    'text-xs leading-9 font-medium',
                    isActive ? 'text-primary' : 'text-gray-400',
                  ])}
                >
                  {richKey(t, `withoutTopik.section2.questions.${index}`)}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
