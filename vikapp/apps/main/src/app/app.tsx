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
  // const dispatch = useAppDispatch();
  const [slide, setSlide] = React.useState(false);
  const [slide2, setSlide2] = React.useState(false);

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

  if (slide2) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      setSlide2(false);
      // dispatch(showMainSlide(false)), tg.BackButton.hide();
      // dispatch(typeMain(''));
    });
  }

  return (
    <React.Suspense fallback={null}>
      {/* {isLoading && <Preloader />}
      {isSuccess && <HomePage />} */}
      <HomePage />
      <div className="text-center p-2">
        <button className={"p-2 m-2"} onClick={() => setSlide(true)}>AddQuestion</button>
        <button className={"p-2 m-2"} onClick={() => setSlide2(true)}>Groups</button>
      </div>
      <SlidePage slide={slide2}>
        <Provider store={storeGroups}>
          <Groups />
        </Provider>
      </SlidePage>
      <SlidePage slide={slide}>
        {/* {type === 'groups' && <Groups />} */}
        <Provider store={storeAddQuestion}>
          <AddQuestion />
        </Provider>
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
