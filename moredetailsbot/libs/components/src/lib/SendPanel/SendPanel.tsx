import { ActionSendPanel, Smiles } from '@components';

export function SendPanel() {
  return (
    <div className="bg-grey-lighter px-4 py-4 flex items-center">
      <Smiles />
      <div className="flex-1 mx-4">
        <input className="w-full border rounded px-2 py-2" type="text" />
      </div>
      <ActionSendPanel />
    </div>
  );
}

export default SendPanel;
