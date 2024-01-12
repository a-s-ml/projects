interface FooterProps {
  children: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50 px-8">
      <div className="bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16 w-screen"></div>
      <div className="flex items-center justify-between py-2 bg-[var(--tg-theme-bg-color)]">
        {children}
      </div>
    </footer>
  );
}
