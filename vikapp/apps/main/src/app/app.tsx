import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { Provider } from 'react-redux';
import { store, useAppDispatch, useAppSelector } from './store';
import { selectSlideUser, userSlide } from './store/api/slide.slice';
import { useValidateQuery } from './store/api/vik.api';

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

  successUser && dispatch(userSlide(dataUser.UserData.user.id));
  console.log(useAppSelector(store.getState));

  return (
    <Provider store={store}>
      <React.Suspense fallback={null}>
        <Groups />
      </React.Suspense>
    </Provider>
  );
}

export default App;
