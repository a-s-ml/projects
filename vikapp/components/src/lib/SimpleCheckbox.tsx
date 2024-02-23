import { classNames } from '@utils';
import { useState } from 'react';

interface IDataCheckbox {
  id: number;
  name: string;
}
interface SimpleCheckboxProps {
  data: IDataCheckbox;
  checked: boolean;
  disabled: boolean;
  func: (b: boolean, n: number) => void;
}

export const SimpleCheckbox = ({
  checked,
  data,
  disabled,
  func,
}: SimpleCheckboxProps) => {
  const [checkBox, setCheckBox] = useState(checked);
  return (
    <div className="group relative flex items-start space-x-3">
      <div className="flex h-6 items-center">
        <input
          id={data.name}
          checked={checkBox}
          onChange={() => (func(!checked, data.id), setCheckBox(!checked))}
          name={data.name}
          disabled={disabled}
          type="checkbox"
          className={classNames(
            disabled
              ? 'text-[var(--tg-theme-hint-color)]'
              : 'text-[var(--tg-theme-accent-text-color)]',
            'h-4 w-4 rounded '
          )}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label
          htmlFor={data.name}
          className={classNames(
            disabled
              ? 'text-[var(--tg-theme-hint-color)] cursor-not-allowed'
              : 'text-[var(--tg-theme-text-color)] cursor-pointer',
            'font-medium'
          )}
        >
          {data.name}
        </label>
      </div>
    </div>
  );
};
