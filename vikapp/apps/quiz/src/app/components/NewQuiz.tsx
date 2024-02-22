import { MainBlock, Page, SimpleTabs } from '@components';
import { UserQuiz } from './NewQuiz/UserQuiz';
import { BotQuiz } from './NewQuiz/BotQuiz';

interface tabsInterface {
  name: string;
  component: () => JSX.Element;
}

const tabs: tabsInterface[] = [
  {
    name: 'Свои вопросы',
    component: UserQuiz,
  },
  {
    name: 'Вопросы бота',
    component: BotQuiz,
  },
];

export const NewQuiz = () => {
  return (
    <Page>
      <MainBlock>
        <SimpleTabs title={'title'} tabs={tabs} />
      </MainBlock>
    </Page>
  );
};
