'use client'

import clsx from 'clsx'
import { Grid } from '@/components'
import { Link } from '@/i18n/navigation'
import { useActiveSection } from '../../../useActiveSection'

const sectionIds = ['visa', 'language', 'university', 'preparation']

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function ContentMobileNav() {
  const activeId = useActiveSection(sectionIds)
  return (
    <Grid className="border-primary v768:p-12 v1024:p-14 gap-8 border-t-4 bg-[#EAEFFA] p-5">
      {sectionIds.map((item, index) => {
        const id = sectionIds[index]
        const isActive = activeId === id

        return (
          <Link
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()

              const el = document.getElementById(id)
              if (!el) return

              el.scrollIntoView({ behavior: 'smooth', block: 'start' })

              history.replaceState(null, '', `#${id}`)
            }}
            key={id}
            className={clsx([
              'flex items-center gap-2 rounded-[6px] px-5 py-3 text-xs',
              'transition-all duration-300',
              'v768:col-span-3 v1024:col-span-6 col-span-2',
              isActive ? 'bg-primary text-white' : 'bg-white text-gray-500',
            ])}
          >
            <p className="font-semibold">{index + 1}.</p>
            <p>{capitalize(item)}</p>
          </Link>
        )
      })}
    </Grid>
  )
}
