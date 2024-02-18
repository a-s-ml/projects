import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { selectQuestionData } from '../store/slices/questionApp.slice';
import {
  Preloader,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { useGetQuestionByChatQuery } from '@api/question';

interface QuestionListItemProps {
  chat: number;
}

export const QuestionListItem = ({ chat }: QuestionListItemProps) => {
  const { isLoading, isError, data, isSuccess } =
    useGetQuestionByChatQuery(chat);

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
