export interface MessageMyChatProps {
  text: string;
}

export function MessageMyChat({ text }: MessageMyChatProps) {
  const now = new Date();
  return (
    <div>
      <div className="flex justify-end mb-2">
        <div className="rounded py-2 px-3 bg-[var(--tg-theme-button-color)]">
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

export default MessageMyChat;
