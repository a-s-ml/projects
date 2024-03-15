export interface ChatPanelProps {
  children: React.ReactNode;
}

export function ChatPanel({ children }: ChatPanelProps) {
  return (
    <div className="flex-1 overflow-auto bg-orange-200">
      <div className="py-2 px-3">{children}</div>
    </div>
  );
}

export default ChatPanel;
