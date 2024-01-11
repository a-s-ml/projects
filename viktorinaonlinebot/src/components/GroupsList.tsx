import { useGetGroupsQuery } from "./store/api/groups.slice";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "./ErrorPage";
import AddNewGroup from "./AddNewGroup";

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
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
      >
        <AddNewGroup />
        {dataGroups &&
          dataGroups.map((group) => (
            <GroupsListItem key={group.id} group={group.chat} questionType={group.question_type} time={group.time}/>
          ))}
      </ul>
    </>
  );
}
