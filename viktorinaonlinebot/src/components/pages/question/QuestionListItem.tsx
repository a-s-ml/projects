import { ChartBarIcon } from "@heroicons/react/24/outline";
import { useGetQuestionByIdQuery } from "../../store/api/question/question.api";
import { useAppDispatch } from "../../store";
import { showSlide } from "../../store/api/slide.slice";
import { useGetCategoryByIdQuery } from "../../store/api/category/category.api";

interface QuestionListItemProps {
  id: number;
}

export default function QuestionListItem({ id }: QuestionListItemProps) {
  const { data: question, isSuccess: successQuestion } =
    useGetQuestionByIdQuery(id);
  const { data: category, isSuccess: successCategory } =
    useGetCategoryByIdQuery(question?.category || 0);
  const dispatch = useAppDispatch();

  return (
    <>
      {successQuestion && (
        <li
          className="px-1 py-1 sm:px-0 cursor-pointer"
          onClick={() => {
            dispatch(showSlide(false));
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
              {successCategory && (
                <p className="text-xs text-[var(--tg-theme-hint-color)]">
                  Категория: {String(category)}
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
