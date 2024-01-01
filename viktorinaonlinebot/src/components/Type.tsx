import { Cog8ToothIcon } from "@heroicons/react/20/solid";
export default function Type() {
  return (
    <div className="mt-1 flex items-center gap-x-1.5">
      <p className="text-xs leading-5 text-emerald-500">Активна</p>
      <Cog8ToothIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
    </div>
  );
}
