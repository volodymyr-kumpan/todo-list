import { createStore, compose } from 'redux';

import todoApp from './reducers/todoApp';

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(todoApp, composeEnhancers());

export default store;