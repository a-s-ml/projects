interface SimpleListItemProps {
  children: React.ReactNode;
}

export const SimpleListItem = ({ children }: SimpleListItemProps) => {
  return (
    <div className="group relative flex items-start space-x-3 py-4">
      {children}
    </div>
  );
};
