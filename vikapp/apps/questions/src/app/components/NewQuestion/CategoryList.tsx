import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { getQuestionCategory, selectQuestionCategory } from '@slice/questions';
import { useState } from 'react';
import { ICategory } from '@models';
import { useGetCategoryQuery } from '@api/category';
import { SimpleCategorySelect, ValidateForm } from '@components';

interface CategoryListProps {
  validate: (b: boolean) => void;
}

export function CategoryList({ validate }: CategoryListProps) {
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  console.log('questionCategory', questionCategory);
  const { data: allCategory } = useGetCategoryQuery('');
  console.log('data', allCategory);
  const dispatch = useQuestionDispatch();
  const [selectedCategory, setCategory] = useState(
    allCategory && questionCategory != 0
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
}
