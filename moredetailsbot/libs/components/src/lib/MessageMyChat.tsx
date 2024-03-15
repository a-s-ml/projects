export interface MessageMyChatProps {
  name: string;
  text: string;
  time: string;
}

export function MessageMyChat({ name, text, time }: MessageMyChatProps) {
  return (
    <div>
      <div className="flex justify-end mb-2">
        <div className="rounded py-2 px-3 bg-slate-500">
          <p className="text-sm text-orange">{name}</p>
          <p className="text-sm mt-1">{text}</p>
          <p className="text-right text-xs text-grey-dark mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageMyChat;
