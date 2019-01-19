import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import TodoList from '../containers/TodoList';

class TodoListScreen extends Component {

    onOpenCreateTodoScreenHandler = () => {
        alert('onOpenCreateTodoScreenHandler')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={ this.onOpenCreateTodoScreenHandler }
                    title="Create"
                    color='#0069d9'
                />
                <TodoList />
            </View>
        );
    }
}

export default TodoListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});