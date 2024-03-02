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
  const { data: GroupPeriod } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [timeState, setTime] = useState(GroupPeriod?.id);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time);
    // updateTimeGroup({ chat, time });
  }

  return (
    <>
      {loadingAllPeriod && <Preloader />}
      {typeof timeState == 'number' && (
        <SimpleRadioGroup state={timeState} setState={setTime}>
          <div className={`grid grid-cols-4 gap-2`}>
            {GroupPeriod &&
              allPeriod &&
              allPeriod.map((item) => (
                <SimpleRadioGroupOption
                  key={item.id}
                  id={item.id}
                  description={item.name}
                  active={true}
                  func={timeChanged}
                />
              ))}
          </div>
        </SimpleRadioGroup>
      )}
    </>
  );
};

export default PeriodQuiz;
