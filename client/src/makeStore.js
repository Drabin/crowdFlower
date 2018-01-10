import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/rootReducer.js';

export const makeStore = initialState => {
  const middlewares = [
    thunkMiddleware,
  ];

  const mw = compose(
    applyMiddleware(...middlewares),
  );

  const store = createStore(reducer, initialState, mw);
  return store;
};

export default makeStore;
