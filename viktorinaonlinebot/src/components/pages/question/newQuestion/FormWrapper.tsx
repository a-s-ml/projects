import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      {children}
      <h2
        className="text-[var(--tg-theme-text-color)]"
        style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}
      >
        {title}
      </h2>
    </>
  );
}
