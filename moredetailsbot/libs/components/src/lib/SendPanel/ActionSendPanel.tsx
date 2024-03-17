import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

type ActionSendPanelProps = {
  // onclick: (e: { preventDefault: () => void }) => void;
};

export function ActionSendPanel({}: ActionSendPanelProps) {
  return (
    <div className="px-5 ">
      <ArrowRightCircleIcon className="h-6 w-6 text-[var(--tg-theme-text-color)]" />
    </div>
  );
}

export default ActionSendPanel;
