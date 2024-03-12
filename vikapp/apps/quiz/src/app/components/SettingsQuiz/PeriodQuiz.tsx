import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTimeByIdQuery,
  useGetTimeQuery,
  useUpdateTimeGroupsMutation,
} from '@api/period';
import { SimpleRadioGroupOption } from '@components';
import { RadioGroup } from '@headlessui/react';

export const PeriodQuiz = () => {
  const chatId = 521884639;
  const chat = BigInt(chatId);
  const { data: allPeriod } = useGetTimeQuery('');
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const { data: GroupPeriod } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    updateTimeGroup({ chat, time });
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
