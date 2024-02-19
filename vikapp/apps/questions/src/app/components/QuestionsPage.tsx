import {
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import { QuestionList } from './QuestionList';
import { AddQuestion } from './AddQuestion';
import { useQuestionDispatch } from '@store/questions';
import { showQuestionSlide } from '../store/slices/questionApp.slice';

export const QuestionsPage = () => {
  const dispatch = useQuestionDispatch();
  return (
    <>
      <GlobalHeader>
        <AddQuestion />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <button
            className={'pt-4'}
            onClick={() => dispatch(showQuestionSlide(true))}
          >
            Click
          </button>
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
