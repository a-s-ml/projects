import {
  ButtonIcon,
  GlobalHeader,
  MainBlock,
  Page,
  SlidePage,
} from '@components';
import GroupsList from './GroupsList';
import { storeGroups, useGroupDispatch, useGroupSelector } from '@store/groups';
import {
  selectGroupSlide,
  showGroupSlide,
} from '../store/slices/groupApp.slice';
import { addGroup } from '@utils';

export function GroupsPage() {
  const tg = window.Telegram.WebApp;
  const dispatch = useGroupDispatch();
  const slide = useGroupSelector(selectGroupSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showGroupSlide(false));
    });
  }
  return (
    <>
      <GlobalHeader>
        <ButtonIcon
          firstIcon={true}
          text={'Добавить группу'}
          color={'[var(--tg-theme-accent-text-color)]'}
          icon={'add'}
          func={addGroup}
        />
      </GlobalHeader>
      <Page>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <GroupsList chat={521884639} />
        </MainBlock>
      </Page>
      <SlidePage slide={slide}>
        <p>Groups</p>
      </SlidePage>
    </>
  );
}

export default GroupsPage;
