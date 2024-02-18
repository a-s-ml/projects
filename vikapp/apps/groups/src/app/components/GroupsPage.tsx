import {
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import { AddGroup } from './AddGroup';
import GroupsList from './GroupsList';

export function GroupsPage() {
  const tg = window.Telegram.WebApp;
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
