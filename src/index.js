import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={2000}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
