import { ChevronRightIcon, UsersIcon, QuestionMarkCircleIcon, QueueListIcon } from "@heroicons/react/20/solid";
import { IMenu } from "../models/IMenu";
import { IProgressData } from "../models/IUser";
import { useAppDispatch } from "./store";
import { showSlide, dataSlide } from "./store/api/slide.slice";

interface MenuItemsProps {
  item: IMenu;
  progress: IProgressData;
}

export default function MenuList({ item }: MenuItemsProps) {
  const dispatch = useAppDispatch();

  return (
    <li
      className="px-1 py-1 sm:px-0"
      key={item.id}
      onClick={() => {
        dispatch(showSlide(true));
        dispatch(dataSlide(item.name));
      }}
    >
      <div className="group relative flex items-start space-x-3 py-4">
        <div className="flex-shrink-0">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
          {item.name==='groups' && (
            <UsersIcon
              className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          {item.name==='questions' && (
            <QuestionMarkCircleIcon
              className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          {item.name==='answers' && (
            <QueueListIcon
              className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
            <b>
              <span className="absolute inset-0" aria-hidden="true" />
              {item.text}
            </b>
          </div>
          <p className="text-sm text-[var(--tg-theme-hint-color)]">Всего:</p>
        </div>
        <div className="flex-shrink-0 self-center">
          <ChevronRightIcon
            className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </li>
  );
}
