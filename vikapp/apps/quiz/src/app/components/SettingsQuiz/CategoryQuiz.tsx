import {
  useGetCategoryQuery,
  useGetCategoryGroupsQuery,
  useAddCategoryGroupsMutation,
  useDeleteCategoryGroupsMutation,
} from '@api/category';
import { SimpleCheckbox } from '@components'; 
import { inDevelopment } from '@utils';

export const CategoryQuiz = () => {
  const { data: allCategory } = useGetCategoryQuery('');
  const chat = 521884639;
  const { data: GroupCategory } = useGetCategoryGroupsQuery(
    chat as unknown as bigint
  );
  const [setCategory, {}] = useAddCategoryGroupsMutation();
  const [deleteCategory, {}] = useDeleteCategoryGroupsMutation();

  async function categoryChanged(check: boolean, category: number) {
    if (!check) {
      // await setCategory({ chat, category });
    }
    if (check) {
      // deleteCategory({ chat, category });
    }
  }

  return (
    <div className={`grid grid-cols-2 gap-2`}>
      {GroupCategory &&
        allCategory &&
        allCategory.map((item) => (
          <SimpleCheckbox
            key={item.id}
            data={item}
            disabled={item.id === 1001 || item.id === 85 ? true : false}
            checked={
              GroupCategory.find((itm) => itm.category === item.id)
                ? false
                : true
            }
            func={categoryChanged}
          />
        ))}
      <SimpleCheckbox
        data={{ id: 999, name: 'Добавить' }}
        checked={false}
        disabled={true}
        func={inDevelopment}
      />
    </div>
  );
};

export default CategoryQuiz;
