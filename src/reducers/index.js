import { combineReducers } from 'redux';

import userReducer from './user';
import searchReducer from './search';
import utilsReducer from './utils';
import inventoryReducer from './inventory';
import cartReducer from './cart';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  utils: utilsReducer,
  inventory: inventoryReducer,
  cart: cartReducer,
});

export default rootReducer;
