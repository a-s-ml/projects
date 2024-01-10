import ErrorLoad from "./ErrorLoad";
import GroupAvatar from "./GroupAvatar";
import { useGetInfoGroupsQuery } from "./store/api/groups.slice";
interface SettingsGroupProps {
  group: number;
}
export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);
  const tg = window.Telegram.WebApp;
  function selectionChanged() {
    tg.HapticFeedback.selectionChanged();
  }
  return (
    <>
      {dataGroupInfo && (
        <form className="text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
            {dataGroupInfo.photo?.small_file_id && (
              <GroupAvatar id={dataGroupInfo.photo?.small_file_id} />
            )}
          </div>
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)]">
            Настройки викторины в группе {dataGroupInfo.title}
          </h3>
          <input
            onChange={() => selectionChanged()}
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            min="0"
            max="5"
            step="0.5"
          />
        </form>
      )}
      {errorGroupInfo && <ErrorLoad />}
    </>
  );
}
