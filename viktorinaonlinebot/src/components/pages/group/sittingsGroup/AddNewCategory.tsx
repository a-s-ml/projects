import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddNewCategory() {
  const tg = window.Telegram.WebApp;

  function confirm(b: boolean) {
    if (b) return tg.openTelegramLink("https://t.me/more_details");
    return;
  }

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="flex h-6 items-center">
        <PlusCircleIcon className="h-4 w-4 text-[var(--tg-theme-accent-text-color)]" />
      </div>
      <div
        className="ml-3 text-sm leading-6"
        onClick={() =>
          tg.showConfirm(
            `Если у вас есть предложения или рекомендации по оптимизации/реструктуризации/разветвлению категорий, пожалуйста, нажмите "ОК" и напишите разработчику приложения.`,
            confirm
          )
        }
      >
        <label
          htmlFor="add"
          className="font-medium text-[var(--tg-theme-accent-text-color)] cursor-pointer"
        >
          Добавить
        </label>
      </div>
    </div>
  );
}
