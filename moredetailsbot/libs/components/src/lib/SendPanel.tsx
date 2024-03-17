import {
  ArrowRightCircleIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { ChangeEventHandler } from 'react';

type SendPanelProps = {
  message: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (message: string) => void;
};

export function SendPanel({
  handleSubmit,
  handleChange,
  message,
}: SendPanelProps) {
  return (
    <div className="w-full fixed bt-2 b-[--tg-theme-hint-color] bottom-0 pt-4 pb-6 flex items-center bg-[var(--tg-theme-bg-color)]">
      <input
        className="w-2/3 border rounded px-2 py-2 bg-[--tg-theme-hint-color] text-"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <div className="px-2">
        <FaceSmileIcon className="h-6 w-6 text-[var(--tg-theme-text-color)] cursor-pointer" />
      </div>
      <div className="px-4 py-2" onClick={() => handleSubmit(message)}>
        <ArrowRightCircleIcon className="h-6 w-6 text-[var(--tg-theme-text-color)] cursor-pointer" />
      </div>
    </div>
  );
}

export default SendPanel;
