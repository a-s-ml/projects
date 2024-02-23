import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

interface ITab {
  name: string;
  type: string;
  component: () => JSX.Element;
}

interface SimpleTabsProps {
  title: string;
  tabs: ITab[];
}

export const SimpleTabs = ({ title, tabs }: SimpleTabsProps) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto max-w-screen py-2"
    >
      <div className="mx-auto max-w-screen px-0">
        <div className="max-w-screen">
          <h2
            id="features-heading"
            className="font-bold tracking-tight text-[var(--tg-theme-accent-text-color)]"
          >
            {title}
          </h2>
        </div>

        <Tab.Group as="div" className="mt-4">
          <div className="mx-0 flex overflow-x-auto">
            <div className="flex-auto border-b border-[var(--tg-theme-hint-color)] px-0">
              <Tab.List className="-mb-px flex space-x-10">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-b-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)]'
                          : 'text-[var(--tg-theme-accent-text-color)]',
                        'whitespace-nowrap py-4 text-sm font-medium'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>

          <Tab.Panels as={Fragment}>
            {tabs.map((tab) => (
              <Tab.Panel key={tab.name} className="space-y-16 pt-10">
                <tab.component />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
