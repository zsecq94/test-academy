import { Container, Grid, IconName, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'

type ProceduresGridItem = {
  iconName: IconName
  title: string
  description: string
  list?: string[] | null
  footerText?: string | null
}

export function ProceduresGrid() {
  const t = useTranslations('procedures')
  const grid = t.raw('grid') as ProceduresGridItem[]
  return (
    <Container>
      <Grid>
        {grid.map((item, idx) => (
          <div
            key={item.title}
            className="group v1440:col-span-4 v1024:p-20 v1024:gap-7 hover:bg-primary-100 col-span-6 flex flex-col gap-6 bg-gray-50 p-14 text-black transition-colors duration-300 hover:text-white"
          >
            <SvgIcon
              name={item.iconName}
              className="v1024:h-[56px] v1024:w-[56px] h-11 w-11 -translate-x-3"
            />

            <div>
              <p className="v1024:text-base text-xs font-bold">{`Step ${idx + 1}.`}</p>
              <p className="v1024:text-3xl text-lg leading-[48px] font-bold">
                {richKey(t, `grid.${idx}.title`)}
              </p>
            </div>

            <p className="v1024:text-base text-xs font-medium">
              {richKey(t, `grid.${idx}.description`)}
            </p>

            {item.list && (
              <ul className="v1024:text-base group-hover:bg-primary-100 flex list-disc flex-col gap-3 bg-white p-9 pl-17 text-xs transition-colors duration-300">
                {item.list?.map((list) => (
                  <li key={list}>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            )}

            {item.footerText && (
              <p className="v1024:text-base text-xs font-medium">
                {item.footerText}
              </p>
            )}
          </div>
        ))}
      </Grid>
    </Container>
  )
}
