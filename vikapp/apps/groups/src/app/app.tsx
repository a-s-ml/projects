import { AddGroup, Feedback, GlobalFooter, GlobalHeader } from '@components';

export function App() {
  return (
    <>
      <GlobalHeader>
        <AddGroup />
      </GlobalHeader>
      <b>Groups</b>
      <GlobalFooter>
        <Feedback />
      </GlobalFooter>
    </>
  );
}

export default App;
