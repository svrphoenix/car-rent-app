import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App.jsx';
import { store, persistor } from './redux/store.js';
import GlobalStyle from './components/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/car-rent-app/">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
