import { NoSymbolIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

interface NotactiveSittingsProps {
  type: string;
}

export default function NotactiveSittings({ type }: NotactiveSittingsProps) {
  return (
    <>
      <Disclosure as="div">
        <li className="py-4 px-0">
          <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
            <div className="flex-shrink-0">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg">
                <NoSymbolIcon
                  className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="text-sm font-medium text-[var(--tg-theme-hint-color)]">
                {type}
              </div>
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
