interface SimpleAccordionIconProps {
  children: React.ReactNode;
}

export const SimpleAccordionIcon = ({ children }: SimpleAccordionIconProps) => {
  return (
    <div className="flex-shrink-0">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg">
        {children}
      </span>
    </div>
  );
};
