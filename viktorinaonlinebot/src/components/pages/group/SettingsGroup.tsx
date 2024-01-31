import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "../../store/api/group.api";
import TypeQuestionGroup from "./sittingsGroup/TypeQuestionGroup";
import CategoryQuestionGroup from "./sittingsGroup/CategoryQuestionGroup";
import PeriodQuestionGroup from "./sittingsGroup/PeriodQuestionGroup";
import NotactiveSittings from "./sittingsGroup/NotactiveSittings";
import { useAppSelector } from "../../store";
import { selectModalData } from "../../store/api/modal.slice";
import {
  useCountAvailableQuestionQuery,
  useCountPublishedQuestionQuery,
} from "../../store/api/question/question.api";
import { useGetTimeByIdQuery } from "../../store/api/time/time.api";
import TimeQuestionGroup from "./sittingsGroup/TimeQuestionGroup";

interface NoActive {
  text: string;
}

let noActive: NoActive[] = [
  {
    text: "Период жизни вопроса",
  },
  {
    text: "Ежедневная статистика",
  },
];

export default function SettingsGroup({}) {
  const group = useAppSelector(selectModalData);

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { isSuccess: successtAvailable, data: countAvailableQuestion } =
    useCountAvailableQuestionQuery(group);
  const { isSuccess: successtPublished, data: countPublishedQuestion } =
    useCountPublishedQuestionQuery(group);
  //*
  const { data: GroupDb } = useGetGroupDbQuery(group);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);

  let date: Date;

  successtAvailable && successtPublished && GroupTime
    ? (date = new Date(
        Date.now() + countAvailableQuestion * GroupTime.period * 1000
      ))
    : (date = new Date());
  //*
  return (
    <>
      {dataGroupInfo && (
        <form className="text-center py-24">
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)] text-left">
            Настройки викторины в группе "
            <span className="font-semibold text-sm ">
              {dataGroupInfo.title}
            </span>
            "
          </h3>
          {successtAvailable && successtPublished && (
            <h4 className="pt-2 text-xs font-light text-[var(--tg-theme-text-color)] text-left">
              Опубликовано вопросов
              <span className="font-semibold text-[var(--tg-theme-accent-text-color)]">
                {" "}
                {countPublishedQuestion}{" "}
              </span>
              из
              <span className="font-semibold text-[var(--tg-theme-accent-text-color)]">
                {" "}
                {countAvailableQuestion + countPublishedQuestion}{" "}
              </span>
            </h4>
          )}
          {successtAvailable && successtPublished && GroupTime && (
            <h5 className="pt-2 text-xs font-light text-[var(--tg-theme-text-color)] text-left">
              Завершение викторины &asymp;{" "}
              <span className="font-semibold text-[var(--tg-theme-accent-text-color)]">
                {date.toLocaleDateString()}
              </span>
            </h5>
          )}
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            <TypeQuestionGroup />
            <CategoryQuestionGroup />
            <PeriodQuestionGroup />
            <TimeQuestionGroup />
            {noActive.map((item) => (
              <NotactiveSittings type={item.text} />
            ))}
          </ul>
        </form>
      )}
    </>
  );
}
