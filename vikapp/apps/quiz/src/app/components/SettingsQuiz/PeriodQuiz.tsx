import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTimeByIdQuery,
  useGetTimeQuery,
  useUpdateTimeGroupsMutation,
} from '@api/period';
import { SimpleRadioGroupOption } from '@components';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

export const PeriodQuiz = () => {
  const { data: allPeriod } = useGetTimeQuery('');
  const chat = 521884639;
  const { data: GroupDb } = useGetGroupDbQuery(chat as unknown as bigint);
  const { data: GroupPeriod } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [timeState, setTime] = useState(GroupPeriod?.id);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time);
    // updateTimeGroup({ chat, time });
  }
  console.log('timeState - ', timeState);
  return (
    <>
      {GroupPeriod && allPeriod && (
        <RadioGroup value={timeState} onChange={setTime} className="mt-2">
          <div className={`grid grid-cols-4 gap-2`}>
            {allPeriod.map((item) => (
              <SimpleRadioGroupOption
                key={item.id}
                id={item.id}
                description={item.name}
                active={true}
                func={timeChanged}
              />
            ))}
          </div>
        </RadioGroup>
      )}
    </>
  );
};

export default PeriodQuiz;
