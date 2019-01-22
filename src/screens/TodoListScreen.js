import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TodoList from '../containers/TodoList';
import { BaseButton } from '../ui';
import Colors from '../constants/Colors';

class TodoListScreen extends Component {
    static navigationOptions = {
        title: 'Todo list',
    };

    onOpenCreateTodoScreenHandler = () => {
        this.props.navigation.push('CreateTodo');
    }

    render() {
        return (
            <View style={styles.container}>
                <BaseButton
                    onPress={this.onOpenCreateTodoScreenHandler}
                    color={Colors.Primary}
                >
                    Create
                </BaseButton>
                <TodoList />
            </View>
        );
    }
}

export default TodoListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: Colors.Background
    }
});