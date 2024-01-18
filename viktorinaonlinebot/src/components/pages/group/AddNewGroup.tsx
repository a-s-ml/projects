import { PlusCircleIcon } from "@heroicons/react/24/outline";
import useLongPress from "../../hooks/useLongPress";
import { useAppDispatch } from "../../store";
import SlideDown from "../SlideDown";

export default function AddNewGroup() {
  const dispatch = useAppDispatch();
  const { action, handlers } = useLongPress();
  const { action: otherAction, handlers: otherHandlers } = useLongPress();

  return (
    <div
      className="group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer"
      {...otherHandlers}
    >
      {action === "longpress" && <SlideDown slide={true} />}
      <PlusCircleIcon
        className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
        aria-hidden="true"
      />
      <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
        <b>Добавить группу/канал</b>
      </div>
    </div>
  );
}
