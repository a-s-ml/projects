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
  const { setSlide, typeSlide, setBackButtonState, backButtonState } =
    useBackButton();

  const addQuiz = () => {
    setSlide(<NewQuiz />);
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
      <SlidePage slide={backButtonState}>{typeSlide}</SlidePage>
    </>
  );
};

export default QuizPage;
