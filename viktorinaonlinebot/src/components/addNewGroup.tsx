import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddNewGroup() {
  return (
    <div className="headerblock flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer">
      <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] headerblock-hover:text-[var(--tg-theme-text-color)]">
        <b>
          <span className="absolute inset-0" aria-hidden="true" />
          Добавить группу/канал
        </b>
      </div>

      <PlusCircleIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] headerblock-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
    </div>
  );
}
