import { useSelector } from 'react-redux';
import { selectAllQuiz } from './store/quiz.slice';

export function App() {
  const entities = useSelector(selectAllQuiz);
  console.log('entities', entities);
  return (
    <div>
      <b>Quiz</b>
    </div>
  );
}

export default App;
