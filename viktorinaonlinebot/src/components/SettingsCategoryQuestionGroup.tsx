import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { ICategoryGroup } from "../models/ICategoryGroup";
import { ICategory } from "../models/ICategory";
import CategoryCheckbox from "./CategoryCheckbox";
import AddNewCategory from "./AddNewCategory";
import { Dispatch, SetStateAction } from "react";

interface SettingsCategoryQuestionGroupProps {
  dataCategory: ICategory[];
  category: ICategoryGroup[];
  setCategory: Dispatch<SetStateAction<ICategoryGroup[]>>;
}

export default function SettingsCategoryQuestionGroup({
  dataCategory,
  category,
  setCategory
}: SettingsCategoryQuestionGroupProps) {
  const tg = window.Telegram.WebApp;

  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
                    Категории вопросов
                  </div>
                  <p className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                    Выбрано категорий:
                  </p>
                  <p className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                    Вопросов в выбранных категориях:
                  </p>
                </div>
                <div className="flex-shrink-0 self-center text-right">
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </Disclosure.Button>
            </li>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-1.5 columns-2">
                {dataCategory.map((item) => (
                  <CategoryCheckbox
                    key={item.id}
                    cat={item}
                    checked={
                      category.find((itm) => itm.category === item.id)
                        ? true
                        : false
                    }
                  />
                ))}
                <AddNewCategory />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
