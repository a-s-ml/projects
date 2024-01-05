import { PhotoIcon } from "@heroicons/react/24/outline";

interface TypeQuestionProps {
  questionType: number;
}
export default function TypeQuestion({ questionType }: TypeQuestionProps) {
  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <div className="mt-1 flex items-center gap-x-1.5">
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            Вид вопросов:
          </span>
          {questionType === 1 && (
            <PhotoIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          {questionType === 2 && <p>2</p>}
          {questionType === 3 && <p>3</p>}
          {questionType === 4 && <p>4</p>}
        </div>
      </div>
    </div>
  );
}
