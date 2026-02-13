import clsx from 'clsx'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  [
    'inline-flex items-center justify-center',
    'whitespace-nowrap select-none',
    'transition-colors duration-250',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      intent: {
        solid: '',
        outline: 'border bg-white hover:bg-white-hover',
      },
      shape: {
        pill: 'rounded-full',
        rect: 'rounded-[5px]',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      color: {
        primary: '',
        secondary: '',
        accent: '',
        electricviolet: '',
        tertiaryFill: '',
        gray: '',
      },
    },
    compoundVariants: [
      // SOLID
      {
        intent: 'solid',
        color: 'primary',
        className: 'bg-primary text-white hover:bg-primary-hover',
      },
      {
        intent: 'solid',
        color: 'secondary',
        className: 'bg-secondary text-white hover:bg-secondary-hover',
      },
      {
        intent: 'solid',
        color: 'accent',
        className: 'bg-accent text-white hover:bg-accent-hover',
      },
      {
        intent: 'solid',
        color: 'electricviolet',
        className: 'bg-electricviolet text-white hover:bg-electricviolet-hover',
      },
      {
        intent: 'solid',
        color: 'tertiaryFill',
        className: 'bg-tertiary-fill text-white hover:bg-tertiary-fill-hover',
      },
      {
        intent: 'solid',
        color: 'gray',
        className: 'bg-gray text-white hover:bg-gray-hover',
      },

      // OUTLINE
      {
        intent: 'outline',
        color: 'primary',
        className: 'border-primary text-black hover:border-primary-hover',
      },
      {
        intent: 'outline',
        color: 'secondary',
        className: 'border-secondary text-black hover:border-secondary-hover',
      },
      {
        intent: 'outline',
        color: 'accent',
        className: 'border-accent text-black hover:border-accent-hover',
      },
      {
        intent: 'outline',
        color: 'electricviolet',
        className:
          'border-electricviolet text-black hover:border-electricviolet-hover',
      },
      {
        intent: 'outline',
        color: 'tertiaryFill',
        className:
          'border-tertiary-fill text-black hover:border-tertiary-fill-hover',
      },
      {
        intent: 'outline',
        color: 'gray',
        className: 'border-gray text-black hover:border-gray-hover',
      },
    ],
    defaultVariants: {
      intent: 'solid',
      shape: 'pill',
      color: 'primary',
      fullWidth: false,
    },
  }
)

type ButtonVariants = VariantProps<typeof buttonStyles>

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  ButtonVariants & {
    /**
     * NOTE: className은 필수(사이즈/간격/타이포/아이콘 크기를 부모에서 제어)
     * - ex) "px-6 h-12 gap-2 text-sm"
     */
    className?: string
  }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, intent, shape, color, fullWidth, type = 'button', ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          buttonStyles({ intent, shape, color, fullWidth }),
          className
        )}
        {...props}
      />
    )
  }
)
