import { useGetQuestionByChatQuery } from "../../store/api/question/question.api";
import ErrorPage from "../ErrorPage";
import QuestionListItem from "./QuestionListItem";

interface QuestionListProps {
  chat: number;
}
export default function QuestionList({ chat }: QuestionListProps) {
  const tg = window.Telegram.WebApp;
  const {
    isLoading: loadGroups,
    isError: errorGroups,
    data: dataQuestion,
  } = useGetQuestionByChatQuery(chat);
  tg.MainButton.hide();

  return (
    <>
      {loadGroups && <p>Loading...</p>}
      {errorGroups && <ErrorPage />}
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {dataQuestion &&
          dataQuestion.map((question) => (
            <QuestionListItem key={question.id} id={question.id} />
          ))}
      </ul>
    </>
  );
}
