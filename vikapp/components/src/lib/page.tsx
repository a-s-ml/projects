interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="divide-y bg-[var(--tg-theme-hint-color)] overflow-hidden min-h-screen rounded-lg bg-[var(--tg-theme-bg-color)]">
      {children}
    </div>
  );
}
