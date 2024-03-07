import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { ICategory } from '@models';
import { classNames } from '@utils';
import { Fragment } from 'react';

interface SimpleCategorySelectProps {
  value: ICategory;
  func: (cat: ICategory) => void;
  data: ICategory[];
}

export const SimpleCategorySelect = ({
  data,
  func,
  value,
}: SimpleCategorySelectProps) => {
  return (
    <Listbox value={value} onChange={func}>
      <Listbox.Label className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]">
        Категория вопроса
      </Listbox.Label>
      <div className="relative mt-2">
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-[var(--tg-theme-bg-color)] py-1.5 pl-3 pr-10 text-left text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)]">
          <span className="inline-flex w-full truncate">
            <span className="truncate text-[var(--tg-theme-text-color)]">
              {value.name}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--tg-theme-bg-color)] py-1 text-base shadow-lg ring-1 ring-[var(--tg-theme-text-color)] ring-opacity-5">
          {data.map((cat) => (
            <Listbox.Option
              key={cat.id}
              className={({ active }) =>
                classNames(
                  active
                    ? 'bg-indigo-600 text-white'
                    : 'text-[var(--tg-theme-text-color)]',
                  'relative cursor-default select-none py-2 pl-3 pr-9'
                )
              }
              value={cat}
            >
              {({ selected, active }) => (
                <>
                  <div className="flex">
                    <span
                      className={classNames(
                        selected ? 'font-semibold' : 'font-normal',
                        'truncate text-[var(--tg-theme-text-color)]'
                      )}
                    >
                      {cat.name}
                    </span>
                  </div>

                  {selected ? (
                    <span
                      className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
