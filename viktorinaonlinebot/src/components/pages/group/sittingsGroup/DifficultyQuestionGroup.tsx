import { Disclosure } from "@headlessui/react";
import { useAppSelector } from "../../../store";
import { useGetGroupDbQuery } from "../../../store/api/group.api";
import { selectModalData } from "../../../store/api/modal.slice";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export default function DifficultyQuestionGroup() {
  const chat = useAppSelector(selectModalData);
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const tg = window.Telegram.WebApp;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <li className="py-4 px-0">
            <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
              <div className="flex-shrink-0">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg">
                  <ScaleIcon
                    className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                  Сложность вопросов
                </div>
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
          <Disclosure.Panel className="py-4">
            <div className="space-y-1.5 columns-2"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
