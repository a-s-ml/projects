import * as React from 'react';

const Groups = React.lazy(() => import('groups/Module'));
const Answers = React.lazy(() => import('answers/Module'));
const Questions = React.lazy(() => import('questions/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Groups />
      <Answers />
      <Questions />
    </React.Suspense>
  );
}

export default App;
