import { useGetGroupsQuery } from "./store/api/groupsSlise";
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

  if (dataGroups) {
    console.log(dataGroups);
  }

  return (
    <>
      {loadGroups && <p>Loading...</p>}
      {errorGroups && <ErrorPage />}
      {dataGroups &&
        dataGroups.map((group) => (
          <GroupsListItem key={group.id} group={+group.chat} />
        ))}
    </>
  );
}
