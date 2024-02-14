import GroupsPage from './components/GroupsPage';
import { store, useAppSelector } from '@store/groups';

export function App() {
  console.log(useAppSelector(store.getState));
  return (
    <>
      <GroupsPage />
    </>
  );
}

export default App;
