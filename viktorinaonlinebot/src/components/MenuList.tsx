import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { IMenu } from '../models/IMenu'

interface MenuItemsProps {
  toggleS(n: string): void
  item: IMenu
  // count: number
}

export default function MenuList({ item, toggleS }: MenuItemsProps) {

  return (
    <li key={item.id} onClick={() => toggleS(item.name)}>
    <div className="group relative flex items-start space-x-3 py-4">
      <div className="flex-shrink-0">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
        >
          <HomeIcon className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]" aria-hidden="true" />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
          <b>
            <span className="absolute inset-0" aria-hidden="true" />
            {item.text}
          </b>
        </div>
        <p className="text-sm text-[var(--tg-theme-hint-color)]">Всего найдено: </p>
      </div>
      <div className="flex-shrink-0 self-center">
        <ChevronRightIcon className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]" aria-hidden="true" />
      </div>
    </div>
  </li>
  )
}