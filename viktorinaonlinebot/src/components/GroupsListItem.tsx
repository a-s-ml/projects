import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import {
  useGetInfoActiveGroupsQuery,
  useGetInfoGroupsQuery,
} from "./store/api/groups.slice";
import GroupAvatar from "./GroupAvatar";
import { useAppDispatch } from "./store";
import { showModal, dataModal } from "./store/api/modal.slice";
import Active from "./Active";
import NotActive from "./notActive";
import TypeQuestion from "./TypeQuestion";

interface GroupsListItemProps {
  group: number;
  questionType: number;
  time: number;
}

export default function GroupsListItem({
  group,
  questionType,
  time,
}: GroupsListItemProps) {
  const {
    isLoading: loadGroupsInfo,
    isError: errorGroupInfo,
    data: dataGroupInfo,
  } = useGetInfoGroupsQuery(group);
  const { data: dataGroupActive } = useGetInfoActiveGroupsQuery(group);

  const dispatch = useAppDispatch();

  return (
    <>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && (
        <li
          className="py-4 sm:px-0"
          onClick={() => {
            dispatch(showModal(true));
            dispatch(dataModal(group));
          }}
        >
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
                  />
                )}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                <b>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {dataGroupInfo.title}
                </b>
              </div>
              {dataGroupInfo.username && (
                <p className="text-sm text-[var(--tg-theme-hint-color)]">
                  @{dataGroupInfo.username}
                </p>
              )}
            </div>
            <div className="flex-shrink-0 self-center">
              <Cog8ToothIcon
                className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                aria-hidden="true"
              />
            </div>
          </div>
          {dataGroupActive ? <Active /> : <NotActive />}
          <TypeQuestion questionType={questionType}/>
        </li>
      )}
    </>
  );
}
