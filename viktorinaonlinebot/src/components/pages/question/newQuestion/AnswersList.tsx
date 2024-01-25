import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

type AnswersData = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
};

type AnswersListProps = AnswersData & {
  updateFields: (fields: Partial<AnswersData>) => void;
};

export function AnswersList({
  answer1,
  answer2,
  answer3,
  answer4,
  updateFields,
}: AnswersListProps) {
  return (
    <div className="py-2">
      <div>
        <label
          htmlFor="answer1"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 1
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="answer1"
              id="answer1"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 1"
              value={answer1}
              onChange={(e) => updateFields({ answer1: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] hover:bg-[var(--tg-theme-accent-text-color)] hover:text-[var(--tg-theme-text-color)]"
          >
            <XMarkIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
            Верно
          </button>
        </div>
      </div>
      <div>
        <label
          htmlFor="answer2"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 2
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="answer2"
              id="answer2"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 2"
              value={answer2}
              onChange={(e) => updateFields({ answer2: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] hover:bg-[var(--tg-theme-accent-text-color)] hover:text-[var(--tg-theme-text-color)]"
          >
            <XMarkIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
            Верно
          </button>
        </div>
      </div>
      <div>
        <label
          htmlFor="answer3"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 3
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="answer3"
              id="answer3"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 3"
              value={answer3}
              onChange={(e) => updateFields({ answer3: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] hover:bg-[var(--tg-theme-accent-text-color)] hover:text-[var(--tg-theme-text-color)]"
          >
            <CheckIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
            Верно
          </button>
        </div>
      </div>
      <div>
        <label
          htmlFor="answer4"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 4
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="answer4"
              id="answer4"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 4"
              value={answer4}
              onChange={(e) => updateFields({ answer4: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] hover:bg-[var(--tg-theme-accent-text-color)] hover:text-[var(--tg-theme-text-color)]"
          >
            <XMarkIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
            Верно
          </button>
        </div>
      </div>
    </div>
  );
}
