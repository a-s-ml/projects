import { useGetGroupsQuery } from "./store/api/groups.slice";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "./ErrorPage";

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const {
    isLoading: loadGroups,
    isError: errorGroups,
    data: dataGroups,
  } = useGetGroupsQuery(chat);

  return (
    <>
      {loadGroups && <p>Loading...</p>}
      {errorGroups && <ErrorPage />}
      <ul className="mt-4">
        {dataGroups &&
          dataGroups.map((group) => (
            <GroupsListItem key={group.id} group={+group.chat} />
          ))}
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-[var(--tg-theme-hint-color)] px-1 py-1 sm:px-0 text-center hover:border-[var(--tg-theme-text-color)] focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <svg
            className="mx-auto h-12 w-12 text-[var(--tg-theme-hint-color)]"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
            />
          </svg>
          <span className="mt-2 block text-sm font-semibold text-[var(--tg-theme-hint-color)]">
            Добавить новую группу/канал
          </span>
        </button>
      </ul>
    </>
  );
}
