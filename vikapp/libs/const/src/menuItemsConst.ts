import {
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { IMenu } from 'models';

export const menuItemsConst: IMenu[] = [
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
