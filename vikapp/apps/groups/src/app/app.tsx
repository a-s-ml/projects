import { Provider } from 'react-redux';
import GroupsPage from './components/GroupsPage';
import { storeGroups, useGroupDispatch, useGroupSelector } from './store';
import {
  selectGroupSlide,
  showGroupSlide,
} from './store/slices/groupApp.slice';
import { SlidePage } from '@components';

export const App = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useGroupDispatch();
  const slide = useGroupSelector(selectGroupSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showGroupSlide(false));
    });
  }
  return (
    <>
      <Provider store={storeGroups}>
        <GroupsPage />
        <SlidePage slide={slide}>
          <p>Groups</p>
        </SlidePage>
      </Provider>
    </>
  );
};

export default App;
