import {
  AddButton,
  AddGroup,
  Feedback,
  GlobalFooter,
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

export function GroupsPage() {
  const tg = window.Telegram.WebApp;
  const dispatch = useGroupDispatch();
  console.log(useGroupSelector(storeGroups.getState));
  const slide = useGroupSelector(selectGroupSlide);

  const addGroup = () => {
    tg.openTelegramLink('https://t.me/ViktorinaOnlineBot?startgroup=add');
  };

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showGroupSlide(false));
    });
  }
  return (
    <>
      <GlobalHeader>
        <AddButton text={'Добавить группу'} size={5} func={addGroup} />
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
      <SlidePage slide={slide}>
        <p>Groups</p>
      </SlidePage>
    </>
  );
}

export default GroupsPage;
