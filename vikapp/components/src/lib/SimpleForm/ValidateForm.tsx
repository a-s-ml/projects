import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { validationLengthForm } from '@utils';
import { Dispatch, SetStateAction } from 'react';

interface IAnswers {
  id: number;
  name: string;
  value: string;
}

interface ValidateFormProps {
  text: string;
  data: {
    value: string | number | IAnswers[];
    lengthMin: number;
    lengthMax: number;
  };
  validation: Dispatch<SetStateAction<boolean>>;
}

export const ValidateForm = ({ text, validation, data }: ValidateFormProps) => {
  let approval = validationLengthForm(data);
  validation(approval);

  return (
    <div className="mt-1 flex items-center gap-x-1.5">
      {approval ? (
        <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
      ) : (
        <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
      )}

      <span
        className={`max-w-[80%] text-xs ${
          approval ? 'text-green-600' : 'text-red-500'
        }`}
      >
        {text}
      </span>
    </div>
  );
};
