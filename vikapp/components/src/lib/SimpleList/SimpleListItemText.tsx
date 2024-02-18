interface MenuListItemTextProps {
  text: string;
  description: string;
}

export const SimpleListItemText = ({
  text,
  description,
}: MenuListItemTextProps) => {
  return (
    <div className="min-w-0 flex-1">
      <span className="absolute inset-0" aria-hidden="true" />
      <p className="text-sm font-medium text-[var(--tg-theme-text-color)]">
        {text}
      </p>
      <p className="text-xs text-[var(--tg-theme-hint-color)]">{description}</p>
    </div>
  );
};
