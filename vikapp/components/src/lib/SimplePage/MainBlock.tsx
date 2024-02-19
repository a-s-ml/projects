interface MainBlockProps {
  children: React.ReactNode;
}

export const MainBlock = ({ children }: MainBlockProps) => {
  return <div className="px-4 py-5 overflow-y-auto min-h-full">{children}</div>;
};
