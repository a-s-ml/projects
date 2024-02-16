import { Provider } from 'react-redux';
import GroupsPage from './components/GroupsPage';
import { storeGroups } from '@store/groups';
import { StrictMode } from 'react';

export const App = () => {
  return (
      <StrictMode>
        <Provider store={storeGroups}>
          <GroupsPage />
        </Provider>
      </StrictMode>
  );
}

export default App;
