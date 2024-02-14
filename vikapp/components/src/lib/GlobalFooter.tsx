interface GlobalFooterProps {
  children: React.ReactNode;
}

export const GlobalFooter = ({ children }: GlobalFooterProps) => {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16"></div>
      {children}
    </footer>
  );
};
