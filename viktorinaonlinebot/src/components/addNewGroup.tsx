import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddNewGroup() {
  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <li className="px-1 py-1 sm:px-0">
        <div className="group relative flex items-start space-x-3 py-4">
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-[var(--tg-theme-hint-color)] group-hover:text-[var(--tg-theme-text-color)]">
              <b>
                <span className="absolute inset-0" aria-hidden="true" />
                Добавить группу/канал
              </b>
            </div>
          </div>
          <div className="flex-shrink-0 self-center">
            <PlusCircleIcon
              className="h-5 w-5 text-[var(--tg-theme-hint-color)] group-hover:text-[var(--tg-theme-text-color)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </li>
    </ul>
  );
}
