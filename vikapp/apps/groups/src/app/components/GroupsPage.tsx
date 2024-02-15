import {
  AddGroup,
  Feedback,
  GlobalFooter,
  GlobalHeader,
  MainBlock,
  Page,
} from '@components';
import GroupsList from './GroupsList';
import { useGroupDispatch, useGroupSelector } from '@store/groups';
import {
  selectGroupSlide,
  selectGroupType,
} from '../store/slices/groupApp.slice';

export function GroupsPage() {
  const tg = window.Telegram.WebApp;

  const slide = useGroupSelector(selectGroupSlide);
  const type = useGroupSelector(selectGroupType);
  console.log('slide', slide);
  console.log('type', type);
  return (
    <>
      <GlobalHeader>
        <AddGroup />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9">
            <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
              Groups
            </h2>
          </div>
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
