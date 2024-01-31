interface SuccessQuestionProps {
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;

export function SuccessQuestion({ onSubmit }: SuccessQuestionProps) {
  tg.MainButton.hide();
  return (
    <>
      <div className="py-2">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--tg-theme-accent-text-color)]">
            Внимание!
          </h1>
          <p className="mt-6 text-base leading-7 text-[var(--tg-theme-hint-color)]">
            Вопросы, публикуемые во всех группах проходят предварительную модерацию, которая может длиться до 48 часов.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <span
              onClick={onSubmit}
              className="cursor-pointer rounded-md bg-[var(--tg-theme-accent-text-color)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--tg-theme-hint-color)]"
            >
              Добавить вопрос
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
