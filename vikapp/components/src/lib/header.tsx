interface HeaderBlockProps {
  children: React.ReactNode;
}

export default function HeaderBlock({ children }: HeaderBlockProps) {
  return <div className="h-1/6 px-4 py-5">{children}</div>;
}
