import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTimeByIdQuery,
  useGetTimeQuery,
  useUpdateTimeGroupsMutation,
} from '@api/period';
import { SimpleRadioGroupOption } from '@components';
import { RadioGroup } from '@headlessui/react';

export const PeriodQuiz = () => {
  const chat = 521884639;
  const { data: allPeriod } = useGetTimeQuery('');
  const { data: GroupDb } = useGetGroupDbQuery(chat as unknown as bigint);
  const { data: GroupPeriod } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    console.log('time - ', time);
    // updateTimeGroup({ chat, time });
  }

  return (
    <>
      {GroupPeriod && allPeriod && (
        <RadioGroup
          value={GroupPeriod?.id}
          onChange={timeChanged}
          className="mt-2"
        >
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
