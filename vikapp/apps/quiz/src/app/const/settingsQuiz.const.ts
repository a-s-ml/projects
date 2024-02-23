import { ClockIcon, CloudArrowDownIcon, ListBulletIcon, NoSymbolIcon, PhotoIcon, ScaleIcon } from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, SVGProps } from "react";
import TypeQuiz from "../components/SettingsQuiz/TypeQuiz";
import CategoryQuiz from "../components/SettingsQuiz/CategoryQuiz";
import PeriodQuiz from "../components/SettingsQuiz/PeriodQuiz";
import TimeQuiz from "../components/SettingsQuiz/TimeQuiz";
import DifficultyQuiz from "../components/SettingsQuiz/DifficultyQuiz";
import NotactiveSittings from "../components/SettingsQuiz/NotactiveSittings";


interface typeNewQuizInterface {
    name: string;
    type: string;
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
    component: () => JSX.Element;
  }
  
  export const typeNewQuizConst: typeNewQuizInterface[] = [
    {
      name: 'Вид вопросов',
      type: 'type',
      icon: PhotoIcon,
      component: TypeQuiz,
    },
    {
      name: 'Категории вопросов',
      type: 'category',
      icon: ListBulletIcon,
      component: CategoryQuiz,
    },
    {
      name: 'Период публикаций',
      type: 'period',
      icon: CloudArrowDownIcon,
      component: PeriodQuiz,
    },
    {
      name: 'Время публикаций',
      type: 'time',
      icon: ClockIcon,
      component: TimeQuiz,
    },
    {
      name: 'Сложность вопросов',
      type: 'вifficulty',
      icon: ScaleIcon,
      component: DifficultyQuiz,
    },
    {
      name: 'Время на ответ',
      type: 'none',
      icon: NoSymbolIcon,
      component: NotactiveSittings,
    },
    {
      name: 'Статистика',
      type: 'none',
      icon: NoSymbolIcon,
      component: NotactiveSittings,
    },
  ];