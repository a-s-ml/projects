import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { storeMain } from '@store/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={storeMain}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
