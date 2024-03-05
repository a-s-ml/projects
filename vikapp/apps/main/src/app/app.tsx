import * as React from 'react';
import { useValidateQuery } from '@api/vik';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import { storeGroups } from '@store/groups';
import { storeMain, useAppDispatch, useAppSelector } from './store';
import {
  dataMain,
  selectMainSlide,
  selectMainType,
  showMainSlide,
} from './store/slices/mainApp.slice';
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

  const slide = useAppSelector(selectMainSlide);
  const type = useAppSelector(selectMainType);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  useBackButton(slide, () => dispatch(showMainSlide(false)));
  
  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));
  console.log(useAppSelector(storeMain.getState));

  return (
    <React.Suspense fallback={null}>
      {isLoading && <Preloader />}
      {isSuccess && (
        <>
          <HomePage />
          <SlidePage slide={slide}>
            {type == 'groups' && (
              <Provider store={storeGroups}>
                <Groups />
              </Provider>
            )}
            {type == 'questions' && (
              <Provider store={storeQuestion}>
                <Questions />
              </Provider>
            )}
            {type == 'quiz' && (
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
