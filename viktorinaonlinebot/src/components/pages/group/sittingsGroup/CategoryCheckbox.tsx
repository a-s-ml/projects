import { useState } from "react";
import { ICategory } from "../../../../models/ICategory";
import { useAppSelector } from "../../../store";
import { selectModalData } from "../../../store/api/modal.slice";
import { useAddCategoryGroupsMutation, useDeleteCategoryGroupsMutation } from "../../../store/api/category/category.api";

interface CategoryCheckboxProps {
  cat: ICategory;
  checked: boolean;
  disabled: boolean
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

  const chat = useAppSelector(selectModalData);

  async function categoryChanged(check: boolean, category: number) {
    if(!check) {
      await setCategory({chat, category})
    }
    if(check) {
      deleteCategory({chat, category})
    }
    setCheckBox(check)
    tg.HapticFeedback.selectionChanged();
  }

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="flex h-6 items-center">
        <input
          id={cat.name}
          checked={checkBox}
          onChange={()=>categoryChanged(!checkBox, cat.id)}
          name={cat.name}
          disabled={disabled}
          type="checkbox"
          className="h-4 w-4 rounded text-[var(--tg-theme-accent-text-color)]"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label
          htmlFor={cat.name}
          className="font-medium text-[var(--tg-theme-text-color)] cursor-pointer"
        >
          {cat.name}
        </label>
      </div>
    </div>
  );
}
