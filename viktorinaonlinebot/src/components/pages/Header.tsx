interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 p-8 overflow-auto">
      <div className="flex items-center justify-between">{children}</div>
    </header>
  );
}
