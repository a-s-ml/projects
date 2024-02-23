import { Provider } from 'react-redux';
import { storeQuiz } from './store/index';
import QuizPage from './components/QuizPage';

export const App = () => {
  return (
    <Provider store={storeQuiz}>
        <QuizPage />
      </Provider>
  );
};

export default App;
