import { Container, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { GuideDisplayBox, GuideText } from '../../_components'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'

type Section3 = {
  title: string
  description: string
  list: {
    title: string
    items: string[]
  }[]
  description2: string
  display: {
    title: string
    description: string
    email: string
  }
}

export function Conclusion() {
  const t = useTranslations('guide')
  const section3 = t.raw('withoutTopik.section3') as Section3
  return (
    <section className="flex flex-col gap-15">
      <Container>
        <div className="v1920:px-35 v1280:px-30 v1024:py-25 flex flex-col gap-15 py-18">
          <div className="flex flex-col gap-9 text-center">
            <p className="text-accent v1024:text-5xl text-3xl font-bold">
              {section3.title}
            </p>
            <p className="v1024:text-3xl text-xl">
              {richKey(t, 'withoutTopik.section3.description')}
            </p>
          </div>

          <GuideDisplayBox className="flex w-full flex-col">
            {section3.list.map((item, idx) => (
              <div
                key={item.title}
                className={clsx([
                  'flex flex-col gap-7',
                  idx === 0 ? 'v768:pb-18 border-b border-gray-300 pb-10' : '',
                ])}
              >
                <div className="flex items-start gap-3">
                  <SvgIcon
                    name="check"
                    className="h-10 w-10 shrink-0 translate-y-1"
                  />
                  <p className="v768:text-lg text-base font-medium">
                    {richKey(t, `withoutTopik.section3.list.${idx}.title`)}
                  </p>
                </div>
                <ul className="flex list-disc flex-col gap-3 pl-10">
                  {item.items.map((item) => (
                    <li key={item} className="v768:text-lg text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </GuideDisplayBox>

          <GuideText size="xl_to_base">
            {richKey(t, 'withoutTopik.section3.description2')}
          </GuideText>

          <Link
            href={`mailto:${section3.display.email}`}
            className="flex flex-col items-center gap-9 rounded-[12px] bg-[#2A65C1] p-17 text-center text-white transition-colors duration-300 hover:bg-[#2A65C1]/80"
          >
            <SvgIcon name="email" className="v768:h-22 v768:w-22 h-18 w-18" />
            <p className="v768:text-lg text-base font-bold">
              {section3.display.title}
            </p>
            <p className="v768:text-lg text-base">
              {section3.display.description}
            </p>
            <p className="v768:text-3xl text-xl">{section3.display.email}</p>
          </Link>
        </div>
      </Container>
    </section>
  )
}
