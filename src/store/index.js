import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import auth from 'src/midlewares/auth';
import product from 'src/midlewares/product';
import api from 'src/midlewares/api';
import inventory from 'src/midlewares/inventory';
import inscription from '../midlewares/inscription';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(
  applyMiddleware(auth, api, inscription, product, inventory)
);

const store = createStore(reducer, enhancers);

export default store;
