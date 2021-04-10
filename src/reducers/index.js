import { combineReducers } from 'redux';

import dataApiReducer from './dataApi';
import userReducer from './user';

const rootReducer = combineReducers({
  dataApi: dataApiReducer,
  user: userReducer,
});

export default rootReducer;
