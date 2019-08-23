import { combineReducers } from 'redux';

import todos from './todos';
import ui from './ui';

export default combineReducers({
    todos,
    ui
});