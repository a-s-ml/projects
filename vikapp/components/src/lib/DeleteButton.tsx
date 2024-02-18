import { TrashIcon } from '@heroicons/react/24/outline';

interface DeleteButtonProps {
  func: (b: boolean) => void;
  text: string;
}

export const DeleteButton = ({ func, text }: DeleteButtonProps) => {
  const tg = window.Telegram.WebApp;

  return (
    <div
      className="group flex items-start px-8 py-8 space-x-3 cursor-pointer"
      onClick={() => tg.showConfirm(text, func)}
    >
      <TrashIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
      <div className="text-sm font-medium text-red-600">
        <b>Удалить</b>
      </div>
    </div>
  );
};
