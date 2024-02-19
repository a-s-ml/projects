import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'react-redux';
import { storeQuestion } from '@store/questions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={storeQuestion}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
