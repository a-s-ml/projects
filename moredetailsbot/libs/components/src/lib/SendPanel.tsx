import { ChangeEventHandler, useLayoutEffect, useRef } from 'react';
import SimpleButton from './SimpleButton';
import { useAautoSizeInput } from '@functions';

type SendPanelProps = {
  message: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmit: () => void;
};

export function SendPanel({
  handleSubmit,
  handleChange,
  message,
}: SendPanelProps) {
  const MIN_TEXTAREA_HEIGHT = 20;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAautoSizeInput('title-input', textAreaRef.current, message);

  return (
    <div className="flex py-6 justify-center items-start bg-[var(--tg-theme-bg-color)] gap-x-2">
      <textarea
        className="w-2/3 border-box rounded px-2 py-2 bg-[--tg-theme-hint-color] text-[var(--tg-theme-bg-color)]"
        ref={textAreaRef}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: 'none',
        }}
        value={message}
        onChange={handleChange}
      />
      <SimpleButton
        icon={'smile'}
        click={() => console.log('smile')}
      ></SimpleButton>
      <SimpleButton icon={'send'} click={handleSubmit}></SimpleButton>
    </div>
  );
}

export default SendPanel;
