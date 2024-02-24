import { useGetGroupDbQuery } from '@api/group';
import {
  useGetTypeByIdQuery,
  useGetTypeQuery,
  useUpdateTypeGroupsMutation,
} from '@api/type';
import {
  Preloader,
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
      {loadingAllTypes && <Preloader />}
      {typeof typeState == 'number' && (
        <SimpleRadioGroup state={typeState} setState={setType}>
          <div className={`grid grid-cols-3 gap-2`}>
            {successAllTypes &&
              allTypes.map((item) => (
                <SimpleRadioGroupOption
                  id={item.id}
                  description={item.description}
                  active={item.active}
                  func={typeChanged}
                />
              ))}
          </div>
        </SimpleRadioGroup>
      )}
    </>
  );
};

export default TypeQuiz;
