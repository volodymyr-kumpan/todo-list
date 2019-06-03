import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoApp from './reducers/todoApp';

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(todoApp, composeEnhancers(applyMiddleware(thunk)));

export default store;