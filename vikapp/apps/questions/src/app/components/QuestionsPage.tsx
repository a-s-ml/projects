import {
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
  SlidePage,
} from '@components';
import { QuestionList } from './QuestionList';
import { AddQuestion } from './AddQuestion';
import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import {
  selectQuestionSlide,
  showQuestionSlide,
} from '../store/slices/questionApp.slice';

export const QuestionsPage = () => {
  const tg = window.Telegram.WebApp;
  const slide = useQuestionSelector(selectQuestionSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

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
      <SlidePage slide={slide}>
        <p>Question</p>
      </SlidePage>
    </>
  );
};

export default QuestionsPage;
