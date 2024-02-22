import { MainBlock, Page, SimpleTabs } from '@components';
import { typeQuizConst } from '@const';

export const NewQuiz = () => {
  return (
    <Page>
      <MainBlock>
        <SimpleTabs title={'title'} tabs={typeQuizConst} />
      </MainBlock>
    </Page>
  );
};
