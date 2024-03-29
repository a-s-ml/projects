interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="container overflow-hidden min-h-screen bg-[var(--tg-theme-bg-color)]">
      {children}
    </div>
  );
};
