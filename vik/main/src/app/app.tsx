import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Groups = React.lazy(() => import('groups/Module'));

const Answers = React.lazy(() => import('answers/Module'));

const Questions = React.lazy(() => import('questions/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/answers">Answers</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/groups" element={<Groups />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
