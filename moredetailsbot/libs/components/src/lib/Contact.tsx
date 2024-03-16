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
    <div
      className="bg-grey-lighter flex-1 overflow-auto"
      onClick={() => handelClick}
    >
      <div className="px-3 flex items-center bg-grey-light cursor-pointer">
        <div>
          <img
            className="h-12 w-12 rounded-full"
            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
          />
        </div>
        <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
          <div className="flex items-bottom justify-between">
            <p className="text-grey-darkest">{name}</p>
            <p className="text-xs text-grey-darkest">{time}</p>
          </div>
          <p className="text-grey-dark mt-1 text-sm">{lastMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
