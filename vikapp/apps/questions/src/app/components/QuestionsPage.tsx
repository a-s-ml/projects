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
  showQuestionSlide,
} from '../store/slices/questionApp.slice';

export const QuestionsPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();
  const slide = useQuestionSelector(selectQuestionSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

  const addQuestion = () => {
    tg.openTelegramLink('https://t.me/ViktorinaOnlineBot?startgroup=add');
  };

  return (
    <>
      <GlobalHeader>
        <div className="px-8 pt-8 pb-4">
          <ButtonIcon
            firstIcon={true}
            text={'Добавить вопрос'}
            color={'[var(--tg-theme-accent-text-color)]'}
            icon={'add'}
            func={addQuestion}
          />
        </div>
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
