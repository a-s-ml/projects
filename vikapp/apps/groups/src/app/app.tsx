import { AddGroup, Feedback, GlobalFooter, GlobalHeader } from '@components';

export function App() {
  return (
    <>
      <GlobalHeader children={<AddGroup />} />
      <b>Groups</b>
      <GlobalFooter children={<Feedback />} />
    </>
  );
}

export default App;
