import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface ButtonEditProps {
  size: number;
  func: () => void;
}

export const ButtonEdit = ({ func, size }: ButtonEditProps) => {
  return (
    <div
      className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
      onClick={func}
    >
      <PencilSquareIcon
        className={`h-${size} w-${size} text-[var(--tg-theme-text-color)]`}
        aria-hidden="true"
      />
      <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
        <b>Редактировать</b>
      </div>
    </div>
  );
};
