import React from 'react';
import QuestionsPage from './components/QuestionsPage';
import { QuestionList } from './components/QuestionList';
import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import {
  selectQuestionSlide,
  selectQuestionType,
  showQuestionSlide,
} from './store/slices/questionApp.slice';
import { useValidateQuery } from '@api/vik';
import { Preloader, SlidePage } from '@components';

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
  console.log(data);

  return (
    <>
      {isLoading && <Preloader />}
      {isSuccess && (
        <>
          <QuestionsPage />
          <SlidePage slide={slide}>
            <>
              <p>sgssdg1</p>
              <QuestionList />
              <p>sgssdg1</p>
            </>
          </SlidePage>
        </>
      )}
    </>
  );
}

export default App;
