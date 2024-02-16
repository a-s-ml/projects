import { Provider } from 'react-redux';
import GroupsPage from './components/GroupsPage';
import { storeGroups } from './store';

export const App = () => {
  return (
    <Provider store={storeGroups}>
      <GroupsPage />
    </Provider>
  );
};

export default App;
