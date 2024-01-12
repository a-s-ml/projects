import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddNewGroup() {
  return (
    <ul role="list" className="block divide-y divide-[var(--tg-theme-hint-color)] w-full">
      <li className="py-4 px-0 ">
        <div className="group relative flex items-center justify-between ">
          <div className="text-sm font-medium text-[var(--tg-theme-hint-color)] group-hover:text-[var(--tg-theme-text-color)]">
            <b>
              <span className="absolute inset-0" aria-hidden="true" />
              Добавить группу/канал
            </b>
          </div>
        </div>
        <PlusCircleIcon
          className="h-5 w-5 text-[var(--tg-theme-hint-color)] group-hover:text-[var(--tg-theme-text-color)]"
          aria-hidden="true"
        />
      </li>
    </ul>
  );
}
