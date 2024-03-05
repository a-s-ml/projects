import {
  ButtonIcon,
  GlobalHeader,
  MainBlock,
  Page,
  SlidePage,
} from '@components';
import { QuestionList } from './QuestionList';
import NewQuesion from './NewQuesion';
import { useEffect, useState } from 'react';
import { useBackButton } from '@utils';

export const QuestionsPage = () => {
  const tg = window.Telegram.WebApp;
  const [successAdd, setSuccessAdd] = useState(false);

  const { setTypeSlide, setBackButtonState, typeSlide, backButtonState } =
    useBackButton();
  const addQuestion = () => {
    setTypeSlide('addQuestion');
    setBackButtonState(true);
  };

  useEffect(() => {
    if (successAdd) {
      tg.showConfirm('Вопрос успешно добавлен!', console.log('showPopup'));
    }
  }, [successAdd]);

  const successAddQuestion = (b: boolean) => {
    setSuccessAdd(b);
  };

  return (
    <>
      <Page>
        <GlobalHeader>
          <ButtonIcon
            firstIcon={true}
            text={'Добавить вопрос'}
            color={'[var(--tg-theme-accent-text-color)]'}
            icon={'add'}
            func={addQuestion}
          />
        </GlobalHeader>
        <MainBlock>
          <div className="text-center pt-9"></div>
          <QuestionList />
        </MainBlock>
      </Page>
      <SlidePage slide={backButtonState}>
        {typeSlide === 'addQuestion' && (
          <NewQuesion success={successAddQuestion} />
        )}
      </SlidePage>
    </>
  );
};

export default QuestionsPage;
