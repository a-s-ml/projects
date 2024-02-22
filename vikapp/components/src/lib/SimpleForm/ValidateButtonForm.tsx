interface ValidateButtonFormProps {
    children: React.ReactNode;
  }
  
  export const ValidateButtonForm = ({ children }: ValidateButtonFormProps) => {
    return (
      <header className="absolute inset-x-0 top-0 z-50 bg-[var(--tg-theme-bg-color)] p-4">
        {children}
      </header>
    );
  };
  