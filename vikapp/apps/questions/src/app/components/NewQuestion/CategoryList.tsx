import { useGetCategoryQuery } from '@api/category';
import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useState } from 'react';
import { ICategory } from '@models';
import { SimpleCategorySelect, ValidateForm } from '@components';
import { getQuestionCategory, selectQuestionCategory } from '@slice/questions';
import { useGetTypeQuery } from '@api/type';

interface CategoryListProps {
  validate: (b: boolean) => void;
}

export const CategoryList = ({ validate }: CategoryListProps) => {
  const dispatch = useQuestionDispatch();
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  const { data: allType } = useGetTypeQuery('');
  console.log(allType);
  const { data: allCategory } = useGetCategoryQuery('');
  console.log('allCategory', allCategory);
  const [selectedCategory, setCategory] = useState(
    allCategory && questionCategory !== 0
      ? allCategory.find((id) => id.id === questionCategory)
      : { id: 0, name: '' }
  );
  console.log('selectedCategory', selectedCategory);

  const handleChange = (cat: ICategory) => {
    setCategory(cat);
    dispatch(getQuestionCategory(cat.id));
  };

  const [validCategory, setValidCategory] = useState(false);

  validCategory ? validate(true) : validate(false);

  return (
    <div className="py-2">
      <SimpleCategorySelect
        value={selectedCategory ? selectedCategory : { id: 0, name: ' ' }}
        func={handleChange}
        data={allCategory ? allCategory : [{ id: 0, name: ' ' }]}
      />
      <div className="py-4">
        <ValidateForm
          text={'Выберите подходящую категорию'}
          data={{
            value: selectedCategory ? selectedCategory.id : 0,
            lengthMin: 0,
            lengthMax: 0,
          }}
          validation={setValidCategory}
        />
      </div>
    </div>
  );
};

export default CategoryList;
