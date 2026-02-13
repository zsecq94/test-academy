import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  children?: React.ReactNode
  isZoomable?: boolean
  imageSrc: string
  imageAlt: string
  imageClassName?: string
  isOverlay?: boolean
  overlayClassName?: string
  containerClassName?: string
  className?: string
  sizes?: string
}

export function ZoomContent({
  children,
  imageSrc,
  imageAlt,
  imageClassName,
  isOverlay = true,
  overlayClassName = 'bg-black/45',
  containerClassName,
  className,
  sizes,
}: Props) {
  return (
    <div
      className={clsx(
        'group relative w-full overflow-hidden',
        containerClassName
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes={sizes}
        className={clsx(
          'object-cover transition-transform duration-300 group-hover:scale-115',
          imageClassName
        )}
      />
      {isOverlay && (
        <div className={clsx('absolute inset-0', overlayClassName)} />
      )}

      {children && (
        <div className={clsx('relative z-10', className)}>{children}</div>
      )}
    </div>
  )
}
