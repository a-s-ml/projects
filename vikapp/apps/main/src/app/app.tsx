import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
import { useAppDispatch, useAppSelector } from '@store/main';
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

export function App() {
  const tg = window.Telegram.WebApp;
  const [slide, setSlide] = React.useState(false)
  // const dispatch = useAppDispatch();

  // const { data, isSuccess, isLoading } = useValidateQuery(tg.initData);

  // isSuccess && dispatch(dataMain(data));

  // const slide = useAppSelector(selectMainSlide);
  // const type = useAppSelector(selectMainType);

  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      setSlide(false)
      // dispatch(showMainSlide(false)), tg.BackButton.hide();
      // dispatch(typeMain(''));
    });
  }

  return (
    <React.Suspense fallback={null}>
      {/* {isLoading && <Preloader />} */}
      {/* {isSuccess && <HomePage />} */}
      <SlidePage slide={slide}>
        {/* {type === 'groups' && <Groups />}, {type === 'answers' && <Answers />},
        {type === 'questions' && <Questions />}, {type === 'quiz' && <Quiz />} */}
        <Groups />
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
