import { combineReducers } from 'redux';

import dataApiReducer from './dataApi';
import userReducer from './user';
import search from './search'

const rootReducer = combineReducers({
  dataApi: dataApiReducer,
  user: userReducer,
  search: search,
});

export default rootReducer;
