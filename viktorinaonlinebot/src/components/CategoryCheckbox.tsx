import { useState } from "react";
import { ICategory } from "../models/ICategory";

interface CategoryCheckboxProps {
  cat: ICategory;
  checked: boolean;
}

export default function CategoryCheckbox({
  cat,
  checked,
}: CategoryCheckboxProps) {
  const tg = window.Telegram.WebApp;

  const [checkBox, setCheckBox] = useState(checked);

  function categoryChanged(check: boolean) {
    setCheckBox(check)
    tg.HapticFeedback.selectionChanged();
    tg.MainButton.setText("Применить");
    tg.MainButton.show();
  }

  return (
    <div className="group relative flex items-start space-x-3">
      <div className="flex h-6 items-center">
        <input
          id={cat.name}
          checked={checkBox}
          onChange={()=>categoryChanged(!checkBox)}
          name={cat.name}
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