import * as React from 'react';
import { storeMain, useAppDispatch, useAppSelector } from '@store/main';
import { useValidateQuery } from '@api/vik';
import { Preloader, SlidePage } from '@components';
import {
  dataMain,
  selectMainSlide,
  selectMainType,
  showMainSlide,
  typeMain,
} from './store/slices/mainApp.slice';
import HomePage from './components/HomePage';
import { importRemote } from '@module-federation/utilities/.';

const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
// const Quiz = React.lazy(() =>
//   importRemote({
//     url: async () => Promise.resolve('https://80q.ru/mf/quiz/remoteEntry.js'),
//     scope: 'quiz',
//     module: 'quiz/Module',
//     esm: true,
//   })
// );

export function App() {
  const tg = window.Telegram.WebApp;
  // const dispatch = useAppDispatch();
  const [slide, setSlide] = React.useState(false);

  // const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  // isSuccess && dispatch(dataMain(data));

  // const slide = useAppSelector(selectMainSlide);
  // const type = useAppSelector(selectMainType);
  // isSuccess && console.log(data)
  // console.log(useAppSelector(storeMain.getState));

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      setSlide(false);
      // dispatch(showMainSlide(false)), tg.BackButton.hide();
      // dispatch(typeMain(''));
    });
  }

  return (
    <React.Suspense fallback={null}>
      {/* {isLoading && <Preloader />}
      {isSuccess && <HomePage />} */}
      <HomePage />
      <button onClick={() => setSlide(true)}>Click</button>
      <SlidePage slide={slide}>
        {/* {type === 'groups' && <Groups />} */}
        {/* <Groups /> */}
        <Quiz />
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
