import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { useAppDispatch, useAppSelector } from '@store/main';
import { useValidateQuery } from '@api/vik';
import {
  SlidePage,
  Page,
  MainBlock,
  HeaderBlock,
  FooterBlock,
} from '@components';
import {
  selectSlide,
  selectSlideUser,
  showSlide,
  userSlide,
} from './store/slices/slide.slice';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectSlideUser);

  const { data, isSuccess } = useValidateQuery(tg.initData, {
    skip: user !== 0,
  });

  isSuccess && dispatch(userSlide(data.UserData.user.id));

  const slide = useAppSelector(selectSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showSlide(false)), tg.BackButton.hide();
    });
  }

  return (
    <React.Suspense fallback={null}>
      <Page>
        <HeaderBlock>
          <p onClick={() => dispatch(showSlide(true))}>Header</p>
        </HeaderBlock>
        <MainBlock>
          <p>1</p>
          <p>2</p>
        </MainBlock>
        <FooterBlock>
          <p>Footer</p>
        </FooterBlock>
      </Page>
      <SlidePage slide={slide}>
        <b>Slide</b>
        <Groups />
      </SlidePage>
    </React.Suspense>
  );
}

export default App;
