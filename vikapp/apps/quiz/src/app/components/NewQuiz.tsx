import { MainBlock, Page, SimpleTabs } from '@components';
import { UserQuiz } from './NewQuiz/UserQuiz';
import { BotQuiz } from './NewQuiz/BotQuiz';

interface tabsInterface {
  name: string;
  type: string;
  component: () => JSX.Element;
}

export const typeQuizConst: tabsInterface[] = [
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

export const NewQuiz = () => {
  return (
    <Page>
      <MainBlock>
        <SimpleTabs title={'Новая викторина'} tabs={typeQuizConst} />
      </MainBlock>
    </Page>
  );
};
