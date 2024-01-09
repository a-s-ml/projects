import { ListBulletIcon } from "@heroicons/react/24/outline";
import { useCountCategoryQuery } from "./store/api/category.slice";
import { useGetCateoryGroupsQuery } from "./store/api/groups.slice";

interface CategoryQuestionProps {
  group: bigint;
}
export default function CategoryQuestion({ group }: CategoryQuestionProps) {
  const { data: dataCountCategory } = useCountCategoryQuery("count");
  const { data: dataCateoryGroup } = useGetCateoryGroupsQuery(group);
  const checkNum = dataCateoryGroup?.length

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
            {" "}
            {checkNum} из {dataCountCategory}
          </span>
        </div>
      </div>
    </div>
  );
}
