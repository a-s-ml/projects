import QuestionsPage from './components/QuestionsPage';
import { QuestionList } from './components/QuestionList';
import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import {
  selectQuestionSlide,
  showQuestionSlide,
} from './store/slices/questionApp.slice';
import { useValidateQuery } from '@api/vik';
import { Preloader, SlidePage } from '@components';
import { Provider } from 'react-redux';

export function App() {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();
  const slide = useQuestionSelector(selectQuestionSlide);

  if (slide) {
    tg.BackButton.show();
    tg.onEvent('backButtonClicked', () => {
      dispatch(showQuestionSlide(false));
    });
  }

  return (
    <>
      <Provider store={storeQuestion}>
        <QuestionList />
        <SlidePage slide={slide}>
          <p>Question</p>
        </SlidePage>
      </Provider>
    </>
  );
}

export default App;
