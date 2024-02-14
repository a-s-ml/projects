import { useGetGroupDbQuery, useGetInfoGroupsQuery } from '@api/group';
import { useGetActiveGroupsQuery } from '@api/group/active';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import GroupAvatar from './GroupAvatar';

interface GroupsListItemProps {
  group: bigint;
}

export default function GroupsListItem({ group }: GroupsListItemProps) {
  const { data: groupActive, isSuccess: successActive } =
    useGetActiveGroupsQuery(group);
  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);
  const { data: GroupDb } = useGetGroupDbQuery(group);

  return (
    <>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && GroupDb && (
        <li className="py-4 px-0">
          <div className="group relative flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
                {dataGroupInfo.photo?.small_file_id && (
                  <GroupAvatar id={dataGroupInfo.photo?.small_file_id} />
                )}
                {!dataGroupInfo.photo?.small_file_id && (
                  <img
                    className="inline-block h-10 w-14 rounded-full"
                    src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                    alt={dataGroupInfo.title}
                  />
                )}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                {dataGroupInfo.title}
              </div>
              {dataGroupInfo.username && (
                <p className="text-sm text-[var(--tg-theme-hint-color)]">
                  @{dataGroupInfo.username}
                </p>
              )}
            </div>
          </div>
          <div
            className="group relative flex items-start space-x-3 cursor-pointer"
            onClick={() => {
              console.log('asd');
            }}
          >
            <div className="flex-shrink-0 self-center">
              <Cog8ToothIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </li>
      )}
    </>
  );
}
