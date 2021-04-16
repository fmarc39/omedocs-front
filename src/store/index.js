import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import auth from 'src/midlewares/auth';
import api from 'src/midlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware(auth, api));

const store = createStore(reducer, enhancers);

export default store;
