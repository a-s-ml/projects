import { ActionSendPanel, Smiles } from '@components';
import { ChangeEventHandler } from 'react';

type SendPanelProps = {
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleSubmit: (e: { preventDefault: () => void }) => void;
};

export function SendPanel({
  handleChange,
  message,
}: // handleSubmit,
SendPanelProps) {
  return (
    <div className="absolute bottom-0 pt-4 pb-5 flex items-center space-x-3 justify-center bg-[var(--tg-theme-hint-color)]">
      <Smiles />
      <input
        className="w-1/2 border rounded px-2 py-2"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <ActionSendPanel />
    </div>
  );
}

export default SendPanel;
