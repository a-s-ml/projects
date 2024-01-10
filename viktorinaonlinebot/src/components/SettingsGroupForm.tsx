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
        <form>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
            {dataGroupInfo.photo?.small_file_id && (
              <GroupAvatar id={dataGroupInfo.photo?.small_file_id} />
            )}
          </div>
          <h3>Настройки викторины в группе </h3>
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
