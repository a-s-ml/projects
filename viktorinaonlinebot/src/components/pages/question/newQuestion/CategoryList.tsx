import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { ICategory } from '../../../../models/ICategory'

interface CategoryListProps {
    categories: ICategory[];
    cat: number;
    setCategory: Dispatch<SetStateAction<number>>
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CategoryList({categories, cat, setCategory}: CategoryListProps) {

  return (
    <Listbox value={cat} onChange={setCategory}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-[var(--tg-theme-bg-color)] py-1.5 pl-3 pr-10 text-left text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)]">
              <span className="inline-flex w-full truncate">
                <span className="truncate"></span>
                <span className="ml-2 truncate"></span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-[var(--tg-theme-text-color)]" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--tg-theme-bg-color)] py-1 text-base shadow-lg ring-1 ring-[var(--tg-theme-text-color)] ring-opacity-5">
                {categories.map((cat) => (
                  <Listbox.Option
                    key={cat.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={cat.id}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex">
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                            {cat.name}
                          </span>
                          <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                            {cat.id}
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
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
