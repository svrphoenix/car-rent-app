// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store.js';
import GlobalStyle from './components/GlobalStyle.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/car-rent-app">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
