import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/app';
import { storeGroups } from '@store/groups';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Provider store={storeGroups}>
    <StrictMode>
      <App />
    </StrictMode>
  // </Provider>
);
