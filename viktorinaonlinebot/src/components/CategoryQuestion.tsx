import { ListBulletIcon } from "@heroicons/react/24/outline";
import { useCountCategoryQuery, useGetCategoryGroupsQuery } from "./store/api/category.api";

interface CategoryQuestionProps {
  group: bigint;
}
export default function CategoryQuestion({ group }: CategoryQuestionProps) {
  const { data: dataCountCategory } = useCountCategoryQuery("count");
  const { data: dataCateoryGroup } = useGetCategoryGroupsQuery(group);
  const checkNum = dataCateoryGroup?.length;

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <div className="mt-1 flex items-center gap-x-1.5">
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            Категории:
          </span>
          {dataCountCategory && (
            <ListBulletIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            {checkNum} из {dataCountCategory}
          </span>
        </div>
      </div>
    </div>
  );
}
