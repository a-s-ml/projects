import {
  AddGroup,
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import GroupsList from './GroupsList';
import { useGroupDispatch } from '@store/groups';
import { showGroupSlide } from '../store/slices/groupApp.slice';

export function GroupsPage() {
  const dispatch = useGroupDispatch();
  return (
    <>
      <GlobalHeader>
        <AddGroup />
        <button onClick={()=> dispatch(showGroupSlide(true))}>Click</button>
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <GroupsList chat={521884639} />
        </MainBlock>
      </Page>
      <GlobalFooter>
        <Feedback />
      </GlobalFooter>
    </>
  );
}

export default GroupsPage;
