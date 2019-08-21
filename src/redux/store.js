import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//You can set any number of middleware for redux, so the argument for this middleware is passed in as an array.
//You could also have possed in thunk or something along with logger.
const middleware = [logger];

//create store takes in the root reducer and the result of apply middleware as the second argument
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;