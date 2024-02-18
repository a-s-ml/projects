import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const SimpleListItemButtonDown = () => {
  return (
    <div className="flex-shrink-0 self-center">
      <ChevronDownIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
    </div>
  );
};
