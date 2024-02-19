import {
  AddGroup,
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import GroupsList from './GroupsList';

export function GroupsPage() {
  return (
    <>
      <GlobalHeader>
        <AddGroup />
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
