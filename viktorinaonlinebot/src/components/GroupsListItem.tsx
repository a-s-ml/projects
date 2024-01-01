import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useGetInfoGroupsQuery } from "./store/api/groups.slice";
import GroupAvatar from "./GroupAvatar";
import { useAppSelector, useAppDispatch } from "../components/store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../components/store/features/counter/counterSlice";
import { useState } from "react";

interface GroupsListItemProps {
  group: number;
}

export default function GroupsListItem({ group }: GroupsListItemProps) {
  const {
    isLoading: loadGroupsInfo,
    isError: errorGroupInfo,
    data: dataGroupInfo,
  } = useGetInfoGroupsQuery(group);

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
    <span>{count}</span>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        -
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && (
        <li>
          <div className="group relative flex items-start space-x-3 py-4">
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
