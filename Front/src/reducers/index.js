import { combineReducers } from 'redux';

import dataApiReducer from './dataApi';
import userReducer from './user';
import search from './search';
import utils from './utils';

const rootReducer = combineReducers({
  dataApi: dataApiReducer,
  user: userReducer,
  search: search,
  utils: utils,
});

export default rootReducer;
