export default function ErrorPage() {
  const tg = window.Telegram.WebApp;
  return (
    <>
      <main className="grid min-h-full place-items-center bg-[var(--tg-theme-bg-color)] px-6 py-24">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--tg-theme-accent-text-color)]">
            Страница в разработке
          </h1>
          <p className="mt-6 text-base leading-7 text-[var(--tg-theme-hint-color)]">
            Мы стараемся реализовать готовый продукт как можно качественнее,
            поэтому уделяем много времени тестированию.
          </p>
          <p className="mt-6 text-base leading-7 text-[var(--tg-theme-hint-color)]">
            Сообщите нам, пожалуйста, если найдёте ошибку
          </p>
          <div 
          className="mt-10 flex items-center justify-center gap-x-6">
            {" "}
            <span
              onClick={() => tg.openTelegramLink('https://t.me/a_s_ml')}
              className="cursor-pointer rounded-md bg-[var(--tg-theme-accent-text-color)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--tg-theme-hint-color)]"
            >
              Go back home
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
