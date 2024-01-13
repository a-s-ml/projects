import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
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
                  <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                    Тукущий вид:
                  </span>
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
              <div className="space-y-6">
                {dataCategory.map((item) => (
                <div className="group relative flex items-start space-x-3">
                  <div className="min-w-0 flex">
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
