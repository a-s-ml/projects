import { Provider } from 'react-redux';
import { storeChatRoom } from './store';
import MainPage from './components/MainPage';

export const App = () => {
  return (
    <Provider store={storeChatRoom}>
      <MainPage />
    </Provider>
  );
};

export default App;
