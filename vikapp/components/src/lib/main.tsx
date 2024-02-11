interface MainBlockProps {
  children: React.ReactNode;
}

export default function MainBlock({ children }: MainBlockProps) {
  return <div className="px-4 py-5 overflow-y-auto h-4/6">{children}</div>;
}
