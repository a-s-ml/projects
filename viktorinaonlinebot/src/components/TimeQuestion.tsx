import { ClockIcon } from "@heroicons/react/24/outline";
import { useGetTimeGroupQuery } from "./store/api/time/time.api";

interface TimeQuestionProps {
  time: number;
}
export default function TimeQuestion({ time }: TimeQuestionProps) {
  const {
    data: dataTime,
  } = useGetTimeGroupQuery(time);

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <div className="mt-1 flex items-center gap-x-1.5">
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            Период:
          </span>
          {dataTime && (
            <ClockIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]"> {dataTime?.name}</span>
        </div>
      </div>
    </div>
  );
}
