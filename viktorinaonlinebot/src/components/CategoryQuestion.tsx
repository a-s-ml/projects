import { ListBulletIcon } from "@heroicons/react/24/outline";
import { useGetCategoryGroupsQuery } from "./store/api/category/category.api";
import { useAppSelector } from "./store";
import { selectAllCategories } from "./store/api/category/category.slice";

interface CategoryQuestionProps {
  group: bigint;
}
export default function CategoryQuestion({ group }: CategoryQuestionProps) {
  const allCategory = useAppSelector(selectAllCategories);
  const { data: cateoryGroup } = useGetCategoryGroupsQuery(group);

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <div className="mt-1 flex items-center gap-x-1.5">
          <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
            Категории:
          </span>
          {allCategory && (
            <ListBulletIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          {cateoryGroup && (
            <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
              {allCategory.all.length - cateoryGroup.length} из
              {allCategory.all.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
