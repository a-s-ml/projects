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
    <div className="absolute bt-2 b-[--tg-theme-hint-color] bottom-0 pt-4 pb-5 flex items-center space-x-3 justify-center bg-[var(--tg-theme-bg-color)]">
      <div className="px-5 ">
        <FaceSmileIcon className="h-6 w-6 text-[var(--tg-theme-text-color)]" />
      </div>
      <input
        className="w-1/2 border rounded px-2 py-2"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <div className="px-5 " onClick={() => handleSubmit(message)}>
        <ArrowRightCircleIcon className="h-6 w-6 text-[var(--tg-theme-text-color)]" />
      </div>
    </div>
  );
}

export default SendPanel;
