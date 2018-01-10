import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import makeStore from './makeStore.js';
import routes from './routes.js';

const store = makeStore();

render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>
  , document.getElementById('app')
);
