import * as React from 'react';
import { Components } from '@vikapp/components';
const Groups = React.lazy(() => import('groups/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <>
        <Components />
      </>
      <Groups />
    </React.Suspense>
  );
}

export default App;
