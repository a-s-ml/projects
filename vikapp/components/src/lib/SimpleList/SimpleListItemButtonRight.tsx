import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const SimpleListItemButtonRight = () => {
  return (
    <div className="flex-shrink-0 self-center">
      <ChevronRightIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
    </div>
  );
};
