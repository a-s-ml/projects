import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { selectAllCategories } from "../../../store/api/category/category.slice";
import { ICategory } from "../../../../models/ICategory";
import { getQuestionCategory } from "../../../store/api/question/question.slice";

interface CategoryListProps {
  onSubmit: () => void;
}

let mona: boolean = false;

export function CategoryList({ onSubmit }: CategoryListProps) {
  const categories = useAppSelector(selectAllCategories);
  const dispatch = useAppDispatch();

  const [selectedCategory, setCategory] = useState(categories.all[0]);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  console.log(mona)

  const handleChange = (cat: ICategory) => {
    setCategory(cat);
    dispatch(getQuestionCategory(cat.id));
    mona = true;
  };

  const tg = window.Telegram.WebApp;
  tg.MainButton.hide();
  if (mona) {
    tg.MainButton.setText("Следующий шаг");
    tg.MainButton.show();
    tg.onEvent("mainButtonClicked", onSubmit);
  }

  return (
    <div className="py-2">
      <Listbox value={selectedCategory} onChange={handleChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]">
              Категория вопроса
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-[var(--tg-theme-bg-color)] py-1.5 pl-3 pr-10 text-left text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)]">
                <span className="inline-flex w-full truncate">
                  <span className="truncate text-[var(--tg-theme-text-color)]">
                    {selectedCategory.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-[var(--tg-theme-text-color)]"
                    aria-hidden="true"
                  />
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
                  {categories.all.map((cat) => (
                    <Listbox.Option
                      key={cat.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "bg-indigo-600 text-white"
                            : "text-[var(--tg-theme-text-color)]",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={cat}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "truncate text-[var(--tg-theme-text-color)]"
                              )}
                            >
                              {cat.name}
                            </span>
                            {/* <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                            {cat.id}
                          </span> */}
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
    </div>
  );
}
