import {
  GlobalHeader,
  ButtonIcon,
  Page,
  MainBlock,
  SlidePage,
} from '@components';
import { useQuizDispatch, useQuizSelector } from '../store/index';
import {
  selectQuizSlide,
  selectQuizType,
  showQuizSlide,
  typeQuiz,
} from '../store/slices/quizApp.slice';
import { NewQuiz } from './NewQuiz';
import { useBackButton } from '@utils';

export const QuizPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuizDispatch();

  const slide = useQuizSelector(selectQuizSlide);
  const type = useQuizSelector(selectQuizType);

  const { setTypeSlide, typeSlide, setBackButtonState, backButtonState } =
    useBackButton();

  const addQuiz = () => {
    setTypeSlide('addQuiz');
    setBackButtonState(true);
  };
  console.log('typeSlide', typeSlide);
  console.log('backButtonState', backButtonState);

  return (
    <>
      <GlobalHeader>
        <ButtonIcon
          firstIcon={true}
          text={'Создать викторину'}
          color={'[var(--tg-theme-accent-text-color)]'}
          icon={'add'}
          func={addQuiz}
        />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <p>QuizPage</p>
        </MainBlock>
      </Page>
      <SlidePage slide={backButtonState}>
        {typeSlide == 'addQuiz' && <NewQuiz />}
      </SlidePage>
    </>
  );
};

export default QuizPage;
