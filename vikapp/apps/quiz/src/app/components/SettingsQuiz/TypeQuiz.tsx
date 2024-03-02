import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTypeByIdQuery,
  useGetTypeQuery,
  useUpdateTypeGroupsMutation,
} from '@api/type';
import {
  Preloader,
  SimpleCheckbox,
  SimpleRadioGroup,
  SimpleRadioGroupOption,
} from '@components';
import { useState } from 'react';

export const TypeQuiz = () => {
  const {
    data: allTypes,
    isLoading: loadingAllTypes,
    isSuccess: successAllTypes,
  } = useGetTypeQuery('');
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
      {allTypes && typeof typeState == 'number' && (
        <SimpleRadioGroup state={typeState} setState={setType}>
          <div className={`grid grid-cols-3 gap-2`}>
            {loadingAllTypes && <Preloader />}
            {/* {successAllTypes &&
              allTypes.map((item) => (
                <SimpleRadioGroupOption
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  active={Boolean(item.active)}
                  func={typeChanged}
                />
              ))} */}
            {GroupType &&
              allTypes &&
              allTypes.map((item) => (
                <SimpleCheckbox
                  key={item.id}
                  data={item}
                  disabled={item.id === 1001 || item.id === 85 ? true : false}
                  checked={
                    allTypes.find((itm) => itm.id === item.id) ? false : true
                  }
                  func={() => console.log()}
                />
              ))}
          </div>
        </SimpleRadioGroup>
      )}
    </>
  );
};

export default TypeQuiz;
