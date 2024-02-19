import { Provider } from 'react-redux';
import QuestionsPage from './components/QuestionsPage';
import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import {
  selectQuestionSlide,
  showQuestionSlide,
} from './store/slices/questionApp.slice';
import { SlidePage } from '@components';

export const App = () => {
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
    <Provider store={storeQuestion}>
      <QuestionsPage />
      <SlidePage slide={slide}>
        <p>Question</p>
      </SlidePage>
    </Provider>
  );
};

export default App;
