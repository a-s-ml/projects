import * as React from 'react';
import { useAppDispatch } from '@store/main';
import { Page, MainBlock, HeaderBlock, FooterBlock } from '@components';
import { showSlide } from '../store/slices/slide.slice';

export function HomePage() {
  const dispatch = useAppDispatch();
  return (
    <>
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
    </>
  );
}

export default HomePage;
