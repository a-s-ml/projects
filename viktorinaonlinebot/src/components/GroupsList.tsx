import { useGetGroupsQuery } from "./store/api/groups.slice";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "./ErrorPage";
import AddNewGroup from "./addNewGroup";

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
        <AddNewGroup />
        {dataGroups &&
          dataGroups.map((group) => (
            <GroupsListItem key={group.id} group={+group.chat} />
          ))}
      </ul>
    </>
  );
}
