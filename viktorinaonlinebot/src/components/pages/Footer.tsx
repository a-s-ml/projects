interface FooterProps {
  children: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50 bg-gradient-to-t from-sky-500 to-transparent">
      <div className="flex items-center justify-between p-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
}
