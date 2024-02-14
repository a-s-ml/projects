import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { useAppDispatch, useAppSelector } from '@store/main';
import { useValidateQuery } from '@api/vik';
import { Preloader, SlidePage } from '@components';
import {
  dataMain,
  selectMainSlide,
  showMainSlide,
} from './store/slices/mainApp.slice';
import HomePage from './components/HomePage';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();

  const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataMain(data));

  const slide = useAppSelector(selectMainSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showMainSlide(false)), tg.BackButton.hide();
    });
  }

  return (
    <React.Suspense fallback={null}>
      {isLoading && <Preloader />}
      {isSuccess && <HomePage />}
      <SlidePage slide={slide}>
        <Groups />
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
