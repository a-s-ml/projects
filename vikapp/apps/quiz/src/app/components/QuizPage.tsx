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
  const dispatch = useQuizDispatch();
  const type = useQuizSelector(selectQuizType);
  const { backButtonState, setBackButtonState } = useBackButton();
  console.log('backButtonState', backButtonState);

  const addQuiz = () => {
    dispatch(typeQuiz('addQuiz'));
    setBackButtonState(true);
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
          <p>QuizPage</p>
        </MainBlock>
      </Page>
      <SlidePage slide={backButtonState}>
        {type == 'addQuiz' && <NewQuiz />}
      </SlidePage>
    </>
  );
};

export default QuizPage;
