import { useGetGroupsQuery } from "@api/group";
import { Preloader } from "@components";
import GroupsListItem from "./GroupsListItem";

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const {
    isLoading: loadGroups,
    data: dataGroups,
    isSuccess: successGroup,
  } = useGetGroupsQuery(chat);

  return (
    <>
      {loadGroups && <Preloader />}
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {dataGroups?.length === 0 && (
          <p className="font-light py-2 text-center text-[var(--tg-theme-text-color)]">
            Вы не добавили бота ещё ни в одну группу/канал
          </p>
        )}
        {successGroup &&
          dataGroups.map((group) => (
            <GroupsListItem key={group.id} group={group.chat} />
          ))}
      </ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
}
