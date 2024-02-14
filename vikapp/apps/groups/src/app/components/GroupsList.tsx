import { useGetGroupsQuery } from '@api/group';
import { Preloader } from '@components';
import GroupsListItem from './GroupsListItem';

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  console.log(chat);
  const { isLoading, data, isSuccess } = useGetGroupsQuery(chat);
  console.log(data);

  return (
    <>
      {isLoading && <Preloader />}
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      ></ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
}
