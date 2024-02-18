import React from 'react';
import QuestionsPage from './components/QuestionsPage';
import { useQuestionDispatch, useQuestionSelector } from './store';
import {
  selectQuestionSlide,
  selectQuestionType,
  showQuestionSlide,
} from './store/slices/questionApp.slice';
import { useValidateQuery } from '@api/vik';
import { Preloader, SlidePage } from '@components';
import { QuestionList } from './components/QuestionList';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();

  const slide = useQuestionSelector(selectQuestionSlide);
  const type = useQuestionSelector(selectQuestionType);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

  if (!slide) {
    tg.BackButton.hide();
  }

  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  return (
    <>
      {isLoading && <Preloader />}
      {isSuccess && (
        <>
          <QuestionsPage />
          <SlidePage slide={slide}>
            {type == 'groups' && <QuestionList />}
            {type == 'questions' && <QuestionList />}
          </SlidePage>
        </>
      )}
    </>
  );
}

export default App;
