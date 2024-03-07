import { useCountCategoryQuery, useGetCategoryQuery } from '@api/category';
import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useState } from 'react';
import { ICategory } from '@models';
import { SimpleCategorySelect, ValidateForm } from '@components';
import { getQuestionCategory, selectQuestionCategory } from '@slice/questions';

interface CategoryListProps {
  validate: (b: boolean) => void;
}

export const CategoryList = ({ validate }: CategoryListProps) => {
  const dispatch = useQuestionDispatch();
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  const { data: allCategory } = useGetCategoryQuery('');
  const { data: countCategory } = useCountCategoryQuery('');
  console.log('countCategory', countCategory);
  const [selectedCategory, setCategory] = useState(
    questionCategory !== 0
      ? allCategory?.find((id) => id.id === questionCategory)
      : { id: 0, name: '' }
  );

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
