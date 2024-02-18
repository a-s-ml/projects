import {
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useAppDispatch } from '@store/main';
import { showMainSlide, typeMain } from '../../store/slices/mainApp.slice';
import { IMenu } from 'models';
import { MenuListItemButton } from './MenuListItemButton';
import { MenuListItemText } from './MenuListItemText';
import { MenuListItemIcon } from './MenuListItemIcon';

let menuitems: IMenu[] = [
  {
    id: 1,
    text: 'Мои викторины',
    type: 'quiz',
    description: 'Создайте свою викторину и настройте ёё по своему желанию',
    component: AcademicCapIcon,
  },
  {
    id: 2,
    text: 'Мои группы',
    type: 'groups',
    description: 'Добавьте бота в группу или канал и проводите викторины',
    component: UsersIcon,
  },
  {
    id: 3,
    text: 'Мои вопросы',
    type: 'questions',
    description: 'Создайте свой вопрос и задайте его в своей группе',
    component: QuestionMarkCircleIcon,
  },
  {
    id: 4,
    text: 'Мои ответы',
    type: 'answers',
    description: 'Получите расширенную статистику по своим ответам',
    component: QueueListIcon,
  },
];

export const MenuListItem = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      {menuitems.map((item) => (
        <li
          className="cursor-pointer"
          onClick={() => {
            dispatch(showMainSlide(true));
            dispatch(typeMain(item.type));
          }}
        >
          <div className="group relative flex items-start space-x-3 py-4">
            <MenuListItemIcon>
              <item.component
                className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            </MenuListItemIcon>
            <MenuListItemText text={item.text} description={item.description} />
            <MenuListItemButton />
          </div>
        </li>
      ))}
    </>
  );
};
