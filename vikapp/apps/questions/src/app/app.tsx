import { Provider } from 'react-redux';
import QuestionsPage from './components/QuestionsPage';
import { storeQuestion } from '@store/questions';

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
