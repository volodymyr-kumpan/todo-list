import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CreateTodo from '../containers/CreateTodo';

class CreateTodoScreen extends Component {
    static navigationOptions = {
        title: 'Create todo',
    };

    onTodoCreatedHandler = () => {
        this.props.navigation.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <CreateTodo onTodoCreated={this.onTodoCreatedHandler} />
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