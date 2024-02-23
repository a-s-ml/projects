import { MainBlock, Page, SimpleTabs } from '@components';
import { typeNewQuizConst } from '../const/typeNewQuiz.const';

export const NewQuiz = () => {
  return (
    <Page>
      <MainBlock>
        <SimpleTabs title={'Новая викторина'} tabs={typeNewQuizConst} />
      </MainBlock>
    </Page>
  );
};
