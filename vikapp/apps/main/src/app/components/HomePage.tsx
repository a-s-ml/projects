import { useAppDispatch } from '@store/main';
import { Page, MainBlock, HeaderBlock, FooterBlock } from '@components';
import { showSlide } from '../store/slices/slide.slice';
import Logo from "../assets/img/Logo.png";

export function HomePage() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Page>
        <HeaderBlock>
          <div className="text-center">
            <img
              className="mx-auto h-12 w-12"
              src={Logo}
              alt="https://80q.ru"
            />
            <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
              ViktorinaOnlineBot
            </h2>
            <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
              Бот проводит викторины в группах/каналах используя собственную
              базу вопросов и вопросы, заданные участниками викторины
            </p>
          </div>
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
