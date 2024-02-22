import { BotQuiz } from '../../../apps/quiz/src/app/components/NewQuiz/BotQuiz';
import { UserQuiz } from '../../../apps/quiz/src/app/components/NewQuiz/UserQuiz';

interface tabsInterface {
  name: string;
  type: string;
  component: () => JSX.Element;
}

export const typeQuizConst: tabsInterface[] = [
  {
    name: 'Свои вопросы',
    type: 'user',
    component: UserQuiz,
  },
  {
    name: 'Вопросы бота',
    type: 'bot',
    component: BotQuiz,
  },
];
