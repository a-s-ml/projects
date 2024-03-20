import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { ChangeEventHandler, useLayoutEffect, useRef } from 'react';
import SimpleButton from './SimpleButton';

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
  const MIN_TEXTAREA_HEIGHT = 32;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [message]);

  return (
    <div className="flex py-6 justify-center items-start bg-[var(--tg-theme-bg-color)]">
      <textarea
        className="w-2/3 border-box rounded px-2 py-2 bg-[--tg-theme-hint-color] text-[var(--tg-theme-bg-color)] h-10 min-h-[40px]"
        // ref={textareaRef}
        // style={{
        //   minHeight: MIN_TEXTAREA_HEIGHT,
        //   resize: 'none',
        // }}
        style={{ width: `${message.length}ch` }}
        value={message}
        onChange={handleChange}
      />
      <div className="px-2">
        <FaceSmileIcon className="h-6 w-6 text-[var(--tg-theme-text-color)] cursor-pointer" />
      </div>
      <SimpleButton icon={'send'} click={handleSubmit}></SimpleButton>
    </div>
  );
}

export default SendPanel;
