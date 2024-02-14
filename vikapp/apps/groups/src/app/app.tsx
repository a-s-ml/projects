import GroupsPage from './components/GroupsPage';
import { useGroupDispatch, useGroupSelector } from '@store/groups';
import { selectGroupData, selectGroupSlide, selectGroupType } from './store/slices/groupApp.slice';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useGroupDispatch();
  const slide = useGroupSelector(selectGroupSlide);
  const data = useGroupSelector(selectGroupData);
  const type = useGroupSelector(selectGroupType);
  console.log(data);
  return (
    <>
      <GroupsPage />
    </>
  );
}

export default App;
