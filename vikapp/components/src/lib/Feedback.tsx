import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export const Feedback = () => {
  const tg = window.Telegram.WebApp;

  function confirm(b: boolean) {
    if (b) return tg.openTelegramLink('https://t.me/more_details');
    return;
  }
  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16"></div>
      <div
        className="group flex items-start px-8 py-8 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
        onClick={() =>
          tg.showConfirm(
            `Задатьв вопрос или сделать предложение/рекомендацию вы можете разработчику приложения.\n\nНажмите "Ок", чтобы написать разработчику `,
            confirm
          )
        }
      >
        <ChatBubbleOvalLeftEllipsisIcon
          className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
          aria-hidden="true"
        />
        <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
          <b>Вопрос/Отзыв/Предложение</b>
        </div>
      </div>
    </footer>
  );
};
