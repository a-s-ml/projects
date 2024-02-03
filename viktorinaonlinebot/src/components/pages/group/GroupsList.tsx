import { useGetGroupsQuery } from "../../store/api/group.api";
import GroupsListItem from "./GroupsListItem";
import ErrorPage from "../ErrorPage";
import Preloader from "../../Preloader/Preloader";
import { useEffect } from "react";
import { useElevator } from "../../hooks/useElevator";

interface GroupsListProps {
  chat: number;
}
export default function GroupsList({ chat }: GroupsListProps) {
  const tg = window.Telegram.WebApp;
  const {
    isLoading: loadGroups,
    isError: errorGroups,
    data: dataGroups,
    isSuccess: successGroup,
  } = useGetGroupsQuery(chat);
  const { prevLevel } = useElevator();

  useEffect(() => {
    tg.onEvent("backButtonClicked", () => prevLevel());
  }, []);

  return (
    <>
      {loadGroups && <Preloader />}
      {errorGroups && <ErrorPage />}
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
