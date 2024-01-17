import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function AnswersList() {
  return (
    <div className="py-2">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 1
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 1"
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
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 2
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 2"
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
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 3
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 3"
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
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
        >
          Вариант ответа 4
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
              placeholder="Вариант ответа 4"
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
