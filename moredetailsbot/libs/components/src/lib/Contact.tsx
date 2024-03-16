export interface ContactProps {
  handelClick: () => void;
  img: string;
  name: string;
  time: string;
  lastMessage: string;
}

export function Contact({
  img,
  name,
  time,
  lastMessage,
  handelClick,
}: ContactProps) {
  return (
    <li className="cursor-pointer" onClick={handelClick}>
      <div className="flex-1 overflow-auto">
        <div className="px-3 flex items-center">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src={`/assets/${img}`}
            />
          </div>
          <div className="ml-4 flex-1 py-4">
            <div className="flex items-bottom justify-between">
              <p className="text-[var(--tg-theme-accent-text-color)]">{name}</p>
              <p className="text-xs text-[var(--tg-theme-hint-color)]">{time}</p>
            </div>
            <p className="text-[var(--tg-theme-hint-color)] mt-1 text-sm">{lastMessage}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Contact;
