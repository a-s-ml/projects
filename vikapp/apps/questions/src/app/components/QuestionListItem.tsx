import {
  Preloader,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { useGetQuestionByChatQuery } from '@api/question';

export const QuestionListItem = () => {
  const { isLoading, isError, data, isSuccess } =
    useGetQuestionByChatQuery(521884639);

  return (
    <>
      {isLoading && <Preloader />}
      {isSuccess &&
        data.map((item) => (
          <li className="cursor-pointer">
            <SimpleAccordionMain
              description={
                <>
                  <SimpleAccordionText
                    children={<p>{item.text}</p>}
                  ></SimpleAccordionText>
                </>
              }
              content={
                <>
                  <p>Удалить</p>
                  <p>Модерировать</p>
                  <p>Статистика</p>
                </>
              }
            />
          </li>
        ))}
    </>
  );
};
