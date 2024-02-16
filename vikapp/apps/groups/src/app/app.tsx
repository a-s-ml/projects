import { Provider } from 'react-redux';
import GroupsPage from './components/GroupsPage';
import { storeGroups, useGroupSelector } from '@store/groups';

export function App() {
  console.log(useGroupSelector(storeGroups.getState));

  return (
    <>
      <Provider store={storeGroups}>
        <GroupsPage />
      </Provider>
    </>
  );
}

export default App;
