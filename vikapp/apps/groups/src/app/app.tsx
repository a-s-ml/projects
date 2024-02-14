import GroupsPage from './components/GroupsPage';
import { useAppDispatch, useAppSelector } from '@store/groups';
import { selectGroupData, selectGroupSlide, selectGroupType } from './store/slices/groupApp.slice';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const slide = useAppSelector(selectGroupSlide);
  const data = useAppSelector(selectGroupData);
  const type = useAppSelector(selectGroupType);
  console.log(data);
  return (
    <>
      <GroupsPage />
    </>
  );
}

export default App;
