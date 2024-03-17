export interface ChatPanelProps {
  children: React.ReactNode;
}

export function ChatPanel({ children }: ChatPanelProps) {
  return (
    <div className="flex overflow-auto w-screen h-screen">
      <div className="pt-2 px-3 pb-32">{children}</div>
    </div>
  );
}

export default ChatPanel;
