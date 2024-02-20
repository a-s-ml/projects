import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import {
  getQuestionCategory,
  selectQuestionCategory,
} from '../../store/slices/questionApp.slice';
import { useState } from 'react';
import { ICategory } from '@models';
import { useGetCategoryQuery } from '@api/category';
import { SimpleCategorySelect } from '@components';

interface CategoryListProps {
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;

export function CategoryList({ onSubmit }: CategoryListProps) {
  const questionCategory = useQuestionSelector(selectQuestionCategory);
  const { data, isSuccess } = useGetCategoryQuery('');
  const dispatch = useQuestionDispatch();
  const [selectedCategory, setCategory] = useState(
    questionCategory != 0
      ? data?.find((id) => id.id === questionCategory)
      : { id: 0, name: ' ' }
  );

  const handleChange = (cat: ICategory) => { 
    setCategory(cat);
    dispatch(getQuestionCategory(cat.id));
  };

  if(selectedCategory?.id != 0) {
    tg.MainButton.setText('Следующий шаг');
    tg.MainButton.show();    
    tg.onEvent('mainButtonClicked', () => {
      tg.MainButton.hide();
      onSubmit;
    });
  } else {
    tg.MainButton.hide();
  }

  return (
    <div className="py-2">
      {isSuccess && (
        <SimpleCategorySelect
          value={selectedCategory ? selectedCategory : { id: 0, name: ' ' }}
          func={handleChange}
          data={data}
        />
      )}
    </div>
  );
}
