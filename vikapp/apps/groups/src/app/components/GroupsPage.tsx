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
    </>
  );
}

export default GroupsPage;
