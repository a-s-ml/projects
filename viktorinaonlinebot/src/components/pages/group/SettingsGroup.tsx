import {
  useGetInfoGroupsQuery,
} from "../../store/api/group.api";
import TypeQuestionGroup from "./sittingsGroup/TypeQuestionGroup";
import CategoryQuestionGroup from "./sittingsGroup/CategoryQuestionGroup";
import PeriodQuestionGroup from "./sittingsGroup/PeriodQuestionGroup";
import NotactiveSittings from "./sittingsGroup/NotactiveSittings";
import { useAppSelector } from "../../store";
import { selectModalData } from "../../store/api/modal.slice";
import { useCountAvailableQuestionQuery, useCountPublishedQuestionQuery } from "../../store/api/question/question.api";

interface NoActive {
  text: string;
}

let noActive: NoActive[] = [
  {
    text: "Сложность вопросов",
  },
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
  const { data: countAvailableQuestion } = useCountAvailableQuestionQuery(group);
  const { data: countPublishedQuestion } = useCountPublishedQuestionQuery(group);

  return (
    <>
      {dataGroupInfo && (
        <form className="text-center py-24">
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)] text-left">
            Настройки викторины в группе "{dataGroupInfo.title}"
          </h3>
          <h2>Опубликовано вопросов {countPublishedQuestion} из {countAvailableQuestion}</h2>
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            <TypeQuestionGroup />
            <CategoryQuestionGroup />
            <PeriodQuestionGroup />
            {noActive.map((item) => (
              <NotactiveSittings type={item.text} />
            ))}
          </ul>
        </form>
      )}
    </>
  );
}
