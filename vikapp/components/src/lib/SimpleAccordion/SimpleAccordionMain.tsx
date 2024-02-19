import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface SimpleAccordionMainProps {
  description: React.ReactNode;
  content: React.ReactNode;
}

export const SimpleAccordionMain = ({
  content,
  description,
}: SimpleAccordionMainProps) => {
  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                {description}
                <div className="flex-shrink-0 self-center text-right">
                  <ChevronUpIcon
                    className={`h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)] ${
                      open ? 'transform rotate-180 transition ease-in-out duration-500' : 'transition ease-in-out duration-500'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </Disclosure.Button>
            </li>
            <Transition
              enter="transition ease-in-out duration-500"
              enterFrom="transform scale-95 opacity-5"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in-out duration-500"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-5"
            >
              <Disclosure.Panel className="pb-4">{content}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};
