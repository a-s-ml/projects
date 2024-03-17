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
    <div className="absolute bottom-0 px-4 py-4 flex ustify-center items-center">
      <Smiles />
      <input
        className="w-full border rounded px-2 py-2"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <ActionSendPanel />
    </div>
  );
}

export default SendPanel;
