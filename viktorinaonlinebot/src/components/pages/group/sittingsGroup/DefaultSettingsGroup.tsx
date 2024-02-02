import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function DefaultSettingsGroup() {
  return (
    <div className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer">
      <ArrowPathIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
      <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
        <b>Восстановить значения по-умолчанию</b>
      </div>
    </div>
  );
}
