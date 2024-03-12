import { useGetGroupDbQuery } from '@api/group';
import { nightTimeConst } from '../../const/nightTime.const';
import { useGetTimeByIdQuery } from '@api/period';
import { useState } from 'react';
import { SimpleSwitchButton } from '@components';

export const TimeQuiz = () => {
  const chat = 521884639;
  const allTimes = [
    { id: 0, name: "00:00", night: true },
    { id: 1, name: "01:00", night: true },
    { id: 2, name: "02:00", night: true },
    { id: 3, name: "03:00", night: true },
    { id: 4, name: "04:00", night: true },
    { id: 5, name: "05:00", night: true },
    { id: 6, name: "06:00", night: true },
    { id: 7, name: "07:00", night: true },
    { id: 8, name: "08:00", night: true },
    { id: 9, name: "09:00", night: false },
    { id: 10, name: "10:00", night: false },
    { id: 11, name: "11:00", night: false },
    { id: 12, name: "12:00", night: false },
    { id: 13, name: "13:00", night: false },
    { id: 14, name: "14:00", night: false },
    { id: 15, name: "15:00", night: false },
    { id: 16, name: "16:00", night: false },
    { id: 17, name: "17:00", night: false },
    { id: 18, name: "18:00", night: false },
    { id: 19, name: "19:00", night: false },
    { id: 20, name: "20:00", night: false },
    { id: 21, name: "21:00", night: false },
    { id: 22, name: "22:00", night: false },
    { id: 23, name: "23:00", night: true },
  ];
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
  console.log('sfsf')

  return (
    <>
      <SimpleSwitchButton
        label={'Публикация вопросов ночью'}
        enabled={nightNode}
        setEnabled={setNightNode}
      />
      <div className={`grid grid-cols-6 gap-2`}>
        {allTimes.map((time) => (
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
