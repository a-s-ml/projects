export interface MessageChatProps {
  name: string;
  text: string;
}

export function MessageChat({ name, text }: MessageChatProps) {
  const now = new Date();
  return (
    <div className="flex mb-2">
      <div className="rounded py-2 px-3 bg-[var(--tg-theme-hint-color)] max-w-[75%]">
        <p className="text-sm text-left text-[var(--tg-theme-bg-color)]">{name}</p>
        <p className="text-sm mt-4 text-left text-[var(--tg-theme-bg-color)]">{text}</p>
        <p className="text-left text-xs text-[var(--tg-theme-bg-color)] mt-4">
          {now.toString()}
        </p>
      </div>
    </div>
  );
}

export default MessageChat;
