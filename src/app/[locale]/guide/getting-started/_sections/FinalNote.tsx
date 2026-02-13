import { Container, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { GuideDisplayBox } from '../../_components'
import Image from 'next/image'

type Section3 = {
  title: string
  description: string
  display: {
    title: string
    list: string[]
  }
  footerDisplay: {
    title: string
    email: string
  }
}

export function FinalNote() {
  const t = useTranslations('guide')
  const section3 = t.raw('gettingStarted.section3') as Section3

  return (
    <section className="flex flex-col gap-15">
      <Container>
        <div className="v1920:px-35 v1280:px-30 v1024:py-25 flex flex-col gap-15 py-18">
          <div className="flex flex-col gap-9 text-center">
            <p className="text-accent v1024:text-5xl text-3xl font-bold">
              {section3.title}
            </p>
            <p className="v1024:text-3xl text-xl">
              {richKey(t, 'gettingStarted.section3.description')}
            </p>
          </div>

          <GuideDisplayBox className="v768:flex-row v768:items-center flex flex-col">
            <Image
              src="/images/pages/guide/getting-started/thumb3.png"
              alt="getting-started-thumb3"
              width={1000}
              height={1000}
              className="v768:w-33 v768:h-33 h-29 w-full rounded-[12px] object-cover"
            />

            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-3">
                <SvgIcon name="check" className="h-10 w-10 shrink-0" />
                <p className="v768:text-lg text-base font-medium">
                  {section3.display.title}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <ul className="flex list-disc flex-col gap-3 pl-10">
                  {section3.display.list.map((item, index) => (
                    <li key={index} className="v768:text-lg text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GuideDisplayBox>

          <Link
            href={`mailto:${section3.footerDisplay.email}`}
            className="flex flex-col items-center gap-9 rounded-[12px] bg-[#2A65C1] p-17 text-center text-white transition-colors duration-300 hover:bg-[#2A65C1]/80"
          >
            <SvgIcon name="email" className="v768:h-22 v768:w-22 h-18 w-18" />
            <p className="v768:text-lg text-base font-bold">
              {section3.footerDisplay.title}
            </p>
            <p className="v768:text-3xl text-xl">
              {section3.footerDisplay.email}
            </p>
          </Link>
        </div>
      </Container>
    </section>
  )
}
