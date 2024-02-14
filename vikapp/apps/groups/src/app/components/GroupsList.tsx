import { useGetGroupsQuery } from '@api/group';
import { Preloader } from '@components';
import GroupsListItem from './GroupsListItem';

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const { isLoading, data, isSuccess } = useGetGroupsQuery(chat);
  console.log(data);

  return (
    <>
      {isLoading && <Preloader />}
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {data?.length === 0 && (
          <p className="font-light py-2 text-center text-[var(--tg-theme-text-color)]">
            Вы не добавили бота ещё ни в одну группу/канал
          </p>
        )}
        {isSuccess &&
          data.map((group) => (
            <GroupsListItem key={group.id} group={group.chat} />
          ))}
      </ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
}
