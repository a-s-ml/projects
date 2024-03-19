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
  const allRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [message]);

  const onfocuspadding = () => {
    if (textareaRef.current) {
      textareaRef.current.style.marginBottom = '120px';
    }
  };

  return (
    <div
      ref={allRef}
      className="w-full absolute bt-2 b-[--tg-theme-hint-color] bottom-0 pt-4 pb-6 flex items-center bg-[var(--tg-theme-bg-color)]"
    >
      <textarea
        className="w-2/3 border rounded px-2 py-2 bg-[--tg-theme-hint-color] text-"
        ref={textareaRef}
        style={{
          minHeight: MIN_TEXTAREA_HEIGHT,
          resize: 'none',
        }}
        value={message}
        onChange={handleChange}
        onFocus={onfocuspadding}
      />
      <div className="px-2">
        <FaceSmileIcon className="h-6 w-6 text-[var(--tg-theme-text-color)] cursor-pointer" />
      </div>
      <SimpleButton icon={'send'} click={handleSubmit}></SimpleButton>
    </div>
  );
}

export default SendPanel;
