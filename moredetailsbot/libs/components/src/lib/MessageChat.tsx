export interface MessageChatProps {
  name: string;
  text: string;
  time: string;
}

export function MessageChat({ name, text, time }: MessageChatProps) {
  return (
    <div>
      <div className="flex mb-2">
        <div className="rounded py-2 px-3 bg-slate-300">
          <p className="text-sm text-orange">{name}</p>
          <p className="text-sm mt-1">{text}</p>
          <p className="text-right text-xs text-grey-dark mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageChat;
