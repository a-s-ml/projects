import { useGetGroupsQuery } from "../../store/api/group.api";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "../ErrorPage";

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
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {dataGroups &&
          dataGroups.map((group) => (
            <GroupsListItem
              key={group.id}
              group={group.chat}
            />
          ))}
      </ul>
    </>
  );
}
