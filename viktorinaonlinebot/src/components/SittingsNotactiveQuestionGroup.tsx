import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

interface SittingsNotactiveQuestionGroupProps {
  type: string;
}

export default function SittingsNotactiveQuestionGroup({
  type,
}: SittingsNotactiveQuestionGroupProps) {
  return (
    <>
      <Disclosure as="div">
        <li className="py-4 px-0 cursor-not-allowed">
          <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
            <div className="min-w-0 flex-1 text-left">
              <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
                {type}
              </div>
              <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                Настройки {type} Временно недоступны
              </span>
            </div>
            <div className="flex-shrink-0 self-center text-right">
              <ChevronDownIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                aria-hidden="true"
              />
            </div>
          </Disclosure.Button>
        </li>
      </Disclosure>
    </>
  );
}
