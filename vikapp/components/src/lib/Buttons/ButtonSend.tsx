import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface ButtonSendProps {
  text: string;
  size: number;
  func: () => void;
}

export const ButtonSend = ({ text, func, size }: ButtonSendProps) => {
  return (
    <div
      className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
      onClick={func}
    >
      <ArrowTopRightOnSquareIcon
        className={`h-${size} w-${size} text-[var(--tg-theme-text-color)]`}
        aria-hidden="true"
      />
      <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
        <b>{text}</b>
      </div>
    </div>
  );
};
