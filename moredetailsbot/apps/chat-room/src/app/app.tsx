import { Provider } from 'react-redux';
import Chat from './components/Chat';
import { storeChatRoom } from './store';

export const App = () => {
  return (
    <Provider store={storeChatRoom}>
      <Chat />
    </Provider>
  );
};

export default App;
