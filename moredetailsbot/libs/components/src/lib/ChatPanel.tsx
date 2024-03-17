export interface ChatPanelProps {
  children: React.ReactNode;
}

export function ChatPanel({ children }: ChatPanelProps) {
  return (
    <div className="flex overflow-auto w-screen h-screen">
      {children}
    </div>
  );
}

export default ChatPanel;
