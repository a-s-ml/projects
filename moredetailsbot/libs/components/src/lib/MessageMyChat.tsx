export interface MessageMyChatProps {
  text: string;
}

export function MessageMyChat({ text }: MessageMyChatProps) {
  const now = new Date();
  return (
    <div className="flex justify-end mb-2">
      <div className="rounded py-2 px-3 bg-[var(--tg-theme-button-color)] max-w-[75%]">
        <p className="text-sm mt-4 text-[var(--tg-theme-text-color)]">{text}</p>
        <p className="text-right text-xs text-[var(--tg-theme-bg-color)] mt-4">
          {now.toString()}
        </p>
      </div>
    </div>
  );
}

export default MessageMyChat;
