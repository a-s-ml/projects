interface tabsInterface {
  name: string;
  type: string;
  component: string;
}

export const typeQuizConst: tabsInterface[] = [
  {
    name: 'Свои вопросы',
    type: 'user',
    component: 'UserQuiz',
  },
  {
    name: 'Вопросы бота',
    type: 'bot',
    component: 'BotQuiz',
  },
];
