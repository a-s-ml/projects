import { MainBlock, Page } from '@components';
import Logo from '../../assets/Logo.png';
import { IMenu } from 'models';
import {
  AcademicCapIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

let menuitems: IMenu[] = [
  {
    id: 1,
    text: 'Мои викторины',
    description: 'Создайте свою викторину и настройте ёё по своему желанию',
    component: AcademicCapIcon,
  },
  {
    id: 2,
    text: 'Мои группы',
    description: 'Добавьте бота в группу или канал и проводите викторины',
    component: UsersIcon,
  },
  {
    id: 3,
    text: 'Мои вопросы',
    description: 'Создайте свой вопрос и задайте его в своей группе',
    component: QuestionMarkCircleIcon,
  },
  {
    id: 4,
    text: 'Мои ответы',
    description: 'Получите расширенную статистику по своим ответам',
    component: QueueListIcon,
  },
];

interface HomePageProps {
  toggleSlide: () => void;
}

export function HomePage({ toggleSlide }: HomePageProps) {
  return (
    <>
      <Page>
        <MainBlock>
          <div className="text-center">
            <img
              className="mx-auto h-12 w-12"
              src={Logo}
              alt="https://80q.ru"
            />
            <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
              ViktorinaOnlineBot
            </h2>
            <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
              Бот проводит викторины в группах/каналах используя собственную
              базу вопросов и вопросы, заданные участниками викторины
            </p>
          </div>
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            {menuitems.map((item) => (
              <li
                className="px-1 py-1 sm:px-0 cursor-pointer"
                key={item.id}
                onClick={() => {
                  toggleSlide;
                }}
              >
                <div className="group relative flex items-start space-x-3 py-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
                      <item.component
                        className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                      {item.text}
                    </p>
                    <p className="text-xs text-[var(--tg-theme-hint-color)]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </MainBlock>
      </Page>
    </>
  );
}

export default HomePage;
