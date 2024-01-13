interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between mt-4 px-8 py-2 bg-[var(--tg-theme-bg-color)]">
        {children}
      </div>
      <div className="bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"></div>
    </header>
  );
}
