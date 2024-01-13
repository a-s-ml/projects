import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { ICategoryGroup } from "../models/ICategoryGroup";
import { ICategory } from "../models/ICategory";

interface SettingsCategoryQuestionGroupProps {
  dataCategory: ICategory[];
  dataGroupCategory: ICategoryGroup[];
  selectionChanged: () => void;
}

export default function SettingsCategoryQuestionGroup({
  dataCategory,
  dataGroupCategory,
  selectionChanged,
}: SettingsCategoryQuestionGroupProps) {
  const tg = window.Telegram.WebApp;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
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
                  <div className="group relative flex items-start space-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id={item.name}
                        checked={dataGroupCategory.find(itm => itm.category === item.id) ? true : false}
                        onChange={selectionChanged}
                        name={item.name}
                        type="checkbox"
                        className="h-4 w-4 rounded border-[var(--tg-theme-hint-color)] text-[var(--tg-theme-text-color)]"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor={item.name}
                        className="font-medium text-[var(--tg-theme-text-color)] cursor-pointer"
                      >
                        {item.name}
                      </label>
                    </div>
                  </div>
                ))}
                <div className="group relative flex items-start space-x-3">
                  <div className="flex h-6 items-center">
                    <PlusCircleIcon
                      className="h-4 w-4 text-[var(--tg-theme-accent-text-color)]"
                    />
                  </div>
                  <div
                    className="ml-3 text-sm leading-6"
                    onClick={() => tg.openTelegramLink("https://t.me/a_s_ml")}
                  >
                    <label
                      htmlFor="add"
                      className="font-medium text-[var(--tg-theme-accent-text-color)] cursor-pointer"
                    >
                      Добавить
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
