import { RadioGroup } from '@headlessui/react';
import { classNames } from '@utils';

interface SimpleRadioGroupOptionProps {
  id: number;
  description: string;
  active: number;
  func: (id: number) => void;
}

export const SimpleRadioGroupOption = ({
  id,
  func,
  active,
  description,
}: SimpleRadioGroupOptionProps) => {
  return (
    <RadioGroup.Option
      key={id}
      value={id}
      onClick={() => func(id)}
      className={({ active, checked }) =>
        classNames(
          Boolean(active) ? 'cursor-pointer' : 'cursor-not-allowed opacity-25',
          active
            ? 'ring-2 ring-[var(--tg-theme-accent-text-color)] ring-offset-2'
            : '',
          checked
            ? 'bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold'
            : 'ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold',
          'flex items-center justify-center rounded-md py-2 px-2 text-xs'
        )
      }
      disabled={!Boolean(active)}
    >
      <RadioGroup.Label as="span">{description}</RadioGroup.Label>
    </RadioGroup.Option>
  );
};
