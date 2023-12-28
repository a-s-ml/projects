import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import {
  useGetInfoGroupsQuery
} from "./store/api/groupsSlise";
import GroupAvatar from "./GroupAvatar";

interface GroupsListItemProps {
  group: number;
}
export default function GroupsListItem({ group }: GroupsListItemProps) {
  const {
    isLoading: loadGroupsInfo,
    isError: errorGroupInfo,
    data: dataGroupInfo,
  } = useGetInfoGroupsQuery(group);

  return (
    <>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && (
        <li>
          <div className="group relative flex items-start space-x-3 py-4">
            <div className="flex-shrink-0">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
                <GroupAvatar />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                <b>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {dataGroupInfo.title}
                </b>
              </div>
              <p className="text-sm text-[var(--tg-theme-hint-color)]">
                {dataGroupInfo.username}
              </p>
                <p className="text-sm text-[var(--tg-theme-hint-color)]">
                  {dataGroupInfo.bio}
                </p>
            </div>
            <div className="flex-shrink-0 self-center">
              <ChevronRightIcon
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
