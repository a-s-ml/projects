import { Provider } from 'react-redux';
import { storeQuestion } from '@store/questions';
import QuestionsPage from './components/QuestionsPage';

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
