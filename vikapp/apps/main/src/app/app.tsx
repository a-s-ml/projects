import * as React from 'react';
import { useValidateQuery } from '@api/vik';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import { storeGroups } from '@store/groups';
import { storeMain, useAppDispatch, useAppSelector } from './store';
import {
  dataMain,
  selectMainSlide,
  showMainSlide,
} from './store/slices/mainApp.slice';
import { SlidePage } from '@components';
const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
const AddQuestion = React.lazy(() => import('add-question/Module'));

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();

  const slide = useAppSelector(selectMainSlide);

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
  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));

  isSuccess && console.log(data);
  console.log(useAppSelector(storeMain.getState));

  function toggleSlide() {
    dispatch(showMainSlide(true));
  }

  return (
    <React.Suspense fallback={null}>
      <HomePage toggleSlide={toggleSlide} />
      <SlidePage slide={slide}>
        <Provider store={storeGroups}>
          <Groups />
        </Provider>
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
