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
import TimeQuestion from "./TimeQuestion";

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
          <li>
          <div className="relative pb-8">
              <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />

            <div className="relative flex space-x-3">
              <div>
                <span>
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
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-500">
                  {dataGroupInfo.title}
                  </p>
                </div>
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                @{dataGroupInfo.username}
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
