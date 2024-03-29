import { useState } from "react";
import { ICategory } from "../../../../models/ICategory";
import { useAppSelector } from "../../../store";
import {
  useAddCategoryGroupsMutation,
  useDeleteCategoryGroupsMutation,
} from "../../../store/api/category/category.api";
import { selectSlideGroup } from "../../../store/api/slide.slice";

interface CategoryCheckboxProps {
  cat: ICategory;
  checked: boolean;
  disabled: boolean;
}

export default function CategoryCheckbox({
  cat,
  checked,
  disabled,
}: CategoryCheckboxProps) {
  const tg = window.Telegram.WebApp;

  const [checkBox, setCheckBox] = useState(checked);
  const [setCategory, {}] = useAddCategoryGroupsMutation();
  const [deleteCategory, {}] = useDeleteCategoryGroupsMutation();

  const chat = useAppSelector(selectSlideGroup);

  async function categoryChanged(check: boolean, category: number) {
    if (!check) {
      await setCategory({ chat, category });
    }
    if (check) {
      deleteCategory({ chat, category });
    }
    setCheckBox(check);
    tg.HapticFeedback.selectionChanged();
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="flex h-6 items-center">
        <input
          id={cat.name}
          checked={checkBox}
          onChange={() => categoryChanged(!checkBox, cat.id)}
          name={cat.name}
          disabled={disabled}
          type="checkbox"
          className={classNames(
            disabled
              ? "text-[var(--tg-theme-hint-color)]"
              : "text-[var(--tg-theme-accent-text-color)]",
            "h-4 w-4 rounded "
          )}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label
          htmlFor={cat.name}
          className={classNames(
            disabled
              ? "text-[var(--tg-theme-hint-color)] cursor-not-allowed"
              : "text-[var(--tg-theme-text-color)] cursor-pointer",
            "font-medium"
          )}
        >
          {cat.name}
        </label>
      </div>
    </div>
  );
}
