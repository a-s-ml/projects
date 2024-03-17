export interface ChatPanelProps {
  children: React.ReactNode;
}

export function ChatPanel({ children }: ChatPanelProps) {
  return (
    <div className="flex flex-col overflow-auto w-screen h-screen pb-16">
      {children}
    </div>
  );
}

export default ChatPanel;
