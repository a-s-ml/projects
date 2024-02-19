interface GlobalFooterProps {
  children: React.ReactNode;
}

export const GlobalFooter = ({ children }: GlobalFooterProps) => {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">
      {children}
    </footer>
  );
};
