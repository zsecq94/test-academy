import { Container, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { ConfirmForm } from '../types'
import { FormRender } from '../_components'
import clsx from 'clsx'

export function ContactForm() {
  const t = useTranslations('contact')
  const confirmForm = t.raw('comfirm') as ConfirmForm

  return (
    <Container>
      <div className="v1680:px-27 v1024:gap-15 flex flex-col gap-9">
        <h2 className="v1024:text-6xl text-3xl font-bold">
          {t('comfirm.title')}
        </h2>

        <div className="flex flex-col gap-5">
          <p className="text-secondary v1024:text-xl text-base font-bold">
            {t('comfirm.subTitle')}
          </p>
          <p className="v1024:text-xl text-sm">
            {richKey(t, 'comfirm.description')}
          </p>
        </div>

        <div
          className={clsx([
            'v768:flex-row flex flex-col items-center gap-9 rounded-[12px] bg-[#2A65C1] text-white',
            'v1680:px-24 v1280:px-18 v1024:px-15 px-10 py-10',
          ])}
        >
          <SvgIcon
            name="email"
            className="v1280:h-25 v1280:w-25 v1024:h-23 v1024:w-23 h-21 w-21"
          />

          <div className="v768:items-start flex flex-col items-center gap-5">
            <p className="v1024:text-lg text-base font-bold">
              {t('comfirm.display.key')}
            </p>
            <p className="v1280:text-3xl v1024:text-2xl text-xl">
              {t('comfirm.display.value')}
            </p>
          </div>
        </div>

        <div className="v1680:px-24 v1280:px-18 v1024:px-15 v1024:py-21 flex flex-col gap-19 rounded-[18px] bg-gray-50 px-10 py-14">
          <FormRender
            formFields={confirmForm.formFields}
            buttonText={confirmForm.buttonText}
          />
        </div>

        <p className="v768:text-xl text-center text-base">
          {t('comfirm.footerText')}
        </p>
      </div>
    </Container>
  )
}
