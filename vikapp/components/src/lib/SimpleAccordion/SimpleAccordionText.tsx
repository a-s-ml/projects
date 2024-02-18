interface SimpleAccordionTextProps {
  children: React.ReactNode;
}

export const SimpleAccordionText = ({ children }: SimpleAccordionTextProps) => {
  return (
    <div className="min-w-0 flex-1 text-left">
      <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
        {children}
      </div>
    </div>
  );
};
