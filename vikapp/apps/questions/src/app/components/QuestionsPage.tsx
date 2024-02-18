import { MainBlock, Page } from '@components';
import { QuestionList } from './QuestionList';

export const QuestionsPage = () => {
  return (
    <>
      <Page>
        <MainBlock>
          <QuestionList />
        </MainBlock>
      </Page>
    </>
  );
};

export default QuestionsPage;
