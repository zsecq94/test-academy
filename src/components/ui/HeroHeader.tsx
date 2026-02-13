import * as React from 'react'
import { Container } from '../layout/Container'
import { SvgIcon } from './SvgIcon'

type HeroHeaderProps = {
  title: string
  description?: React.ReactNode
}

export function HeroHeader({ title, description }: HeroHeaderProps) {
  return (
    <section className="hero-section">
      <Container className="hero-section flex flex-col items-center justify-center gap-7 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <SvgIcon name="home" className="h-8 w-8" />
            <p className="text-xs font-semibold">{title}</p>
          </div>
          <h2 className="v1024:text-4xl v1440:text-6xl text-2xl font-bold">
            {title}
          </h2>
        </div>
        {description && (
          <p className="v1024:text-base v1440:text-xl text-sm">{description}</p>
        )}
      </Container>
    </section>
  )
}
