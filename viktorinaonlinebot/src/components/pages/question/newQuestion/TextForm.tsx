type TextData = {
  text: string;
};

type TextFormProps = TextData & {
  updateFields: (fields: Partial<TextData>) => void;
};

export function TextForm({ text, updateFields }: TextFormProps) {
  return (
    <div className="py-2">
      <label
        htmlFor="questionText"
        className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
      >
        Текст вопроса:
      </label>
      <div className="mt-2">
        <textarea
          rows={5}
          name="questionText"
          id="questionText"
          className="block w-full bg-[var(--tg-theme-bg-color)] rounded-md border-0 px-2 py-2 text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-[var(--tg-theme-hint-color)]"
          value={text}
          onChange={(e) => updateFields({ text: e.target.value })}
        />
      </div>
    </div>
  );
}
