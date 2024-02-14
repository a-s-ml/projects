import GroupsPage from './components/GroupsPage';
import { useAppDispatch, useAppSelector } from '@store/groups';
import { selectGroupData } from './store/slices/groupApp.slice';

export function App() {
  const data = useAppSelector(selectGroupData);
  console.log(data);
  return (
    <>
      <GroupsPage />
    </>
  );
}

export default App;
