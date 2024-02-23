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

export const NewQuiz = () => {
  return (
    <Page>
      <MainBlock>
        <SimpleTabs title={'Новая викторина'} tabs={typeQuizConst} />
      </MainBlock>
    </Page>
  );
};
