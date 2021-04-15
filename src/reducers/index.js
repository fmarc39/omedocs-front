import { combineReducers } from 'redux';

import dataApiReducer from './dataApi';
import userReducer from './user';
import searchReducer from './search';
import utilsReducer from './utils';
import drugsApiReducer from './drugsApi';

const rootReducer = combineReducers({
  dataApi: dataApiReducer,
  user: userReducer,
  search: searchReducer,
  utils: utilsReducer,
  drugsApi: drugsApiReducer,
});

export default rootReducer;
