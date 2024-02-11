interface FooterBlockProps {
  children: React.ReactNode;
}

export default function FooterBlock({ children }: FooterBlockProps) {
  return <div className="px-4 py-4 sm:px-6">{children}</div>;
}
