export interface MessageSystemProps {
  name: string;
  action: string;
  chat: string;
  size: number;
}

export function MessageSystem({
  name,
  chat,
  action,
  size,
}: MessageSystemProps) {
  return (
    <div className="flex justify-center mb-4">
      <div className="rounded py-2 px-4">
        <p className="text-xs text-center text-[var(--tg-theme-accent-text-color)]">
          Пользователь {name} {action} к чату {chat}. {size} онлайн
        </p>
      </div>
    </div>
  );
}

export default MessageSystem;
