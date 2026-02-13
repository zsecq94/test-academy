type Props = {
  id: number
  title: string
}

export function GuideTitleBox({ id, title }: Props) {
  return (
    <div className="v768:flex-row v768:items-center flex flex-col items-start justify-center gap-6">
      <div className="bg-secondary v768:h-19 v768:w-19 flex h-14 w-14 items-center justify-center rounded-[8px] text-xl font-semibold text-white">
        <p>{id}</p>
      </div>

      <p className="text-secondary v768:text-xl text-base font-bold">{title}</p>
    </div>
  )
}
