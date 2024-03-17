export interface MessageChatProps {
  name: string;
  text: string;
  time: string;
}

export function MessageChat({ name, text, time }: MessageChatProps) {
  return (
    <div>
      <div className="flex mb-2">
        <div className="rounded py-2 px-3 bg-[var(--tg-theme-hint-color)]">
          <p className="text-sm text-[var(--tg-theme-bg-color)]">Имя: {name}</p>
          <p className="text-sm mt-1 text-[var(--tg-theme-accent-text-color)]">{text}</p>
          <p className="text-right text-xs text-[var(--tg-theme-bg-color)] mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageChat;
