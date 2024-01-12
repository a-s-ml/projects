import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddNewGroup() {
  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <li className="addgroup py-4 px-0">
        <div className="text-sm font-medium text-[var(--tg-theme-hint-color)] addgroup-hover:text-[var(--tg-theme-text-color)]">
          <b>
            <span className="absolute inset-0" aria-hidden="true" />
            Добавить группу/канал
          </b>
        </div>
      </li>
    </ul>
  );
}
