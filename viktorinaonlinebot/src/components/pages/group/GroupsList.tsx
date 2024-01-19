import { useGetGroupsQuery } from "../../store/api/group.api";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "../ErrorPage";
import Preloader from "../../Preloader/Preloader";
import { useState } from "react";
import SwipeToDelete from "./swipe/swipe";

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const {
    isLoading: loadGroups,
    isError: errorGroups,
    data: dataGroups,
    isSuccess: successGroup,
  } = useGetGroupsQuery(chat);

  const [stateDel, setStateDel] = useState([
    { id: 1, title: "Кнопка 1" },
    { id: 2, title: "Кнопка 2" },
    { id: 3, title: "Кнопка 3" },
    { id: 4, title: "Кнопка 4" },
  ]);

  const onDel = (id: number) => {
    setStateDel((prev) => prev.filter((row) => row.id !== id))
  };

  return (
    <>
      {loadGroups && <Preloader />}
      {errorGroups && <ErrorPage />}
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {successGroup &&
          dataGroups.map((group) => (
            <GroupsListItem key={group.id} group={group.chat} />
          ))}
      </ul>
      <SwipeToDelete rows={stateDel} onDel={onDel} />
    </>
  );
}
