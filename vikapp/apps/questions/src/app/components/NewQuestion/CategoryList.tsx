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
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;

export function CategoryList({ onSubmit }: CategoryListProps) {
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  const { data, isSuccess } = useGetCategoryQuery('');
  const dispatch = useQuestionDispatch();
  const [selectedCategory, setCategory] = useState(
    questionCategory != 0 && typeof data === 'object'
      ? data.find((id) => id.id === questionCategory)
      : { id: 0, name: '' }
  );

  const handleChange = (cat: ICategory) => {
    setCategory(cat);
    dispatch(getQuestionCategory(cat.id));
  };

  const validation = (approval: boolean) => {
    approval
      ? (tg.MainButton.setText('Следующий шаг'),
        tg.MainButton.show(),
        tg.onEvent('mainButtonClicked', onSubmit))
      : tg.MainButton.hide();
  };

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
          text={
            'Выберите подходящую категорию'
          }
          data={{
            value: selectedCategory ? selectedCategory.id : 0,
            lengthMin: 0,
            lengthMax: 0,
          }}
          validation={validation}
        />
      </div>
    </div>
  );
}
