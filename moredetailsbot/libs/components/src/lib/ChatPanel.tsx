export interface ChatPanelProps {
  children: React.ReactNode;
}

export function ChatPanel({ children }: ChatPanelProps) {
  return (
    <div className="flex-1 px-2 overflow-auto">
      {children}
    </div>
  );
}

export default ChatPanel;
