interface SimpleAccordionIconProps {
  size: number;
  children: React.ReactNode;
}

export const SimpleAccordionIcon = ({
  size,
  children,
}: SimpleAccordionIconProps) => {
  return (
    <div className="flex-shrink-0">
      <span
        className={`inline-flex h-${size} w-${size} items-center justify-center rounded-lg`}
      >
        {children}
      </span>
    </div>
  );
};
