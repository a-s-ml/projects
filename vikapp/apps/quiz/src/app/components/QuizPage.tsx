import {
  GlobalHeader,
  ButtonIcon,
  Page,
  MainBlock,
  SlidePage,
} from '@components';
import { useQuizDispatch } from '@store/quiz';
import { showQuizSlide, typeQuiz } from '../store/slices/quizApp.slice';
import { NewQuiz } from './NewQuiz';

export const QuizPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuizDispatch();

  const addQuiz = () => {
    dispatch(typeQuiz('addQuiz'));
    dispatch(showQuizSlide(true));
  };

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
          <NewQuiz />
        </MainBlock>
      </Page>
    </>
  );
};

export default QuizPage;
