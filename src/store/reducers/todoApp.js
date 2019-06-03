import { combineReducers } from 'redux';

import todos from './todos';
import ui from './ui';

const todoApp = combineReducers({
    todos,
    ui
});

export default todoApp;