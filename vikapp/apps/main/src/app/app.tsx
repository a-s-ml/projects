import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));
import { store, useAppDispatch, useAppSelector } from './store';
import {
  selectSlide,
  selectSlidePatch,
  selectSlideUser,
  userSlide,
} from './store/slices/slide.slice';
import { useValidateQuery } from '@api/vik';
import { useGetTypeQuery } from '@api/type';
import { useGetCategoryQuery } from '@api/category';
import { useGetTimeQuery } from '@api/period';
import { getAllCategories } from './store/slices/category.slice';
import { getAllType } from './store/slices/type.slice';
import { getAllPeriod } from './store/slices/period.slice';
import Page from 'components/src/lib/page';
import HeaderBlock from 'components/src/lib/header';
import MainBlock from 'components/src/lib/main';
import FooterBlock from 'components/src/lib/footer';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectSlideUser);

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
    isSuccess: successUser,
  } = useValidateQuery(tg.initData, { skip: user !== 0 });
  console.log(tg);

  const { data: allTypes, isSuccess: successType } = useGetTypeQuery('');
  const { data: allTime, isSuccess: successTime } = useGetTimeQuery('');
  const { data: allCategory, isSuccess: successCategory } =
    useGetCategoryQuery('');

  successUser && dispatch(userSlide(dataUser.UserData.user.id));

  successType && dispatch(getAllType(allTypes));
  successTime && dispatch(getAllPeriod(allTime));
  successCategory && dispatch(getAllCategories(allCategory));
  const pathSlide = useAppSelector(selectSlidePatch);
  console.log(useAppSelector(store.getState));
  const slide = useAppSelector(selectSlide);
  console.log(slide);

  return (
    <React.Suspense fallback={null}>
      <Page>
        <HeaderBlock>
          <p>Header</p>
        </HeaderBlock>
        <MainBlock>
          <Groups />
        </MainBlock>
        <FooterBlock>
          <p>Footer</p>
        </FooterBlock>
      </Page>
    </React.Suspense>
  );
}

export default App;
