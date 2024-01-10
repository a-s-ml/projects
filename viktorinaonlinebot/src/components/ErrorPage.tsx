export default function ErrorPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-[var(--tg-theme-bg-color)] px-6 py-24">
        <div className="text-center">
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[var(--tg-theme-accent-text-color)]">
            Страница в разработке
          </h1>
          <p className="mt-6 text-base leading-7 text-[var(--tg-theme-hint-color)]">
            Мы стараемся реализовать готовый продукт как можно качественнее,
            поэтому уделяем много времени тестированию. Сообщите нам,
            пожалуйста, если найдёте ошибку.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {" "}
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
