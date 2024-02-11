interface HeaderBlockProps {
  children: React.ReactNode;
}

export default function HeaderBlock({ children }: HeaderBlockProps) {
  return <div className="px-4 py-5 sm:px-6">{children}</div>;
}
