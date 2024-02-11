interface FooterBlockProps {
  children: React.ReactNode;
}

export default function FooterBlock({ children }: FooterBlockProps) {
  return <div className="h-1/6 px-4 py-4">{children}</div>;
}
