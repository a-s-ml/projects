import {
  PhotoIcon,
  ListBulletIcon,
  ArrowPathIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { useGetTypeByIdQuery } from "../../store/api/type/type.api";

interface TypeQuestionProps {
  questionType: number;
}
export default function TypeQuestion({ questionType }: TypeQuestionProps) {
  const { data: dataType } = useGetTypeByIdQuery(questionType);
  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        {dataType && (
          <div className="mt-1 flex items-center gap-x-1.5">
            <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
              Вид:
            </span>
            {dataType.id === 1 && (
              <PhotoIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            {dataType.id === 2 && (
              <LanguageIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            {dataType.id === 3 && (
              <ListBulletIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            {dataType.id === 6 && (
              <ArrowPathIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            )}
            <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
              {dataType.description}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
