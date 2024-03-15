import ActionHeaderChatPanel from './ActionHeaderChatPanel';

export interface HeaderChatPanelProps {
  name: string;
  img: string;
  secondtext: string;
}

export function HeaderChatPanel({
  img,
  name,
  secondtext,
}: HeaderChatPanelProps) {
  return (
    <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
      <div className="flex items-center">
        <div>
          <img className="w-10 h-10 rounded-full" src={img} />
        </div>
        <div className="ml-4">
          <p className="text-grey-darkest">{name}</p>
          <p className="text-grey-darker text-xs mt-1">{secondtext}</p>
        </div>
      </div>
      <ActionHeaderChatPanel />
    </div>
  );
}

export default HeaderChatPanel;
