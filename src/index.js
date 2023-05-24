import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Redux/store';
import ErrorBoundary from './Containers/ErrorBoundary';
import App from './App';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('constructor'));

root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);