import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

interface SittingsNotactiveQuestionGroupProps {
  type: string;
  description: string;
}

export default function SittingsNotactiveQuestionGroup({
  type,
  description
}: SittingsNotactiveQuestionGroupProps) {
  return (
    <>
      <Disclosure as="div">
        <li className="py-4 px-0">
          <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
            <div className="min-w-0 flex-1 text-left">
              <div className="text-sm font-medium text-[var(--tg-theme-hint-color)]">
                {type}
              </div>
              <span className="text-xs leading-5 text-[var(--tg-theme-hint-color)]">
                Настройки {description} временно недоступны...
              </span>
            </div>
            <div className="flex-shrink-0 self-center text-right">
              <ChevronDownIcon
                className="h-5 w-5 text-[var(--tg-theme-hint-color)]"
                aria-hidden="true"
              />
            </div>
          </Disclosure.Button>
        </li>
      </Disclosure>
    </>
  );
}
