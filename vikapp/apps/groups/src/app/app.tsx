import GroupsPage from './components/GroupsPage';
import { storeGroups, useGroupSelector } from '@store/groups';

export function App() {
  console.log(useGroupSelector(storeGroups.getState));
  
  return (
    <>
      <GroupsPage />
    </>
  );
}

export default App;
