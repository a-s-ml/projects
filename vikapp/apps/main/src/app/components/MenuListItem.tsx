import {
  ChevronRightIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
} from '@heroicons/react/20/solid';
import { IMenu } from '@models';
import { useAppSelector } from '@store/main';
import { selectMainData } from '../store/slices/mainApp.slice';

interface MenuListItemProps {
  item: IMenu;
}

export default function MenuListItem({ item }: MenuListItemProps) {
  const data = useAppSelector(selectMainData);

  return (
    <li
      className="px-1 py-1 sm:px-0 cursor-pointer"
      key={item.id}
      onClick={() => {
        console.log('asd');
      }}
    >
      <div className="group relative flex items-start space-x-3 py-4">
        <div className="flex-shrink-0">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
            {item.name === 'groups' && (
              <UsersIcon
                className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            {item.name === 'questions' && (
              <QuestionMarkCircleIcon
                className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            {item.name === 'answers' && (
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
          {item.name === 'groups' && (
            <>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Всего: {data?.ProgressData.groupsProgress.groupsAll}
              </p>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Активных:
              </p>
            </>
          )}
          {item.name === 'questions' && (
            <>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Всего: {data?.ProgressData.questionsProgress.questionsAll}
              </p>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Модерированных:{' '}
                {data?.ProgressData.questionsProgress.questionsModerate}
              </p>
            </>
          )}
          {item.name === 'answers' && (
            <>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Всего: {data?.ProgressData.answersProgress.answersAll}
              </p>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Правильных: {data?.ProgressData.answersProgress.answersRight}
              </p>
            </>
          )}
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
