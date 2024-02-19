import {
  AddGroup,
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import GroupsList from './GroupsList';
import { storeGroups, useGroupDispatch, useGroupSelector } from '@store/groups';
import { showGroupSlide } from '../store/slices/groupApp.slice';

export function GroupsPage() {
  const dispatch = useGroupDispatch();
  console.log(useGroupSelector(storeGroups.getState));
  return (
    <>
      <GlobalHeader>
        <AddGroup />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <GroupsList chat={521884639} />
          <button
            className={'pt-4'}
            onClick={() => dispatch(showGroupSlide(true))}
          >
            Click
          </button>
        </MainBlock>
      </Page>
    </>
  );
}

export default GroupsPage;
