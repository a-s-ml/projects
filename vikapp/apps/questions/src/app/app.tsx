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
  return (
    <>
      <Provider store={storeQuestion}>
        <QuestionsPage />
      </Provider>
    </>
  );
};

export default App;
