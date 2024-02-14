import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { useAppDispatch, useAppSelector } from '@store/main';
import { useValidateQuery } from '@api/vik';
import { SlidePage } from '@components';
import {
  selectSlide,
  selectSlideUser,
  showSlide,
  userSlide,
} from './store/slices/slide.slice';
import HomePage from './components/HomePage';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectSlideUser);

  const { data, isSuccess } = useValidateQuery(tg.initData, {
    skip: user !== 0,
  });

  isSuccess && dispatch(userSlide(data.UserData.user.id));

  const slide = useAppSelector(selectSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showSlide(false)), tg.BackButton.hide();
    });
  }

  return (
    <React.Suspense fallback={null}>
      <HomePage />
      <SlidePage slide={slide}>
        <Groups />
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
