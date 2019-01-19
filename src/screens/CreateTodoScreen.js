import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CreateTodo from '../containers/CreateTodo';

class CreateTodoScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CreateTodo />
            </View>
        );
    }
}

export default CreateTodoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});