import {
  ButtonIcon,
  GlobalHeader,
  MainBlock,
  Page,
  SlidePage,
} from '@components';
import { QuestionList } from './QuestionList';
import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import {
  selectQuestionSlide,
  selectQuestionType,
  showQuestionSlide,
  typeQuestion,
} from '../store/slices/questionApp.slice';
import NewQuesion from './NewQuesion';

export const QuestionsPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();
  const slide = useQuestionSelector(selectQuestionSlide);
  const type = useQuestionSelector(selectQuestionType);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

  const addQuestion = () => {
    dispatch(typeQuestion('addQuestion'));
    dispatch(showQuestionSlide(true));
  };

  return (
    <>
      <Page>
        <GlobalHeader>
          <ButtonIcon
            firstIcon={true}
            text={'Добавить вопрос'}
            color={'[var(--tg-theme-accent-text-color)]'}
            icon={'add'}
            func={addQuestion}
          />
        </GlobalHeader>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <QuestionList />
        </MainBlock>
      </Page>
      <SlidePage slide={slide}>
        {type == 'addQuestion' && <NewQuesion />}
      </SlidePage>
    </>
  );
};

export default QuestionsPage;
