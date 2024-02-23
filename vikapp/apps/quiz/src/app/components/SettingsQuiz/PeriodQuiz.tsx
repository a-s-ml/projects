import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTimeByIdQuery,
  useGetTimeQuery,
  useUpdateTimeGroupsMutation,
} from '@api/period';
import {
  Preloader,
  SimpleRadioGroup,
  SimpleRadioGroupOption,
} from '@components';
import { useState } from 'react';

export const PeriodQuiz = () => {
  const {
    data: allPeriod,
    isLoading: loadingAllPeriod,
    isSuccess: successAllPeriod,
  } = useGetTimeQuery('');
  const chat = 521884639;
  const { data: GroupDb } = useGetGroupDbQuery(chat as unknown as bigint);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [timeState, setTime] = useState(GroupTime?.id);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time);
    // updateTimeGroup({ chat, time });
  }

  return (
    <>
      {loadingAllPeriod && <Preloader />}
      <div className={`grid grid-cols-3 gap-2`}>
        {typeof timeState == 'number' && (
          <SimpleRadioGroup cols={4} state={timeState} setState={setTime}>
            {successAllPeriod &&
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
      </div>
    </>
  );
};

export default PeriodQuiz;
