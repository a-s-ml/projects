interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="container divide-y divide-[var(--tg-theme-hint-color)] overflow-hidden min-h-screen rounded-lg bg-[var(--tg-theme-bg-color)]">
      {children}
    </div>
  );
};