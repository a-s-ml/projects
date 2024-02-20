import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SimpleInputAnswerProps {
  id: number;
  selected: number;
  value: string;
  funcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  funcButton: (id: number) => void;
}

export const SimpleInputAnswer = ({
  id,
  value,
  funcChange,
  funcButton,
  selected,
}: SimpleInputAnswerProps) => {
  return (
    <div>
      <label
        htmlFor={`Answer${id}`}
        className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
      >
        Варианта ответа ${id}
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="text"
            name={`Answer${id}`}
            id={`Answer${id}`}
            className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
            placeholder={`Варианта ответа ${id}`}
            value={value}
            onChange={funcChange}
          />
        </div>
        <button
          type="button"
          className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
            selected === id && 'bg-[var(--tg-theme-accent-text-color)]'
          }`}
          onClick={() => funcButton(id)}
        >
          {selected === id ? (
            <CheckIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
          ) : (
            <XMarkIcon
              className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </div>
  );
};
