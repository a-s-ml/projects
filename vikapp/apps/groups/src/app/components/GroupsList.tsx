import { useGetGroupsQuery } from '@api/group';
import { Preloader } from '@components';
import GroupsListItem from './GroupsListItem';

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const { isLoading, data, isSuccess } = useGetGroupsQuery(chat);
  return (
    <>
      {isLoading && <Preloader />}
      <ul
        role="list"
        className="divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {isSuccess &&
          data.map((group) => (
            <GroupsListItem key={group.id} group={group.chat} />
          ))}
      </ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
}
