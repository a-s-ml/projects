import { ChartBarIcon } from "@heroicons/react/24/outline";
import { useGetQuestionByIdQuery } from "../../store/api/question/question.api";
import { useGetCategoryByIdQuery } from "../../store/api/category/category.api";
import { useElevator } from "../../hooks/useElevator";

interface QuestionListItemProps {
  id: number;
}

export default function QuestionListItem({ id }: QuestionListItemProps) {
  const { data: question, isSuccess: successQuestion } =
    useGetQuestionByIdQuery(id);
  const { data: dataCategory, isSuccess: successCategory } =
    useGetCategoryByIdQuery(question?.category || 67);
  const { prevLevel } = useElevator();

  return (
    <>
      {successQuestion && (
        <li
          className="px-1 py-1 sm:px-0 cursor-pointer"
          onClick={() => {
            prevLevel();
          }}
        >
          <div className="group relative flex items-start space-x-3 py-4">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                <b>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {question.text}
                </b>
              </div>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">
                Дата добавления: {question.dateadd}
              </p>
              {successCategory && dataCategory && (
                <p className="text-xs text-[var(--tg-theme-hint-color)]">
                  Категория: {dataCategory.name}
                </p>
              )}
            </div>
            <div className="flex-shrink-0 self-center">
              <ChartBarIcon
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
