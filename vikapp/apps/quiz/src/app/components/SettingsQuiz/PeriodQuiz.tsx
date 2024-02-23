import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTimeByIdQuery,
  useGetTimeQuery,
  useUpdateTimeGroupsMutation,
} from '@api/period';
import { SimpleRadioGroup, SimpleRadioGroupOption } from '@components';
import { useState } from 'react';

export const PeriodQuiz = () => {
  const { data: allPeriod } = useGetTimeQuery('');
  const chat = 521884639n;
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [timeState, setTime] = useState(GroupTime?.id);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time);
    updateTimeGroup({ chat, time });
  }

  return (
    <>
      {typeof timeState == 'number' && (
        <SimpleRadioGroup cols={4} state={timeState} setState={setTime}>
          {allPeriod &&
            allPeriod.map((item) => (
              <SimpleRadioGroupOption
                id={item.id}
                description={item.name}
                active={1}
                func={timeChanged}
              />
            ))}
        </SimpleRadioGroup>
      )}
    </>
  );
};

export default PeriodQuiz;
