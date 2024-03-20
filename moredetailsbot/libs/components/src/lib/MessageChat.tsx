import { classNames } from '@functions';

export interface MessageChatProps {
  my: boolean;
  name: string;
  text: string;
}

export function MessageChat({ my, name, text }: MessageChatProps) {
  const now = new Date();
  return (
    <div className={classNames(my ? 'justify-end' : '', 'flex mb-2')}>
      <div
        className={classNames(
          my
            ? 'text-right bg-[var(--tg-theme-button-color)]'
            : 'text-left bg-[var(--tg-theme-hint-color)]',
          'rounded py-2 px-3 max-w-[75%]'
        )}
      >
        {!my && (
          <p className="text-sm text-left break-words text-[var(--tg-theme-bg-color)]">
            {name}
          </p>
        )}
        <p className="text-sm mt-4 break-words">{text}</p>
        <p className="text-sm mt-4 break-words">{now.toString()}</p>
      </div>
    </div>
  );
}

export default MessageChat;
