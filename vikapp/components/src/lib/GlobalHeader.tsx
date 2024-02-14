interface GlobalHeaderProps {
  children: React.ReactNode;
}

export const GlobalHeader = ({ children }: GlobalHeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {children}
      <div className="bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"></div>
    </header>
  );
};
