import { useSelector } from 'react-redux';
import { selectAllQuiz } from './store/quiz.slice';
import Tabs from './components/Tabs';

export function App() {
  const entities = useSelector(selectAllQuiz);
  console.log('entities', entities);
  return (
    <div>
      <Tabs />
    </div>
  );
}

export default App;
