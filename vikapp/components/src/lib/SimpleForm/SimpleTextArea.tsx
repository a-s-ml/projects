interface SimpleTextAreaProps {
  label: string;
  rows: number;
  value: string;
  func: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SimpleTextArea = ({
  func,
  label,
  rows,
  value,
}: SimpleTextAreaProps) => {
  return (
    <>
      <label
        htmlFor="questionText"
        className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={rows}
          name="questionText"
          id="questionText"
          className="block w-full bg-[var(--tg-theme-bg-color)] rounded-md border-0 px-2 py-2 text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-[var(--tg-theme-hint-color)]"
          value={value}
          onChange={func}
        />
      </div>
    </>
  );
};
