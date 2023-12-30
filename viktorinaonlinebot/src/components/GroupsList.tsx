import { useGetGroupsQuery } from "./store/api/groupsSlise";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "./ErrorPage";

interface GroupsListProps {
  chat: number;
  toggleM(n: number): void;
}
export default function GroupsList({ chat, toggleM }: GroupsListProps) {
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
            <GroupsListItem key={group.id} group={+group.chat} toggleM={toggleM}/>
          ))}
      </ul>
    </>
  );
}
