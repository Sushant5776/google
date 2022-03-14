import { HeaderOptionProps } from '@/types/headerOption'

const HeaderOption = ({ Icon, title, selected }: HeaderOptionProps) => {
  console.log(selected)
  return (
    <div
      className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500 ${
        selected && 'border-blue-500 text-blue-500'
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default HeaderOption
