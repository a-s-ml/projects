import { useGetGroupDbQuery } from '@api/group';
import { nightTimeConst } from '../../const/nightTime.const';
import { useGetTimeByIdQuery } from '@api/period';
import { useState } from 'react';
import { SimpleSwitchButton } from '@components';

export const TimeQuiz = () => {
  const chat = 521884639;
  const { data: GroupDb } = useGetGroupDbQuery(chat as unknown as bigint);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);
  const [times, setTimes] = useState(0);
  const [nightNode, setNightNode] = useState(true);
  let hours: Array<number> = [];
  let period: number;
  GroupTime ? (period = GroupTime.period / 3600) : (period = 25);
  for (let b = times - period; b >= 0; b -= period) {
    hours.push(b);
  }
  for (let a = times; a < 24; a += period) {
    hours.push(a);
  }
  let sortHours: Array<number> = hours.sort((n1, n2) => n1 - n2);
  console.log(GroupDb);
  console.log(GroupTime);

  console.log(times);
  console.log(nightNode);

  return (
    <>
      <SimpleSwitchButton
        label={'Публикация вопросов ночью'}
        enabled={nightNode}
        setEnabled={setNightNode}
      />
      <div className={`grid grid-cols-6 gap-2`}>
        {nightTimeConst.map((time) => (
          <button
            type="button"
            value={time.id}
            onClick={() => setTimes(time.id)}
            className={`flex items-center justify-center rounded-md py-2 px-2 text-xs font-semibold 
                                ${
                                  Boolean(
                                    nightNode === false &&
                                      time.night == true &&
                                      !sortHours.includes(time.id)
                                  )
                                    ? 'bg-[var(--tg-theme-hint-color)] text-black cursor-not-allowed '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === false &&
                                      time.night == false &&
                                      !sortHours.includes(time.id)
                                  )
                                    ? 'bg-white text-black cursor-pointer '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === false &&
                                      time.night == true &&
                                      sortHours.includes(time.id)
                                  )
                                    ? 'bg-[var(--tg-theme-hint-color)] text-black cursor-not-allowed '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === false &&
                                      time.night == false &&
                                      sortHours.includes(time.id)
                                  )
                                    ? 'bg-[var(--tg-theme-accent-text-color)] text-white cursor-pointer '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === true &&
                                      time.night == true &&
                                      sortHours.includes(time.id)
                                  )
                                    ? 'bg-[var(--tg-theme-accent-text-color)] text-white cursor-pointer '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === true &&
                                      time.night == false &&
                                      sortHours.includes(time.id)
                                  )
                                    ? 'bg-[var(--tg-theme-accent-text-color)] text-white cursor-pointer '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === true &&
                                      time.night == false &&
                                      !sortHours.includes(time.id)
                                  )
                                    ? 'bg-white text-black cursor-pointer '
                                    : ''
                                }
                                ${
                                  Boolean(
                                    nightNode === true &&
                                      time.night == true &&
                                      !sortHours.includes(time.id)
                                  )
                                    ? 'bg-white text-black cursor-pointer '
                                    : ''
                                }
                                `}
            disabled={Boolean(nightNode === false && time.night === true)}
          >
            {time.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default TimeQuiz;
