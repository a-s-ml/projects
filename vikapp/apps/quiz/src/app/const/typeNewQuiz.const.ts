import { BotQuiz } from "../components/NewQuiz/BotQuiz";
import { UserQuiz } from "../components/NewQuiz/UserQuiz";

interface tabsInterface {
    name: string;
    type: string;
    component: () => JSX.Element;
  }
  
  export const typeNewQuizConst: tabsInterface[] = [
    {
      name: 'Вопросы бота',
      type: 'bot',
      component: BotQuiz,
    },
    {
      name: 'Свои вопросы',
      type: 'user',
      component: UserQuiz,
    },
  ];