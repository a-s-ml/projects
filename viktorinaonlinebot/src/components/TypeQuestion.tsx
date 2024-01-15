import {
  PhotoIcon,
  ListBulletIcon,
  ArrowPathIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

interface TypeQuestionProps {
  questionType: number;
}
export default function TypeQuestion({ questionType }: TypeQuestionProps) {
  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <div className="mt-1 flex items-center gap-x-1.5">
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            Вид:
          </span>
          {questionType === 1 && (
            <>
              <PhotoIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
              <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                фото
              </span>
            </>
          )}
          {questionType === 2 && (
            <>
              <LanguageIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
              <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                опрос
              </span>
            </>
          )}
          {questionType === 3 && (
            <>
              <ListBulletIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
              <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                текст
              </span>
            </>
          )}
          {questionType === 6 && (
            <>
              <ArrowPathIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
              <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                микс
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
