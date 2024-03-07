import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import {
  getQuestionCategory,
  selectQuestionCategory,
} from '../../store/slices/questionApp.slice';
import { useState } from 'react';
import { ICategory } from '@models';
import { useGetCategoryQuery } from '@api/category';
import { SimpleCategorySelect, ValidateForm } from '@components';

interface CategoryListProps {
  validate: (b: boolean) => void;
}

export const CategoryList = ({ validate }: CategoryListProps) => {
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  const { data, isSuccess } = useGetCategoryQuery('');
  console.log('isSuccess', isSuccess);
  const dispatch = useQuestionDispatch();
  const [selectedCategory, setCategory] = useState(
    isSuccess && questionCategory != 0
      ? data.find((id) => id.id === questionCategory)
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
      {isSuccess && (
        <SimpleCategorySelect
          value={selectedCategory ? selectedCategory : { id: 0, name: ' ' }}
          func={handleChange}
          data={data}
        />
      )}
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
