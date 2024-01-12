interface FooterProps {
  children: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50 bg-[var(--tg-theme-bg-color)]">
      <div className="bg-gradient-to-t from-inherit to-transparent pt-8 w-screen"></div>
      <div className="flex items-center justify-between p-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
}
