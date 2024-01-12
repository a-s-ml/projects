interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 p-8">
      <div className="flex items-center justify-between">{children}</div>
    </header>
  );
}
