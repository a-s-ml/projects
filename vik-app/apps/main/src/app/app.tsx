import * as React from 'react'

const Groups = React.lazy(() => import('groups/Module'))
const Answers = React.lazy(() => import('answers/Module'))
const Questions = React.lazy(() => import('questions/Module'))
const Quiz = React.lazy(() => import('quiz/Module'))

export function App() {
  return (
		<React.Suspense fallback={null}>
			<Groups />
			<Answers />
			<Questions />
			<Quiz />
		</React.Suspense>
  );
}

export default App;
