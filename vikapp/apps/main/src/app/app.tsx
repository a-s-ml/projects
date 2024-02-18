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
import { Provider } from 'react-redux';
import { storeGroups } from '@store/groups';
import { storeAddQuestion } from '@store/add-question';

const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));
const Quiz = React.lazy(() => import('quiz/Module'));
const AddQuestion = React.lazy(() => import('add-question/Module'));

export function App() {
  const tg = window.Telegram.WebApp;
  const [slide, setSlide] = React.useState(false);
  const [slide2, setSlide2] = React.useState(false);

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
