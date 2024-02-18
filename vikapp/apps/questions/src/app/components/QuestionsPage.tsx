import { Feedback, GlobalFooter, GlobalHeader, MainBlock, Page } from '@components';
import { QuestionList } from './QuestionList';
import { AddQuestion } from './AddQuestion';

export const QuestionsPage = () => {
  return (
    <>
      <GlobalHeader>
        <AddQuestion />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <QuestionList />
        </MainBlock>
      </Page>
      <GlobalFooter>
        <Feedback />
      </GlobalFooter>
    </>
  );
};

export default QuestionsPage;
