import * as React from 'react';
const Groups = React.lazy(() => import('groups/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Groups />
    </React.Suspense>
  );
}

export default App;
