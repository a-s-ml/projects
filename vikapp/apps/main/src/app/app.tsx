import * as React from 'react';
import { useValidateQuery } from '@api/vik';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import { storeGroups } from '@store/groups';
import { useAppDispatch } from './store';
import { dataMain } from './store/slices/mainApp.slice';
import { Preloader, SlidePage } from '@components';
import { storeQuestion } from 'apps/questions/src/app/store';
import { storeQuiz } from '@store/quiz';
import { useBackButton } from '@utils';
const Groups = React.lazy(() => import('groups/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  const { typeSlide, backButtonState } = useBackButton();

  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));

  console.log('typeSlide', typeSlide);
  console.log('backButtonState', backButtonState);
  return (
    <React.Suspense fallback={<Preloader />}>
      {isLoading && <Preloader />}
      {isSuccess && (
        <>
          <HomePage />
          <SlidePage slide={backButtonState}>
            {typeSlide === 'groups' && (
              <Provider store={storeGroups}>
                <Groups />
              </Provider>
            )}
            {typeSlide === 'questions' && (
              <Provider store={storeQuestion}>
                <Questions />
              </Provider>
            )}
            {typeSlide === 'quiz' && (
              <Provider store={storeQuiz}>
                <Quiz />
              </Provider>
            )}
          </SlidePage>
        </>
      )}
    </React.Suspense>
  );
}

export default App;
