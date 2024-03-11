import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTypeByIdQuery,
  useGetTypeQuery,
  useUpdateTypeGroupsMutation,
} from '@api/type';
import { SimpleRadioGroupOption } from '@components';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

export const TypeQuiz = () => {
  const { data: allTypes } = useGetTypeQuery('');
  const chat = 521884639;
  const { data: GroupDb } = useGetGroupDbQuery(chat as unknown as bigint);
  const { data: GroupType } = useGetTypeByIdQuery(GroupDb?.question_type || 0);
  const [typeState, setType] = useState(GroupType?.id);

  const [updateTypeGroup, {}] = useUpdateTypeGroupsMutation();

  function typeChanged(question_type: number) {
    setType(question_type);
    // updateTypeGroup({ chat, question_type });
  }

  return (
    <>
      {typeof typeState == 'number' && allTypes && (
        <RadioGroup value={typeState} onChange={setType} className="mt-2">
          <div className={`grid grid-cols-3 gap-2`}>
            {allTypes.map((item) => (
              <SimpleRadioGroupOption
                key={item.id}
                id={item.id}
                description={item.description}
                active={Boolean(item.active)}
                func={typeChanged}
              />
            ))}
          </div>
        </RadioGroup>
      )}
    </>
  );
};

export default TypeQuiz;
