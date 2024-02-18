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
const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
const AddQuestion = React.lazy(() => import('add-question/Module'));

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();

  const slide = useAppSelector(selectMainSlide);
  const type = useAppSelector(selectMainType);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showMainSlide(false));
    });
  }

  if (!slide) {
    tg.BackButton.hide();
  }
  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));

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
              <Provider store={storeGroups}>
                <Questions />
              </Provider>
            )}
          </SlidePage>
        </>
      )}
    </React.Suspense>
  );
}

export default App;
