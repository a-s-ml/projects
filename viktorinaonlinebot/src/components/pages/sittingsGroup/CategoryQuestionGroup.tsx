import {
  ListBulletIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { ICategoryGroup } from "../../../models/ICategoryGroup";
import CategoryCheckbox from "./CategoryCheckbox";
import AddNewCategory from "../../AddNewCategory";
import { selectAllCategories } from "../../store/api/category/category.slice";
import { useAppSelector } from "../../store";

interface CategoryGroupProps {
  category: ICategoryGroup[];
}

export default function CategoryGroup({ category }: CategoryGroupProps) {
  const tg = window.Telegram.WebApp;
  const allCategory = useAppSelector(selectAllCategories);

  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                <div className="flex-shrink-0">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg">
                    <ListBulletIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    Категории вопросов
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
            <Disclosure.Panel className="pt-6">
              <div className="space-y-1.5 columns-2">
                {allCategory.all.map((item) => (
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
