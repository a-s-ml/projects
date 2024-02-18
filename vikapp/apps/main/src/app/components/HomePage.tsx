import { MainBlock, Page } from '@components';
import { PromoPage } from './PromoPage';
import { MenuList } from './MenuList';

export const HomePage = () => {
  return (
    <>
      <Page>
        <MainBlock>
          <PromoPage />
          <MenuList />
        </MainBlock>
      </Page>
    </>
  );
}

export default HomePage;
