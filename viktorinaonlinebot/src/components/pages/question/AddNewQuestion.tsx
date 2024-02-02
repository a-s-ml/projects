import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../store";
import { dataLevelSlide, groupSlide, showSlide } from "../../store/api/slide.slice";

export default function AddNewQuestion() {
  const tg = window.Telegram.WebApp;
  const dispatch = useAppDispatch();
  return (
    <div className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer">
      <PlusCircleIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
      <div
        className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        onClick={() => {
          dispatch(showSlide(false));
          dispatch(dataLevelSlide(2));
          setTimeout(() => {
            dispatch(showSlide(true));
          }, 250);
          dispatch(groupSlide(0n));
        }}
      >
        <b>Добавить вопрос</b>
      </div>
    </div>
  );
}
