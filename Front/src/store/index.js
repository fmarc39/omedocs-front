import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import axios from 'src/midlewares/axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware(axios));

const store = createStore(reducer, enhancers);

export default store;
