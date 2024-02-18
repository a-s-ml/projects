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

  const slideQ = useQuestionSelector(selectQuestionSlide);
  const type = useQuestionSelector(selectQuestionType);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slideQ) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

  if (!slideQ) {
    tg.BackButton.hide();
  }

  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  return (
    <>
      {isLoading && <Preloader />}
      {isSuccess && (
        <>
          <QuestionsPage />
          <SlidePage slide={slideQ}>
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
