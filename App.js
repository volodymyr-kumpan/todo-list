import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import store from './src/store/store';

import TodoListScreen from './src/screens/TodoListScreen';
import CreateTodoScreen from './src/screens/CreateTodoScreen';

const RootStack = createStackNavigator(
    {
        TodoList: TodoListScreen,
        CreateTodo: CreateTodoScreen,
    },
    {
        initialRouteName: 'TodoList',
    }
);

const AppContainer = createAppContainer(RootStack);

export default App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);