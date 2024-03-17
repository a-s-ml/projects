import { Provider } from 'react-redux';
import { storeChatRoom } from './store';
import MainPage from './components/MainPage';
import React from 'react';

export const App = () => {
  const tg = window.Telegram.WebApp;
  
  React.useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  return (
    <Provider store={storeChatRoom}>
      <MainPage />
    </Provider>
  );
};

export default App;
