interface MenuListItemIconProps {
  children: React.ReactNode;
}

export const SimpleListItemIcon = ({ children }: MenuListItemIconProps) => {
  return (
    <div className="flex-shrink-0">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
        {children}
      </span>
    </div>
  );
};
