import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducer from './reducers/rootReducer.js';

export const makeStore = initialState => {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory),
  ];

  const mw = compose(
    applyMiddleware(...middlewares),
  );

  const store = createStore(reducer, initialState, mw);
  return store;
};

export default makeStore;
