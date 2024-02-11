import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { store, useAppDispatch, useAppSelector } from './store';
import { selectSlideUser, userSlide } from './store/slices/slide.slice';
import { useValidateQuery } from '@api/vik';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectSlideUser);

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
    isSuccess: successUser,
  } = useValidateQuery(tg.initData, { skip: user !== 0 });
  console.log(tg);

  successUser && dispatch(userSlide(dataUser.UserData.user.id));
  console.log(useAppSelector(store.getState));

  return (
      <React.Suspense fallback={null}>
        <Groups />
      </React.Suspense>
  );
}

export default App;
