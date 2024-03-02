import {
  ClockIcon,
  CloudArrowDownIcon,
  ListBulletIcon,
  NoSymbolIcon,
  PhotoIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, SVGProps } from 'react';
import TypeQuiz from '../components/SettingsQuiz/TypeQuiz';
import CategoryQuiz from '../components/SettingsQuiz/CategoryQuiz';
import PeriodQuiz from '../components/SettingsQuiz/PeriodQuiz';
import TimeQuiz from '../components/SettingsQuiz/TimeQuiz';
import DifficultyQuiz from '../components/SettingsQuiz/DifficultyQuiz';
import NotactiveSittings from '../components/SettingsQuiz/NotactiveSittings';

interface typeNewQuizInterface {
  id: number;
  name: string;
  type: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  component: () => JSX.Element;
}

export const typeNewQuizConst: typeNewQuizInterface[] = [
  {
    id: 1,
    name: 'Вид вопросов',
    type: 'type',
    icon: PhotoIcon,
    component: TypeQuiz,
  },
  {
    id: 2,
    name: 'Категории вопросов',
    type: 'category',
    icon: ListBulletIcon,
    component: CategoryQuiz,
  },
  {
    id: 3,
    name: 'Период публикаций',
    type: 'period',
    icon: CloudArrowDownIcon,
    component: PeriodQuiz,
  },
  {
    id: 4,
    name: 'Время публикаций',
    type: 'time',
    icon: ClockIcon,
    component: TimeQuiz,
  },
  {
    id: 5,
    name: 'Сложность вопросов',
    type: 'вifficulty',
    icon: ScaleIcon,
    component: DifficultyQuiz,
  },
  {
    id: 6,
    name: 'Время на ответ',
    type: 'none',
    icon: NoSymbolIcon,
    component: NotactiveSittings,
  },
  {
    id: 7,
    name: 'Статистика',
    type: 'none',
    icon: NoSymbolIcon,
    component: NotactiveSittings,
  },
];
