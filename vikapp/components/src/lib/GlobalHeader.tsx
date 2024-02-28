interface GlobalHeaderProps {
  children: React.ReactNode;
}

export const GlobalHeader = ({ children }: GlobalHeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-9 bg-[var(--tg-theme-bg-color)] p-4">
      {children}
    </header>
  );
};
