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
} from './store/slices/mainApp.slice';
import { SlidePage } from '@components';
const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
const AddQuestion = React.lazy(() => import('add-question/Module'));

export function App() {
  const tg = window.Telegram.WebApp;
  const current = useAppSelector(selectMainSlide);
  const [slide, setSlide] = React.useState(current);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      setSlide(false);
    });
  }
  const dispatch = useAppDispatch();

  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));

  const type = useAppSelector(selectMainType);
  isSuccess && console.log(data);
  console.log(useAppSelector(storeMain.getState));

  function toggleSlide() {
    setSlide(!slide);
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
