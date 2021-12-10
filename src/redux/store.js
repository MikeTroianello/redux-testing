import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ counterReducer }));

  return store;
};
