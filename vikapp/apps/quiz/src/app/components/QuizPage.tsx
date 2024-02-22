import { useQuizDispatch, useQuizSelector } from '@store/quiz';
import {
  selectQuizSlide,
  selectQuizType,
  showQuizSlide,
  typeQuiz,
} from '../store/slices/quizApp.slice';
import {
  ButtonIcon,
  GlobalHeader,
  MainBlock,
  Page,
  SlidePage,
} from '@components';
import { NewQuiz } from './NewQuiz';

export const QuizPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuizDispatch();
  const slide = useQuizSelector(selectQuizSlide);
  const type = useQuizSelector(selectQuizType);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuizSlide(false));
    });
  }

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
          <div className="text-center pt-9"></div>
        </MainBlock>
      </Page>
      <SlidePage slide={slide}>{type == 'addQuiz' && <NewQuiz />}</SlidePage>
    </>
  );
};
