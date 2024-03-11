import { RadioGroup } from '@headlessui/react';
import { classNames } from '@utils';

interface SimpleRadioGroupOptionProps {
  id: number;
  description: string;
  active: boolean;
  func: (id: number) => void;
}

export const SimpleRadioGroupOption = ({
  id,
  func,
  active,
  description,
}: SimpleRadioGroupOptionProps) => {
  console.log('id=', id, '-', active);
  return (
    <RadioGroup.Option
      key={id}
      value={id}
      onClick={() => func(id)}
      className={({ checked }) =>
        classNames(
          active
            ? "cursor-pointer"
            : "cursor-not-allowed opacity-25",
          checked
            ? 'checked bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold'
            : 'ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold',
          'flex items-center justify-center rounded-md py-2 px-2 text-xs'
        )
      }
      disabled={!active}
    >
      <RadioGroup.Label as="span">{description}</RadioGroup.Label>
    </RadioGroup.Option>
  );
};
