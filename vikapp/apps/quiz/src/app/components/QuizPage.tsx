import {
  GlobalHeader,
  ButtonIcon,
  Page,
  MainBlock,
  SlidePage,
} from '@components';
import { NewQuiz } from './NewQuiz';
import { useBackButton } from '@utils';

export const QuizPage = () => {
  const { setTypeSlide, typeSlide, setBackButtonState, backButtonState } =
    useBackButton();

  const addQuiz = () => {
    setTypeSlide('addQuiz');
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
        {typeSlide == 'addQuiz' && <NewQuiz />}
      </SlidePage>
    </>
  );
};

export default QuizPage;
