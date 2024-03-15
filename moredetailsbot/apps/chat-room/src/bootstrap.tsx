import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { storeChatRoom } from '@store/chat-room';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={storeChatRoom}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
