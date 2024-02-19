import {
  ButtonIcon,
  ButtonIconConfirm,
  Preloader,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { useGetQuestionByChatQuery } from '@api/question';
import { deleteQuestion, inDevelopment } from '@utils';

interface QuestionListItemProps {
  chat: number;
}

export const QuestionListItem = ({ chat }: QuestionListItemProps) => {
  const tg = window.Telegram.WebApp;
  const { isLoading, data, isSuccess } =
    useGetQuestionByChatQuery(chat);

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
                    func={inDevelopment}
                  />
                  <ButtonIcon
                    firstIcon={true}
                    text={'Статистика'}
                    color={'[var(--tg-theme-accent-text-color)]'}
                    icon={'stat'}
                    func={inDevelopment}
                  />
                  <ButtonIcon
                    firstIcon={true}
                    text={'Отправить'}
                    color={'[var(--tg-theme-accent-text-color)]'}
                    icon={'send'}
                    func={inDevelopment}
                  />
                  <ButtonIconConfirm
                    firstIcon={true}
                    text={'Удалить'}
                    color={'red-500'}
                    icon={'delete'}
                    func={deleteQuestion}
                    textConfirm={`Вы действительно хотите удалить вопрос №${
                      isSuccess ? data[0].id : 'не success'
                    }`}
                  />
                </>
              }
            />
          </li>
        ))}
    </>
  );
};
