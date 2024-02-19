import {
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import { QuestionList } from './QuestionList';
import { AddQuestion } from './AddQuestion';
import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import { showQuestionSlide } from '../store/slices/questionApp.slice';

export const QuestionsPage = () => {
  const dispatch = useQuestionDispatch();
  console.log(useQuestionSelector(storeQuestion.getState));
  return (
    <>
      <GlobalHeader>
        <AddQuestion />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <QuestionList />
          <button
            className={'pt-4'}
            onClick={() => dispatch(showQuestionSlide(true))}
          >
            Click
          </button>
        </MainBlock>
      </Page>
    </>
  );
};

export default QuestionsPage;
