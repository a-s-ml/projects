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
          className="relative block w-full rounded-lg border-2 border-dashed border-[var(--tg-theme-hint-color)] px-1 py-1 sm:px-0 text-center hover:border-[var(--tg-theme-text-color)]"
        >
          <svg
            className="mx-auto h-12 w-12 text-[var(--tg-theme-hint-color)]"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 40 40"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
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
