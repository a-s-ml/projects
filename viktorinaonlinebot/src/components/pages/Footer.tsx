import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const tg = window.Telegram.WebApp;

  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16"></div>
      <div
        className="group flex items-start px-8 py-8 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
        onClick={() => tg.openTelegramLink("https://t.me/more_details")}
      >
        <ChatBubbleOvalLeftEllipsisIcon
          className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
          aria-hidden="true"
        />
        <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
          <b>Вопрос/Отзыв/предложение</b>
        </div>
      </div>
    </footer>
  );
}
