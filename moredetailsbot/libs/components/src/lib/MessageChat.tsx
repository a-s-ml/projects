import { classNames } from '@hooks';

export interface MessageChatProps {
  my: boolean;
  name: string;
  text: string;
}

export function MessageChat({ my, name, text }: MessageChatProps) {
  const now = new Date();
  return (
    <div className="flex mb-2">
      <div
        className={classNames(
          my
            ? 'justify-end bg-[var(--tg-theme-button-color)]'
            : 'bg-[var(--tg-theme-hint-color)]',
          'rounded py-2 px-3 max-w-[75%]'
        )}
      >
        {!my && (
          <p className="text-sm text-left text-[var(--tg-theme-bg-color)]">
            {name}
          </p>
        )}
        <p
          className={classNames(
            my
              ? 'text-right text-[var(--tg-theme-text-color)]'
              : 'text-left text-[var(--tg-theme-bg-color)]',
            'text-sm mt-4'
          )}
        >
          {text}
        </p>
        <p
          className={classNames(
            my
              ? 'text-right text-[var(--tg-theme-text-color)]'
              : 'text-left text-[var(--tg-theme-bg-color)]',
            'text-sm mt-4'
          )}
        >
          {now.toString()}
        </p>
      </div>
    </div>
  );
}

export default MessageChat;
