import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useGetQuestionByIdQuery } from "../../store/api/question/question.api";

interface QuestionListItemProps {
  id: number;
}

export default function QuestionListItem({ id }: QuestionListItemProps) {
  const { data: question, isError, isSuccess } = useGetQuestionByIdQuery(id);

  return (
    <>
      {isError && <li>error</li>}
      {isSuccess && (
        <li className="py-4 px-0">
          <div className="group relative flex items-start space-x-3">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                {question.text}
              </div>
            </div>
          </div>
          <div
            className="group relative flex items-start space-x-3 cursor-pointer"
            onClick={() => {
              // dispatch(showSlide(false));
              // dispatch(showModal(true));
              // dispatch(dataModal(group));
            }}
          >
            <div className="min-w-0 flex-1">
            {question.answer1}
            {question.answer2}
            {question.answer3}
            {question.answer4}
            </div>
            <div className="flex-shrink-0 self-center">
              <Cog8ToothIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </li>
      )}
    </>
  );
}
