import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface SimpleRadioGroupProps {
  cols: number;
  state: number;
  setState: Dispatch<SetStateAction<number | undefined>>;
  children: React.ReactNode;
}

export const SimpleRadioGroup = ({
  state,
  setState,
  cols,
  children,
}: SimpleRadioGroupProps) => {
  return (
    <RadioGroup value={state} onChange={setState} className="mt-2">
      <div className={`grid grid-cols-${cols} gap-2`}>{children}</div>
    </RadioGroup>
  );
};
