export interface MessageChatProps {
  name: string;
  text: string;
}

export function MessageChat({ name, text }: MessageChatProps) {
  const now = new Date();
  return (
    <div>
      <div className="flex mb-2 max-w-[75%]">
        <div className="rounded py-2 px-3 bg-[var(--tg-theme-hint-color)]">
          <p className="text-sm text-[var(--tg-theme-bg-color)]">Имя: {name}</p>
          <p className="text-sm mt-1 text-[var(--tg-theme-text-color)]">
            {text}
          </p>
          <p className="text-right text-xs text-[var(--tg-theme-bg-color)] mt-1">
            {now.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageChat;
