import {
  ButtonIcon,
  ButtonIconConfirm,
  Preloader,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { useGetQuestionByChatQuery } from '@api/question';

interface QuestionListItemProps {
  chat: number;
}

export const QuestionListItem = ({ chat }: QuestionListItemProps) => {
  const tg = window.Telegram.WebApp;
  const { isLoading, isError, data, isSuccess } =
    useGetQuestionByChatQuery(chat);

  function deleteQuestion(b: boolean) {
    if (b) return tg.openTelegramLink('https://t.me/more_details');
    return;
  }
  const deleteQuestionText: string = `Вы действительно хотите удалить бота из группы ${
    isSuccess ? data[0].id : 'не success'
  }`;
  return (
    <>
      {isLoading && <Preloader />}
      {isSuccess &&
        data.map((item) => (
          <li className="cursor-pointer">
            <SimpleAccordionMain
              description={
                <SimpleAccordionText>
                  <span className="text-xs text-[var(--tg-theme-hint-color)]">
                    Дата: {String(item.dateadd)}
                  </span>
                  <p>{item.text}</p>
                  <span className="text-xs text-[var(--tg-theme-hint-color)]">
                    Категория: {item.category}
                  </span>
                </SimpleAccordionText>
              }
              content={
                <>
                  <ButtonIcon
                    firstIcon={true}
                    text={'Модерировать'}
                    color={'[var(--tg-theme-accent-text-color)]'}
                    icon={'moderate'}
                    func={() => console.log('moderate')}
                  />
                  <ButtonIcon
                    firstIcon={true}
                    text={'Статистика'}
                    color={'[var(--tg-theme-accent-text-color)]'}
                    icon={'stat'}
                    func={() => console.log('stat')}
                  />
                  <ButtonIcon
                    firstIcon={true}
                    text={'Отправить'}
                    color={'[var(--tg-theme-accent-text-color)]'}
                    icon={'send'}
                    func={() => console.log('send')}
                  />
                  <ButtonIconConfirm
                    firstIcon={true}
                    text={'Удалить'}
                    color={'red-500'}
                    icon={'delete'}
                    func={deleteQuestion}
                    textConfirm={deleteQuestionText}
                  />
                </>
              }
            />
          </li>
        ))}
    </>
  );
};
