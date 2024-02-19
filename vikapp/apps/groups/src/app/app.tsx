import { Provider } from 'react-redux';
import GroupsPage from './components/GroupsPage';
import { storeGroups, useGroupDispatch, useGroupSelector } from './store';
import {
  selectGroupSlide,
  showGroupSlide,
} from './store/slices/groupApp.slice';
import { SlidePage } from '@components';

export const App = () => {
  return (
    <>
      <Provider store={storeGroups}>
        <GroupsPage />
      </Provider>
    </>
  );
};

export default App;
