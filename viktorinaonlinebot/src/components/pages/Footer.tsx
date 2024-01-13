import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16 w-screen"></div>
      <div className="flex items-start px-8 py-2 bg-[var(--tg-theme-bg-color)]">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
            <b>
              <span className="absolute inset-0" aria-hidden="true" />
              Вопрос/Отзыв/предложение
            </b>
          </div>
        </div>
        <div className="flex-shrink-0 self-center">
          <ChatBubbleOvalLeftEllipsisIcon
            className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
