import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store/store';
import {name as appName} from '../../app.json';

import TodoListScreen from '../screens/TodoListScreen';

const TodoListScreenRedux = () => (
    <Provider store={ store }>
        <TodoListScreen />
    </Provider>
);

AppRegistry.registerComponent(appName, () => TodoListScreenRedux);