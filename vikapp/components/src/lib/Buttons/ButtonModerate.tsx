import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface ButtonModerateProps {
  func: (b: boolean) => void;
  text: string;
}

export const ButtonModerate = ({ func, text }: ButtonModerateProps) => {
  const tg = window.Telegram.WebApp;

  return (
    <div
      className="group flex items-start px-[5px] py-2 space-x-3 cursor-pointer text-[var(--tg-theme-text-color)]s"
      onClick={() => tg.showConfirm(text, func)}
    >
      <CheckBadgeIcon className="h-5 w-5" aria-hidden="true" />
      <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
        <span>Модерировать</span>
      </div>
    </div>
  );
};
