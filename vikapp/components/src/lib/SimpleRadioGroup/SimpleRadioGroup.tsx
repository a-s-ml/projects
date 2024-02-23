import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface SimpleRadioGroupProps {
  state: number;
  setState: Dispatch<SetStateAction<number | undefined>>;
  children: React.ReactNode;
}

export const SimpleRadioGroup = ({
  state,
  setState,
  children,
}: SimpleRadioGroupProps) => {
  return (
    <RadioGroup value={state} onChange={setState} className="mt-2">
      {children}
    </RadioGroup>
  );
};
